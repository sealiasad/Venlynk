import Link from "next/link";
import type { ReactNode } from "react";

import { delay } from "@/components/site/blocks";
import { CONTACT } from "@/content/home";

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

export function HeroCtas() {
  return (
    <div className="vt-ctas">
      <Link className="vt-btn vt-btn--primary" href="/contact">
        Get a fixed quote <span aria-hidden="true">→</span>
      </Link>
      <a className="vt-btn vt-btn--ghost" href={CONTACT.whatsapp} rel="noopener" target="_blank">
        <WaIcon />
        WhatsApp us
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

export function Faq({ title, items, note }: { title: string; items: { q: string; a: string }[]; note?: ReactNode }) {
  return (
    <section className="vt-sec" id="faq" aria-labelledby="faq-title">
      <div className="wrap vt-split">
        <div className="vt-split__side vt-faq__side" data-fade="">
          <p className="vt-kicker">FAQ</p>
          <h2 className="vt-h2" id="faq-title">
            {title}
          </h2>
          <p className="vt-muted">Something else on your mind? Ask us on WhatsApp.</p>
          <a className="vt-btn vt-btn--ghost" href={CONTACT.whatsapp} rel="noopener" target="_blank">
            <WaIcon />
            WhatsApp us
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

export function CtaCard({ title, text }: { title: string; text?: string }) {
  return (
    <section className="vt-cta-wrap" aria-labelledby="cta-title">
      <div className="wrap">
        <div className="vt-cta" data-fade="">
          <h2 id="cta-title">{title}</h2>
          <div>
            <p>{text ?? "Tell us what you need. After a 30-minute call, you get a fixed quote for the whole project."}</p>
            <div className="vt-ctas">
              <Link className="vt-btn vt-btn--light" href="/contact">
                Get a fixed quote
              </Link>
              <a className="vt-btn vt-btn--outline-light" href={CONTACT.whatsapp} rel="noopener" target="_blank">
                <WaIcon />
                WhatsApp us
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
