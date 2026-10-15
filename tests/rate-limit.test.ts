// Run: node --experimental-strip-types --test tests/rate-limit.test.ts
import { test } from "node:test";
import assert from "node:assert/strict";

import { __resetRateLimit, clientKey, rateLimit } from "../src/lib/rate-limit.ts";

test("allows up to max requests in the window, then blocks", () => {
  __resetRateLimit();
  const opts = { max: 5, windowMs: 60_000 };
  for (let i = 0; i < 5; i++) assert.equal(rateLimit("ip:1", opts, 1000).ok, true);
  assert.equal(rateLimit("ip:1", opts, 1000).ok, false);
});

test("window resets after windowMs", () => {
  __resetRateLimit();
  const opts = { max: 1, windowMs: 1000 };
  assert.equal(rateLimit("ip:2", opts, 0).ok, true);
  assert.equal(rateLimit("ip:2", opts, 500).ok, false);
  assert.equal(rateLimit("ip:2", opts, 1001).ok, true);
});

test("keys are independent", () => {
  __resetRateLimit();
  const opts = { max: 1, windowMs: 1000 };
  assert.equal(rateLimit("a", opts, 0).ok, true);
  assert.equal(rateLimit("b", opts, 0).ok, true);
});

test("clientKey uses the first X-Forwarded-For hop and caps length", () => {
  assert.equal(clientKey(new Headers({ "x-forwarded-for": "203.0.113.9, 10.0.0.1" })), "203.0.113.9");
  assert.equal(clientKey(new Headers({ "x-real-ip": "198.51.100.4" })), "198.51.100.4");
  assert.equal(clientKey(new Headers()), "unknown");
  assert.equal(clientKey(new Headers({ "x-forwarded-for": "x".repeat(500) })).length, 64);
});
