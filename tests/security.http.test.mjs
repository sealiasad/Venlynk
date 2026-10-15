// Black-box checks against a running production build.
// Run: npm run build && npx next start -p 3100 & BASE=http://localhost:3100 node --test tests/security.http.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";

const BASE = process.env.BASE || "http://localhost:3100";
const get = (p, init = {}) => fetch(BASE + p, { redirect: "manual", ...init });

test("security headers are present on every page", async () => {
  for (const p of ["/", "/contact", "/company-profile", "/does-not-exist"]) {
    const r = await get(p);
    const h = r.headers;
    const csp = h.get("content-security-policy") || "";
    assert.match(csp, /default-src 'self'/, `${p} CSP`);
    assert.match(csp, /frame-ancestors 'none'/, `${p} frame-ancestors`);
    assert.match(csp, /object-src 'none'/, `${p} object-src`);
    assert.match(csp, /form-action 'self'/, `${p} form-action`);
    assert.match(h.get("strict-transport-security") || "", /max-age=63072000/, `${p} HSTS`);
    assert.equal(h.get("x-content-type-options"), "nosniff");
    assert.equal(h.get("x-frame-options"), "DENY");
    assert.equal(h.get("referrer-policy"), "strict-origin-when-cross-origin");
    assert.match(h.get("permissions-policy") || "", /camera=\(\)/);
    assert.equal(h.get("cross-origin-opener-policy"), "same-origin");
    assert.equal(h.get("x-powered-by"), null, `${p} must not advertise Next.js`);
  }
});

test("image optimiser refuses remote URLs (SSRF)", async () => {
  for (const u of ["https://example.com/a.png", "http://169.254.169.254/latest/meta-data/", "//evil.example/x.png"]) {
    const r = await get(`/_next/image?url=${encodeURIComponent(u)}&w=64&q=75`);
    assert.ok(r.status >= 400 && r.status < 500, `${u} → ${r.status}`);
  }
});

test("no secrets or source files are served (path traversal)", async () => {
  for (const p of ["/.env", "/.env.local", "/.git/config", "/package.json", "/next.config.ts", "/..%2f..%2fetc%2fpasswd", "/%2e%2e/%2e%2e/etc/passwd", "/_next/../.env.local"]) {
    const r = await get(p);
    assert.ok([400, 403, 404].includes(r.status), `${p} → ${r.status}`);
    const body = await r.text();
    assert.ok(!/RESEND_API_KEY|root:x:0:0|\[core\]/.test(body), `${p} leaked content`);
  }
});

test("redirects never leave the site (open redirect)", async () => {
  for (const p of ["//evil.example", "/\\evil.example", "/approach?next=https://evil.example", "/%2F%2Fevil.example"]) {
    const r = await get(p);
    const loc = r.headers.get("location");
    if (loc) assert.ok(!/evil\.example/.test(new URL(loc, BASE).host), `${p} → ${loc}`);
  }
});

test("server actions reject cross-origin posts and unknown ids without stack traces", async () => {
  const r = await get("/contact", {
    method: "POST",
    headers: { "Next-Action": "0".repeat(42), Origin: "https://evil.example", "Content-Type": "text/plain" },
    body: "[]",
  });
  assert.ok(r.status >= 400, `status ${r.status}`);
  const body = await r.text();
  assert.ok(!/at \w+ \(|node_modules|\.ts:\d+/.test(body), "stack trace leaked");
});

test("404 page does not leak stack traces", async () => {
  const r = await get("/work/%3Cscript%3Ealert(1)%3C%2Fscript%3E");
  assert.equal(r.status, 404);
  const body = await r.text();
  assert.ok(!body.includes("<script>alert(1)</script>"), "reflected XSS");
  assert.ok(!/node_modules|at \w+ \(/.test(body));
});
