import type { Practice, PracticeSlug, Service, ServiceSlug } from "@/content/types";

/** Three practices, eleven services. Copy follows the company profile deck. */
export const PRACTICES: Practice[] = [
  { slug: "products", n: "01", title: "Digital products", sub: "Design and build the product.", tone: "lav" },
  { slug: "commerce", n: "02", title: "Commerce and platforms", sub: "Sell online and run operations.", tone: "paper" },
  { slug: "growth", n: "03", title: "AI, automation and growth", sub: "Work smarter and keep improving.", tone: "blue" },
];

const photo = (k: string) => `/images/services/${k}.webp`;

export const SERVICES: Service[] = [
  {
    slug: "product-design",
    n: "01",
    practice: "products",
    title: "Product and UX design",
    short: "Research, flows and UI",
    question: "Do people get stuck in your product?",
    intro:
      "We talk to your users, map the journeys that matter and design screens that make sense the first time. You see a clickable prototype before anything gets built.",
    image: photo("ux"),
    imageAlt: "A hand sketching wireframes on a tablet",
    tools: ["Figma", "FigJam", "Maze", "Hotjar"],
    deliverables: [
      { title: "User research", body: "Interviews, analytics and a walk through what exists today, so we fix the real problem." },
      { title: "Journeys and flows", body: "The few paths that matter most, mapped step by step before any visuals." },
      { title: "Clickable prototype", body: "A prototype you can test with real people and share with your team." },
      { title: "Design system", body: "Reusable components and rules so the product stays consistent as it grows." },
    ],
    steps: [
      { title: "Find where people get stuck", body: "We look at your data and talk to users to see where they hesitate or give up." },
      { title: "Design and test", body: "We design the key screens and test a prototype before a line of production code." },
      { title: "Hand over cleanly", body: "Developers get a tidy file, a design system and answers whenever they need them." },
    ],
    faq: [
      { q: "Do we need research if we already know our users?", a: "A short round still helps. It usually confirms most of what you know and catches the one thing you did not." },
      { q: "Can you work with our developers?", a: "Yes. We hand over in Figma with specs and stay available while your team builds, or our engineers can build it." },
      { q: "What do we get at the end?", a: "A tested prototype, final screens and a design system your team can keep using." },
    ],
    closing: "Want a product people get the first time?",
  },
  {
    slug: "web",
    n: "02",
    practice: "products",
    title: "Websites and web apps",
    short: "Next.js, React, WordPress",
    question: "Is your website slow or hard to update?",
    intro:
      "We build fast websites and web apps in Next.js, WordPress and Laravel, set up so your team can change content without waiting on a developer.",
    image: photo("web"),
    imageAlt: "Code on a laptop screen",
    tools: ["Next.js", "React", "TypeScript", "WordPress", "Laravel", "Supabase"],
    deliverables: [
      { title: "Marketing websites", body: "Fast pages that explain what you do and turn visits into enquiries." },
      { title: "Web apps", body: "Portals, dashboards and booking flows built on a solid, tested codebase." },
      { title: "Content you control", body: "A CMS your team can use for pages, posts and updates without a developer." },
      { title: "Migrations", body: "Moving from an old platform without losing pages, search traffic or data." },
    ],
    steps: [
      { title: "Plan the structure", body: "Sitemap, content and the key user flows agreed before design starts." },
      { title: "Build with weekly demos", body: "You see working pages every week and can steer as we go." },
      { title: "Launch and look after it", body: "We check speed, search basics and analytics, then stay on if you need us." },
    ],
    faq: [
      { q: "Next.js or WordPress?", a: "WordPress suits content heavy sites your team edits often. Next.js suits products and sites that need speed and custom features. We recommend one after the first call." },
      { q: "Can you take over an existing site?", a: "Yes. We start with a short audit of the code, design and analytics, then suggest whether to improve or rebuild." },
      { q: "Will we own the code?", a: "Yes. You own the code, the designs and every account." },
    ],
    closing: "Need a website your team can actually update?",
  },
  {
    slug: "mobile",
    n: "03",
    practice: "products",
    title: "Mobile apps",
    short: "Flutter and React Native",
    question: "Need one app that works on iOS and Android?",
    intro:
      "We design and build apps in Flutter and React Native from one codebase, then look after store releases and updates.",
    image: photo("mobile"),
    imageAlt: "Hands using an app on a phone",
    tools: ["Flutter", "React Native", "Firebase", "Expo"],
    deliverables: [
      { title: "App design", body: "Screens and flows designed for thumbs, small screens and patchy connections." },
      { title: "One codebase", body: "A single Flutter or React Native app for iOS and Android." },
      { title: "Back end and APIs", body: "Accounts, payments, notifications and the data behind the app." },
      { title: "Store releases", body: "App Store and Google Play submissions, reviews and updates handled for you." },
    ],
    steps: [
      { title: "Shape the first version", body: "We agree the smallest version worth launching and design it." },
      { title: "Build and test on real devices", body: "Weekly builds you can install and try on your own phone." },
      { title: "Launch and update", body: "We ship to both stores and keep releasing improvements." },
    ],
    faq: [
      { q: "Flutter or React Native?", a: "Both work well. We pick based on your team, your existing code and the features you need." },
      { q: "Can you add an app to our existing website?", a: "Yes. The app can share accounts and data with your site through the same back end." },
      { q: "Who handles the app store review?", a: "We do, including the listing, screenshots and any changes Apple or Google ask for." },
    ],
    closing: "Got an app idea for iOS and Android?",
  },
  {
    slug: "online-stores",
    n: "04",
    practice: "commerce",
    title: "Online stores",
    short: "Shopify and WooCommerce",
    question: "Are shoppers leaving before they pay?",
    intro:
      "We build Shopify and custom stores, tidy up product pages and checkout, and connect payments, stock and delivery.",
    image: photo("commerce"),
    imageAlt: "Paying online with a card on a laptop",
    tools: ["Shopify", "WooCommerce", "Stripe", "Klaviyo"],
    deliverables: [
      { title: "Store design and build", body: "A store that looks like your brand and is easy to browse on a phone." },
      { title: "Product pages", body: "Clear photos, sizes, prices and answers to the questions that stop a sale." },
      { title: "Checkout and payments", body: "Fewer steps to pay, with the payment methods your customers use." },
      { title: "Operations", body: "Stock, delivery and email connected so orders flow without manual work." },
    ],
    steps: [
      { title: "Look at where shoppers drop off", body: "We check your data to find the pages and steps that lose sales." },
      { title: "Design and build the store", body: "Collections, product pages and checkout built around how people shop." },
      { title: "Launch and improve", body: "We track sales after launch and keep tuning what matters." },
    ],
    faq: [
      { q: "Shopify or a custom store?", a: "Shopify suits most brands. A custom store makes sense when you need features Shopify cannot do well." },
      { q: "Can you move our existing store?", a: "Yes. We move products, customers and orders, and set up redirects so search traffic is not lost." },
      { q: "Do you manage the store after launch?", a: "We can, as part of a monthly growth plan." },
    ],
    closing: "Want more shoppers to reach the thank you page?",
  },
  {
    slug: "etsy",
    n: "05",
    practice: "commerce",
    title: "Etsy store setup",
    short: "From research to launch",
    question: "Want to sell on Etsy but not sure where to start?",
    intro:
      "We research what buyers search for, set up your shop, write listings built to be found and support you through launch.",
    image: photo("etsy"),
    imageAlt: "Handmade ceramic vases",
    tools: ["Etsy", "Canva", "Google Sheets"],
    deliverables: [
      { title: "Product research", body: "What buyers search for, what sells in your niche and how to price it." },
      { title: "Shop setup", body: "Branding, policies, shipping and payments set up properly from day one." },
      { title: "Listings built to be found", body: "Titles, tags, photos and descriptions written around real searches." },
      { title: "Launch support", body: "Help through the first weeks while the shop finds its feet." },
    ],
    steps: [
      { title: "Research the market", body: "We look at competitors and search terms before you list anything." },
      { title: "Set up and list", body: "We build the shop and write the first set of listings with you." },
      { title: "Launch and learn", body: "We watch views and sales, then adjust listings that are not working." },
    ],
    faq: [
      { q: "Do I need products ready before we start?", a: "It helps to have them, but research can start while you finish your range." },
      { q: "Can you run the shop for me?", a: "We can support you monthly with listings, updates and reports." },
      { q: "How long until the first sale?", a: "It depends on the product and the market. We set honest expectations after the research." },
    ],
    closing: "Ready to open your Etsy shop?",
  },
  {
    slug: "odoo",
    n: "06",
    practice: "commerce",
    title: "Odoo implementation",
    short: "With our Odoo partners",
    question: "Running the business on spreadsheets and five different apps?",
    intro:
      "Together with our Odoo technology partners, we map how you work, set up the modules you need, move your data across and train your team.",
    image: photo("odoo"),
    imageAlt: "A hand at a point of sale terminal",
    tools: ["Odoo", "PostgreSQL", "Python"],
    deliverables: [
      { title: "Process mapping", body: "How work moves through your business today, and what Odoo should change." },
      { title: "Module setup", body: "Sales, inventory, accounting, point of sale and more, configured to fit." },
      { title: "Data migration", body: "Customers, products and history moved across from your old tools." },
      { title: "Training", body: "Your team learns the system on their own data before go live." },
    ],
    steps: [
      { title: "Map how you work", body: "We sit with each team and agree what the system needs to do." },
      { title: "Set up and migrate", body: "Modules configured, data moved and everything tested together." },
      { title: "Go live and support", body: "We train your team, launch and stay close for the first weeks." },
    ],
    faq: [
      { q: "Who are your Odoo partners?", a: "We work with certified Odoo technology partners for licensing and deep customisation. We introduce them on the first call." },
      { q: "Can Odoo connect to our online store?", a: "Yes. Orders, stock and customers can sync between Odoo and your store." },
      { q: "How long does it take?", a: "It depends on how many modules you need. We give you a plan with dates after mapping." },
    ],
    closing: "Want one system for the whole business?",
  },
  {
    slug: "ai",
    n: "07",
    practice: "growth",
    title: "AI and automation",
    short: "Assistants, agents and workflows",
    question: "Is your team doing the same task by hand every day?",
    intro:
      "We build AI assistants and automations that work inside the tools you already use, with a person checking the output wherever it matters.",
    image: photo("ai"),
    imageAlt: "A laptop glowing in the dark",
    tools: ["OpenAI", "Claude", "n8n", "Python", "Supabase"],
    deliverables: [
      { title: "AI assistants", body: "Answer questions from your own documents, tickets or product data." },
      { title: "AI agents", body: "Draft replies, fill forms and update records, with a person approving the steps that matter." },
      { title: "Workflow automation", body: "Move data between your apps so nobody copies and pastes it by hand." },
      { title: "Integrations", body: "Connect AI to your CRM, help desk, store or internal tools." },
    ],
    steps: [
      { title: "Find the task", body: "We sit with your team and pick the repeat work worth automating first." },
      { title: "Build it with a person in the loop", body: "A working version inside your tools, with review steps where mistakes would cost you." },
      { title: "Measure and improve", body: "We track the time it saves and keep tuning it every month." },
    ],
    faq: [
      { q: "Will AI replace my team?", a: "No. We automate the repeat steps and keep a person reviewing the output where it matters." },
      { q: "Which AI models do you use?", a: "We pick the model that fits the task, its cost and your data rules." },
      { q: "Is my data safe?", a: "[Your data handling policy in two sentences.]" },
    ],
    closing: "Got a task your team repeats every day?",
  },
  {
    slug: "seo",
    n: "08",
    practice: "growth",
    title: "Search engine optimisation",
    short: "Technical SEO and content",
    question: "Customers are searching. Do they find you?",
    intro:
      "We fix the technical basics, write pages around what people really search for and earn links that matter. No ranking promises, just steady work you can measure.",
    image: photo("seo"),
    imageAlt: "A laptop showing search performance data",
    tools: ["Google Search Console", "Google Analytics", "Ahrefs", "Semrush"],
    deliverables: [
      { title: "Technical audit", body: "Speed, indexing, structure and errors that hold your pages back." },
      { title: "Keyword research", body: "The searches your customers actually make, grouped into pages worth building." },
      { title: "Content", body: "Pages and articles written to answer those searches clearly." },
      { title: "Monthly reporting", body: "Plain reports on traffic, rankings and enquiries, and what we do next." },
    ],
    steps: [
      { title: "Fix the foundations", body: "We clear the technical issues first so good content can rank." },
      { title: "Build the right pages", body: "We plan and write pages around real searches, one priority at a time." },
      { title: "Measure and repeat", body: "Every month we report what changed and pick the next priority." },
    ],
    faq: [
      { q: "Can you guarantee first place on Google?", a: "No one honestly can. We promise steady work and clear reporting on what it achieves." },
      { q: "How long before we see results?", a: "Technical fixes can help quickly. Content usually takes a few months to build up." },
      { q: "Do you write the content?", a: "Yes, or we brief your team and edit what they write." },
    ],
    closing: "Want the right customers to find you?",
  },
  {
    slug: "aeo",
    n: "09",
    practice: "growth",
    title: "Answer engine optimisation",
    short: "Visibility in AI assistants",
    question: "Does ChatGPT mention you when customers ask?",
    intro:
      "More people ask AI assistants instead of searching. We shape your content, schema and mentions so these tools have clear, trusted information about you.",
    image: photo("aeo"),
    imageAlt: "A phone showing an AI assistant on a laptop",
    tools: ["ChatGPT", "Perplexity", "Gemini", "Schema.org"],
    deliverables: [
      { title: "AI visibility check", body: "What ChatGPT, Gemini and Perplexity say about you and your competitors today." },
      { title: "Answer ready content", body: "Clear pages that answer the questions customers ask these tools." },
      { title: "Structured data", body: "Schema that tells machines exactly who you are and what you offer." },
      { title: "Trusted mentions", body: "Listings and references on the sites AI tools rely on." },
    ],
    steps: [
      { title: "See what AI says now", body: "We test the questions your customers ask and record the answers." },
      { title: "Fix your information", body: "Content, schema and profiles updated so the facts are clear and consistent." },
      { title: "Track over time", body: "We re-test every month and report what changed." },
    ],
    faq: [
      { q: "Is this different from SEO?", a: "It builds on SEO, with more focus on clear answers, structured data and being mentioned by trusted sources." },
      { q: "Can you make ChatGPT recommend us?", a: "No one controls that. We make sure the information these tools find about you is clear, correct and easy to trust." },
      { q: "Do we need SEO first?", a: "Good SEO helps, and we often do both together." },
    ],
    closing: "Want AI assistants to know who you are?",
  },
  {
    slug: "aso",
    n: "10",
    practice: "growth",
    title: "App store optimisation",
    short: "Listings that get found",
    question: "Great app, but nobody finds it?",
    intro:
      "We tune your title, keywords, screenshots and reviews on the App Store and Google Play so the right people find your app.",
    image: photo("aso"),
    imageAlt: "A phone on a wooden desk",
    tools: ["App Store", "Google Play", "Firebase"],
    deliverables: [
      { title: "Keyword research", body: "The words people use to look for apps like yours." },
      { title: "Listing copy", body: "Titles, subtitles and descriptions written to be found and to convert." },
      { title: "Screenshots", body: "Store graphics that show the value of the app in a few seconds." },
      { title: "Ratings and reviews", body: "A plan to ask happy users for reviews and to answer the unhappy ones." },
    ],
    steps: [
      { title: "Audit the listing", body: "We compare your listing with the apps people pick instead." },
      { title: "Rewrite and redesign", body: "New copy and screenshots, tested where the stores allow it." },
      { title: "Track installs", body: "We watch search rankings and installs and keep adjusting." },
    ],
    faq: [
      { q: "Do you need access to our store accounts?", a: "Yes, a team role on App Store Connect and Google Play Console is enough." },
      { q: "Can you design the screenshots?", a: "Yes. Store graphics are part of the work." },
      { q: "Does this work for new apps?", a: "Yes. A strong listing at launch helps the app get found from the first day." },
    ],
    closing: "Want more people to find your app?",
  },
  {
    slug: "growth",
    n: "11",
    practice: "growth",
    title: "Growth and support",
    short: "Speed, analytics, releases",
    question: "Launched, and then nothing changed?",
    intro:
      "We stay on after launch with analytics, speed work, A/B tests and monthly releases, so the product keeps improving.",
    image: photo("growth"),
    imageAlt: "A laptop showing an analytics dashboard",
    tools: ["Google Analytics", "Hotjar", "Vercel", "Sentry"],
    deliverables: [
      { title: "Analytics", body: "Tracking set up so you know what people do and where they leave." },
      { title: "Speed work", body: "Faster pages and apps, measured with Core Web Vitals." },
      { title: "A/B tests", body: "Changes tested against the current version before they go live for everyone." },
      { title: "Monthly releases", body: "Fixes and improvements shipped on a steady rhythm." },
    ],
    steps: [
      { title: "Agree the goals", body: "We pick the numbers that matter for your business this quarter." },
      { title: "Ship every month", body: "A shared board, regular releases and a short report on what changed." },
      { title: "Review and plan", body: "Every quarter we look back at the results and plan the next one." },
    ],
    faq: [
      { q: "Do we need to have built the product with you?", a: "No. We often take over products built by other teams after a short audit." },
      { q: "How does the monthly plan work?", a: "A set amount of time each month, a shared board and a monthly report. You can pause or change it." },
      { q: "What do you need from us?", a: "Access to the code, analytics and someone who can make decisions." },
    ],
    closing: "Want your product to keep getting better?",
  },
];

export function getService(slug: string) {
  return SERVICES.find((s) => s.slug === slug);
}

export function serviceTitle(slug: ServiceSlug) {
  return getService(slug)?.title ?? slug;
}

export function servicesIn(practice: PracticeSlug) {
  return SERVICES.filter((s) => s.practice === practice);
}

export function getPractice(slug: PracticeSlug) {
  return PRACTICES.find((p) => p.slug === slug)!;
}
