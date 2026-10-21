/**
 * Search titles and descriptions. Written around what buyers search for,
 * kept honest to the page content. Titles get " | Venlynk" automatically.
 */

export const PAGE_SEO = {
  home: {
    title: "Venlynk | Web, app and AI product studio",
    description:
      "Venlynk designs and builds websites, apps, online stores and AI tools for founders and growing teams, then keeps improving them after launch.",
  },
  work: {
    title: "Web, app and online store projects",
    description:
      "21 websites, online stores and mobile apps for clients in the UK, US, UAE, Australia, Germany and Pakistan, each labelled with how it was delivered.",
  },
  services: {
    title: "Website, App, Shopify and AI Development Services",
    description:
      "Websites, web apps, iOS and Android apps, Shopify and ecommerce, AI agents, UI/UX design and SEO, planned, built and improved by one team.",
  },
  industries: {
    title: "Industries we build for",
    description:
      "Websites and apps for health, travel and mobility, real estate, SaaS and fintech, commerce, education, non profit, media and faith.",
  },
  about: {
    title: "About the studio and its founder",
    description:
      "Venlynk is a product design and engineering studio led by Ali Asad. Strategy, design and engineering in one team, from brief to release.",
  },
  insights: {
    title: "Insights on product, engineering and AI",
    description: "Practical notes on product design, engineering and AI from the Venlynk studio.",
  },
  contact: {
    title: "Start a project or book a call",
    description: "Tell Venlynk about your website, app, store or AI project. We reply within one working day.",
  },
} as const;

/** Per service: search title and a description under about 160 characters. */
export const SERVICE_SEO: Record<string, { title: string; description: string }> = {
  "product-design": {
    title: "UI and UX design for apps and websites",
    description:
      "We map the journeys that matter and design screens people understand the first time, with a clickable prototype before anything is built.",
  },
  web: {
    title: "Next.js and WordPress website development",
    description:
      "Slow site or hard to update? We build fast Next.js and WordPress websites and web apps your team can edit without a developer.",
  },
  mobile: {
    title: "Flutter and React Native app development",
    description:
      "One app for iOS and Android, designed and built in Flutter or React Native, with App Store and Google Play releases handled for you.",
  },
  "online-stores": {
    title: "Shopify store design and development",
    description:
      "We design and build Shopify and custom stores, tidy up product pages and checkout, and connect payments, stock and delivery.",
  },
  etsy: {
    title: "Etsy shop setup and listings",
    description:
      "We research what buyers search for, set up your Etsy shop, write listings built to be found and support you through launch.",
  },
  odoo: {
    title: "Odoo implementation and setup",
    description:
      "With our Odoo technology partners we map how you work, set up the modules you need, move your data across and train your team.",
  },
  ai: {
    title: "AI automation and AI agent development",
    description:
      "We build AI assistants and automations inside the tools your team already uses, with a person checking the output where it matters.",
  },
  seo: {
    title: "Technical SEO and website migrations",
    description:
      "We fix the technical basics, plan migrations and write pages around real searches. No ranking promises, just work you can measure.",
  },
  aeo: {
    title: "Answer engine optimisation for AI search",
    description:
      "We shape your content, schema and mentions so ChatGPT and other AI assistants have clear, trusted information about your business.",
  },
  aso: {
    title: "App store optimisation (ASO)",
    description:
      "We tune your title, keywords, screenshots and reviews on the App Store and Google Play so the right people find your app.",
  },
  growth: {
    title: "Website and app support and growth",
    description:
      "We stay on after launch with analytics, speed work, A/B tests and monthly releases, so your site or app keeps improving.",
  },
};

/** Per project: the kind of work, used in the case study title. */
export const CASE_TYPE: Record<string, string> = {
  "frontline-ticketing": "ticketing app and website",
  servicemarket: "web portal",
  dawaai: "Next.js ecommerce rebuild",
  "dxb-off-plan": "real estate portal",
  bystored: "booking web app",
  qriositynet: "community platform design",
  "insaf-academy": "e-learning platform",
  "mnm-estates": "property investment portal",
  "care-foundation": "non profit WordPress website",
  round2: "Laravel blog",
  techoutsource: "marketing website",
  "the-jumbo-jump": "booking website",
  replay: "Shopify store",
  "the-heavenly-scents": "Shopify store",
  stylefits: "Shopify store",
  "bible-study-fellowship": "multilingual website",
  buildbid: "Next.js marketplace",
  "dawaai-doctor": "telemedicine app",
  tilawat: "Flutter audio app",
  "stock-stream": "stock ticker app",
  ice: "rider and driver apps",
};

/** Which articles support which services and industries. */
export const INSIGHT_LINKS: Record<string, { services: string[]; industries: string[] }> = {
  "before-you-redesign-a-booking-flow": { services: ["product-design"], industries: ["travel-mobility"] },
  "migrating-a-large-website-without-losing-search": { services: ["web", "seo"], industries: [] },
  "where-ai-actually-helps-a-small-team": { services: ["ai"], industries: [] },
};

/** Article slugs that support a service or an industry page. */
export function insightsFor(by: { service?: string; industry?: string }) {
  return Object.entries(INSIGHT_LINKS)
    .filter(([, v]) => (by.service ? v.services.includes(by.service) : v.industries.includes(by.industry ?? "")))
    .map(([slug]) => slug);
}
