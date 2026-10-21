import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ClosingCta, delay, Head, ProjectCard, ToolTiles } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { getCategory } from "@/content/catalog";
import { CONTACT } from "@/content/home";
import { getProject } from "@/content/projects";
import { getServicePage, SERVICE_PAGES, serviceUrl } from "@/content/service-pages";
import { SITE } from "@/content/site";
import { absUrl, breadcrumbLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ category: string; service: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICE_PAGES.map((p) => ({ category: p.category, service: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, service } = await params;
  const p = getServicePage(category, service);
  if (!p) return { title: "Not found" };
  return pageMeta({
    title: p.metaTitle,
    description: p.metaDescription,
    path: serviceUrl(p),
    image: p.image,
    imageAlt: p.imageAlt,
  });
}

/** A related entry is "category" or "category/slug". Returns a label and link, or nothing if not live. */
function relatedLink(ref: string) {
  const [cat, slug] = ref.split("/");
  if (!slug) {
    const c = getCategory(cat);
    return c ? { href: `/services/${c.slug}`, label: `Everything in ${c.label}`, sub: c.short } : null;
  }
  const p = getServicePage(cat, slug);
  return p ? { href: serviceUrl(p), label: p.h1, sub: p.forWho } : null;
}

export default async function ServicePage({ params }: Props) {
  const { category, service } = await params;
  const p = getServicePage(category, service);
  const c = getCategory(category);
  if (!p || !c) notFound();

  const proof = p.proof ? getProject(p.proof.project) : undefined;
  const also = (p.alsoProjects ?? []).map((s) => getProject(s)).filter((x) => x !== undefined);
  const related = p.related.map(relatedLink).filter((x) => x !== null);
  const url = serviceUrl(p);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: p.h1,
            serviceType: p.h1,
            description: p.lead,
            url: absUrl(url),
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: CONTACT.markets,
            category: c.h1,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: p.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          breadcrumbLd([
            { name: "Services", path: "/services" },
            { name: c.label, path: `/services/${c.slug}` },
            { name: p.h1, path: url },
          ]),
        ]}
      />

      <section className="pa-head pa-head--svc">
        <div className="pa-head__bg" aria-hidden="true" data-parallax="0.3" />
        <div className="wrap pa-svc-hero">
          <div className="pa-head__inner">
            <nav className="cx-crumbs" aria-label="Breadcrumb" data-intro="">
              <Link href="/services">Services</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/services/${c.slug}`}>{c.label}</Link>
            </nav>
            <h1>
              <span className="ha-line">
                <span style={{ animationDelay: "0.15s" }}>{p.h1}</span>
              </span>
            </h1>
            <p className="pa-head__lead" data-intro="" style={{ animationDelay: "0.35s" }}>
              {p.lead}
            </p>
            <p className="cx-for" data-intro="" style={{ animationDelay: "0.42s" }}>
              <b>Best for:</b> {p.forWho}
            </p>
            <div className="ha-row-cta cx-hero-cta" data-intro="" style={{ animationDelay: "0.5s" }}>
              <Link className="ha-btn ha-btn--light" href="/contact">
                Get a fixed quote
              </Link>
              <a className="ha-btn ha-btn--ghost" href={CONTACT.whatsapp} rel="noopener" target="_blank">
                WhatsApp us
              </a>
            </div>
            <div data-intro="" style={{ animationDelay: "0.58s" }}>
              <ToolTiles tools={p.tools} />
            </div>
          </div>
          <div className="pa-svc-hero__img" data-clip="">
            <Image src={p.image} alt={p.imageAlt} fill priority sizes="(max-width: 900px) 92vw, 42vw" />
          </div>
        </div>
      </section>

      <section className="ha-block wrap">
        <Head title="Sound familiar?" />
        <ul className="cx-problems">
          {p.problems.map((x, i) => (
            <li key={x} data-fade="" style={delay(i)}>
              {x}
            </li>
          ))}
        </ul>
      </section>

      <section className="ha-block wrap">
        <Head title="What you get" />
        <div className="pa-get">
          {p.deliverables.map((d, i) => (
            <div className="pa-get__item" key={d.title} data-fade="" style={delay(i)}>
              <span className="pa-get__top">
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ha-block wrap">
        <Head title="How it works" text={p.timing} />
        <ol className="ha-steps pa-steps3">
          {p.steps.map((st, i) => (
            <li className="ha-step" key={st.title} data-fade="" style={delay(i, 100)}>
              <b aria-hidden="true">{String(i + 1).padStart(2, "0")}</b>
              <div>
                <h3>{st.title}</h3>
                <p>{st.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ha-block wrap">
        <div className="cx-price" data-fade="">
          <div>
            <h2 className="cx-price__h">What it costs</h2>
            <p className="cx-price__lead">{p.price.headline}</p>
            {p.price.note ? <p className="cx-price__note">{p.price.note}</p> : null}
          </div>
          <div>
            <p className="cx-price__label">What changes the price</p>
            <ul className="cx-price__list">
              {p.price.factors.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {p.facts ? (
        <section className="ha-block wrap">
          <Head title={p.facts.title} text={p.facts.intro} />
          <div className="cx-facts" data-fade="">
            <table>
              <tbody>
                {p.facts.items.map((f) => (
                  <tr key={f.label}>
                    <th scope="row">{f.label}</th>
                    <td>{f.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="cx-facts__src">
              Source{p.facts.sources.length > 1 ? "s" : ""}:{" "}
              {p.facts.sources.map((s, i) => (
                <span key={s.url}>
                  {i ? ", " : ""}
                  <a href={s.url} rel="noopener" target="_blank">
                    {s.label}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </section>
      ) : null}

      {proof && p.proof ? (
        <section className="ha-block wrap">
          <Head title="Work we have delivered" more={{ label: "See all work", href: "/work" }} />
          <div className="cx-proof">
            <div className="cx-proof__card">
              <ProjectCard project={proof} />
            </div>
            <div className="cx-proof__story" data-fade="">
              <p>{p.proof.story}</p>
              <Link className="ha-more" href={`/work/${proof.slug}`}>
                Read the {proof.client} project <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      {also.length ? (
        <section className="ha-block wrap pa-tight">
          <h2 className="ha-eyebrow" style={{ marginBottom: "1.25rem" }}>
            {proof ? "More projects like this" : "Projects like this"}
          </h2>
          <div className="pa-grid">
            {also.map((x) => (
              <ProjectCard key={x.slug} project={x} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="ha-block wrap">
        <div className="cx-notfit" data-fade="">
          <h2>When this is not the right fit</h2>
          <ul>
            {p.notFit.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ha-block wrap">
        <div className="ha-faq">
          <Head title="Questions clients ask" />
          <div data-fade="">
            {p.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {related.length ? (
        <section className="ha-block wrap pa-tight">
          <h2 className="ha-eyebrow" style={{ marginBottom: "1.25rem" }}>
            Related services
          </h2>
          <ul className="cx-links cx-links--related">
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="cx-link">
                  <span className="cx-link__t">{r.label}</span>
                  <span className="cx-link__s">{r.sub}</span>
                  <span className="cx-link__go" aria-hidden="true">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="cx-updated">
            Last reviewed <time dateTime={p.updated}>{formatDate(p.updated)}</time>
          </p>
        </section>
      ) : null}

      <ClosingCta title={p.closing} />
    </>
  );
}

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
