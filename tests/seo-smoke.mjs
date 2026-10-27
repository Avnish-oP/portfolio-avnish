import assert from "node:assert/strict";
const base = process.env.PREVIEW_URL || "http://127.0.0.1:3000";
const canonical = "https://www.avnishgupta.dev";
const sitemap = await (await fetch(`${base}/sitemap.xml`)).text();
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(
  (match) => match[1],
);
assert.ok(urls.length >= 17);
for (const url of urls) {
  assert.ok(url.startsWith(canonical));
  const path = new URL(url).pathname;
  const response = await fetch(`${base}${path}`);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.equal(
    (html.match(/<h1[\s>]/g) || []).length,
    1,
    `${path}: exactly one h1 in server HTML`,
  );
  const canonicalMatch = html.match(/rel="canonical" href="([^"]+)"/);
  assert.ok(canonicalMatch, `${path}: canonical exists`);
  assert.equal(
    new URL(canonicalMatch[1]).href,
    new URL(`${canonical}${path}`).href,
    `${path}: canonical`,
  );
  assert.ok(
    /<meta name="description" content="[^"]+"/.test(html),
    `${path}: description`,
  );
  for (const [, json] of html.matchAll(
    /<script type="application\/ld\+json">(.*?)<\/script>/gs,
  ))
    JSON.parse(json);
  assert.ok(
    !html.includes("95% reduction"),
    `${path}: no unsupported security claims`,
  );
  console.log(`OK ${path}`);
}
for (const path of [
  "/projects/indiana",
  "/projects/truelens-international",
  "/projects/does-not-exist",
  "/services/does-not-exist",
  "/blogs/does-not-exist",
])
  assert.equal((await fetch(`${base}${path}`)).status, 404, path);
assert.ok(!sitemap.includes("/projects/indiana"));
const image = await fetch(`${base}/opengraph-image`);
assert.equal(image.status, 200);
assert.ok(image.headers.get("content-type").includes("image/png"));
const pdf = await fetch(`${base}/Resume-Avnish.pdf`);
assert.equal(pdf.status, 200);
assert.ok(pdf.headers.get("content-type").includes("application/pdf"));
const { get } = await import("node:http");
const redirect = await new Promise((resolve, reject) => {
  get(base, { headers: { Host: "avnishgupta.dev" } }, (response) => {
    response.resume();
    resolve(response);
  }).on("error", reject);
});
assert.equal(redirect.statusCode, 308);
assert.equal(new URL(redirect.headers.location).href, canonical + "/");
console.log(
  "PASS: published pages, server-rendered headings, canonicals, JSON-LD, draft 404s, social image, résumé and host redirect.",
);
