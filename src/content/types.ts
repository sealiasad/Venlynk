export type IndustrySlug =
  | "health"
  | "travel-mobility"
  | "real-estate"
  | "saas"
  | "commerce"
  | "education-nonprofit"
  | "media-faith";

export type ServiceSlug =
  | "product-design"
  | "web"
  | "mobile"
  | "online-stores"
  | "etsy"
  | "odoo"
  | "ai"
  | "seo"
  | "aeo"
  | "aso"
  | "growth";

export type PracticeSlug = "products" | "commerce" | "growth";

/** How a project was delivered. Shown on every project so nothing is overclaimed. */
export type Engagement =
  | "Delivered by Venlynk"
  | "Founder's previous role"
  | "Collaborative engagement"
  | "Ongoing retainer"
  | "In development";

export type Result = {
  /** Display value, e.g. "54%". Only verified, client-reported numbers. */
  value: string;
  label: string;
};

export type Project = {
  slug: string;
  client: string;
  /** Sector line, e.g. "Health and pharmacy, Pakistan". */
  sector: string;
  label: Engagement;
  summary: string;
  did: string[];
  platform: string;
  kind: "web" | "mobile";
  industry: IndustrySlug;
  practice: PracticeSlug;
  services: ServiceSlug[];
  url?: string;
  /** Wide mockup image, 1800 x 1429. Leave empty for a typographic card. */
  image?: string;
  imageAlt?: string;
  results?: Result[];
  featured?: boolean;
};

export type Service = {
  slug: ServiceSlug;
  n: string;
  practice: PracticeSlug;
  title: string;
  /** One line for lists. */
  short: string;
  /** The question a client is asking themselves. */
  question: string;
  intro: string;
  image: string;
  imageAlt: string;
  tools: string[];
  deliverables: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  closing: string;
};

export type Practice = {
  slug: PracticeSlug;
  n: string;
  title: string;
  sub: string;
  tone: "lav" | "paper" | "blue";
};

export type Industry = {
  slug: IndustrySlug;
  title: string;
  short: string;
  intro: string;
  problems: string[];
  services: ServiceSlug[];
};

export type InsightBlock =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Insight = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  author: string;
  content: InsightBlock[];
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  projectSlug?: string;
  /** Only `true` quotes are rendered. Never publish unapproved words. */
  approved: boolean;
};
