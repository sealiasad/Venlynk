import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ClosingCta, delay, Head, PageHead } from "@/components/site/blocks";
import { PLANS, STEPS } from "@/content/home";
import { PRACTICES, servicesIn } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three practices, eleven services: product and UX design, websites, mobile apps, online stores, Etsy, Odoo, AI and automation, SEO, AEO, ASO and growth.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHead
        eyebrow="Services"
        title={"Three practices.\n*Eleven services.*"}
        lead="Most clients start with one service and add more as they grow. The people who plan your product are the ones who build it and keep improving it."
      >
        <nav className="pa-jump" aria-label="Practices">
          {PRACTICES.map((p) => (
            <a key={p.slug} href={`#${p.slug}`} className="pa-chip">
              {p.n} {p.title}
            </a>
          ))}
        </nav>
      </PageHead>

      {PRACTICES.map((practice) => (
        <section className="ha-block wrap pa-practice" id={practice.slug} key={practice.slug}>
          <div className={`pa-practice__card ha-card--${practice.tone}`} data-fade="">
            <span className="pa-practice__top">
              <span className="ha-card__n">Practice {practice.n}</span>
            </span>
            <h2>{practice.title}</h2>
            <p>{practice.sub}</p>
          </div>
          <ul className="pa-svc-rows">
            {servicesIn(practice.slug).map((s, i) => (
              <li key={s.slug} data-fade="" style={delay(i)}>
                <Link href={`/services/${s.slug}`} className="pa-svc-row" data-cursor="Open">
                  <span className="pa-svc-row__n">{s.n}</span>
                  <span className="pa-svc-row__t">
                    {s.title}
                    <small>{s.question}</small>
                  </span>
                  <span className="pa-svc-row__s">{s.short}</span>
                  <span className="pa-svc-row__img" aria-hidden="true">
                    <Image src={s.image} alt="" fill sizes="140px" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ))}

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
