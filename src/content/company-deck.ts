/** Venlynk company profile deck — editable content source of truth. */

export const DECK = {
  year: "2026",
  title: "Venlynk Company Profile",
  tagline: "The Link To Your Next Venture.",
  url: "venlynk.digital",
  email: "hello@venlynk.digital",
  location: "Building for clients worldwide",
} as const;

export const DECK_STATS = [
  { value: "10+", label: "Years of team experience" },
  { value: "80+", label: "Projects shipped by the team" },
  { value: "25+", label: "Brands partnered with" },
  { value: "4", label: "Core practice areas" },
] as const;

export const DECK_SERVICES = [
  {
    num: "01",
    title: "Websites",
    body: "Clear, conversion-focused sites that position the business with confidence.",
  },
  {
    num: "02",
    title: "Web Apps & Platforms",
    body: "Product surfaces and business systems teams can actually run on.",
  },
  {
    num: "03",
    title: "Mobile Apps",
    body: "Customer and operations apps built for real moments on the phone.",
  },
  {
    num: "04",
    title: "UX / UI Design",
    body: "Interfaces shaped by research, usability, and measurable outcomes.",
  },
  {
    num: "05",
    title: "Branding",
    body: "Visual identity that stays consistent across product and marketing.",
  },
  {
    num: "06",
    title: "AI & Growth",
    body: "Practical automation and post-launch improvement tied to business goals.",
  },
] as const;

export const DECK_PROCESS = [
  {
    step: "01",
    title: "Discover",
    body: "Understand the business, audience, and the outcome that matters.",
  },
  {
    step: "02",
    title: "Define",
    body: "Shape scope, messaging, and product structure before visuals.",
  },
  {
    step: "03",
    title: "Design",
    body: "Craft interfaces that are easy to read, trust, and act on.",
  },
  {
    step: "04",
    title: "Build",
    body: "Ship production-ready engineering — fast, accessible, maintainable.",
  },
  {
    step: "05",
    title: "Grow",
    body: "Measure, iterate, and keep the product performing after launch.",
  },
] as const;

export const DECK_VALUES = [
  {
    title: "Clarity first",
    body: "We define the problem before building the wrong solution.",
  },
  {
    title: "Craft with intent",
    body: "Every screen earns its place — no decorative noise.",
  },
  {
    title: "Outcomes over output",
    body: "Design and code are measured by business and user results.",
  },
  {
    title: "Partnership tone",
    body: "Transparent collaboration with founders and product teams.",
  },
] as const;

export type PortfolioCategory = "websites" | "webapps" | "mobile";

export type PortfolioItem = {
  category: PortfolioCategory;
  name: string;
  url: string;
  summary: string;
  /** Full-slide visual from prior portfolio mockups (template reference). */
  image: string;
  tags: readonly string[];
  metrics?: readonly { value: string; label: string }[];
};

export const DECK_PORTFOLIO: readonly PortfolioItem[] = [
  {
    category: "websites",
    name: "ByStored",
    url: "bystored.com",
    summary:
      "London storage & removals — full-service booking experience across web and mobile.",
    image: "/images/deck/portfolio-p06.jpg",
    tags: ["Website", "UI Development", "Responsive"],
  },
  {
    category: "websites",
    name: "Global Rescue",
    url: "globalrescue.com",
    summary:
      "Enterprise CMS migration — 400+ pages moved to WordPress with performance and security in mind.",
    image: "/images/deck/portfolio-p10.jpg",
    tags: ["Website", "WordPress", "Migration"],
  },
  {
    category: "websites",
    name: "The Jumbo Jump",
    url: "thejumbojump.com",
    summary:
      "Entertainment venue site with booking and payments — launched on an aggressive one-week timeline.",
    image: "/images/deck/portfolio-p12.jpg",
    tags: ["Website", "WordPress", "Bookings"],
  },
  {
    category: "websites",
    name: "DXB Off Plan",
    url: "dxboffplan.com",
    summary:
      "Dubai off-plan real estate platform — listings, search, and investor-focused UX.",
    image: "/images/deck/portfolio-p16.jpg",
    tags: ["Website", "Real Estate", "Search"],
  },
  {
    category: "webapps",
    name: "Helpjuice",
    url: "helpjuice.com",
    summary:
      "Knowledge-base product UX — search, scale, and documentation workflows for growing teams.",
    image: "/images/deck/portfolio-p08.jpg",
    tags: ["Web App", "SaaS", "UX"],
  },
  {
    category: "webapps",
    name: "QriosityNet",
    url: "qriositynet.com",
    summary:
      "Enterprise knowledge & digital transformation surfaces — desktop and mobile UI systems.",
    image: "/images/deck/portfolio-p14.jpg",
    tags: ["Web App", "Enterprise", "UI System"],
  },
  {
    category: "webapps",
    name: "Dawaai.pk",
    url: "dawaai.pk",
    summary:
      "Healthcare commerce rebuild — Next.js migration with major gains in performance and conversion.",
    image: "/images/deck/portfolio-p18.jpg",
    tags: ["Web App", "E-commerce", "Next.js"],
  },
  {
    category: "webapps",
    name: "Hello My Ticket",
    url: "hellomyticket.net",
    summary:
      "Flight itinerary search and booking — redesign focused on adoption and order completion.",
    image: "/images/deck/portfolio-p24.jpg",
    tags: ["Web App", "Travel", "UX"],
    metrics: [
      { value: "7/10", label: "New experience rating" },
      { value: "54%", label: "User adoption lift" },
      { value: "30%", label: "Order booking lift" },
    ],
  },
  {
    category: "mobile",
    name: "Product App Suite",
    url: "Selected mobile work",
    summary:
      "Event ticketing and ride-hailing experiences — customer and operator flows designed end to end.",
    image: "/images/deck/portfolio-p21.jpg",
    tags: ["Mobile", "UX/UI", "Product"],
  },
  {
    category: "mobile",
    name: "Frontline Ticketing",
    url: "frontlineticketing.com",
    summary:
      "Event ticket reservation app redesign — discovery, checkout, and brand presence on mobile.",
    image: "/images/deck/portfolio-p23.jpg",
    tags: ["Mobile App", "Events", "Redesign"],
    metrics: [
      { value: "9/10", label: "New experience rating" },
      { value: "61%", label: "User adoption lift" },
    ],
  },
] as const;

export const DECK_CONTENTS = [
  { num: "01", label: "Who we are" },
  { num: "02", label: "Who we serve" },
  { num: "03", label: "What we build" },
  { num: "04", label: "Selected work" },
  { num: "05", label: "Proof & process" },
  { num: "06", label: "Start a conversation" },
] as const;

/** Multi-audience hooks — social, marketplace, technical, non-technical. */
export const DECK_AUDIENCES = [
  {
    title: "Founders & operators",
    body: "You need a product that looks premium and ships without drama.",
    fit: "Non-technical friendly",
  },
  {
    title: "Brand & growth teams",
    body: "Campaigns, launches, and social-ready surfaces that convert attention.",
    fit: "Instagram · Meta · X",
  },
  {
    title: "Marketplace sellers",
    body: "Storefronts, apps, and systems that keep orders and trust moving.",
    fit: "Online marketplaces",
  },
  {
    title: "Product & engineering leads",
    body: "Clean architecture, modern stacks, and UX that survives scale.",
    fit: "Technical buyers",
  },
] as const;

export const DECK_TRUST = [
  "ByStored",
  "Helpjuice",
  "Global Rescue",
  "Dawaai",
  "DXB Off Plan",
  "Frontline",
  "QriosityNet",
  "Jumbo Jump",
] as const;

export const DECK_TECH = [
  "React",
  "Next.js",
  "TypeScript",
  "WordPress",
  "Shopify",
  "Laravel",
  "Node",
  "Flutter-ready UI",
  "AI workflows",
  "Analytics & A/B",
] as const;

export const DECK_TESTIMONIALS = [
  {
    quote:
      "They didn’t just redesign screens — they made the product feel trustworthy overnight.",
    name: "Product lead",
    role: "Healthcare commerce",
  },
  {
    quote:
      "Clear communication, senior craft, and a launch that actually held up under traffic.",
    name: "Founder",
    role: "Consumer marketplace",
  },
  {
    quote:
      "From brief to shipped UI without agency theater. Exactly what we needed.",
    name: "Operations director",
    role: "Services platform",
  },
] as const;

export const DECK_ENGAGE = [
  {
    step: "01",
    title: "Share the brief",
    body: "A link, a Loom, a Discord note, or a marketplace brief — start messy.",
  },
  {
    step: "02",
    title: "We shape the path",
    body: "Scope, timeline, and the first win — in language your team understands.",
  },
  {
    step: "03",
    title: "Ship & grow",
    body: "Design and build that look premium in the feed and hold up in production.",
  },
] as const;

export const DECK_CHANNELS = [
  "Discord",
  "X / Twitter",
  "Instagram",
  "Facebook / Meta",
  "Marketplaces",
  "Direct intro",
] as const;
