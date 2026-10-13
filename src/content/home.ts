/**
 * Homepage copy and data. Everything here comes from the Venlynk company
 * profile deck. Keep numbers verified and wording plain (no dashes).
 * Items marked `placeholder: true` must be replaced before launch.
 */

import type { Engagement } from "@/content/types";

export type { Engagement };

export const HERO = {
  eyebrow: "Product design and engineering studio",
  lines: ["The link to", "your *next*", "*venture.*"],
  lead: "We design and build websites, apps, online stores and AI tools for founders and growing teams, then stay on to make them better.",
  primary: { label: "Book a 30 minute call", href: "/contact" },
  secondary: { label: "See the work", href: "#work" },
};

export const MARQUEE = [
  "Toyota",
  "Careem",
  "VistaJet",
  "Dawaai",
  "ServiceMarket",
  "Jazz",
  "Coke Studio",
];

export const INTRO = {
  statement:
    "We build digital products that move businesses forward. Strategy, design and engineering sit in one team, so *nothing gets lost* between the idea and the product people actually use.",
  facts: [
    { label: "One team", text: "Strategy, UX, engineering and growth in one place." },
    { label: "Who we work with", text: "Startups, small businesses and established brands." },
    { label: "Where", text: "Clients in the US, UK, UAE, Australia, Germany and Pakistan." },
  ],
};

export const PROBLEMS = [
  { icon: "speed", label: "Slow, unclear websites", text: "We build fast sites that rank well and explain what you do in a few seconds." },
  { icon: "tap", label: "Apps people abandon", text: "We fix booking and checkout so people get all the way to the end." },
  { icon: "flow", label: "Manual work, scattered data", text: "We automate the repetitive work and connect the tools your team already uses.", highlight: true },
];

export const PRACTICES = [
  {
    n: "01",
    icon: "layers",
    title: "Digital products",
    sub: "Design and build the product.",
    tone: "lav",
    services: ["Product and UX design", "Websites and web apps", "Mobile apps"],
  },
  {
    n: "02",
    icon: "bag",
    title: "Commerce and platforms",
    sub: "Sell online and run operations.",
    tone: "paper",
    services: ["Online stores", "Etsy store setup", "Odoo implementation"],
  },
  {
    n: "03",
    icon: "spark",
    title: "AI, automation and growth",
    sub: "Work smarter and keep improving.",
    tone: "blue",
    services: [
      "AI and automation",
      "Search engine optimisation",
      "Answer engine optimisation",
      "App store optimisation",
      "Growth and support",
    ],
  },
] as const;

export const WORK_ROWS: {
  name: string;
  detail: string;
  label: Engagement;
  href: string;
  image: string;
}[] = [
  { name: "Frontline Ticketing", detail: "Events · App and web", label: "Delivered by Venlynk", href: "/work/frontline-ticketing", image: "/images/work/frontline-ticketing/preview.webp" },
  { name: "ServiceMarket", detail: "Home services, Dubai", label: "Ongoing retainer", href: "/work/servicemarket", image: "/images/work/servicemarket/preview.webp" },
  { name: "Tilawat", detail: "Faith and audio · Flutter", label: "Delivered by Venlynk", href: "/work/tilawat", image: "/images/work/tilawat/preview.webp" },
  { name: "Replay", detail: "Fashion · Shopify", label: "Delivered by Venlynk", href: "/work/replay", image: "/images/work/replay/preview.webp" },
  { name: "The Jumbo Jump", detail: "Entertainment · Live in a week", label: "Delivered by Venlynk", href: "/work/the-jumbo-jump", image: "/images/work/the-jumbo-jump/preview.webp" },
  { name: "Dawaai.pk", detail: "Health and pharmacy", label: "Founder's previous role", href: "/work/dawaai", image: "/images/work/dawaai/preview.webp" },
  { name: "ICE", detail: "Mobility, Germany", label: "Delivered by Venlynk", href: "/work/ice", image: "/images/work/ice/preview.webp" },
];

export const RESULTS = [
  { value: "61%", label: "more users adopted the app", client: "Frontline Ticketing", tone: "blue" },
  { value: "9/10", label: "user rating for the new app", client: "Frontline Ticketing", tone: "ink" },
  { value: "Up to 90%", label: "faster pages after the rebuild", client: "Dawaai.pk · founder's previous role", tone: "lav" },
  { value: "1 wk", label: "from kickoff to launch", client: "The Jumbo Jump", tone: "ink" },
] as const;

export const INDUSTRIES = [
  { slug: "health", icon: "pulse", title: "Health and pharmacy", clients: "Dawaai.pk, Dawaai Doctor" },
  { slug: "travel-mobility", icon: "plane", title: "Travel, tickets and mobility", clients: "Frontline Ticketing, ICE" },
  { slug: "real-estate", icon: "home", title: "Real estate and construction", clients: "DXB Off Plan, MNM Estates, BuildBid" },
  { slug: "saas", icon: "cloud", title: "SaaS, B2B and fintech", clients: "QriosityNet, TechOutsource, Stock Stream" },
  { slug: "commerce", icon: "bag", title: "Commerce and consumer", clients: "ServiceMarket, ByStored, The Jumbo Jump, Replay" },
  { slug: "education-nonprofit", icon: "book", title: "Education and non profit", clients: "Insaf Academy, CARE Foundation" },
  { slug: "media-faith", icon: "play", title: "Media and faith", clients: "Bible Study Fellowship, Round2 Ventures, Tilawat" },
];

export const FOUNDER = {
  role: "Founder and CEO",
  name: "Syed Asad Ali",
  bio: "Ali has spent more than 14 years building for the web. He started on brand websites at Creative Chaos, moved into product engineering at VentureDive, then led UX and front end at Dawaai.pk and Global Rescue. Today he leads engineering teams and brings AI and agentic workflows into how software gets planned, built and shipped.",
  skills: ["Engineering leadership", "AI and agentic systems", "React and Next.js", "Flutter and React Native", "UX research"],
  linkedin: "https://www.linkedin.com/in/iali-asad",
  /** Replace with the portrait from the photo shoot. */
  photo: null as string | null,
  /** Small round photo used on the consultation pill. Swap after the shoot. */
  avatar: "/images/team/ali-avatar.webp",
};

export const NUMBERS = [
  { value: 14, suffix: "+", label: "years building for the web" },
  { value: 80, suffix: "+", label: "projects shipped by the team" },
  { value: 25, suffix: "+", label: "brands partnered with" },
  { value: 6, suffix: "", label: "countries, from London to Dubai" },
];

export const BRANDS: { name: string; file: string; dark?: boolean }[] = [
  { name: "Toyota", file: "toyota" },
  { name: "Coke Studio", file: "coke" },
  { name: "Jazz", file: "jazz" },
  { name: "Careem", file: "careem" },
  { name: "UBL UK", file: "ubl" },
  { name: "Jubilee Life Insurance", file: "jubilee" },
  { name: "Dawaai", file: "dawaai", dark: true },
  { name: "ServiceMarket", file: "servicemarket" },
  { name: "Frontline Ticketing", file: "frontline" },
  { name: "QriosityNet", file: "qriosity" },
  { name: "Soneri Bank", file: "soneri" },
  { name: "Central Depository Company", file: "cdc" },
  { name: "FAIR Consulting Group", file: "fair" },
  { name: "Round2", file: "round2" },
  { name: "Stock Stream", file: "stock" },
  { name: "CARE Foundation", file: "care" },
];

export const STEPS = [
  { n: "01", icon: "search", title: "Discover", text: "We learn the business, the audience and what needs to change." },
  { n: "02", icon: "list", title: "Define", text: "We agree on scope, priorities and structure before any visuals." },
  { n: "03", icon: "pen", title: "Design", text: "We design screens people can read, trust and use." },
  { n: "04", icon: "code", title: "Build", text: "We write production code and demo progress every week." },
  { n: "05", icon: "chart", title: "Grow", text: "We measure results after launch and keep improving." },
];

export const PLANS = [
  { icon: "compass", length: "2 weeks", title: "Discovery sprint", text: "We map scope and user flows, build a clickable prototype and give you a fixed quote." },
  { icon: "code", length: "6 to 16 weeks", title: "Product build", text: "We design and build the product from the first screen to launch, with a demo every week." },
  { icon: "rocket", length: "Monthly", title: "Growth partner", text: "A team on call every month for releases, SEO, speed and support." },
];

/** Placeholder quotes: never ship these. Replace with approved client words. */
export const QUOTES = [
  {
    quote: "Venlynk took a messy brief and turned it into a product our customers actually enjoy using. They told us early when something needed to change.",
    name: "Client name",
    role: "Role, Company",
    placeholder: true,
  },
  { quote: "The team felt like part of ours. Weekly demos meant we always knew where things stood.", name: "Client name", role: "Role, Company", placeholder: true },
  { quote: "They still look after our store every month. The small improvements keep adding up.", name: "Client name", role: "Role, Company", placeholder: true },
];

export const VALUES = [
  { icon: "search", title: "We start with the problem", text: "We make sure we understand what is wrong before we design anything." },
  { icon: "chart", title: "We measure what changed", text: "Good work shows up in the numbers after launch, so that is where we look." },
  { icon: "users", title: "One team from brief to release", text: "Designers and developers work side by side, and the same people stay on your project." },
  { icon: "bell", title: "We tell you early", text: "Clear scope, honest timelines and a heads up as soon as something slips." },
];

export const HOME_FAQ = [
  { q: "How long does a project take?", a: "A discovery sprint takes two weeks. A full product build usually takes 6 to 16 weeks, depending on scope." },
  { q: "Who do you work with?", a: "Startups, small businesses and established brands, with clients in the US, UK, UAE, Australia, Germany and Pakistan." },
  { q: "What happens after launch?", a: "We can stay on as your monthly growth partner for releases, SEO, speed and support." },
  { q: "Can you work with our existing team?", a: "Yes. We have worked alongside in-house teams and other agencies, sharing code and design systems." },
  { q: "How much does it cost?", a: "[Your pricing guidance, for example a starting range per engagement.]" },
];

export const CLOSING = {
  lines: ["Let's build", "what's next."],
  text: "Book a 30 minute call to talk through your goals, scope, timing and budget.",
};

export const ABOUT = {
  title: "We design, build\nand *stay after launch.*",
  lead: "Venlynk plans, designs and builds websites, apps, online stores and AI tools for founders and growing teams. The people who start your project see it through to release, then stay on to improve it.",
  story: [
    "Good ideas often get lost between the strategy deck, the design file and the code, when three different teams own three different pieces.",
    "So we keep strategy, design and engineering in one team. The person who asks the first question on the call is still around when the product ships, and when the numbers come in after launch.",
  ],
};

/** Brands from the founder's own career, before and alongside Venlynk. */
export const CAREER_BRANDS: { name: string; file?: string; dark?: boolean }[] = [
  { name: "Toyota", file: "toyota" },
  { name: "Coke Studio", file: "coke" },
  { name: "Jazz", file: "jazz" },
  { name: "UBL UK", file: "ubl" },
  { name: "Jubilee Life Insurance", file: "jubilee" },
  { name: "Faysal Bank" },
  { name: "Soneri Bank", file: "soneri" },
  { name: "Central Depository Company", file: "cdc" },
  { name: "Suncola", file: "suncola" },
  { name: "Suntop", file: "suntop" },
  { name: "Careem", file: "careem" },
  { name: "VistaJet", file: "vistajet" },
  { name: "ByStored" },
  { name: "FAIR Consulting Group", file: "fair" },
  { name: "Binzagr Coro" },
  { name: "Face2Face", file: "face2face" },
  { name: "Dawaai", file: "dawaai", dark: true },
  { name: "Frontline Ticketing", file: "frontline" },
  { name: "Bible Study Fellowship", file: "bsf" },
];

export const CAREER = [
  { when: "Early career", where: "Creative Chaos", what: "Brand websites for Toyota, Coke Studio, Jazz, Jubilee Life and banks." },
  { when: "Product engineering", where: "VentureDive", what: "Front end work for Careem, VistaJet and ByStored." },
  { when: "Consulting", where: "FAIR Consulting Group", what: "WordPress consulting for an Australian firm, remote." },
  { when: "Leading UX", where: "Dawaai.pk", what: "UX and front end lead for Pakistan's online pharmacy." },
  { when: "Senior front end", where: "Global Rescue", what: "Moved 400+ pages to a new CMS and rebuilt the front end." },
  { when: "Today", where: "Venlynk", what: "Leads engineering teams and brings AI into how software gets built." },
];

export const CONTACT = {
  phone: "+92 339 0019727",
  phoneHref: "tel:+923390019727",
  markets: ["United States", "United Kingdom", "UAE", "Australia", "Germany", "Pakistan"],
};
