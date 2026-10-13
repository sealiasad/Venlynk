import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";

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
        <MotionProvider />
      </body>
    </html>
  );
}
