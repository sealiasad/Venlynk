# Venlynk website security audit

**Date:** 15 October 2026
**Scope:** source repository `sealiasad/Venlynk` (Next.js 16 App Router), its dependencies and build config, plus the live hosts https://venlynk.com (Hostinger) and https://venlynk.vercel.app.
**Backup:** git tag `pre-security-audit-backup` (main before any change). All work was done on branch `security-audit`.
**Secrets:** `.env.local` was never opened or printed. Scans report file, line and rule only, never values.

## What the site is, security-wise

The site is a static marketing site with one server-side entry point, the contact form server action (`src/app/(site)/contact/actions.ts`). It has:

- no database
- no login, sessions or cookies
- no API routes
- no file uploads
- no shell or file-system access driven by user input

Dynamic routes (`/work/[slug]`, `/services/[slug]`, …) look up content from a fixed list and call `notFound()` for anything else.

## Before and after

| Check | Before | After |
|---|---|---|
| `npm audit` (all) | 9: **1 critical**, 8 high | 5 high, all inside the dev-only lint tool (see F2) |
| `npm audit --omit=dev` (what ships) | 1 critical (next) | **0** |
| `npm outdated` | 12 packages | 5, all major-version jumps with no security fix (see F12) |
| Secret scan (tree + full git history) | 0 secrets | 0 secrets |
| Security header test (`tests/security.http.test.mjs`) | fails: no CSP, no HSTS on venlynk.com, `x-powered-by: Next.js` | 6/6 pass |
| Rate-limit unit test (`tests/rate-limit.test.ts`) | no limiter existed | 4/4 pass |
| Contact form e2e (`tests/contact.e2e.mjs`) | unlimited submissions | 6th submission in 10 min blocked; echoed HTML not executed |
| Console/CSP errors on 10 key pages at desktop and mobile size | n/a | 0 |
| `tsc`, `eslint`, `next build` | pass | pass |

## Findings

### F1 · Critical · Next.js 16.3.1 has known remote-code-execution and SSRF flaws
- **Where:** `package.json` line 14, `"next": "16.3.1"`.
- **Why it's dangerous:** the advisories include:
  - RCE in the image optimiser when AVIF is used (GHSA-2xp9-vwfh-vxw4). This site enables AVIF in `next.config.ts`.
  - RCE in `next/og` `ImageResponse` (GHSA-vcvr-r3jv-pc5j). This site uses it in `src/app/opengraph-image.tsx`.
  - SSRF in image optimisation (GHSA-cjq9-62q9-8jv4).
  - Cache poisoning of static pages (GHSA-4jqv-mc3x-m676, GHSA-mcj8-r9mp-w47p).
  - Information disclosure in metadata image routes (GHSA-f87g-xv8r-7p7x).

  Hostinger runs the app as a self-hosted Node server, which is exactly where most of these apply.
- **Fix:** `next` and `eslint-config-next` 16.4.1. React 19.3.1 and @react-three/fiber 9.8.2 were upgraded with them.
- **Breaking:** no. This is a minor release. Typecheck, lint and build pass, and 10 pages render with no console errors.
- **Test:** `npm audit --omit=dev` reports 0 vulnerabilities.

### F2 · Low (dev-only) · Transitive DoS advisories in build tooling
- **Where:** `package-lock.json`:
  - `brace-expansion`, `js-yaml` and `source-map-js` are now fixed by `npm audit fix`.
  - `braces` → `micromatch` → `fast-glob` → `@next/eslint-plugin-next` is still flagged.
- **Why:** these are CPU or stack exhaustion bugs that only trigger on crafted glob or YAML input. They run only on a developer machine during `npm run lint`, never in the deployed site.
- **Fix:** no patched `braces` exists yet; npm's only suggestion is downgrading to eslint-config-next 14, which is wrong for Next 16. Leave it and re-run `npm audit` monthly.
- **Breaking:** n/a.
- **Test:** `npm audit --omit=dev` returns 0.

### F3 · Medium · No Content-Security-Policy or HSTS
- **Where:** `next.config.ts` lines 7–18 (before). venlynk.com sent only Hostinger's `content-security-policy: upgrade-insecure-requests` and no `Strict-Transport-Security`.
- **Why:**
  - Without a CSP, any injected script runs with full rights.
  - Without HSTS, a visitor's first plain-http request can be intercepted before the HTTPS redirect.
- **Fix:** `next.config.ts` now sends:
  - A strict first-party CSP: `default-src 'self'`, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, `frame-ancestors 'none'`, `frame-src 'none'`.
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`.
  - `Cross-Origin-Opener-Policy: same-origin`.
  - A wider `Permissions-Policy`.
  - `X-Permitted-Cross-Domain-Policies: none`.
- **Breaking:** possible if a third-party script, font, iframe or analytics tag is added later; it must then be added to the CSP. Nothing on the site today loads from another origin. `includeSubDomains` means every venlynk.com subdomain must serve HTTPS.
- **Test:** `tests/security.http.test.mjs`, test 1.

### F4 · Low · Clickjacking defence only allowed same-origin framing
- **Where:** `next.config.ts` line 15 (before), `X-Frame-Options: SAMEORIGIN`.
- **Fix:** `X-Frame-Options: DENY` plus CSP `frame-ancestors 'none'`.
- **Breaking:** the site can no longer be framed, even by itself. It doesn't frame itself.
- **Test:** `tests/security.http.test.mjs`, test 1.

### F5 · Low · Framework fingerprinting
- **Where:** `x-powered-by: Next.js` on every response (Next's default).
- **Fix:** `poweredByHeader: false`.
- **Breaking:** no.
- **Test:** `tests/security.http.test.mjs` test 1 asserts the header is absent.

### F6 · Medium · Contact form had no rate limit (spam and email bombing)
- **Where:** `src/app/(site)/contact/actions.ts` line 28 (before), `sendInquiry`.
- **Why:** a script could post the form thousands of times. That floods the inbox, burns the Resend quota and can get the sending domain flagged. The honeypot only stops naive bots.
- **Fix:**
  - New `src/lib/rate-limit.ts`: a fixed-window limiter allowing 5 inquiries per IP per 10 minutes, with bounded memory.
  - It is applied after validation, so a visitor fixing a typo isn't locked out.
  - On Hostinger, a single Node process, the limit is exact. On Vercel it is per instance. For a hard global cap, add a Vercel WAF rate-limit rule on `POST /contact`.
- **Breaking:** no. Real visitors never send more than 5 messages in 10 minutes.
- **Test:**
  - `tests/rate-limit.test.ts` (4 cases).
  - `tests/contact.e2e.mjs`: the 6th real browser submission shows "Too many messages…".

### F7 · Low · Control characters and line breaks flowed into the email subject
- **Where:** `actions.ts` lines 13–16 and 77 (before). `name` and `company` went into `subject` with only `trim()`.
- **Why:** CR/LF and control characters can forge extra lines in the subject, in webhook consumers or in logs. Resend's JSON API blocks real header injection, but other webhook targets may not.
- **Fix:**
  - `str()` strips C0/C1 control characters and collapses line breaks to spaces for single-line fields.
  - Service names are sanitised and capped.
  - The email pattern rejects `<>()[],;:"`.
  - All HTML in the email body was, and still is, escaped.
- **Breaking:** no.
- **Test:** `tests/contact.e2e.mjs` submits `<img onerror>` and `<script>` payloads with CRLF; no script runs.

### F8 · Low · Outbound calls had no timeout and followed redirects
- **Where:** `actions.ts` lines 70 and 87 (before), `fetch(...)` to Resend and the webhook.
- **Why:**
  - A slow endpoint ties up the server, a resource-exhaustion risk.
  - A redirecting webhook could bounce the visitor's data to another host.
  - The webhook URL comes only from the server environment, so this is not user-controlled SSRF.
- **Fix:** `signal: AbortSignal.timeout(10000)` on both calls, and `redirect: "error"` on the webhook.
- **Breaking:** a webhook that relies on redirects would fail; use its final URL.
- **Test:** manual. Point `CONTACT_WEBHOOK_URL` at a URL that redirects: the form returns the friendly error and the log shows `TypeError: fetch failed`.

### F9 · Low · Error log could include sensitive details
- **Where:** `actions.ts` line 98 (before), `console.error("[contact] …", err)`.
- **Why:** a full error object can carry the request URL (webhook tokens often live in the URL) and nested causes.
- **Fix:** only the error name and message are logged. The visitor still sees a generic message, never a stack trace.
- **Breaking:** no.
- **Test:** `tests/security.http.test.mjs` test 5 asserts no stack trace in action responses.

### F10 · Low · Server action body limit larger than needed
- **Where:** `next.config.ts` (Next's default is 1 MB).
- **Fix:** `experimental.serverActions.bodySizeLimit: "64kb"`. The form's largest field is capped at 5,000 characters.
- **Breaking:** no.
- **Test:** a 100 KB POST to `/contact` with a `Next-Action` header is rejected (400) before reaching any code.

### F11 · Informational · Things checked and found safe (no change)
- **XSS and `dangerouslySetInnerHTML`:** three uses, all safe:
  - `src/app/layout.tsx:87` is a fixed string with no input.
  - `src/app/layout.tsx:90` and `src/components/site/json-ld.tsx:9` serialise JSON-LD through `ldJson()` (`src/lib/seo.ts:80`), which escapes `<`, so `</script>` can't break out.
  - React escapes all other output.
  - The 404 test confirms URL input isn't reflected.
- **SQL and NoSQL injection:** no database.
- **Command injection:** no `child_process`, `eval` or `new Function`.
- **Path traversal:** no `fs` access with request input. `/.env`, `/.env.local`, `/.git/config`, `package.json` and `../` probes all return 403 or 404 (test 3).
- **File uploads:** none.
- **Authentication and authorisation:** there are no private pages or data to protect.
- **API routes:** none. The one server action is public by design and now validated and rate-limited.
- **CSRF:** Next.js rejects server-action POSTs whose `Origin` doesn't match the host (test 5 sends `Origin: evil.example` and is refused). There are no cookies to ride on.
- **Cookies and sessions:** none are set.
- **CORS:** no `Access-Control-*` headers, so browsers apply same-origin.
- **Open redirect:** all redirects are fixed paths in `next.config.ts`. The page-transition click handler only handles same-origin links (`page-wipe.tsx:63`). Test 4 confirms no external redirects.
- **Image optimiser SSRF:** `images.remotePatterns: []` and `dangerouslyAllowSVG: false`. Remote URLs return 400 (test 2).
- **Source maps:** `productionBrowserSourceMaps: false`.
- **Secrets:**
  - detect-secrets over the tree, plus a regex sweep of the full git history (Resend, AWS, GitHub, Slack and Google keys, private-key blocks), found nothing.
  - `.env*` is git-ignored except `.env.example`, which has empty values.
  - The only hits were build hashes in `tsconfig.tsbuildinfo` and project IDs in `.vercel/project.json`, both untracked and not secret.

### F12 · Informational · Major upgrades deliberately not taken
`three` 0.186, `eslint` 10, `typescript` 7 and `@types/node` 26 carry no security fixes and may break the 3D hero, lint config or types. Plan them as a separate, tested change.

### F13 · Informational · CSP keeps `'unsafe-inline'` for scripts
Next's inline bootstrap scripts need either `'unsafe-inline'` or per-request nonces. Nonces would turn every static page into a server-rendered page, which is slower and costs more. `'unsafe-inline'` is the documented choice for static Next.js sites. All other directives are strict.

## Rerunning the checks

```bash
npm audit && npm audit --omit=dev && npm outdated
npx tsc --noEmit && npm run lint && npm run build
node --experimental-strip-types --test tests/rate-limit.test.ts
npx next start -p 3100 &
BASE=http://localhost:3100 node --test tests/security.http.test.mjs
BASE=http://localhost:3100 node tests/contact.e2e.mjs   # needs Playwright
# against production (from a network that needs a proxy, add NODE_USE_ENV_PROXY=1)
BASE=https://venlynk.com node --test tests/security.http.test.mjs
```

## Also in this change
- The founder's name changed from "Syed Asad Ali" to "Ali Asad" (`src/content/home.ts:113`, `src/content/seo.ts:30`).
- Social icon links were added to the contact page's "Follow Venlynk" block, next to the footer and company profile ones.
