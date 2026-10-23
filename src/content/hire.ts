/**
 * "Hire developers" pages: for companies that want people working inside their
 * own team rather than a fixed-scope project. No invented team sizes or
 * response-time promises; engagement terms are agreed on the first call.
 */

export type HirePage = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Short name of the skill, e.g. "Flutter developers". */
  skill: string;
  lead: string;
  forWho: string;
  /** What these people do day to day. */
  work: { title: string; body: string }[];
  /** Skills and tools covered. */
  stack: string[];
  /** Ways to hire, written for this skill. */
  models: { title: string; body: string }[];
  /** How engagement starts, written for this skill. */
  start: { title: string; body: string }[];
  /** Real projects that show the skill. */
  proof: string[];
  faq: { q: string; a: string }[];
  /** Live service pages as "category/slug". */
  related: string[];
  closing: string;
  updated: string;
};

const UPDATED = "2026-10-23";

/** Engagement models are the same for every page. */
export const HIRE_MODELS = [
  {
    title: "Dedicated developer",
    body: "One developer working full time in your team, joining your stand-ups, tools and sprints.",
  },
  {
    title: "Part-time or flexible",
    body: "A set number of hours each month, for teams that need steady help without a full-time hire.",
  },
  {
    title: "A small team",
    body: "Developers plus design and QA, run by a lead, for when you need a whole squad rather than one person.",
  },
] as const;


export const HIRE_PAGES: HirePage[] = [
  {
    slug: "flutter-developers",
    metaTitle: "Hire Flutter Developers",
    metaDescription:
      "Hire Flutter developers who ship iOS and Android apps from one codebase. Dedicated, part-time or a small team, working inside your tools and sprints.",
    h1: "Hire Flutter developers",
    skill: "Flutter developers",
    lead:
      "Add Flutter developers to your team who have shipped real iOS and Android apps from one codebase. They work in your tools and sprints, and you can scale up or down as your roadmap changes.",
    forWho:
      "Start-ups and product teams building or maintaining a Flutter app who need more hands than they can hire locally, or need them sooner.",
    work: [
      { title: "New features", body: "Screens and features built from your designs, with tests and clean pull requests." },
      { title: "App store releases", body: "Builds, signing and releases to the App Store and Google Play." },
      { title: "Performance and stability", body: "Crash fixes, slow screens and memory problems found and fixed." },
      { title: "Back-end connections", body: "APIs, Firebase or Supabase, payments and push notifications wired up." },
    ],
    stack: ["Flutter", "Dart", "Firebase", "Supabase", "REST and GraphQL APIs", "App Store and Google Play"],
    models: [
      { title: "One Flutter developer, full time", body: "Joins your stand-ups and sprints and owns features end to end in your app." },
      { title: "Flutter hours each month", body: "A block of hours for releases, fixes and smaller features when you do not need someone every day." },
      { title: "A Flutter squad", body: "Flutter developers with a designer and a tester, led by a senior engineer, for a new app or a big rebuild." },
    ],
    start: [
      { title: "Tell us about the app", body: "Your app, its state management, back end and the next few months of roadmap." },
      { title: "Meet the developer", body: "You talk to the Flutter developer we propose and walk them through your codebase." },
      { title: "First tickets", body: "They pick up real tickets from your backlog in the first week, so you see their work early." },
      { title: "Settle in", body: "Releases, code review and planning run through your tools, with a check-in from us every week." },
    ],
    proof: ["tilawat", "ice", "stock-stream"],
    faq: [
      { q: "Do the developers work in our time zone?", a: "We are in Pakistan and agree overlap hours with you. That is easy for the Gulf, Europe and the UK, and planned around a daily handover for North America." },
      { q: "Can we meet the developer first?", a: "Yes. You meet the people we propose before work starts." },
      { q: "Who owns the code?", a: "You do. Everything is written in your repositories under your accounts." },
      { q: "Can we scale the team up or down?", a: "Yes. Terms are agreed on the first call, including notice for changes." },
    ],
    related: ["mobile-apps/flutter-app-development", "mobile-apps/ios-android-app-development", "mobile-apps/app-maintenance"],
    closing: "Need Flutter developers on your team?",
    updated: UPDATED,
  },
  {
    slug: "react-native-developers",
    metaTitle: "Hire React Native Developers",
    metaDescription:
      "Hire React Native developers for iOS and Android apps, comfortable with TypeScript, Expo and your existing React code. Dedicated or part-time.",
    h1: "Hire React Native developers",
    skill: "React Native developers",
    lead:
      "Add React Native developers who write clean TypeScript, know Expo and native modules, and can share code and ideas with your web team.",
    forWho:
      "Teams with a React Native app or a React web product who want mobile developers that fit straight into their codebase and way of working.",
    work: [
      { title: "Features from your backlog", body: "Screens and features built, reviewed and released through your process." },
      { title: "Expo and native modules", body: "Expo upgrades, native modules and device features handled." },
      { title: "Shared code with web", body: "Logic and types shared with your React or Next.js web app where it makes sense." },
      { title: "Releases and monitoring", body: "Store releases, over-the-air updates and crash monitoring." },
    ],
    stack: ["React Native", "TypeScript", "Expo", "React", "Firebase", "App Store and Google Play"],
    models: [
      { title: "One React Native developer, full time", body: "A developer dedicated to your mobile app, working in your repo and sprint rhythm." },
      { title: "Shared web and mobile help", body: "Hours split between your React Native app and your React web product where the code overlaps." },
      { title: "A mobile squad", body: "React Native developers plus design and QA, led by a senior engineer, for larger mobile roadmaps." },
    ],
    start: [
      { title: "Share your setup", body: "Expo or bare React Native, your libraries, CI and how releases work today." },
      { title: "Meet the developer", body: "A call with the developer we propose, including a look through your codebase together." },
      { title: "Pick up the backlog", body: "Early tickets chosen to touch the main parts of the app, so ramp-up is quick." },
      { title: "Ship together", body: "Over-the-air updates and store releases run through your process from then on." },
    ],
    proof: ["frontline-ticketing", "stock-stream"],
    faq: [
      { q: "Can they work with our existing code?", a: "Yes. They start by reading your codebase and conventions, and follow them." },
      { q: "Do you use Expo?", a: "Yes, when it fits. We also work with bare React Native projects and custom native modules." },
      { q: "How do we manage them?", a: "Like your own developers: your tickets, your stand-ups, your code review. We check in weekly too." },
      { q: "Who owns the code?", a: "You do, in your repositories." },
    ],
    related: ["mobile-apps/react-native-app-development", "mobile-apps/ios-android-app-development", "web-apps/custom-web-app-development"],
    closing: "Need React Native developers on your team?",
    updated: UPDATED,
  },
  {
    slug: "shopify-developers",
    metaTitle: "Hire Shopify Developers",
    metaDescription:
      "Hire Shopify developers for theme work, custom sections, apps, speed and integrations. Ongoing help for brands and white-label support for agencies.",
    h1: "Hire Shopify developers",
    skill: "Shopify developers",
    lead:
      "Get Shopify developers on call for theme changes, custom sections, app integrations, speed and launches, for your own brand or white-label behind your agency.",
    forWho:
      "Shopify brands with a steady list of store changes, and agencies that need reliable Shopify development behind their own name.",
    work: [
      { title: "Theme work", body: "Custom sections, templates and changes built in Liquid on Online Store 2.0 themes." },
      { title: "Campaigns and launches", body: "Landing pages, bundles, sales and new collections ready on time." },
      { title: "Apps and integrations", body: "Apps set up, connected and cleaned up, with your ERP, email or courier." },
      { title: "Speed and fixes", body: "Slow pages, broken features and theme debt sorted out." },
    ],
    stack: ["Shopify", "Liquid", "Online Store 2.0", "JavaScript", "Shopify APIs", "Klaviyo"],
    models: [
      { title: "A dedicated Shopify developer", body: "For brands and agencies with enough store work to keep someone busy every day." },
      { title: "A monthly block of hours", body: "The most common setup: a fixed number of hours each month for changes, campaigns and fixes." },
      { title: "Shopify plus design", body: "A developer and a designer together, for new sections, landing pages and theme refreshes." },
    ],
    start: [
      { title: "Collaborator access", body: "You add us as a collaborator on the store, so you keep full control of the account." },
      { title: "Theme and app review", body: "We review your theme and apps first, and flag anything that will slow work down." },
      { title: "Your task list", body: "Requests go into a shared board, sized and prioritised with you." },
      { title: "Safe releases", body: "Changes built on an unpublished theme copy and published only after your approval." },
    ],
    proof: ["stylefits", "replay", "the-heavenly-scents"],
    faq: [
      { q: "Do you work white-label for agencies?", a: "Yes. We work under your agency's name and never contact your clients unless you want us to." },
      { q: "Can we use hours flexibly each month?", a: "Yes. A monthly block of hours suits most brands with ongoing store work." },
      { q: "Do you work on Shopify Plus?", a: "Yes, including checkout extensions and multi-market setups." },
      { q: "Will you work on our existing theme?", a: "Yes. We review it first and work within it, or advise if it is holding you back." },
    ],
    related: ["shopify/shopify-development", "shopify/shopify-maintenance", "shopify/shopify-theme-development"],
    closing: "Need Shopify developers on call?",
    updated: UPDATED,
  },
  {
    slug: "react-nextjs-developers",
    metaTitle: "Hire React and Next.js Developers",
    metaDescription:
      "Hire React and Next.js developers for web apps, SaaS and fast marketing sites. TypeScript, modern tooling, and your code review and sprints.",
    h1: "Hire React and Next.js developers",
    skill: "React and Next.js developers",
    lead:
      "Add React and Next.js developers who build fast, accessible interfaces in TypeScript, from SaaS dashboards to marketing sites, and fit into your existing code review and release process.",
    forWho:
      "SaaS and product teams with more frontend work than people, and companies moving a website or app to Next.js.",
    work: [
      { title: "Product features", body: "Frontend features built from your designs, with tests and clean components." },
      { title: "Design systems", body: "Component libraries built or extended so the product stays consistent." },
      { title: "Performance and SEO", body: "Server rendering, caching and Core Web Vitals improved on public pages." },
      { title: "Migrations", body: "Older React or other frameworks moved to Next.js step by step." },
    ],
    stack: ["React", "Next.js", "TypeScript", "Node.js", "Supabase", "PostgreSQL", "Vercel"],
    models: [
      { title: "A dedicated frontend developer", body: "One React and Next.js developer working full time on your product's interface." },
      { title: "Frontend plus API", body: "A developer comfortable across Next.js and Node.js, for features that touch both sides." },
      { title: "A web product squad", body: "Frontend and back-end developers with design and QA, led by a senior engineer." },
    ],
    start: [
      { title: "Walk us through the stack", body: "Your framework versions, component library, data fetching and deployment setup." },
      { title: "Meet the developer", body: "You meet the developer we propose and agree how code review will work." },
      { title: "First pull requests", body: "Small, well-scoped tickets first, so both sides can check quality and conventions early." },
      { title: "Full speed", body: "Larger features follow once the developer knows your codebase, with weekly check-ins from us." },
    ],
    proof: ["dawaai", "frontline-ticketing"],
    faq: [
      { q: "Do they also do back end work?", a: "Yes. Most are comfortable with Node.js APIs and databases, and we can add back-end specialists." },
      { q: "Can they follow our design system?", a: "Yes, or help you build one if you do not have it yet." },
      { q: "How do you keep quality high?", a: "Your code review plus ours: a lead reviews work before it reaches you." },
      { q: "Who owns the code?", a: "You do, in your repositories under your accounts." },
    ],
    related: ["websites/nextjs-development", "web-apps/saas-development", "web-apps/custom-web-app-development"],
    closing: "Need React and Next.js developers on your team?",
    updated: UPDATED,
  },
  {
    slug: "dedicated-team",
    metaTitle: "Hire a Dedicated Development Team",
    metaDescription:
      "A dedicated product team of developers, a designer and QA, led by a senior engineer, working inside your company. Web, mobile, Shopify and AI.",
    h1: "Hire a dedicated development team",
    skill: "a dedicated team",
    lead:
      "Get a small, dedicated product team, developers, a designer and QA, led by a senior engineer, working on your roadmap as if they sat in your office.",
    forWho:
      "Companies that need to build and run a product for months or years, and would rather not hire and manage a whole team locally.",
    work: [
      { title: "Your roadmap, delivered", body: "Planning, design, development, testing and releases on your product, sprint after sprint." },
      { title: "One lead to talk to", body: "A senior engineer who owns delivery and keeps you informed every week." },
      { title: "The right mix of skills", body: "Web, mobile, Shopify or AI skills added as your roadmap needs them." },
      { title: "Documentation and handover", body: "Decisions and code documented, so knowledge stays with your company." },
    ],
    stack: ["Next.js", "React", "Flutter", "React Native", "Shopify", "Node.js", "PostgreSQL", "Figma"],
    models: [
      { title: "A core team", body: "Two or three developers and a lead, for a product with a steady roadmap." },
      { title: "A full product squad", body: "Developers, a designer and QA with a lead, for building a product from first version to scale." },
      { title: "A flexible team", body: "Team size agreed month by month as your roadmap grows or settles." },
    ],
    start: [
      { title: "Roadmap session", body: "We go through your product, goals and the next three to six months with your leadership." },
      { title: "Shape the team", body: "We propose the mix of skills and the lead, and you meet them." },
      { title: "First sprint", body: "Ways of working agreed and the first sprint planned together." },
      { title: "Steady delivery", body: "Regular releases, weekly updates from the lead and a monthly review of how things are going." },
    ],
    proof: ["servicemarket", "ice", "frontline-ticketing"],
    faq: [
      { q: "How is this different from a project?", a: "A project has a fixed scope and end date. A dedicated team works on your changing roadmap for as long as you need it." },
      { q: "Can the team grow or shrink?", a: "Yes, with notice agreed up front." },
      { q: "Who manages the team day to day?", a: "Our lead manages delivery; you set priorities. You can be as involved as you like." },
      { q: "Can we hire the team members later?", a: "Talk to us. We can agree terms for that at the start." },
    ],
    related: ["web-apps/custom-web-app-development", "mobile-apps/ios-android-app-development", "growth/growth-support"],
    closing: "Want a team that feels like your own?",
    updated: UPDATED,
  },
];

export const getHirePage = (slug: string) => HIRE_PAGES.find((h) => h.slug === slug);
