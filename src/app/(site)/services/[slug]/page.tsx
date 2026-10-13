import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ClosingCta, delay, Head, ProjectCard, ToolTiles } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { RelatedInsights } from "@/components/site/related-insights";
import { CONTACT } from "@/content/home";
import { getProjectsBy } from "@/content/projects";
import { insightsFor, SERVICE_SEO } from "@/content/seo";
import { getPractice, getService, SERVICES, servicesIn } from "@/content/services";
import { SITE } from "@/content/site";
import { absUrl, breadcrumbLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return { title: "Service not found" };
  const seo = SERVICE_SEO[s.slug];
  return pageMeta({
    title: seo?.title ?? s.title,
    description: seo?.description ?? `${s.question} ${s.intro}`,
    path: `/services/${s.slug}`,
    image: s.image,
    imageAlt: s.imageAlt,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) notFound();
  const practice = getPractice(s.practice);
  const work = getProjectsBy({ service: s.slug })
    .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)))
    .slice(0, 3);
  const siblings = servicesIn(s.practice).filter((x) => x.slug !== s.slug);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq
      .filter((f) => !f.a.startsWith("["))
      .map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <>
      <JsonLd
        data={[
          faqLd,
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: s.title,
            serviceType: s.title,
            description: s.intro,
            url: absUrl(`/services/${s.slug}`),
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: CONTACT.markets,
          },
          breadcrumbLd([
            { name: "Services", path: "/services" },
            { name: s.title, path: `/services/${s.slug}` },
          ]),
        ]}
      />
      <section className="pa-head pa-head--svc">
        <div className="pa-head__bg" aria-hidden="true" data-parallax="0.3" />
        <div className="wrap pa-svc-hero">
          <div className="pa-head__inner">
            <Link className="pa-crumb" href={`/services#${practice.slug}`} data-intro="">
              <span aria-hidden="true">←</span> All services
            </Link>
            <p className="ha-eyebrow" data-intro="" style={{ animationDelay: "0.1s" }}>
              Service {s.n} · {practice.title}
            </p>
            <h1>
              <span className="ha-line">
                <span style={{ animationDelay: "0.15s" }}>{s.title}</span>
              </span>
            </h1>
            <p className="pa-svc-hero__q" data-intro="" style={{ animationDelay: "0.35s" }}>
              {s.question}
            </p>
            <p className="pa-head__lead" data-intro="" style={{ animationDelay: "0.45s" }}>
              {s.intro}
            </p>
            <div data-intro="" style={{ animationDelay: "0.55s" }}>
              <ToolTiles tools={s.tools} />
            </div>
          </div>
          <div className="pa-svc-hero__img" data-clip="">
            <Image src={s.image} alt={s.imageAlt} fill priority sizes="(max-width: 900px) 92vw, 42vw" />
          </div>
        </div>
      </section>

      <section className="ha-block wrap">
        <Head title="What you get" />
        <div className="pa-get">
          {s.deliverables.map((d, i) => (
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
        <Head title="How it runs" text="Three steps, with something you can see at the end of each." />
        <ol className="ha-steps pa-steps3">
          {s.steps.map((st, i) => (
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

      {work.length ? (
        <section className="ha-block wrap">
          <Head title="Related work" more={{ label: "See all work", href: "/work" }} />
          <div className="pa-grid">
            {work.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>
      ) : null}

      <RelatedInsights slugs={insightsFor({ service: s.slug })} />

      <section className="ha-block wrap">
        <div className="ha-faq">
          <Head title="Questions clients ask" />
          <div data-fade="">
            {s.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {siblings.length ? (
        <section className="ha-block wrap pa-tight">
          <h2 className="ha-eyebrow" style={{ marginBottom: "1.5rem" }}>
            Also in {practice.title.toLowerCase()}
          </h2>
          <ul className="pa-svc-rows">
            {siblings.map((x) => (
              <li key={x.slug}>
                <Link href={`/services/${x.slug}`} className="pa-svc-row">
                  <span className="pa-svc-row__n">{x.n}</span>
                  <span className="pa-svc-row__t">
                    {x.title}
                    <small>{x.question}</small>
                  </span>
                  <span className="pa-svc-row__s">{x.short}</span>
                  <span className="pa-svc-row__img" aria-hidden="true">
                    <Image src={x.image} alt="" fill sizes="140px" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <ClosingCta title={s.closing} />
    </>
  );
}
