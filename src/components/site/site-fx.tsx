"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Small pointer effects used on every page:
 *  [data-magnetic]  buttons that lean toward the pointer
 *  [data-tilt]      cards that tilt in 3D and move a shine (--mx, --my)
 * Skipped on touch screens and for reduced motion.
 */
export function SiteFx() {
  const pathname = usePathname();

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const offs: (() => void)[] = [];

    // Sideways scrollers: move the progress bar in their swipe hint and drop the hint once used.
    document.querySelectorAll<HTMLElement>("[data-swipe]").forEach((scroller) => {
      const hint = scroller.parentElement?.querySelector<HTMLElement>(".ha-swipe");
      const bar = hint?.querySelector<HTMLElement>(".ha-swipe__track span");
      if (!hint || !bar) return;
      const update = () => {
        const max = scroller.scrollWidth - scroller.clientWidth;
        const p = max > 0 ? scroller.scrollLeft / max : 1;
        bar.style.transform = `scaleX(${Math.max(0.08, p)})`;
        hint.classList.toggle("is-used", scroller.scrollLeft > 24);
      };
      scroller.addEventListener("scroll", update, { passive: true });
      offs.push(() => scroller.removeEventListener("scroll", update));
      update();
    });

    if (!fine || reduced) return () => offs.forEach((off) => off());
    const on = (el: HTMLElement, type: "pointermove" | "pointerleave", fn: (e: PointerEvent) => void) => {
      el.addEventListener(type, fn as EventListener, { passive: true });
      offs.push(() => el.removeEventListener(type, fn as EventListener));
    };

    // Wait a frame so the new page is in the DOM.
    const raf = requestAnimationFrame(() => {
      document.querySelectorAll<HTMLElement>("[data-magnetic]").forEach((b) => {
        on(b, "pointermove", (e) => {
          const r = b.getBoundingClientRect();
          b.style.transition = "";
          b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
        });
        on(b, "pointerleave", () => {
          b.style.transition = "transform .5s cubic-bezier(.2,.7,.2,1)";
          b.style.transform = "";
        });
      });

      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((c) => {
        on(c, "pointermove", (e) => {
          const r = c.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          c.style.transition = "opacity 1s, transform .15s";
          c.style.transform = `perspective(900px) rotateY(${(x - 0.5) * 8}deg) rotateX(${(0.5 - y) * 6}deg)`;
          c.style.setProperty("--mx", `${x * 100}%`);
          c.style.setProperty("--my", `${y * 100}%`);
        });
        on(c, "pointerleave", () => {
          c.style.transition = "transform .6s cubic-bezier(.2,.7,.2,1)";
          c.style.transform = "";
        });
      });
    });

    return () => {
      cancelAnimationFrame(raf);
      offs.forEach((off) => off());
    };
  }, [pathname]);

  return null;
}
