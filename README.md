# Venlynk website

Marketing site for Venlynk, a product design and engineering studio. Next.js 16 (App Router), React 19, TypeScript, GSAP and Lenis for motion, Three.js for the 3D mark. All content lives in TypeScript files; there is no CMS or database.

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build && npm run start
```

## Edit content (no code knowledge needed)

| What | File |
|---|---|
| Homepage copy, founder, numbers, brands, process, plans, quotes, FAQ, about page, team | `src/content/home.ts` |
| Site name, email, "Book a call" link, social links | `src/content/site.ts` |
| Projects and case studies (engagement label, results, images) | `src/content/projects.ts` + `public/images/work/{slug}/case.webp` |
| Practices, services and their pages | `src/content/services.ts` |
| Industries and their pages | `src/content/industries.ts` |
| Articles | `src/content/insights.ts` |
| Client quotes (hidden until `approved: true`) | `src/content/testimonials.ts` |
| Private sales deck at `/company-profile` | `src/content/company-deck.ts` |

Rules: only publish results and quotes the client has approved. Leave `calendarUrl` or a social `href` empty to hide it.

## Contact form

The form posts through a Server Action (`src/app/(site)/contact/actions.ts`). Copy `.env.example` to `.env.local` and set **one** of:

- `RESEND_API_KEY` + `CONTACT_TO_EMAIL` (+ `CONTACT_FROM_EMAIL` on a verified domain) emails each inquiry.
- `CONTACT_WEBHOOK_URL` POSTs each inquiry as JSON (Zapier, Make, Slack, Google Sheets via Apps Script…).

Without either, the form tells visitors to email instead, with their message pre-filled.

## Structure

```
src/app/(site)/        public pages: home, work, services, industries, about, insights, contact
src/app/company-profile private deck (noindex)
src/app/sitemap.ts, robots.ts, opengraph-image.tsx, icon.svg
src/components/home    hero, services hover list, industries tabs, pinned process
src/components/motion  MotionProvider — Lenis smooth scroll + data-attribute reveals
src/components/site    header, footer, CTA band, page hero
src/components/work    project cards, filterable work browser
src/styles             tokens.css, base.css, chrome.css, home.css, pages.css (+ company-deck.css)
src/fonts              self-hosted Space Grotesk + Instrument Serif
_archive/              previous site versions and docs (excluded from build)
```

### Motion attributes

`data-words` (via `<Split>`), `data-fade`, `data-clip`, `data-count`, `data-parallax`, `data-scrub`, `data-cursor="View"`. All respect `prefers-reduced-motion`.

Brand: ink `#020202`, paper `#FCFCFC`, blue `#4546F8`. Instrument Serif italic is the single editorial accent — one clause per headline, written as `*text*` in `<Split text>`.
