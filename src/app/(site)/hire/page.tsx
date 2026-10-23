import type { Metadata } from "next";
import Link from "next/link";

import { delay } from "@/components/site/blocks";
import { CtaCard, Crumbs, HeroCtas, SecHead } from "@/components/site/template-parts";
import { HIRE_MODELS, HIRE_PAGES } from "@/content/hire";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Hire Developers: Flutter, React Native, Shopify, Next.js",
  description:
    "Hire developers who join your team: Flutter, React Native, Shopify and React/Next.js, or a dedicated product team. Full time, part time or as a squad.",
  path: "/hire",
});

export default function HireIndex() {
  return (
    <>
      <section className="vt-hero">
        <div className="vt-hero__bg" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={[{ label: "Home", href: "/" }, { label: "Hire developers" }]} />
          <div className="vt-hero__text vt-hero__text--wide">
            <p className="vt-kicker" data-intro="">
              Hire developers
            </p>
            <h1 className="vt-h1" data-intro="" style={{ animationDelay: "0.1s" }}>
              Developers who join your team, not just your project
            </h1>
            <p className="vt-lead" data-intro="" style={{ animationDelay: "0.2s" }}>
              Add experienced developers to your own team, working in your tools, sprints and code review. One person, a few hours a month, or a small dedicated team led by a senior engineer.
            </p>
            <div data-intro="" style={{ animationDelay: "0.3s" }}>
              <HeroCtas />
            </div>
          </div>
        </div>
      </section>

      <section className="vt-sec vt-sec--first">
        <div className="wrap">
          <SecHead kicker="Who you can hire" title="Pick the skills you need" />
          <ul className="vt-tiles">
            {HIRE_PAGES.map((h, i) => (
              <li key={h.slug} data-fade="" style={delay(i)}>
                <Link href={`/hire/${h.slug}`}>
                  <h3>{h.h1}</h3>
                  <p>{h.forWho}</p>
                  <span className="vt-go">
                    See how it works <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="vt-sec">
        <div className="wrap">
          <SecHead kicker="Ways to hire" title="Pick the setup that fits your team" text="Terms are agreed on the first call. Your code always lives in your repositories." />
          <ol className="vt-steps vt-steps--3">
            {HIRE_MODELS.map((m, i) => (
              <li key={m.title} data-fade="" style={delay(i, 100)}>
                <span className="vt-dot">{String(i + 1).padStart(2, "0")}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </li>
            ))}
          </ol>
          <p className="vt-muted" style={{ marginTop: "2rem" }}>
            Need a fixed scope and a fixed price instead? <Link className="link" href="/services">See our services</Link>.
          </p>
        </div>
      </section>

      <CtaCard title="Need more hands on your team?" text="Tell us about your team and the work you need covered. After a 30-minute call, we propose the right people and the terms." />
    </>
  );
}
