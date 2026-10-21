import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { ClosingCta, PageHead } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { getInsight, INSIGHTS } from "@/content/insights";
import { INSIGHT_LINKS } from "@/content/seo";
import { getService } from "@/content/services";
import { SITE } from "@/content/site";
import { absUrl, breadcrumbLd, pageMeta } from "@/lib/seo";
import { LEGACY_SERVICE_URL } from "@/content/service-pages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INSIGHTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) return { title: "Article not found" };
  return pageMeta({
    title: a.title,
    description: a.excerpt,
    path: `/insights/${a.slug}`,
    type: "article",
    publishedTime: a.date,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) notFound();
  const others = INSIGHTS.filter((x) => x.slug !== a.slug);
  const related = (INSIGHT_LINKS[a.slug]?.services ?? []).map((x) => getService(x)).filter((x) => x !== undefined);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    datePublished: a.date,
    dateModified: a.date,
    author: { "@type": "Organization", name: SITE.name, url: SITE.url },
    publisher: { "@id": `${SITE.url}/#organization` },
    description: a.excerpt,
    image: absUrl("/opengraph-image"),
    mainEntityOfPage: absUrl(`/insights/${a.slug}`),
    url: absUrl(`/insights/${a.slug}`),
  };

  return (
    <>
      <JsonLd
        data={[
          jsonLd,
          breadcrumbLd([
            { name: "Insights", path: "/insights" },
            { name: a.title, path: `/insights/${a.slug}` },
          ]),
        ]}
      />
      <article>
        <PageHead
          crumb={{ label: "All insights", href: "/insights" }}
          eyebrow={a.category}
          title={a.title}
          lead={`${a.author} · ${new Date(a.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · ${a.readingTime} read`}
        />
        <div className="wrap">
          <div className="pa-prose">
            <p className="pa-prose__lead">{a.excerpt}</p>
            {a.content.map((b, i) => {
              if (b.type === "h") return <h2 key={i}>{b.text}</h2>;
              if (b.type === "quote") return <blockquote key={i}>{b.text}</blockquote>;
              if (b.type === "list")
                return (
                  <ul key={i}>
                    {b.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                );
              return <p key={i}>{b.text}</p>;
            })}
            {related.length ? (
              <p className="pa-prose__more">
                Related services:{" "}
                {related.map((svc, i) => (
                  <Fragment key={svc.slug}>
                    {i ? ", " : null}
                    <Link className="link" href={LEGACY_SERVICE_URL[svc.slug]}>
                      {svc.title}
                    </Link>
                  </Fragment>
                ))}
                .
              </p>
            ) : null}
          </div>
        </div>
      </article>

      <section className="ha-block wrap">
        <h2 className="ha-eyebrow" style={{ marginBottom: "1.5rem" }}>
          Keep reading
        </h2>
        <ul className="pa-posts">
          {others.map((o) => (
            <li key={o.slug}>
              <Link href={`/insights/${o.slug}`} className="pa-post" data-cursor="Read">
                <span className="pa-post__cat">{o.category}</span>
                <span className="pa-post__t">{o.title}</span>
                <span className="pa-post__x">{o.excerpt}</span>
                <span className="pa-post__m">{o.readingTime} read</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ClosingCta />
    </>
  );
}
