import Link from "next/link";

import { PageHead } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { formatDate } from "@/components/site/template-parts";
import { LEGAL_LINKS, type LegalDoc } from "@/content/legal";
import { SITE } from "@/content/site";
import { absUrl, breadcrumbLd } from "@/lib/seo";

/** Turns site URLs and the email address in policy text into links. */
function rich(text: string) {
  const parts = text.split(/(https:\/\/[^\s,]+[^\s,.]|[\w.+-]+@[\w-]+\.[\w.]+[\w])/g);
  return parts.map((part, i) => {
    if (i % 2 === 0) return part;
    if (part.includes("@")) return <a key={i} href={`mailto:${part}`}>{part}</a>;
    if (part.startsWith(SITE.url)) {
      const href = part.slice(SITE.url.length) || "/";
      return href.endsWith(".txt") ? <a key={i} href={href}>{part.replace("https://", "")}</a> : <Link key={i} href={href}>{part.replace("https://", "")}</Link>;
    }
    return <a key={i} href={part} rel="noopener" target="_blank">{part.replace("https://", "")}</a>;
  });
}

/** Shared template for the privacy, cookie, terms and AI instructions pages. */
export function LegalView({ doc, eyebrow = "Legal" }: { doc: LegalDoc; eyebrow?: string }) {
  const path = `/${doc.slug}`;
  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([{ name: doc.title, path }]),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: doc.title,
            description: doc.metaDescription,
            url: absUrl(path),
            dateModified: doc.updated,
            isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
          },
        ]}
      />
      <PageHead eyebrow={eyebrow} title={doc.title} lead={doc.lead} />
      <section className="ha-block wrap pa-tight lg-doc">
        <aside className="lg-doc__side" aria-label="On this page">
          <div className="lg-doc__card">
            <p className="lg-doc__meta">
              <span>Last updated</span>
              <time dateTime={doc.updated}>{formatDate(doc.updated)}</time>
            </p>
            <nav className="lg-doc__toc">
              <p className="lg-doc__label">On this page</p>
              <ol>
                {doc.sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`}>{s.title}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>
          <nav className="lg-doc__card lg-doc__others" aria-label="Policies">
            <p className="lg-doc__label">Policies</p>
            <ul>
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  {l.href === path ? (
                    <span aria-current="page">{l.label}</span>
                  ) : (
                    <Link href={l.href}>{l.label}</Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <div className="lg-doc__body">
          {doc.sections.map((s, i) => (
            <section key={s.id} id={s.id} className="lg-doc__sec">
              <h2>
                <span className="lg-doc__num">{String(i + 1).padStart(2, "0")}</span>
                {s.title}
              </h2>
              {s.blocks.map((b, j) =>
                "p" in b ? (
                  <p key={j}>{rich(b.p)}</p>
                ) : "list" in b ? (
                  <ul key={j} className={b.list.every((x) => x.length < 40 && !x.includes("http")) ? "lg-doc__chips" : "lg-doc__list"}>
                    {b.list.map((x) => (
                      <li key={x}>{rich(x)}</li>
                    ))}
                  </ul>
                ) : (
                  <div key={j} className="lg-doc__table" role="region" aria-label={`${s.title} table`} tabIndex={0}>
                    <table>
                      <thead>
                        <tr>
                          {b.table.head.map((h) => (
                            <th key={h} scope="col">
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {b.table.rows.map((r) => (
                          <tr key={r.join("|")}>
                            {r.map((c, k) => (k === 0 ? <th key={k} scope="row">{c}</th> : <td key={k}>{rich(c)}</td>))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ),
              )}
            </section>
          ))}
          <div className="lg-doc__end">
            <p>Questions about this page?</p>
            <a className="lg-doc__mail" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
