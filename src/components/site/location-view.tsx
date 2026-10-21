import * as Flags from "country-flag-icons/react/3x2";
import Link from "next/link";

import { ClosingCta, delay, Head, ProjectCard } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { RouteMapVisual } from "@/components/site/route-map";
import { TimeOverlap } from "@/components/site/time-overlap";
import { CONTACT } from "@/content/home";
import { citiesIn, LOCATIONS, type LocationPage } from "@/content/locations";
import { getProject } from "@/content/projects";
import { getServicePage, serviceUrl } from "@/content/service-pages";
import { SITE } from "@/content/site";
import { absUrl, breadcrumbLd } from "@/lib/seo";

function Flag({ code, className }: { code: string; className?: string }) {
  const F = (Flags as Record<string, (p: { title?: string; className?: string }) => React.ReactElement>)[code];
  return F ? <F className={className} /> : null;
}

/** "11.3 million, about 99% of the population" -> big "11.3 million", small rest. */
function splitStat(v: string) {
  const i = v.indexOf(", ");
  return i > 0 ? { big: v.slice(0, i), small: v.slice(i + 2) } : { big: v, small: "" };
}

const ICON = {
  card: "M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 17.5v-11ZM3 9h18M7 15h4",
  shield: "M12 3 4.5 6v5.5c0 4.7 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.8 7.5-9.5V6L12 3Zm-3 9 2 2 4-4",
  spark: "M12 3v4m0 10v4M3 12h4m10 0h4M5.6 5.6l2.8 2.8m7.2 7.2 2.8 2.8m0-12.8-2.8 2.8m-7.2 7.2-2.8 2.8",
};
const Icon = ({ d }: { d: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className="lx-icon">
    <path d={d} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/** Shared layout for country and city pages. */
export function LocationView({ l, parent }: { l: LocationPage; parent?: LocationPage }) {
  const services = l.services
    .map((ref) => {
      const [c, s] = ref.split("/");
      return getServicePage(c, s);
    })
    .filter((p) => p !== undefined);
  const proof = l.proof.map((s) => getProject(s)).filter((p) => p !== undefined);
  const path = parent ? `/locations/${parent.slug}/${l.slug}` : `/locations/${l.slug}`;
  const cities = parent ? [] : citiesIn(l.slug);
  const siblings = parent ? citiesIn(parent.slug).filter((c) => c.slug !== l.slug) : LOCATIONS.filter((x) => x.slug !== l.slug);
  const home = l.pin.name === "Karachi";
  const crumb = parent ? { label: parent.country, href: `/locations/${parent.slug}` } : { label: "All locations", href: "/locations" };

  return (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: "Locations", path: "/locations" },
            ...(parent ? [{ name: parent.country, path: `/locations/${parent.slug}` }] : []),
            { name: l.country, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: l.h1,
            description: l.lead,
            url: absUrl(path),
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: parent
              ? { "@type": "City", name: l.country, containedInPlace: { "@type": "Country", name: parent.country } }
              : { "@type": "Country", name: l.country, identifier: l.isoCode },
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

      <section className="pa-head lx-head">
        <div className="pa-head__bg" aria-hidden="true" data-parallax="0.3" />
        <div className="wrap lx-hero">
          <div className="lx-hero__text">
            <Link className="pa-crumb" href={crumb.href} data-intro="">
              <span aria-hidden="true">←</span> {crumb.label}
            </Link>
            <p className="lx-eyebrow" data-intro="" style={{ animationDelay: "0.08s" }}>
              <Flag code={l.isoCode} className="lx-flag" />
              {l.country}
            </p>
            <h1>
              <span className="ha-line">
                <span style={{ animationDelay: "0.15s" }}>{l.h1}</span>
              </span>
            </h1>
            <p className="pa-head__lead" data-intro="" style={{ animationDelay: "0.35s" }}>
              {l.lead}
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
          <figure className="lx-card" data-intro="" style={{ animationDelay: "0.3s" }}>
            <figcaption className="lx-card__top">
              <span className="lx-card__place">
                <Flag code={l.isoCode} className="lx-flag lx-flag--lg" />
                <span>
                  <b>{l.pin.name}</b>
                  <small>{home ? "Our home city" : "Served remotely from Karachi"}</small>
                </span>
              </span>
              <span className="lx-card__tag">{home ? "Home base" : "Remote"}</span>
            </figcaption>
            <RouteMapVisual to={home ? null : { lat: l.pin.lat, lng: l.pin.lng }} label={l.pin.name} id={`rm-${l.slug}`} />
          </figure>
        </div>
      </section>

      {l.stats ? (
        <section className="wrap lx-stats-wrap" aria-label="Key figures">
          <ul className="lx-stats">
            {l.stats.map((s, i) => {
              const v = splitStat(s.value);
              return (
                <li key={s.label} className="lx-stat" data-fade="" style={delay(i)}>
                  <b>{v.big}</b>
                  {v.small ? <em>{v.small}</em> : null}
                  <span>{s.label}</span>
                </li>
              );
            })}
          </ul>
          {l.statsNote ? <p className="lx-note">{l.statsNote}</p> : null}
        </section>
      ) : null}

      <section className="ha-block wrap lx-split">
        <div className="lx-split__head">
          <p className="lx-kicker">The market</p>
          <h2>What building for {l.inText} really means</h2>
        </div>
        <div className="lx-split__body" data-fade="">
          {l.market.map((p, i) => (
            <p key={p.slice(0, 32)} className={i === 0 ? "lx-first" : undefined}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="ha-block wrap">
        <Head title={`What businesses in ${l.inText} ask us for`} />
        <div className="lx-bento">
          {l.needs.map((n, i) => (
            <div className={`lx-bento__item lx-bento__item--${i}`} key={n.title} data-fade="" style={delay(i)}>
              <span className="lx-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{n.title}</h3>
              <p>{n.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="ha-block wrap lx-time">
        <div className="lx-time__panel" data-fade="">
          <div className="lx-time__head">
            <p className="lx-kicker">Time zones</p>
            <h2>Working with us from {l.inText}</h2>
          </div>
          <TimeOverlap tz={l.tz} city={l.pin.name} />
        </div>
        <ul className="lx-work">
          {l.working.map((w, i) => (
            <li key={w.title} data-fade="" style={delay(i)}>
              <h3>{w.title}</h3>
              <p>{w.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {l.payments ? (
        <section className="ha-block wrap">
          <Head title="Payments your customers expect" />
          <div className="lx-pay">
            {l.payments.map((p, i) => (
              <div className="lx-pay__item" key={p.name} data-fade="" style={delay(i)}>
                <Icon d={ICON.card} />
                <h3>{p.name}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {l.rules ? (
        <section className="ha-block wrap">
          <Head title="Rules we build around" text="General information, not legal advice. Your lawyer has the final word on compliance." />
          <div className="lx-rules">
            {l.rules.map((r, i) => (
              <div className="lx-rules__item" key={r.title} data-fade="" style={delay(i)}>
                <Icon d={ICON.shield} />
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      {parent ? (
        <section className="wrap lx-parent">
          <p>
            Payments, data rules and how we work across time zones are covered on our{" "}
            <Link className="link" href={`/locations/${parent.slug}`}>
              {parent.country} page
            </Link>
            .
          </p>
        </section>
      ) : null}

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
          <Head title={l.proofTitle ?? "Work we have delivered"} text={l.proofNote} more={{ label: "See all work", href: "/work" }} />
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

      <section className="ha-block wrap pa-tight lx-foot">
        {cities.length ? (
          <div>
            <p className="lx-kicker">Cities</p>
            <ul className="lx-chips">
              {cities.map((c) => (
                <li key={c.slug}>
                  <Link className="lx-chip" href={`/locations/${l.slug}/${c.slug}`}>
                    <Flag code={c.isoCode} className="lx-flag" />
                    {c.country}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
        <div>
          <p className="lx-kicker">{parent ? `Other cities in ${parent.inText}` : "Other countries"}</p>
          <ul className="lx-chips">
            {siblings.map((x) => (
              <li key={x.slug}>
                <Link className="lx-chip" href={parent ? `/locations/${parent.slug}/${x.slug}` : `/locations/${x.slug}`}>
                  <Flag code={x.isoCode} className="lx-flag" />
                  {x.country}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="lx-kicker">Sources</p>
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
              {new Date(`${l.updated}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" })}
            </time>
          </p>
        </div>
      </section>

      <ClosingCta title={l.closing} />
    </>
  );
}
