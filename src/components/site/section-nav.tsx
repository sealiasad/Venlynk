"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { ui, type Locale } from "@/i18n/ui";

/**
 * In-page section links that stay under the header while scrolling, with the
 * current section underlined. On phones it becomes a sticky quote bar instead.
 */
export function SectionNav({ items, whatsapp, locale = "en" }: { items: { id: string; label: string }[]; whatsapp: string; locale?: Locale }) {
  const t = ui(locale);
  const [active, setActive] = useState<string | null>(null);
  const [bar, setBar] = useState(false);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const line = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const i of items) {
        const el = document.getElementById(i.id);
        if (el && el.getBoundingClientRect().top <= line) current = i.id;
      }
      setActive(current);
      setBar(window.scrollY > window.innerHeight * 0.9);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [items]);

  return (
    <>
      <nav className="vt-subnav" aria-label={t.onThisPage}>
        <div className="wrap vt-subnav__in">
          <ul>
            {items.map((i) => (
              <li key={i.id}>
                <a href={`#${i.id}`} aria-current={active === i.id ? "true" : undefined}>
                  {i.label}
                </a>
              </li>
            ))}
          </ul>
          <Link className="vt-btn vt-btn--primary vt-btn--sm" href="/contact">
            {t.getQuote}
          </Link>
        </div>
      </nav>
      <div className={`vt-mbar${bar ? " is-on" : ""}`}>
        <Link className="vt-btn vt-btn--primary" href="/contact">
          {t.getQuote}
        </Link>
        <a className="vt-btn vt-btn--ghost vt-mbar__wa" href={whatsapp} rel="noopener" target="_blank" aria-label={t.whatsapp}>
          <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 20l1.3-4A8 8 0 1 1 8 18.7L4 20Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
        </a>
      </div>
    </>
  );
}
