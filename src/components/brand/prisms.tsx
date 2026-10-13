import { useId } from "react";

import { MARK_PATH, MARK_VIEWBOX } from "@/components/brand/mark-path";

type Variant = "brand" | "ink" | "paper";

type Prism = {
  /** Position and size as % of the container width/height. */
  x: number;
  y: number;
  w: number;
  r: number;
  tone: "glass" | "solid" | "line" | "crystal";
  depth: 1 | 2 | 3;
};

const LAYOUTS: Record<string, Prism[]> = {
  hero: [
    { x: 56, y: -14, w: 46, r: -10, tone: "glass", depth: 1 },
    { x: 40, y: 8, w: 17, r: 14, tone: "glass", depth: 2 },
    { x: 70, y: 62, w: 6, r: 32, tone: "line", depth: 3 },
  ],
  band: [
    { x: 64, y: -30, w: 40, r: 168, tone: "glass", depth: 1 },
  ],
  cta: [
    { x: -8, y: 30, w: 34, r: 12, tone: "glass", depth: 1 },
    { x: 72, y: -24, w: 30, r: -16, tone: "glass", depth: 2 },
  ],
  side: [
    { x: 74, y: -12, w: 34, r: -12, tone: "glass", depth: 1 },
  ],
};

/**
 * Venlynk logo prisms — the brand mark as floating glass shapes.
 * Decorative only; drifts slowly unless reduced motion is on.
 */
export function Prisms({ variant = "brand", layout = "hero" }: { variant?: Variant; layout?: keyof typeof LAYOUTS }) {
  const id = useId().replace(/:/g, "");
  const glassTop = variant === "paper" ? "#4546F9" : "#FFFFFF";
  const glassOpacity = variant === "paper" ? 0.16 : variant === "ink" ? 0.3 : 0.55;
  const solid = variant === "paper" ? "#4546F9" : "#FCFCFC";
  const stroke = variant === "paper" ? "rgba(69,70,249,0.45)" : "rgba(255,255,255,0.6)";

  return (
    <div className={`prisms prisms--${variant} prisms--${layout}`} aria-hidden="true">
      <div className="fx-aurora">
        <i />
        <i />
        <i />
      </div>
      <div className="fx-beam" />
      <div className="fx-grid" />
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <linearGradient id={`pg-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={glassTop} stopOpacity={glassOpacity} />
            <stop offset="0.55" stopColor={variant === "paper" ? "#A5A6FF" : "#A5A6FF"} stopOpacity={glassOpacity * 0.45} />
            <stop offset="1" stopColor={glassTop} stopOpacity={0.04} />
          </linearGradient>
        </defs>
      </svg>
      {LAYOUTS[layout].map((p, i) =>
        p.tone === "crystal" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src="/images/brand/venlynk-crystal.svg"
            alt=""
            className={`prism prism--crystal prism--d${p.depth}`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.w}%`,
              ["--r" as string]: `${p.r}deg`,
              ["--delay" as string]: `${-i * 3.1}s`,
            }}
          />
        ) : (
        <svg
          key={i}
          className={`prism prism--d${p.depth}`}
          viewBox={MARK_VIEWBOX}
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.w}%`,
            ["--r" as string]: `${p.r}deg`,
            ["--delay" as string]: `${-i * 3.1}s`,
          }}
        >
          <path
            d={MARK_PATH}
            fillRule="evenodd"
            fill={p.tone === "glass" ? `url(#pg-${id})` : p.tone === "solid" ? solid : "none"}
            stroke={p.tone === "solid" ? "none" : stroke}
            strokeWidth={p.tone === "line" ? 0.8 : 0.35}
          />
        </svg>
        ),
      )}
    </div>
  );
}
