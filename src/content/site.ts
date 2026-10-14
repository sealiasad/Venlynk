export const SITE = {
  name: "Venlynk",
  tagline: "The Link To Your Next Venture.",
  title: "Venlynk | Product design and engineering studio",
  description:
    "Venlynk designs and builds websites, apps, online stores and AI tools for founders and growing teams, then keeps improving them after launch.",
  email: "hello@venlynk.com",
  url: "https://venlynk.com",
  /**
   * Booking link for "Book a call" (Cal.com / Calendly).
   * Leave empty to hide the button everywhere.
   */
  calendarUrl: "",
  /** Short availability note shown in the hero. Leave empty to hide. */
  availability: "Booking new projects for early 2027",
} as const;

export const NAV = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
] as const;

/** Add real profile URLs. Entries with an empty href are not rendered. */
export const SOCIALS = [
  { label: "LinkedIn", href: "" },
  { label: "Behance", href: "" },
  { label: "Dribbble", href: "" },
  { label: "Instagram", href: "https://www.instagram.com/venlynk/" },
  { label: "Facebook", href: "" },
  { label: "Clutch", href: "" },
] as const;

/** Team track record: the people behind Venlynk, across their careers. */
export const STATS = [
  { value: 14, suffix: "+", label: "years building for the web" },
  { value: 80, suffix: "+", label: "projects shipped by the team" },
  { value: 25, suffix: "+", label: "brands partnered with" },
  { value: 6, suffix: "", label: "markets served, from London to Dubai" },
] as const;

export const MARKETS = ["United States", "United Kingdom", "UAE", "Australia", "Germany", "Pakistan"] as const;

export const TECH = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "NestJS",
  "Laravel",
  "Flutter",
  "React Native",
  "Shopify",
  "WordPress",
  "Supabase",
  "PostgreSQL",
  "Firebase",
  "Figma",
  "OpenAI and Claude APIs",
] as const;

export const PROCESS = [
  {
    title: "Discover",
    body: "We learn the business, the audience and what has to change. Interviews, analytics and a walk through what exists today.",
    output: "Problem statement, success measures",
  },
  {
    title: "Define",
    body: "Scope, priorities and structure before any visuals, so the first version is the right version.",
    output: "Scope, sitemap or user flows, estimate",
  },
  {
    title: "Design",
    body: "Interfaces people can read, trust and act on, tested with real users when the stakes are high.",
    output: "Prototype and design system",
  },
  {
    title: "Build",
    body: "Production engineering with weekly demos. Fast, accessible, and handed over so your team can run it.",
    output: "Shipped product, documentation",
  },
  {
    title: "Grow",
    body: "We measure what happens after launch and keep improving what matters most.",
    output: "Analytics, roadmap, ongoing releases",
  },
] as const;

export const ENGAGEMENTS = [
  {
    title: "Discovery sprint",
    length: "2 weeks",
    body: "For ideas that need shape. You leave with a clear scope, user flows, a clickable prototype and a fixed quote for the build.",
    best: "New products, redesigns with unclear scope",
  },
  {
    title: "Product build",
    length: "6 to 16 weeks",
    body: "Design and engineering from first screen to launch, run by one team with weekly demos and a shared roadmap.",
    best: "Websites, web apps, mobile apps, stores",
  },
  {
    title: "Growth partner",
    length: "Monthly",
    body: "A standing team for releases, experiments, SEO, performance and support, for products that are already live.",
    best: "Live products that need to keep moving",
  },
] as const;

export const FAQ = [
  {
    q: "What does a project with Venlynk cost?",
    a: "It depends on scope. Most marketing websites start from a few thousand dollars; product builds and apps are larger. After a short call we send a written estimate with options, so you can choose what fits the budget.",
  },
  {
    q: "How long does it take?",
    a: "A marketing website usually takes 4 to 8 weeks. A first version of a web or mobile app takes 8 to 16 weeks. We share the timeline and milestones before any build starts.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. Most of our work is with teams in the US, UK, UAE, Australia and Europe. We plan overlap hours into the schedule and keep everyone on one shared board.",
  },
  {
    q: "Can you take over an existing product or codebase?",
    a: "Yes. We start with a short audit of the code, design and analytics, then recommend whether to improve, refactor or rebuild, and why.",
  },
  {
    q: "Do you handle both design and development?",
    a: "Yes. Strategy, design and engineering sit in one team, so nothing is lost in a handoff between agencies.",
  },
  {
    q: "What happens after launch?",
    a: "You own everything: code, designs and accounts. Many clients keep us on as a growth partner for releases, SEO and performance; others take it in-house with our documentation.",
  },
  {
    q: "Do you build Etsy and Shopify stores?",
    a: "Yes. We handle the full path from product research and store setup to listings, SEO and ongoing management.",
  },
] as const;
