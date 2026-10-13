"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { BrandMark } from "@/components/brand/brand-mark";
import { NAV, SITE } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);
  const toggleRef = useRef<HTMLButtonElement>(null);

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
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} aria-current={current(item.href) ? "page" : undefined}>
                    <span className="roll"><span>{item.label}</span></span>
                  </Link>
                </li>
              ))}
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
        <nav className="menu__inner wrap" aria-label="Mobile">
          <ul>
            {NAV.map((item, i) => (
              <li key={item.href} style={{ transitionDelay: `${80 + i * 50}ms` }}>
                <Link href={item.href} aria-current={current(item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li style={{ transitionDelay: `${80 + NAV.length * 50}ms` }}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
          <div className="menu__foot">
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          </div>
        </nav>
      </div>
    </>
  );
}
