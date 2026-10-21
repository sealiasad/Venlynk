import type { ServicePage } from "@/content/service-pages";

/** Wave 2: Shopify, ecommerce, AI agents and design. Same writing rules as service-pages.ts. */

const photo = (k: string) => `/images/services/${k}.webp`;
const UPDATED = "2026-10-21";

export const COMMERCE_PAGES: ServicePage[] = [
  /* ============================ SHOPIFY ============================ */
  {
    category: "shopify",
    slug: "shopify-theme-development",
    metaTitle: "Custom Shopify Theme Development",
    metaDescription:
      "Custom Shopify themes built around your brand and products, with sections your team can rearrange in the theme editor. Fast on mobile.",
    h1: "Custom Shopify theme development",
    lead:
      "We design and build custom Shopify themes around your brand and the way your customers shop. Every part is a section your team can rearrange in the Shopify editor, so new campaigns and pages need no developer.",
    forWho:
      "Brands whose products, story or shopping journey do not fit a ready-made theme, or who have outgrown heavy theme customisations.",
    problems: [
      "Your store looks like thousands of others using the same theme.",
      "Years of edits have made the theme fragile, and updates break it.",
      "Showing your products properly needs layouts the theme does not offer.",
      "The theme loads features you never use, and the store is slow on phones.",
    ],
    deliverables: [
      { title: "Brand-led design", body: "Home, collection, product, cart and content pages designed for your brand in Figma, mobile first." },
      { title: "Sections your team controls", body: "Every block is a theme section with settings, so your team builds pages in the editor." },
      { title: "Product page built to sell", body: "Variant pickers, size guides, delivery info and reviews arranged around what your buyers ask." },
      { title: "Lean code", body: "Only the code your store needs, so pages load fast and pass Google's speed checks." },
      { title: "Clean handover", body: "Documented theme, version control and a walkthrough of the editor." },
    ],
    steps: [
      { title: "Review the store", body: "Your analytics, products and current theme reviewed with you." },
      { title: "Design", body: "Key templates designed and approved before development." },
      { title: "Build on a copy", body: "Built as an unpublished theme so the live store keeps selling." },
      { title: "Switch over", body: "Published once you approve, with a check of every template on real phones." },
    ],
    timing: "A custom theme usually takes several weeks, depending on how many templates and custom features it needs.",
    price: {
      headline: "Every custom theme gets a fixed quote after the store review.",
      factors: [
        "Number of templates and custom sections",
        "Product page features such as finders, bundles or configurators",
        "Multiple languages or markets",
        "Moving content from your current theme",
      ],
    },
    proof: {
      project: "the-heavenly-scents",
      story:
        "The Heavenly Scents sells perfume online. We designed and built a clean Shopify store with considered product pages and collections, so the bottles do the talking.",
    },
    alsoProjects: ["stylefits", "replay"],
    notFit: [
      "If you are just starting out, a well-chosen ready-made theme set up properly is the better first step. See Shopify store setup.",
    ],
    faq: [
      { q: "Can my team still edit the store?", a: "Yes. Everything is built as sections with settings, so your team edits pages in the normal Shopify theme editor." },
      { q: "Will the new theme affect my live store?", a: "No. We build it as an unpublished theme and publish only when you approve." },
      { q: "Will my apps still work?", a: "We check every app you use and connect them to the new theme, and often remove apps the theme now handles itself." },
      { q: "Do you build on Shopify's current theme architecture?", a: "Yes. Our themes use Online Store 2.0 sections and blocks, so they stay compatible with the theme editor." },
    ],
    related: ["shopify/shopify-development", "design/ui-ux-design", "shopify/shopify-maintenance"],
    tools: ["Shopify", "Liquid", "Figma", "JavaScript"],
    image: photo("commerce"),
    imageAlt: "Paying online with a card on a laptop",
    closing: "Want a store that looks like no one else's?",
    updated: UPDATED,
  },
  {
    category: "shopify",
    slug: "woocommerce-to-shopify",
    metaTitle: "WooCommerce to Shopify Migration",
    metaDescription:
      "Move from WooCommerce to Shopify with your products, customers, orders and search rankings intact. Redirects mapped and tested before launch.",
    h1: "WooCommerce to Shopify migration",
    lead:
      "We move your store from WooCommerce to Shopify with your products, customers, order history and search rankings intact. Every old address is mapped to its new Shopify address before the switch, so shoppers and Google land in the right place.",
    forWho:
      "WooCommerce stores tired of plugin updates, hosting issues and security worries, who want a store that runs itself.",
    problems: [
      "Every WooCommerce update risks breaking checkout.",
      "Hosting costs and speed problems keep growing with traffic.",
      "You worry that moving platforms will wipe out your Google rankings.",
      "Customers would have to create new accounts and lose their order history.",
    ],
    deliverables: [
      { title: "Migration plan", body: "What moves, how, and in what order, including the data that cannot move and what to do about it." },
      { title: "Products and collections", body: "Products, variants, images, categories and descriptions moved and checked." },
      { title: "Customers and orders", body: "Customer records and past orders moved, with an invite for customers to activate their new accounts." },
      { title: "Redirect map", body: "Every product, category and page address redirected to its Shopify equivalent." },
      { title: "Store rebuilt on Shopify", body: "Theme, payments, shipping, taxes and apps set up to match or improve on what you had." },
      { title: "Launch-day checks", body: "Test orders, redirects, tracking and Search Console checked on the day of the switch." },
    ],
    steps: [
      { title: "Audit", body: "Your WooCommerce data, plugins, URLs and search traffic reviewed." },
      { title: "Build the Shopify store", body: "Theme and settings built while the old store keeps selling." },
      { title: "Move the data", body: "A test migration first, checked with you, then the final move." },
      { title: "Switch and monitor", body: "Domain switched, redirects live, and rankings and orders watched for the following weeks." },
    ],
    timing: "Most migrations take a few weeks. The size of the catalogue and how custom the old store is make the biggest difference.",
    price: {
      headline: "Every migration gets a fixed quote after we audit your WooCommerce store.",
      factors: [
        "Number of products, variants and orders",
        "Custom WooCommerce features to rebuild on Shopify",
        "New theme design or a configured theme",
        "Subscriptions, memberships or B2B pricing",
      ],
    },
    facts: {
      title: "How redirects work on Shopify",
      intro: "Shopify uses its own address patterns, so most product and category addresses change when you move. Redirects bridge the gap.",
      items: [
        { label: "Fixed Shopify paths", value: "/products/, /collections/ and /collections/all" },
        { label: "Redirect limit on standard plans", value: "Up to 100,000 URL redirects" },
        { label: "Redirect limit on Shopify Plus", value: "Up to 20,000,000 URL redirects" },
        { label: "Bulk redirects", value: "Imported in one go from a CSV file" },
      ],
      sources: [{ label: "Shopify Help Center: Creating and managing URL redirects", url: "https://help.shopify.com/en/manual/online-store/menus-and-links/url-redirect" }],
    },
    notFit: [
      "If your store depends on deep WordPress features, like a large membership or learning platform, staying on WooCommerce and fixing it may be better.",
    ],
    faq: [
      { q: "Will we lose our Google rankings?", a: "A planned migration keeps them. Losses usually come from missing redirects or missing content, which the redirect map and content checks prevent." },
      { q: "Can customers keep their passwords?", a: "Passwords cannot be moved between platforms for security reasons. Customers get an invitation to set a new password and keep their order history." },
      { q: "Will the store be offline during the move?", a: "No. We build the Shopify store alongside, then switch the domain at a quiet time." },
      { q: "What about our blog posts?", a: "We move them to Shopify's blog with redirects, or keep the blog on WordPress if it is large and you prefer that." },
    ],
    related: ["shopify/shopify-store-setup", "ecommerce/woocommerce-development", "growth/seo"],
    tools: ["Shopify", "WooCommerce", "Matrixify", "Google Search Console"],
    image: photo("commerce"),
    imageAlt: "Paying online with a card on a laptop",
    closing: "Ready to move to Shopify without losing a thing?",
    updated: UPDATED,
  },
  {
    category: "shopify",
    slug: "shopify-maintenance",
    metaTitle: "Shopify Maintenance and Support Plans",
    metaDescription:
      "Monthly Shopify support: theme fixes, new sections, app updates, speed checks and campaign changes, handled by one dependable team.",
    h1: "Shopify maintenance and support",
    lead:
      "We look after your Shopify store every month: fixing theme issues, adding sections and pages, managing apps, preparing campaign changes and keeping the store fast. You send requests to one team and get them done.",
    forWho:
      "Shopify brands that need regular changes but not a full-time developer.",
    problems: [
      "Small store changes wait weeks because there is no one to make them.",
      "Apps keep piling up and the store keeps getting slower.",
      "Sale campaigns are always a last-minute rush.",
      "A theme update broke something and you do not know how to fix it.",
    ],
    deliverables: [
      { title: "Theme fixes and changes", body: "Bugs fixed, sections added and layouts adjusted on request." },
      { title: "App reviews", body: "Apps you no longer need removed, and the ones you keep updated and checked." },
      { title: "Campaign support", body: "Banners, collections, discount setups and landing pages ready before each sale." },
      { title: "Speed checks", body: "Monthly speed checks on key pages, with fixes before they cost you sales." },
      { title: "Monthly report", body: "What we changed, what we found and what we suggest next." },
    ],
    steps: [
      { title: "Store review", body: "Theme, apps, speed and tracking checked in the first week." },
      { title: "Shared request board", body: "You add requests, we size them and agree priorities." },
      { title: "Monthly work", body: "Changes made on a theme copy, previewed, then published." },
      { title: "Report", body: "A short report each month." },
    ],
    timing: "We start with a store review in the first week, then work month to month.",
    price: {
      headline: "A fixed monthly fee for a set amount of work, agreed after the store review.",
      factors: [
        "Size and complexity of your theme",
        "How many changes you expect each month",
        "Campaign calendar and peak periods",
        "Response times for urgent fixes",
      ],
    },
    alsoProjects: ["stylefits", "replay"],
    notFit: [
      "If you need a big change like a new theme or a migration, that is better quoted as its own project.",
    ],
    faq: [
      { q: "Can you support a store you did not build?", a: "Yes. We start with a review of the theme and apps so we understand it before changing anything." },
      { q: "Do changes go straight to the live store?", a: "No. We work on a copy of the theme, you preview it, and we publish when you approve." },
      { q: "Can you help during sales like Black Friday or Eid?", a: "Yes. We plan campaign changes ahead and can be on hand during the busiest days." },
      { q: "Can we pause the plan?", a: "Yes, with notice agreed when we set up the plan." },
    ],
    related: ["shopify/shopify-development", "shopify/shopify-theme-development", "growth/seo"],
    tools: ["Shopify", "Liquid", "Google Analytics", "Klaviyo"],
    image: photo("commerce"),
    imageAlt: "Paying online with a card on a laptop",
    closing: "Want one team looking after your store?",
    updated: UPDATED,
  },

  /* ============================ ECOMMERCE ============================ */
  {
    category: "ecommerce",
    slug: "ecommerce-development",
    metaTitle: "Ecommerce Website Development",
    metaDescription:
      "Ecommerce websites on Shopify, WooCommerce or custom builds, with the payments, delivery and stock setup your market needs.",
    h1: "Ecommerce website development",
    lead:
      "We build online stores on the platform that fits your business, whether Shopify, WooCommerce or a custom build, and set up the payments, delivery and stock management your market needs. We will tell you which platform fits before you spend anything.",
    forWho:
      "Businesses starting to sell online, or moving beyond a store that no longer fits how they sell.",
    problems: [
      "You are not sure whether Shopify, WooCommerce or a custom store is right for you.",
      "Your customers expect cash on delivery or local wallets your store cannot offer.",
      "Orders, stock and delivery are handled by hand after every sale.",
      "You sell to other businesses and need price lists, minimum orders or invoices.",
    ],
    deliverables: [
      { title: "Platform recommendation", body: "A plain comparison of the options for your products, market and team, with our recommendation." },
      { title: "Store design", body: "Home, collection, product and checkout pages designed for phone shoppers first." },
      { title: "Payments for your market", body: "Card, wallet, bank transfer and cash on delivery where your customers expect them." },
      { title: "Delivery and stock", body: "Shipping rates, courier connections and stock that stays right across channels." },
      { title: "B2B features if you need them", body: "Customer-specific prices, minimum orders, quotes and invoices." },
      { title: "Tracking and reports", body: "Sales, conversion and product performance tracked from day one." },
    ],
    steps: [
      { title: "Choose the platform", body: "We compare options with you and agree the right one." },
      { title: "Design", body: "Key pages designed and tested on phones." },
      { title: "Build and connect", body: "Store built, payments and couriers connected, test orders placed." },
      { title: "Launch and improve", body: "Go live, then improve based on where shoppers drop off." },
    ],
    timing: "A Shopify or WooCommerce store usually takes a few weeks. Custom ecommerce builds are planned in stages.",
    price: {
      headline: "Every store gets a fixed quote once the platform and features are agreed.",
      factors: [
        "Platform choice and how custom the design is",
        "Number of products and variants",
        "Payment, courier and ERP integrations",
        "B2B or subscription features",
      ],
    },
    proof: {
      project: "the-jumbo-jump",
      story:
        "The Jumbo Jump needed customers to book a time slot and pay online. We built their WordPress site with slot booking and online payments, and it went live within a week.",
    },
    alsoProjects: ["replay", "stylefits"],
    notFit: [
      "If you sell only a few products to a small audience, a marketplace like Etsy or a social shop may be enough to start.",
    ],
    faq: [
      { q: "Shopify or WooCommerce?", a: "Shopify suits most brands that want a store that runs itself. WooCommerce suits businesses already on WordPress or with unusual product rules. We recommend after the first call." },
      { q: "Can you add cash on delivery?", a: "Yes, on Shopify and WooCommerce, alongside card and wallet payments." },
      { q: "Can the store connect to our stock system?", a: "Yes. We connect stores to Odoo and other systems so stock and orders sync automatically." },
      { q: "Do you build custom ecommerce from scratch?", a: "When the platforms cannot do what you need, yes, usually with Next.js and a headless commerce back end." },
    ],
    related: ["shopify/shopify-store-setup", "ecommerce/woocommerce-development", "ecommerce/odoo-ecommerce-integration"],
    tools: ["Shopify", "WooCommerce", "Next.js", "Stripe", "Odoo"],
    image: photo("commerce"),
    imageAlt: "Paying online with a card on a laptop",
    closing: "Ready to sell online properly?",
    updated: UPDATED,
  },
  {
    category: "ecommerce",
    slug: "woocommerce-development",
    metaTitle: "WooCommerce Development for WordPress Stores",
    metaDescription:
      "WooCommerce stores built on WordPress: custom product types, B2B pricing, subscriptions and local payments, kept fast and secure.",
    h1: "WooCommerce development",
    lead:
      "We build and improve WooCommerce stores on WordPress, for businesses that want full control of their store, content and data. That includes custom product types, B2B pricing, subscriptions and local payment gateways, kept fast and secure.",
    forWho:
      "Businesses already on WordPress, stores with unusual product or pricing rules, and teams that want to own their hosting and data.",
    problems: [
      "Checkout is slow, and you lose sales at the last step.",
      "Plugins conflict with each other after every update.",
      "You need pricing, product options or checkout rules that standard plugins cannot handle.",
      "Your store and your content site feel like two different websites.",
    ],
    deliverables: [
      { title: "Store design", body: "Product, category, cart and checkout pages designed for phones first, built into your WordPress theme." },
      { title: "Custom product and pricing rules", body: "Configurable products, bundles, wholesale prices and minimum orders, built properly instead of stacked plugins." },
      { title: "Payments and delivery", body: "Local and international gateways, cash on delivery and courier integrations." },
      { title: "Speed and security", body: "Caching, image optimisation, fewer plugins and hardened WordPress." },
      { title: "Integrations", body: "Stock, accounting and CRM connections so orders flow on their own." },
    ],
    steps: [
      { title: "Review", body: "Your store, plugins, hosting and sales data reviewed." },
      { title: "Plan and design", body: "Changes or a new build agreed, with a fixed quote." },
      { title: "Build on staging", body: "All work on a copy you can test before it goes live." },
      { title: "Launch and monitor", body: "Released at a quiet time, with orders and errors watched closely." },
    ],
    timing: "Improvements to an existing store often take a few weeks. New WooCommerce stores usually take 4 to 8 weeks.",
    price: {
      headline: "Every WooCommerce project gets a fixed quote after a review of your store and plans.",
      factors: [
        "New store or improvements to an existing one",
        "Custom product, pricing or checkout logic",
        "Number of integrations",
        "Hosting and performance work needed",
      ],
    },
    facts: {
      title: "Plugins are the main security risk",
      intro: "WooCommerce runs on WordPress, where most security issues come from plugins. Fewer, well-maintained plugins and regular updates matter even more when a store takes payments.",
      items: [
        { label: "New WordPress ecosystem vulnerabilities found in 2024", value: "7,966" },
        { label: "Share found in plugins", value: "96%" },
      ],
      sources: [{ label: "Patchstack: State of WordPress Security in 2025", url: "https://patchstack.com/whitepaper/state-of-wordpress-security-in-2025/" }],
    },
    notFit: [
      "If you want a store with no hosting or updates to manage, Shopify is usually the easier choice. We also migrate WooCommerce stores to Shopify.",
    ],
    faq: [
      { q: "Can you fix our slow WooCommerce store?", a: "Usually. We look at hosting, plugins, theme and database, and fix the biggest causes first." },
      { q: "Can WooCommerce do wholesale pricing?", a: "Yes. We set up customer-specific prices, minimum quantities and invoice payment for trade customers." },
      { q: "Do you support local payment gateways?", a: "Yes, where the gateway offers a WooCommerce integration, plus cash on delivery." },
      { q: "Should we move to Shopify instead?", a: "Sometimes. We give you an honest comparison and help either way." },
    ],
    related: ["shopify/woocommerce-to-shopify", "websites/wordpress-development", "ecommerce/ecommerce-development"],
    tools: ["WooCommerce", "WordPress", "PHP", "Stripe", "Hostinger"],
    image: photo("commerce"),
    imageAlt: "Paying online with a card on a laptop",
    closing: "Want a WooCommerce store that just works?",
    updated: UPDATED,
  },
  {
    category: "ecommerce",
    slug: "odoo-ecommerce-integration",
    metaTitle: "Odoo Integration with Shopify and WooCommerce",
    metaDescription:
      "Connect your online store to Odoo so orders, stock, customers and invoices sync automatically, with no copying between systems.",
    h1: "Odoo ecommerce integration",
    lead:
      "We connect your Shopify or WooCommerce store to Odoo so orders, stock, customers and invoices sync on their own. Your team stops copying orders by hand, and stock numbers stay right across the store, the warehouse and the shop floor.",
    forWho:
      "Businesses that sell online and already use Odoo, or plan to, for stock, sales and accounting.",
    problems: [
      "Every online order is re-typed into Odoo.",
      "The store sells items that are already out of stock.",
      "Prices change in one place but not the other.",
      "Month-end reconciliation between the store and the accounts takes days.",
    ],
    deliverables: [
      { title: "Sync design", body: "What syncs, which way and how often: products, prices, stock, orders, customers and payments." },
      { title: "Connector set up", body: "A proven connector configured for your store and Odoo, or a custom integration where needed." },
      { title: "Order flow", body: "Online orders appear in Odoo ready for picking, delivery and invoicing." },
      { title: "Stock and price sync", body: "Stock levels and prices updated in the store from Odoo." },
      { title: "Error alerts", body: "Clear alerts when a sync fails, with a log showing what happened." },
    ],
    steps: [
      { title: "Map the data", body: "We agree what lives where and the rules for each sync." },
      { title: "Configure and test", body: "Connector set up and tested with sample orders and products." },
      { title: "Go live", body: "Switched on at a quiet time, with the first days watched closely." },
      { title: "Support", body: "Fixes and tuning as your team uses it day to day." },
    ],
    timing: "Most store integrations take a few weeks, including testing with real orders.",
    price: {
      headline: "A fixed quote once the data map is agreed.",
      factors: [
        "Shopify or WooCommerce, and how many stores",
        "Ready-made connector or custom integration",
        "Number of products, warehouses and price lists",
        "Accounting and payment reconciliation needs",
      ],
    },
    notFit: [
      "If you only have a handful of orders a week, a simple daily export may be enough for now.",
    ],
    faq: [
      { q: "Do you use a ready-made connector?", a: "Where a reliable one exists for your setup, yes. It is quicker and cheaper. We build custom integrations when the connector cannot meet your rules." },
      { q: "Can it handle several stores or warehouses?", a: "Yes, with rules for which stock each store sells from." },
      { q: "Do we need a full Odoo setup first?", a: "Odoo needs to be set up for sales and inventory at least. We can do both as one project." },
      { q: "What happens if the connection drops?", a: "Changes queue up and sync when the connection returns, and you get an alert if anything needs attention." },
    ],
    related: ["ecommerce/odoo-implementation", "shopify/shopify-development", "web-apps/api-development"],
    tools: ["Odoo", "Shopify", "WooCommerce", "Python", "PostgreSQL"],
    image: photo("odoo"),
    imageAlt: "A hand at a point of sale terminal",
    closing: "Want your store and Odoo to stay in sync?",
    updated: UPDATED,
  },

  /* ============================ AI AGENTS ============================ */
  {
    category: "ai-agents",
    slug: "ai-customer-support-agents",
    metaTitle: "AI Customer Support Agents for Email and Chat",
    metaDescription:
      "AI support agents that answer common questions from your help content, draft replies for your team and hand complex cases to a person.",
    h1: "AI customer support agents",
    lead:
      "We build AI support agents that answer common customer questions from your own help content, draft replies for your team to approve and hand anything complex to a person with the full context. Customers get faster answers, and your team spends its time on the cases that need a human.",
    forWho:
      "Businesses whose support team answers the same questions all day by email, chat or a help desk.",
    problems: [
      "Most tickets ask the same handful of questions.",
      "Customers wait hours for answers that already exist in your FAQs.",
      "Support is closed at night and at weekends, and that is when many customers write.",
      "New support staff take weeks to learn all the answers.",
    ],
    deliverables: [
      { title: "Question analysis", body: "We sort past tickets to see which questions an agent can answer safely." },
      { title: "Answers from your content", body: "The agent answers from your help articles, policies and order data, citing where the answer came from." },
      { title: "Draft or send, your choice", body: "Start with drafts your team approves, then let it send answers for topics it handles well." },
      { title: "Clean handover", body: "Complex or sensitive cases passed to a person with a summary of the conversation." },
      { title: "Works in your help desk", body: "Connected to your email, website chat or help desk such as Zendesk, Freshdesk or Gorgias." },
      { title: "Quality tracking", body: "Answer accuracy, handover rate and customer feedback tracked every month." },
    ],
    steps: [
      { title: "Study past tickets", body: "We find the questions worth automating and the ones that must stay human." },
      { title: "Build in draft mode", body: "The agent drafts replies your team checks, so we see its accuracy safely." },
      { title: "Go live topic by topic", body: "Topics it answers well are switched to automatic, one at a time." },
      { title: "Review monthly", body: "We read samples, fix gaps in content and widen what it handles." },
    ],
    timing: "A first version in draft mode usually takes a few weeks.",
    price: {
      headline: "A fixed quote for the build after we review your tickets. AI running costs are estimated upfront.",
      factors: [
        "Number of channels and help desk tools",
        "Amount and quality of your help content",
        "Order or account lookups the agent needs",
        "Languages supported",
      ],
    },
    notFit: [
      "If your volume is low, a well-organised FAQ and saved replies may be all you need.",
      "Complaints, refunds over a limit and anything legal or medical should stay with people. We design for that from the start.",
    ],
    faq: [
      { q: "Will customers know they are talking to AI?", a: "We recommend saying so clearly, and offering a person at any point. Customers accept AI help more readily when they know they can reach a human." },
      { q: "What if it gives a wrong answer?", a: "It answers only from your approved content, starts in draft mode, and hands over when unsure. We review samples every month." },
      { q: "Can it look up orders?", a: "Yes, with read-only access to your store or order system, so it can answer where-is-my-order questions." },
      { q: "Does it work in Arabic and Urdu?", a: "Modern AI models handle many languages well. We test in each language you need before going live." },
    ],
    related: ["ai-agents/ai-agent-development", "ai-agents/whatsapp-ai-agents", "ai-agents/ai-chatbot-development"],
    tools: ["OpenAI", "Claude", "Zendesk", "Freshdesk", "Gorgias"],
    image: photo("ai"),
    imageAlt: "A laptop glowing in the dark",
    closing: "Want faster answers without a bigger team?",
    updated: UPDATED,
  },
  {
    category: "ai-agents",
    slug: "whatsapp-ai-agents",
    metaTitle: "WhatsApp AI Agents for Business",
    metaDescription:
      "AI agents on the official WhatsApp Business Platform that answer customers, qualify leads and book appointments, then hand over to your team.",
    h1: "WhatsApp AI agents",
    lead:
      "We build AI agents on the official WhatsApp Business Platform that reply to customers in seconds, answer common questions, qualify leads and book appointments, then hand the chat to your team when a person is needed.",
    forWho:
      "Businesses in markets where customers prefer WhatsApp to email or forms, such as the Gulf, Pakistan and much of Asia and Africa.",
    problems: [
      "Leads message on WhatsApp after hours and are gone by morning.",
      "Your team answers the same price and availability questions all day.",
      "Chats are spread across staff phones with no shared history.",
      "You do not know how many WhatsApp enquiries turn into sales.",
    ],
    deliverables: [
      { title: "Official API setup", body: "Your number connected to the WhatsApp Business Platform through Meta, the approved way." },
      { title: "Instant first replies", body: "Answers to common questions from your price lists, services and policies, day and night." },
      { title: "Lead qualification", body: "The agent asks the questions your sales team would ask and logs the answers." },
      { title: "Bookings", body: "Appointment slots offered and booked straight into your calendar or booking system." },
      { title: "Team inbox and handover", body: "A shared inbox where your team takes over any chat with the full history." },
      { title: "Follow-up templates", body: "Approved message templates for reminders and follow-ups outside the reply window." },
    ],
    steps: [
      { title: "Plan the conversations", body: "The questions customers ask and what a good answer looks like." },
      { title: "Connect WhatsApp", body: "Business verification and number setup with Meta, and templates submitted for approval." },
      { title: "Build and test", body: "The agent tested on real past chats before customers see it." },
      { title: "Launch and improve", body: "Go live, then review conversations weekly at first." },
    ],
    timing: "Setup and a first version usually take a few weeks. Meta's business verification and template approval can add time.",
    price: {
      headline: "A fixed quote for the build. WhatsApp's own message fees and AI running costs are estimated for you upfront.",
      factors: [
        "Number of conversation types",
        "Booking, CRM or order system connections",
        "Languages",
        "Team inbox and reporting needs",
      ],
    },
    facts: {
      title: "WhatsApp's 24-hour rule",
      intro: "WhatsApp limits when businesses can message customers. Agents have to be designed around it.",
      items: [
        { label: "Customer service window", value: "24 hours from the customer's last message or call, reset each time they write again" },
        { label: "Inside the window", value: "Free-form replies, media and interactive messages" },
        { label: "Outside the window", value: "Only pre-approved template messages" },
        { label: "Who you can message", value: "Only people who have opted in to hear from you" },
      ],
      sources: [{ label: "Meta for Developers: WhatsApp Business Platform, sending messages", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages" }],
    },
    notFit: [
      "If you only get a few WhatsApp messages a day, the free WhatsApp Business app with quick replies may be enough.",
      "Bulk marketing to people who never opted in breaks WhatsApp's rules and can get your number blocked. We will not build that.",
    ],
    faq: [
      { q: "Can we keep our current WhatsApp number?", a: "Usually yes. The number moves from the WhatsApp Business app to the platform, and we guide you through it." },
      { q: "Is this the official WhatsApp API?", a: "Yes. We build only on Meta's WhatsApp Business Platform, so your number is not at risk of being banned for unofficial tools." },
      { q: "Can my team still reply themselves?", a: "Yes. Your team uses a shared inbox and can take over any conversation." },
      { q: "Does it work in Arabic and Urdu?", a: "Yes. We test each language with real examples before launch." },
    ],
    related: ["ai-agents/ai-customer-support-agents", "ai-agents/ai-agent-development", "ai-agents/workflow-automation"],
    tools: ["WhatsApp Business Platform", "OpenAI", "Claude", "n8n", "Supabase"],
    image: photo("ai"),
    imageAlt: "A laptop glowing in the dark",
    closing: "Want every WhatsApp lead answered in seconds?",
    updated: UPDATED,
  },
  {
    category: "ai-agents",
    slug: "ai-chatbot-development",
    metaTitle: "AI Chatbot Development for Websites and Products",
    metaDescription:
      "AI chatbots for your website or product that answer from your own content, capture leads and guide visitors to the right page or person.",
    h1: "AI chatbot development",
    lead:
      "We build AI chatbots for your website or product that answer visitors' questions from your own content, capture leads and guide people to the right page, plan or person. It answers like a helpful member of your team, not a script.",
    forWho:
      "Businesses with a lot of information on their site that visitors struggle to find, and products whose users need help as they go.",
    problems: [
      "Visitors leave because they cannot find the answer on your site.",
      "Your old chatbot only follows scripts and frustrates people.",
      "Sales gets the same pre-sale questions again and again.",
      "Users of your product ask how-to questions that are already in the docs.",
    ],
    deliverables: [
      { title: "Your content, organised", body: "Website pages, docs, PDFs and FAQs prepared so the bot can search them (this is called RAG)." },
      { title: "A chat that fits your brand", body: "A chat window designed for your site, on desktop and phones." },
      { title: "Lead capture", body: "Contact details collected naturally when a visitor shows buying intent, and sent to your CRM." },
      { title: "Guardrails", body: "Clear limits on topics, tone and what it must never say or promise." },
      { title: "Conversation insights", body: "What visitors ask most, which tells you what to add to your site." },
    ],
    steps: [
      { title: "Gather content", body: "We collect and clean the content the bot should answer from." },
      { title: "Build and set limits", body: "The bot built with your guardrails and tone." },
      { title: "Test with real questions", body: "Tested on real visitor and customer questions, then tuned." },
      { title: "Launch and learn", body: "Live on your site, with monthly reviews of conversations." },
    ],
    timing: "A first version usually takes a few weeks, depending on how much content there is.",
    price: {
      headline: "A fixed quote for the build, with running costs estimated upfront based on expected conversations.",
      factors: [
        "Amount and type of content",
        "Lead capture and CRM connections",
        "Languages",
        "Inside a logged-in product or on a public website",
      ],
    },
    notFit: [
      "If your site has little content, improving the pages themselves will help visitors more than a chatbot.",
    ],
    faq: [
      { q: "How is this different from a support agent?", a: "A chatbot answers questions and guides visitors. A support agent also works inside your help desk and can take actions like looking up orders. Many businesses start with a chatbot." },
      { q: "What is RAG?", a: "Retrieval-augmented generation: the bot searches your content for the relevant parts before answering, so answers come from your information rather than general knowledge." },
      { q: "Will it slow down my website?", a: "No. The chat loads after the page and does not affect your page speed scores." },
      { q: "Can it hand over to a person?", a: "Yes, by email, WhatsApp or live chat, with the conversation attached." },
    ],
    related: ["ai-agents/ai-customer-support-agents", "ai-agents/ai-agent-development", "websites/custom-website-development"],
    tools: ["OpenAI", "Claude", "Gemini", "Supabase", "Next.js"],
    image: photo("ai"),
    imageAlt: "A laptop glowing in the dark",
    closing: "Want visitors to find answers in seconds?",
    updated: UPDATED,
  },
  {
    category: "ai-agents",
    slug: "workflow-automation",
    metaTitle: "Workflow Automation with n8n, Make and Zapier",
    metaDescription:
      "Business workflow automation that moves data between your apps, sends follow-ups and creates records automatically, with AI where it helps.",
    h1: "Workflow automation",
    lead:
      "We automate the repeat steps between your apps: new leads into the CRM, orders into the accounts, follow-up emails, reports and approvals. We use tools like n8n, Make and Zapier, and add AI only where a step needs judgement.",
    forWho:
      "Teams that copy data between tools every day, and businesses that want processes to run the same way every time.",
    problems: [
      "Someone copies form entries into a spreadsheet and then into the CRM.",
      "Follow-ups depend on someone remembering to send them.",
      "Weekly reports take hours to put together by hand.",
      "Approvals get stuck in email threads.",
    ],
    deliverables: [
      { title: "Process map", body: "Each step, who does it, which tool it lives in and where it goes wrong today." },
      { title: "Automations that run on their own", body: "Workflows triggered by forms, orders, emails or schedules, moving data between your tools." },
      { title: "AI steps where useful", body: "Sorting emails, summarising documents or extracting details from PDFs, checked by a person where it matters." },
      { title: "Error handling", body: "Retries and alerts, so a failed step is noticed and fixed, not silently lost." },
      { title: "Documentation", body: "Each workflow written down in plain language so your team understands it." },
    ],
    steps: [
      { title: "Map the process", body: "We walk through the work with the people who do it." },
      { title: "Pick the tool", body: "Zapier, Make, n8n or custom code, chosen for cost, volume and data rules." },
      { title: "Build and test", body: "Each workflow tested with real examples before switching it on." },
      { title: "Measure", body: "We track time saved and errors, and improve from there." },
    ],
    timing: "Simple automations can be live within days. Larger processes are delivered in stages over a few weeks.",
    price: {
      headline: "A fixed quote per workflow or group of workflows, after we map the process.",
      factors: [
        "Number of steps and apps involved",
        "Monthly volume of runs",
        "AI steps and checks needed",
        "Hosting: a cloud tool or self-hosted n8n",
      ],
    },
    notFit: [
      "If the process changes every week, write it down and settle it first. Automating a moving target wastes money.",
    ],
    faq: [
      { q: "Zapier, Make or n8n?", a: "Zapier is easiest for simple flows. Make handles more complex logic at a lower price. n8n can be self-hosted, which suits high volumes or strict data rules. We recommend per case." },
      { q: "Do we need AI for this?", a: "Often not. Many automations are simple rules. We add AI only where a step needs reading, sorting or judgement." },
      { q: "What happens if an app changes?", a: "Alerts tell us when a step fails, and a monthly support plan covers fixes." },
      { q: "Who owns the automations?", a: "You do. They run in your accounts, and we document each one." },
    ],
    related: ["ai-agents/ai-agent-development", "web-apps/api-development", "ai-agents/whatsapp-ai-agents"],
    tools: ["n8n", "Make", "Zapier", "OpenAI", "Google Sheets"],
    image: photo("ai"),
    imageAlt: "A laptop glowing in the dark",
    closing: "Want the busywork to run itself?",
    updated: UPDATED,
  },

  /* ============================ DESIGN ============================ */
  {
    category: "design",
    slug: "website-design",
    metaTitle: "Website Design for Businesses That Want Enquiries",
    metaDescription:
      "Website design that explains what you do in seconds and leads visitors to get in touch. Figma designs for mobile and desktop, ready to build.",
    h1: "Website design",
    lead:
      "We design websites that explain what you do within seconds and lead visitors to get in touch. You get mobile and desktop designs in Figma, built around your words and your brand, ready for our team or yours to build.",
    forWho:
      "Businesses planning a new website or a redesign, and teams with their own developers who need strong designs to build from.",
    problems: [
      "Visitors cannot tell what you do from the first screen.",
      "Your site looks fine but brings in very few enquiries.",
      "Your developers keep asking how things should look and behave.",
      "Your brand looks different on every page.",
    ],
    deliverables: [
      { title: "Page plan and wireframes", body: "What each page says and in what order, agreed before visual design." },
      { title: "Messaging help", body: "Headlines and key sections written or sharpened with you, because design starts with words." },
      { title: "Mobile and desktop designs", body: "Every page designed for phones and desktops, with hover, menu and form states." },
      { title: "A small design system", body: "Colours, type, buttons and sections defined once and reused, so new pages stay consistent." },
      { title: "Clickable prototype", body: "A prototype to share with your team and test with a few customers." },
      { title: "Developer handover", body: "Organised Figma files with specs, or our own team builds it." },
    ],
    steps: [
      { title: "Understand the business", body: "Who the site is for, what they need to know and what you want them to do." },
      { title: "Plan and wireframe", body: "Page structure and content flow agreed." },
      { title: "Design", body: "Visual design of key pages, then the rest from the same system." },
      { title: "Hand over or build", body: "Files handed to your developers, or built by our team." },
    ],
    timing: "Design for a business website usually takes a few weeks, depending on the number of pages and how ready the content is.",
    price: {
      headline: "A fixed quote for design only, or for design and build together.",
      factors: [
        "Number of unique page types",
        "Whether we write or edit the content",
        "Brand refresh or working with your current brand",
        "Design only or design and build",
      ],
    },
    proof: {
      project: "techoutsource",
      story:
        "TechOutsource, an Australian software house, needed a site that explains its services, shows its stack and pricing, and gets visitors to book a call. We designed and built it around that one journey.",
    },
    alsoProjects: ["care-foundation", "the-heavenly-scents"],
    notFit: [
      "If you need an app or a logged-in product designed, our UI/UX design service is the better fit.",
    ],
    faq: [
      { q: "Do you design in Figma?", a: "Yes. You get organised Figma files you own." },
      { q: "Can our own developers build it?", a: "Yes. We hand over with specs and answer questions during the build." },
      { q: "Do you use templates?", a: "No. Each design is made for your business, though we build on proven layout patterns that visitors understand." },
      { q: "Can you also write the content?", a: "Yes, or we edit what your team writes so it is clear and easy to scan." },
    ],
    related: ["websites/custom-website-development", "design/ui-ux-design", "websites/website-redesign"],
    tools: ["Figma", "FigJam", "Google Analytics", "Hotjar"],
    image: photo("ux"),
    imageAlt: "A hand sketching wireframes on a tablet",
    closing: "Want a website that makes sense in seconds?",
    updated: UPDATED,
  },
];
