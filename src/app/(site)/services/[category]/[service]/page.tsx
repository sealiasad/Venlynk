import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { delay, ProjectCard, ToolTiles } from "@/components/site/blocks";
import { SectionNav } from "@/components/site/section-nav";
import { CtaCard, Crumbs, Faq, formatDate, HeroCtas, Ico, SecHead } from "@/components/site/template-parts";
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

  const nav = [
    { id: "get", label: "What you get" },
    { id: "how", label: "How it works" },
    ...(proof || also.length ? [{ id: "proof", label: "Example" }] : []),
    { id: "price", label: "Pricing" },
    { id: "fit", label: "Is it right for you" },
    { id: "faq", label: "FAQ" },
  ];

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

      <section className="vt-hero">
        <div className="vt-hero__bg" aria-hidden="true" />
        <div className="wrap">
          <Crumbs
            items={[
              { label: "Services", href: "/services" },
              { label: c.label, href: `/services/${c.slug}` },
              { label: p.h1 },
            ]}
          />
          <div className="vt-hero__grid vt-hero__grid--svc">
            <div className="vt-hero__text">
              <p className="vt-kicker" data-intro="">
                {c.label}
              </p>
              <h1 className="vt-h1" data-intro="" style={{ animationDelay: "0.1s" }}>
                {p.h1}
              </h1>
              <p className="vt-lead" data-intro="" style={{ animationDelay: "0.2s" }}>
                {p.lead}
              </p>
              <div data-intro="" style={{ animationDelay: "0.3s" }}>
                <HeroCtas />
              </div>
            </div>
            <figure className="vt-heroimg" data-clip="">
              <Image src={p.image} alt={p.imageAlt} fill priority sizes="(max-width: 1000px) 92vw, 40vw" />
            </figure>
          </div>
          <dl className="vt-facts" data-intro="" style={{ animationDelay: "0.4s" }}>
            <div className="vt-facts__wide">
              <dt>Best for</dt>
              <dd>{p.forWho}</dd>
            </div>
            <div>
              <dt>Price</dt>
              <dd>Fixed quote after one call</dd>
            </div>
            <div>
              <dt>Progress</dt>
              <dd>A preview link every week</dd>
            </div>
          </dl>
          {p.tools.length ? (
            <div className="vt-tools" data-intro="" style={{ animationDelay: "0.5s" }}>
              <ToolTiles tools={p.tools} />
            </div>
          ) : null}
        </div>
      </section>

      <SectionNav items={nav} whatsapp={CONTACT.whatsapp} />

      <section className="vt-sec vt-sec--first">
        <div className="wrap">
          <SecHead kicker="Sound familiar?" title="You are in the right place if" />
          <ul className="vt-quotes">
            {p.problems.map((x, i) => (
              <li key={x} data-fade="" style={delay(i)}>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="vt-sec" id="get">
        <div className="wrap">
          <SecHead kicker="What you get" title="Everything included" text="Delivered together and tested before launch." />
          <ol className="vt-grid3">
            {p.deliverables.map((d, i) => (
              <li key={d.title} data-fade="" style={delay(i)}>
                <span className="vt-num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="vt-sec" id="how">
        <div className="wrap">
          <SecHead kicker="How it works" title={`${p.steps.length} steps, one fixed price`} text={p.timing} />
          <ol className={`vt-steps vt-steps--${p.steps.length}`}>
            {p.steps.map((st, i) => (
              <li key={st.title} data-fade="" style={delay(i, 100)}>
                <span className={`vt-dot${i === p.steps.length - 1 ? " vt-dot--end" : ""}`}>{i + 1}</span>
                <h3>{st.title}</h3>
                <p>{st.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {p.facts ? (
        <section className="vt-sec">
          <div className="wrap">
            <SecHead kicker="Good to know" title={p.facts.title} text={p.facts.intro} />
            <ul className={`vt-stats vt-stats--facts vt-stats--${Math.min(p.facts.items.length, 4)}`}>
              {p.facts.items.map((f, i) => (
                <li key={f.label} className={f.value.length > 24 ? "vt-stats__text" : undefined} data-fade="" style={delay(i)}>
                  {f.value.length > 24 ? (
                    <>
                      <b>{f.label}</b>
                      <span>{f.value}</span>
                    </>
                  ) : (
                    <>
                      <b>{f.value}</b>
                      <span>{f.label}</span>
                    </>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      {proof && p.proof ? (
        <section className="vt-sec" id="proof">
          <div className="wrap">
            <Link className="vt-story" href={`/work/${proof.slug}`} data-fade="">
              <span className="vt-story__media">
                {proof.image ? (
                  <Image src={proof.image} alt={proof.imageAlt ?? proof.client} fill sizes="(max-width: 1000px) 92vw, 58vw" />
                ) : null}
              </span>
              <span className="vt-story__body">
                <span className="vt-kicker">Example project</span>
                <span className="vt-story__title">{proof.client}</span>
                <span className="vt-story__text">{p.proof.story}</span>
                <span className="vt-tags">
                  {proof.did.slice(0, 3).map((d) => (
                    <span key={d}>{d}</span>
                  ))}
                </span>
                <span className="vt-more">
                  Read the project <span aria-hidden="true">→</span>
                </span>
              </span>
            </Link>
          </div>
        </section>
      ) : null}

      {also.length ? (
        <section className={`vt-sec${proof ? " vt-sec--tight" : ""}`} id={proof ? undefined : "proof"}>
          <div className="wrap">
            <SecHead
              kicker="Our work"
              title={proof ? "More projects like this" : "Projects like this"}
              aside={
                <Link className="vt-more" href="/work">
                  See all work <span aria-hidden="true">→</span>
                </Link>
              }
            />
            <div className={`vt-cases vt-cases--${Math.min(also.length, 3)}`}>
              {also.map((x) => (
                <ProjectCard key={x.slug} project={x} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="vt-sec" id="price">
        <div className="wrap vt-split">
          <div className="vt-split__side" data-fade="">
            <p className="vt-kicker">Pricing</p>
            <h2 className="vt-h2">A fixed quote, so you know the full cost up front</h2>
            <p className="vt-muted">{p.price.headline}</p>
            {p.price.note ? <p className="vt-muted vt-small">{p.price.note}</p> : null}
            <Link className="vt-btn vt-btn--primary" href="/contact">
              Get a fixed quote
            </Link>
          </div>
          <div data-fade="">
            <p className="vt-label">What shapes the quote</p>
            <ol className="vt-numlist">
              {p.price.factors.map((f, i) => (
                <li key={f}>
                  <span className="vt-num">{String(i + 1).padStart(2, "0")}</span>
                  {f}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="vt-sec" id="fit">
        <div className="wrap">
          <SecHead kicker="Is it right for you" title="An honest answer before you spend anything" />
          <div className="vt-duo">
            <div className="vt-panel vt-panel--pad" data-fade="">
              <h3 className="vt-h3 vt-fit">
                <span className="vt-fit__ico vt-fit__ico--yes">
                  <Ico name="check" size={16} />
                </span>
                A good fit
              </h3>
              <ul className="vt-plain">
                <li>{p.forWho}</li>
              </ul>
            </div>
            <div className="vt-panel vt-panel--pad" data-fade="" style={delay(1)}>
              <h3 className="vt-h3 vt-fit">
                <span className="vt-fit__ico vt-fit__ico--no">
                  <Ico name="cross" size={16} />
                </span>
                Probably not the right fit
              </h3>
              <ul className="vt-plain">
                {p.notFit.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Faq
        title="Questions clients ask"
        items={p.faq}
        note={
          <p className="vt-updated">
            Last reviewed <time dateTime={p.updated}>{formatDate(p.updated)}</time>
          </p>
        }
      />

      {related.length ? (
        <section className="vt-sec vt-sec--tight">
          <div className="wrap">
            <p className="vt-kicker vt-mb">Related services</p>
            <ul className="vt-rel">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>
                    <span>{r.label}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaCard title={p.closing} />
    </>
  );
}
