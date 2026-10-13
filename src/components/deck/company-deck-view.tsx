"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { BrandMark } from "@/components/brand/brand-mark";
import {
  DECK,
  DECK_AUDIENCES,
  DECK_CHANNELS,
  DECK_CONTENTS,
  DECK_ENGAGE,
  DECK_PORTFOLIO,
  DECK_PROCESS,
  DECK_SERVICES,
  DECK_STATS,
  DECK_TECH,
  DECK_TESTIMONIALS,
  DECK_TRUST,
  DECK_VALUES,
  type PortfolioItem,
} from "@/content/company-deck";

gsap.registerPlugin(useGSAP);

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 12.5 L12.5 3.5 M6 3.5 H12.5 V10"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceIcon({ index }: { index: number }) {
  const paths = [
    "M2 4h12v8H2z M2 7h12",
    "M3 3h10v10H3z M6 6h4v4H6z",
    "M8 2.5a4 4 0 0 1 0 11 4 4 0 0 1 0-11z M6 12.5h4",
    "M3 11l5-8 5 8z",
    "M4 4h8v2H4z M5 8h6v5H5z",
    "M3 8h10 M8 3v10 M5 5l6 6 M11 5L5 11",
  ];
  return (
    <span className="deck-service__icon" aria-hidden>
      <svg viewBox="0 0 16 16" fill="none">
        <path
          d={paths[index] ?? paths[0]}
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function Atmosphere({ variant = "dark" }: { variant?: "dark" | "paper" | "brand" }) {
  return (
    <div className="deck-atm" aria-hidden data-variant={variant}>
      <div className="deck-atm__orb deck-atm__orb--a" />
      <div className="deck-atm__orb deck-atm__orb--b" />
      <div className="deck-atm__orb deck-atm__orb--c" />
      <div className="deck-atm__grid" />
      {variant !== "paper" ? <div className="deck-atm__ring" /> : null}
    </div>
  );
}

function Marquee({ words }: { words: string[] }) {
  const items = [...words, ...words];
  return (
    <div className="deck-marquee" aria-hidden>
      <div className="deck-marquee__track">
        {items.map((word, i) => (
          <span key={`${word}-${i}`}>{word}</span>
        ))}
      </div>
    </div>
  );
}

function Foot() {
  return (
    <div className="deck-foot">
      <span>{DECK.title}</span>
      <span>{DECK.url}</span>
    </div>
  );
}

function CaseSlide({
  item,
  index,
  total,
  tone = "dark",
}: {
  item: PortfolioItem;
  index: number;
  total: number;
  tone?: "dark" | "ink";
}) {
  return (
    <section
      className={`deck-slide deck-slide--${tone}`}
      aria-label={`${item.name} case study`}
      data-deck-slide
    >
      <Atmosphere />
      <span className="deck-ghost deck-ghost--br" aria-hidden>
        {String(index).padStart(2, "0")}
      </span>
      <div className="deck-slide__inner">
        <div className="deck-case">
          <div className="deck-case__copy deck-reveal">
            <div className="deck-role">Case study</div>
            <div className="deck-eyebrow">
              Selected work · {String(index).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </div>
            <div className="deck-case__tags">
              {item.tags.map((t) => (
                <span key={t} className="deck-tag">
                  {t}
                </span>
              ))}
            </div>
            <div className="deck-role">Project</div>
            <h2 className="deck-case__name">{item.name}</h2>
            <div className="deck-case__url">{item.url}</div>
            <div className="deck-role" style={{ marginTop: "0.5rem" }}>
              What we delivered
            </div>
            <p className="deck-case__summary">{item.summary}</p>
            {item.metrics ? (
              <div className="deck-case__metrics">
                {item.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="deck-role">Outcome</div>
                    <strong>{m.value}</strong>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="deck-callout">
                <div>
                  <strong>Why it matters</strong>
                  <p>
                    Proof of craft across product, performance, and usable
                    interfaces — the reason clients hire a design-led studio.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="deck-case__stage deck-reveal">
            <span className="deck-case__badge">Live mockup</span>
            <span className="deck-case__corner">{item.category}</span>
            <div className="deck-case__glow" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.image} alt={`${item.name} portfolio mockup`} />
          </div>
        </div>
        <Foot />
      </div>
    </section>
  );
}

function SectionIntro({
  category,
  title,
  body,
  previews,
}: {
  category: string;
  title: string;
  body: string;
  previews: PortfolioItem[];
}) {
  return (
    <section className="deck-slide deck-slide--dark" aria-label={title} data-deck-slide>
      <Atmosphere />
      <span className="deck-ghost deck-ghost--tr" aria-hidden>
        WORK
      </span>
      <div className="deck-slide__inner">
        <div className="deck-section-intro">
          <div className="deck-section-intro__copy deck-reveal">
            <div className="deck-eyebrow">{category}</div>
            <h2 className="deck-title">{title}</h2>
            <p className="deck-lede">{body}</p>
          </div>
          <div className="deck-mosaic deck-reveal">
            {previews.slice(0, 3).map((p) => (
              <figure key={p.name}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt="" />
                <figcaption>{p.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
        <Foot />
      </div>
    </section>
  );
}

const INDUSTRIES = [
  "Storage & logistics",
  "Healthcare",
  "Travel & events",
  "Real estate",
  "Knowledge platforms",
  "Consumer marketplaces",
  "Entertainment",
  "Enterprise SaaS",
];

export function CompanyDeckView() {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const websites = useMemo(
    () => DECK_PORTFOLIO.filter((p) => p.category === "websites"),
    [],
  );
  const webapps = useMemo(
    () => DECK_PORTFOLIO.filter((p) => p.category === "webapps"),
    [],
  );
  const mobile = useMemo(
    () => DECK_PORTFOLIO.filter((p) => p.category === "mobile"),
    [],
  );

  const featuredCases = useMemo(
    () =>
      [
        websites[0],
        websites[1],
        webapps[0],
        webapps[1],
        mobile[0],
        mobile[1],
      ].filter(Boolean) as PortfolioItem[],
    [websites, webapps, mobile],
  );

  const totalSlides = 13 + 3 + featuredCases.length + 5;
  const [index, setIndex] = useState(0);

  const go = useCallback(
    (next: number) => {
      setIndex(Math.max(0, Math.min(totalSlides - 1, next)));
    },
    [totalSlides],
  );

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !rootRef.current) return;

      const onMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(".deck-atm__orb--a", {
          x: x * 24,
          y: y * 16,
          duration: 1.2,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(".deck-atm__orb--b", {
          x: x * -18,
          y: y * -12,
          duration: 1.4,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(".deck-cover__sculpture", {
          x: x * 14,
          y: y * 10,
          duration: 1.1,
          ease: "power2.out",
          overwrite: "auto",
        });
        gsap.to(".deck-cover__preview", {
          x: x * -10,
          y: y * 8,
          duration: 1.15,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    },
    { scope: rootRef },
  );

  useGSAP(
    () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced || !trackRef.current) return;

      const slide = trackRef.current.querySelectorAll("[data-deck-slide]")[index] as
        | HTMLElement
        | undefined;
      if (!slide) return;

      const targets = slide.querySelectorAll(
        ".deck-reveal, .deck-display, .deck-title, .deck-lede, .deck-eyebrow, .deck-service, .deck-value, .deck-stat, .deck-process__step, .deck-why-list li, .deck-industry-cloud span, .deck-toc__list li",
      );
      gsap.fromTo(
        targets,
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.045,
          ease: "power3.out",
          overwrite: true,
        },
      );
    },
    { dependencies: [index], scope: rootRef },
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        go(index + 1);
      } else if (["ArrowLeft", "ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(index - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        go(0);
      } else if (e.key === "End") {
        e.preventDefault();
        go(totalSlides - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, index, totalSlides]);

  useEffect(() => {
    let touchY = 0;
    const onStart = (e: TouchEvent) => {
      touchY = e.touches[0]?.clientY ?? 0;
    };
    const onEnd = (e: TouchEvent) => {
      const y = e.changedTouches[0]?.clientY ?? 0;
      const dy = touchY - y;
      if (Math.abs(dy) > 48) go(index + (dy > 0 ? 1 : -1));
    };
    window.addEventListener("touchstart", onStart, { passive: true });
    window.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onStart);
      window.removeEventListener("touchend", onEnd);
    };
  }, [go, index]);

  useEffect(() => {
    let locked = false;
    const onWheel = (e: WheelEvent) => {
      if (locked || Math.abs(e.deltaY) < 18) return;
      locked = true;
      go(index + (e.deltaY > 0 ? 1 : -1));
      window.setTimeout(() => {
        locked = false;
      }, 700);
    };
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, [go, index]);

  const progress = ((index + 1) / totalSlides) * 100;

  return (
    <div className="deck-app" ref={rootRef}>
      <div className="deck-progress" style={{ width: `${progress}%` }} />

      <header className="deck-toolbar">
        <Link href="/" className="deck-toolbar__brand">
          <BrandMark variant="color" />
          Venlynk
        </Link>
        <div className="deck-toolbar__actions">
          <span className="deck-toolbar__meta">
            {String(index + 1).padStart(2, "0")} — {String(totalSlides).padStart(2, "0")}
          </span>
          <button
            type="button"
            className="deck-btn"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            aria-label="Previous slide"
          >
            Prev
          </button>
          <button
            type="button"
            className="deck-btn"
            onClick={() => go(index + 1)}
            disabled={index === totalSlides - 1}
            aria-label="Next slide"
          >
            Next
          </button>
          <button
            type="button"
            className="deck-btn deck-btn--primary"
            onClick={() => window.print()}
          >
            Download PDF
          </button>
        </div>
      </header>

      <nav className="deck-dots" aria-label="Slide navigation">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            type="button"
            className="deck-dot"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => go(i)}
          />
        ))}
      </nav>

      <div className="deck-hint">Navigate · arrow keys · scroll · swipe</div>

      <div className="deck-stage">
        <div
          ref={trackRef}
          className="deck-track"
          style={{
            transform: `translateY(-${index * 100}%)`,
            transition: "transform 0.75s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          {/* Cover */}
          <section className="deck-slide deck-slide--dark deck-cover" aria-label="Cover" data-deck-slide>
            <Atmosphere />
            <div className="deck-cover__shards" aria-hidden>
              <div className="deck-cover__shard deck-cover__shard--1" />
              <div className="deck-cover__shard deck-cover__shard--2" />
              <div className="deck-cover__shard deck-cover__shard--3" />
            </div>
            <div className="deck-cover__vline" aria-hidden />
            <div className="deck-cover__sculpture" aria-hidden>
              <BrandMark variant="color" />
            </div>
            <div className="deck-cover__preview" aria-hidden>
              <div className="deck-cover__preview-glow" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={websites[0]?.image ?? mobile[0]?.image} alt="" />
            </div>
            <span className="deck-ghost deck-ghost--bl" aria-hidden style={{ opacity: 0.06, fontSize: "clamp(5rem, 18vw, 14rem)" }}>
              LINK
            </span>
            <Marquee
              words={[
                "Design",
                "Product",
                "Engineering",
                "Brand",
                "Mobile",
                "AI",
                "Growth",
              ]}
            />
            <div className="deck-slide__inner deck-cover">
              <div className="deck-cover__top deck-reveal">
                <div className="deck-logo-lockup">
                  <BrandMark variant="color" />
                  Venlynk
                </div>
                <span className="deck-chip">
                  <span className="deck-chip__dot" />
                  Company Profile {DECK.year}
                </span>
              </div>
              <div className="deck-cover__hero">
                <div className="deck-role deck-reveal">Studio introduction</div>
                <h1 className="deck-display deck-reveal">
                  Venlynk Company Profile {DECK.year}
                  <span className="deck-cover__accent">
                    <ArrowIcon />
                  </span>
                </h1>
                <p className="deck-cover__tag deck-serif deck-reveal">{DECK.tagline}</p>
                <div className="deck-callout deck-reveal">
                  <div>
                    <strong>What this deck is</strong>
                    <p>
                      A client-facing studio profile — positioning, capabilities,
                      and selected work that proves the craft.
                    </p>
                  </div>
                </div>
              </div>
              <div className="deck-cover__meta deck-reveal">
                <span>Digital product studio</span>
                <span className="deck-chip">{DECK.url}</span>
              </div>
            </div>
          </section>

          {/* Contents */}
          <section className="deck-slide deck-slide--paper" aria-label="Contents" data-deck-slide>
            <Atmosphere variant="paper" />
            <span className="deck-ghost deck-ghost--br" aria-hidden>
              Index
            </span>
            <div className="deck-slide__inner">
              <div className="deck-toc">
                <div className="deck-reveal">
                  <div className="deck-eyebrow">Inside this deck</div>
                  <h2 className="deck-title">What you&apos;ll find</h2>
                  <p className="deck-lede">
                    A focused look at the studio, the craft, and the work — built
                    to be felt, not just read.
                  </p>
                </div>
                <div>
                  <ol className="deck-toc__list">
                    {DECK_CONTENTS.map((c, i) => (
                      <li key={c.num} className="deck-reveal">
                        <em>{c.num}</em>
                        {c.label}
                        <i>0{i + 1}</i>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </section>

          {/* Who */}
          <section className="deck-slide deck-slide--paper" aria-label="Who we are" data-deck-slide>
            <Atmosphere variant="paper" />
            <span className="deck-ghost deck-ghost--tr" aria-hidden>
              01
            </span>
            <div className="deck-slide__inner">
              <div className="deck-who">
                <div className="deck-reveal">
                  <div className="deck-eyebrow">01 — Who we are</div>
                  <h2 className="deck-title">
                    A digital product studio that links strategy to shipped work.
                  </h2>
                  <p className="deck-lede">
                    Venlynk designs and builds websites, web applications, and
                    mobile products for teams that need clarity, craft, and
                    outcomes — not another template.
                  </p>
                </div>
                <div className="deck-who__stack deck-reveal">
                  <div className="deck-who__row">
                    <strong>Focus</strong>
                    <p>
                      Frontend excellence, UX/UI systems, WordPress &amp; Shopify,
                      React / Next.js platforms, practical AI workflows.
                    </p>
                  </div>
                  <div className="deck-who__row">
                    <strong>Proven</strong>
                    <p>
                      A decade shipping for storage, healthcare, travel, real
                      estate, knowledge platforms, and consumer apps.
                    </p>
                  </div>
                  <div className="deck-who__row">
                    <strong>Model</strong>
                    <p>{DECK.location}. Remote-first with founders and product teams.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="deck-slide deck-slide--brand" aria-label="Positioning" data-deck-slide>
            <Atmosphere variant="brand" />
            <Marquee words={["Strategy", "Design", "Build", "Launch", "Grow"]} />
            <div className="deck-slide__inner deck-mission">
              <div className="deck-eyebrow deck-reveal" style={{ color: "rgba(255,255,255,0.75)" }}>
                Positioning
              </div>
              <h2 className="deck-display deck-reveal">
                We turn ambition into digital products people can use — and
                businesses can grow on.
              </h2>
              <div className="deck-mission__rule deck-reveal" />
              <p className="deck-lede deck-reveal" style={{ opacity: 0.92, color: "#fff" }}>
                Strategy, design, and engineering in one link.{" "}
                <span className="deck-serif">{DECK.tagline}</span>
              </p>
            </div>
          </section>

          {/* Values */}
          <section className="deck-slide deck-slide--dark" aria-label="Principles" data-deck-slide>
            <Atmosphere />
            <span className="deck-ghost deck-ghost--bl" aria-hidden>
              Craft
            </span>
            <div className="deck-slide__inner">
              <div className="deck-eyebrow deck-reveal">How we show up</div>
              <h2 className="deck-title deck-reveal">Principles we build with</h2>
              <div className="deck-values">
                {DECK_VALUES.map((v, i) => (
                  <article key={v.title} className="deck-value">
                    <span className="deck-value__idx">0{i + 1}</span>
                    <h3>{v.title}</h3>
                    <p>{v.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Who we serve — multi-audience */}
          <section className="deck-slide deck-slide--dark" aria-label="Who we serve" data-deck-slide>
            <Atmosphere />
            <span className="deck-ghost deck-ghost--tr" aria-hidden>
              You
            </span>
            <div className="deck-slide__inner">
              <div className="deck-eyebrow deck-reveal">02 — Who we serve</div>
              <h2 className="deck-title deck-reveal">
                Built to impress every kind of buyer.
              </h2>
              <p className="deck-lede deck-reveal">
                From a Discord intro to a marketplace brief to a technical RFP —
                the deck (and the work) has to land for everyone.
              </p>
              <div className="deck-audience">
                {DECK_AUDIENCES.map((a) => (
                  <article key={a.title} className="deck-reveal">
                    <h3>{a.title}</h3>
                    <p>{a.body}</p>
                    <em>{a.fit}</em>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Services */}
          <section className="deck-slide deck-slide--paper" aria-label="Services" data-deck-slide>
            <Atmosphere variant="paper" />
            <span className="deck-ghost deck-ghost--br" aria-hidden>
              03
            </span>
            <div className="deck-slide__inner">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.7fr 1.3fr",
                  gap: "clamp(1.5rem, 4vw, 3rem)",
                  height: "100%",
                  alignItems: "center",
                }}
              >
                <div className="deck-reveal">
                  <div className="deck-eyebrow">03 — What we build</div>
                  <h2 className="deck-title">Capabilities</h2>
                  <p className="deck-lede">
                    Six practices. One standard — clarity, craft, and outcomes
                    that hold up after launch.
                  </p>
                  <div
                    style={{
                      marginTop: "2rem",
                      fontSize: "clamp(4rem, 10vw, 8rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.06em",
                      lineHeight: 0.85,
                      background:
                        "linear-gradient(180deg, rgba(69,70,248,0.2), rgba(69,70,248,0.02))",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      userSelect: "none",
                    }}
                    aria-hidden
                  >
                    Build
                  </div>
                </div>
                <div className="deck-services">
                  {DECK_SERVICES.map((s, i) => (
                    <article key={s.num} className="deck-service">
                      <ServiceIcon index={i} />
                      <span className="deck-service__num">{s.num}</span>
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                      <span className="deck-service__arrow" aria-hidden>
                        <ArrowIcon />
                      </span>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Color-blocked service spotlight — Tamatos style */}
          <section className="deck-slide deck-slide--ink" aria-label="Flagship practices" data-deck-slide>
            <Atmosphere />
            <div className="deck-slide__inner">
              <div className="deck-eyebrow deck-reveal">Flagship practices</div>
              <h2 className="deck-title deck-reveal">Where clients feel the craft first.</h2>
              <div className="deck-split-services">
                {[
                  {
                    k: "01",
                    t: "Websites",
                    b: "Brand-first sites that convert — ready for ads, social, and sales handoff.",
                  },
                  {
                    k: "02",
                    t: "Products & apps",
                    b: "Web and mobile experiences technical teams trust and users understand.",
                  },
                  {
                    k: "03",
                    t: "Brand + growth",
                    b: "Identity and systems that stay consistent from Instagram to checkout.",
                  },
                ].map((s) => (
                  <article key={s.k} className="deck-reveal">
                    <em>{s.k}</em>
                    <h3>{s.t}</h3>
                    <p>{s.b}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="deck-slide deck-slide--ink" aria-label="Impact" data-deck-slide>
            <Atmosphere />
            <span className="deck-ghost deck-ghost--tr" aria-hidden>
              Proof
            </span>
            <div className="deck-slide__inner">
              <div className="deck-eyebrow deck-reveal">Proven at scale</div>
              <h2 className="deck-manifesto-xl deck-reveal">
                Numbers that make a stranger lean in.
              </h2>
              <p className="deck-lede deck-reveal">
                Snapshot figures — refine anytime as the studio grows.
              </p>
              <div className="deck-stats-grid">
                {DECK_STATS.map((s, i) => (
                  <div key={s.label} className="deck-stat">
                    <span className="deck-stat__idx">0{i + 1}</span>
                    <div className="deck-stat__role">Metric</div>
                    <div className="deck-stat__value">{s.value}</div>
                    <div className="deck-stat__label">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trust wall */}
          <section className="deck-slide deck-slide--paper" aria-label="Clients" data-deck-slide>
            <Atmosphere variant="paper" />
            <div className="deck-slide__inner" style={{ justifyContent: "center" }}>
              <div className="deck-eyebrow deck-reveal">Trusted in the wild</div>
              <h2 className="deck-title deck-reveal">Brands & products we&apos;ve touched</h2>
              <p className="deck-lede deck-reveal">
                Instant credibility for marketplaces, founders, and technical
                buyers scanning in 5 seconds.
              </p>
              <div className="deck-trust">
                {DECK_TRUST.map((name) => (
                  <span key={name} className="deck-reveal">
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Tech + plain language */}
          <section className="deck-slide deck-slide--dark" aria-label="Stack and clarity" data-deck-slide>
            <Atmosphere />
            <div className="deck-slide__inner">
              <div className="deck-eyebrow deck-reveal">For every room</div>
              <h2 className="deck-title deck-reveal">
                Simple for operators. Serious for engineers.
              </h2>
              <p className="deck-lede deck-reveal">
                Non-technical clients get plain outcomes. Technical clients get a
                stack they respect.
              </p>
              <div className="deck-tech">
                {DECK_TECH.map((t) => (
                  <span key={t} className="deck-reveal">
                    {t}
                  </span>
                ))}
              </div>
              <div className="deck-callout deck-reveal">
                <div>
                  <strong>The WOW filter</strong>
                  <p>
                    If it looks weak in a Discord screenshot or an Instagram
                    story, it is not ready to ship.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Work intro */}
          <section className="deck-slide deck-slide--dark" aria-label="Selected work" data-deck-slide>
            <Atmosphere />
            <Marquee words={["Websites", "Web Apps", "Mobile", "UX Systems"]} />
            <div className="deck-slide__inner">
              <div className="deck-eyebrow deck-reveal">04 — Selected work</div>
              <h2 className="deck-title deck-display--wide deck-reveal">
                Websites. Web apps. Mobile products.
              </h2>
              <p className="deck-lede deck-reveal">
                A sample of shipped and designed work. More live projects will
                land here as they launch.
              </p>
              <div className="deck-work-split">
                <article className="deck-work-tile deck-reveal">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={websites[0]?.image} alt="" />
                  <div className="deck-work-tile__cap">
                    <div>
                      <strong>{websites[0]?.name}</strong>
                      <span>Website</span>
                    </div>
                    <span>01</span>
                  </div>
                </article>
                <article className="deck-work-tile deck-reveal">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={mobile[1]?.image} alt="" />
                  <div className="deck-work-tile__cap">
                    <div>
                      <strong>{mobile[1]?.name}</strong>
                      <span>Mobile</span>
                    </div>
                    <span>02</span>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* Industries */}
          <section className="deck-slide deck-slide--dark deck-industries" aria-label="Industries" data-deck-slide>
            <Atmosphere />
            <span className="deck-ghost deck-ghost--br" aria-hidden>
              Fields
            </span>
            <div className="deck-slide__inner" style={{ justifyContent: "center" }}>
              <div className="deck-eyebrow deck-reveal">Where we play</div>
              <h2 className="deck-title deck-reveal">Industries we&apos;ve touched</h2>
              <p className="deck-lede deck-serif deck-reveal" style={{ fontSize: "1.35rem", opacity: 0.8 }}>
                Different domains. Same bar for clarity and craft.
              </p>
              <div className="deck-industry-cloud">
                {INDUSTRIES.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>
          </section>

          <SectionIntro
            category="Portfolio · Websites"
            title="Websites that explain and convert"
            body="Marketing and company sites with responsive UI, performance, and clear next steps."
            previews={websites}
          />
          <CaseSlide item={websites[0]} index={1} total={featuredCases.length} />
          <CaseSlide item={websites[1]} index={2} total={featuredCases.length} tone="ink" />

          <SectionIntro
            category="Portfolio · Web apps"
            title="Products and platforms"
            body="SaaS, commerce, and enterprise surfaces — designed for daily use, not demos."
            previews={webapps}
          />
          <CaseSlide item={webapps[0]} index={3} total={featuredCases.length} />
          <CaseSlide item={webapps[1]} index={4} total={featuredCases.length} tone="ink" />

          <SectionIntro
            category="Portfolio · Mobile"
            title="Apps people open on the go"
            body="Ticketing, mobility, and consumer flows — customer and operator perspectives."
            previews={mobile}
          />
          <CaseSlide item={mobile[0]} index={6} total={featuredCases.length} tone="ink" />
          <CaseSlide item={mobile[1]} index={7} total={featuredCases.length} />

          {/* Process */}
          <section className="deck-slide deck-slide--paper" aria-label="Process" data-deck-slide>
            <Atmosphere variant="paper" />
            <span className="deck-ghost deck-ghost--tr" aria-hidden>
              05
            </span>
            <div className="deck-slide__inner">
              <div className="deck-eyebrow deck-reveal">05 — Process</div>
              <h2 className="deck-title deck-reveal">From brief to growth</h2>
              <div className="deck-process">
                {DECK_PROCESS.map((p) => (
                  <article key={p.step} className="deck-process__step">
                    <div className="deck-process__node">{p.step}</div>
                    <h3>{p.title}</h3>
                    <p>{p.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="deck-slide deck-slide--dark" aria-label="Testimonials" data-deck-slide>
            <Atmosphere />
            <span className="deck-ghost deck-ghost--br" aria-hidden>
              Voice
            </span>
            <div className="deck-slide__inner">
              <div className="deck-eyebrow deck-reveal">Social proof</div>
              <h2 className="deck-title deck-reveal">What partners say</h2>
              <div className="deck-quotes">
                {DECK_TESTIMONIALS.map((t) => (
                  <article key={t.role} className="deck-reveal">
                    <blockquote>“{t.quote}”</blockquote>
                    <footer>
                      <strong>{t.name}</strong>
                      {t.role}
                    </footer>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* How to start */}
          <section className="deck-slide deck-slide--paper" aria-label="How to start" data-deck-slide>
            <Atmosphere variant="paper" />
            <div className="deck-slide__inner">
              <div className="deck-eyebrow deck-reveal">Start anywhere</div>
              <h2 className="deck-title deck-reveal">Three steps. No theater.</h2>
              <p className="deck-lede deck-reveal">
                Whether the intro comes from X, Instagram, a marketplace, or a
                warm referral — the path is the same.
              </p>
              <div className="deck-engage">
                {DECK_ENGAGE.map((e) => (
                  <article key={e.step} className="deck-reveal">
                    <span>{e.step}</span>
                    <h3>{e.title}</h3>
                    <p>{e.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Why */}
          <section className="deck-slide deck-slide--dark" aria-label="Why Venlynk" data-deck-slide>
            <Atmosphere />
            <span className="deck-ghost deck-ghost--br" aria-hidden>
              Why
            </span>
            <div className="deck-slide__inner" style={{ justifyContent: "center" }}>
              <div className="deck-eyebrow deck-reveal">Why Venlynk</div>
              <h2 className="deck-title deck-reveal">
                One studio for design, product, and engineering.
              </h2>
              <p className="deck-lede deck-reveal">
                Senior craft without agency theater — clear communication,
                measurable UX thinking, and production-ready builds.
              </p>
              <ul className="deck-why-list">
                {[
                  "UI/UX grounded in research and performance",
                  "React, Next.js, WordPress & Shopify fluency",
                  "Mobile product design with real adoption metrics",
                  "A partner tone — not a ticket queue",
                ].map((line, i) => (
                  <li key={line}>
                    <b>0{i + 1}</b>
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section
            className="deck-slide deck-slide--brand deck-contact"
            aria-label="Contact"
            data-deck-slide
          >
            <Atmosphere variant="brand" />
            <Marquee words={["Start a project", "Share a brief", "Let's talk"]} />
            <div className="deck-slide__inner deck-contact">
              <div className="deck-logo-lockup deck-reveal" style={{ marginBottom: "2rem" }}>
                <BrandMark variant="white" />
                Venlynk
              </div>
              <h2 className="deck-display deck-reveal" style={{ maxWidth: "11ch" }}>
                Let&apos;s link your next venture.
              </h2>
              <p className="deck-lede deck-reveal" style={{ opacity: 0.92, color: "#fff" }}>
                Share a brief, a problem, or a half-formed idea. We&apos;ll help
                turn it into something people can use.
              </p>
              <div className="deck-contact__links deck-reveal">
                <a href={`mailto:${DECK.email}`}>{DECK.email}</a>
                <a href={`https://${DECK.url}`} target="_blank" rel="noreferrer">
                  {DECK.url}
                </a>
              </div>
              <div className="deck-channels deck-reveal">
                {DECK_CHANNELS.map((c) => (
                  <span key={c}>{c}</span>
                ))}
              </div>
              <div className="deck-contact__footer">
                <span>Company Profile {DECK.year}</span>
                <span>{DECK.tagline}</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
