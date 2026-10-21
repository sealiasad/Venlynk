import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ClosingCta, delay, Head, ProjectCard } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { CATEGORIES, getCategory } from "@/content/catalog";
import { CONTACT } from "@/content/home";
import { getProject } from "@/content/projects";
import { getServicePage, serviceUrl } from "@/content/service-pages";
import { absUrl, breadcrumbLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ category: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) return { title: "Not found" };
  return pageMeta({
    title: c.metaTitle,
    description: c.metaDescription,
    path: `/services/${c.slug}`,
    image: c.image,
    imageAlt: c.imageAlt,
  });
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c) notFound();

  const groups = c.groups.map((g) => ({
    title: g.title,
    live: g.items.map((it) => getServicePage(c.slug, it.slug)).filter((p) => p !== undefined),
    later: g.items.filter((it) => !getServicePage(c.slug, it.slug)),
  }));
  const live = groups.flatMap((g) => g.live);
  const proof = c.proof.map((s) => getProject(s)).filter((p) => p !== undefined);
  const others = CATEGORIES.filter((x) => x.slug !== c.slug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Services", path: "/services" },
            { name: c.label, path: `/services/${c.slug}` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: c.h1,
            serviceType: c.h1,
            description: c.lead,
            url: absUrl(`/services/${c.slug}`),
            provider: { "@id": `${absUrl("/")}/#organization` },
            areaServed: CONTACT.markets,
            ...(live.length
              ? {
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: c.h1,
                    itemListElement: live.map((p) => ({
                      "@type": "Offer",
                      itemOffered: { "@type": "Service", name: p.h1, url: absUrl(serviceUrl(p)) },
                    })),
                  },
                }
              : {}),
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [...c.choose, ...c.faq].map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      <section className="pa-head pa-head--svc cx-head">
        <div className="pa-head__bg" aria-hidden="true" data-parallax="0.3" />
        <div className="wrap pa-svc-hero">
          <div className="pa-head__inner">
            <Link className="pa-crumb" href="/services" data-intro="">
              <span aria-hidden="true">←</span> All services
            </Link>
            <p className="lx-eyebrow" data-intro="" style={{ animationDelay: "0.08s" }}>
              {c.label} · {live.length} service{live.length === 1 ? "" : "s"}
            </p>
            <h1>
              <span className="ha-line">
                <span style={{ animationDelay: "0.15s" }}>{c.h1}</span>
              </span>
            </h1>
            <p className="pa-head__lead" data-intro="" style={{ animationDelay: "0.35s" }}>
              {c.lead}
            </p>
            <div className="ha-row-cta cx-hero-cta" data-intro="" style={{ animationDelay: "0.5s" }}>
              <Link className="ha-btn ha-btn--light" href="/contact">
                Get a fixed quote
              </Link>
              <a className="ha-btn ha-btn--ghost" href={CONTACT.whatsapp} rel="noopener" target="_blank">
                WhatsApp us
              </a>
            </div>
          </div>
          <div className="pa-svc-hero__img" data-clip="">
            <Image src={c.image} alt={c.imageAlt} fill priority sizes="(max-width: 900px) 92vw, 42vw" />
          </div>
        </div>
      </section>

      <section className="ha-block wrap" aria-labelledby="cx-services">
        <h2 id="cx-services" className="sr-only">
          {c.label} services
        </h2>
        <div className="cx-groups">
          {groups.map((g, gi) => (
            <div className="cx-group" key={g.title} data-fade="" style={delay(gi)}>
              <h3 className="cx-group__title">{g.title}</h3>
              {g.live.length ? (
                <ul className="cx-links">
                  {g.live.map((p) => (
                    <li key={p.slug}>
                      <Link href={serviceUrl(p)} className="cx-link">
                        <span className="cx-link__t">{p.h1}</span>
                        <span className="cx-link__s">{p.forWho}</span>
                        <span className="cx-link__go" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
              {g.later.length ? (
                <>
                  <p className="cx-later__label">{g.live.length ? "Also on request" : "On request"}</p>
                  <ul className="cx-later">
                    {g.later.map((it) => (
                      <li key={it.slug}>{it.title}</li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section className="ha-block wrap cx-prose">
        <Head title="How we approach it" />
        <div className="cx-prose__body" data-fade="">
          {c.body.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="ha-block wrap">
        <Head title="Choosing the right option" />
        <div className="cx-choose">
          {c.choose.map((q, i) => (
            <div className="cx-choose__item" key={q.q} data-fade="" style={delay(i)}>
              <h3>{q.q}</h3>
              <p>{q.a}</p>
            </div>
          ))}
        </div>
      </section>

      {proof.length ? (
        <section className="ha-block wrap">
          <Head title="Work we have delivered" more={{ label: "See all work", href: "/work" }} />
          <div className="pa-grid">
            {proof.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="ha-block wrap">
        <div className="ha-faq">
          <Head title="Questions clients ask" />
          <div data-fade="">
            {c.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ha-block wrap pa-tight">
        <h2 className="ha-eyebrow" style={{ marginBottom: "1.25rem" }}>
          Other services
        </h2>
        <ul className="cx-chips">
          {others.map((o) => (
            <li key={o.slug}>
              <Link className="pa-chip" href={`/services/${o.slug}`}>
                {o.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ClosingCta title={c.closing} />
    </>
  );
}
