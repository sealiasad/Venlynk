import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ClosingCta, delay, Head, PageHead, ProjectCard } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { CONTACT } from "@/content/home";
import { getLocation, LOCATIONS } from "@/content/locations";
import { getProject } from "@/content/projects";
import { getServicePage, serviceUrl } from "@/content/service-pages";
import { SITE } from "@/content/site";
import { absUrl, breadcrumbLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ country: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map((l) => ({ country: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { country } = await params;
  const l = getLocation(country);
  if (!l) return { title: "Not found" };
  return pageMeta({ title: l.metaTitle, description: l.metaDescription, path: `/locations/${l.slug}` });
}

export default async function LocationPage({ params }: Props) {
  const { country } = await params;
  const l = getLocation(country);
  if (!l) notFound();

  const services = l.services
    .map((ref) => {
      const [c, s] = ref.split("/");
      return getServicePage(c, s);
    })
    .filter((p) => p !== undefined);
  const proof = l.proof.map((s) => getProject(s)).filter((p) => p !== undefined);
  const path = `/locations/${l.slug}`;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Locations", path: "/locations" },
            { name: l.country, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: l.h1,
            description: l.lead,
            url: absUrl(path),
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: { "@type": "Country", name: l.country, identifier: l.isoCode },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: l.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      <PageHead eyebrow={l.country} title={l.h1} lead={l.lead} crumb={{ label: "All locations", href: "/locations" }}>
        <div className="ha-row-cta cx-hero-cta">
          <Link className="ha-btn ha-btn--light" href="/contact">
            Get a fixed quote
          </Link>
          <a className="ha-btn ha-btn--ghost" href={CONTACT.whatsapp} rel="noopener" target="_blank">
            Message us on WhatsApp
          </a>
        </div>
      </PageHead>

      <section className="ha-block wrap cx-prose">
        <Head title={`The market in ${l.inText}`} />
        <div className="cx-prose__body" data-fade="">
          {l.market.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </section>

      <section className="ha-block wrap">
        <Head title="By the numbers" text={l.statsNote} />
        <div className="cx-facts" data-fade="">
          <table>
            <tbody>
              {l.stats.map((s) => (
                <tr key={s.label}>
                  <th scope="row">{s.label}</th>
                  <td>{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="ha-block wrap">
        <Head title={`What businesses in ${l.inText} ask us for`} />
        <div className="cx-choose">
          {l.needs.map((n, i) => (
            <div className="cx-choose__item" key={n.title} data-fade="" style={delay(i)}>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ha-block wrap">
        <Head title="Payments your customers expect" />
        <div className="pa-get">
          {l.payments.map((p, i) => (
            <div className="pa-get__item" key={p.name} data-fade="" style={delay(i)}>
              <span className="pa-get__top">
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <h3>{p.name}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ha-block wrap">
        <Head title="Rules we build around" />
        <div className="cx-choose">
          {l.rules.map((r, i) => (
            <div className="cx-choose__item" key={r.title} data-fade="" style={delay(i)}>
              <h3>{r.title}</h3>
              <p>{r.body}</p>
            </div>
          ))}
        </div>
        <p className="cx-updated">This is general information, not legal advice. Your lawyer has the final word on compliance.</p>
      </section>

      <section className="ha-block wrap">
        <Head title={`Working with us from ${l.inText}`} />
        <ol className="ha-steps pa-steps3">
          {l.working.map((w, i) => (
            <li className="ha-step" key={w.title} data-fade="" style={delay(i, 100)}>
              <b aria-hidden="true">{String(i + 1).padStart(2, "0")}</b>
              <div>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ha-block wrap">
        <Head title="Services clients here choose most" more={{ label: "All services", href: "/services" }} />
        <ul className="cx-links cx-links--related">
          {services.map((p) => (
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
      </section>

      {proof.length ? (
        <section className="ha-block wrap">
          <Head title="Work we have delivered" text={l.proofNote} more={{ label: "See all work", href: "/work" }} />
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
            {l.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="ha-block wrap pa-tight">
        <h2 className="ha-eyebrow" style={{ marginBottom: "1rem" }}>
          Sources
        </h2>
        <ul className="cx-sources">
          {l.sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} rel="noopener" target="_blank">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="cx-updated">
          Last reviewed{" "}
          <time dateTime={l.updated}>
            {new Date(`${l.updated}T00:00:00Z`).toLocaleDateString("en-GB", {
              day: "numeric",
              month: "long",
              year: "numeric",
              timeZone: "UTC",
            })}
          </time>
        </p>
        <ul className="cx-chips" style={{ marginTop: "2rem" }}>
          {LOCATIONS.filter((x) => x.slug !== l.slug).map((x) => (
            <li key={x.slug}>
              <Link className="pa-chip" href={`/locations/${x.slug}`}>
                {x.country}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <ClosingCta title={l.closing} />
    </>
  );
}
