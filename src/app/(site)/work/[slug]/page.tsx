import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ClosingCta, delay, LabelPill, ProjectCard, ResultsVisual } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { industryTitle } from "@/content/industries";
import { getNextProject, getProject, PROJECTS } from "@/content/projects";
import { CASE_TYPE } from "@/content/seo";
import { getPractice, getService } from "@/content/services";
import { breadcrumbLd, pageMeta } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project not found" };
  const type = CASE_TYPE[p.slug];
  return pageMeta({
    title: type ? `${p.client}: ${type} case study` : `${p.client} case study`,
    description: p.summary,
    path: `/work/${p.slug}`,
    image: p.image,
    imageAlt: p.imageAlt,
  });
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const next = getNextProject(p.slug);
  const related = PROJECTS.filter((x) => x.slug !== p.slug && x.slug !== next.slug && x.industry === p.industry).slice(0, 2);
  const host = p.url ? new URL(p.url).hostname.replace(/^www\./, "") : null;

  const meta = [
    { k: "Platform", v: p.platform },
    { k: "Practice", v: getPractice(p.practice).title },
    { k: "Industry", v: industryTitle(p.industry), href: `/industries/${p.industry}` },
  ];

  return (
    <article>
      <JsonLd
        data={breadcrumbLd([
          { name: "Work", path: "/work" },
          { name: p.client, path: `/work/${p.slug}` },
        ])}
      />
      <section className="pa-head pa-head--case">
        <div className="pa-head__bg" aria-hidden="true" data-parallax="0.3" />
        <div className="wrap pa-head__inner">
          <Link className="pa-crumb" href="/work" data-intro="">
            <span aria-hidden="true">←</span> All work
          </Link>
          <div className="pa-case__tags" data-intro="" style={{ animationDelay: "0.1s" }}>
            <LabelPill label={p.label} />
            <span>{p.sector}</span>
          </div>
          <h1>
            <span className="ha-line">
              <span style={{ animationDelay: "0.15s" }}>{p.client}</span>
            </span>
          </h1>
          <p className="pa-head__lead" data-intro="" style={{ animationDelay: "0.4s" }}>
            {p.summary}
          </p>
        </div>
      </section>

      <div className="wrap">
        <div className="pa-case__media" data-clip="">
          {p.image ? (
            <Image src={p.image} alt={p.imageAlt ?? p.client} fill priority sizes="(max-width: 1500px) 94vw, 1400px" />
          ) : (
            <ResultsVisual project={p} />
          )}
        </div>

        <dl className="pa-meta" data-fade="">
          {meta.map((m) => (
            <div key={m.k}>
              <dt>{m.k}</dt>
              <dd>{m.href ? <Link href={m.href}>{m.v}</Link> : m.v}</dd>
            </div>
          ))}
          <div>
            <dt>{host ? "Website" : "Engagement"}</dt>
            <dd>
              {host ? (
                <a href={p.url} target="_blank" rel="noreferrer">
                  {host} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                p.label
              )}
            </dd>
          </div>
        </dl>
      </div>

      <section className="ha-block wrap pa-case__body">
        <div className="pa-split">
          <h2 className="ha-eyebrow" data-fade="">
            What we did
          </h2>
          <ol className="pa-did">
            {p.did.map((d, i) => (
              <li key={d} data-fade="" style={delay(i)}>
                <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                {d}
              </li>
            ))}
          </ol>
        </div>

        <div className="pa-split">
          <h2 className="ha-eyebrow" data-fade="">
            Services
          </h2>
          <ul className="pa-svc-links">
            {p.services.map((s, i) => {
              const svc = getService(s);
              if (!svc) return null;
              return (
                <li key={s} data-fade="" style={delay(i)}>
                  <Link href={`/services/${s}`}>
                    <span>{svc.title}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {p.results?.length ? (
          <div className="pa-split">
            <h2 className="ha-eyebrow" data-fade="">
              Results
            </h2>
            <div>
              <div className="pa-results">
                {p.results.map((r, i) => (
                  <div className={`ha-res ${i % 2 ? "" : "ha-res--blue"}`} key={r.value + r.label} data-fade="" style={delay(i)}>
                    <small>{p.client}</small>
                    <div>
                      <b>{r.value}</b>
                      <p>{r.label}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="pa-note">
                {p.label === "Founder's previous role"
                  ? "Measured during Ali's earlier role, before or alongside Venlynk."
                  : "Reported by the client after launch."}
              </p>
            </div>
          </div>
        ) : null}
      </section>

      <section className="wrap pa-next">
        <Link className="pa-next__link" href={`/work/${next.slug}`} data-cursor="Next">
          <span className="pa-next__text">
            <span className="ha-eyebrow">Next project</span>
            <span className="pa-next__name">
              {next.client} <span aria-hidden="true">→</span>
            </span>
            <span className="pa-next__sector">{next.sector}</span>
          </span>
          <span className="pa-next__media">
            {next.image ? (
              <Image src={next.image} alt="" fill sizes="(max-width: 900px) 90vw, 45vw" />
            ) : (
              <ResultsVisual project={next} />
            )}
          </span>
        </Link>
      </section>

      {related.length ? (
        <section className="ha-block wrap">
          <h2 className="ha-eyebrow" style={{ marginBottom: "1.5rem" }}>
            More in {industryTitle(p.industry).toLowerCase()}
          </h2>
          <div className="pa-grid pa-grid--two">
            {related.map((r) => (
              <ProjectCard key={r.slug} project={r} sizes="(max-width: 760px) 100vw, 50vw" />
            ))}
          </div>
        </section>
      ) : null}

      <ClosingCta title={"Have a project\nlike this?"} />
    </article>
  );
}
