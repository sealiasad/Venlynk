import * as Flags from "country-flag-icons/react/3x2";
import Link from "next/link";

import { delay, ProjectCard } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { AreaIcon } from "@/components/site/mega-menu";
import { RouteMapVisual } from "@/components/site/route-map";
import { SectionNav } from "@/components/site/section-nav";
import { CtaCard, Crumbs, Faq, formatDate, HeroCtas, IconList, SecHead } from "@/components/site/template-parts";
import { HeroClocks, TimeOverlap } from "@/components/site/time-overlap";
import { CONTACT } from "@/content/home";
import { citiesIn, type LocationPage } from "@/content/locations";
import { getProject } from "@/content/projects";
import { getServicePage, serviceUrl } from "@/content/service-pages";
import { SITE } from "@/content/site";
import { buildRouteMap } from "@/lib/route-map";
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

const SHORT: Record<string, string> = { AE: "UAE", GB: "UK", US: "USA" };

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
  const home = l.tz === "Asia/Karachi";
  const label = parent ? l.pin.name : (SHORT[l.isoCode] ?? l.country);
  const route = home ? null : buildRouteMap({ lat: l.pin.lat, lng: l.pin.lng });
  const crumbs = [
    { label: "Locations", href: "/locations" },
    ...(parent ? [{ label: parent.country, href: `/locations/${parent.slug}` }] : []),
    { label: l.country },
  ];
  const nav = [
    { id: "services", label: "Services" },
    { id: "market", label: "The market" },
    { id: "needs", label: "What we build" },
    { id: "together", label: "Working together" },
    ...(l.payments || l.rules ? [{ id: "pay", label: l.payments ? "Payments and rules" : "Rules" }] : []),
    ...(proof.length ? [{ id: "work", label: "Our work" }] : []),
    { id: "faq", label: "FAQ" },
  ];

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

      <section className="vt-hero">
        <div className="vt-hero__bg" aria-hidden="true" />
        <div className="wrap">
          <Crumbs items={crumbs} />
          <div className="vt-hero__grid vt-hero__grid--loc">
            <div className="vt-hero__text">
              <p className="vt-kicker vt-kicker--flag" data-intro="">
                <Flag code={l.isoCode} className="vt-flag" />
                {parent ? `${l.country}, ${parent.country}` : l.country}
              </p>
              <h1 className="vt-h1" data-intro="" style={{ animationDelay: "0.1s" }}>
                {l.h1}
              </h1>
              <p className="vt-lead" data-intro="" style={{ animationDelay: "0.2s" }}>
                {l.lead}
              </p>
              <div data-intro="" style={{ animationDelay: "0.3s" }}>
                <HeroCtas />
              </div>
              <ul className="vt-trust" data-intro="" style={{ animationDelay: "0.4s" }}>
                <li>
                  <i aria-hidden="true" />
                  Reply within one working day
                </li>
                <li>Fixed quote before work starts</li>
                <li>Weekly preview links</li>
              </ul>
            </div>
            <figure className="vt-mapcard" data-intro="" style={{ animationDelay: "0.25s" }}>
              <figcaption className="vt-mapcard__top">
                <span>{home ? "Our home base: Pakistan" : <>Pakistan <span aria-hidden="true">→</span> {label}</>}</span>
                {route ? <small>{route.km.toLocaleString("en-GB")} km away</small> : <small>Where our team works</small>}
              </figcaption>
              <RouteMapVisual to={home ? null : { lat: l.pin.lat, lng: l.pin.lng }} label={label} id={`rm-${l.slug}`} />
              <HeroClocks tz={l.tz} label={label} />
            </figure>
          </div>
        </div>
      </section>

      <SectionNav items={nav} whatsapp={CONTACT.whatsapp} />

      <section className="vt-sec vt-sec--first" id="services">
        <div className="wrap">
          <SecHead
            kicker={`Services for ${l.inText}`}
            title={`What clients in ${l.inText} hire us for`}
          />
          <ul className="vt-tiles">
            {services.map((p, i) => (
              <li key={p.slug} data-fade="" style={delay(i)}>
                <Link href={serviceUrl(p)}>
                  <span className="vt-ico">
                    <AreaIcon slug={p.category} />
                  </span>
                  <h3>{p.h1}</h3>
                  <span className="vt-go">
                    View service <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="vt-tiles__foot">
            <span>Need something else? We cover web, mobile, ecommerce, AI, design and growth.</span>
            <Link href="/services">
              Browse all services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="vt-sec" id="market">
        <div className="wrap">
          <div className="vt-split">
            <div className="vt-split__side" data-fade="">
              <p className="vt-kicker">The market</p>
              <h2 className="vt-h2">What building for {l.inText} really means</h2>
            </div>
            <div className="vt-prose" data-fade="">
              {l.market.map((p, i) => (
                <p key={p.slice(0, 32)} className={i === 0 ? "vt-prose__first" : undefined}>
                  {p}
                </p>
              ))}
              {parent ? (
                <p className="vt-muted">
                  Payments, data rules and working across time zones are covered on our{" "}
                  <Link className="link" href={`/locations/${parent.slug}`}>
                    {parent.country} page
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </div>
          {l.stats ? (
            <ul className="vt-stats" aria-label="Key figures">
              {l.stats.map((s, i) => {
                const v = splitStat(s.value);
                return (
                  <li key={s.label} data-fade="" style={delay(i)}>
                    <b>{v.big}</b>
                    <span>{s.label}</span>
                    {v.small ? <em>{v.small}</em> : null}
                  </li>
                );
              })}
            </ul>
          ) : null}
        </div>
      </section>

      <section className="vt-sec" id="needs">
        <div className="wrap">
          <SecHead kicker="What we build" title={`What businesses in ${l.inText} ask us for`} />
          <ol className="vt-rows">
            {l.needs.map((n, i) => (
              <li key={n.title} data-fade="" style={delay(i)}>
                <span className="vt-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{n.title}</h3>
                  <p>{n.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="vt-sec" id="together">
        <div className="wrap vt-split vt-split--even">
          <div className="vt-panel vt-panel--pad" data-fade="">
            <p className="vt-kicker">Working hours</p>
            <TimeOverlap tz={l.tz} label={label} place={l.inText} />
          </div>
          <div className="vt-split__side" data-fade="">
            <p className="vt-kicker">Working together</p>
            <h2 className="vt-h2">Working with us from {l.inText}</h2>
            <IconList icon="check" items={l.working} />
          </div>
        </div>
      </section>

      {l.payments || l.rules ? (
        <section className="vt-sec" id="pay">
          <div className="wrap">
            <SecHead
              kicker={l.payments ? "Payments and rules" : "Rules"}
              title={l.payments ? `Built for how ${l.inText} pays, and what the law expects` : "Rules we build around"}
              text={l.rules ? "General information, not legal advice. Your lawyer has the final word on compliance." : undefined}
            />
            <div className={`vt-duo${l.payments && l.rules ? "" : " vt-duo--one"}`}>
              {l.payments ? (
                <div className="vt-panel vt-panel--pad" data-fade="">
                  <h3 className="vt-h3">Payments customers expect</h3>
                  <IconList icon="card" items={l.payments.map((p) => ({ title: p.name, body: p.body }))} />
                </div>
              ) : null}
              {l.rules ? (
                <div className="vt-panel vt-panel--pad" data-fade="">
                  <h3 className="vt-h3">Rules we build around</h3>
                  <IconList icon="shield" items={l.rules} />
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {proof.length ? (
        <section className="vt-sec" id="work">
          <div className="wrap">
            <SecHead
              kicker="Our work"
              title={l.proofTitle ?? "Work we have delivered"}
              text={l.proofNote}
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
        title={`Questions clients in ${l.inText} ask`}
        items={l.faq}
        note={
          <>
            {cities.length ? (
              <div className="vt-cities">
                <p className="vt-kicker">City pages</p>
                <ul>
                  {cities.map((c) => (
                    <li key={c.slug}>
                      <Link href={`/locations/${l.slug}/${c.slug}`}>
                        {c.country} <span aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            <p className="vt-updated">
              Last reviewed <time dateTime={l.updated}>{formatDate(l.updated)}</time>
            </p>
          </>
        }
      />

      <CtaCard title={l.closing} />
    </>
  );
}
