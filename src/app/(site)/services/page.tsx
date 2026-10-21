import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ClosingCta, delay, Head, PageHead } from "@/components/site/blocks";
import { CATEGORIES } from "@/content/catalog";
import { PLANS, STEPS } from "@/content/home";
import { PAGE_SEO } from "@/content/seo";
import { livePagesIn, serviceUrl } from "@/content/service-pages";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ ...PAGE_SEO.services, path: "/services" });

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

      {CATEGORIES.map((c, ci) => {
        const live = livePagesIn(c.slug);
        return (
          <section className="ha-block wrap pa-practice" id={c.slug} key={c.slug}>
            <Link href={`/services/${c.slug}`} className="pa-practice__card cx-cat-card" data-fade="">
              <span className="pa-practice__top">
                <span className="ha-card__n">{String(ci + 1).padStart(2, "0")}</span>
              </span>
              <h2>{c.label}</h2>
              <p>{c.lead}</p>
              <span className="ha-more">
                See everything in {c.label} <span aria-hidden="true">→</span>
              </span>
            </Link>
            <ul className="pa-svc-rows">
              {live.map((s, i) => (
                <li key={s.slug} data-fade="" style={delay(i)}>
                  <Link href={serviceUrl(s)} className="pa-svc-row" data-cursor="Open">
                    <span className="pa-svc-row__n">{String(i + 1).padStart(2, "0")}</span>
                    <span className="pa-svc-row__t">
                      {s.h1}
                      <small>{s.forWho}</small>
                    </span>
                    <span className="pa-svc-row__img" aria-hidden="true">
                      <Image src={s.image} alt="" fill sizes="140px" />
                    </span>
                  </Link>
                </li>
              ))}
              {!live.length ? (
                <li>
                  <Link href={`/services/${c.slug}`} className="pa-svc-row">
                    <span className="pa-svc-row__n">01</span>
                    <span className="pa-svc-row__t">
                      See every {c.label.toLowerCase()} service
                      <small>{c.short}</small>
                    </span>
                  </Link>
                </li>
              ) : null}
            </ul>
          </section>
        );
      })}

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
