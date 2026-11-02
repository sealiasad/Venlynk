import type { ServicePage } from "@/content/service-pages";

/**
 * Wave 5: corporate sites, migrations, hosting, CRM, payments, cloud,
 * cross-platform and store publishing, Shopify migration and audits,
 * Amazon and custom ecommerce, LLM integration, document AI, dashboard
 * design, technical and ecommerce SEO.
 * Same rules: plain words, real Venlynk proof only, no prices, no invented figures.
 */

const photo = (k: string) => `/images/services/${k}.webp`;
const UPDATED = "2026-11-02";

export const WAVE5_PAGES: ServicePage[] = [
  /* ============================ WEBSITES ============================ */
  {
    category: "websites",
    slug: "corporate-websites",
    metaTitle: "Business and Corporate Website Development",
    metaDescription:
      "Business and corporate websites that explain what you do in seconds, build trust with buyers and bring in enquiries. Easy for your team to update.",
    h1: "Business and corporate websites",
    lead:
      "We design and build company websites that tell visitors what you do, why they should trust you and how to get in touch, in the first few seconds. Your team can update pages, news and jobs without calling a developer.",
    forWho:
      "Established companies, service firms, manufacturers and B2B teams whose website no longer matches the size or quality of the business.",
    problems: [
      "Our website looks older than our company and embarrasses us in sales meetings.",
      "Visitors cannot tell what we actually do or who we do it for.",
      "Every small text change means waiting for a developer.",
      "We get traffic, but almost nobody fills in the contact form.",
    ],
    deliverables: [
      { title: "Clear message", body: "We work out your offer, your buyers and their questions, then write pages that answer them in plain words." },
      { title: "Design that builds trust", body: "A look that matches your brand, with proof up front: clients, case studies, certifications and the people behind the work." },
      { title: "Pages you can edit", body: "A content system your team learns in an hour, for pages, news, case studies and job openings." },
      { title: "Enquiries that arrive", body: "Contact forms, call buttons and WhatsApp links that reach the right inbox, with spam filtered out." },
      { title: "Search ready", body: "Fast pages, clean structure, titles and descriptions, and analytics set up from launch day." },
      { title: "Room to grow", body: "Extra languages, locations or service pages can be added later without a rebuild." },
    ],
    steps: [
      { title: "Discover", body: "One workshop on your services, buyers, competitors and goals." },
      { title: "Structure and words", body: "Sitemap and page copy agreed before design starts." },
      { title: "Design and build", body: "Designs approved page by page, then built and tested on phones and laptops." },
      { title: "Launch", body: "Old addresses redirected, analytics checked and your team trained." },
    ],
    timing: "Most company websites take a few weeks to a couple of months. The number of pages, languages and how ready your content is decide the timeline.",
    price: {
      headline: "You get a fixed quote once we agree the pages and features.",
      factors: ["Number of pages and templates", "Who writes the content", "Languages", "Integrations such as CRM or careers systems"],
    },
    proof: {
      project: "techoutsource",
      story:
        "TechOutsource is an Australian software house. We built a website that explains its services, shows its stack and pricing and lets visitors book a call.",
    },
    alsoProjects: ["care-foundation", "dxb-off-plan"],
    notFit: ["If you need a single page for one campaign, a landing page is quicker and cheaper."],
    faq: [
      { q: "Which platform will you use?", a: "WordPress when your team wants to edit everything themselves, Next.js when speed and custom features matter most. We recommend one after the first call." },
      { q: "Can you write the content for us?", a: "Yes. We interview your team and write the pages in plain words. You review and approve every page." },
      { q: "Will we lose our Google rankings?", a: "Not if the move is planned. We map every old address to its new page and keep what already ranks." },
      { q: "Do you host and look after the site?", a: "We can set up hosting and offer a monthly care plan, or hand everything over to your team." },
    ],
    related: ["websites/custom-website-development", "websites/website-redesign", "websites/wordpress-development"],
    tools: ["Figma", "WordPress", "Next.js", "Google Analytics", "Google Search Console"],
    image: photo("web"),
    imageAlt: "Company website shown on a laptop",
    closing: "Want a website that sells as well as your team does?",
    updated: UPDATED,
  },
  {
    category: "websites",
    slug: "wordpress-migration",
    metaTitle: "WordPress Migration Services",
    metaDescription:
      "Move your website to WordPress, or move WordPress to a new host, without losing content, rankings or email. Planned, tested and done with no downtime.",
    h1: "WordPress migration",
    lead:
      "We move websites onto WordPress, and WordPress sites onto better hosting, without losing pages, images, forms or Google rankings. You keep working while we move everything, and visitors never see a broken site.",
    forWho:
      "Businesses leaving Wix, Squarespace, an old custom CMS or a slow host, and teams merging several WordPress sites into one.",
    problems: [
      "Our current platform is limiting us, but we are scared of losing our rankings.",
      "Our host is slow, keeps going down or has become too expensive.",
      "We have years of blog posts and products and cannot copy them by hand.",
      "A previous move broke links, images and contact forms.",
    ],
    deliverables: [
      { title: "Full content move", body: "Pages, posts, images, products, users and forms moved with their structure intact." },
      { title: "Redirect map", body: "Every old address pointed to its new page, so links and rankings carry over." },
      { title: "Test copy first", body: "The new site is checked on a private copy before anything goes live." },
      { title: "No-downtime switch", body: "Domain, SSL and email moved in a planned window, with a way back if needed." },
      { title: "Clean-up on the way", body: "Unused plugins removed and slow parts fixed, so the new site starts faster." },
      { title: "Checks after launch", body: "Search Console, analytics, forms and speed checked in the days after the move." },
    ],
    steps: [
      { title: "Audit", body: "We list every page, plugin, form, integration and ranking that must survive." },
      { title: "Move to staging", body: "Content moved and rebuilt on a private copy for you to review." },
      { title: "Switch", body: "Go live in a quiet window with redirects, SSL and email in place." },
      { title: "Monitor", body: "Rankings, errors and forms watched for the weeks after launch." },
    ],
    timing: "A simple site moves in days. Large sites, stores or moves from other platforms take a few weeks.",
    price: {
      headline: "Every migration gets a fixed quote after the audit.",
      factors: ["Number of pages, posts and products", "Where you are moving from", "Custom features to rebuild", "Email and domain changes"],
    },
    proof: {
      project: "care-foundation",
      story:
        "CARE Foundation runs schools for children who would otherwise miss out. We redesigned their website and built it on WordPress so their own team can keep it up to date.",
    },
    alsoProjects: ["the-jumbo-jump", "dxb-off-plan"],
    notFit: ["If you are moving an online store, Shopify may serve you better than WordPress. We will tell you honestly."],
    faq: [
      { q: "Will we lose our Google rankings?", a: "Rankings can dip briefly after any move, but with a full redirect map and the same content they normally return. Moves without redirects are where rankings get lost." },
      { q: "Can you move us from Wix or Squarespace?", a: "Yes. Content is exported and rebuilt in WordPress, and the design is either recreated or refreshed." },
      { q: "Will our email stop working?", a: "No. We plan the domain and DNS changes so email keeps flowing during the switch." },
      { q: "Can you move several sites into one?", a: "Yes, into one site or a WordPress multisite, with redirects from every old domain." },
    ],
    related: ["websites/wordpress-development", "websites/wordpress-maintenance", "websites/wordpress-speed-optimisation"],
    tools: ["WordPress", "Google Search Console", "Google Analytics"],
    image: photo("web"),
    imageAlt: "Website being moved to WordPress",
    closing: "Ready to move without losing what you built?",
    updated: UPDATED,
  },
  {
    category: "websites",
    slug: "hosting-setup",
    metaTitle: "Website Hosting, Domain and Business Email Setup",
    metaDescription:
      "We set up your domain, hosting, SSL and business email properly, so your website is fast and secure and your emails land in inboxes, not spam.",
    h1: "Hosting, domain and email setup",
    lead:
      "We choose and set up the right hosting, connect your domain, add SSL and create business email that lands in inboxes. Everything is registered in your name, and you get a simple sheet of what is where.",
    forWho:
      "New businesses getting online for the first time, and companies whose domain, hosting and email were set up years ago by someone who has since left.",
    problems: [
      "Nobody knows who has the login for our domain.",
      "Our emails keep going to customers' spam folders.",
      "The site is slow and the host's support never helps.",
      "We pay for several hosting accounts and do not know what each one does.",
    ],
    deliverables: [
      { title: "Domain sorted", body: "Domain registered or recovered in your name, with renewal set so it never lapses." },
      { title: "Right hosting", body: "Hosting matched to your site and traffic, from managed WordPress to cloud servers for web apps." },
      { title: "SSL and security", body: "HTTPS everywhere, backups, firewall and updates switched on." },
      { title: "Business email", body: "Google Workspace or Microsoft 365 mailboxes on your domain, with SPF, DKIM and DMARC set so mail reaches inboxes." },
      { title: "Speed basics", body: "Caching and a CDN configured so pages load quickly in your customers' countries." },
      { title: "Handover sheet", body: "One document listing every account, renewal date and who to call." },
    ],
    steps: [
      { title: "Review", body: "We find every account, domain and mailbox you already have." },
      { title: "Plan", body: "We recommend the setup and agree costs before anything is bought." },
      { title: "Set up", body: "Hosting, domain, SSL and email configured and tested." },
      { title: "Hand over", body: "Logins and the handover sheet delivered, with ongoing care if you want it." },
    ],
    timing: "Usually a few days. Recovering a domain from a former supplier can take longer.",
    price: {
      headline: "Setup is quoted once we know what you already have. Hosting and email are billed by the providers, in your name.",
      factors: ["Number of domains and mailboxes", "Moving existing email", "Type of hosting", "Recovering lost accounts"],
    },
    notFit: ["If you need round-the-clock server operations for a large platform, see our cloud and DevOps service instead."],
    faq: [
      { q: "Who owns the accounts?", a: "You do. Everything is registered in your company's name and we are added as a user." },
      { q: "Why do our emails go to spam?", a: "Usually missing SPF, DKIM or DMARC records on your domain. We set them up and test delivery." },
      { q: "Can you move our existing email without losing messages?", a: "Yes. Old mail is migrated to the new mailboxes before the switch." },
      { q: "Which host do you recommend?", a: "It depends on the site. We often use Hostinger for business websites and cloud hosting for web apps." },
    ],
    related: ["websites/website-maintenance", "websites/wordpress-security", "websites/custom-website-development"],
    tools: ["WordPress", "Vercel", "Google Search Console"],
    image: photo("web"),
    imageAlt: "Website hosting and email setup",
    closing: "Want your domain, site and email set up properly once?",
    updated: UPDATED,
  },

  /* ============================ WEB APPS ============================ */
  {
    category: "web-apps",
    slug: "crm-development",
    metaTitle: "Custom CRM Development Company",
    metaDescription:
      "Custom CRM software built around how your team really sells: leads, follow-ups, pipelines and reports in one place, connected to your website, email and WhatsApp.",
    h1: "Custom CRM development",
    lead:
      "We build CRMs that fit the way your team actually sells, so leads stop getting lost in spreadsheets, inboxes and WhatsApp chats. Every enquiry, follow-up and deal sits in one place, with reports you can trust.",
    forWho:
      "Sales teams, agencies, real estate firms and service businesses that have outgrown spreadsheets, or found off-the-shelf CRMs too rigid or too expensive per seat.",
    problems: [
      "Leads from the website, calls and WhatsApp end up in different places.",
      "Nobody knows which deals are stuck or who should follow up.",
      "Our CRM charges per user and we only use a fraction of it.",
      "Management reports take a day of copying data every month.",
    ],
    deliverables: [
      { title: "Your pipeline", body: "Stages, fields and rules that match your sales process, not a generic template." },
      { title: "Leads in automatically", body: "Website forms, landing pages, email and WhatsApp feeding straight into the CRM." },
      { title: "Follow-up reminders", body: "Tasks, reminders and assignment rules so every lead gets a reply." },
      { title: "Roles and access", body: "Each person sees what they need, from sales reps to managers." },
      { title: "Reports", body: "Dashboards for pipeline value, conversion and team activity, updated live." },
      { title: "Connected", body: "Links to email, calendars, accounting, Odoo or your other systems through their APIs." },
    ],
    steps: [
      { title: "Map", body: "We sit with your team and map how a lead becomes a customer today." },
      { title: "Design", body: "Screens designed and clicked through as a prototype with real users." },
      { title: "Build", body: "Built in stages, with your team using early versions." },
      { title: "Move in", body: "Existing data imported, team trained and support in place." },
    ],
    timing: "A first version your team can use usually takes a couple of months. Integrations and data migration decide the rest.",
    price: {
      headline: "You get a fixed quote after we map your sales process.",
      factors: ["Number of user roles", "Lead sources and integrations", "Reports and dashboards", "Data to import"],
    },
    proof: {
      project: "dxb-off-plan",
      story:
        "DXB Off Plan is a property portal for people investing in Dubai's off plan projects. We built the listings, virtual tours and fast search, with a CRM behind it to manage enquiries.",
    },
    alsoProjects: ["servicemarket", "mnm-estates"],
    notFit: ["If a standard CRM such as HubSpot or Odoo fits your process, we will say so. Setting one up costs less than building."],
    faq: [
      { q: "Why custom instead of HubSpot or Salesforce?", a: "Custom makes sense when your process is unusual, per-seat fees add up, or you need the CRM inside your own product. Otherwise an existing CRM is often better." },
      { q: "Can it capture WhatsApp leads?", a: "Yes, through the WhatsApp Business API, with chats linked to the lead record." },
      { q: "Can you import our spreadsheets?", a: "Yes. We clean and import your existing contacts and deals before launch." },
      { q: "Who owns the code and data?", a: "You do. It runs on hosting in your name." },
    ],
    related: ["web-apps/custom-web-app-development", "web-apps/dashboard-development", "web-apps/portal-development"],
    tools: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "n8n"],
    image: photo("web"),
    imageAlt: "CRM pipeline dashboard",
    closing: "Ready to stop losing leads?",
    updated: UPDATED,
  },
  {
    category: "web-apps",
    slug: "payment-gateway-integration",
    metaTitle: "Payment Gateway Integration Services",
    metaDescription:
      "Stripe, PayPal and local payment gateway integration for websites, apps and platforms: one-off payments, subscriptions, refunds and payouts, built securely.",
    h1: "Payment gateway integration",
    lead:
      "We connect your website, app or platform to the payment gateways your customers trust, from Stripe and PayPal to local banks and wallets. Payments, subscriptions, refunds and receipts work reliably, and card details never touch your servers.",
    forWho:
      "Platforms, apps and online businesses that need to take payments, charge subscriptions or pay out to sellers, in one country or several.",
    problems: [
      "Customers abandon checkout because their usual payment method is missing.",
      "Payments go through but orders are not updated, or the other way round.",
      "Subscriptions, failed payments and refunds are handled by hand.",
      "We need to pay sellers or partners and are not sure how.",
    ],
    deliverables: [
      { title: "Right gateways", body: "Stripe, PayPal, Apple Pay, Google Pay and local gateways chosen for your markets." },
      { title: "Secure checkout", body: "Hosted or embedded payment fields, so card data stays with the gateway." },
      { title: "Subscriptions", body: "Plans, trials, upgrades, failed-payment retries and invoices handled automatically." },
      { title: "Webhooks done right", body: "Orders, access and emails update only when the payment is confirmed." },
      { title: "Refunds and disputes", body: "Admin tools for refunds, partial refunds and dispute evidence." },
      { title: "Marketplace payouts", body: "Split payments and payouts to sellers through tools like Stripe Connect." },
    ],
    steps: [
      { title: "Choose", body: "We match gateways to your countries, currencies and business model." },
      { title: "Set up", body: "Merchant accounts and test keys prepared with you." },
      { title: "Build and test", body: "Every success, failure and refund path tested in sandbox mode." },
      { title: "Go live", body: "Live keys switched on and the first real payments watched closely." },
    ],
    timing: "A standard checkout takes days. Subscriptions, marketplaces and several gateways take a few weeks.",
    price: {
      headline: "Integration is quoted once we know the gateways and payment flows. Gateway fees are charged by the provider.",
      factors: ["Number of gateways", "One-off payments or subscriptions", "Seller payouts", "Currencies and countries"],
    },
    proof: {
      project: "the-jumbo-jump",
      story:
        "The Jumbo Jump is home of the world's largest jumping castle. We built their website with slot booking and online payments, and it went live within a week.",
    },
    alsoProjects: ["frontline-ticketing", "buildbid"],
    notFit: ["If you sell on Shopify, its built-in payments usually cover what you need without custom work."],
    faq: [
      { q: "Which gateway should we use?", a: "Stripe is a strong default where it is available. In Pakistan and parts of the Gulf, local gateways and wallets are often needed alongside it." },
      { q: "Do we need PCI compliance?", a: "Using the gateway's hosted fields keeps card data off your servers and makes compliance much simpler." },
      { q: "Can customers pay in different currencies?", a: "Yes, where the gateway supports it, with prices shown in the customer's currency." },
      { q: "Can you add payments to our existing app?", a: "Yes. We review the app and add payments without rebuilding it." },
    ],
    related: ["web-apps/marketplace-development", "web-apps/saas-development", "web-apps/api-development"],
    tools: ["Stripe", "Next.js", "TypeScript", "PostgreSQL"],
    image: photo("commerce"),
    imageAlt: "Online checkout with payment options",
    closing: "Ready to take payments without the headaches?",
    updated: UPDATED,
  },
  {
    category: "web-apps",
    slug: "cloud-devops",
    metaTitle: "Cloud Hosting and DevOps Services",
    metaDescription:
      "AWS, Docker and cloud hosting set up and managed: automatic deployments, backups, monitoring and scaling, so your app stays fast and online.",
    h1: "Cloud and DevOps",
    lead:
      "We set up and look after the servers and pipelines behind your web app, on AWS, Vercel or VPS hosting, with Docker where it helps. Releases go out automatically, backups run every day and someone notices when something breaks.",
    forWho:
      "Startups and businesses running a web app, SaaS or API that need reliable hosting without hiring a full-time DevOps engineer.",
    problems: [
      "Releases are done by hand and something breaks every time.",
      "Our cloud bill keeps growing and nobody knows why.",
      "We found out the site was down from a customer.",
      "We are not sure our backups would actually restore.",
    ],
    deliverables: [
      { title: "Right-sized hosting", body: "AWS, Vercel or VPS setups sized to your traffic and budget." },
      { title: "Automatic deployments", body: "Code tested and released from Git with one merge, with an easy roll-back." },
      { title: "Containers", body: "Docker images so the app runs the same on every server." },
      { title: "Backups that restore", body: "Daily backups, tested restores and a written recovery plan." },
      { title: "Monitoring and alerts", body: "Uptime, errors and performance tracked, with alerts before customers notice." },
      { title: "Security basics", body: "Firewalls, secrets management, least-privilege access and updates." },
    ],
    steps: [
      { title: "Review", body: "We look at your current hosting, costs and release process." },
      { title: "Plan", body: "A target setup and migration plan agreed with you." },
      { title: "Build", body: "Pipelines, environments and monitoring set up and tested." },
      { title: "Run", body: "Ongoing care on a monthly plan, or a clean handover to your team." },
    ],
    timing: "A new setup takes one to a few weeks. Moving a live app is planned around a quiet window.",
    price: {
      headline: "Setup is a fixed quote. Ongoing care is a monthly plan. Cloud costs are billed to your account.",
      factors: ["Number of apps and environments", "Traffic and data size", "Uptime requirements", "Moving from current hosting"],
    },
    proof: {
      project: "buildbid",
      story:
        "BuildBid is our own marketplace where homeowners post renovation projects and contractors bid for the work. We built it in Next.js and run it live at buildbid.io.",
    },
    alsoProjects: ["servicemarket"],
    notFit: ["If you run a simple company website, managed hosting is enough. See hosting, domain and email setup."],
    faq: [
      { q: "AWS or something simpler?", a: "AWS when you need its range of services or have strict requirements. For many apps, Vercel or a well-managed VPS is cheaper and simpler." },
      { q: "Can you lower our cloud bill?", a: "Often, yes. Oversized servers, idle resources and missing caching are common causes." },
      { q: "Do you offer support outside office hours?", a: "Monitoring and alerts run around the clock. Response times are agreed in your care plan." },
      { q: "Who owns the cloud account?", a: "You do. We work inside your account with our own access." },
    ],
    related: ["web-apps/custom-web-app-development", "web-apps/saas-development", "websites/website-maintenance"],
    tools: ["Vercel", "Next.js", "PostgreSQL", "Sentry"],
    image: photo("web"),
    imageAlt: "Cloud servers and deployment pipeline",
    closing: "Want releases that do not keep you up at night?",
    updated: UPDATED,
  },

  /* ============================ MOBILE ============================ */
  {
    category: "mobile-apps",
    slug: "cross-platform-app-development",
    metaTitle: "Cross-Platform App Development (Flutter and React Native)",
    metaDescription:
      "One codebase, two apps: cross-platform iPhone and Android app development in Flutter and React Native. Faster to build, easier to maintain.",
    h1: "Cross-platform app development",
    lead:
      "We build your iPhone and Android apps from one shared codebase in Flutter or React Native, so you launch on both stores at the same time and pay for one build instead of two. The apps still look and feel right on each phone.",
    forWho:
      "Startups and businesses that need to reach customers on both iPhone and Android without doubling the budget or the maintenance.",
    problems: [
      "We cannot afford to build and maintain two separate apps.",
      "Our iPhone and Android apps never have the same features.",
      "Every change has to be made twice by two different teams.",
      "We were told cross-platform apps feel cheap and are unsure.",
    ],
    deliverables: [
      { title: "One codebase", body: "Most of the code shared between iPhone and Android, with native code where it helps." },
      { title: "Feels native", body: "Platform-specific details respected, so each app feels at home on its phone." },
      { title: "Device features", body: "Camera, maps, payments, notifications and offline support." },
      { title: "Both stores", body: "Released on the App Store and Google Play together." },
      { title: "Web too, if useful", body: "Flutter and React Native can also share screens with a web version." },
      { title: "Monitoring", body: "Crash and performance reporting from launch day." },
    ],
    steps: [
      { title: "Plan", body: "The first version agreed, and Flutter or React Native chosen for your case." },
      { title: "Design", body: "Screens designed and tested as a prototype on both platforms." },
      { title: "Build", body: "Weekly test builds on your iPhone and Android phones." },
      { title: "Launch", body: "Published on both stores, then supported and improved." },
    ],
    timing: "A focused first version usually takes a few months. Scope and integrations decide the timeline.",
    price: {
      headline: "Every app gets a fixed quote after we agree the first version.",
      factors: ["Number of screens and user roles", "Payments, maps and device features", "Back end and admin panel", "Offline support"],
    },
    proof: {
      project: "stock-stream",
      story:
        "Stock Stream is a live stock ticker with a personal watchlist, picture in picture and a full screen view. We redesigned and rebuilt it for iOS, Android and Windows.",
    },
    alsoProjects: ["tilawat", "frontline-ticketing"],
    notFit: ["If the app depends on advanced hardware or platform-only features, separate native apps can be the better choice."],
    faq: [
      { q: "Flutter or React Native?", a: "Flutter for highly custom, smooth interfaces; React Native when your team already works in React. Both are proven in large production apps." },
      { q: "Will users notice it is cross-platform?", a: "Not if it is built with care. Tilawat and Stock Stream are cross-platform apps." },
      { q: "Is it really cheaper?", a: "Usually, because one team builds and maintains one codebase. Some platform-specific work remains." },
      { q: "Can you take over our existing app?", a: "Yes. We review the code and tell you whether to improve it or rebuild it." },
    ],
    related: ["mobile-apps/flutter-app-development", "mobile-apps/react-native-app-development", "mobile-apps/ios-android-app-development"],
    tools: ["Flutter", "React Native", "Firebase", "App Store", "Google Play"],
    image: photo("mobile"),
    imageAlt: "The same app on an iPhone and an Android phone",
    closing: "Ready to launch on both stores at once?",
    updated: UPDATED,
  },
  {
    category: "mobile-apps",
    slug: "app-store-publishing",
    metaTitle: "App Store and Google Play Publishing Service",
    metaDescription:
      "We get your app published on the App Store and Google Play: developer accounts, listings, privacy forms, review responses and releases, handled for you.",
    h1: "App Store and Google Play publishing",
    lead:
      "We take your finished app through Apple's and Google's review and onto the stores, from developer accounts and screenshots to privacy forms and rejection replies. Your app goes live under your own name.",
    forWho:
      "Founders and teams whose app is built but stuck in store review, and businesses publishing an app for the first time.",
    problems: [
      "Apple rejected our app and we do not understand why.",
      "Google Play keeps asking for forms and declarations.",
      "We do not know which developer account we need.",
      "Our previous developer published the app under their own account.",
    ],
    deliverables: [
      { title: "Developer accounts", body: "Apple and Google accounts set up in your company's name, including organisation verification." },
      { title: "Store listings", body: "Titles, descriptions, keywords and screenshots that explain the app and help it get found." },
      { title: "Privacy and policy forms", body: "Privacy labels, Google's data safety form, content ratings and other declarations completed accurately." },
      { title: "Review handling", body: "Review notes, test accounts and replies to rejections, with fixes where needed." },
      { title: "Release setup", body: "Signing, testing tracks, phased releases and version numbering." },
      { title: "Account transfer", body: "Apps moved from a former developer's account to yours, where the stores allow it." },
    ],
    steps: [
      { title: "Check", body: "We review the app against current store guidelines before submitting." },
      { title: "Prepare", body: "Accounts, listings, forms and test access prepared." },
      { title: "Submit", body: "Submitted to both stores and followed through review." },
      { title: "Release", body: "Released to the public, or in stages, and monitored." },
    ],
    timing: "Preparation takes a few days. Store review times vary, and account verification can add time for new companies.",
    price: {
      headline: "Publishing is quoted per app. Store developer fees are paid to Apple and Google.",
      factors: ["One store or both", "New accounts or existing", "Rejections to resolve", "Account transfers"],
    },
    facts: {
      title: "Developer accounts you will need",
      intro: "Each store needs its own developer account, and the app should be published under your company, not your developer.",
      items: [
        { label: "Apple", value: "Apple Developer Program, renewed every year" },
        { label: "Google", value: "Google Play Console account, one-time registration" },
        { label: "Company accounts", value: "Need your business details verified before publishing" },
      ],
    },
    proof: {
      project: "tilawat",
      story:
        "Tilawat is a Quran audio app for listening to reciters, saving playlists and recording your own recitation. We designed it, built it in Flutter and published it for Android and iPhone.",
    },
    alsoProjects: ["stock-stream", "ice"],
    notFit: ["If the app still needs significant work to meet store rules, we fix that first under app maintenance."],
    faq: [
      { q: "Why was our app rejected?", a: "Common reasons are crashes, missing account deletion, unclear purchases or privacy details that do not match the app. We read the reviewer's notes and fix the cause." },
      { q: "Can you publish an app someone else built?", a: "Yes. We review it first so there are no surprises in review." },
      { q: "Should the app be under our account?", a: "Yes. Publishing under your own company account means you own the app and its reviews." },
      { q: "Can you help with store rankings too?", a: "Yes. See our app store optimisation service." },
    ],
    related: ["growth/aso", "mobile-apps/app-maintenance", "mobile-apps/ios-android-app-development"],
    tools: ["App Store", "Google Play", "Flutter", "React Native"],
    image: photo("aso"),
    imageAlt: "App listings on the App Store and Google Play",
    closing: "Ready to get your app live?",
    updated: UPDATED,
  },
  {
    category: "mobile-apps",
    slug: "web-to-app-conversion",
    metaTitle: "Turn Your Website or Web App into a Mobile App",
    metaDescription:
      "Turn your website, web app or store into a real iPhone and Android app with notifications, logins and store listings, without starting from zero.",
    h1: "Web app to mobile app",
    lead:
      "We turn your existing website, web app or online store into proper iPhone and Android apps, reusing your back end, accounts and content. Customers get push notifications, faster access and an app they can find in the stores.",
    forWho:
      "Businesses with a working website or web app whose customers keep asking for an app, and stores that want repeat buyers on their home screen.",
    problems: [
      "Customers keep asking if we have an app.",
      "We cannot send push notifications from a website.",
      "Building a separate app from scratch seems wasteful.",
      "A simple wrapper app was rejected by Apple.",
    ],
    deliverables: [
      { title: "The right approach", body: "A progressive web app, a hybrid app or a full Flutter or React Native app, chosen for your goals and budget." },
      { title: "Reused back end", body: "Your existing accounts, data and APIs connected, so nothing is duplicated." },
      { title: "App-only value", body: "Push notifications, saved login, offline access and device features that make the app worth installing." },
      { title: "Passes store review", body: "Designed to meet Apple's rules, which reject apps that are only a website in a frame." },
      { title: "Published for you", body: "Store listings, privacy forms and review handled." },
      { title: "Kept in sync", body: "Website and app updated together, from one set of content." },
    ],
    steps: [
      { title: "Review", body: "We check your site or web app and how it would work as an app." },
      { title: "Plan", body: "The approach and app-only features agreed." },
      { title: "Build", body: "Screens adapted for phones and connected to your back end." },
      { title: "Publish", body: "Released on both stores and supported." },
    ],
    timing: "Usually a few weeks to a couple of months, depending on the approach and how ready your back end is.",
    price: {
      headline: "You get a fixed quote after we review your website or web app.",
      factors: ["Approach chosen", "Screens to adapt", "Back end changes or APIs needed", "Notifications and device features"],
    },
    proof: {
      project: "frontline-ticketing",
      story:
        "Frontline Ticketing sells event tickets on iPhone, Android and the web. We redesigned the app and the website so customers get the same experience on every screen.",
    },
    alsoProjects: ["stock-stream"],
    notFit: ["If your website is not mobile friendly yet, fixing the website first is often the better investment."],
    faq: [
      { q: "Can't you just wrap our website in an app?", a: "Apple usually rejects apps that only show a website. We add real app features so it passes review and is worth installing." },
      { q: "What about a progressive web app?", a: "A PWA can be installed from the browser and is the lowest-cost option, but it is not listed in the App Store." },
      { q: "Will we have to maintain two systems?", a: "No. The app uses the same back end and content as your website." },
      { q: "Can you do this for our Shopify store?", a: "Yes. See our ecommerce app development service." },
    ],
    related: ["mobile-apps/cross-platform-app-development", "mobile-apps/ecommerce-app-development", "web-apps/api-development"],
    tools: ["Flutter", "React Native", "Firebase", "App Store", "Google Play"],
    image: photo("mobile"),
    imageAlt: "A website turned into a mobile app",
    closing: "Ready to put your business on your customers' home screens?",
    updated: UPDATED,
  },

  /* ============================ SHOPIFY ============================ */
  {
    category: "shopify",
    slug: "shopify-migration",
    metaTitle: "Shopify Migration Services",
    metaDescription:
      "Move your store to Shopify from WooCommerce, Wix, Squarespace, Magento, BigCommerce or Etsy, with products, customers, orders and rankings kept.",
    h1: "Migration to Shopify",
    lead:
      "We move your online store to Shopify with your products, customers, order history and Google rankings intact. Your store keeps selling while we work, and the switch happens in one planned step.",
    forWho:
      "Store owners on WooCommerce, Wix, Squarespace, Magento, BigCommerce or Etsy who want a store that is easier to run and grow.",
    problems: [
      "Our current store breaks every time a plugin updates.",
      "Hosting, security and speed take too much of our time.",
      "We have thousands of products and cannot move them by hand.",
      "We are worried about losing customers, reviews and rankings.",
    ],
    deliverables: [
      { title: "Products moved", body: "Products, variants, images, collections and inventory imported and checked." },
      { title: "Customers and orders", body: "Customer accounts and order history moved where the platforms allow." },
      { title: "Redirects", body: "Every old product and page address redirected to its new home." },
      { title: "Store design", body: "Your current look rebuilt in a Shopify theme, or a fresh design." },
      { title: "Apps and payments", body: "Payments, shipping, reviews and email apps set up to replace what you had." },
      { title: "Planned switch", body: "Domain moved and the store launched in a quiet window, with checks after." },
    ],
    steps: [
      { title: "Audit", body: "We list your data, features, apps and rankings that must carry over." },
      { title: "Build", body: "The new store built and filled on Shopify while the old one keeps selling." },
      { title: "Test", body: "Test orders, payments, emails and redirects checked." },
      { title: "Launch", body: "Domain switched and the first days of orders watched closely." },
    ],
    timing: "A small store moves in a couple of weeks. Large catalogues and custom features take longer.",
    price: {
      headline: "Every migration gets a fixed quote after the audit.",
      factors: ["Number of products and variants", "Where you are moving from", "Customer and order history", "Design: recreated or new"],
    },
    proof: {
      project: "replay",
      story:
        "Replay is an online store for shoes and clothing. We built it on Shopify around easy browsing by category and a quick checkout on mobile.",
    },
    alsoProjects: ["the-heavenly-scents", "stylefits"],
    notFit: ["If you rely on complex custom checkout rules that Shopify does not allow, we will tell you before you move."],
    faq: [
      { q: "Will we lose our Google rankings?", a: "Not if the redirects are done properly. We redirect every old address to the matching new page." },
      { q: "Can customers keep their passwords?", a: "Passwords cannot be moved between platforms. Customers are invited to set a new one, which most do on their next order." },
      { q: "Can you move our reviews?", a: "Usually, yes, through the review app's import tools." },
      { q: "Moving from WooCommerce?", a: "See our dedicated WooCommerce to Shopify page." },
    ],
    related: ["shopify/woocommerce-to-shopify", "shopify/shopify-store-setup", "shopify/shopify-development"],
    tools: ["Shopify", "WooCommerce", "Google Search Console"],
    image: photo("commerce"),
    imageAlt: "Online store moving to Shopify",
    closing: "Ready to move to a store that is easier to run?",
    updated: UPDATED,
  },
  {
    category: "shopify",
    slug: "shopify-store-audit",
    metaTitle: "Shopify Store Audit",
    metaDescription:
      "A clear Shopify store audit covering speed, design, checkout, apps, SEO and tracking, with a ranked list of fixes that will bring in more sales.",
    h1: "Shopify store audit",
    lead:
      "We review your Shopify store the way a new customer and a search engine see it, then give you a ranked list of what to fix first. You get plain explanations, not a 50-page report full of jargon.",
    forWho:
      "Shopify store owners whose traffic is fine but sales are not, or who want a second opinion before spending on ads or a redesign.",
    problems: [
      "People visit the store but very few buy.",
      "The store feels slow, especially on phones.",
      "We have installed lots of apps and are not sure what they all do.",
      "Our sales numbers in Shopify, Google and Meta never match.",
    ],
    deliverables: [
      { title: "Speed check", body: "Page speed on real phones, slow apps and heavy images identified." },
      { title: "Shopping journey", body: "Home, collection, product, cart and checkout reviewed for anything that stops a purchase." },
      { title: "Trust and content", body: "Product pages, photos, reviews, delivery and returns information checked." },
      { title: "Apps review", body: "Every app listed with what it costs, what it does and whether to keep it." },
      { title: "SEO and tracking", body: "Search basics, structured data and analytics and pixel setup checked." },
      { title: "Ranked fix list", body: "Every finding ranked by likely impact and effort, with who should fix it." },
    ],
    steps: [
      { title: "Access", body: "You give us staff access to the store and analytics." },
      { title: "Review", body: "We go through the store on phone and desktop, and through the data." },
      { title: "Report", body: "A short, ranked list of fixes with screenshots." },
      { title: "Walkthrough", body: "A call to go through the findings, then we can fix them for you if you want." },
    ],
    timing: "Usually about a week from access to walkthrough.",
    price: {
      headline: "The audit is a fixed price, quoted before we start.",
      factors: ["Store size", "Number of markets and languages", "Depth of the tracking review"],
    },
    proof: {
      project: "stylefits",
      story:
        "StyleFits sells abayas, hijabs and co-ord sets online. We set the store up on Shopify with a size and length finder so shoppers pick the right fit.",
    },
    alsoProjects: ["replay", "the-heavenly-scents"],
    notFit: ["If your store is brand new with no traffic yet, start with getting visitors. An audit is most useful once people are shopping."],
    faq: [
      { q: "What do you need from us?", a: "Staff access to Shopify and view access to your analytics. No passwords are shared." },
      { q: "Will you change anything during the audit?", a: "No. We only look. Fixes happen afterwards, by us or your team." },
      { q: "Can you fix what you find?", a: "Yes. Most fixes can be done within a few weeks, and we quote them separately." },
      { q: "Is this the same as a UX audit?", a: "It includes UX, but also speed, apps, SEO and tracking specific to Shopify." },
    ],
    related: ["shopify/shopify-speed-optimisation", "shopify/shopify-seo", "design/ux-audit"],
    tools: ["Shopify", "Google Analytics", "Hotjar", "Google Search Console"],
    image: photo("commerce"),
    imageAlt: "Shopify store being reviewed",
    closing: "Want to know exactly why visitors are not buying?",
    updated: UPDATED,
  },

  /* ============================ ECOMMERCE ============================ */
  {
    category: "ecommerce",
    slug: "amazon-store-setup",
    metaTitle: "Amazon Store Setup and Seller Central Help",
    metaDescription:
      "Amazon seller account setup, product listings, brand store and fulfilment options handled, so you can start selling on Amazon without the confusion.",
    h1: "Amazon store setup",
    lead:
      "We set up your Amazon seller account, list your products properly and build your brand store, so you start selling without weeks of trial and error. We also connect Amazon to your website stock where possible.",
    forWho:
      "Brands and online stores that want to sell on Amazon in the US, UK, UAE, Saudi Arabia or other Amazon marketplaces.",
    problems: [
      "Seller Central is confusing and our account is stuck in verification.",
      "Our listings get no views and we do not know why.",
      "We are not sure whether to use Amazon's fulfilment or ship ourselves.",
      "Keeping stock in sync between Amazon and our website is a daily chore.",
    ],
    deliverables: [
      { title: "Seller account", body: "Account setup and verification help in the right marketplace for you." },
      { title: "Product listings", body: "Titles, bullet points, descriptions and images that follow Amazon's rules and help shoppers choose." },
      { title: "Brand store", body: "A branded storefront page and Brand Registry guidance if you own a trademark." },
      { title: "Fulfilment plan", body: "Fulfilled by Amazon or self-fulfilled, explained and set up." },
      { title: "Stock in sync", body: "Inventory linked with Shopify, WooCommerce or Odoo where possible." },
      { title: "Launch checklist", body: "Pricing, shipping templates and account health checked before going live." },
    ],
    steps: [
      { title: "Plan", body: "Marketplace, products and fulfilment model agreed." },
      { title: "Set up", body: "Account, brand and shipping settings configured." },
      { title: "List", body: "Products listed and checked for errors." },
      { title: "Launch", body: "Store live, with a list of next steps for growth." },
    ],
    timing: "Setup usually takes one to a few weeks. Account verification and Brand Registry can take longer.",
    price: {
      headline: "Setup is quoted by catalogue size. Amazon's selling fees are charged by Amazon.",
      factors: ["Number of products", "Marketplaces", "Brand store design", "Inventory integration"],
    },
    notFit: ["We set stores up and connect systems. If you need full-time Amazon advertising management, we will point you to a specialist."],
    faq: [
      { q: "Which Amazon marketplace should we start with?", a: "The one where your customers already are. For Gulf brands that is often Amazon.ae or Amazon.sa; for UK and US buyers, Amazon.co.uk or Amazon.com." },
      { q: "Do we need a trademark?", a: "Not to sell, but you need one for Brand Registry, which protects your listings and unlocks brand features." },
      { q: "Can you sync Amazon with our Shopify store?", a: "Yes, through connector apps or Odoo, so stock updates in both places." },
      { q: "Do you also set up Noon?", a: "Yes. See our Noon and Amazon.ae setup page." },
    ],
    related: ["ecommerce/noon-store-setup", "ecommerce/etsy-store-setup", "ecommerce/odoo-ecommerce-integration"],
    tools: ["Shopify", "WooCommerce", "Odoo"],
    image: photo("commerce"),
    imageAlt: "Products listed on an online marketplace",
    closing: "Ready to start selling on Amazon?",
    updated: UPDATED,
  },
  {
    category: "ecommerce",
    slug: "custom-ecommerce-development",
    metaTitle: "Custom Ecommerce Website Development",
    metaDescription:
      "Custom ecommerce development for stores that outgrow Shopify or WooCommerce: unusual products, pricing, checkout rules or marketplaces, built to fit.",
    h1: "Custom ecommerce development",
    lead:
      "We build custom online stores for businesses whose products, pricing or checkout do not fit a standard platform. You get exactly the buying experience your customers need, with an admin your team can run.",
    forWho:
      "Businesses with configurable products, B2B pricing, bookings mixed with products, several sellers or rules that Shopify and WooCommerce cannot handle cleanly.",
    problems: [
      "Our products need options and pricing rules no theme can show.",
      "We have stacked so many apps and plugins that the store is fragile.",
      "Business customers need their own prices, credit and approval steps.",
      "Platform fees grow with every sale and limit what we can change.",
    ],
    deliverables: [
      { title: "Custom buying journey", body: "Product configurators, bundles, quotes and checkout steps designed around your products." },
      { title: "Pricing rules", body: "Customer-specific prices, volume discounts, tax and multi-currency handled properly." },
      { title: "Admin your team can use", body: "Orders, products, stock and customers managed in a dashboard built for your workflow." },
      { title: "Payments and shipping", body: "Gateways, couriers and delivery rules for the countries you sell in." },
      { title: "Fast and findable", body: "Built in Next.js for speed, with clean SEO and structured data." },
      { title: "Connected", body: "Linked to Odoo, ERPs, accounting or marketplaces through their APIs." },
    ],
    steps: [
      { title: "Discover", body: "We map your products, pricing and order process, and check if a platform could fit." },
      { title: "Design", body: "The shopping journey prototyped and tested with real customers." },
      { title: "Build", body: "Built in stages with regular demos." },
      { title: "Launch", body: "Data imported, team trained and the first orders watched closely." },
    ],
    timing: "Usually a few months, depending on the products, integrations and admin features.",
    price: {
      headline: "You get a fixed quote after discovery.",
      factors: ["Product and pricing complexity", "Integrations", "Admin features", "Number of countries and currencies"],
    },
    proof: {
      project: "buildbid",
      story:
        "BuildBid is our own marketplace where homeowners post renovation projects and contractors bid for the work. We designed and built it in Next.js, and it is live at buildbid.io.",
    },
    alsoProjects: ["servicemarket", "dxb-off-plan"],
    notFit: ["If Shopify or WooCommerce can do what you need, they are faster and cheaper. We will tell you honestly after discovery."],
    faq: [
      { q: "Why not just use Shopify?", a: "Shopify is the right answer for most stores. Custom makes sense when your products, pricing or checkout would need too many workarounds." },
      { q: "Is a custom store harder to run?", a: "Not if it is built well. We design the admin around how your team works and train them." },
      { q: "Can you go headless with Shopify instead?", a: "Yes. A custom front end on Shopify's back end is often a good middle path." },
      { q: "Who owns the code?", a: "You do, on hosting in your name." },
    ],
    related: ["ecommerce/ecommerce-development", "web-apps/marketplace-development", "web-apps/payment-gateway-integration"],
    tools: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Odoo"],
    image: photo("commerce"),
    imageAlt: "Custom online store on a laptop and phone",
    closing: "Ready for a store that fits your business?",
    updated: UPDATED,
  },

  /* ============================ AI ============================ */
  {
    category: "ai-agents",
    slug: "llm-integration",
    metaTitle: "OpenAI, Claude and Gemini Integration Services",
    metaDescription:
      "We add OpenAI, Claude and Gemini to your website, app or internal tools: chat, search, writing and automation features that are reliable, safe and cost-controlled.",
    h1: "OpenAI, Claude and Gemini integration",
    lead:
      "We connect large language models from OpenAI, Anthropic (Claude) and Google (Gemini) to your product and systems, so features like smart search, writing help and automated replies work reliably. We choose the model for each job and keep costs and data under control.",
    forWho:
      "Product teams and businesses that want to add AI features to an existing website, app or internal tool, without rebuilding it.",
    problems: [
      "We want AI in our product but do not know where to start.",
      "Our AI prototype works in a demo but gives wrong answers with real users.",
      "We are worried about customer data being sent to AI providers.",
      "AI costs are unpredictable and creeping up.",
    ],
    deliverables: [
      { title: "Right model per task", body: "OpenAI, Claude, Gemini or open models chosen for quality, speed and cost." },
      { title: "Grounded answers", body: "Models connected to your own data, so answers come from your content, not guesses." },
      { title: "Structured output", body: "Responses returned in formats your app can rely on, with validation." },
      { title: "Guardrails", body: "Limits on what the AI can say and do, plus human review where it matters." },
      { title: "Data handling", body: "Personal data minimised or masked, and provider settings chosen so your data is not used for training." },
      { title: "Cost and quality tracking", body: "Usage, cost per feature and answer quality monitored over time." },
    ],
    steps: [
      { title: "Choose", body: "We agree the one or two AI features most worth building first." },
      { title: "Prototype", body: "A working version tested on your real data." },
      { title: "Build in", body: "Integrated into your product with guardrails and monitoring." },
      { title: "Improve", body: "Answers reviewed and prompts and data improved over time." },
    ],
    timing: "A first AI feature usually takes a few weeks. Deeper integrations take longer.",
    price: {
      headline: "Each feature gets a fixed quote. Model usage is billed by the provider, to your account.",
      factors: ["Number of features", "Data sources to connect", "Volume of usage", "Privacy and compliance needs"],
    },
    notFit: ["If you need a full assistant that takes actions across your systems, see AI agent development."],
    faq: [
      { q: "Which is best: OpenAI, Claude or Gemini?", a: "It depends on the task. We often use different models for different features and can switch as models improve." },
      { q: "Will our data be used to train their models?", a: "Business API terms from these providers generally exclude training on your data by default. We check the current terms and settings for your case." },
      { q: "Can AI make mistakes?", a: "Yes. We reduce them with your own data, validation and human review for sensitive actions." },
      { q: "Can you add AI to our existing app?", a: "Yes. That is what this service is for." },
    ],
    related: ["ai-agents/ai-agent-development", "ai-agents/rag-development", "ai-agents/ai-chatbot-development"],
    tools: ["OpenAI", "Claude", "Gemini", "Python", "Next.js"],
    image: photo("ai"),
    imageAlt: "AI features inside a product",
    closing: "Ready to add AI that actually works?",
    updated: UPDATED,
  },
  {
    category: "ai-agents",
    slug: "ai-document-processing",
    metaTitle: "AI Document Processing and Data Extraction",
    metaDescription:
      "AI that reads invoices, forms, contracts and receipts, pulls out the data and enters it into your systems, with human checks where accuracy matters.",
    h1: "Document processing and extraction",
    lead:
      "We build AI that reads your invoices, forms, contracts, IDs and receipts, pulls out the details and puts them straight into your spreadsheets, CRM or accounting system. Your team only checks what the AI is unsure about.",
    forWho:
      "Finance, operations, logistics and admin teams that spend hours copying data out of PDFs, scans and emails.",
    problems: [
      "Our team types data from invoices and forms into the system by hand.",
      "Documents arrive by email, WhatsApp and scanner in every format.",
      "Copying errors cause wrong payments and unhappy customers.",
      "We cannot hire fast enough to keep up with the paperwork.",
    ],
    deliverables: [
      { title: "Reads any format", body: "PDFs, scans, photos and email attachments, including messy and handwritten ones." },
      { title: "Pulls out the details", body: "Names, dates, amounts, line items and other fields extracted into structured data." },
      { title: "Checks and flags", body: "Totals and rules checked, and unclear fields flagged for a person to confirm." },
      { title: "Straight into your systems", body: "Data sent to Google Sheets, your CRM, Odoo or accounting tools." },
      { title: "Review screen", body: "A simple screen for your team to approve or correct flagged documents." },
      { title: "Accuracy tracking", body: "Results measured over time so accuracy improves." },
    ],
    steps: [
      { title: "Sample", body: "You share a batch of real documents and where the data must go." },
      { title: "Prototype", body: "We test extraction on your samples and show the accuracy." },
      { title: "Build", body: "The full flow built with review steps and integrations." },
      { title: "Run", body: "Live with your team, monitored and improved." },
    ],
    timing: "A prototype on your documents usually takes a week or two. The full flow takes a few weeks.",
    price: {
      headline: "You get a fixed quote after the prototype. AI usage is billed by the provider.",
      factors: ["Number of document types", "Monthly volume", "Systems to connect", "Review and approval steps"],
    },
    notFit: ["If you only process a handful of documents a month, a simple form may be cheaper than AI."],
    faq: [
      { q: "How accurate is it?", a: "It depends on document quality. We measure accuracy on your own samples before you commit, and route uncertain fields to a person." },
      { q: "Can it read Urdu or Arabic documents?", a: "Modern models handle many languages, including Arabic and Urdu. We test on your real documents first." },
      { q: "Is our data safe?", a: "We use business API terms, minimise stored data and can keep files in your own cloud account." },
      { q: "Can it work from our email inbox?", a: "Yes. Attachments can be picked up automatically from a shared inbox." },
    ],
    related: ["ai-agents/workflow-automation", "ai-agents/llm-integration", "ai-agents/ai-agent-development"],
    tools: ["OpenAI", "Claude", "Gemini", "Python", "n8n", "Google Sheets"],
    image: photo("ai"),
    imageAlt: "Invoice data extracted by AI",
    closing: "Ready to stop typing data from documents?",
    updated: UPDATED,
  },

  /* ============================ DESIGN ============================ */
  {
    category: "design",
    slug: "dashboard-design",
    metaTitle: "Web App and Dashboard Design",
    metaDescription:
      "Web app and dashboard UI/UX design that makes complex data and workflows easy: admin panels, portals and SaaS products your users understand at a glance.",
    h1: "Web app and dashboard design",
    lead:
      "We design web apps, admin panels and dashboards that make complex work simple, so users find what they need without training. You get tested designs and a component library your developers can build from.",
    forWho:
      "SaaS teams, startups and businesses building or fixing a web app, portal or internal tool that users find confusing.",
    problems: [
      "Users keep asking support how to do basic tasks.",
      "Our dashboard shows lots of numbers but nobody knows what to do with them.",
      "Every new feature makes the app more cluttered.",
      "Developers build screens without designs, so nothing looks consistent.",
    ],
    deliverables: [
      { title: "User flows", body: "The key tasks mapped and simplified before any screen is drawn." },
      { title: "Dashboards that guide", body: "Charts and numbers chosen for the decisions users make, with clear next actions." },
      { title: "Tables and forms", body: "Filtering, bulk actions and forms designed for people who use them all day." },
      { title: "Tested prototypes", body: "Clickable prototypes tested with real users before development." },
      { title: "Design system", body: "Components, states and rules in Figma so every screen stays consistent." },
      { title: "Developer handover", body: "Specs, responsive behaviour and edge cases documented for your developers." },
    ],
    steps: [
      { title: "Understand", body: "Interviews with users and a review of the current product." },
      { title: "Structure", body: "Navigation and key flows agreed as wireframes." },
      { title: "Design", body: "High-fidelity screens and prototypes tested with users." },
      { title: "Hand over", body: "Design system and specs delivered, with support during the build." },
    ],
    timing: "A first set of core screens usually takes a few weeks. Larger products are designed in stages.",
    price: {
      headline: "You get a fixed quote after we agree the scope.",
      factors: ["Number of screens and user roles", "User research and testing", "Design system depth", "Support during development"],
    },
    proof: {
      project: "servicemarket",
      story:
        "ServiceMarket is the UAE's marketplace for cleaning, moving and home maintenance. We work on their web portal on a monthly retainer, including booking flows and new pages.",
    },
    alsoProjects: ["insaf-academy", "stock-stream"],
    notFit: ["If you need a marketing website rather than a product, see our website design service."],
    faq: [
      { q: "Do you also build what you design?", a: "Yes. We can design only, or design and build the web app." },
      { q: "Can you redesign our existing dashboard?", a: "Yes. We usually start with a UX audit to find the biggest problems first." },
      { q: "What do our developers receive?", a: "Figma files with components, states, spacing rules and notes for every screen." },
      { q: "Do you test with real users?", a: "Yes, with prototypes, before anything is built." },
    ],
    related: ["design/saas-design", "design/ui-ux-design", "web-apps/dashboard-development"],
    tools: ["Figma", "Maze", "Hotjar"],
    image: photo("ux"),
    imageAlt: "Web app dashboard design",
    closing: "Ready for a product your users understand?",
    updated: UPDATED,
  },

  /* ============================ GROWTH ============================ */
  {
    category: "growth",
    slug: "technical-seo",
    metaTitle: "Technical SEO Services",
    metaDescription:
      "Technical SEO that fixes what stops Google from finding and ranking your pages: crawling, indexing, speed, structured data, redirects and international setup.",
    h1: "Technical SEO",
    lead:
      "We find and fix the technical problems that stop Google and AI search from finding, understanding and ranking your pages. Because we are developers as well, we fix them in the code, not just in a report.",
    forWho:
      "Businesses with good content that still does not rank, sites after a redesign or migration, and stores or platforms with thousands of pages.",
    problems: [
      "Our pages are not showing up in Google at all.",
      "Traffic dropped after we redesigned or moved the site.",
      "Search Console is full of errors we do not understand.",
      "Our site is slow and Core Web Vitals are failing.",
    ],
    deliverables: [
      { title: "Crawl and index check", body: "Robots rules, sitemaps, canonicals and noindex tags checked so the right pages get indexed." },
      { title: "Speed and Core Web Vitals", body: "Slow loading, layout shifts and heavy scripts fixed in the code." },
      { title: "Structured data", body: "Schema for your business, services, products, articles and FAQs." },
      { title: "Redirects and errors", body: "Broken links, redirect chains and 404s cleaned up." },
      { title: "International setup", body: "Hreflang and country pages set up correctly for multilingual and multi-country sites." },
      { title: "Monitoring", body: "Search Console and alerts set so new problems are caught early." },
    ],
    steps: [
      { title: "Audit", body: "A full crawl, Search Console review and speed tests." },
      { title: "Prioritise", body: "Issues ranked by how much traffic they cost you." },
      { title: "Fix", body: "We fix them in your site's code or CMS, or brief your developers." },
      { title: "Track", body: "Indexing, rankings and traffic tracked after the fixes." },
    ],
    timing: "The audit takes about a week. Fixes usually take a few weeks, and results show as Google recrawls the site.",
    price: {
      headline: "The audit is a fixed price. Fixes are quoted from the findings.",
      factors: ["Number of pages", "Platform and how much we can change", "Languages and countries", "Speed work needed"],
    },
    proof: {
      project: "dxb-off-plan",
      story:
        "DXB Off Plan is a property portal for Dubai's off plan projects, with listings, virtual tours and fast search. We built it with clean structure and speed so listings can be found in search.",
    },
    alsoProjects: ["the-heavenly-scents"],
    notFit: ["If your site has very little content yet, start with content and local SEO before deep technical work."],
    faq: [
      { q: "How is technical SEO different from normal SEO?", a: "Normal SEO covers content and links. Technical SEO makes sure search engines can reach, read and trust your pages in the first place." },
      { q: "Can you fix our traffic drop after a redesign?", a: "Often, yes. Missing redirects and blocked pages are common causes, and we can trace them." },
      { q: "Do you work on WordPress, Shopify and Next.js?", a: "Yes, all three, plus custom platforms." },
      { q: "Does it help with AI search too?", a: "Yes. AI search tools rely on the same clean, crawlable, well-structured pages." },
    ],
    related: ["growth/seo", "growth/aeo", "websites/wordpress-speed-optimisation"],
    tools: ["Google Search Console", "Google Analytics", "Semrush", "Next.js", "WordPress"],
    image: photo("seo"),
    imageAlt: "Technical SEO report and site structure",
    closing: "Ready for Google to see all your pages?",
    updated: UPDATED,
  },
  {
    category: "growth",
    slug: "ecommerce-seo",
    metaTitle: "Ecommerce SEO Services",
    metaDescription:
      "Ecommerce SEO for Shopify, WooCommerce and custom stores: category and product pages that rank, clean filters, product schema and content that sells.",
    h1: "Ecommerce SEO",
    lead:
      "We help online stores rank for the searches their buyers make, from category pages to individual products. That means fixing the store's structure, writing pages that sell, and setting up product data that Google and AI shopping results understand.",
    forWho:
      "Shopify, WooCommerce and custom stores that rely on paid ads and want more sales from search, in one country or several.",
    problems: [
      "Almost all our sales come from ads, and ad costs keep rising.",
      "Our category pages are just product grids with no text.",
      "Product descriptions are copied from the supplier.",
      "Filters and variants create thousands of duplicate pages.",
    ],
    deliverables: [
      { title: "Keyword map", body: "The searches your buyers make, matched to categories, products and guides." },
      { title: "Category pages that rank", body: "Helpful copy, internal links and FAQs added without burying the products." },
      { title: "Product pages", body: "Unique descriptions, titles and image text that answer buyers' questions." },
      { title: "Product schema", body: "Price, stock and review data marked up for rich results and shopping listings." },
      { title: "Clean structure", body: "Filters, variants and pagination handled so search engines do not waste time on duplicates." },
      { title: "Monthly reporting", body: "Organic sales, rankings and next actions in a short monthly report." },
    ],
    steps: [
      { title: "Audit", body: "Store structure, content and technical setup reviewed." },
      { title: "Plan", body: "Keyword map and priority pages agreed." },
      { title: "Improve", body: "Pages, structure and schema improved in order of impact." },
      { title: "Grow", body: "Monthly content and fixes, tracked against organic sales." },
    ],
    timing: "Fixes start in the first weeks. Rankings usually build over several months, depending on competition.",
    price: {
      headline: "Ecommerce SEO is a monthly plan, quoted after the audit.",
      factors: ["Number of products and categories", "Countries and languages", "Content to write", "Competition in your market"],
    },
    proof: {
      project: "the-heavenly-scents",
      story:
        "The Heavenly Scents is a fragrance brand selling perfume online. We designed and built a clean Shopify store that lets the bottles do the talking.",
    },
    alsoProjects: ["replay", "stylefits"],
    notFit: ["If you need sales within weeks, paid ads will be faster. SEO pays back over months, not days."],
    faq: [
      { q: "How long until we see results?", a: "Technical fixes can help within weeks. Ranking new category and product pages usually takes a few months." },
      { q: "Do you write product descriptions?", a: "Yes, in plain, helpful language, starting with your best-selling and highest-margin products." },
      { q: "Is Shopify good for SEO?", a: "Yes, with a few known limits we work around. See our Shopify SEO page for details." },
      { q: "Can you do SEO for several countries?", a: "Yes, with country or language versions set up correctly so each ranks in its own market." },
    ],
    related: ["shopify/shopify-seo", "growth/technical-seo", "growth/seo"],
    tools: ["Shopify", "WooCommerce", "Google Search Console", "Google Analytics", "Semrush"],
    image: photo("seo"),
    imageAlt: "Online store ranking in search results",
    closing: "Ready to sell more without paying for every click?",
    updated: UPDATED,
  },
];
