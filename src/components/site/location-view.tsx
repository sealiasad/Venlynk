import * as Flags from "country-flag-icons/react/3x2";
import Link from "next/link";

import { delay, ProjectCard } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { AreaIcon } from "@/components/site/mega-menu";
import { RouteMapVisual } from "@/components/site/route-map";
import { SectionNav } from "@/components/site/section-nav";
import { HtmlLang, CtaCard, Crumbs, Faq, HeroCtas, IconList, LangSwitch, LocalProjectCard, SecHead } from "@/components/site/template-parts";
import { HeroClocks, TimeOverlap } from "@/components/site/time-overlap";
import { CONTACT } from "@/content/home";
import { citiesIn, type LocationPage } from "@/content/locations";
import { getProject } from "@/content/projects";
import { SITE } from "@/content/site";
import { alternatesFor, hasLocation, localizedLocation, localizedService, locationHref, locationPath, serviceHref } from "@/i18n/registry";
import { formatDateIn, LOCALE_META, localePath, ui, type Locale } from "@/i18n/ui";
import { buildRouteMap } from "@/lib/route-map";
import { absUrl, breadcrumbLd } from "@/lib/seo";

function Flag({ code, className }: { code: string; className?: string }) {
  const F = (Flags as Record<string, (p: { title?: string; className?: string }) => React.ReactElement>)[code];
  return F ? <F className={className} /> : null;
}

/** "11.3 million, about 99% of the population" -> big "11.3 million", small rest. */
function splitStat(v: string) {
  const i = v.search(/[,،] /);
  return i > 0 ? { big: v.slice(0, i), small: v.slice(i + 2) } : { big: v, small: "" };
}

const SHORT: Record<string, string> = { AE: "UAE", GB: "UK", US: "USA" };

/** Shared layout for country and city pages, in English or a translation. */
export function LocationView({ l, parent, locale = "en" }: { l: LocationPage; parent?: LocationPage; locale?: Locale }) {
  const t = ui(locale);
  const en = locale === "en";
  const key = parent ? `${parent.slug}/${l.slug}` : l.slug;
  const services = l.services
    .map((ref) => {
      const [c, s] = ref.split("/");
      return localizedService(locale, c, s);
    })
    .filter((p) => p !== undefined);
  const proof = l.proof.map((s) => getProject(s)).filter((p) => p !== undefined);
  const enPath = locationPath(key);
  const path = localePath(locale, enPath);
  const cities = parent ? [] : citiesIn(l.slug).filter((c) => hasLocation(locale, `${l.slug}/${c.slug}`));
  const home = l.tz === "Asia/Karachi";
  const label = en ? (parent ? l.pin.name : (SHORT[l.isoCode] ?? l.country)) : l.pin.name;
  const route = home ? null : buildRouteMap({ lat: l.pin.lat, lng: l.pin.lng });
  const alt = alternatesFor(enPath);
  const crumbs = [
    en ? { label: t.locations, href: "/locations" } : { label: t.home, href: localePath(locale, "/") },
    ...(parent ? [{ label: parent.country, href: locationHref(locale, parent.slug) }] : []),
    { label: l.country },
  ];
  const nav = [
    { id: "services", label: t.nav.services },
    { id: "market", label: t.nav.market },
    { id: "needs", label: t.nav.needs },
    { id: "together", label: t.nav.together },
    ...(l.payments || l.rules ? [{ id: "pay", label: l.payments ? t.nav.payRules : t.nav.rules }] : []),
    ...(proof.length ? [{ id: "work", label: t.nav.work }] : []),
    { id: "faq", label: t.nav.faq },
  ];
  const [noteLead, noteLink] = parent ? t.parentNote(parent.country) : ["", ""];

  const body = (
    <>
      <JsonLd
        data={[
          breadcrumbLd([
            { name: crumbs[0].label, path: crumbs[0].href ?? "/" },
            ...(parent ? [{ name: parent.country, path: locationHref(locale, parent.slug) }] : []),
            { name: l.country, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: l.h1,
            description: l.lead,
            url: absUrl(path),
            inLanguage: LOCALE_META[locale].bcp47,
            provider: { "@id": `${SITE.url}/#organization` },
            areaServed: parent
              ? { "@type": "City", name: l.country, containedInPlace: { "@type": "Country", name: parent.country } }
              : { "@type": "Country", name: l.country, identifier: l.isoCode },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            inLanguage: LOCALE_META[locale].bcp47,
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
          <div className="vt-hero__top">
            <Crumbs items={crumbs} />
            <LangSwitch current={locale} links={{ en: alt.en, ar: alt.ar, tr: alt.tr }} />
          </div>
          <div className="vt-hero__grid vt-hero__grid--loc">
            <div className="vt-hero__text">
              <p className="vt-kicker vt-kicker--flag" data-intro="">
                <Flag code={l.isoCode} className="vt-flag" />
                {parent ? `${l.country}${locale === "ar" ? "، " : ", "}${parent.country}` : l.country}
              </p>
              <h1 className="vt-h1" data-intro="" style={{ animationDelay: "0.1s" }}>
                {l.h1}
              </h1>
              <p className="vt-lead" data-intro="" style={{ animationDelay: "0.2s" }}>
                {l.lead}
              </p>
              <div data-intro="" style={{ animationDelay: "0.3s" }}>
                <HeroCtas locale={locale} />
              </div>
              <ul className="vt-trust" data-intro="" style={{ animationDelay: "0.4s" }}>
                <li>
                  <i aria-hidden="true" />
                  {t.trust[0]}
                </li>
                <li>{t.trust[1]}</li>
                <li>{t.trust[2]}</li>
              </ul>
            </div>
            <figure className="vt-mapcard" data-intro="" style={{ animationDelay: "0.25s" }}>
              <figcaption className="vt-mapcard__top">
                <span>
                  {home ? (
                    t.homeBase
                  ) : (
                    <>
                      {t.pakistan} <span className="vt-arrow" aria-hidden="true">→</span> {label}
                    </>
                  )}
                </span>
                {route ? <small>{t.kmAway(route.km.toLocaleString("en-GB"))}</small> : <small>{t.teamHere}</small>}
              </figcaption>
              <RouteMapVisual to={home ? null : { lat: l.pin.lat, lng: l.pin.lng }} label={label} fromLabel={t.pakistan} id={`rm-${locale}-${l.slug}`} />
              <HeroClocks tz={l.tz} label={label} locale={locale} />
            </figure>
          </div>
        </div>
      </section>

      <SectionNav items={nav} whatsapp={CONTACT.whatsapp} locale={locale} />

      <section className="vt-sec vt-sec--first" id="services">
        <div className="wrap">
          <SecHead kicker={t.servicesFor(l.inText)} title={t.whatClientsHire(l.inText)} />
          <ul className="vt-tiles">
            {services.map((p, i) => (
              <li key={p.slug} data-fade="" style={delay(i)}>
                <Link href={serviceHref(locale, p)}>
                  <span className="vt-ico">
                    <AreaIcon slug={p.category} />
                  </span>
                  <h3>{p.h1}</h3>
                  <span className="vt-go">
                    {t.viewService} <span className="vt-arrow" aria-hidden="true">→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="vt-tiles__foot">
            <span>{t.needElse}</span>
            <Link href={en ? "/services" : `${localePath(locale, "/")}#services`}>
              {t.browseAll} <span className="vt-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="vt-sec" id="market">
        <div className="wrap">
          <div className="vt-split">
            <div className="vt-split__side" data-fade="">
              <p className="vt-kicker">{t.theMarket}</p>
              <h2 className="vt-h2">{t.buildingFor(l.inText)}</h2>
            </div>
            <div className="vt-prose" data-fade="">
              {l.market.map((p, i) => (
                <p key={p.slice(0, 32)} className={i === 0 ? "vt-prose__first" : undefined}>
                  {p}
                </p>
              ))}
              {parent ? (
                <p className="vt-muted">
                  {noteLead}{" "}
                  <Link className="link" href={locationHref(locale, parent.slug)}>
                    {noteLink}
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </div>
          {l.stats ? (
            <ul className="vt-stats" aria-label={t.keyFigures}>
              {l.stats.map((s, i) => {
                const v = splitStat(s.value);
                return (
                  <li key={s.label} className={v.big.length > 14 ? "vt-stats__text" : undefined} data-fade="" style={delay(i)}>
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
          <SecHead kicker={t.whatWeBuild} title={t.businessesAsk(l.inText)} />
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
            <p className="vt-kicker">{t.workingHours}</p>
            <TimeOverlap tz={l.tz} label={label} place={l.inText} locale={locale} />
          </div>
          <div className="vt-split__side" data-fade="">
            <p className="vt-kicker">{t.workingTogether}</p>
            <h2 className="vt-h2">{t.workingWith(l.inText)}</h2>
            <IconList icon="check" items={l.working} />
          </div>
        </div>
      </section>

      {l.payments || l.rules ? (
        <section className="vt-sec" id="pay">
          <div className="wrap">
            <SecHead
              kicker={l.payments ? t.payRulesKicker : t.rulesKicker}
              title={l.payments ? t.payTitle(l.inText) : t.rulesTitle}
              text={l.rules ? t.legal : undefined}
            />
            <div className={`vt-duo${l.payments && l.rules ? "" : " vt-duo--one"}`}>
              {l.payments ? (
                <div className="vt-panel vt-panel--pad" data-fade="">
                  <h3 className="vt-h3">{t.paymentsExpect}</h3>
                  <IconList icon="card" items={l.payments.map((p) => ({ title: p.name, body: p.body }))} />
                </div>
              ) : null}
              {l.rules ? (
                <div className="vt-panel vt-panel--pad" data-fade="">
                  <h3 className="vt-h3">{t.rulesTitle}</h3>
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
              kicker={t.ourWork}
              title={l.proofTitle ?? t.workDelivered}
              text={l.proofNote}
              aside={
                <Link className="vt-more" href="/work">
                  {t.seeAllWork} <span className="vt-arrow" aria-hidden="true">→</span>
                </Link>
              }
            />
            <div className={`vt-cases vt-cases--${Math.min(proof.length, 3)}`}>
              {proof.map((p) => (en ? <ProjectCard key={p.slug} project={p} /> : <LocalProjectCard key={p.slug} project={p} locale={locale} />))}
            </div>
          </div>
        </section>
      ) : null}

      <Faq
        locale={locale}
        title={t.questionsIn(l.inText)}
        items={l.faq}
        note={
          <>
            {cities.length ? (
              <div className="vt-cities">
                <p className="vt-kicker">{t.cityPages}</p>
                <ul>
                  {cities.map((c) => {
                    const ck = `${l.slug}/${c.slug}`;
                    const cl = en ? c.country : (localizedLocation(locale, ck)?.country ?? c.country);
                    return (
                      <li key={c.slug}>
                        <Link href={locationHref(locale, ck)}>
                          {cl} <span className="vt-arrow" aria-hidden="true">→</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ) : null}
            <p className="vt-updated">
              {t.lastReviewed} <time dateTime={l.updated}>{formatDateIn(l.updated, locale)}</time>
            </p>
          </>
        }
      />

      <CtaCard title={l.closing} locale={locale} />
    </>
  );

  return en ? (
    body
  ) : (
    <div dir={LOCALE_META[locale].dir} lang={LOCALE_META[locale].bcp47} className={`vt-locale vt-locale--${locale}`}>
      <HtmlLang locale={locale} />
      {body}
    </div>
  );
}

