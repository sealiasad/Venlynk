"use client";

import { AE, AU, BH, CA, GB, IE, KW, MY, NL, OM, PK, QA, SA, SG, TR, US } from "country-flag-icons/react/3x2";
import Image from "next/image";
import Link from "next/link";

import type { MenuCategory, MenuLink } from "@/content/menu";

const FLAGS: Record<string, typeof AE> = { AE, AU, BH, CA, GB, IE, KW, MY, NL, OM, PK, QA, SA, SG, TR, US };

/** Simple line icons per service area. */
const AREA_ICON: Record<string, string> = {
  websites: "M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13ZM3 8.5h18M6 6.3h.01M8.5 6.3h.01",
  "web-apps": "M4 4h7v7H4zM13 4h7v4h-7zM13 10h7v10h-7zM4 13h7v7H4z",
  "mobile-apps": "M8 3h8a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8 3Zm3 15h2",
  shopify: "M6 8h12l-1 12H7L6 8Zm3 0V6.5a3 3 0 0 1 6 0V8",
  ecommerce: "M3 4h2.5l2.2 10.5h10.6L20.5 7H6.5M9.5 19.5h.01M17 19.5h.01",
  "ai-agents": "M12 3v3m0 12v3M3 12h3m12 0h3M7 7l2 2m6 6 2 2m0-10-2 2m-6 6-2 2M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z",
  design: "M4 20l4.5-1 10-10a2.1 2.1 0 0 0-3-3l-10 10L4 20ZM14 7l3 3",
  growth: "M4 19h16M6 15l4-4 3 3 6-7M15 7h4v4",
};

export function AreaIcon({ slug }: { slug: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="mm-ic">
      <path d={AREA_ICON[slug] ?? AREA_ICON.websites} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FlagIcon({ code, className }: { code?: string; className?: string }) {
  const F = code ? FLAGS[code] : undefined;
  return F ? <F className={className} aria-hidden="true" /> : null;
}

/** Desktop mega menu: rail of areas, services of the active area, featured card. */
export function MegaPanel({
  menu,
  countries,
  active,
  onActive,
  open,
}: {
  menu: MenuCategory[];
  countries: MenuLink[];
  active: string;
  onActive: (slug: string) => void;
  open: boolean;
}) {
  return (
    <div id="mega-menu" className="mm" data-open={open ? "" : undefined}>
      <div className="mm__inner">
        <ul className="mm__rail" aria-label="Service areas">
          {menu.map((c) => (
            <li key={c.slug}>
              <Link
                href={c.href}
                className={`mm__tab${active === c.slug ? " is-active" : ""}`}
                onMouseEnter={() => onActive(c.slug)}
                onFocus={() => onActive(c.slug)}
              >
                <AreaIcon slug={c.slug} />
                <span>{c.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        {menu.map((c) => (
          <div key={c.slug} className="mm__panel" hidden={active !== c.slug}>
            <div className="mm__main">
              <p className="mm__title">
                {c.label}
                <small>{c.short}</small>
              </p>
              <div className="mm__groups">
                {c.groups.map((g) => (
                  <div key={g.title} className="mm__group">
                    <p className="mm__gtitle">{g.title}</p>
                    <ul>
                      {g.links.map((l) => (
                        <li key={l.href}>
                          <Link href={l.href}>{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="mm__side">
              <Link href={c.href} className="mm__feature">
                <Image src={c.image} alt="" fill sizes="240px" />
                <span className="mm__feature-txt">
                  <b>Everything in {c.label}</b>
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
              <Link className="mm__cta" href="/contact">
                Get a fixed quote
              </Link>
            </div>
          </div>
        ))}
      </div>
      {countries.length ? (
        <div className="mm__countries">
          <Link href="/locations" className="mm__countries-label">
            Countries we serve
          </Link>
          <ul>
            {countries.map((k) => (
              <li key={k.href}>
                <Link href={k.href} title={k.label} aria-label={k.label}>
                  <FlagIcon code={k.code} className="mm__flag" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

/** Mobile menu: services as an accordion of areas, each opening its services. */
export function MobileServices({ menu, countries }: { menu: MenuCategory[]; countries: MenuLink[] }) {
  return (
    <div className="mms">
      <Link href="/services" className="mms__all">
        All services <span aria-hidden="true">→</span>
      </Link>
      {menu.map((c) => (
        <details key={c.slug} className="mms__area">
          <summary>
            <AreaIcon slug={c.slug} />
            <span>{c.label}</span>
            <i aria-hidden="true" />
          </summary>
          <ul>
            {c.groups.flatMap((g) => g.links).map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li>
              <Link href={c.href} className="mms__more">
                Everything in {c.label} →
              </Link>
            </li>
          </ul>
        </details>
      ))}
      {countries.length ? (
        <div className="mms__countries">
          <Link href="/locations">Countries we serve</Link>
          <ul>
            {countries.map((k) => (
              <li key={k.href}>
                <Link href={k.href} aria-label={k.label}>
                  <FlagIcon code={k.code} className="mm__flag" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
