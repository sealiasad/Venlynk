"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/brand/brand-mark";
import { CONTACT } from "@/content/home";
import type { MenuCategory, MenuLink } from "@/content/menu";
import { NAV, SITE } from "@/content/site";

export function Header({ menu, countries = [] }: { menu: MenuCategory[]; countries?: MenuLink[] }) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const [mega, setMega] = useState(false);
  const [active, setActive] = useState(menu[0]?.slug ?? "");
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const megaRef = useRef<HTMLLIElement>(null);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMega(true);
  };
  const closeMegaSoon = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setMega(false), 160);
  };

  useEffect(() => {
    if (!mega) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMega(false);
        megaRef.current?.querySelector<HTMLElement>(".hdr__mega-btn")?.focus();
      }
    };
    const onDown = (e: PointerEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMega(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onDown);
    };
  }, [mega]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 24);
      setHidden(y > 240 && y > lastY.current);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the menu when the route changes.
  const [lastPath, setLastPath] = useState(pathname);
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setOpen(false);
    setMega(false);
  }

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const current = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        className={`hdr hdr--dark${hidden && !open ? " is-hidden" : ""}${solid ? " is-solid" : ""}${open ? " is-open" : ""}`}
      >
        <div className="hdr__inner wrap">
          <Link className="logo" href="/" aria-label={`${SITE.name} home`}>
            <BrandMark className="logo__mark" />
            <span>{SITE.name}</span>
          </Link>
          <nav className="hdr__nav" aria-label="Primary">
            <ul>
              {NAV.map((item) =>
                item.href === "/services" ? (
                  <li
                    key={item.href}
                    ref={megaRef}
                    className={`hdr__has-mega${mega ? " is-open" : ""}`}
                    onMouseEnter={openMega}
                    onMouseLeave={closeMegaSoon}
                  >
                    <span className="hdr__mega-trigger">
                      <Link href={item.href} aria-current={current(item.href) ? "page" : undefined}>
                        <span className="roll"><span>{item.label}</span></span>
                      </Link>
                      <button
                        type="button"
                        className="hdr__mega-btn"
                        aria-expanded={mega}
                        aria-controls="mega-menu"
                        onClick={() => (mega ? setMega(false) : openMega())}
                      >
                        <span className="sr-only">{mega ? "Close services menu" : "Open services menu"}</span>
                        <svg viewBox="0 0 12 12" aria-hidden="true">
                          <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </button>
                    </span>
                    <div id="mega-menu" className="mega" data-open={mega ? "" : undefined}>
                      <div className="mega__inner">
                        <ul className="mega__rail" aria-label="Service areas">
                          {menu.map((c) => (
                            <li key={c.slug}>
                              <Link
                                href={c.href}
                                className={`mega__tab${active === c.slug ? " is-active" : ""}`}
                                onMouseEnter={() => setActive(c.slug)}
                                onFocus={() => setActive(c.slug)}
                              >
                                <span>{c.label}</span>
                                <small>{c.short}</small>
                              </Link>
                            </li>
                          ))}
                        </ul>
                        {menu.map((c) => (
                          <div key={c.slug} className="mega__panel" hidden={active !== c.slug}>
                            <p className="mega__lead">{c.lead}</p>
                            {c.groups.length ? (
                              <div className="mega__groups">
                                {c.groups.map((g) => (
                                  <div key={g.title} className="mega__group">
                                    <p className="mega__gtitle">{g.title}</p>
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
                            ) : null}
                            {countries.length ? (
                              <p className="mega__countries">
                                <span>Countries:</span>
                                {countries.map((k) => (
                                  <Link key={k.href} href={k.href}>
                                    {k.label}
                                  </Link>
                                ))}
                              </p>
                            ) : null}
                            <div className="mega__foot">
                              <Link className="mega__all" href={c.href}>
                                See everything in {c.label} <span aria-hidden="true">→</span>
                              </Link>
                              <Link className="mega__cta" href="/contact">
                                Get a fixed quote
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} aria-current={current(item.href) ? "page" : undefined}>
                      <span className="roll"><span>{item.label}</span></span>
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <Link className="hdr__cta" href="/contact">
            Start a project
          </Link>
          <button
            ref={toggleRef}
            className="hdr__toggle"
            type="button"
            aria-expanded={open}
            aria-controls="site-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <i aria-hidden="true" />
            <i aria-hidden="true" />
          </button>
        </div>
      </header>

      <div id="site-menu" className={`menu${open ? " is-open" : ""}`} inert={!open} aria-hidden={!open}>
        <div className="menu__bg" aria-hidden="true" />
        <nav className="menu__inner wrap" aria-label="Mobile">
          <p className="menu__label">Menu</p>
          <ul className="menu__list">
            {[...NAV, { label: "Contact", href: "/contact" }].map((item, i) => (
              <li key={item.href} style={{ transitionDelay: `${80 + i * 45}ms` }}>
                <Link href={item.href} aria-current={current(item.href) ? "page" : undefined}>
                  <span className="menu__n" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="menu__t">{item.label}</span>
                  <span className="menu__go" aria-hidden="true">→</span>
                </Link>
                {item.href === "/services" ? (
                  <ul className="menu__sub" aria-label="Service areas">
                    {menu.map((c) => (
                      <li key={c.slug}>
                        <Link href={c.href}>{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
          <div className="menu__foot" style={{ transitionDelay: "380ms" }}>
            <Link className="ha-btn ha-btn--light menu__cta" href="/contact">
              Start a project <span aria-hidden="true">→</span>
            </Link>
            <div className="menu__contact">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
