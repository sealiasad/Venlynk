"use client";

import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

import { BrandMark } from "@/components/brand/brand-mark";

gsap.registerPlugin(MotionPathPlugin);

const LABELS: Record<string, string> = {
  "": "Home",
  work: "Work",
  services: "Services",
  industries: "Industries",
  about: "About",
  insights: "Insights",
  contact: "Start a project",
};

/** Name shown under the mark while the next page loads. */
function labelFor(pathname: string, link: HTMLAnchorElement) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length > 1) {
    const text = (link.querySelector(".pa-card__name, .ha-row__t, .pa-svc-row__t, .pa-ind__t, .pa-post__t, .pa-next__name")
      ?.firstChild?.textContent ?? "").trim();
    if (text && text.length <= 36) return text.replace(/\s*→$/, "");
  }
  return LABELS[parts[0] ?? ""] ?? "Venlynk";
}

/**
 * Page transition. Internal link clicks are caught before Next handles them:
 * the blue panel rises, the Venlynk mark flies in on a curve leaving a trail,
 * hovers while the route changes, then takes off to the top right and the
 * panel lifts to reveal the new page. Skipped for reduced motion.
 */
export function PageWipe() {
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);
  const covering = useRef(false);
  const failsafe = useRef(0);
  const bob = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const wipe = ref.current;
    if (!wipe) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const plane = wipe.querySelector<HTMLElement>(".wipe__plane")!;
    const inner = wipe.querySelector<HTMLElement>(".wipe__bob")!;
    const trailIn = wipe.querySelector<SVGPathElement>(".wipe__in")!;
    const trailOut = wipe.querySelector<SVGPathElement>(".wipe__out")!;
    const svg = wipe.querySelector<SVGSVGElement>(".wipe__trail")!;
    const label = wipe.querySelector<HTMLElement>(".wipe__label")!;

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!a || (a.target && a.target !== "_self") || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname) return; // same page: let anchors scroll
      if (/\.[a-z0-9]{2,5}$/i.test(url.pathname)) return; // files
      e.preventDefault();
      e.stopPropagation();
      if (covering.current) return;
      covering.current = true;
      router.prefetch(url.pathname + url.search);
      const href = url.pathname + url.search + url.hash;

      // Flight path in screen pixels: swoop in from the lower left to the centre.
      const W = window.innerWidth;
      const H = window.innerHeight;
      const cx = W / 2;
      const cy = H / 2 - 24;
      const inD = `M ${-0.08 * W} ${H * 1.08} C ${W * 0.12} ${H * 0.62}, ${W * 0.2} ${H * 0.18}, ${cx} ${cy}`;
      const outD = `M ${cx} ${cy} C ${cx + W * 0.1} ${cy + H * 0.2}, ${cx + W * 0.34} ${cy + H * 0.08}, ${W * 1.12} ${-H * 0.16}`;
      svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
      trailIn.setAttribute("d", inD);
      trailOut.setAttribute("d", outD);
      const lenIn = trailIn.getTotalLength();
      const lenOut = trailOut.getTotalLength();
      label.textContent = labelFor(url.pathname, a);

      gsap.killTweensOf([wipe, plane, inner, trailIn, trailOut, label]);
      gsap
        .timeline()
        .set(wipe, { visibility: "visible", clipPath: "inset(100% 0% 0% 0%)" })
        .set(plane, { xPercent: -50, yPercent: -50, rotate: -38, scale: 0.55, opacity: 1 })
        .set(trailIn, { strokeDasharray: lenIn, strokeDashoffset: lenIn, opacity: 1 })
        .set(trailOut, { strokeDasharray: lenOut, strokeDashoffset: lenOut, opacity: 1 })
        .set(label, { opacity: 0, y: 16 })
        .to(wipe, { clipPath: "inset(0% 0% 0% 0%)", duration: 0.5, ease: "power4.inOut" })
        .addLabel("fly", "-=0.2")
        .to(plane, { motionPath: { path: inD }, duration: 0.8, ease: "power3.out" }, "fly")
        .to(plane, { rotate: 0, scale: 1, duration: 0.8, ease: "power3.out" }, "fly")
        .to(trailIn, { strokeDashoffset: 0, duration: 0.8, ease: "power3.out" }, "fly")
        .to(label, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }, "fly+=0.45")
        .add(() => {
          bob.current = gsap.to(inner, { y: -8, rotate: 3, duration: 0.9, ease: "sine.inOut", yoyo: true, repeat: -1 });
          router.push(href);
          // Never leave the panel up if the route does not change.
          window.clearTimeout(failsafe.current);
          failsafe.current = window.setTimeout(() => {
            if (!covering.current) return;
            covering.current = false;
            bob.current?.kill();
            gsap.to(wipe, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.5, ease: "power4.inOut" });
            gsap.set(wipe, { visibility: "hidden", delay: 0.5 });
          }, 6000);
        }, "fly+=0.55");
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [router]);

  // The new page has rendered: take off and lift the panel.
  useEffect(() => {
    const wipe = ref.current;
    if (!wipe || !covering.current) return;
    window.clearTimeout(failsafe.current);
    const plane = wipe.querySelector<HTMLElement>(".wipe__plane")!;
    const inner = wipe.querySelector<HTMLElement>(".wipe__bob")!;
    const trailIn = wipe.querySelector<SVGPathElement>(".wipe__in")!;
    const trailOut = wipe.querySelector<SVGPathElement>(".wipe__out")!;
    const label = wipe.querySelector<HTMLElement>(".wipe__label")!;
    const outD = trailOut.getAttribute("d") ?? "";
    bob.current?.kill();

    gsap
      .timeline({ delay: 0.12 })
      .to(inner, { y: 0, rotate: 0, duration: 0.2 })
      .to(label, { opacity: 0, y: -12, duration: 0.25 }, 0)
      .addLabel("off", 0.1)
      .to(plane, { motionPath: { path: outD }, duration: 0.7, ease: "power2.in" }, "off")
      .to(plane, { rotate: 28, scale: 0.7, duration: 0.7, ease: "power2.in" }, "off")
      .to(trailOut, { strokeDashoffset: 0, duration: 0.7, ease: "power2.in" }, "off")
      .to(trailIn, { opacity: 0, duration: 0.5 }, "off")
      .to(wipe, { clipPath: "inset(0% 0% 100% 0%)", duration: 0.6, ease: "power4.inOut" }, "off+=0.35")
      .set(wipe, { visibility: "hidden" })
      .add(() => {
        covering.current = false;
      });
  }, [pathname]);

  return (
    <div ref={ref} className="wipe" aria-hidden="true">
      <div className="wipe__grid" />
      <svg className="wipe__trail" preserveAspectRatio="none">
        <path className="wipe__in" />
        <path className="wipe__out" />
      </svg>
      <div className="wipe__plane">
        <div className="wipe__bob">
          <BrandMark variant="white" />
        </div>
      </div>
      <p className="wipe__label" />
    </div>
  );
}
