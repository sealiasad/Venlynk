"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Page-level interactions for the homepage, wired by attributes:
 *  [data-link-root]  the element the link line is drawn over
 *  [data-node]       sections the link line passes through
 *  [data-preview]    work rows that show a floating image (index into .ha-preview)
 *  [data-rail]       results rail, pinned and scrolled sideways on desktop
 */
export function HomeFx() {
  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-link-root]");
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const offs: (() => void)[] = [];
    const on = <K extends keyof WindowEventMap>(
      t: Window | HTMLElement,
      type: K,
      fn: (e: WindowEventMap[K]) => void,
    ) => {
      t.addEventListener(type, fn as EventListener, { passive: true });
      offs.push(() => t.removeEventListener(type, fn as EventListener));
    };

    /* ----- link line ----- */
    const svg = root.querySelector<SVGSVGElement>(".ha-link");
    const path = svg?.querySelector<SVGPathElement>("path");
    let nodes: { c: SVGCircleElement; y: number }[] = [];
    let length = 0;

    const update = () => {
      if (!path) return;
      const top = root.getBoundingClientRect().top;
      const front = -top + window.innerHeight * 0.7;
      const p = reduced ? 1 : Math.min(1, Math.max(0, front / root.offsetHeight));
      path.style.strokeDashoffset = String(length * (1 - p));
      nodes.forEach((n) => n.c.classList.toggle("is-on", front > n.y));
    };

    const build = () => {
      if (!svg || !path) return;
      const box = root.getBoundingClientRect();
      const W = root.clientWidth;
      const H = root.offsetHeight;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      const pad = Math.max(10, W * 0.025);
      const hero = root.querySelector<HTMLElement>(".ha-hero");
      const stops: [number, number][] = [[W * 0.62, (hero?.offsetHeight ?? 600) * 0.55]];
      root.querySelectorAll<HTMLElement>("[data-node]").forEach((s, i) => {
        stops.push([i % 2 ? W - pad : pad, s.getBoundingClientRect().top - box.top + 70]);
      });
      let d = `M ${stops[0][0]} ${stops[0][1]}`;
      for (let i = 1; i < stops.length; i++) {
        const [x0, y0] = stops[i - 1];
        const [x1, y1] = stops[i];
        const my = (y0 + y1) / 2;
        d += ` C ${x0} ${my}, ${x1} ${my}, ${x1} ${y1}`;
      }
      path.setAttribute("d", d);
      svg.querySelectorAll("circle").forEach((c) => c.remove());
      nodes = stops.slice(1).map(([x, y]) => {
        const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        c.setAttribute("cx", String(x));
        c.setAttribute("cy", String(y));
        c.setAttribute("r", "7");
        svg.appendChild(c);
        return { c, y };
      });
      length = path.getTotalLength();
      path.style.strokeDasharray = String(length);
      update();
    };

    on(window, "scroll", update);
    on(window, "resize", build);
    ScrollTrigger.addEventListener("refresh", build);
    offs.push(() => ScrollTrigger.removeEventListener("refresh", build));
    const ro = new ResizeObserver(() => build());
    ro.observe(root);
    offs.push(() => ro.disconnect());
    build();

    /* ----- results rail ----- */
    const ctx = gsap.context(() => {
      const section = root.querySelector<HTMLElement>("[data-rail]");
      const rail = section?.querySelector<HTMLElement>(".ha-rail");
      const bar = section?.querySelector<HTMLElement>(".ha-rail-progress span");
      if (!section || !rail || reduced) return;

      // Hero copy drifts up and dims as the page scrolls away from it.
      gsap.to(root.querySelector(".ha-hero__inner"), {
        yPercent: -14,
        opacity: 0.2,
        ease: "none",
        scrollTrigger: { trigger: root.querySelector(".ha-hero"), start: "top top", end: "bottom top", scrub: true },
      });
      const mm = gsap.matchMedia();
      mm.add("(min-width: 900px) and (hover: hover)", () => {
        section.classList.add("is-pinned");
        const dist = () => Math.max(0, rail.scrollWidth - window.innerWidth);
        gsap.to(rail, {
          x: () => -dist(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${dist()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              if (bar) bar.style.transform = `scaleX(${self.progress})`;
            },
          },
        });
        return () => section.classList.remove("is-pinned");
      });
    }, root);
    offs.push(() => ctx.revert());

    if (fine && !reduced) {
      /* ----- work preview following the pointer ----- */
      const pv = root.querySelector<HTMLElement>(".ha-preview");
      const imgs = pv ? Array.from(pv.querySelectorAll("img")) : [];
      if (pv) {
        let px = 0;
        let py = 0;
        let vx = 0;
        let vy = 0;
        let raf = 0;
        let active = false;
        const tick = () => {
          vx += (px - vx) * 0.14;
          vy += (py - vy) * 0.14;
          const rot = Math.max(-8, Math.min(8, (px - vx) * 0.05));
          pv.style.left = `${vx}px`;
          pv.style.top = `${vy}px`;
          pv.style.rotate = `${rot}deg`;
          raf = active || Math.abs(px - vx) > 0.5 ? requestAnimationFrame(tick) : 0;
        };
        on(window, "pointermove", (e) => {
          px = e.clientX + 40;
          py = e.clientY;
          if (!raf && active) raf = requestAnimationFrame(tick);
        });
        root.querySelectorAll<HTMLElement>("[data-preview]").forEach((row) => {
          on(row, "pointerenter", (e) => {
            const i = Number(row.dataset.preview);
            imgs.forEach((img, k) => img.classList.toggle("is-on", k === i));
            if (!active) {
              vx = px = e.clientX + 40;
              vy = py = e.clientY;
            }
            active = true;
            if (!raf) raf = requestAnimationFrame(tick);
            gsap.to(pv, { opacity: 1, scale: 1, duration: 0.35, ease: "power3.out", overwrite: true });
          });
          on(row, "pointerleave", () => {
            active = false;
            gsap.to(pv, { opacity: 0, scale: 0.7, duration: 0.3, overwrite: true });
          });
        });
        gsap.set(pv, { xPercent: -50, yPercent: -50, scale: 0.7 });
        offs.push(() => cancelAnimationFrame(raf));
      }
    }

    return () => offs.forEach((off) => off());
  }, []);

  return null;
}
