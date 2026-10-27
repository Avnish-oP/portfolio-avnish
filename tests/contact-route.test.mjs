import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import ts from "typescript";
const require = createRequire(import.meta.url);
const moduleUrl = (source) =>
  `data:text/javascript;base64,${Buffer.from(ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText).toString("base64")}`;
const enquiry = moduleUrl(
  await readFile(new URL("../src/lib/enquiry.ts", import.meta.url), "utf8"),
);
let source = await readFile(
  new URL("../src/app/api/send-message/route.ts", import.meta.url),
  "utf8",
);
source = source
  .replace(
    /import nodemailer from ['"]nodemailer['"];?/,
    "const nodemailer = globalThis.__portfolioMailMock;",
  )
  .replace(
    /from ['"]next\/server['"]/,
    `from '${pathToFileURL(require.resolve("next/server")).href}'`,
  )
  .replace(/from ['"]@\/lib\/enquiry['"]/, `from '${enquiry}'`);
let sent = 0;
let mailOptions;
let mode = "success";
globalThis.__portfolioMailMock = {
  createTransport: () => ({
    sendMail: async (options) => {
      sent++;
      mailOptions = options;
      if (mode === "smtp-failure") throw new Error("test failure");
      return { accepted: mode === "rejected" ? [] : ["owner@example.com"] };
    },
  }),
};
const { POST } = await import(moduleUrl(source));
const valid = {
  name: "Test Buyer",
  email: "buyer@example.com",
  message: "Please build an internal customer portal.",
};
const request = (body = valid, headers = {}) =>
  new Request("http://localhost:3000/api/send-message", {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: typeof body === "string" ? body : JSON.stringify(body),
  });
test("contact route validates requests and only reports accepted delivery", async (t) => {
  const keys = [
    "SMTP_HOST",
    "SMTP_PORT",
    "SMTP_USER",
    "SMTP_PASSWORD",
    "CONTACT_TO_EMAIL",
    "UPSTASH_REDIS_REST_URL",
    "UPSTASH_REDIS_REST_TOKEN",
    "CONTACT_RATE_LIMIT_SECRET",
  ];
  const saved = Object.fromEntries(keys.map((key) => [key, process.env[key]]));
  const originalFetch = globalThis.fetch;
  try {
    for (const key of keys) delete process.env[key];
    await t.test("unconfigured valid enquiry fails closed", async () => {
      assert.equal((await POST(request())).status, 503);
      assert.equal(sent, 0);
    });
    await t.test(
      "invalid payload, honeypot, origin and content type are rejected",
      async () => {
        for (const body of [
          "{broken",
          { ...valid, email: "invalid" },
          { ...valid, website: "bot" },
        ])
          assert.equal((await POST(request(body))).status, 400);
        assert.equal(
          (await POST(request(valid, { origin: "https://other.example" })))
            .status,
          403,
        );
        assert.equal(
          (await POST(request(valid, { "Content-Type": "text/plain" }))).status,
          415,
        );
        assert.equal((await POST(request("x".repeat(20001)))).status, 413);
        assert.equal(sent, 0);
      },
    );
    Object.assign(process.env, {
      SMTP_HOST: "smtp.example.com",
      SMTP_PORT: "465",
      SMTP_USER: "owner@example.com",
      SMTP_PASSWORD: "test-only",
      CONTACT_TO_EMAIL: "owner@example.com",
      UPSTASH_REDIS_REST_URL: "https://redis.example.com",
      UPSTASH_REDIS_REST_TOKEN: "test-only",
      CONTACT_RATE_LIMIT_SECRET: "test-only",
    });
    globalThis.fetch = async () => Response.json({ result: 1 });
    await t.test(
      "acceptance uses authenticated sender and visitor replyTo",
      async () => {
        const response = await POST(request());
        assert.equal(response.status, 200);
        assert.equal((await response.json()).success, true);
        assert.equal(mailOptions.from, "owner@example.com");
        assert.equal(mailOptions.replyTo, "buyer@example.com");
      },
    );
    await t.test("rate limiting prevents mail", async () => {
      const before = sent;
      globalThis.fetch = async () => Response.json({ result: 100 });
      const response = await POST(request());
      assert.equal(response.status, 429);
      assert.equal(response.headers.get("retry-after"), "3600");
      assert.equal(sent, before);
    });
    await t.test("limiter outage fails closed", async () => {
      const before = sent;
      globalThis.fetch = async () =>
        Response.json({ error: "unavailable" }, { status: 503 });
      assert.equal((await POST(request())).status, 503);
      assert.equal(sent, before);
    });
    globalThis.fetch = async () => Response.json({ result: 1 });
    await t.test(
      "SMTP failures and rejected recipients never report success",
      async () => {
        mode = "smtp-failure";
        assert.equal((await POST(request())).status, 503);
        mode = "rejected";
        assert.equal((await POST(request())).status, 503);
      },
    );
  } finally {
    globalThis.fetch = originalFetch;
    delete globalThis.__portfolioMailMock;
    for (const key of keys) {
      if (saved[key] === undefined) delete process.env[key];
      else process.env[key] = saved[key];
    }
  }
});
