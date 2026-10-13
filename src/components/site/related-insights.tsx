import Link from "next/link";

import { getInsight } from "@/content/insights";

/** Links a service or industry page to the articles that back it up. */
export function RelatedInsights({ slugs, title = "Read more from the studio" }: { slugs: string[]; title?: string }) {
  const posts = slugs.map((s) => getInsight(s)).filter((a) => a !== undefined);
  if (!posts.length) return null;
  return (
    <section className="ha-block wrap pa-tight">
      <h2 className="ha-eyebrow" style={{ marginBottom: "1.5rem" }}>
        {title}
      </h2>
      <ul className="pa-posts">
        {posts.map((a) => (
          <li key={a.slug}>
            <Link href={`/insights/${a.slug}`} className="pa-post" data-cursor="Read">
              <span className="pa-post__cat">{a.category}</span>
              <span className="pa-post__t">{a.title}</span>
              <span className="pa-post__x">{a.excerpt}</span>
              <span className="pa-post__m">{a.readingTime} read</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
