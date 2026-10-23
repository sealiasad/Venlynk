import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { BrandMark } from "@/components/brand/brand-mark";
import { ConsultPill } from "@/components/home/a/consult-pill";
import { HeroMark } from "@/components/home/a/hero-mark";
import { HomeFx } from "@/components/home/a/home-fx";
import { accent, delay, Head, ScrubText } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { AreaIcon, FlagIcon } from "@/components/site/mega-menu";
import { CATEGORIES } from "@/content/catalog";
import { LOCATIONS } from "@/content/locations";
import { PAGE_SEO } from "@/content/seo";
import { SITE } from "@/content/site";
import { pageMeta } from "@/lib/seo";
import {
  BRANDS,
  CLOSING,
  FOUNDER,
  HERO,
  HOME_FAQ,
  INDUSTRIES,
  INTRO,
  MARQUEE,
  NUMBERS,
  PLANS,
  QUOTES,
  RESULTS,
  STEPS,
  WORK_ROWS,
} from "@/content/home";

export const metadata: Metadata = pageMeta({ ...PAGE_SEO.home, path: "/", absolute: true });

const AREA_TONES = ["lav", "paper", "blue", "ink"] as const;

export default function HomePage() {
  const heroText = HERO.lines.join(" ").replace(/\*/g, "");

  return (
    <div className="ha-home" data-link-root="">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE.url}/#website`,
          name: SITE.name,
          url: SITE.url,
          publisher: { "@id": `${SITE.url}/#organization` },
        }}
      />
      <svg className="ha-link" aria-hidden="true" preserveAspectRatio="none">
        <defs>
          <linearGradient id="ha-lg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#A5A6FF" />
            <stop offset="1" stopColor="#4546F8" />
          </linearGradient>
        </defs>
        <path />
      </svg>

      {/* Hero */}
      <section className="ha-hero" aria-labelledby="ha-title">
        <div className="ha-hero__bg" />
        <div className="ha-hero__floor" />
        <HeroMark />
        <div className="ha-hero__inner wrap">
          <p className="ha-eyebrow" data-intro="" style={{ animationDelay: "0.5s" }}>
            {HERO.eyebrow}
          </p>
          <h1 id="ha-title" aria-label={heroText}>
            {HERO.lines.map((line, i) => (
              <span className="ha-line" key={line} aria-hidden="true">
                <span style={{ animationDelay: `${0.15 + i * 0.09}s` }}>{accent(line)}</span>
              </span>
            ))}
          </h1>
          <p className="ha-hero__lead" data-intro="" style={{ animationDelay: "0.6s" }}>
            {HERO.lead}
          </p>
          <div className="ha-row-cta" data-intro="" style={{ animationDelay: "0.7s" }}>
            <Link className="ha-btn ha-btn--light" href={HERO.primary.href} data-magnetic="">
              {HERO.primary.label}
            </Link>
            <a className="ha-btn ha-btn--ghost" href={HERO.secondary.href} data-magnetic="">
              {HERO.secondary.label}
            </a>
          </div>
        </div>
        <p className="ha-hero__hint" aria-hidden="true">
          Scroll
        </p>
      </section>

      {/* Marquee */}
      <div className="ha-marquee">
        <p className="sr-only">Brands we have worked with: {MARQUEE.join(", ")}.</p>
        <div className="ha-marquee__track" aria-hidden="true">
          {[...MARQUEE, ...MARQUEE].map((name, i) => (
            <span key={i}>{name}</span>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="ha-block wrap" id="intro" data-node="" aria-labelledby="ha-intro">
        <h2 className="ha-eyebrow" id="ha-intro" data-fade="">
          Who we are
        </h2>
        <ScrubText className="ha-statement" text={INTRO.statement} />
        <div className="ha-facts">
          {INTRO.facts.map((f, i) => (
            <div className="ha-fact" key={f.label} data-fade="" style={delay(i)}>
              <small>{f.label}</small>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Service areas */}
      <section className="ha-block wrap" id="services" data-node="">
        <Head
          title="Eight things we build. One team."
          text="The people who plan your product are the ones who build it and keep improving it."
          more={{ label: "All services", href: "/services" }}
        />
        <div className="ha-areas">
          {CATEGORIES.map((c, i) => (
            <Link
              className={`ha-card ha-card--${AREA_TONES[i % AREA_TONES.length]} ha-area`}
              href={`/services/${c.slug}`}
              key={c.slug}
              data-tilt=""
              data-fade=""
              style={delay(i)}
            >
              <span className="ha-card__shine" aria-hidden="true" />
              <span className="ha-card__top">
                <span className="ha-area__ico">
                  <AreaIcon slug={c.slug} />
                </span>
                <span className="ha-go" aria-hidden="true">↗</span>
              </span>
              <div>
                <h3>{c.label}</h3>
                <p>{c.short}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className="ha-block wrap" id="work" data-node="">
        <Head
          title="Selected work"
          text="A few recent projects, each labelled with how it was delivered."
          more={{ label: "See all work", href: "/work" }}
        />
        <div className="ha-rows">
          {WORK_ROWS.map((w, i) => (
            <Link className="ha-row" href={w.href} key={w.name} data-preview={i}>
              <span className="ha-row__i">{String(i + 1).padStart(2, "0")}</span>
              <span className="ha-row__t">{w.name}</span>
              <span className="ha-row__d">{w.detail}</span>
              <span className="ha-row__l">{w.label}</span>
              <span className="ha-row__go" aria-hidden="true">→</span>
              <span className="ha-row__thumb" aria-hidden="true">
                <Image src={w.image} alt="" fill sizes="(max-width: 820px) 85vw, 1px" loading="lazy" />
              </span>
            </Link>
          ))}
        </div>
        <div className="ha-preview" aria-hidden="true">
          {WORK_ROWS.map((w) => (
            <Image key={w.name} src={w.image} alt="" fill sizes="380px" />
          ))}
        </div>
      </section>

      {/* Results */}
      <section className="ha-results" id="results" data-node="" data-rail="">
        <div className="wrap">
          <Head title="Results our clients measured" text="Reported by clients after launch." />
        </div>
        <div className="wrap ha-swipe" aria-hidden="true">
          <span>Swipe to see all {RESULTS.length}</span>
          <span className="ha-swipe__track">
            <span />
          </span>
          <span className="ha-swipe__arrow">→</span>
        </div>
        <div className="ha-rail-wrap" data-swipe="">
          <div className="ha-rail">
            {RESULTS.map((r, i) => (
              <div className={`ha-res ha-res--${r.tone}`} key={`${r.value}-${i}`}>
                <small>{r.client}</small>
                <div>
                  <b>{r.value}</b>
                  <p>{r.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="wrap">
          <div className="ha-rail-progress" aria-hidden="true">
            <span />
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="ha-block wrap" id="industries" data-node="">
        <Head
          title="Industries we know well"
          text={`${INDUSTRIES.length} sectors we have shipped products in.`}
          more={{ label: "Explore industries", href: "/industries" }}
        />
        <div className="ha-inds">
          {INDUSTRIES.map((ind, i) => (
            <Link className="ha-ind" href={`/industries/${ind.slug}`} key={ind.title} data-fade="" style={delay(i, 50)}>
              <span className="ha-ind__body">
                <b>{ind.title}</b>
                <span>{ind.clients}</span>
              </span>
              <span className="ha-ind__go" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Founder */}
      <section className="ha-block wrap" id="about" data-node="">
        <div className="ha-founder">
          <div className="ha-fcard" data-fade="">
            {FOUNDER.photo ? (
              <Image src={FOUNDER.photo} alt={FOUNDER.name} fill sizes="(max-width: 900px) 100vw, 50vw" />
            ) : (
              <>
                <BrandMark />
                <p>[Founder portrait]</p>
              </>
            )}
          </div>
          <div className="ha-fbody" data-fade="" style={delay(1)}>
            <p className="ha-eyebrow">{FOUNDER.role}</p>
            <h3>{FOUNDER.name}</h3>
            <p>{FOUNDER.bio}</p>
            <ul className="ha-chips">
              {FOUNDER.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="ha-row-cta">
              <Link className="ha-btn ha-btn--ghost" href="/about" data-magnetic="">
                About the studio
              </Link>
              <a className="ha-btn ha-btn--ghost" href={FOUNDER.linkedin} target="_blank" rel="noreferrer" data-magnetic="">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <dl className="ha-nums">
          {NUMBERS.map((n, i) => (
            <div className="ha-num" key={n.label} data-fade="" style={delay(i)}>
              <dt className="sr-only">{n.label}</dt>
              <dd style={{ margin: 0 }}>
                <b>
                  <span data-count={n.value} aria-hidden="true">
                    {n.value}
                  </span>
                  <span aria-hidden="true">{n.suffix}</span>
                  <span className="sr-only">
                    {n.value}
                    {n.suffix}
                  </span>
                </b>
                <span aria-hidden="true">{n.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Brands */}
      <section className="ha-block wrap" id="brands" data-node="">
        <Head title="Brands we've built for" text="From the founder's early career to Venlynk's clients today." />
        <ul className="ha-logos">
          {BRANDS.map((b, i) => (
            <li className={`ha-logo${b.dark ? " ha-logo--dark" : ""}`} key={b.file} data-fade="" style={delay(i % 6, 50)}>
              <Image src={`/images/logos/${b.file}.png`} alt={b.name} width={240} height={90} />
            </li>
          ))}
        </ul>
      </section>

      {/* Process */}
      <section className="ha-block wrap" id="process" data-node="">
        <Head title="How we work" text="Five steps, the same on every project. You see progress at each one." />
        <ol className="ha-steps">
          {STEPS.map((s, i) => (
            <li className="ha-step" key={s.n} data-fade="" style={delay(i, 100)}>
              <span className="ha-step__top">
                <b aria-hidden="true">{s.n}</b>
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Ways to work */}
      <section className="ha-block wrap" id="engage" data-node="">
        <Head title="Ways to work with us" text="Start small or go all in." />
        <div className="ha-grid3">
          {PLANS.map((p, i) => (
            <div className="ha-plan" key={p.title} data-tilt="" data-fade="" style={delay(i)}>
              <span className="ha-plan__top">
                <b>{p.length}</b>
              </span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials: shown only once real, approved client quotes exist */}
      {QUOTES.some((q) => !q.placeholder) ? (
        <section className="ha-block wrap" id="testimonials" data-node="">
          <Head title="What clients say" text="In their own words." />
          <div className="ha-quotes">
            {QUOTES.filter((q) => !q.placeholder).map((q, i) => (
              <figure className="ha-q" key={q.name} data-fade="" style={delay(i)}>
                <blockquote>“{q.quote}”</blockquote>
                <figcaption className="ha-who">
                  <i aria-hidden="true" />
                  <div>
                    <b>{q.name}</b>
                    <span>{q.role}</span>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      {/* Countries */}
      <section className="ha-block wrap" id="countries" data-node="">
        <Head
          title={`One team, ${LOCATIONS.length} markets.`}
          text="We work from Pakistan: one to two hours from the Gulf, a morning overlap with the UK and Europe, and work that moves overnight for North America and Australia."
          more={{ label: "All locations", href: "/locations" }}
        />
        <ul className="ha-countries">
          {LOCATIONS.map((l, i) => (
            <li key={l.slug} data-fade="" style={delay(i, 40)}>
              <Link href={`/locations/${l.slug}`}>
                <FlagIcon code={l.isoCode} className="ha-countries__flag" />
                <span>{l.country}</span>
                <span className="ha-countries__go" aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* FAQ */}
      <section className="ha-block wrap" id="faq" data-node="">
        <div className="ha-faq">
          <Head
            title="Questions before you call"
            text="Still unsure? Ask us anything on a 30 minute call."
            more={{ label: "Read notes from the studio", href: "/insights" }}
          />
          <div data-fade="">
            {HOME_FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="ha-cta" id="contact" data-node="" aria-labelledby="ha-close">
        <div className="ha-cta__glow" data-parallax="0.25" />
        <div className="ha-cta__inner wrap">
          <h2 id="ha-close" data-fade="">
            {CLOSING.lines.map((l) => (
              <span className="ha-line" key={l}>
                <span>{l}</span>
              </span>
            ))}
          </h2>
          <p data-fade="" style={delay(1)}>
            {CLOSING.text}
          </p>
          <div className="ha-row-cta" data-fade="" style={delay(2)}>
            <Link className="ha-btn ha-btn--light" href="/contact" data-magnetic="">
              Book a 30 minute call
            </Link>
            <a className="ha-btn ha-btn--ghost" href={`mailto:${SITE.email}`} data-magnetic="">
              {SITE.email}
            </a>
          </div>
        </div>
      </section>

      <HomeFx />
      <ConsultPill name={FOUNDER.name} avatar={FOUNDER.avatar} />
    </div>
  );
}
