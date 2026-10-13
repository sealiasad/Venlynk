import { ImageResponse } from "next/og";

import { MARK_PATH, MARK_VIEWBOX } from "@/components/brand/mark-path";

export const alt = "Venlynk, product design and engineering studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(ellipse at 88% 8%, #4546F8 0%, #23246E 34%, #08080B 68%)",
          color: "#fcfcfc",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 40, fontWeight: 700 }}>
          <svg width="64" height="56" viewBox={MARK_VIEWBOX}>
            <path d={MARK_PATH} fill="#4546F8" fillRule="evenodd" />
          </svg>
          Venlynk
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 92, lineHeight: 1, letterSpacing: -4 }}>
          <span>The link to</span>
          <span>your next</span>
          <span style={{ color: "#A5A6FF" }}>venture.</span>
        </div>
        <div style={{ fontSize: 26, color: "rgba(252,252,252,0.6)" }}>venlynk.com</div>
      </div>
    ),
    size,
  );
}
