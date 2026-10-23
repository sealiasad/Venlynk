import Image from "next/image";
import Link from "next/link";

import { delay, ProjectCard, ToolTiles } from "@/components/site/blocks";
import { JsonLd } from "@/components/site/json-ld";
import { SectionNav } from "@/components/site/section-nav";
import { HtmlLang, CtaCard, Crumbs, Faq, HeroCtas, Ico, LangSwitch, LocalProjectCard, SecHead } from "@/components/site/template-parts";
import type { CategoryCopy as Category } from "@/content/catalog";
import { CONTACT } from "@/content/home";
import { getProject } from "@/content/projects";
import { serviceUrl, type ServicePage } from "@/content/service-pages";
import { SITE } from "@/content/site";
import { alternatesFor, categoryLabel, localizedService, serviceHref, serviceKeys } from "@/i18n/registry";
import { formatDateIn, LOCALE_META, localePath, ui, type Locale } from "@/i18n/ui";
import { absUrl, breadcrumbLd } from "@/lib/seo";

/** Service page body, in English or a translation. */
export function ServiceView({ p, c, locale = "en" }: { p: ServicePage; c: Category; locale?: Locale }) {
  const t = ui(locale);
  const en = locale === "en";
  const catLabel = categoryLabel(locale, c.slug, c.label);
  const proof = p.proof ? getProject(p.proof.project) : undefined;
  const also = (p.alsoProjects ?? []).map((s) => getProject(s)).filter((x) => x !== undefined);
  const related = p.related
    .map((ref) => {
      const [cat, slug] = ref.split("/");
      if (!slug) return null;
      const r = localizedService(locale, cat, slug);
      return r ? { href: serviceHref(locale, r), label: r.h1 } : null;
    })
    .filter((x) => x !== null);
  // Translated pages link only to pages in the same language, topped up from the other translated services.
  if (locale !== "en") {
    for (const key of serviceKeys(locale)) {
      if (related.length >= 4) break;
      const [cat, slug] = key.split("/");
      const r = localizedService(locale, cat, slug);
      const href = r ? serviceHref(locale, r) : "";
      if (r && !(cat === p.category && slug === p.slug) && !related.some((x) => x.href === href)) related.push({ href, label: r.h1 });
    }
  }
  const enUrl = serviceUrl(p);
  const url = localePath(locale, enUrl);
  const alt = alternatesFor(enUrl);
  const card = (x: NonNullable<typeof proof>) => (en ? <ProjectCard key={x.slug} project={x} /> : <LocalProjectCard key={x.slug} project={x} locale={locale} />);

  const nav = [
    { id: "get", label: t.nav.get },
    { id: "how", label: t.nav.how },
    ...(proof || also.length ? [{ id: "proof", label: t.nav.example }] : []),
    { id: "price", label: t.nav.pricing },
    { id: "fit", label: t.nav.fit },
    { id: "faq", label: t.nav.faq },
  ];

  const page = (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            inLanguage: LOCALE_META[locale].bcp47,
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
            inLanguage: LOCALE_META[locale].bcp47,
            mainEntity: p.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
          breadcrumbLd([
            { name: t.services, path: en ? "/services" : localePath(locale, "/") },
            { name: catLabel, path: `/services/${c.slug}` },
            { name: p.h1, path: url },
          ]),
        ]}
      />

      <section className="vt-hero">
        <div className="vt-hero__bg" aria-hidden="true" />
        <div className="wrap">
          <div className="vt-hero__top">
            <Crumbs
              items={[
                en ? { label: t.services, href: "/services" } : { label: t.home, href: localePath(locale, "/") },
                { label: catLabel, href: `/services/${c.slug}` },
                { label: p.h1 },
              ]}
            />
            <LangSwitch current={locale} links={{ en: alt.en, ar: alt.ar, tr: alt.tr }} />
          </div>
          <div className="vt-hero__grid vt-hero__grid--svc">
            <div className="vt-hero__text">
              <p className="vt-kicker" data-intro="">
                {catLabel}
              </p>
              <h1 className="vt-h1" data-intro="" style={{ animationDelay: "0.1s" }}>
                {p.h1}
              </h1>
              <p className="vt-lead" data-intro="" style={{ animationDelay: "0.2s" }}>
                {p.lead}
              </p>
              <div data-intro="" style={{ animationDelay: "0.3s" }}>
                <HeroCtas locale={locale} />
              </div>
            </div>
            <figure className="vt-heroimg" data-clip="">
              <Image src={p.image} alt={p.imageAlt} fill priority sizes="(max-width: 1000px) 92vw, 40vw" />
            </figure>
          </div>
          <dl className="vt-facts" data-intro="" style={{ animationDelay: "0.4s" }}>
            <div className="vt-facts__wide">
              <dt>{t.bestFor}</dt>
              <dd>{p.forWho}</dd>
            </div>
            <div>
              <dt>{t.price}</dt>
              <dd>{t.priceValue}</dd>
            </div>
            <div>
              <dt>{t.progress}</dt>
              <dd>{t.progressValue}</dd>
            </div>
          </dl>
          {p.tools.length ? (
            <div className="vt-tools" data-intro="" style={{ animationDelay: "0.5s" }}>
              <ToolTiles tools={p.tools} />
            </div>
          ) : null}
        </div>
      </section>

      <SectionNav items={nav} whatsapp={CONTACT.whatsapp} locale={locale} />

      <section className="vt-sec vt-sec--first">
        <div className="wrap">
          <SecHead kicker={t.soundFamiliar} title={t.rightPlace} />
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
          <SecHead kicker={t.whatYouGet} title={t.everything} text={t.deliveredTogether} />
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
          <SecHead kicker={t.howItWorks} title={t.stepsTitle(p.steps.length)} text={p.timing} />
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
            <SecHead kicker={t.goodToKnow} title={p.facts.title} text={p.facts.intro} />
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
                <span className="vt-kicker">{t.exampleProject}</span>
                <span className="vt-story__title">{proof.client}</span>
                <span className="vt-story__text">{p.proof.story}</span>
                {en ? (
                  <span className="vt-tags">
                    {proof.did.slice(0, 3).map((d) => (
                      <span key={d}>{d}</span>
                    ))}
                  </span>
                ) : null}
                <span className="vt-more">
                  {t.readProject} <span className="vt-arrow" aria-hidden="true">→</span>
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
              kicker={t.ourWork}
              title={proof ? t.moreLikeThis : t.projectsLikeThis}
              aside={
                <Link className="vt-more" href="/work">
                  {t.seeAllWork} <span className="vt-arrow" aria-hidden="true">→</span>
                </Link>
              }
            />
            <div className={`vt-cases vt-cases--${Math.min(also.length, 3)}`}>
              {also.map((x) => card(x))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="vt-sec" id="price">
        <div className="wrap vt-split">
          <div className="vt-split__side" data-fade="">
            <p className="vt-kicker">{t.pricing}</p>
            <h2 className="vt-h2">{t.pricingTitle}</h2>
            <p className="vt-muted">{p.price.headline}</p>
            {p.price.note ? <p className="vt-muted vt-small">{p.price.note}</p> : null}
            <Link className="vt-btn vt-btn--primary" href="/contact">
              {t.getQuote}
            </Link>
          </div>
          <div data-fade="">
            <p className="vt-label">{t.shapesQuote}</p>
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
          <SecHead kicker={t.isItRight} title={t.honestAnswer} />
          <div className="vt-duo">
            <div className="vt-panel vt-panel--pad" data-fade="">
              <h3 className="vt-h3 vt-fit">
                <span className="vt-fit__ico vt-fit__ico--yes">
                  <Ico name="check" size={16} />
                </span>
                {t.goodFit}
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
                {t.notFit}
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
        locale={locale}
        title={t.questionsGeneric}
        items={p.faq}
        note={
          <p className="vt-updated">
            {t.lastReviewed} <time dateTime={p.updated}>{formatDateIn(p.updated, locale)}</time>
          </p>
        }
      />

      {related.length ? (
        <section className="vt-sec vt-sec--tight">
          <div className="wrap">
            <p className="vt-kicker vt-mb">{t.relatedServices}</p>
            <ul className="vt-rel">
              {related.map((r) => (
                <li key={r.href}>
                  <Link href={r.href}>
                    <span>{r.label}</span>
                    <span className="vt-arrow" aria-hidden="true">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <CtaCard title={p.closing} locale={locale} />
    </>
  );

  return en ? (
    page
  ) : (
    <div dir={LOCALE_META[locale].dir} lang={LOCALE_META[locale].bcp47} className={`vt-locale vt-locale--${locale}`}>
      <HtmlLang locale={locale} />
      {page}
    </div>
  );
}
