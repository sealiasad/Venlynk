import type { Metadata } from "next";
import Link from "next/link";

import { ClosingCta, delay, PageHead } from "@/components/site/blocks";
import { LOCATIONS } from "@/content/locations";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Countries We Work With",
  description:
    "Venlynk builds websites, apps, Shopify stores and AI agents for businesses in the UAE, Saudi Arabia, the UK and Pakistan, working remotely from Karachi.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <PageHead
        eyebrow="Locations"
        title={"Where our\n*clients are.*"}
        lead="We work remotely from Karachi with businesses around the world. Each page below covers what we have learned about building for that market: how people pay, the rules that apply and how we work across time zones."
      />
      <section className="ha-block wrap">
        <ul className="cx-links cx-links--related">
          {LOCATIONS.map((l, i) => (
            <li key={l.slug} data-fade="" style={delay(i)}>
              <Link href={`/locations/${l.slug}`} className="cx-link">
                <span className="cx-link__t">{l.country}</span>
                <span className="cx-link__s">{l.metaDescription}</span>
                <span className="cx-link__go" aria-hidden="true">
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ClosingCta title={"Wherever you are,\nlet's talk."} />
    </>
  );
}
