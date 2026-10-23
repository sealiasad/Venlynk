import type { Metadata } from "next";
import Link from "next/link";

import { ClosingCta, delay, PageHead } from "@/components/site/blocks";
import { FlagIcon } from "@/components/site/mega-menu";
import { citiesIn, LOCATIONS } from "@/content/locations";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Countries We Work With",
  description:
    "Venlynk builds websites, apps, Shopify stores and AI agents for businesses in the Gulf, the UK, Europe, North America, Australia and Asia, working remotely from Pakistan.",
  path: "/locations",
});

const REGIONS = [
  { id: "gulf", title: "The Gulf", text: "One to two hours from Pakistan, so our working days line up. Arabic and English, local card networks and data rules built in.", slugs: ["uae", "saudi-arabia", "qatar", "kuwait", "bahrain", "oman"] },
  { id: "europe", title: "UK and Europe", text: "Our afternoon is your morning. GDPR, accessibility and local payment habits planned in from the start.", slugs: ["uk", "netherlands", "ireland", "turkey"] },
  { id: "asia", title: "Asia and Australia", text: "Close time zones across Asia, and a shared afternoon with Australia.", slugs: ["pakistan", "singapore", "malaysia", "australia"] },
  { id: "na", title: "North America", text: "We work while you sleep and you review progress each morning, with a short daily call.", slugs: ["usa", "canada"] },
] as const;

export default function LocationsPage() {
  return (
    <>
      <PageHead
        eyebrow="Locations"
        title={"Where our\n*clients are.*"}
        lead="We work remotely from Pakistan with businesses around the world. Each page below covers what we have learned about building for that market: how people pay, the rules that apply and how we work across time zones."
      />
      {REGIONS.map((r) => {
        const items = r.slugs.map((sl) => LOCATIONS.find((l) => l.slug === sl)).filter((l) => l !== undefined);
        return (
          <section className="ha-block wrap lc-region" key={r.title} aria-labelledby={`r-${r.id}`}>
            <div className="lc-region__head">
              <h2 id={`r-${r.id}`}>{r.title}</h2>
              <p>{r.text}</p>
            </div>
            <ul className="lc-grid">
              {items.map((l, i) => {
                const cities = citiesIn(l.slug);
                return (
                  <li key={l.slug} className="lc-card" data-fade="" style={delay(i)}>
                    <Link href={`/locations/${l.slug}`} className="lc-card__main">
                      <FlagIcon code={l.isoCode} className="lc-card__flag" />
                      <span className="lc-card__name">{l.country}</span>
                      <span className="lc-card__go" aria-hidden="true">
                        →
                      </span>
                    </Link>
                    {cities.length ? (
                      <ul className="lc-card__cities">
                        {cities.map((c) => (
                          <li key={c.slug}>
                            <Link href={`/locations/${l.slug}/${c.slug}`}>{c.country}</Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
      <ClosingCta title={"Wherever you are,\nlet's talk."} />
    </>
  );
}
