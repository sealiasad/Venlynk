/**
 * Analytics IDs come from the build environment, so tags are switched on by setting
 * these in Hostinger (Environment variables) and redeploying. Empty = that tag never loads.
 */
export const ANALYTICS = {
  ga: process.env.NEXT_PUBLIC_GA_ID?.trim() || "",
  clarity: process.env.NEXT_PUBLIC_CLARITY_ID?.trim() || "",
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID?.trim() || "",
  linkedinLeadConversion: process.env.NEXT_PUBLIC_LINKEDIN_LEAD_CONVERSION_ID?.trim() || "",
  meta: process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim() || "",
};

export const anyAnalytics = Object.values(ANALYTICS).some(Boolean);

/** Visitor choice, stored on this device only. */
export type Consent = "granted" | "denied";
export const CONSENT_KEY = "vl-consent";
export const CONSENT_EVENT = "vl-consent-change";

export function readConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function saveConsent(v: Consent) {
  try {
    window.localStorage.setItem(CONSENT_KEY, v);
  } catch {
    /* private mode: the choice lasts for this page view only */
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: v }));
}

/**
 * Visitors in Europe and the UK must opt in before analytics cookies are set (GDPR / UK GDPR).
 * Detected from the device time zone, which needs no lookup and no extra request.
 */
export function needsConsent() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    return tz.startsWith("Europe/") || ["Atlantic/Reykjavik", "Atlantic/Canary", "Atlantic/Madeira", "Atlantic/Faroe"].includes(tz);
  } catch {
    return true;
  }
}

/** True when tracking may run for this visitor right now. */
export function trackingAllowed() {
  const c = readConsent();
  if (c) return c === "granted";
  return !needsConsent();
}

type Params = Record<string, string | number | boolean | undefined>;

type Win = Window & {
  gtag?: (...args: unknown[]) => void;
  clarity?: (...args: unknown[]) => void;
  lintrk?: (...args: unknown[]) => void;
  fbq?: (...args: unknown[]) => void;
};

/**
 * Sends one named event to every tag that is loaded. Safe to call anywhere:
 * it does nothing on the server, without consent, or when no tag is configured.
 * Never pass personal details (names, emails, message text) as params.
 */
export function track(event: string, params: Params = {}) {
  if (typeof window === "undefined" || !trackingAllowed()) return;
  const w = window as Win;
  try {
    w.gtag?.("event", event, params);
    w.clarity?.("event", event);
    if (event === "generate_lead") {
      if (ANALYTICS.linkedinLeadConversion) w.lintrk?.("track", { conversion_id: Number(ANALYTICS.linkedinLeadConversion) });
      w.fbq?.("track", "Lead");
    } else if (event === "contact_click") {
      w.fbq?.("track", "Contact");
    }
  } catch {
    /* analytics must never break the page */
  }
}
