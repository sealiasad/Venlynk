import type { ServicePage } from "@/content/service-pages";

/** Wave 2: websites, web apps and mobile apps. Same writing rules as service-pages.ts. */

const photo = (k: string) => `/images/services/${k}.webp`;
const UPDATED = "2026-10-21";

export const BUILD_PAGES: ServicePage[] = [
  /* ============================ WEBSITES ============================ */
  {
    category: "websites",
    slug: "landing-page-development",
    metaTitle: "Landing Page Design and Development",
    metaDescription:
      "Landing pages built for one goal: sign-ups, bookings or enquiries from your ads and campaigns. Fast, tracked and easy to test.",
    h1: "Landing page development",
    lead:
      "We design and build landing pages with one job: turning visitors from an ad, an email or a launch into sign-ups, bookings or enquiries. Each page is fast, tracked from day one and easy to test against a second version.",
    forWho:
      "Businesses running Google, Meta or LinkedIn ads, launching a product or offer, or testing an idea before building a full site.",
    problems: [
      "Your ads get clicks, but people land on the home page and wander off.",
      "You pay for traffic and cannot tell which campaign brought the enquiries.",
      "Every new campaign needs a developer to make a page.",
      "Your current page takes too long to load on a phone, so people leave before it appears.",
    ],
    deliverables: [
      { title: "One clear message", body: "A headline and opening that match the ad people clicked, so they know they are in the right place." },
      { title: "A page built to convert", body: "Benefits, proof, answers to doubts and one call to action repeated where it makes sense, nothing that distracts." },
      { title: "Forms that get filled", body: "As few fields as the lead really needs, plus WhatsApp or call buttons for people who prefer to talk." },
      { title: "Tracking per campaign", body: "Google Analytics, Meta Pixel and LinkedIn Insight events, so every enquiry is tied to the campaign that brought it." },
      { title: "Reusable sections", body: "A set of sections your team can rearrange for the next campaign without starting again." },
      { title: "A second version to test", body: "Where traffic allows, a variant with a different headline or offer, so you learn what works." },
    ],
    steps: [
      { title: "Agree the goal", body: "One action you want visitors to take, who they are and where they come from." },
      { title: "Write and design", body: "We write the page first, then design it for phones first, then desktop." },
      { title: "Build and connect", body: "Build, connect the form to your inbox or CRM and set up conversion tracking." },
      { title: "Launch and compare", body: "Go live with your campaign, then review the numbers after the first weeks and improve." },
    ],
    timing:
      "A single landing page is usually ready within one to two weeks, depending on how quickly the offer and wording are agreed.",
    price: {
      headline: "Every landing page gets a fixed quote after a short call.",
      factors: [
        "Whether we write the copy or edit yours",
        "Number of sections and variants",
        "Integrations with your CRM, booking or payment tool",
        "Ongoing testing after launch",
      ],
    },
    proof: {
      project: "techoutsource",
      story:
        "TechOutsource is an Australian software house. Its site had to explain the services, show the stack and pricing, and get visitors to book a call. We designed and built it so every section leads to the booking step.",
    },
    notFit: [
      "If people need to compare many services or read a lot before deciding, a full website will serve them better than a single page.",
      "If you have no traffic source yet, a landing page alone will not bring visitors. Pair it with ads, email or SEO.",
    ],
    faq: [
      { q: "How is a landing page different from a home page?", a: "A home page serves everyone and links everywhere. A landing page serves one audience and asks for one action, which is why it usually converts better for campaigns." },
      { q: "Can it sit on our existing domain?", a: "Yes, on a page like yourdomain.com/offer or a subdomain, whichever suits your setup." },
      { q: "Can my team make new versions later?", a: "Yes. We build it from sections your team can copy and edit for the next campaign." },
      { q: "Will you set up the ad tracking?", a: "Yes. We set up the Google, Meta and LinkedIn conversion events and test them before launch." },
      { q: "Do you run the ads too?", a: "We focus on the page and the tracking. If you need ad management, we can work alongside your ads team." },
    ],
    related: ["websites/custom-website-development", "design/website-design", "growth/seo"],
    tools: ["Next.js", "WordPress", "Google Analytics", "Meta Pixel", "Figma"],
    image: photo("web"),
    imageAlt: "Code on a laptop screen",
    closing: "Got a campaign that needs a page that converts?",
    updated: UPDATED,
  },
  {
    category: "websites",
    slug: "website-redesign",
    metaTitle: "Website Redesign Without Losing Your Google Traffic",
    metaDescription:
      "Redesign an old or underperforming website with a planned move that keeps your search traffic, your content and your enquiries flowing.",
    h1: "Website redesign",
    lead:
      "We redesign websites that look dated, load slowly or stopped bringing in enquiries, and we plan the move so you keep the Google traffic you already have. Every old page gets a new home or a redirect before launch.",
    forWho:
      "Businesses with a site that is several years old, hard to update, or no longer matches what the business does today.",
    problems: [
      "The site looks older than your business really is.",
      "You are afraid a new site will wipe out your Google rankings.",
      "Content has piled up for years and nobody knows which pages still matter.",
      "The team avoids updating the site because the editor is painful.",
    ],
    deliverables: [
      { title: "An audit of what you have", body: "Which pages bring traffic and enquiries, which links point to you, and what can be merged or retired." },
      { title: "A new structure", body: "A simpler page plan, built around what visitors look for and what the business sells today." },
      { title: "A fresh design", body: "Desktop and mobile designs you can click through, using your brand, or a refreshed one if you need it." },
      { title: "Content moved and improved", body: "Your best content carried over and rewritten where it helps, nothing important left behind." },
      { title: "A redirect map", body: "Every old address mapped to its best new page with permanent redirects, tested before and after launch." },
      { title: "A watched launch", body: "We monitor Search Console and analytics after launch and fix anything that slips." },
    ],
    steps: [
      { title: "Audit", body: "Analytics, Search Console and a full crawl of the current site, so decisions are based on data." },
      { title: "Plan and design", body: "New structure and designs, agreed page by page with the redirect plan alongside." },
      { title: "Build and move content", body: "Weekly previews while we build and move content." },
      { title: "Launch and monitor", body: "Redirects go live with the new site, and we watch rankings and errors for the following weeks." },
    ],
    timing:
      "Most redesigns take 4 to 8 weeks. Sites with hundreds of pages take longer, mainly because of content and redirects.",
    price: {
      headline: "Every redesign gets a fixed quote after the audit call.",
      factors: [
        "How many pages and how much content needs moving",
        "Whether the brand also needs a refresh",
        "Moving to a new platform, such as from Wix to WordPress or Next.js",
        "Custom features carried over from the old site",
      ],
    },
    proof: {
      project: "care-foundation",
      story:
        "CARE Foundation runs schools for children who would otherwise miss out. We redesigned the website and rebuilt it on WordPress, with donation, scholarship and sponsor pages, so their own team can keep it up to date.",
    },
    alsoProjects: ["insaf-academy"],
    notFit: [
      "If only a few pages feel off, targeted improvements to those pages cost less than a full redesign.",
      "If the real problem is that nobody finds the site, start with SEO before redesigning.",
    ],
    faq: [
      { q: "Will we lose our Google rankings?", a: "A planned redesign keeps them. Losses usually come from missing redirects or deleted content, which is exactly what the redirect map prevents." },
      { q: "Can we keep our current platform?", a: "Yes. We can redesign on the platform you have, or recommend a move if the platform is the problem." },
      { q: "Can you redesign in stages?", a: "Yes. Some clients start with the home page and key service pages, then move the rest." },
      { q: "Do we have to rewrite everything?", a: "No. We keep what works, rewrite what does not, and merge pages that repeat each other." },
      { q: "Who owns the new site?", a: "You do: code, designs, domain and every account." },
    ],
    related: ["websites/custom-website-development", "design/website-design", "growth/seo"],
    tools: ["Figma", "WordPress", "Next.js", "Google Search Console", "Screaming Frog"],
    image: photo("ux"),
    imageAlt: "A hand sketching wireframes on a tablet",
    closing: "Ready for a site that looks like your business today?",
    updated: UPDATED,
  },
  {
    category: "websites",
    slug: "nextjs-development",
    metaTitle: "Next.js Development for Fast Websites and Web Apps",
    metaDescription:
      "Next.js websites and web apps that load fast, rank well and connect to your data, with a content editor your team can use.",
    h1: "Next.js development",
    lead:
      "We build websites and web apps in Next.js, the React framework behind many of the fastest sites on the web. You get pages that load quickly on phones, rank well in search and connect cleanly to your app, store or database.",
    forWho:
      "Businesses that need top speed, custom features, or one codebase for a marketing site and a logged-in product.",
    problems: [
      "Your current site is slow, and page builders and plugins keep making it slower.",
      "You need features a template cannot do, like calculators, portals or live data.",
      "Your marketing site and your app look and feel like two different companies.",
      "Developers you hire disagree on how the current codebase works.",
    ],
    deliverables: [
      { title: "Fast pages by default", body: "Pages generated ahead of time where possible, images optimised automatically and only the code each page needs." },
      { title: "Search-friendly structure", body: "Server-rendered pages, clean addresses, metadata and structured data on every page." },
      { title: "Content your team can edit", body: "A headless CMS (a content editor separate from the code) such as Sanity, or simple content files for smaller sites." },
      { title: "Custom features", body: "Forms, calculators, search, logins and dashboards built into the same codebase." },
      { title: "Clean, typed code", body: "TypeScript, linting and a readable structure so the next developer can pick it up." },
      { title: "Hosting set up", body: "Deployed on Vercel, Hostinger or your own cloud, with previews for every change." },
    ],
    steps: [
      { title: "Scope", body: "Pages, features, content and integrations agreed, with a fixed quote." },
      { title: "Design", body: "Designs for key pages and a component set the build follows." },
      { title: "Build with previews", body: "Every change gets a preview link you can check before it goes live." },
      { title: "Launch and hand over", body: "Speed and search checks, then documentation and a walkthrough for your team." },
    ],
    timing:
      "A Next.js marketing site usually takes 4 to 8 weeks. Web apps are planned in stages, with a first version in 8 to 16 weeks.",
    price: {
      headline: "Each Next.js project gets a fixed quote after scoping.",
      factors: [
        "Number of page types and custom features",
        "Which content editor you need",
        "Integrations with your app, store or CRM",
        "Moving content from an existing site",
      ],
    },
    alsoProjects: ["buildbid"],
    notFit: [
      "If your team wants to build pages themselves with a drag-and-drop editor, WordPress may suit you better.",
      "If you mainly sell products online, Shopify will usually get you selling sooner.",
    ],
    faq: [
      { q: "Why Next.js instead of WordPress?", a: "Next.js gives more speed and freedom for custom features. WordPress gives non-technical teams more control over layouts. We recommend based on who will edit the site and what it needs to do." },
      { q: "Can my team still edit content?", a: "Yes. We connect a content editor so text, images, posts and new pages need no developer." },
      { q: "Where will it be hosted?", a: "Vercel is the simplest option for most Next.js sites. We also deploy to Hostinger, AWS or your own servers when that suits you better." },
      { q: "Is Next.js good for SEO?", a: "Yes, when built properly: pages are rendered on the server, so search engines see full content, and speed is strong by default." },
      { q: "Can you take over an existing Next.js project?", a: "Yes. We start with a code review and tell you plainly what to keep and what to fix." },
    ],
    related: ["web-apps/custom-web-app-development", "websites/custom-website-development", "growth/seo"],
    tools: ["Next.js", "React", "TypeScript", "Vercel", "Sanity", "Supabase"],
    image: photo("web"),
    imageAlt: "Code on a laptop screen",
    closing: "Need a site that is fast and does more?",
    updated: UPDATED,
  },
  {
    category: "websites",
    slug: "wordpress-development",
    metaTitle: "WordPress Development: Custom Sites Your Team Can Run",
    metaDescription:
      "Custom WordPress websites with a clean design, the right plugins and an editor your team is comfortable with, built to stay fast and secure.",
    h1: "WordPress development",
    lead:
      "We build custom WordPress websites that your team can run without a developer: adding pages, posts, products and bookings through an editor they are comfortable with. We keep plugins to the ones you need, so the site stays fast and safe.",
    forWho:
      "Businesses and non-profits that publish often, want full control of their content, or already know WordPress.",
    problems: [
      "Your WordPress site is slow and runs on dozens of plugins nobody remembers installing.",
      "The theme breaks every time something updates.",
      "Your team is scared to edit pages in case the layout falls apart.",
      "You need bookings, payments or memberships and are not sure which plugins to trust.",
    ],
    deliverables: [
      { title: "A design made for you", body: "A custom theme or a well-built theme set up for your brand, not a demo with your logo on it." },
      { title: "An editor that suits your team", body: "Gutenberg blocks or Elementor, set up with locked layouts so pages stay tidy when edited." },
      { title: "Only the plugins you need", body: "Bookings, forms, payments, SEO and backups chosen for quality and support, each one justified." },
      { title: "Speed and security basics", body: "Caching, image optimisation, security hardening and automatic backups from day one." },
      { title: "Training", body: "A recorded walkthrough of how to add and edit content on your own site." },
    ],
    steps: [
      { title: "Plan", body: "Pages, features and plugins agreed, with a fixed quote." },
      { title: "Design", body: "Key pages designed for mobile and desktop." },
      { title: "Build and test", body: "Built on a staging site you can review before anything is live." },
      { title: "Launch and train", body: "Go live, redirects and tracking checked, then training for your team." },
    ],
    timing:
      "A WordPress business site usually takes 4 to 8 weeks. Simpler sites can be faster: The Jumbo Jump's booking site went live within a week.",
    price: {
      headline: "Every WordPress site gets a fixed quote after the first call.",
      factors: [
        "Custom theme or a configured premium theme",
        "Bookings, payments, memberships or multilingual features",
        "Number of page types",
        "Moving content from an existing site",
      ],
    },
    facts: {
      title: "Why fewer plugins means a safer site",
      intro: "Most WordPress security problems come from plugins, not from WordPress itself. That is why we keep plugins to the ones each site really needs and keep them updated.",
      items: [
        { label: "New WordPress vulnerabilities found in 2024", value: "7,966" },
        { label: "Share found in plugins", value: "96%" },
        { label: "Share found in themes", value: "4%" },
      ],
      sources: [{ label: "Patchstack: State of WordPress Security in 2025", url: "https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/" }],
    },
    proof: {
      project: "the-jumbo-jump",
      story:
        "The Jumbo Jump is home of the world's largest jumping castle. We built their WordPress site with slot booking and online payments, and it went live within a week.",
    },
    alsoProjects: ["dxb-off-plan", "care-foundation"],
    notFit: [
      "If you need an app-like experience or very custom features, Next.js may serve you better.",
      "If you mainly sell products, compare WooCommerce with Shopify before deciding. We will help you choose.",
    ],
    faq: [
      { q: "Elementor or Gutenberg?", a: "Gutenberg is lighter and built into WordPress. Elementor gives non-technical teams more layout freedom. We set up whichever your team will use comfortably." },
      { q: "Who will host the site?", a: "We can set up hosting on Hostinger or work with your current host, as long as it runs a current PHP version and has backups." },
      { q: "Will the site be secure?", a: "We harden the install, limit plugins, set up backups and can keep everything updated on a monthly care plan." },
      { q: "Can you fix our existing WordPress site instead?", a: "Often, yes. We start with a short audit of speed, plugins and theme, then tell you whether fixing or rebuilding costs less." },
      { q: "Do I own the site?", a: "Yes. Hosting, domain, theme and admin access are all in your name." },
    ],
    related: ["websites/wordpress-maintenance", "websites/website-redesign", "ecommerce/woocommerce-development"],
    tools: ["WordPress", "Elementor", "Gutenberg", "PHP", "Hostinger"],
    image: photo("web"),
    imageAlt: "Code on a laptop screen",
    closing: "Want a WordPress site your team enjoys using?",
    updated: UPDATED,
  },
  {
    category: "websites",
    slug: "wordpress-maintenance",
    metaTitle: "WordPress Maintenance: Updates, Backups and Security",
    metaDescription:
      "Monthly WordPress care: tested updates, daily backups, security monitoring, uptime checks and small edits, with a short monthly report.",
    h1: "WordPress maintenance",
    lead:
      "We look after your WordPress site every month: updating WordPress, plugins and theme safely, keeping backups, watching for security issues and downtime, and making small content changes when you need them.",
    forWho:
      "Anyone with a WordPress site that matters to the business and no developer keeping an eye on it.",
    problems: [
      "The dashboard shows a long list of updates nobody dares to click.",
      "You found out the site was down because a customer told you.",
      "You are not sure when the last backup was taken, or whether it works.",
      "Small text changes wait weeks for someone to get around to them.",
    ],
    deliverables: [
      { title: "Tested updates", body: "WordPress, plugin and theme updates applied on a staging copy first, then on the live site." },
      { title: "Daily backups", body: "Off-site backups kept for weeks, with a test restore so we know they work." },
      { title: "Security monitoring", body: "Malware scanning, login protection and quick action if a plugin vulnerability is announced." },
      { title: "Uptime checks", body: "We are alerted within minutes if the site goes down." },
      { title: "Small edits included", body: "A set amount of time each month for text, image and page changes." },
      { title: "Monthly report", body: "What we updated, any issues found and how the site performed." },
    ],
    steps: [
      { title: "Health check", body: "We audit the site, plugins, hosting and backups, and fix urgent issues first." },
      { title: "Set up monitoring", body: "Backups, uptime and security monitoring switched on." },
      { title: "Monthly care", body: "Updates, checks and your change requests every month." },
      { title: "Report", body: "A short monthly report and recommendations." },
    ],
    timing: "The care plan starts with a health check in the first week, then runs month to month.",
    price: {
      headline: "A fixed monthly fee, agreed after the health check. You can cancel any time.",
      factors: [
        "Size of the site and number of plugins",
        "WooCommerce or membership features",
        "How much editing time you want each month",
        "Response time you need for urgent issues",
      ],
    },
    facts: {
      title: "Why updates cannot wait",
      intro: "Almost every new WordPress vulnerability is found in plugins, which is why tested, regular updates are the single most important part of maintenance.",
      items: [
        { label: "New WordPress vulnerabilities found in 2024", value: "7,966" },
        { label: "Share found in plugins", value: "96%" },
      ],
      sources: [{ label: "Patchstack: State of WordPress Security in 2025", url: "https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/" }],
    },
    notFit: [
      "If the site is beyond saving, with a broken theme or dozens of abandoned plugins, a rebuild may cost less than maintaining it.",
      "If your site is not on WordPress, see our general website maintenance plan.",
    ],
    faq: [
      { q: "What if an update breaks something?", a: "We test updates on a staging copy first. If something still goes wrong on the live site, we roll back from backup straight away." },
      { q: "Do you fix hacked sites?", a: "Yes. We clean the site, close the hole that let the attacker in and harden it so it does not happen again." },
      { q: "Do I need to move hosting?", a: "Not usually. We work with your host if it is reliable, and suggest a move only if the hosting is the problem." },
      { q: "Can unused editing time roll over?", a: "We agree this when we set up the plan, so you know exactly what is included." },
    ],
    related: ["websites/wordpress-development", "websites/website-maintenance", "growth/seo"],
    tools: ["WordPress", "Wordfence", "UpdraftPlus", "UptimeRobot", "Hostinger"],
    image: photo("growth"),
    imageAlt: "A laptop showing an analytics dashboard",
    closing: "Want your WordPress site looked after properly?",
    updated: UPDATED,
  },
  {
    category: "websites",
    slug: "website-maintenance",
    metaTitle: "Website Maintenance and Support Plans",
    metaDescription:
      "Monthly website care for Next.js, WordPress, Shopify and custom sites: updates, backups, uptime, security, speed checks and small changes.",
    h1: "Website maintenance and support",
    lead:
      "We keep your website running safely every month, whatever it is built on: Next.js, WordPress, Shopify, Laravel or a custom build. Updates, backups, uptime and security checks, speed checks and small changes, with a short report each month.",
    forWho:
      "Businesses whose website was built by someone who has since moved on, or who simply want one dependable team to call.",
    problems: [
      "The developer who built your site is no longer reachable.",
      "Nobody is responsible for the site until something breaks.",
      "Forms quietly stopped sending enquiries and nobody noticed for weeks.",
      "The site has slowed down over time and you do not know why.",
    ],
    deliverables: [
      { title: "Handover audit", body: "We document how the site is built, where it is hosted and who has access, then fix urgent issues." },
      { title: "Updates", body: "Framework, library, plugin or app updates applied safely, with a rollback plan." },
      { title: "Backups and uptime", body: "Regular backups and downtime alerts, so problems are caught by us, not your customers." },
      { title: "Form and tracking checks", body: "Contact forms, WhatsApp buttons and analytics tested regularly." },
      { title: "Speed checks", body: "Core Web Vitals checked monthly and fixed before they hurt rankings." },
      { title: "Small changes", body: "Text, image and page updates within a monthly allowance." },
    ],
    steps: [
      { title: "Take over", body: "Access, hosting and code reviewed and documented in the first week." },
      { title: "Stabilise", body: "Urgent fixes, backups and monitoring set up." },
      { title: "Monthly care", body: "Checks, updates and your change requests on a set schedule." },
      { title: "Report", body: "A one-page monthly report with what we did and what we recommend." },
    ],
    timing: "We take over a site within a week, then work month to month.",
    price: {
      headline: "A fixed monthly fee based on the site and how much change you need. No long contract.",
      factors: [
        "What the site is built on and how complex it is",
        "Number of sites or environments",
        "Monthly allowance for changes",
        "Response times for urgent issues",
      ],
    },
    notFit: [
      "If you want new features and growth work every month, our growth and support retainer is a better fit.",
      "If your site is on WordPress only, our WordPress maintenance plan is more specific.",
    ],
    faq: [
      { q: "Can you maintain a site you did not build?", a: "Yes, that is most of what this plan is for. We start with an audit so we understand it before changing anything." },
      { q: "What platforms do you support?", a: "Next.js, React, WordPress, Shopify, Laravel and most custom PHP or Node.js sites." },
      { q: "What counts as a small change?", a: "Text, images, a new section or page using existing layouts. Larger work gets a separate quote." },
      { q: "How fast do you respond if the site goes down?", a: "We agree response times when we set up the plan, and downtime alerts reach us automatically." },
    ],
    related: ["websites/wordpress-maintenance", "growth/growth-support", "websites/website-redesign"],
    tools: ["Next.js", "WordPress", "Shopify", "Laravel", "UptimeRobot", "Google Search Console"],
    image: photo("growth"),
    imageAlt: "A laptop showing an analytics dashboard",
    closing: "Want one team that keeps your site in good shape?",
    updated: UPDATED,
  },

  /* ============================ WEB APPS ============================ */
  {
    category: "web-apps",
    slug: "custom-web-app-development",
    metaTitle: "Custom Web App Development for Your Business",
    metaDescription:
      "Custom web apps for processes that spreadsheets and off-the-shelf tools no longer handle: portals, booking systems, dashboards and internal tools.",
    h1: "Custom web app development",
    lead:
      "We build custom web apps for the parts of your business that spreadsheets and off-the-shelf tools no longer handle: customer portals, booking and quoting systems, internal tools and marketplaces. You see working software every week and own every line of code.",
    forWho:
      "Growing businesses with a process that is unique to them, and companies whose software is the product they sell.",
    problems: [
      "The business runs on spreadsheets that only one person really understands.",
      "You pay for several tools and still copy data between them by hand.",
      "Customers phone or email for things they should be able to do themselves online.",
      "An off-the-shelf tool forces you to work its way, not yours.",
    ],
    deliverables: [
      { title: "A scoped first version", body: "The core workflow, users and screens for a first release, agreed before the build." },
      { title: "Designed around your users", body: "Screens designed and tested with the people who will use them every day." },
      { title: "Accounts and permissions", body: "Logins, roles and access rules so each person sees only what they should." },
      { title: "Integrations", body: "Connections to payments, email, your CRM, accounting or other systems you already use." },
      { title: "Admin and reporting", body: "Tools for your team to manage data, plus the reports you actually look at." },
      { title: "Tested and documented", body: "Automated tests on the important paths, and documentation for whoever maintains it next." },
    ],
    steps: [
      { title: "Discovery", body: "We map the process, the users and the data, and agree the first version." },
      { title: "Design", body: "Flows and screens tested as a prototype before code." },
      { title: "Build in weekly releases", body: "A working app on a test address you can use from week one." },
      { title: "Launch and improve", body: "Go live with training, then improve from real use." },
    ],
    timing: "A first version usually takes 8 to 16 weeks. A two-week discovery sprint can come first if the scope is unclear.",
    price: {
      headline: "We quote a fixed price for the first version after discovery, then plan later features separately.",
      factors: [
        "Number of user types and screens",
        "Integrations with other systems",
        "Reporting and admin needs",
        "Security and compliance requirements",
      ],
    },
    proof: {
      project: "mnm-estates",
      story:
        "MNM Estates is a place to buy or invest in vetted properties. We built the web portal with property listings, current investment offers and developer profiles side by side, plus a blog and newsletter.",
    },
    alsoProjects: ["servicemarket", "frontline-ticketing"],
    notFit: [
      "If an existing tool covers most of what you need, use it and connect it to your other systems instead.",
      "If you are not sure the idea works yet, start with an MVP or a discovery sprint rather than a full build.",
    ],
    faq: [
      { q: "What do you build web apps with?", a: "Mostly Next.js and React for the front end, with Node.js, NestJS or Laravel and a PostgreSQL, Supabase or Firebase database. We choose what your team can maintain." },
      { q: "Can it work on phones?", a: "Yes. Every web app we build works on phones and tablets, and can later become a mobile app using the same back end." },
      { q: "Who owns the code?", a: "You do, from the first commit, in a repository under your account." },
      { q: "Can you improve an app another team built?", a: "Yes. We review the code first and tell you honestly whether to continue or rebuild parts." },
      { q: "What happens after launch?", a: "We can stay on with a monthly plan, or hand over to your team with documentation." },
    ],
    related: ["web-apps/mvp-development", "web-apps/dashboard-development", "design/ui-ux-design"],
    tools: ["Next.js", "React", "NestJS", "PostgreSQL", "Supabase", "TypeScript"],
    image: photo("web"),
    imageAlt: "Code on a laptop screen",
    closing: "Got a process that has outgrown spreadsheets?",
    updated: UPDATED,
  },
  {
    category: "web-apps",
    slug: "saas-development",
    metaTitle: "SaaS Development: Build and Launch Your Product",
    metaDescription:
      "SaaS product development: sign-up, subscriptions, teams and permissions, admin and analytics, built to launch fast and grow without a rewrite.",
    h1: "SaaS development",
    lead:
      "We design and build software-as-a-service products: the sign-up, subscription billing, team accounts and the core features customers pay for. We build the first version to launch quickly, on foundations that will not need a rewrite once customers arrive.",
    forWho:
      "Founders and companies turning an idea, an internal tool or a service into software customers subscribe to.",
    problems: [
      "You know the problem your product solves but not how to get from idea to paying customers.",
      "A freelancer built a prototype that falls over with more than a handful of users.",
      "Billing, trials and plan limits are eating weeks you meant to spend on the product.",
      "You need separate data for each customer company and are not sure how to do it safely.",
    ],
    deliverables: [
      { title: "Product scope", body: "The core job your product does, the first features and the pricing plans they support." },
      { title: "Sign-up and onboarding", body: "Sign-up, login, invitations and a first-run experience that gets new users to value quickly." },
      { title: "Subscriptions and billing", body: "Plans, trials, upgrades and invoices with Stripe or Paddle, including plan limits in the app." },
      { title: "Multi-tenant data", body: "Each customer company's data kept separate and secure, with roles for their team members." },
      { title: "Admin console", body: "Tools for your team to manage customers, plans and support issues." },
      { title: "Product analytics", body: "Events tracked so you can see which features people use and where they drop off." },
    ],
    steps: [
      { title: "Shape the product", body: "We agree the core feature set and pricing for launch." },
      { title: "Design and prototype", body: "Key flows designed and tested with target customers where possible." },
      { title: "Build in releases", body: "Weekly releases to a test environment, then a private beta." },
      { title: "Launch and iterate", body: "Public launch, then improvements driven by usage data and customer feedback." },
    ],
    timing: "A first launchable version usually takes 8 to 16 weeks, depending on the core features.",
    price: {
      headline: "We quote a fixed price for the first version, then work in monthly cycles as the product grows.",
      factors: [
        "Number of core features at launch",
        "Billing complexity (seats, usage, add-ons)",
        "Integrations your customers expect",
        "Security reviews and compliance needs",
      ],
    },
    alsoProjects: ["qriositynet", "buildbid"],
    notFit: [
      "If you have not talked to potential customers yet, start with a discovery sprint and a prototype before building.",
      "If one existing tool plus a bit of automation would solve the problem, that is cheaper than a new product.",
    ],
    faq: [
      { q: "What tech stack do you use for SaaS?", a: "Usually Next.js and TypeScript with PostgreSQL or Supabase, and Stripe for billing. It is well known, easy to hire for and scales well." },
      { q: "Can you handle payments and taxes?", a: "We integrate Stripe or Paddle. Paddle can act as the seller and handle sales tax for you, which helps when you sell worldwide." },
      { q: "Will it scale?", a: "We build on proven foundations and plan for growth from the start, without over-engineering the first version." },
      { q: "Do you sign an NDA?", a: "Yes, before we discuss any details of your idea." },
      { q: "Who owns the product?", a: "You do: the code, the data, the accounts and the intellectual property." },
    ],
    related: ["web-apps/mvp-development", "web-apps/custom-web-app-development", "design/ui-ux-design"],
    tools: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Stripe", "Vercel"],
    image: photo("web"),
    imageAlt: "Code on a laptop screen",
    closing: "Ready to turn your idea into a product people pay for?",
    updated: UPDATED,
  },
  {
    category: "web-apps",
    slug: "mvp-development",
    metaTitle: "MVP Development for Startups and New Products",
    metaDescription:
      "MVP development: the smallest version of your product that does the core job well, built fast so you can learn from real users before spending more.",
    h1: "MVP development",
    lead:
      "We build MVPs: the smallest version of your product that does its core job well enough for real people to use and pay for. You learn from real users in weeks instead of spending a year building features nobody asked for.",
    forWho:
      "Founders testing a new idea, and companies trying a new product line before committing a full budget.",
    problems: [
      "Your feature list keeps growing and launch keeps moving further away.",
      "Investors or partners want to see something working, not slides.",
      "You are not sure which features people will actually use.",
      "Your budget covers a first version, not a finished product.",
    ],
    deliverables: [
      { title: "A ruthless scope", body: "We list every feature, then agree which ones the first version truly needs." },
      { title: "Clickable prototype", body: "Tested with a few target users before code, so the build starts from evidence." },
      { title: "A working product", body: "Real accounts, real data and a real way to pay, if the idea depends on payment." },
      { title: "Measurement built in", body: "Analytics on the key actions, so you know whether people get value." },
      { title: "A plan for what comes next", body: "A short roadmap based on what the MVP is meant to prove." },
    ],
    steps: [
      { title: "Discovery sprint", body: "Two weeks to agree the scope, the user flows and a fixed quote, ending with a clickable prototype." },
      { title: "Build", body: "Weekly releases to a test address you can share with early users." },
      { title: "Launch to real users", body: "A small launch to the people the product is for." },
      { title: "Learn and decide", body: "We review the data and feedback with you and plan the next version, or the pivot." },
    ],
    timing: "The discovery sprint takes two weeks. Most MVPs launch 8 to 12 weeks after that.",
    price: {
      headline: "A fixed price for the discovery sprint, then a fixed price for the MVP build.",
      factors: [
        "How many user types the product has",
        "Payments, messaging or other integrations",
        "Web only, or web and mobile",
        "How polished the design needs to be for your audience",
      ],
    },
    alsoProjects: ["buildbid"],
    notFit: [
      "If you already have strong evidence and paying customers, build the fuller product rather than an MVP.",
      "If a landing page and a waiting list would test demand, start there. It costs far less.",
    ],
    faq: [
      { q: "What does MVP stand for?", a: "Minimum viable product: the smallest version of a product that real users can use to get the core value." },
      { q: "Is an MVP just a prototype?", a: "No. A prototype is clickable but fake. An MVP is real software people can sign up for and use." },
      { q: "Will we have to throw the MVP away later?", a: "We build it on the same foundations a fuller product would use, so you extend it rather than start again." },
      { q: "Can it be a mobile app?", a: "Yes. See our mobile app MVP service, or start on the web and add apps later on the same back end." },
      { q: "Do you take equity instead of payment?", a: "We work on paid projects, which keeps incentives simple and lets you keep full ownership." },
    ],
    related: ["web-apps/saas-development", "mobile-apps/mobile-app-mvp", "design/ui-ux-design"],
    tools: ["Next.js", "Supabase", "Stripe", "Figma", "Vercel"],
    image: photo("ux"),
    imageAlt: "A hand sketching wireframes on a tablet",
    closing: "Want to test your idea with real users?",
    updated: UPDATED,
  },
  {
    category: "web-apps",
    slug: "dashboard-development",
    metaTitle: "Dashboard and Admin Panel Development",
    metaDescription:
      "Custom dashboards and admin panels that pull your data together, show the numbers that matter and let your team act without spreadsheets.",
    h1: "Dashboards and admin panels",
    lead:
      "We build dashboards that pull numbers from your systems into one place, and admin panels that let your team manage customers, orders and content without touching a database or a spreadsheet.",
    forWho:
      "Teams spending hours each week compiling reports, and products that need a proper back office.",
    problems: [
      "Every Monday someone spends half a day building the same report.",
      "Numbers in sales, finance and operations never match.",
      "Your team edits records straight in the database because there is no admin screen.",
      "Managers ask for data that exists but nobody can get to quickly.",
    ],
    deliverables: [
      { title: "Agreed key numbers", body: "The few measures each team actually decides with, defined once so everyone means the same thing." },
      { title: "Data connections", body: "Data pulled from your app, store, CRM, accounting or spreadsheets on a schedule." },
      { title: "Clear charts and tables", body: "Designed to answer a question at a glance, with filters by date, team or region." },
      { title: "Admin screens", body: "Search, view and edit records with the right permissions and a log of changes." },
      { title: "Exports and alerts", body: "CSV and PDF exports, and alerts when a number crosses a line you set." },
    ],
    steps: [
      { title: "Questions first", body: "We list the decisions the dashboard should help with and the data behind each one." },
      { title: "Connect the data", body: "We connect sources and check the numbers against your current reports." },
      { title: "Design and build", body: "Screens designed for the people who use them, built and tested with real data." },
      { title: "Roll out", body: "Training, then improvements from feedback in the first weeks." },
    ],
    timing: "A focused dashboard often takes a few weeks. A full admin panel is planned as part of the app it manages.",
    price: {
      headline: "Each dashboard or admin panel gets a fixed quote after we map the data sources.",
      factors: [
        "Number and type of data sources",
        "How many views and user roles",
        "Real-time data or daily updates",
        "Editing and approval workflows",
      ],
    },
    notFit: [
      "If your data already sits in one tool with good reports, set those up before building a custom dashboard.",
      "If you only need a one-off analysis, a spreadsheet model may be enough.",
    ],
    faq: [
      { q: "Why not use Power BI or Looker Studio?", a: "Often you should, and we can set those up. A custom dashboard makes sense when it needs to sit inside your product, show data to customers, or let people edit records, not just view them." },
      { q: "Can customers see their own dashboard?", a: "Yes. We can build customer-facing dashboards that show each customer only their own data." },
      { q: "How fresh is the data?", a: "From real time to daily, depending on the source and what the decisions need." },
      { q: "Is the data secure?", a: "Access is controlled by role, connections are encrypted and actions are logged." },
    ],
    related: ["web-apps/custom-web-app-development", "web-apps/api-development", "design/ui-ux-design"],
    tools: ["Next.js", "React", "PostgreSQL", "Supabase", "Looker Studio"],
    image: photo("growth"),
    imageAlt: "A laptop showing an analytics dashboard",
    closing: "Want the numbers that matter in one place?",
    updated: UPDATED,
  },
  {
    category: "web-apps",
    slug: "ticketing-platform-development",
    metaTitle: "Ticketing Platform and Event App Development",
    metaDescription:
      "Event ticketing platforms and apps: event discovery, seat and ticket selection, fast checkout, QR tickets and organiser tools.",
    h1: "Ticketing and event platforms",
    lead:
      "We design and build ticketing platforms for selling event tickets online, from event discovery and ticket selection to checkout, QR tickets and the tools organisers use on the door. Web and mobile, from one team.",
    forWho:
      "Event organisers, venues and ticketing startups who want their own platform instead of paying a marketplace on every ticket.",
    problems: [
      "You pay a large fee on every ticket sold through someone else's platform.",
      "Buyers drop out between picking a ticket and paying.",
      "Door staff struggle with lists, screenshots and fake tickets.",
      "You have no direct relationship with the people who buy your tickets.",
    ],
    deliverables: [
      { title: "Event discovery", body: "Event listings, search and filters that help people find what to go to." },
      { title: "Ticket selection", body: "Ticket types, quantities, prices and limits, with clear stock as events sell out." },
      { title: "Fast checkout", body: "A short checkout with the payment methods your buyers use, on phone and desktop." },
      { title: "QR tickets and scanning", body: "Tickets by email and in the app, and a scanner that checks them at the door." },
      { title: "Organiser tools", body: "Create events, manage sales, see reports and contact buyers." },
    ],
    steps: [
      { title: "Map the journey", body: "From finding an event to walking through the door, for buyers and organisers." },
      { title: "Design and test", body: "Key flows tested as a prototype, especially checkout." },
      { title: "Build web and app", body: "Shared back end for the website and the apps, built in weekly releases." },
      { title: "Launch on a real event", body: "A first live event with us on hand, then improvements." },
    ],
    timing: "A first version usually takes 8 to 16 weeks, depending on seating, payments and the apps needed.",
    price: {
      headline: "A fixed quote for the first version after we map your events and buyers.",
      factors: [
        "General admission or reserved seating",
        "Web only, or web plus iOS and Android apps",
        "Payment gateways and payout rules",
        "Organiser and door-scanning features",
      ],
    },
    proof: {
      project: "frontline-ticketing",
      story:
        "Frontline Ticketing is an app and website for selling and buying event tickets. We redesigned both, covering the full journey from finding an event to picking tickets and paying.",
    },
    notFit: [
      "If you run a few small events a year, an existing ticketing service is cheaper than your own platform.",
    ],
    faq: [
      { q: "Can it handle reserved seating?", a: "Yes. We can build seat maps where buyers choose their seats, or keep it simple with ticket types." },
      { q: "Which payment methods can buyers use?", a: "Cards and wallets through gateways like Stripe, plus local methods in your market where the gateway supports them." },
      { q: "How do you stop fake tickets?", a: "Each ticket has a unique QR code checked against the system at the door, and a code can only be used once." },
      { q: "Do we need an app as well as the website?", a: "Not always. Many buyers are happy with a web checkout and an emailed ticket. Apps help with repeat buyers and door scanning." },
    ],
    related: ["mobile-apps/ios-android-app-development", "web-apps/custom-web-app-development", "design/ui-ux-design"],
    tools: ["Next.js", "React Native", "Flutter", "Stripe", "PostgreSQL"],
    image: photo("mobile"),
    imageAlt: "Hands using an app on a phone",
    closing: "Want to sell tickets on your own platform?",
    updated: UPDATED,
  },
  {
    category: "web-apps",
    slug: "api-development",
    metaTitle: "API Development and System Integration",
    metaDescription:
      "APIs and integrations that connect your website, app, CRM, payments and back office, so data moves on its own and stays correct.",
    h1: "API development and integration",
    lead:
      "We build APIs and integrations that connect your website, apps, CRM, payments and back-office systems, so data moves on its own and stays correct everywhere. No more copying orders, leads or stock numbers by hand.",
    forWho:
      "Businesses whose systems do not talk to each other, and products that need an API for apps or partners.",
    problems: [
      "Leads from the website are typed into the CRM by hand.",
      "Your app needs a back end, and the website and app keep getting out of step.",
      "A partner wants to connect to your system and you have no API to offer.",
      "An integration breaks quietly and nobody notices until a customer complains.",
    ],
    deliverables: [
      { title: "Integration map", body: "Which systems hold which data, what should sync and in which direction." },
      { title: "Secure APIs", body: "REST or GraphQL APIs with authentication, rate limits and clear documentation." },
      { title: "Connections to your tools", body: "CRMs, payment gateways, couriers, accounting, email and messaging platforms." },
      { title: "Webhooks and queues", body: "Events handled reliably, with retries so a short outage does not lose data." },
      { title: "Monitoring", body: "Alerts when an integration fails, and logs that show what happened." },
    ],
    steps: [
      { title: "Map", body: "We map the data, the systems and the rules for each sync." },
      { title: "Design the API", body: "Endpoints and data formats agreed and documented before code." },
      { title: "Build and test", body: "Built against test accounts, with automated tests on every sync." },
      { title: "Launch and monitor", body: "Switched on in stages, watched closely in the first weeks." },
    ],
    timing: "A single integration can take days to a few weeks. A full API for an app is planned with the app itself.",
    price: {
      headline: "Each integration or API gets a fixed quote once the data map is agreed.",
      factors: [
        "Number of systems and data types",
        "Quality of the other systems' APIs",
        "Volume of data and how real time it must be",
        "Security and audit requirements",
      ],
    },
    proof: {
      project: "dxb-off-plan",
      story:
        "DXB Off Plan's property portal has a CRM connected behind it, so every enquiry from listings, search and virtual tours reaches the sales team without anyone copying it across.",
    },
    notFit: [
      "If the two systems already offer a ready-made connector, use it. We will tell you if one exists.",
      "If a no-code tool like Zapier or Make can do it reliably, that may be cheaper. See our workflow automation service.",
    ],
    faq: [
      { q: "REST or GraphQL?", a: "REST is simpler and widely supported, and fits most integrations. GraphQL suits apps that need flexible data from many sources. We recommend per project." },
      { q: "Can you work with our old system?", a: "Usually. If it has an API, we use it. If not, we look at database access, file exports or other safe options." },
      { q: "How do you keep data secure?", a: "Encrypted connections, access keys with the least permissions needed, and logs of every request." },
      { q: "Will you document the API?", a: "Yes. You get clear documentation your team or partners can use." },
    ],
    related: ["web-apps/custom-web-app-development", "ai-agents/workflow-automation", "ecommerce/odoo-ecommerce-integration"],
    tools: ["Node.js", "NestJS", "PostgreSQL", "Stripe", "Postman"],
    image: photo("web"),
    imageAlt: "Code on a laptop screen",
    closing: "Want your systems to talk to each other?",
    updated: UPDATED,
  },

  /* ============================ MOBILE APPS ============================ */
  {
    category: "mobile-apps",
    slug: "flutter-app-development",
    metaTitle: "Flutter App Development for iOS and Android",
    metaDescription:
      "Flutter apps for iPhone and Android from one codebase, designed in-house and shipped to both stores, by the team that built Tilawat.",
    h1: "Flutter app development",
    lead:
      "We design and build Flutter apps that run on iPhone and Android from one codebase, with screens that look and behave the same on every device. We take the app from first design to both app stores and keep it updated after launch.",
    forWho:
      "Founders and businesses who want one app for both platforms, with a polished, consistent design.",
    problems: [
      "You were quoted for two separate apps and the cost doubled.",
      "Your current app looks different and broken on some Android phones.",
      "Your Flutter app was started by someone else and has stalled.",
      "You need custom animations and a strong brand feel, not stock screens.",
    ],
    deliverables: [
      { title: "App design in Figma", body: "Screens and flows designed for both platforms, tested as a prototype." },
      { title: "One Flutter codebase", body: "Clean, structured Dart code that builds for iOS and Android." },
      { title: "Back end and data", body: "Firebase, Supabase or your own API for accounts, data, payments and notifications." },
      { title: "Offline and media features", body: "Audio, video, camera, maps and offline use where your app needs them." },
      { title: "Store releases", body: "Listings, screenshots and submissions to the App Store and Google Play." },
    ],
    steps: [
      { title: "Plan the first release", body: "Core features and screens agreed, with a fixed quote." },
      { title: "Design", body: "A clickable prototype you can try on your phone." },
      { title: "Build", body: "Weekly test builds through TestFlight and Google Play testing tracks." },
      { title: "Launch and update", body: "Both stores at once, then regular updates." },
    ],
    timing: "A first release usually takes 8 to 16 weeks.",
    price: {
      headline: "A fixed quote for the first release after a short planning call.",
      factors: [
        "Number of screens and user types",
        "Audio, video, maps, payments or other device features",
        "Back end: Firebase, Supabase or a custom API",
        "Admin panel or companion website",
      ],
    },
    proof: {
      project: "tilawat",
      story:
        "Tilawat is a Quran audio app for listening to reciters, saving playlists and recording your own recitation. We designed it and built it in Flutter, so the same app runs on iPhone and Android.",
    },
    notFit: [
      "If your team already writes JavaScript or React, React Native may be easier for them to maintain.",
      "If the app depends heavily on one platform's newest features, native code may be the better choice for those parts.",
    ],
    faq: [
      { q: "Is Flutter reliable for a business app?", a: "Yes. Flutter is maintained by Google and used for many large apps. For most business apps users cannot tell it apart from a native app." },
      { q: "Can a Flutter app also run on the web?", a: "Flutter can build for the web, but for public websites we usually recommend a separate web build for better search visibility." },
      { q: "Can you take over our Flutter app?", a: "Yes. We review the code, fix urgent issues and plan the rest with you." },
      { q: "Who publishes the app?", a: "We publish under your Apple and Google developer accounts, so you own the listings." },
    ],
    related: ["mobile-apps/ios-android-app-development", "mobile-apps/react-native-app-development", "mobile-apps/faith-app-development"],
    tools: ["Flutter", "Dart", "Firebase", "Supabase", "Figma"],
    image: photo("mobile"),
    imageAlt: "Hands using an app on a phone",
    closing: "Want one app for iPhone and Android?",
    updated: UPDATED,
  },
  {
    category: "mobile-apps",
    slug: "react-native-app-development",
    metaTitle: "React Native App Development for iOS and Android",
    metaDescription:
      "React Native apps for iPhone and Android from one codebase, sharing logic and people with your React website. Built, shipped and maintained.",
    h1: "React Native app development",
    lead:
      "We build React Native apps for iPhone and Android from one codebase. If your website already uses React, the app can share code, logic and even developers with it, which keeps both moving together.",
    forWho:
      "Teams with a React or Next.js website, JavaScript developers in-house, or an existing React Native app that needs help.",
    problems: [
      "Your web team knows React, but nobody can work on the mobile app.",
      "Features ship on the website weeks before they reach the app.",
      "Your React Native app is stuck on old versions and will not build anymore.",
      "Store updates take days of manual work every time.",
    ],
    deliverables: [
      { title: "App design", body: "Screens designed for each platform's conventions, tested as a prototype." },
      { title: "One React Native codebase", body: "TypeScript code that builds for iOS and Android, using Expo where it fits." },
      { title: "Shared code with your web app", body: "Business logic, data types and API calls shared with your React site where it makes sense." },
      { title: "Over-the-air updates", body: "Small fixes delivered without a full store review, within the stores' rules." },
      { title: "Store releases", body: "Listings, screenshots and submissions handled for you." },
    ],
    steps: [
      { title: "Review and plan", body: "Your existing code and web stack reviewed, first release agreed." },
      { title: "Design", body: "Prototype tested on real phones." },
      { title: "Build", body: "Weekly test builds through TestFlight and Google Play testing." },
      { title: "Launch and update", body: "Release to both stores, then a steady update rhythm." },
    ],
    timing: "A first release usually takes 8 to 16 weeks. Upgrading an outdated app is quoted after a code review.",
    price: {
      headline: "A fixed quote for a new app or an upgrade after a short review.",
      factors: [
        "New app or work on an existing codebase",
        "How much code can be shared with your website",
        "Device features such as camera, maps or payments",
        "Back end and admin needs",
      ],
    },
    notFit: [
      "If you want very consistent, highly animated screens and have no React team, Flutter may suit you better.",
    ],
    faq: [
      { q: "React Native or Flutter?", a: "React Native fits teams already using JavaScript and React. Flutter gives very consistent screens across devices. Both are solid; we choose with you." },
      { q: "What is Expo?", a: "Expo is a set of tools around React Native that speeds up building, testing and updating apps. We use it where it fits the app's needs." },
      { q: "Can you upgrade our old React Native app?", a: "Yes. We review it, then upgrade in steps so the app keeps working throughout." },
      { q: "Can updates skip the app store review?", a: "Small JavaScript fixes can be delivered over the air within Apple and Google rules. New features still go through store review." },
    ],
    related: ["mobile-apps/ios-android-app-development", "mobile-apps/flutter-app-development", "websites/nextjs-development"],
    tools: ["React Native", "Expo", "TypeScript", "Firebase", "Supabase"],
    image: photo("mobile"),
    imageAlt: "Hands using an app on a phone",
    closing: "Want your app and website to move together?",
    updated: UPDATED,
  },
  {
    category: "mobile-apps",
    slug: "mobile-app-mvp",
    metaTitle: "Mobile App MVP Development",
    metaDescription:
      "A first version of your app with only the features that prove the idea, built quickly and released to the App Store and Google Play.",
    h1: "Mobile app MVP",
    lead:
      "We build a first version of your app with only the features that prove the idea, and get it through App Store and Google Play review into real users' hands. Then we use what they do to decide what to build next.",
    forWho:
      "Founders with an app idea and a limited budget, and businesses testing whether customers will use an app at all.",
    problems: [
      "You have a long list of app features and no idea which ones matter.",
      "You worry about building for a year and launching to silence.",
      "You do not know what Apple and Google need before they approve an app.",
      "Investors want to see traction, not plans.",
    ],
    deliverables: [
      { title: "The one-feature test", body: "We agree the single job the app must do well, and cut the rest for now." },
      { title: "Prototype on your phone", body: "Tested with a few target users before any code." },
      { title: "A real app", body: "Sign-up, the core feature and notifications, built in Flutter or React Native for both platforms." },
      { title: "Store approval", body: "Privacy details, review notes and listings prepared so the app gets approved." },
      { title: "Usage tracking", body: "Analytics on the key actions so you can see if people come back." },
    ],
    steps: [
      { title: "Two-week discovery", body: "Scope, user flows and prototype, ending with a fixed quote." },
      { title: "Build", body: "Weekly test builds you install on your own phone." },
      { title: "Beta", body: "A small group of real users through TestFlight and Google Play testing." },
      { title: "Launch and learn", body: "Public release, then a review of the data with you." },
    ],
    timing: "Discovery takes two weeks. Most app MVPs reach the stores 8 to 12 weeks later.",
    price: {
      headline: "A fixed price for discovery, then a fixed price for the MVP build.",
      factors: [
        "The core feature and how complex it is",
        "Payments, chat, maps or video",
        "Admin tools you need from day one",
        "Whether a web version is also needed",
      ],
    },
    facts: {
      title: "Store rules your MVP has to meet",
      intro: "Google Play sets a minimum Android version that new apps and updates must target, and it rises every year. We build to the current rule from the start.",
      items: [
        { label: "Google Play target API level, new apps and updates from 31 August 2026", value: "Android 16 (API level 36) or higher" },
        { label: "Extension available on request until", value: "1 November 2026" },
      ],
      sources: [{ label: "Android Developers: Target API level requirements for Google Play", url: "https://developer.android.com/google/play/requirements/target-sdk" }],
    },
    notFit: [
      "If people would only use the app occasionally, test the idea as a mobile-friendly web app first. It is faster to change.",
    ],
    faq: [
      { q: "How is a mobile MVP different from a web MVP?", a: "It must pass Apple and Google review, handle notifications and work on many devices. That adds some work, but gives you a place on people's home screens." },
      { q: "Will the MVP have to be rebuilt later?", a: "No. We build it on the same foundations a full app would use, so you keep extending it." },
      { q: "Can you help with the App Store listing?", a: "Yes. We write the listing and design screenshots, and our ASO service can improve them after launch." },
      { q: "Who owns the app?", a: "You do. It is published under your developer accounts, and you own the code." },
    ],
    related: ["mobile-apps/ios-android-app-development", "web-apps/mvp-development", "growth/aso"],
    tools: ["Flutter", "React Native", "Firebase", "TestFlight", "Figma"],
    image: photo("mobile"),
    imageAlt: "Hands using an app on a phone",
    closing: "Want to see if your app idea works?",
    updated: UPDATED,
  },
  {
    category: "mobile-apps",
    slug: "faith-app-development",
    metaTitle: "Quran and Faith App Development",
    metaDescription:
      "Quran, recitation and faith apps for mosques, scholars and organisations: audio, reading, prayer times and community features, built with care.",
    h1: "Quran and faith app development",
    lead:
      "We design and build Quran, recitation and faith apps for scholars, mosques, institutes and organisations: audio and reading, prayer times, learning and community features. We built Tilawat, so we know how much care the content and the details need.",
    forWho:
      "Islamic organisations, mosques, Quran academies, reciters and faith-based groups who want an app for their community.",
    problems: [
      "Your community uses several apps, none of which carries your content or teachers.",
      "Audio stutters or stops when the screen locks, which ruins long recitations.",
      "You need Arabic text to display correctly alongside translations.",
      "You want an app that respects your audience: no intrusive ads, no tracking they did not agree to.",
    ],
    deliverables: [
      { title: "Audio that keeps playing", body: "Streaming and downloads, background playback, playlists and resume where you left off." },
      { title: "Reading and translation", body: "Arabic text with correct right-to-left layout, alongside translations in the languages you need." },
      { title: "Learning features", body: "Lessons, memorisation helpers and progress tracking for students." },
      { title: "Prayer times and reminders", body: "Location-based prayer times and gentle notifications users control." },
      { title: "Community and recording", body: "Recording your own recitation, sharing with a teacher, or community updates from your organisation." },
    ],
    steps: [
      { title: "Understand your community", body: "Who will use it, in which languages, and what they need daily." },
      { title: "Design with care", body: "Calm, respectful screens tested with members of your community." },
      { title: "Build", body: "Flutter or React Native for both platforms, with content checked carefully." },
      { title: "Launch and support", body: "Store release, then updates for new content and features." },
    ],
    timing: "A first version usually takes 8 to 16 weeks, depending on the content and features.",
    price: {
      headline: "A fixed quote after we agree the features and content with you.",
      factors: [
        "Amount of audio and text content",
        "Languages and translations",
        "Learning, recording or community features",
        "Admin tools for your team to add content",
      ],
    },
    proof: {
      project: "tilawat",
      story:
        "Tilawat is a Quran audio app for listening to reciters, saving playlists and recording your own recitation. We designed it and built it in Flutter for iPhone and Android, including tools for creators.",
    },
    alsoProjects: ["bible-study-fellowship"],
    notFit: [
      "If you only need to share recordings, a podcast or a well-organised YouTube channel may be enough to start.",
    ],
    faq: [
      { q: "Can the app show Arabic text correctly?", a: "Yes. We handle right-to-left layout, Arabic fonts and mixed Arabic and translation text." },
      { q: "Can listeners download recitations for offline use?", a: "Yes, with storage controls so the app does not fill up their phone." },
      { q: "Can we add our own teachers and content later?", a: "Yes. An admin panel lets your team upload audio, lessons and updates without a developer." },
      { q: "Will the app show ads?", a: "Only if you want it to. Many organisations prefer donations or a free app with no ads, and we design for that." },
    ],
    related: ["mobile-apps/flutter-app-development", "mobile-apps/ios-android-app-development", "growth/aso"],
    tools: ["Flutter", "Firebase", "Supabase", "Figma"],
    image: photo("aso"),
    imageAlt: "A phone on a wooden desk",
    closing: "Want an app your community will use every day?",
    updated: UPDATED,
  },
  {
    category: "mobile-apps",
    slug: "app-maintenance",
    metaTitle: "App Maintenance and Support for iOS and Android",
    metaDescription:
      "Keep your iOS and Android app working: OS and SDK updates, store policy changes, crash fixes and small improvements, every month.",
    h1: "App maintenance and support",
    lead:
      "We keep your iOS and Android app working and accepted in the stores: updating it for new phone software and store rules, fixing crashes, renewing certificates and shipping small improvements every month.",
    forWho:
      "Businesses with a live app whose original developer has moved on, or who want steady care without a full-time team.",
    problems: [
      "Google Play warned you that your app must be updated or it will be hidden.",
      "The app crashes on new phones and reviews are dropping.",
      "Nobody knows how to build and publish the app anymore.",
      "Small fixes take months because there is no one to do them.",
    ],
    deliverables: [
      { title: "Takeover review", body: "We get the app building again, document how it works and list the risks." },
      { title: "Platform updates", body: "Updates for new iOS and Android versions and each store's yearly requirements." },
      { title: "Crash monitoring", body: "Crash reports watched and the worst crashes fixed first." },
      { title: "Library and security updates", body: "Outdated packages and SDKs updated safely." },
      { title: "Monthly releases", body: "Fixes and small improvements shipped on a steady schedule." },
    ],
    steps: [
      { title: "Take over", body: "Access to code, stores and back end, and a first working build." },
      { title: "Stabilise", body: "Urgent store warnings and top crashes fixed." },
      { title: "Monthly care", body: "Updates, fixes and your requests each month." },
      { title: "Report", body: "A short monthly report on crashes, ratings and what shipped." },
    ],
    timing: "Takeover usually takes one to two weeks, then the plan runs month to month.",
    price: {
      headline: "A fixed monthly fee after the takeover review. No long contract.",
      factors: [
        "Flutter, React Native or native code",
        "Size of the app and back end",
        "Monthly allowance for improvements",
        "Response times for urgent issues",
      ],
    },
    facts: {
      title: "The yearly store deadline",
      intro: "Google Play raises the Android version apps must target every year. Apps that fall behind cannot publish updates.",
      items: [
        { label: "Required for new apps and updates from 31 August 2026", value: "Target Android 16 (API level 36) or higher" },
        { label: "Extension available on request until", value: "1 November 2026" },
      ],
      sources: [{ label: "Android Developers: Target API level requirements for Google Play", url: "https://developer.android.com/google/play/requirements/target-sdk" }],
    },
    proof: {
      project: "stock-stream",
      story:
        "Stock Stream is a live stock ticker with a personal watchlist, picture-in-picture and a full-screen view. We redesigned and rebuilt the app, including light and dark modes.",
    },
    notFit: [
      "If the app is built on technology that is no longer supported, a rebuild may cost less than keeping it alive. We will tell you after the review.",
    ],
    faq: [
      { q: "Can you maintain an app we did not build with you?", a: "Yes. Most of our maintenance clients come to us after their original developer moved on." },
      { q: "We do not have the source code. Can you help?", a: "We will help you recover access where possible. Without source code, a rebuild is usually needed." },
      { q: "Do you handle store warnings?", a: "Yes. We act on Google Play and App Store notices before deadlines." },
      { q: "Can we add new features too?", a: "Yes, within the monthly allowance, or as separate quoted projects." },
    ],
    related: ["mobile-apps/ios-android-app-development", "growth/aso", "growth/growth-support"],
    tools: ["Flutter", "React Native", "Firebase Crashlytics", "App Store Connect", "Google Play Console"],
    image: photo("mobile"),
    imageAlt: "Hands using an app on a phone",
    closing: "Want your app looked after?",
    updated: UPDATED,
  },
];
