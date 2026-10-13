import type { Metadata } from "next";
import Link from "next/link";

import { ClosingCta, delay, PageHead } from "@/components/site/blocks";
import { INSIGHTS } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical notes on product design, engineering and AI from the Venlynk studio.",
  alternates: { canonical: "/insights" },
};

const date = (d: string) => new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function InsightsPage() {
  return (
    <>
      <PageHead
        eyebrow="Insights"
        title={"Notes from\n*the studio.*"}
        lead="Practical writing on product design, engineering and AI, from what we have learned shipping real products."
      />
      <section className="ha-block wrap pa-tight">
        <ul className="pa-posts">
          {INSIGHTS.map((a, i) => (
            <li key={a.slug} data-fade="" style={delay(i)}>
              <Link href={`/insights/${a.slug}`} className="pa-post" data-cursor="Read">
                <span className="pa-post__cat">{a.category}</span>
                <span className="pa-post__t">{a.title}</span>
                <span className="pa-post__x">{a.excerpt}</span>
                <span className="pa-post__m">
                  {date(a.date)} · {a.readingTime} read
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ClosingCta />
    </>
  );
}
