import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { delay, ProjectCard } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { SectionNav } from "@/components/site/section-nav";
import { CtaCard, Crumbs, Faq, formatDate, HeroCtas, SecHead } from "@/components/site/template-parts";
import { getHirePage, HIRE_PAGES } from "@/content/hire";
import { CONTACT } from "@/content/home";
import { getProject } from "@/content/projects";
import { getServicePage, serviceUrl } from "@/content/service-pages";
import { SITE } from "@/content/site";
import { absUrl, breadcrumbLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return HIRE_PAGES.map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const h = getHirePage(slug);
  if (!h) return { title: "Not found" };
  return pageMeta({ title: h.metaTitle, description: h.metaDescription, path: `/hire/${h.slug}` });
}

export default async function HirePageView({ params }: Props) {
  const { slug } = await params;
  const h = getHirePage(slug);
  if (!h) notFound();

  const proof = h.proof.map((p) => getProject(p)).filter((p) => p !== undefined);
  const related = h.related
    .map((ref) => {
      const [c, s] = ref.split("/");
      return getServicePage(c, s);
    })
    .filter((p) => p !== undefined);
  const others = HIRE_PAGES.filter((x) => x.slug !== h.slug);
  const path = `/hire/${h.slug}`;
  const nav = [
    { id: "work", label: "What they do" },
    { id: "models", label: "Ways to hire" },
    { id: "how", label: "How it works" },
    ...(proof.length ? [{ id: "proof", label: "Our work" }] : []),
    { id: "faq", label: "FAQ" },
  ];

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Hire developers", path: "/hire" },
            { name: h.h1, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: h.h1,
            serviceType: h.h1,
            description: h.lead,
            url: absUrl(path),
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: CONTACT.markets,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: h.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          },
        ]}
      />

      <section className="vt-hero">
        <div className="vt-hero__bg" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={[{ label: "Hire developers", href: "/hire" }, { label: h.h1 }]} />
          <div className="vt-hero__text vt-hero__text--wide">
            <p className="vt-kicker" data-intro="">
              Hire {h.skill}
            </p>
            <h1 className="vt-h1" data-intro="" style={{ animationDelay: "0.1s" }}>
              {h.h1}
            </h1>
            <p className="vt-lead" data-intro="" style={{ animationDelay: "0.2s" }}>
              {h.lead}
            </p>
            <div data-intro="" style={{ animationDelay: "0.3s" }}>
              <HeroCtas />
            </div>
          </div>
          <dl className="vt-facts" data-intro="" style={{ animationDelay: "0.4s" }}>
            <div className="vt-facts__wide">
              <dt>Best for</dt>
              <dd>{h.forWho}</dd>
            </div>
            <div>
              <dt>Ways to hire</dt>
              <dd>Full time, monthly hours or a team</dd>
            </div>
            <div>
              <dt>Your code</dt>
              <dd>In your repositories</dd>
            </div>
          </dl>
        </div>
      </section>

      <SectionNav items={nav} whatsapp={CONTACT.whatsapp} />

      <section className="vt-sec vt-sec--first" id="work">
        <div className="wrap">
          <SecHead kicker="What they do" title={`What ${h.skill} work on with you`} />
          <ol className="vt-rows">
            {h.work.map((w, i) => (
              <li key={w.title} data-fade="" style={delay(i)}>
                <span className="vt-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{w.title}</h3>
                  <p>{w.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <ul className="vt-chips vt-stack" aria-label="Skills and tools">
            {h.stack.map((s) => (
              <li key={s}>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="vt-sec" id="models">
        <div className="wrap">
          <SecHead kicker="Ways to hire" title={`How you can work with ${h.skill}`} text="Terms are agreed on the first call." />
          <ol className="vt-steps vt-steps--3">
            {h.models.map((m, i) => (
              <li key={m.title} data-fade="" style={delay(i, 100)}>
                <span className="vt-dot">{String(i + 1).padStart(2, "0")}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="vt-sec" id="how">
        <div className="wrap">
          <SecHead kicker="How it starts" title={`Getting ${h.skill} started`} />
          <ol className="vt-grid3 vt-grid3--4">
            {h.start.map((s, i) => (
              <li key={s.title} data-fade="" style={delay(i)}>
                <span className="vt-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {proof.length ? (
        <section className="vt-sec" id="proof">
          <div className="wrap">
            <SecHead
              kicker="Our work"
              title="Products our team has shipped"
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

      <Faq
        title={`Questions about hiring ${h.skill}`}
        items={h.faq}
        note={
          <p className="vt-updated">
            Last reviewed <time dateTime={h.updated}>{formatDate(h.updated)}</time>
          </p>
        }
      />

      <section className="vt-sec vt-sec--tight">
        <div className="wrap">
          <p className="vt-kicker vt-mb">Prefer a fixed-scope project?</p>
          <ul className="vt-rel">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={serviceUrl(r)}>
                  <span>{r.h1}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="vt-kicker vt-mb" style={{ marginTop: "2.5rem" }}>
            Also hire
          </p>
          <ul className="vt-chips">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/hire/${o.slug}`}>{o.h1.replace(/^Hire /, "")}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaCard title={h.closing} text="Tell us about your team and the work you need covered. After a 30-minute call, we propose the right people and the terms." />
    </>
  );
}
