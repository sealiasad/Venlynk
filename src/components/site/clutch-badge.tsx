"use client";

import Script from "next/script";

declare global {
  interface Window {
    CLUTCHCO?: { Init?: () => void };
  }
}

/** Clutch rating widget. Footer placement, so links are nofollow as Clutch advises. */
export function ClutchBadge() {
  return (
    <div className="ftr__clutch">
      <div
        className="clutch-widget"
        data-url="https://widget.clutch.co"
        data-widget-type="1"
        data-height="40"
        data-nofollow="true"
        data-expandifr="true"
        data-scale="100"
        data-clutchcompany-id="2750715"
      />
      <Script src="https://widget.clutch.co/static/js/widget.js" strategy="afterInteractive" onReady={() => window.CLUTCHCO?.Init?.()} />
    </div>
  );
}
