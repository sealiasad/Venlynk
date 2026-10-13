import type { Industry, IndustrySlug } from "@/content/types";

/** Seven sectors from the company profile deck. Clients are derived from PROJECTS. */
export const INDUSTRIES: Industry[] = [
  {
    slug: "health",
    title: "Health and pharmacy",
    short: "Online pharmacies, lab bookings and telemedicine apps.",
    intro:
      "People using health products are often worried, in a hurry or ordering for someone they care about. We design for trust and speed first.",
    problems: [
      "Medicine catalogues that are hard to search",
      "Slow pages on mobile networks",
      "Booking consultations, lab tests and home services",
      "Repeat orders and prescriptions",
    ],
    services: ["web", "mobile", "online-stores"],
  },
  {
    slug: "travel-mobility",
    title: "Travel, tickets and mobility",
    short: "Flight booking, event ticketing, travel safety and ride apps.",
    intro:
      "Search, choose and pay, often on a phone and in a few minutes. We have redesigned booking flows where every lost step was a lost sale.",
    problems: [
      "Search results that overwhelm instead of help",
      "People leaving at checkout on mobile",
      "Two sided apps for riders and drivers",
      "Large content sites that need to stay fast",
    ],
    services: ["product-design", "mobile", "web"],
  },
  {
    slug: "real-estate",
    title: "Real estate and construction",
    short: "Property portals, investor sites and construction marketplaces.",
    intro:
      "Property buyers compare a lot before they call. We build listings and search that make projects easy to compare and easy to enquire about.",
    problems: [
      "Listings that are hard to filter and compare",
      "Investor details buried in PDFs",
      "Leads the sales team can actually follow up",
      "Marketplaces that need both sides to show up",
    ],
    services: ["web", "product-design", "seo"],
  },
  {
    slug: "saas",
    title: "SaaS, B2B and fintech",
    short: "Product interfaces, marketing sites and finance apps.",
    intro:
      "Software teams need a product that is easy to adopt and a website that explains it clearly. We do both, with one design system behind them.",
    problems: [
      "Onboarding and getting users to the first win",
      "Search and navigation in content heavy products",
      "Design systems that keep pace with the product",
      "Marketing sites the team can update themselves",
    ],
    services: ["product-design", "web", "ai"],
  },
  {
    slug: "commerce",
    title: "Commerce and consumer",
    short: "Online stores, bookings and home services.",
    intro:
      "From fashion stores to booking led venues, we build the path from interest to a paid order, and the operations behind it.",
    problems: [
      "Checkout and payment friction",
      "Booking and scheduling for venues and services",
      "Product pages that do not answer buyers' questions",
      "Fast launches on tight deadlines",
    ],
    services: ["online-stores", "web", "growth"],
  },
  {
    slug: "education-nonprofit",
    title: "Education and non profit",
    short: "Learning platforms and websites for charities.",
    intro:
      "Learners and donors need to find what they came for quickly. We build sites small teams can run themselves, without a developer on call.",
    problems: [
      "Course content that is hard to navigate",
      "Donation and sponsorship pages that feel uncertain",
      "Sites the team cannot update themselves",
      "Content in more than one language",
    ],
    services: ["web", "product-design"],
  },
  {
    slug: "media-faith",
    title: "Media and faith",
    short: "Content sites, audio apps and multilingual platforms.",
    intro:
      "Content products live or die on how easy it is to find the next thing to read, watch or listen to. We design for that habit.",
    problems: [
      "Finding the next article, video or recitation",
      "Audio and video that work on any connection",
      "Multilingual content managed by several teams",
      "Creators who need simple tools",
    ],
    services: ["mobile", "web", "product-design"],
  },
];

export function getIndustry(slug: string) {
  return INDUSTRIES.find((i) => i.slug === slug);
}

export function industryTitle(slug: IndustrySlug) {
  return getIndustry(slug)?.title ?? slug;
}
