import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

import { Analytics } from "@/components/site/analytics";
import { MotionProvider } from "@/components/motion/motion-provider";
import { CONTACT, FOUNDER } from "@/content/home";
import { SITE, SOCIALS } from "@/content/site";
import { ldJson } from "@/lib/seo";


import "./globals.css";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/chrome.css";
import "@/styles/home.css";
import "@/styles/pages.css";
import "@/styles/home-a.css";
import "@/styles/pages-a.css";
import "@/styles/refine-a.css";
import "@/styles/catalog.css";

const grotesk = localFont({
  src: "../fonts/space-grotesk-latin-wght-normal.woff2",
  variable: "--font-grotesk",
  weight: "300 700",
  display: "swap",
});

const instrument = localFont({
  src: [
    { path: "../fonts/instrument-serif-latin-400-normal.woff2", style: "normal", weight: "400" },
    { path: "../fonts/instrument-serif-latin-400-italic.woff2", style: "italic", weight: "400" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: `%s | ${SITE.name}` },
  description: SITE.description,
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description },
};

export const viewport: Viewport = {
  themeColor: "#08080b",
};

const motionBoot = `(function(){var d=document.documentElement;if(!window.matchMedia||!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('js-motion');setTimeout(function(){if(d.dataset.motion!=='ready'){d.classList.remove('js-motion')}},4000)}})();`;

// Runs as soon as the page HTML has arrived, before the JavaScript bundles. Reveals that are
// below the fold get .rv, which hides them until they scroll in (MotionProvider). Anything
// already on screen is never hidden, so the first paint shows the real page instead of
// waiting for hydration. Off-screen elements can't be seen, so hiding them causes no flash.
const revealBoot = `(function(){var d=document.documentElement;if(!d.classList.contains('js-motion'))return;var h=innerHeight;document.querySelectorAll('[data-words],[data-fade],[data-clip]').forEach(function(e){var r=e.getBoundingClientRect();if(r.top<h&&r.bottom>0)e.classList.add('is-in');else e.classList.add('rv')})})();`;

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: `${SITE.url}/images/brand/venlynk-logo-512.png`,
  email: SITE.email,
  telephone: CONTACT.phone,
  slogan: SITE.tagline,
  description: SITE.description,
  founder: {
    "@type": "Person",
    name: FOUNDER.name,
    jobTitle: FOUNDER.role,
    sameAs: [FOUNDER.linkedin],
  },
  areaServed: CONTACT.markets,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: SITE.email,
    telephone: CONTACT.phone,
    availableLanguage: ["English"],
  },
  ...(SOCIALS.some((x) => x.href) ? { sameAs: SOCIALS.filter((x) => x.href).map((x) => x.href) } : {}),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${grotesk.variable} ${instrument.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionBoot }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: ldJson(orgJsonLd) }}
        />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: revealBoot }} />
        <MotionProvider />
        <Analytics />
      </body>
    </html>
  );
}
