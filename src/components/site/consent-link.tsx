"use client";

import { useEffect, useState } from "react";

import { openConsent } from "@/components/site/analytics";
import { anyAnalytics, needsConsent } from "@/lib/analytics";

/** "Cookie settings" in the footer, shown only where a cookie choice applies. */
export function ConsentLink() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setShow(anyAnalytics && needsConsent()));
    return () => cancelAnimationFrame(id);
  }, []);
  if (!show) return null;
  return (
    <button type="button" className="link ftr__consent" onClick={openConsent}>
      Cookie settings
    </button>
  );
}
