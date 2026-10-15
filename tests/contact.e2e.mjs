// Contact form: rate limit and HTML/control-character handling, in a real browser.
// Run against `next start`: BASE=http://localhost:3100 node tests/contact.e2e.mjs
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
import assert from "node:assert/strict";

const BASE = process.env.BASE || "http://localhost:3100";
const b = await chromium.launch();
const ctx = await b.newContext({ reducedMotion: "reduce", extraHTTPHeaders: { "x-forwarded-for": `198.51.100.${Math.floor(Math.random() * 200)}` } });
const page = await ctx.newPage();
let xssFired = false;
page.on("dialog", (d) => { xssFired = true; d.dismiss(); });

const texts = [];
for (let i = 0; i < 6; i++) {
  await page.goto(BASE + "/contact");
  await page.fill('input[name="name"]', '<img src=x onerror=alert(1)>Test');
  await page.fill('input[name="email"]', "qa@example.com");
  await page.fill('textarea[name="message"]', "Security test message\r\n<script>alert(1)</script>");
  await page.click('button[type="submit"]');
  await page.waitForTimeout(1500);
  texts.push(await page.locator("form").innerText());
}
await b.close();
assert.ok(texts[5].includes("Too many messages"), "6th submission must be rate limited");
assert.ok(!texts[0].includes("Too many messages"), "1st submission must not be rate limited");
assert.equal(xssFired, false, "echoed values must not execute");
console.log("contact e2e: OK");
