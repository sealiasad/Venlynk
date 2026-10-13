import type { Metadata } from "next";
import Link from "next/link";

import { ClosingCta, delay, PageHead } from "@/components/site/blocks";
import { INDUSTRIES } from "@/content/industries";
import { PROJECTS } from "@/content/projects";
import { PAGE_SEO } from "@/content/seo";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({ ...PAGE_SEO.industries, path: "/industries" });

export default function IndustriesPage() {
  return (
    <>
      <PageHead
        eyebrow="Industries"
        title={"Industries we\n*know well.*"}
        lead={`${INDUSTRIES.length} sectors, ${PROJECTS.length} projects. Knowing how a sector works means fewer surprises and better questions on the first call.`}
      />
      <section className="ha-block wrap pa-tight">
        <ul className="pa-inds">
          {INDUSTRIES.map((ind, i) => {
            const clients = PROJECTS.filter((p) => p.industry === ind.slug);
            return (
              <li key={ind.slug} data-fade="" style={delay(i % 3)}>
                <Link href={`/industries/${ind.slug}`} className="pa-ind" data-tilt="">
                  <span className="ha-card__shine" aria-hidden="true" />
                  <span className="pa-ind__top">
                    <span className="pa-ind__n">{String(i + 1).padStart(2, "0")}</span>
                  </span>
                  <span className="pa-ind__body">
                    <span className="pa-ind__t">{ind.title}</span>
                    <span className="pa-ind__s">{ind.short}</span>
                    <span className="pa-ind__c">{clients.map((c) => c.client).join(", ")}</span>
                  </span>
                  <span className="pa-ind__more">
                    {clients.length} projects <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <ClosingCta title={"Working in one\nof these?"} />
    </>
  );
}
