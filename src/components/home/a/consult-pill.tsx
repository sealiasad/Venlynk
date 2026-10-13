"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * A docked call to action that detaches from the founder section.
 * When the founder section is in view, the pill lifts out of the founder card
 * and settles at the bottom centre of the screen. It stays while the visitor
 * scrolls on, and steps aside once the closing call to action is on screen.
 */
export function ConsultPill({
  name,
  avatar,
  from = "#about",
  until = "#contact",
}: {
  name: string;
  avatar: string;
  from?: string;
  until?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const pill = ref.current;
    const start = document.querySelector<HTMLElement>(from);
    const end = document.querySelector<HTMLElement>(until);
    if (!pill || !start || dismissed) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const source = start.querySelector<HTMLElement>(".ha-fcard") ?? start;

    const show = (fromCard: boolean) => {
      setOpen(true);
      gsap.killTweensOf(pill);
      if (reduced) {
        gsap.set(pill, { autoAlpha: 1, x: 0, y: 0, scale: 1, filter: "none" });
        return;
      }
      if (fromCard) {
        // Fly out of the founder card towards the dock.
        gsap.set(pill, { autoAlpha: 1, x: 0, y: 0, scale: 1 });
        const a = source.getBoundingClientRect();
        const b = pill.getBoundingClientRect();
        const dx = a.left + a.width / 2 - (b.left + b.width / 2);
        const dy = Math.min(a.bottom - 60, window.innerHeight * 0.6) - (b.top + b.height / 2);
        gsap.fromTo(
          pill,
          { x: dx, y: dy, scale: 0.55, autoAlpha: 0, filter: "blur(10px)" },
          { x: 0, y: 0, scale: 1, autoAlpha: 1, filter: "blur(0px)", duration: 1.1, ease: "expo.out" },
        );
      } else {
        gsap.fromTo(
          pill,
          { y: 40, autoAlpha: 0, scale: 0.92 },
          { y: 0, autoAlpha: 1, scale: 1, filter: "blur(0px)", duration: 0.6, ease: "power3.out" },
        );
      }
    };
    const hide = () => {
      setOpen(false);
      gsap.killTweensOf(pill);
      gsap.to(pill, { y: 40, autoAlpha: 0, scale: 0.92, duration: reduced ? 0 : 0.35, ease: "power2.in" });
    };

    gsap.set(pill, { autoAlpha: 0 });
    const st = ScrollTrigger.create({
      trigger: start,
      start: "top 35%",
      endTrigger: end ?? undefined,
      end: end ? "top 85%" : "bottom top",
      onEnter: () => show(true),
      onEnterBack: () => show(false),
      onLeave: hide,
      onLeaveBack: hide,
    });
    return () => st.kill();
  }, [from, until, dismissed]);

  if (dismissed) return null;

  return (
    <aside ref={ref} className="ha-consult" aria-label="Book a consultation" inert={!open}>
      <Link href="/contact" className="ha-consult__link" data-magnetic="">
        <span className="ha-consult__face">
          <Image src={avatar} alt="" width={96} height={96} />
          <i aria-hidden="true" />
        </span>
        <span className="ha-consult__text">
          <b>
            Talk to {name.split(" ").pop()}
            <span className="ha-consult__role">, the founder</span>
          </b>
          <span>Free 30 minute consultation call</span>
        </span>
        <span className="ha-consult__cta">
          Book a call <span aria-hidden="true">→</span>
        </span>
      </Link>
      <button type="button" className="ha-consult__close" aria-label="Hide this" onClick={() => setDismissed(true)}>
        <span aria-hidden="true">×</span>
      </button>
    </aside>
  );
}
