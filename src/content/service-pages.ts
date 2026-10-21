import type { CategorySlug } from "@/content/catalog";
import { BUILD_PAGES } from "@/content/service-pages-build";
import { COMMERCE_PAGES } from "@/content/service-pages-commerce";

/**
 * Written service pages. A service in catalog.ts becomes a live page, a menu
 * link and a sitemap entry only when it has an entry here.
 *
 * Writing rules: answer first, plain words, real Venlynk projects only, no
 * invented numbers. Any figure from outside Venlynk carries its source.
 */

export type Source = { label: string; url: string };

export type ServicePage = {
  category: CategorySlug;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Answer first: what it is and what you get, in two sentences. */
  lead: string;
  /** Who it suits, one sentence. */
  forWho: string;
  /** Problems in the client's own words. */
  problems: string[];
  deliverables: { title: string; body: string }[];
  steps: { title: string; body: string }[];
  /** How long it usually takes, and what changes that. */
  timing: string;
  price: { headline: string; factors: string[]; note?: string };
  /** Useful facts from outside Venlynk, each with its source. */
  facts?: { title: string; intro?: string; items: { label: string; value: string }[]; sources: Source[] };
  proof?: { project: string; story: string };
  alsoProjects?: string[];
  notFit: string[];
  faq: { q: string; a: string }[];
  /** Related live pages as "category/slug". */
  related: string[];
  tools: string[];
  image: string;
  imageAlt: string;
  closing: string;
  /** Date the content was last reviewed, YYYY-MM-DD. */
  updated: string;
};

const photo = (k: string) => `/images/services/${k}.webp`;
const UPDATED = "2026-10-21";

const CORE_PAGES: ServicePage[] = [
  /* ------------------------------------------------------------------ */
  {
    category: "websites",
    slug: "custom-website-development",
    metaTitle: "Custom Website Development for Growing Businesses",
    metaDescription:
      "Custom websites built in Next.js or WordPress that load fast, explain what you do and bring in enquiries. Your team can edit every page.",
    h1: "Custom website development",
    lead:
      "We design and build custom websites that load fast, explain what you do in a few seconds and give visitors an easy way to get in touch. When we hand over, your team can change any page without calling a developer.",
    forWho:
      "Businesses whose website looks dated, loads slowly, is hard to edit, or simply does not bring in enquiries.",
    problems: [
      "People visit the site but hardly anyone gets in touch.",
      "Changing one line of text means emailing a developer and waiting a week.",
      "The site is slow on phones, and phones are where most of your visitors are.",
      "It was built years ago and no longer matches what the business does today.",
    ],
    deliverables: [
      {
        title: "A clear page plan",
        body: "Which pages you need, what each one has to say and which action each page leads to, agreed before any design.",
      },
      {
        title: "Design that fits your brand",
        body: "Desktop and mobile designs you can click through, built around your colours, type and photos rather than a stock template.",
      },
      {
        title: "A fast, solid build",
        body: "Built in Next.js or WordPress, tested on real phones and checked against Google's speed measures before launch.",
      },
      {
        title: "Pages your team can edit",
        body: "A simple editor for text, images, blog posts and new pages, plus a short recorded walkthrough.",
      },
      {
        title: "Search basics done properly",
        body: "Page titles, descriptions, clean addresses, structured data, a sitemap and redirects from your old pages.",
      },
      {
        title: "Enquiry tracking",
        body: "Forms, WhatsApp and call buttons tracked in Google Analytics, so you can see which pages bring in leads.",
      },
    ],
    steps: [
      {
        title: "Call and plan",
        body: "A 30-minute call about your customers and goals, then a page plan and a fixed quote.",
      },
      {
        title: "Words and design",
        body: "We shape the content with you and design the key pages. You review a clickable preview, not static pictures.",
      },
      {
        title: "Build with weekly previews",
        body: "Each week you get a working link to check on your own phone and laptop, and you can steer as we go.",
      },
      {
        title: "Launch and handover",
        body: "We move the domain, check speed, forms and tracking, then train your team and stay on hand after launch.",
      },
    ],
    timing:
      "A business website usually takes 4 to 8 weeks from the first call to launch. The biggest factor is how quickly the words and photos are ready, so we start on content early.",
    price: {
      headline: "Every website gets a fixed quote after the first call, so you know the full cost before work starts.",
      factors: [
        "How many pages and page types the site needs",
        "Whether you need custom features such as booking, payments or a client login",
        "Whether we write the content or edit yours",
        "Moving content and search traffic from an existing site",
      ],
    },
    facts: {
      title: "What \"fast\" means to Google",
      intro:
        "Google measures real visitors' experience with three Core Web Vitals. We build to pass all three on mobile, where most visits happen.",
      items: [
        { label: "Largest Contentful Paint (main content shows)", value: "2.5 seconds or less" },
        { label: "Interaction to Next Paint (page reacts to a tap)", value: "200 milliseconds or less" },
        { label: "Cumulative Layout Shift (nothing jumps around)", value: "0.1 or less" },
      ],
      sources: [{ label: "web.dev: Core Web Vitals thresholds", url: "https://web.dev/articles/defining-core-web-vitals-thresholds" }],
    },
    proof: {
      project: "dxb-off-plan",
      story:
        "DXB Off Plan is a property portal for people investing in Dubai's off-plan projects. We built it on WordPress with a custom design: listings with virtual tours, fast search, and a CRM connection behind it so every enquiry reaches the sales team.",
    },
    alsoProjects: ["care-foundation", "techoutsource"],
    notFit: [
      "If you only need a single page to test an idea this month, a landing page is quicker and cheaper than a full site.",
      "If most of what you need is an online shop, start with our Shopify or ecommerce services instead.",
    ],
    faq: [
      {
        q: "Should we use WordPress or Next.js?",
        a: "WordPress suits content-heavy sites your team edits every week. Next.js suits sites that need top speed, custom features or a link to an app. We recommend one after the first call and explain the trade-off in plain terms.",
      },
      {
        q: "Can you redesign our current site instead of starting over?",
        a: "Yes. If the structure still works, we redesign and speed up what you have. If it is hard to edit or slow at its core, a rebuild usually costs less over a year.",
      },
      {
        q: "Will we lose our Google rankings when the new site goes live?",
        a: "Not if the move is planned. We map every old page to its new address and set up permanent redirects before launch.",
      },
      {
        q: "Do you write the content?",
        a: "We can write it from your notes and a short interview, or edit what your team writes so it is clear and easy to scan.",
      },
      {
        q: "Who owns the website?",
        a: "You do. The code, the designs, the domain and every account are in your name.",
      },
      {
        q: "What happens after launch?",
        a: "You can run the site yourself, or keep us on a monthly plan for updates, new pages, speed checks and SEO.",
      },
    ],
    related: ["design/ui-ux-design", "growth/seo", "growth/growth-support"],
    tools: ["Next.js", "React", "WordPress", "TypeScript", "Figma"],
    image: photo("web"),
    imageAlt: "Code on a laptop screen",
    closing: "Need a website that brings in enquiries?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    category: "mobile-apps",
    slug: "ios-android-app-development",
    metaTitle: "iOS and Android App Development with Flutter",
    metaDescription:
      "One app for iPhone and Android, built in Flutter or React Native, with weekly test builds and App Store and Google Play releases handled for you.",
    h1: "iOS and Android app development",
    lead:
      "We build one app that runs on both iPhone and Android, using Flutter or React Native, and take care of the App Store and Google Play releases. You try a new test build on your own phone every week.",
    forWho:
      "Founders with an app idea, and businesses whose customers want to book, order, learn or pay from their phone.",
    problems: [
      "You have an app idea but no technical team to build it.",
      "Quotes for two separate apps, one for iPhone and one for Android, are more than you can spend.",
      "A previous developer left and the app is stuck, buggy or rejected by the store.",
      "Customers keep asking whether you have an app.",
    ],
    deliverables: [
      {
        title: "A first version worth launching",
        body: "We agree the smallest set of features that solves the main problem well, so you launch sooner and learn from real users.",
      },
      {
        title: "App design",
        body: "Screens designed for thumbs, small screens and patchy connections, tested as a clickable prototype first.",
      },
      {
        title: "One codebase, two platforms",
        body: "A single Flutter or React Native app that runs on iOS and Android and stays in step on both.",
      },
      {
        title: "Back end and admin",
        body: "Accounts, payments, notifications and an admin panel so your team can manage users and content.",
      },
      {
        title: "Store submission",
        body: "App Store and Google Play listings, screenshots, review notes and any changes Apple or Google ask for.",
      },
      {
        title: "Updates after launch",
        body: "Crash monitoring, fixes and new features on a steady release rhythm.",
      },
    ],
    steps: [
      {
        title: "Shape the first version",
        body: "We map the main journeys and agree what the first release must do, and what can wait.",
      },
      {
        title: "Design and prototype",
        body: "You tap through a prototype on your phone and we test it with a few real users.",
      },
      {
        title: "Build in weekly releases",
        body: "Every week you install a new test build and see progress for yourself.",
      },
      {
        title: "Launch and grow",
        body: "We submit to both stores, watch the first weeks closely and plan the next release from what users do.",
      },
    ],
    timing:
      "A first release usually takes 8 to 16 weeks. The number of user types, screens and outside systems (payments, maps, booking tools) makes the biggest difference.",
    price: {
      headline: "We quote a fixed price for the first version after a short planning call, with later features quoted separately.",
      factors: [
        "How many screens and types of users the app has",
        "Payments, maps, chat, video or other integrations",
        "Whether you need an admin panel or a matching website",
        "Ongoing support and releases after launch",
      ],
    },
    proof: {
      project: "tilawat",
      story:
        "Tilawat is a Quran audio app for listening to reciters, saving playlists and recording your own recitation. We designed and built it in Flutter, so one codebase serves both iPhone and Android.",
    },
    alsoProjects: ["frontline-ticketing", "ice"],
    notFit: [
      "If people will only use it once in a while, a web app that works well on phones may serve them better and cost less.",
      "If the idea is not tested yet, start with a two-week discovery sprint and a prototype before paying for a full build.",
    ],
    faq: [
      {
        q: "Flutter or React Native?",
        a: "Both are proven. React Native fits teams that already use JavaScript or React. Flutter gives very consistent screens on every device. We recommend one based on your features and who will maintain the app.",
      },
      {
        q: "Will one codebase feel worse than a native app?",
        a: "For most business apps, no. Users cannot tell the difference. For heavy 3D, advanced camera work or deep hardware features we may suggest native code for those parts.",
      },
      {
        q: "Who submits the app to the stores?",
        a: "We do, under your developer accounts, so you own the listings. We also handle any changes Apple or Google request in review.",
      },
      {
        q: "Can you take over an app another developer started?",
        a: "Yes. We review the code first and tell you honestly whether to continue it or rebuild parts of it.",
      },
      {
        q: "Can the app work with our website?",
        a: "Yes. The app and website can share the same back end, so accounts, orders and content stay in sync.",
      },
      {
        q: "Who owns the code?",
        a: "You do, from day one, in a repository under your account.",
      },
    ],
    related: ["design/ui-ux-design", "growth/aso", "web-apps"],
    tools: ["Flutter", "React Native", "Firebase", "Supabase", "Figma"],
    image: photo("mobile"),
    imageAlt: "Hands using an app on a phone",
    closing: "Got an app idea for iPhone and Android?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    category: "shopify",
    slug: "shopify-store-setup",
    metaTitle: "Shopify Store Setup Service: Launch Your Store",
    metaDescription:
      "We set up your Shopify store, from theme and products to payments and shipping, so you can start selling. Fixed quote, store in your name.",
    h1: "Shopify store setup",
    lead:
      "We set up your Shopify store from an empty account to taking real orders. You get a store that looks like your brand, works well on phones and that you can run yourself after handover.",
    forWho:
      "Brands moving off Instagram or WhatsApp orders, shops leaving an old platform, and anyone opening a first online store.",
    problems: [
      "You take orders in DMs and keep losing track of who has paid.",
      "You started setting up Shopify yourself and got stuck on the theme, payments or shipping.",
      "Your store works, but it looks like every other template and people leave without buying.",
      "You do not know which of the thousands of Shopify apps you actually need.",
    ],
    deliverables: [
      {
        title: "A store that looks like you",
        body: "A theme set up with your logo, colours and fonts, not a demo store with your name on it.",
      },
      {
        title: "Products ready to sell",
        body: "Products added with photos, prices, sizes and variants, sorted into collections that make sense to shoppers.",
      },
      {
        title: "Payments that work where you sell",
        body: "Shopify Payments where it is available, a local gateway where it is not, and cash on delivery if your customers expect it.",
      },
      {
        title: "Shipping and taxes",
        body: "Delivery rates by country or city, tax settings, and order emails written in your brand's voice.",
      },
      {
        title: "The pages buyers check",
        body: "About, contact, FAQ, returns, privacy and terms, so new customers feel safe placing a first order.",
      },
      {
        title: "A handover you can use",
        body: "A short recorded walkthrough so you can add products, run a sale and manage orders yourself.",
      },
    ],
    steps: [
      {
        title: "A 30-minute call",
        body: "We look at what you sell, who buys it and how you take orders today, then send a fixed quote.",
      },
      {
        title: "Design and setup",
        body: "We set up the theme, collections and key pages. You see a working preview link, not just screenshots.",
      },
      {
        title: "Products and payments",
        body: "We load your products, connect payments and shipping, and place test orders from start to finish.",
      },
      {
        title: "Launch",
        body: "We go live, check everything on real phones and stay on hand while the first orders come in.",
      },
    ],
    timing:
      "Most stores are ready to launch within a few weeks. The biggest factor is how quickly product photos, prices and descriptions are ready, so we give you a simple checklist on day one.",
    price: {
      headline: "Every store gets a fixed quote after the first call, so you know the full cost before work starts.",
      factors: [
        "How many products and variants you have",
        "Whether a well-chosen theme is enough or you need a custom design",
        "Extras such as a size finder, bundles or wholesale pricing",
        "Moving products and customers from another platform",
      ],
      note: "Shopify's own monthly plan is paid to Shopify directly, and the account stays in your name.",
    },
    facts: {
      title: "Taking payment the way your customers pay",
      intro:
        "Shopify supports manual payment methods alongside cards and wallets, which matters in markets where many shoppers still prefer to pay on delivery.",
      items: [
        { label: "Cash on delivery", value: "Supported as a manual payment method" },
        { label: "Bank transfer and money orders", value: "Supported as manual payment methods" },
        { label: "Cards and wallets", value: "Through Shopify Payments or a third-party gateway, depending on your country" },
      ],
      sources: [{ label: "Shopify Help Center: manual payment methods", url: "https://help.shopify.com/manual/payments/manual-payments" }],
    },
    proof: {
      project: "stylefits",
      story:
        "StyleFits sells abayas, hijabs and co-ord sets, where getting the size and length right decides whether a shopper buys. We set the store up on Shopify with a size and length finder, so shoppers can pick the right fit themselves on their phone.",
    },
    alsoProjects: ["replay", "the-heavenly-scents"],
    notFit: [
      "If you sell a handful of products only through Instagram, a simple product page with WhatsApp ordering may be enough for now.",
      "If your business needs bookings, complex quotes or unusual checkout rules, a custom web app or WooCommerce can fit better. We will say so on the first call.",
    ],
    faq: [
      {
        q: "Do I own the store?",
        a: "Yes. The Shopify account is in your name from day one. We work as a collaborator and step back when you are ready.",
      },
      {
        q: "Can I update the store myself after launch?",
        a: "Yes. Adding products, changing prices and running a sale need no developer, and the walkthrough shows you how.",
      },
      {
        q: "Can you move my products from Instagram, WooCommerce or another platform?",
        a: "Yes. We move products and photos and, where the platform allows it, customers and past orders.",
      },
      {
        q: "Can my customers pay cash on delivery?",
        a: "Yes. Shopify supports cash on delivery as a manual payment method, and we set it up alongside card payments.",
      },
      {
        q: "What do you need from me?",
        a: "Your logo, product photos, prices and sizes, delivery rates and your returns policy. If photos are not ready, we will tell you what works.",
      },
      {
        q: "What happens after launch?",
        a: "You can run the store yourself, or keep us on a monthly plan for updates, new features and speed checks.",
      },
    ],
    related: ["shopify/shopify-development", "ecommerce/etsy-store-setup", "growth/seo"],
    tools: ["Shopify", "Shopify Payments", "Klaviyo", "Google Analytics"],
    image: photo("commerce"),
    imageAlt: "Paying online with a card on a laptop",
    closing: "Ready to start selling on Shopify?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    category: "shopify",
    slug: "shopify-development",
    metaTitle: "Shopify Development: Custom Themes, Features and Fixes",
    metaDescription:
      "Shopify development for growing stores: custom theme work, product page and checkout improvements, apps and integrations, and ongoing support.",
    h1: "Shopify development",
    lead:
      "We build and improve Shopify stores for brands that have outgrown a basic setup: custom theme sections, better product pages, faster mobile shopping and integrations with the tools that run your business.",
    forWho:
      "Brands already selling on Shopify that want more sales from the same traffic, or need a feature the theme cannot do.",
    problems: [
      "Shoppers add to cart on their phone and then leave.",
      "The theme cannot do what you need, so you keep stacking apps that slow the store down.",
      "Product pages do not answer the questions customers ask you on WhatsApp.",
      "Stock, orders and accounts live in different places and someone copies them by hand.",
    ],
    deliverables: [
      {
        title: "Store review",
        body: "Where shoppers drop off, what slows the store down and which apps you can remove, ranked by likely impact.",
      },
      {
        title: "Custom theme sections",
        body: "New sections and templates your team can arrange in the Shopify editor, built to match your brand.",
      },
      {
        title: "Better product pages",
        body: "Clear photos, sizes, delivery times and answers to common questions, laid out for small screens.",
      },
      {
        title: "Speed work",
        body: "Lighter images and code, fewer unneeded apps, and a store that passes Google's mobile speed checks.",
      },
      {
        title: "Integrations",
        body: "Connections to your ERP, courier, email marketing and reviews tools so data flows without manual work.",
      },
      {
        title: "Tracking that tells the truth",
        body: "Analytics set up so you can see which products, pages and channels actually lead to sales.",
      },
    ],
    steps: [
      {
        title: "Look at the numbers",
        body: "We review your analytics and the store on real phones to find the pages and steps that lose sales.",
      },
      {
        title: "Agree the priorities",
        body: "You get a short, ranked list with a fixed quote, starting with the changes most likely to pay back.",
      },
      {
        title: "Build and test",
        body: "We work on a copy of your theme, so the live store keeps selling while you review the changes.",
      },
      {
        title: "Launch and measure",
        body: "We publish, compare the numbers before and after, and plan the next round.",
      },
    ],
    timing:
      "Most improvement projects take a few weeks. Larger custom themes take longer and are planned in stages so your store keeps selling throughout.",
    price: {
      headline: "Each project gets a fixed quote after the store review, or you can keep us on a monthly plan.",
      factors: [
        "How much of the theme needs custom work",
        "Integrations with outside systems",
        "How many templates and page types are involved",
        "Ongoing monthly support after launch",
      ],
    },
    proof: {
      project: "replay",
      story:
        "Replay sells shoes and clothing online. We built the store on Shopify with a customised theme, clear collections and navigation for browsing by category, and a quick checkout on mobile.",
    },
    alsoProjects: ["stylefits", "the-heavenly-scents"],
    notFit: [
      "If you are starting from scratch, our Shopify store setup service is the quicker and cheaper place to begin.",
      "If you need complex quoting, bookings or rules Shopify cannot handle well, a custom build may serve you better.",
    ],
    faq: [
      {
        q: "Will changes break my live store?",
        a: "No. We work on a duplicate theme, you review it with a preview link, and we publish only when you approve.",
      },
      {
        q: "Do you work with Shopify Plus?",
        a: "Yes, including Plus features such as checkout customisation and B2B, where your plan allows them.",
      },
      {
        q: "Can you remove apps we do not need?",
        a: "Yes. Many stores pay for apps that slow them down. We check what each app does and replace it with theme code where that is safer and faster.",
      },
      {
        q: "Can you connect Shopify to Odoo or our ERP?",
        a: "Yes. Orders, stock and customers can sync automatically between Shopify and your back-office system.",
      },
      {
        q: "Do you offer monthly support?",
        a: "Yes. A monthly plan covers changes, new features, app updates and speed checks, with a short report each month.",
      },
    ],
    related: ["shopify/shopify-store-setup", "ecommerce/odoo-implementation", "design/ui-ux-design"],
    tools: ["Shopify", "Liquid", "Shopify Plus", "Klaviyo", "Google Analytics"],
    image: photo("commerce"),
    imageAlt: "Paying online with a card on a laptop",
    closing: "Want more shoppers to reach the thank-you page?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    category: "ecommerce",
    slug: "etsy-store-setup",
    metaTitle: "Etsy Shop Setup and Listing Optimisation Service",
    metaDescription:
      "We research what buyers search for, set up your Etsy shop and write titles and tags built to be found, then support you through launch.",
    h1: "Etsy store setup",
    lead:
      "We research what buyers search for in your niche, set up your Etsy shop properly and write listings built to show up in Etsy search. Then we help you through the first weeks while the shop finds its feet.",
    forWho:
      "Makers, artists and small brands opening an Etsy shop, or shops that get views but few sales.",
    problems: [
      "You have great products but no idea what to call them so buyers find them.",
      "Your listings get views but very few sales.",
      "Shipping, policies and pricing feel confusing, and you are worried about getting them wrong.",
      "You do not know how Etsy's fees will affect your prices.",
    ],
    deliverables: [
      {
        title: "Market and keyword research",
        body: "What buyers type into Etsy for products like yours, what competitors charge and where there is room for you.",
      },
      {
        title: "Shop setup",
        body: "Shop name, banner, about section, policies, shipping profiles and payment settings done properly from day one.",
      },
      {
        title: "Listings built to be found",
        body: "Titles, all tags, attributes and descriptions written around real searches, and photo guidance for your first listings.",
      },
      {
        title: "Pricing that covers the fees",
        body: "A simple sheet that shows your real margin on each product after Etsy's fees and shipping.",
      },
      {
        title: "Launch support",
        body: "We watch views and favourites in the first weeks and adjust listings that are not working.",
      },
    ],
    steps: [
      {
        title: "Research",
        body: "We study your niche, competitors and the search terms buyers use before you list anything.",
      },
      {
        title: "Set up the shop",
        body: "Branding, policies and shipping, set up with you on a short call so you understand every setting.",
      },
      {
        title: "Write and publish listings",
        body: "We write your first set of listings and publish them with you.",
      },
      {
        title: "Learn and adjust",
        body: "We review the first weeks of data and rewrite what is not getting views or sales.",
      },
    ],
    timing:
      "A new shop with its first listings is usually ready in a couple of weeks, depending on how many products you start with and whether photos are ready.",
    price: {
      headline: "Etsy setup is quoted as a fixed package after a short call, based on how many listings you start with.",
      factors: [
        "Number of products and variations",
        "Whether you need branding (logo, banner) as well",
        "Ongoing listing and reporting support after launch",
      ],
    },
    facts: {
      title: "Etsy's rules and fees, in short",
      intro: "These limits and fees shape how every listing is written and priced. They change from time to time, so we check them at the start of each project.",
      items: [
        { label: "Listing title", value: "Up to 140 characters" },
        { label: "Tags", value: "Up to 13 per listing, 20 characters each" },
        { label: "Listing fee", value: "$0.20 per listing" },
        { label: "Transaction fee", value: "6.5% of the total the buyer pays, including shipping" },
      ],
      sources: [
        { label: "Outfy: Etsy character limits", url: "https://www.outfy.com/blog/etsy-character-limit/" },
        { label: "Gelato: Etsy fees explained", url: "https://www.gelato.com/blog/etsy-fees" },
      ],
    },
    notFit: [
      "If you want full control of your brand and customer list, pair Etsy with your own Shopify store rather than relying on Etsy alone.",
      "If your products are mass-produced resale items, Etsy's rules may not allow them. We will check before you start.",
    ],
    faq: [
      {
        q: "Do I need products ready before we start?",
        a: "It helps, but research can start while you finish your range, so you launch with the right names and prices.",
      },
      {
        q: "How long until my first sale?",
        a: "It depends on the product and the competition. We set honest expectations after the research instead of promising a date.",
      },
      {
        q: "Can you run the shop for me?",
        a: "We can support you monthly with new listings, updates and a short report, while you make and ship the products.",
      },
      {
        q: "Should I also have my own website?",
        a: "Often yes, once Etsy is working. Your own store lets you keep customers and avoid marketplace fees on repeat orders.",
      },
      {
        q: "Do you take photos?",
        a: "We do not shoot products, but we give you a clear photo brief and can edit and arrange the images you take.",
      },
    ],
    related: ["shopify/shopify-store-setup", "ecommerce", "growth/seo"],
    tools: ["Etsy", "eRank", "Canva", "Google Sheets"],
    image: photo("etsy"),
    imageAlt: "Handmade ceramic vases",
    closing: "Ready to open your Etsy shop?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    category: "ecommerce",
    slug: "odoo-implementation",
    metaTitle: "Odoo Implementation for Sales, Stock and Accounts",
    metaDescription:
      "We map how you work, set up the Odoo apps you need, move your data and train your team, working with certified Odoo partners.",
    h1: "Odoo implementation",
    lead:
      "We set up Odoo so sales, stock, purchasing, accounts and your online store run from one system instead of spreadsheets and five separate apps. We map how you work first, then configure, move your data and train your team.",
    forWho:
      "Retailers, distributors and service businesses where double entry, stock mistakes or month-end chaos cost real time.",
    problems: [
      "The same order is typed into three different places.",
      "Stock numbers in the shop and the warehouse never match.",
      "Month-end means days of chasing spreadsheets.",
      "You pay for several tools that still do not talk to each other.",
    ],
    deliverables: [
      {
        title: "Process map",
        body: "How orders, stock and money move through your business today, and what should change in Odoo.",
      },
      {
        title: "App setup",
        body: "Sales, CRM, inventory, purchasing, accounting, point of sale or ecommerce, configured to fit how you work.",
      },
      {
        title: "Data migration",
        body: "Customers, products, suppliers and opening balances moved across and checked.",
      },
      {
        title: "Store connection",
        body: "Orders, stock and customers synced between Odoo and your Shopify or WooCommerce store.",
      },
      {
        title: "Training",
        body: "Each team learns Odoo on their own data before go-live, with short written guides.",
      },
    ],
    steps: [
      {
        title: "Map how you work",
        body: "We sit with each team and agree what the system needs to do and in what order.",
      },
      {
        title: "Configure and migrate",
        body: "Apps set up, data moved and the whole flow tested end to end with real examples.",
      },
      {
        title: "Train and go live",
        body: "Training on your own data, then a planned switch-over date.",
      },
      {
        title: "Support",
        body: "We stay close for the first weeks to fix issues and adjust settings as your team gets used to it.",
      },
    ],
    timing:
      "Timelines depend on how many Odoo apps you need and how clean your current data is. After the mapping stage you get a plan with dates.",
    price: {
      headline: "Odoo projects are quoted after the mapping stage, when we know exactly which apps and integrations you need.",
      factors: [
        "Number of Odoo apps and users",
        "How much data needs cleaning and moving",
        "Integrations with your store, courier or bank",
        "Custom features beyond standard Odoo",
      ],
      note: "Odoo licences are paid to Odoo or through our certified partners, separately from our work.",
    },
    notFit: [
      "If you have one shop and a simple stock list, Shopify or WooCommerce on their own may be enough for now.",
      "If you need heavy custom manufacturing or industry-specific modules, we bring in our certified Odoo partners for that part.",
    ],
    faq: [
      {
        q: "Who are your Odoo partners?",
        a: "We work with certified Odoo partners for licensing and deep custom development, and introduce them on the first call.",
      },
      {
        q: "Odoo Online or self-hosted?",
        a: "Odoo Online is simpler to run. Self-hosted gives more control and custom options. We recommend one after mapping.",
      },
      {
        q: "Can Odoo connect to our online store?",
        a: "Yes. Orders, stock and customers can sync between Odoo and your Shopify or WooCommerce store.",
      },
      {
        q: "Will our team cope with a new system?",
        a: "Training happens on your own data before go-live, and we stay close in the first weeks while people settle in.",
      },
    ],
    related: ["shopify/shopify-development", "ecommerce/etsy-store-setup", "ai-agents/ai-agent-development"],
    tools: ["Odoo", "PostgreSQL", "Python", "Shopify", "WooCommerce"],
    image: photo("odoo"),
    imageAlt: "A hand at a point of sale terminal",
    closing: "Want one system for the whole business?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    category: "ai-agents",
    slug: "ai-agent-development",
    metaTitle: "AI Agent Development for Small and Growing Businesses",
    metaDescription:
      "AI agents that answer customers, sort enquiries and update your systems, built inside your tools with a person approving what matters.",
    h1: "AI agent development",
    lead:
      "We build AI agents that handle repeat work for your team: answering common customer questions, sorting enquiries, pulling details from documents and updating your systems. A person approves anything that matters before it happens.",
    forWho:
      "Teams that spend hours each day on the same questions, the same data entry or the same follow-ups.",
    problems: [
      "Your team answers the same ten questions on WhatsApp and email every day.",
      "Leads wait hours for a first reply, and some never get one.",
      "Someone copies details from forms, PDFs or emails into your CRM by hand.",
      "You tried a chatbot once and it gave customers wrong answers.",
    ],
    deliverables: [
      {
        title: "One task, picked with you",
        body: "We sit with your team, list the repeat work and pick the task where an agent saves the most time with the least risk.",
      },
      {
        title: "Answers from your own information",
        body: "The agent answers from your documents, prices and policies, not from general internet knowledge.",
      },
      {
        title: "Works where you already work",
        body: "Inside WhatsApp, your website chat, email, your CRM or help desk, so nobody learns a new tool.",
      },
      {
        title: "A person in the loop",
        body: "Clear rules for what the agent may do on its own and what it must hand to a person to approve.",
      },
      {
        title: "Testing before launch",
        body: "We test it on real past questions and cases, and fix what it gets wrong before customers see it.",
      },
      {
        title: "A log you can read",
        body: "Every conversation and action is recorded, so you can check what it did and why.",
      },
    ],
    steps: [
      {
        title: "Find the task",
        body: "A working session with your team to find the repeat work worth handing over first.",
      },
      {
        title: "Build a first version",
        body: "A working agent inside your tools, limited to that one task and the information it needs.",
      },
      {
        title: "Test on real cases",
        body: "We run it against past questions and tickets, measure how often it is right and tighten the rules.",
      },
      {
        title: "Launch and measure",
        body: "We switch it on, track the time it saves each month and decide together what to hand over next.",
      },
    ],
    timing:
      "A first useful version of a single task usually takes a few weeks, so you can see the value before committing to more.",
    price: {
      headline: "We quote each agent as a fixed project after the first working session. Running costs for the AI model are shown upfront.",
      factors: [
        "How many systems the agent connects to",
        "How much of your information it needs to search",
        "Which channels it works in (WhatsApp, web chat, email)",
        "Monitoring and improvements after launch",
      ],
    },
    notFit: [
      "If the task follows a simple fixed rule, a plain automation is cheaper and more reliable than AI. We will tell you if that is the case.",
      "If a wrong answer could cause legal, medical or financial harm, the agent should only draft for a person to send, never act alone.",
    ],
    faq: [
      {
        q: "What is the difference between a chatbot and an AI agent?",
        a: "A chatbot answers questions. An agent can also take steps, like booking a slot, updating a record or sending a follow-up, within limits you set.",
      },
      {
        q: "Will it make things up?",
        a: "We reduce that risk by making it answer only from your information, limiting what it may do, testing it on real cases and keeping a log. Where accuracy is critical, a person approves the reply.",
      },
      {
        q: "Can it work on WhatsApp?",
        a: "Yes. We build agents for the WhatsApp Business Platform that answer common questions, collect details and pass the chat to a person when needed.",
      },
      {
        q: "Which AI model do you use?",
        a: "We choose per task, weighing quality, cost, speed and where your data is allowed to go. We work with OpenAI, Anthropic Claude and Google Gemini models.",
      },
      {
        q: "Is our data safe?",
        a: "We only connect the agent to the data the task needs, choose AI providers and settings that keep your data out of model training, and keep access logged.",
      },
      {
        q: "Will it replace my staff?",
        a: "No. It takes the repeat steps off them so they can spend time on customers and decisions.",
      },
    ],
    related: ["ai-agents", "web-apps", "ecommerce/odoo-implementation"],
    tools: ["OpenAI", "Claude", "Gemini", "n8n", "WhatsApp Business Platform", "Supabase"],
    image: photo("ai"),
    imageAlt: "A laptop glowing in the dark",
    closing: "Got a task your team repeats every day?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    category: "design",
    slug: "ui-ux-design",
    metaTitle: "UI/UX Design for Apps, Web Apps and Websites",
    metaDescription:
      "UI/UX design that people understand the first time: research, user flows, a clickable prototype tested with real users, and a design system.",
    h1: "UI/UX design",
    lead:
      "We design apps, web apps and websites that people understand the first time they use them. You get a clickable prototype tested with real users before anything is built, and a design system your developers can use.",
    forWho:
      "Teams building a new product, and products where people get stuck, drop off or keep contacting support.",
    problems: [
      "People sign up and then never come back.",
      "Support keeps answering the same how-do-I questions.",
      "Every new feature looks a little different from the last one.",
      "Your developers are waiting for designs that never quite get finished.",
    ],
    deliverables: [
      {
        title: "Research",
        body: "Short interviews, analytics and a walk through the product to find where people really get stuck.",
      },
      {
        title: "User flows",
        body: "The few journeys that matter most, mapped step by step before any visuals.",
      },
      {
        title: "Clickable prototype",
        body: "A prototype you can try on your phone and test with real people, so changes happen before code.",
      },
      {
        title: "Final screens",
        body: "Mobile and desktop designs, with every state covered: empty, loading, error and success.",
      },
      {
        title: "Design system",
        body: "Reusable components, colours, type and rules so the product stays consistent as it grows.",
      },
      {
        title: "Clean handover",
        body: "Organised Figma files with specs, and a designer available while your team builds.",
      },
    ],
    steps: [
      {
        title: "Find where people get stuck",
        body: "We review your data, talk to a handful of users and agree the problem worth solving first.",
      },
      {
        title: "Sketch and map the flows",
        body: "Quick layouts and flows to agree the structure before polishing anything.",
      },
      {
        title: "Prototype and test",
        body: "A clickable prototype tested with real users, then improved from what we see.",
      },
      {
        title: "Final design and handover",
        body: "Polished screens and a design system, handed to your developers or built by ours.",
      },
    ],
    timing:
      "A focused redesign of one flow, like sign-up or checkout, can take a few weeks. A full new product takes longer and is planned in stages.",
    price: {
      headline: "Design work is quoted as a fixed project after the first call, or as a monthly retainer for ongoing products.",
      factors: [
        "How many screens and user types are involved",
        "How much research and testing you want",
        "Whether you need a full design system",
        "Design only, or design and build together",
      ],
    },
    proof: {
      project: "insaf-academy",
      story:
        "Insaf Academy is a free learning platform with video lectures and mock exams for classes 9 to 12, in Urdu and English. We redesigned and rebuilt it, with clear class and course pages that lead students to the lectures and mock exams they need.",
    },
    alsoProjects: ["qriositynet", "the-heavenly-scents"],
    notFit: [
      "If you only need a logo or social posts, our brand design work is a better fit than a UX project.",
      "If the product has no users yet and the idea is untested, start with a short discovery sprint before full design.",
    ],
    faq: [
      {
        q: "What is the difference between UI and UX?",
        a: "UX (user experience) is how the product works: the steps, the structure and whether people can do what they came to do. UI (user interface) is how it looks: layout, colours, type and buttons. We do both together.",
      },
      {
        q: "Do we need research if we already know our users?",
        a: "A short round still helps. It usually confirms most of what you know and catches the one thing you did not.",
      },
      {
        q: "Can you work with our developers?",
        a: "Yes. We hand over in Figma with specs and stay available while your team builds, or our engineers build it.",
      },
      {
        q: "Can you redesign just one part of the product?",
        a: "Yes. Many projects start with one flow, such as onboarding or checkout, where the numbers show people dropping off.",
      },
      {
        q: "Which tools do you use?",
        a: "Figma for design and prototypes, plus testing and analytics tools to see how people use the product.",
      },
    ],
    related: ["mobile-apps/ios-android-app-development", "websites/custom-website-development", "web-apps"],
    tools: ["Figma", "FigJam", "Maze", "Hotjar", "Google Analytics"],
    image: photo("ux"),
    imageAlt: "A hand sketching wireframes on a tablet",
    closing: "Want a product people get the first time?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    category: "growth",
    slug: "seo",
    metaTitle: "SEO Services: Technical SEO, Content and Links",
    metaDescription:
      "SEO for businesses that want more enquiries from Google: technical fixes, pages built around real searches and plain monthly reports.",
    h1: "Search engine optimisation (SEO)",
    lead:
      "We help the right customers find you on Google: we fix what stops your pages from being indexed and loading fast, write pages around what people really search for, and report every month in plain numbers. No ranking promises, just steady work you can measure.",
    forWho:
      "Businesses that get little traffic from Google, or traffic that never turns into enquiries.",
    problems: [
      "Competitors show up on Google and you do not.",
      "Search Console shows pages that are not indexed and you do not know why.",
      "You get visits, but from people who are never going to buy.",
      "A previous agency sent reports full of numbers but nothing changed.",
    ],
    deliverables: [
      {
        title: "Technical audit and fixes",
        body: "Indexing errors, redirects, duplicate pages, speed and structured data checked in Search Console and fixed.",
      },
      {
        title: "Keyword research",
        body: "The searches your customers actually make, grouped into pages worth building, with buying-intent searches first.",
      },
      {
        title: "Pages that answer the search",
        body: "New and improved pages written in plain language around those searches, with clear next steps for visitors.",
      },
      {
        title: "Local and directory listings",
        body: "Google Business Profile, Bing Places and trusted directories set up consistently.",
      },
      {
        title: "Links that matter",
        body: "Mentions and links from relevant, trusted sites, earned rather than bought.",
      },
      {
        title: "Monthly report",
        body: "Visits, rankings and enquiries, what we did and what comes next, on one page.",
      },
    ],
    steps: [
      {
        title: "Audit",
        body: "We check your site in Search Console and with crawling tools, and list what is holding it back.",
      },
      {
        title: "Fix the foundations",
        body: "Technical issues first, so good content has a fair chance to rank.",
      },
      {
        title: "Build the right pages",
        body: "One priority at a time, starting with searches closest to a sale.",
      },
      {
        title: "Measure and repeat",
        body: "Every month we report what changed and pick the next priority together.",
      },
    ],
    timing:
      "Technical fixes can show results within weeks. New pages usually take a few months to build up rankings, which is why SEO works best as a steady monthly plan.",
    price: {
      headline: "SEO runs as a monthly plan after a one-off audit, so you can see what needs doing before committing.",
      factors: [
        "How large the site is and how many technical issues it has",
        "How many new pages you need each month",
        "How many markets or languages you target",
      ],
    },
    facts: {
      title: "Speed is part of SEO",
      intro: "Google uses Core Web Vitals, measured on real visits, as part of its page experience signals. The 'good' marks are:",
      items: [
        { label: "Largest Contentful Paint", value: "2.5 seconds or less" },
        { label: "Interaction to Next Paint", value: "200 milliseconds or less" },
        { label: "Cumulative Layout Shift", value: "0.1 or less" },
      ],
      sources: [{ label: "web.dev: Core Web Vitals thresholds", url: "https://web.dev/articles/defining-core-web-vitals-thresholds" }],
    },
    notFit: [
      "If you need enquiries this week, start with ads while SEO builds up. SEO takes months, not days.",
      "If nobody searches for what you sell yet, SEO will not create demand. We will tell you that after the research.",
    ],
    faq: [
      {
        q: "Can you guarantee first place on Google?",
        a: "No one honestly can. Rankings depend on Google and your competitors. We promise steady work and clear reporting on what it achieves.",
      },
      {
        q: "Why are some of my pages not indexed?",
        a: "Common reasons are duplicate or thin pages, redirects, blocked pages, slow loading, or Google simply not having crawled them yet. The audit shows which applies to you.",
      },
      {
        q: "Do you write the content?",
        a: "Yes, from interviews with you so it reflects your real experience, or we edit what your team writes.",
      },
      {
        q: "Do you buy links?",
        a: "No. Bought links break Google's rules and can get a site penalised. We earn mentions from relevant sites.",
      },
      {
        q: "Do you work on sites you did not build?",
        a: "Yes. We start with the audit and fix the biggest problems first.",
      },
    ],
    related: ["growth/aeo", "websites/custom-website-development", "growth/growth-support"],
    tools: ["Google Search Console", "Google Analytics", "Bing Webmaster Tools", "Ahrefs", "Screaming Frog"],
    image: photo("seo"),
    imageAlt: "A laptop showing search performance data",
    closing: "Want the right customers to find you?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    category: "growth",
    slug: "aeo",
    metaTitle: "Answer Engine Optimisation (AEO) for AI Search",
    metaDescription:
      "Help ChatGPT, Gemini, Perplexity and Google's AI answers describe your business correctly, with clear content, structured data and trusted mentions.",
    h1: "Answer engine optimisation (AEO)",
    lead:
      "More people now ask AI assistants like ChatGPT, Gemini and Perplexity instead of searching. We make sure these tools find clear, correct and trusted information about your business, so you are described accurately and have a fair chance to be mentioned.",
    forWho:
      "Businesses whose customers research online before buying, and who want to show up in AI answers as well as Google.",
    problems: [
      "You ask ChatGPT about your industry and your competitors come up, but you do not.",
      "AI tools describe your business with old or wrong details.",
      "Your site has the answers, but buried in long pages no tool can quote.",
    ],
    deliverables: [
      {
        title: "AI visibility check",
        body: "We ask the main AI assistants the questions your customers ask, and record what they say about you and your competitors.",
      },
      {
        title: "Answer-ready content",
        body: "Pages that answer common questions directly in the first lines, the way assistants like to quote them.",
      },
      {
        title: "Structured data",
        body: "Schema markup that tells machines who you are, what you offer, where you work and what your pages answer.",
      },
      {
        title: "Consistent profiles",
        body: "The same facts about your business across your site, Google Business Profile, directories and social profiles.",
      },
      {
        title: "Trusted mentions",
        body: "A plan to earn mentions on the sites and lists AI tools rely on in your industry.",
      },
    ],
    steps: [
      {
        title: "See what AI says now",
        body: "We test a set of real customer questions across assistants and record the answers.",
      },
      {
        title: "Fix your information",
        body: "Content, schema and profiles updated so the facts are clear and the same everywhere.",
      },
      {
        title: "Earn mentions",
        body: "Listings, reviews and articles on trusted sites in your field.",
      },
      {
        title: "Re-test monthly",
        body: "We repeat the same questions every month and report what changed.",
      },
    ],
    timing:
      "Fixing your own content and profiles takes a few weeks. How quickly AI answers change depends on when each tool refreshes its information, so we track it monthly.",
    price: {
      headline: "AEO is usually added to an SEO plan, or run as a one-off audit and fix project.",
      factors: [
        "How many questions and markets we track",
        "How much content needs rewriting",
        "How many profiles and listings need fixing",
      ],
    },
    notFit: [
      "If Google cannot crawl or index your site yet, fix SEO basics first. AEO builds on them.",
    ],
    faq: [
      {
        q: "Is AEO different from SEO?",
        a: "It builds on SEO, with more weight on direct answers, structured data, consistent facts and being mentioned by trusted sources.",
      },
      {
        q: "Can you make ChatGPT recommend us?",
        a: "No one controls that. We make sure the information these tools find about you is clear, correct and easy to trust, which improves your chances.",
      },
      {
        q: "Which AI tools do you check?",
        a: "ChatGPT, Google Gemini and AI Overviews, Microsoft Copilot and Perplexity, plus any tool common in your market.",
      },
      {
        q: "Do we need SEO first?",
        a: "Good SEO helps a lot, and we often do both together.",
      },
    ],
    related: ["growth/seo", "websites/custom-website-development", "growth/growth-support"],
    tools: ["ChatGPT", "Gemini", "Perplexity", "Copilot", "Schema.org", "Google Search Console"],
    image: photo("aeo"),
    imageAlt: "A phone showing an AI assistant in front of a laptop",
    closing: "Want AI assistants to describe you correctly?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    category: "growth",
    slug: "aso",
    metaTitle: "App Store Optimisation (ASO) for iOS and Android",
    metaDescription:
      "ASO that helps the right people find and install your app: keyword research, titles, descriptions, screenshots and a plan for ratings.",
    h1: "App store optimisation (ASO)",
    lead:
      "We help the right people find and install your app on the App Store and Google Play. We research the words they search with, rewrite your listing within each store's limits and redesign the screenshots that make people tap Install.",
    forWho:
      "Apps that are live but get few installs from store search, and new apps preparing for launch.",
    problems: [
      "Your app is live but nobody finds it in the store.",
      "People visit your listing and leave without installing.",
      "Your screenshots show features, not why the app is worth having.",
      "A few bad reviews sit at the top and nobody replies to them.",
    ],
    deliverables: [
      {
        title: "Keyword research",
        body: "The words people actually type when looking for apps like yours, in each country you target.",
      },
      {
        title: "Listing copy",
        body: "App name, subtitle, keywords and descriptions written within each store's character limits.",
      },
      {
        title: "Screenshots and preview",
        body: "Store graphics that show the main benefit in the first two screenshots, where most people decide.",
      },
      {
        title: "Ratings and reviews plan",
        body: "When to ask happy users for a rating, and replies for the unhappy ones.",
      },
      {
        title: "Tracking",
        body: "Store rankings, page views and install rates tracked so we can see what each change did.",
      },
    ],
    steps: [
      {
        title: "Audit the listing",
        body: "We compare your listing with the apps people choose instead.",
      },
      {
        title: "Research and rewrite",
        body: "New keywords and copy for each store and country.",
      },
      {
        title: "Redesign the graphics",
        body: "New screenshots, tested on Google Play where store experiments allow it.",
      },
      {
        title: "Track and adjust",
        body: "We watch rankings and installs for a few weeks and refine.",
      },
    ],
    timing:
      "A full listing update takes a couple of weeks. Rankings and install rates usually settle a few weeks after the new listing goes live.",
    price: {
      headline: "ASO is quoted as a one-off listing project, with optional monthly tracking and updates.",
      factors: [
        "One store or both",
        "How many countries and languages",
        "Whether new screenshots and a preview video are needed",
      ],
    },
    facts: {
      title: "The space you have to work with",
      intro: "Every word counts because the stores give you very little room.",
      items: [
        { label: "App Store: app name", value: "Up to 30 characters" },
        { label: "App Store: subtitle", value: "Up to 30 characters" },
        { label: "App Store: keywords field", value: "100 characters, separated by commas" },
        { label: "Google Play: app title", value: "Up to 30 characters" },
        { label: "Google Play: short description", value: "Up to 80 characters" },
        { label: "Google Play: full description", value: "Up to 4,000 characters" },
      ],
      sources: [
        { label: "Apple: Creating your product page", url: "https://developer.apple.com/app-store/product-page/" },
        { label: "Google Play Console Help: store listing best practices", url: "https://support.google.com/googleplay/android-developer/answer/13393723" },
      ],
    },
    notFit: [
      "If the app crashes often or has a low rating for real reasons, fix the app first. ASO cannot outrun a poor experience.",
    ],
    faq: [
      {
        q: "Do you need access to our store accounts?",
        a: "A team role on App Store Connect and Google Play Console is enough. You keep ownership.",
      },
      {
        q: "Can you design the screenshots?",
        a: "Yes. Store graphics are part of the work.",
      },
      {
        q: "Does ASO work for new apps?",
        a: "Yes. A strong listing at launch helps the app get found from the first day.",
      },
      {
        q: "Can you translate the listing for other countries?",
        a: "Yes. We research keywords per country rather than translating word for word, because people search differently in each market.",
      },
    ],
    related: ["mobile-apps/ios-android-app-development", "growth/seo", "design/ui-ux-design"],
    tools: ["App Store Connect", "Google Play Console", "Firebase", "Figma"],
    image: photo("aso"),
    imageAlt: "A phone on a wooden desk",
    closing: "Want more people to find your app?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    category: "growth",
    slug: "growth-support",
    metaTitle: "Website and App Support and Growth Retainers",
    metaDescription:
      "A monthly team for your live website or app: fixes, speed work, analytics, A/B tests and new features, with a short report every month.",
    h1: "Growth and support retainers",
    lead:
      "We stay on after launch as your monthly product team: fixing what breaks, keeping things fast and secure, and shipping improvements every month based on what your analytics show. You get a short report each month on what changed.",
    forWho:
      "Businesses with a live website, store or app that needs steady care and improvement but not a full in-house team.",
    problems: [
      "The site launched, and then nothing changed for a year.",
      "Small fixes sit in a queue because your developer is busy elsewhere.",
      "You do not know which pages or features actually bring in customers.",
      "Plugins, apps and libraries are out of date and you worry about security.",
    ],
    deliverables: [
      {
        title: "Fixes and updates",
        body: "Bugs fixed, plugins and libraries updated, and backups and uptime checked.",
      },
      {
        title: "Analytics you can use",
        body: "Tracking set up so you know what people do and where they leave.",
      },
      {
        title: "Speed work",
        body: "Pages and apps kept fast, measured against Google's Core Web Vitals.",
      },
      {
        title: "Tests and improvements",
        body: "Changes tried against the current version before they go live for everyone.",
      },
      {
        title: "Monthly releases",
        body: "New features and improvements shipped on a steady rhythm from a shared board.",
      },
      {
        title: "A one-page report",
        body: "What we did, what changed in the numbers and what we plan next.",
      },
    ],
    steps: [
      {
        title: "Audit and agree goals",
        body: "We review the product and agree the few numbers that matter this quarter.",
      },
      {
        title: "Work from a shared board",
        body: "You add requests, we size them and agree each month's priorities with you.",
      },
      {
        title: "Ship every month",
        body: "Regular releases and a short report on what changed.",
      },
      {
        title: "Review each quarter",
        body: "We look back at the results and plan the next quarter.",
      },
    ],
    timing: "Plans run month to month after a short onboarding audit.",
    price: {
      headline: "A fixed monthly fee for a set amount of work, agreed after the onboarding audit. You can pause or change it.",
      factors: [
        "How many products we look after",
        "How much new feature work you want each month",
        "Response times you need for urgent fixes",
      ],
    },
    proof: {
      project: "servicemarket",
      story:
        "ServiceMarket is the UAE's marketplace for cleaning, moving and home maintenance. We work on their web portal on a monthly retainer: booking flows, service pages and regular releases.",
    },
    notFit: [
      "If you only need one small change, a one-off fix is simpler than a monthly plan.",
    ],
    faq: [
      {
        q: "Do we need to have built the product with you?",
        a: "No. We often look after products built by other teams, after a short audit.",
      },
      {
        q: "How does the monthly plan work?",
        a: "A set amount of work each month, a shared board for requests and a monthly report. You can pause or change it.",
      },
      {
        q: "What if something breaks urgently?",
        a: "Urgent fixes jump the queue. We agree response times for urgent issues when we set up the plan.",
      },
      {
        q: "What do you need from us?",
        a: "Access to the code, hosting and analytics, and one person who can make decisions.",
      },
    ],
    related: ["growth/seo", "websites/custom-website-development", "shopify/shopify-development"],
    tools: ["Google Analytics", "Microsoft Clarity", "Sentry", "Vercel", "Hostinger"],
    image: photo("growth"),
    imageAlt: "A laptop showing an analytics dashboard",
    closing: "Want your product to keep getting better?",
    updated: UPDATED,
  },
];

export const SERVICE_PAGES: ServicePage[] = [...CORE_PAGES, ...BUILD_PAGES, ...COMMERCE_PAGES];

export function getServicePage(category: string, slug: string) {
  return SERVICE_PAGES.find((p) => p.category === category && p.slug === slug);
}

export function livePagesIn(category: string) {
  return SERVICE_PAGES.filter((p) => p.category === category);
}

export const isLive = (category: string, slug: string) => Boolean(getServicePage(category, slug));

export const serviceUrl = (p: { category: string; slug: string }) => `/services/${p.category}/${p.slug}`;

export { LEGACY_SERVICE_URL } from "@/content/legacy-services";
