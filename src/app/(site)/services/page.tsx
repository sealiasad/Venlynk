import type { Metadata } from "next";
import Link from "next/link";

import { ClosingCta, delay, Head, PageHead } from "@/components/site/blocks";
import { AreaIcon } from "@/components/site/mega-menu";
import { CATEGORIES } from "@/content/catalog";
import { PLANS, STEPS } from "@/content/home";
import { PAGE_SEO } from "@/content/seo";
import { livePagesIn, serviceUrl } from "@/content/service-pages";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ ...PAGE_SEO.services, path: "/services" });

const TONES = ["lav", "ink", "paper", "blue"] as const;

export default function ServicesPage() {
  return (
    <>
      <PageHead
        eyebrow="Services"
        title={"Websites, apps, stores\n*and AI, from one team.*"}
        lead="Pick the area you need help with. Each one lists the services we offer, how the work runs and what it costs. The people who plan your project are the ones who build it and keep improving it."
      >
        <nav className="pa-jump" aria-label="Service areas">
          {CATEGORIES.map((c) => (
            <a key={c.slug} href={`#${c.slug}`} className="pa-chip">
              {c.label}
            </a>
          ))}
        </nav>
      </PageHead>

      <section className="ha-block wrap">
        <div className="sv-areas">
          {CATEGORIES.map((c, ci) => {
            const live = livePagesIn(c.slug);
            return (
              <article className={`sv-area sv-area--${TONES[ci % TONES.length]}`} id={c.slug} key={c.slug} data-fade="" style={delay(ci % 2)}>
                <header className="sv-area__head">
                  <span className="sv-area__ico">
                    <AreaIcon slug={c.slug} />
                  </span>
                  <span className="sv-area__n">{String(ci + 1).padStart(2, "0")}</span>
                </header>
                <h2>
                  <Link href={`/services/${c.slug}`}>{c.label}</Link>
                </h2>
                <p className="sv-area__lead">{c.lead}</p>
                <ul className="sv-area__list">
                  {live.map((sp) => (
                    <li key={sp.slug}>
                      <Link href={serviceUrl(sp)}>
                        {sp.h1} <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link className="sv-area__all" href={`/services/${c.slug}`}>
                  See everything in {c.label} <span aria-hidden="true">→</span>
                </Link>
              </article>
            );
          })}
        </div>
      </section>

      <section className="ha-block wrap">
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

      <section className="ha-block wrap">
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

      <ClosingCta title={"Not sure where\nto start?"} text="Tell us what you want to change. We will suggest the smallest useful first step." />
    </>
  );
}
