import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { delay, ProjectCard } from "@/components/site/blocks";
import { CtaCard, Crumbs, Faq, SecHead } from "@/components/site/template-parts";
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
  const total = groups.reduce((n, g) => n + g.live.length + g.later.length, 0);

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

      <section className="vt-hero">
        <div className="vt-hero__bg" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={[{ label: "Services", href: "/services" }, { label: c.label }]} />
          <div className="vt-hero__grid vt-hero__grid--svc">
            <div className="vt-hero__text">
              <p className="vt-kicker" data-intro="">
                {c.label} · {total} services
              </p>
              <h1 className="vt-h1 vt-h1--xl" data-intro="" style={{ animationDelay: "0.1s" }}>
                {c.h1}
              </h1>
              <p className="vt-lead" data-intro="" style={{ animationDelay: "0.2s" }}>
                {c.lead}
              </p>
              <div className="vt-ctas" data-intro="" style={{ animationDelay: "0.3s" }}>
                <Link className="vt-btn vt-btn--primary" href="/contact">
                  Get a fixed quote <span aria-hidden="true">→</span>
                </Link>
                <a className="vt-btn vt-btn--ghost" href="#services">
                  See all {c.label} services
                </a>
              </div>
            </div>
            <figure className="vt-heroimg vt-heroimg--square" data-clip="">
              <Image src={c.image} alt={c.imageAlt} fill priority sizes="(max-width: 1000px) 92vw, 40vw" />
            </figure>
          </div>
        </div>
      </section>

      <section className="vt-sec vt-sec--first" id="services">
        <div className="wrap">
          <SecHead
            kicker={`${c.label} services`}
            title="Pick what you need"
            text="Services with an arrow have their own page. Everything else is available on request, with the same fixed quote."
          />
          <div className={`vt-groups vt-groups--${Math.min(groups.length, 4)}`}>
            {groups.map((g, gi) => (
              <div className="vt-panel vt-group" key={g.title} data-fade="" style={delay(gi)}>
                <h3>
                  {g.title} <span>{g.live.length + g.later.length}</span>
                </h3>
                {g.live.length ? (
                  <ul className="vt-group__live">
                    {g.live.map((p) => (
                      <li key={p.slug}>
                        <Link href={serviceUrl(p)}>
                          {p.h1} <span aria-hidden="true">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {g.later.length ? (
                  <ul className="vt-group__req">
                    {g.later.map((it) => (
                      <li key={it.slug}>{it.title}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="vt-sec">
        <div className="wrap">
          <div className="vt-split">
            <div className="vt-split__side" data-fade="">
              <p className="vt-kicker">Our approach</p>
              <h2 className="vt-h2">How we approach {c.label}</h2>
            </div>
            <div className="vt-prose" data-fade="">
              {c.body.map((p, i) => (
                <p key={p.slice(0, 24)} className={i === 0 ? "vt-prose__first" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </div>
          <div className="vt-duo vt-duo--gap">
            {c.choose.map((q, i) => (
              <div className="vt-panel vt-panel--pad vt-choose" key={q.q} data-fade="" style={delay(i)}>
                <p className="vt-label">Choosing</p>
                <h3 className="vt-h3">{q.q}</h3>
                <p className="vt-muted">{q.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {proof.length ? (
        <section className="vt-sec">
          <div className="wrap">
            <SecHead
              kicker="Work"
              title="Work we have delivered"
              aside={
                <Link className="vt-more" href="/work">
                  See all work <span aria-hidden="true">→</span>
                </Link>
              }
            />
            <div className={`vt-cases vt-cases--${Math.min(proof.length, 3)}`}>
              {proof.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Faq title={`Questions about ${c.label}`} items={c.faq} />

      <section className="vt-sec vt-sec--tight">
        <div className="wrap vt-others">
          <p className="vt-kicker">Other services</p>
          <ul className="vt-chips">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`}>{o.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaCard title={c.closing} />
    </>
  );
}
