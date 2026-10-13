"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * One motion layer for the whole site, driven by data attributes:
 *  data-words   — word-mask reveal (markup from <Split>)
 *  data-fade    — rise in once
 *  data-clip    — media unclips once
 *  data-count   — counts up to its number once
 *  data-parallax="0.15" — vertical drift while scrolling (desktop)
 *  data-scrub   — words brighten as the block scrolls through
 *  data-cursor="View" — shows the cursor label while hovered
 *  .marquee     — speed follows scroll velocity
 * Respects prefers-reduced-motion: everything is shown immediately.
 */
export function MotionProvider() {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  // Smooth scroll + cursor, once.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.dataset.motion = "ready";
    if (reduced) {
      root.classList.remove("js-motion");
      return;
    }

    const lenis = new Lenis({ lerp: 0.11, anchors: { offset: -80 } });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Marquees speed up with scroll velocity.
    lenis.on("scroll", ({ velocity }: { velocity: number }) => {
      const rate = 1 + Math.min(Math.abs(velocity) * 0.12, 5);
      document.querySelectorAll<HTMLElement>(".marquee__track, .ha-marquee__track").forEach((track) => {
        track.getAnimations().forEach((a) => {
          a.playbackRate = rate;
        });
      });
    });

    // Cursor label.
    const cursor = document.createElement("div");
    cursor.className = "cursor";
    cursor.setAttribute("aria-hidden", "true");
    document.body.appendChild(cursor);
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.45, ease: "power3.out" });
    const onMove = (e: PointerEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      cursor.classList.add("is-live");
      const el = e.target as Element | null;
      const target = el?.closest<HTMLElement>("[data-cursor]");
      if (target) {
        cursor.textContent = target.dataset.cursor ?? "";
        cursor.classList.add("is-on");
      } else {
        cursor.textContent = "";
        cursor.classList.remove("is-on");
      }
      cursor.classList.toggle("is-link", !target && !!el?.closest("a, button, summary, [data-tilt]"));
    };
    const onLeave = () => cursor.classList.remove("is-live");
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cursor.remove();
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Per-page reveals.
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // New page: start at the top, or at the #section the link pointed to.
    const hash = window.location.hash ? document.getElementById(decodeURIComponent(window.location.hash.slice(1))) : null;
    if (hash) {
      requestAnimationFrame(() =>
        lenisRef.current ? lenisRef.current.scrollTo(hash, { immediate: true, offset: -80 }) : hash.scrollIntoView(),
      );
    } else {
      lenisRef.current?.scrollTo(0, { immediate: true });
    }

    const revealables = document.querySelectorAll<HTMLElement>(
      "[data-words], [data-fade], [data-clip], [data-count]",
    );

    const runCount = (el: HTMLElement) => {
      const end = Number(el.dataset.count);
      if (!Number.isFinite(end)) return;
      if (reduced) {
        el.textContent = String(end);
        return;
      }
      const obj = { v: 0 };
      gsap.to(obj, {
        v: end,
        duration: 1.6,
        ease: "power2.out",
        onUpdate: () => {
          el.textContent = String(Math.round(obj.v));
        },
      });
    };

    if (reduced) {
      revealables.forEach((el) => {
        el.classList.add("is-in");
        if (el.dataset.count) runCount(el);
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("is-in");
          if (el.dataset.count) runCount(el);
          io.unobserve(el);
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    revealables.forEach((el) => {
      // Counters start from zero only once JS is ready, so the server HTML keeps the real figure.
      if (el.dataset.count && el.getBoundingClientRect().top > window.innerHeight) el.textContent = "0";
      io.observe(el);
    });

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px)", () => {
        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amount = Number(el.dataset.parallax || 0.12) * 100;
          gsap.fromTo(
            el,
            { yPercent: -amount / 2 },
            {
              yPercent: amount / 2,
              ease: "none",
              scrollTrigger: { trigger: el.parentElement ?? el, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });
      });

      gsap.utils.toArray<HTMLElement>("[data-scrub]").forEach((block) => {
        const words = block.querySelectorAll(".sw");
        gsap.fromTo(
          words,
          { opacity: 0.16 },
          {
            opacity: 1,
            stagger: 0.08,
            ease: "none",
            scrollTrigger: { trigger: block, start: "top 78%", end: "bottom 45%", scrub: true },
          },
        );
      });
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      window.clearTimeout(refresh);
      io.disconnect();
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
