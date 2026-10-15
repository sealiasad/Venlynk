"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

import {
  ANALYTICS,
  anyAnalytics,
  CONSENT_EVENT,
  needsConsent,
  readConsent,
  saveConsent,
  track,
  trackingAllowed,
} from "@/lib/analytics";

const OPEN_EVENT = "vl-consent-open";

/** Opens the cookie choice again (footer "Cookie settings" button). */
export function openConsent() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

/**
 * Loads the configured tags after the page is idle (strategy "lazyOnload", so they never
 * compete with first paint), only for visitors who may be tracked, and records the actions
 * that matter for a studio site: contact clicks, social clicks and calls to action.
 */
export function Analytics() {
  const [allowed, setAllowed] = useState(false);
  const [ask, setAsk] = useState(false);

  useEffect(() => {
    if (!anyAnalytics) return;
    const sync = () => {
      setAllowed(trackingAllowed());
      setAsk(needsConsent() && readConsent() === null);
    };
    const reopen = () => setAsk(true);
    sync();
    window.addEventListener(CONSENT_EVENT, sync);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => {
      window.removeEventListener(CONSENT_EVENT, sync);
      window.removeEventListener(OPEN_EVENT, reopen);
    };
  }, []);

  // Clicks that signal a lead or interest, captured once for the whole site.
  useEffect(() => {
    if (!anyAnalytics) return;
    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (href.startsWith("tel:")) track("contact_click", { method: "phone" });
      else if (href.startsWith("mailto:")) track("contact_click", { method: "email" });
      else if (/wa\.me|whatsapp\.com/i.test(href)) track("contact_click", { method: "whatsapp" });
      else if (/^\/contact(\b|\/|\?|#|$)/.test(href)) track("cta_click", { target: "contact", from: window.location.pathname });
      else if (/^https?:\/\//.test(href) && !href.includes(window.location.host)) {
        const host = new URL(href).hostname.replace(/^www\./, "");
        const social = /linkedin|instagram|facebook|x\.com|threads|reddit|discord|twitch|behance|dribbble|clutch/.exec(host);
        track(social ? "social_click" : "outbound_click", social ? { network: social[0] } : { host });
      }
    };
    document.addEventListener("click", onClick, { capture: true, passive: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  if (!anyAnalytics) return null;

  return (
    <>
      {allowed && ANALYTICS.ga ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS.ga}`} strategy="lazyOnload" />
          <Script id="ga-init" strategy="lazyOnload">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config',${JSON.stringify(ANALYTICS.ga)},{anonymize_ip:true});`}
          </Script>
        </>
      ) : null}
      {allowed && ANALYTICS.clarity ? (
        <Script id="clarity-init" strategy="lazyOnload">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,"clarity","script",${JSON.stringify(ANALYTICS.clarity)});window.clarity('consentv2',{ad_Storage:'denied',analytics_Storage:'granted'});`}
        </Script>
      ) : null}
      {allowed && ANALYTICS.linkedin ? (
        <Script id="linkedin-insight" strategy="lazyOnload">
          {`window._linkedin_partner_id=${JSON.stringify(ANALYTICS.linkedin)};window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(window._linkedin_partner_id);(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s)})(window.lintrk);`}
        </Script>
      ) : null}
      {allowed && ANALYTICS.meta ? (
        <Script id="meta-pixel" strategy="lazyOnload">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init',${JSON.stringify(ANALYTICS.meta)});fbq('track','PageView');`}
        </Script>
      ) : null}
      {ask ? (
        <div className="consent" role="dialog" aria-live="polite" aria-label="Cookie choice">
          <p>
            We use analytics cookies to see which pages help visitors and to improve the site. Nothing is
            set until you choose.
          </p>
          <div className="consent__actions">
            <button type="button" className="consent__btn consent__btn--ghost" onClick={() => saveConsent("denied")}>
              Decline
            </button>
            <button type="button" className="consent__btn" onClick={() => saveConsent("granted")}>
              Accept
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
