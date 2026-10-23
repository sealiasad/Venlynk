import Link from "next/link";
import type { ReactNode } from "react";

import { delay, LABEL_TONE } from "@/components/site/blocks";
import { CONTACT } from "@/content/home";
import type { Project } from "@/content/types";
import { LOCALE_META, ui, type Locale } from "@/i18n/ui";
import Image from "next/image";

import { HtmlLangClient } from "@/components/site/html-lang";

/** Shared pieces for the country, category and service page templates (vt-*). */

export function Crumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="vt-crumbs" aria-label="Breadcrumb" data-intro="">
      {items.map((it, i) => (
        <span key={it.label}>
          {i ? <span aria-hidden="true">/</span> : null}
          {it.href ? <Link href={it.href}>{it.label}</Link> : <span aria-current="page">{it.label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function SecHead({ kicker, title, text, id, aside }: { kicker: string; title: string; text?: ReactNode; id?: string; aside?: ReactNode }) {
  return (
    <div className="vt-sechead" data-fade="">
      <div>
        <p className="vt-kicker">{kicker}</p>
        <h2 className="vt-h2" id={id}>
          {title}
        </h2>
      </div>
      {text || aside ? <div className="vt-sechead__aside">{text ? <p>{text}</p> : null}{aside}</div> : null}
    </div>
  );
}

export function HeroCtas({ locale = "en" }: { locale?: Locale }) {
  const t = ui(locale);
  return (
    <div className="vt-ctas">
      <Link className="vt-btn vt-btn--primary" href="/contact">
        {t.getQuote} <span className="vt-arrow" aria-hidden="true">→</span>
      </Link>
      <a className="vt-btn vt-btn--ghost" href={CONTACT.whatsapp} rel="noopener" target="_blank">
        <WaIcon />
        {t.whatsapp}
      </a>
    </div>
  );
}

export function WaIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

const ICONS = {
  check: "M5 12.5l4.5 4.5L19 7.5",
  card: "M3 7.5A2 2 0 0 1 5 5.5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9ZM3 10h18",
  shield: "M12 3 4.5 6v5.5c0 4.7 3.2 8.4 7.5 9.5 4.3-1.1 7.5-4.8 7.5-9.5V6L12 3Z",
  cross: "M7 7l10 10M17 7 7 17",
};

export function Ico({ name, size = 20 }: { name: keyof typeof ICONS; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path d={ICONS[name]} fill="none" stroke="currentColor" strokeWidth={name === "check" || name === "cross" ? 2 : 1.6} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Hairline list of icon + title + text rows. */
export function IconList({ icon, items }: { icon: keyof typeof ICONS; items: { title: string; body: string }[] }) {
  return (
    <ul className="vt-list">
      {items.map((it, i) => (
        <li key={it.title} data-fade="" style={delay(i)}>
          <span className="vt-list__ico">
            <Ico name={icon} />
          </span>
          <div>
            <h3>{it.title}</h3>
            <p>{it.body}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Faq({ title, items, note, locale = "en" }: { title: string; items: { q: string; a: string }[]; note?: ReactNode; locale?: Locale }) {
  const t = ui(locale);
  return (
    <section className="vt-sec" id="faq" aria-labelledby="faq-title">
      <div className="wrap vt-split">
        <div className="vt-split__side vt-faq__side" data-fade="">
          <p className="vt-kicker">{t.faqKicker}</p>
          <h2 className="vt-h2" id="faq-title">
            {title}
          </h2>
          <p className="vt-muted">{t.askWhatsApp}</p>
          <a className="vt-btn vt-btn--ghost" href={CONTACT.whatsapp} rel="noopener" target="_blank">
            <WaIcon />
            {t.whatsapp}
          </a>
          {note}
        </div>
        <div className="vt-faq" data-fade="">
          {items.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>
                {f.q}
                <span className="vt-faq__pm" aria-hidden="true" />
              </summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaCard({ title, text, locale = "en" }: { title: string; text?: string; locale?: Locale }) {
  const t = ui(locale);
  return (
    <section className="vt-cta-wrap" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="vt-cta" data-fade="">
          <h2 id="cta-title">{title}</h2>
          <div>
            <p>{text ?? t.ctaText}</p>
            <div className="vt-ctas">
              <Link className="vt-btn vt-btn--light" href="/contact">
                {t.getQuote}
              </Link>
              <a className="vt-btn vt-btn--outline-light" href={CONTACT.whatsapp} rel="noopener" target="_blank">
                <WaIcon />
                {t.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

/** Links to the same page in other languages. Only rendered when a translation exists. */
export function LangSwitch({ current, links }: { current: Locale; links: Partial<Record<Locale, string>> }) {
  const entries = (Object.entries(links) as [Locale, string][]).filter(([, href]) => href);
  if (entries.length < 2) return null;
  return (
    <nav className="vt-lang" aria-label="Language">
      {entries.map(([loc, href]) =>
        loc === current ? (
          <span key={loc} aria-current="true" lang={LOCALE_META[loc].bcp47}>
            {LOCALE_META[loc].name}
          </span>
        ) : (
          <Link key={loc} href={href} hrefLang={LOCALE_META[loc].bcp47} lang={LOCALE_META[loc].bcp47}>
            {LOCALE_META[loc].name}
          </Link>
        ),
      )}
    </nav>
  );
}

/** Project card with a translated engagement label, for translated pages. */
export function LocalProjectCard({ project, locale }: { project: Project; locale: Locale }) {
  const label = ui(locale).projectLabel[project.label] ?? project.label;
  return (
    <Link className="pa-card" href={`/work/${project.slug}`}>
      <span className="pa-card__media">
        {project.image ? (
          <Image src={project.image} alt={project.imageAlt ?? project.client} fill sizes="(max-width: 760px) 100vw, 33vw" />
        ) : null}
      </span>
      <span className="pa-card__body">
        <span className="pa-card__top">
          <span className="pa-card__name">{project.client}</span>
          <span className={`pa-pill pa-pill--${LABEL_TONE[project.label]}`}>{label}</span>
        </span>
      </span>
    </Link>
  );
}

/** Sets <html lang> on translated pages. The shared root layout renders lang="en". */
export function HtmlLang({ locale }: { locale: Locale }) {
  if (locale === "en") return null;
  const lang = LOCALE_META[locale].bcp47;
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `document.documentElement.lang=${JSON.stringify(lang)}` }} />
      <HtmlLangClient lang={lang} />
    </>
  );
}
