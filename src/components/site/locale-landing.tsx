import * as Flags from "country-flag-icons/react/3x2";
import Link from "next/link";

import { delay } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { HtmlLang, CtaCard, HeroCtas, LangSwitch, SecHead } from "@/components/site/template-parts";
import { SITE } from "@/content/site";
import { categoryLabel, content, localizedLocation, localizedService, locationKeys, serviceHref, serviceKeys, locationHref } from "@/i18n/registry";
import { LOCALE_META, localePath, ui, type Locale } from "@/i18n/ui";
import { absUrl } from "@/lib/seo";

const TONES = ["", "lg-card--lav", "lg-card--paper"];

function Flag({ code }: { code: string }) {
  const F = (Flags as Record<string, (p: { title?: string; className?: string }) => React.ReactElement>)[code];
  return F ? <F className="lg-flag" /> : null;
}

/** Home page for one translated language: what we offer in that language and where. */
export function LocaleLanding({ locale }: { locale: Exclude<Locale, "en"> }) {
  const t = ui(locale);
  const c = content(locale).landing;
  const meta = LOCALE_META[locale];
  const arrow = <span className="vt-arrow" aria-hidden="true">→</span>;

  const services = serviceKeys(locale)
    .map((key) => {
      const [cat, slug] = key.split("/");
      return localizedService(locale, cat, slug);
    })
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const places = locationKeys(locale)
    .map((key) => ({ key, l: localizedLocation(locale, key) }))
    .filter((x): x is { key: string; l: NonNullable<typeof x.l> } => Boolean(x.l));

  return (
    <div dir={meta.dir} lang={meta.bcp47} className={`vt-locale vt-locale--${locale}`}>
      <HtmlLang locale={locale} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: c.metaTitle,
          description: c.metaDescription,
          url: absUrl(localePath(locale, "/")),
          inLanguage: meta.bcp47,
          isPartOf: { "@type": "WebSite", name: SITE.name, url: SITE.url },
        }}
      />

      <section className="vt-hero lg-hero">
        <div className="vt-hero__bg" aria-hidden="true" />
        <div className="wrap">
          <div className="vt-hero__top">
            <span />
            <LangSwitch current={locale} links={{ en: "/", ar: "/ar", tr: "/tr" }} />
          </div>
          <div className="vt-hero__text">
            <p className="vt-kicker" data-intro="">
              {c.eyebrow}
            </p>
            <h1 className="vt-h1" data-intro="" style={{ animationDelay: "0.1s" }}>
              {c.h1}
            </h1>
            <p className="vt-lead" data-intro="" style={{ animationDelay: "0.2s" }}>
              {c.lead}
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
        </div>
      </section>

      <section className="vt-sec" id="services" aria-labelledby="lg-services">
        <div className="wrap">
          <SecHead kicker={t.services} title={c.servicesTitle} text={c.servicesText} id="lg-services" />
          <div className="lg-grid lg-grid--3">
            {services.map((p, i) => (
              <Link key={`${p.category}/${p.slug}`} className={`lg-card ${TONES[i % 3]}`} href={serviceHref(locale, p)} data-fade="" style={delay(i)}>
                <span className="lg-card__cat">{categoryLabel(locale, p.category, p.category)}</span>
                <h3>{p.h1}</h3>
                <p>{p.forWho}</p>
                <span className="lg-card__go">
                  {t.viewService} {arrow}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="vt-sec" id="markets" aria-labelledby="lg-markets">
        <div className="wrap">
          <SecHead kicker={t.locations} title={c.marketsTitle} text={c.marketsText} id="lg-markets" />
          <div className="lg-grid">
            {places.map(({ key, l }, i) => (
              <Link key={key} className="lg-card" href={locationHref(locale, key)} data-fade="" style={delay(i)}>
                <Flag code={l.isoCode} />
                <h3>{l.country}</h3>
                <p>{l.metaDescription}</p>
                <span className="lg-card__go">{arrow}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="vt-sec" aria-labelledby="lg-why">
        <div className="wrap">
          <SecHead kicker={SITE.name} title={c.whyTitle} id="lg-why" />
          <div className="lg-why">
            {c.why.map((w, i) => (
              <div key={w.title} data-fade="" style={delay(i)}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
          <p className="lg-en">
            {c.englishNote}{" "}
            <Link href="/" hrefLang="en" lang="en">
              {c.englishLink}
            </Link>
          </p>
        </div>
      </section>

      <CtaCard title={c.closing} locale={locale} />
    </div>
  );
}
