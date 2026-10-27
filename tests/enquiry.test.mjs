import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";
const source = await readFile(
  new URL("../src/lib/enquiry.ts", import.meta.url),
  "utf8",
);
const compiled = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2022,
  },
}).outputText;
const { validateEnquiry, enquiryText } = await import(
  `data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`
);
const valid = {
  name: "Example Buyer",
  email: "buyer@example.com",
  message: "We need a portal for customer requests.",
};
test("accepts a minimal enquiry and normalises optional fields", () => {
  const result = validateEnquiry(valid);
  assert.equal(result.ok, true);
  assert.equal(result.data.budget, "");
});
test("rejects invalid email and header injection", () => {
  assert.equal(validateEnquiry({ ...valid, email: "not-an-email" }).ok, false);
  assert.equal(
    validateEnquiry({ ...valid, name: "Name\r\nBcc: attacker@example.com" }).ok,
    false,
  );
});
test("rejects oversized, malformed and incomplete submissions", () => {
  for (const value of [
    null,
    [],
    {},
    { ...valid, message: "a".repeat(5001) },
    { ...valid, budget: {} },
    { ...valid, message: "Too short" },
  ])
    assert.equal(validateEnquiry(value).ok, false);
});
test("validates service and currency without imposing a budget minimum", () => {
  assert.equal(validateEnquiry({ ...valid, service: "invented" }).ok, false);
  assert.equal(validateEnquiry({ ...valid, currency: "EUR" }).ok, false);
  assert.equal(
    validateEnquiry({ ...valid, currency: "INR", budget: "Not sure yet" }).ok,
    true,
  );
});
test("mail content includes the project context and optional fields", () => {
  const result = validateEnquiry({
    ...valid,
    service: "backend-development",
    existingSystem: "A spreadsheet",
    currency: "USD",
    budget: "1000–2000",
  });
  assert.equal(result.ok, true);
  const text = enquiryText(result.data);
  assert.match(text, /A spreadsheet/);
  assert.match(text, /USD 1000–2000/);
  assert.match(text, /portal/);
});
