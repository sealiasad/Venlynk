import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ClosingCta, delay, Head, PageHead, ProjectCard } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { RelatedInsights } from "@/components/site/related-insights";
import { getIndustry, INDUSTRIES } from "@/content/industries";
import { getProjectsBy } from "@/content/projects";
import { insightsFor } from "@/content/seo";
import { getService } from "@/content/services";
import { breadcrumbLd, pageMeta } from "@/lib/seo";
import { LEGACY_SERVICE_URL } from "@/content/service-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) return { title: "Industry not found" };
  return pageMeta({
    title: `${ind.title} websites and apps`,
    description: ind.intro,
    path: `/industries/${ind.slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const ind = getIndustry(slug);
  if (!ind) notFound();
  const work = getProjectsBy({ industry: ind.slug });
  const others = INDUSTRIES.filter((i) => i.slug !== ind.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbLd([
          { name: "Industries", path: "/industries" },
          { name: ind.title, path: `/industries/${ind.slug}` },
        ])}
      />
      <PageHead crumb={{ label: "All industries", href: "/industries" }} eyebrow="Industry" title={ind.title} lead={ind.intro} />

      <section className="ha-block wrap">
        <Head title="Problems we solve here" />
        <ol className="pa-probs">
          {ind.problems.map((p, i) => (
            <li key={p} data-fade="" style={delay(i)}>
              <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              {p}
            </li>
          ))}
        </ol>
      </section>

      <section className="ha-block wrap">
        <Head title={`Work in ${ind.title.toLowerCase()}`} text={`${work.length} projects, each labelled with how it was delivered.`} />
        <div className="pa-grid">
          {work.map((p, i) => (
            <ProjectCard key={p.slug} project={p} priority={i < 2} />
          ))}
        </div>
      </section>

      <RelatedInsights slugs={insightsFor({ industry: ind.slug })} />

      <section className="ha-block wrap">
        <Head title="Services we bring" more={{ label: "All services", href: "/services" }} />
        <ul className="pa-svc-rows">
          {ind.services.map((s) => {
            const svc = getService(s);
            if (!svc) return null;
            return (
              <li key={s} data-fade="">
                <Link href={LEGACY_SERVICE_URL[s]} className="pa-svc-row">
                  <span className="pa-svc-row__n">{svc.n}</span>
                  <span className="pa-svc-row__t">
                    {svc.title}
                    <small>{svc.question}</small>
                  </span>
                  <span className="pa-svc-row__s">{svc.short}</span>
                  <span className="pa-svc-row__img" aria-hidden="true">
                    <Image src={svc.image} alt="" fill sizes="140px" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="wrap pa-tight pa-others">
        <h2 className="ha-eyebrow">Other industries</h2>
        <div className="pa-filters">
          {others.map((o) => (
            <Link key={o.slug} href={`/industries/${o.slug}`} className="pa-chip">
              {o.title}
            </Link>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
