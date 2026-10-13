import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ClosingCta, PageHead } from "@/components/site/blocks";
import { getInsight, INSIGHTS } from "@/content/insights";
import { SITE } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return INSIGHTS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) return { title: "Article not found" };
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: { type: "article", title: a.title, description: a.excerpt, publishedTime: a.date },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = getInsight(slug);
  if (!a) notFound();
  const others = INSIGHTS.filter((x) => x.slug !== a.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    datePublished: a.date,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name },
    description: a.excerpt,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
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
