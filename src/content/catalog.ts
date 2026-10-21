/**
 * The service catalogue behind the mega menu and the /services pages.
 *
 * Every service Venlynk plans to offer is listed here, grouped the way the
 * menu shows it. A service only becomes a page, a menu link and a sitemap
 * entry once its written content exists in service-pages.ts. Until then it is
 * plain text on its category page, so nothing links to an empty page.
 */

export type CategorySlug =
  | "websites"
  | "web-apps"
  | "mobile-apps"
  | "shopify"
  | "ecommerce"
  | "ai-agents"
  | "design"
  | "growth";

export type CatalogItem = { slug: string; title: string };
export type CatalogGroup = { title: string; items: CatalogItem[] };

export type CategoryCopy = {
  slug: CategorySlug;
  /** Label in the menu rail. */
  label: string;
  /** One line under the label in the mobile menu and on /services. */
  short: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Answer first: what this category is and who it is for, in two sentences. */
  lead: string;
  /** Short paragraphs under the service list. */
  body: string[];
  /** Plain questions people ask when they are choosing within this category. */
  choose: { q: string; a: string }[];
  faq: { q: string; a: string }[];
  /** Project slugs shown as proof. Only real, delivered work. */
  proof: string[];
  image: string;
  imageAlt: string;
  closing: string;
  groups: CatalogGroup[];
};

const i = (slug: string, title: string): CatalogItem => ({ slug, title });
const photo = (k: string) => `/images/services/${k}.webp`;

export const CATEGORIES: CategoryCopy[] = [
  {
    slug: "websites",
    label: "Websites",
    short: "Business sites, WordPress, Next.js",
    metaTitle: "Website Design and Development Services",
    metaDescription:
      "Custom websites, WordPress and Next.js builds, redesigns and website care. Fast pages your team can update, built to bring in enquiries.",
    h1: "Website design and development",
    lead:
      "We design and build websites that load fast, explain what you do in a few seconds and turn visitors into enquiries. Your team can update the pages themselves after launch.",
    body: [
      "Most of our website work falls into three kinds. A business site that has to win trust and enquiries. A content site your team updates every week, where WordPress usually fits best. And a site that needs speed or custom features, where we build in Next.js.",
      "Whichever it is, the work starts with what the site has to achieve and who it is for, not with a template. We agree the pages and the words first, then design, then build with a working preview you can click through every week.",
    ],
    choose: [
      {
        q: "WordPress or Next.js?",
        a: "WordPress suits sites with lots of content that your team edits often. Next.js suits sites that need top speed, custom features or a link to an app or database. We recommend one after the first call and explain why.",
      },
      {
        q: "New site or fix the one we have?",
        a: "If the design still works and the problems are speed, content or small features, we improve what you have. If the site is hard to edit, slow at its core or no longer matches the business, a rebuild usually costs less over a year.",
      },
    ],
    faq: [
      {
        q: "How long does a website take?",
        a: "A business website usually takes 4 to 8 weeks from the first call to launch. The biggest factor is how quickly the words and photos are ready.",
      },
      {
        q: "Will we be able to edit the site ourselves?",
        a: "Yes. Every site comes with an editor your team can use for pages, posts and images, and a short recorded walkthrough.",
      },
      {
        q: "Do you write the content?",
        a: "We can. Most clients give us their notes and we turn them into clear pages, or we edit what their team writes.",
      },
      {
        q: "Who owns the site?",
        a: "You do. The code, the design files, the domain and every account are in your name.",
      },
    ],
    proof: ["dxb-off-plan", "care-foundation", "techoutsource"],
    image: photo("web"),
    imageAlt: "Code on a laptop screen",
    closing: "Need a website that brings in enquiries?",
    groups: [
      {
        title: "Website development",
        items: [
          i("custom-website-development", "Custom website development"),
          i("corporate-websites", "Business and corporate websites"),
          i("landing-page-development", "Landing page development"),
          i("website-redesign", "Website redesign"),
          i("multilingual-websites", "Multilingual websites"),
          i("nextjs-development", "Next.js development"),
          i("react-development", "React website development"),
          i("headless-cms-development", "Headless CMS websites"),
          i("webflow-development", "Webflow development"),
          i("wix-squarespace-websites", "Wix and Squarespace websites"),
        ],
      },
      {
        title: "WordPress",
        items: [
          i("wordpress-development", "WordPress development"),
          i("wordpress-theme-development", "Custom WordPress themes"),
          i("wordpress-plugin-development", "WordPress plugin development"),
          i("elementor-development", "Elementor development"),
          i("gutenberg-development", "Gutenberg block development"),
          i("wordpress-migration", "WordPress migration"),
          i("wordpress-maintenance", "WordPress maintenance"),
          i("wordpress-speed-optimisation", "WordPress speed optimisation"),
          i("wordpress-security", "WordPress security and malware removal"),
          i("wordpress-seo", "WordPress SEO"),
          i("wordpress-multisite", "WordPress multisite"),
          i("wordpress-membership-sites", "WordPress membership sites"),
          i("wordpress-lms", "WordPress LMS and eLearning"),
          i("wordpress-booking-websites", "WordPress booking websites"),
          i("directory-websites", "Directory and job board websites"),
          i("white-label-wordpress", "White-label WordPress for agencies"),
        ],
      },
      {
        title: "Website care",
        items: [
          i("website-maintenance", "Website maintenance and support"),
          i("website-speed-optimisation", "Speed and Core Web Vitals"),
          i("hosting-setup", "Hosting, domain and email setup"),
          i("website-accessibility", "Website accessibility (WCAG)"),
          i("analytics-setup", "Analytics and tracking setup"),
        ],
      },
    ],
  },
  {
    slug: "web-apps",
    label: "Web apps",
    short: "SaaS, MVPs, portals, dashboards",
    metaTitle: "Custom Web App Development Services",
    metaDescription:
      "Custom web apps, SaaS products, MVPs, dashboards, portals and booking systems, designed and built by one team with weekly demos.",
    h1: "Custom web app development",
    lead:
      "We design and build web apps that run part of your business: customer portals, booking and ticketing systems, dashboards and full SaaS products. You see working software every week, not a big reveal at the end.",
    body: [
      "A web app is software people log into and use in the browser, on a laptop or a phone. It is the right choice when a spreadsheet, a plugin or an off-the-shelf tool no longer fits how you work, or when the software is the product you sell.",
      "We start by agreeing the smallest version worth launching. That keeps the first release affordable and puts it in front of real users sooner, so the next features are chosen from what people actually do.",
    ],
    choose: [
      {
        q: "Do we need a custom app, or will an existing tool do?",
        a: "If an existing tool covers most of what you need, use it and we can connect it to your other systems. Custom software pays off when the process is what makes you different, or when you are paying for several tools that still leave gaps.",
      },
      {
        q: "MVP or full product?",
        a: "Start with an MVP (a minimum viable product: the smallest version that does the core job well) when you are not yet sure how people will use it. Build the fuller version once the first one shows what matters.",
      },
    ],
    faq: [
      {
        q: "How long does a first version take?",
        a: "Usually 8 to 16 weeks, depending on how many types of users and screens it has. You get a plan with milestones before the build starts.",
      },
      {
        q: "What do you build with?",
        a: "Mostly Next.js and React on the front end, with Node.js, NestJS or Laravel behind it, and PostgreSQL, Supabase or Firebase for data. We pick what your team can maintain.",
      },
      {
        q: "Can you take over an app another team built?",
        a: "Yes. We start with a short code review and tell you plainly whether to improve it or rebuild parts of it.",
      },
      {
        q: "Who owns the code?",
        a: "You do, from the first commit, in a repository under your account.",
      },
    ],
    proof: ["frontline-ticketing", "mnm-estates", "servicemarket"],
    image: photo("web"),
    imageAlt: "Code on a laptop screen",
    closing: "Got a process that has outgrown spreadsheets?",
    groups: [
      {
        title: "Build",
        items: [
          i("custom-web-app-development", "Custom web app development"),
          i("saas-development", "SaaS development"),
          i("mvp-development", "MVP development"),
          i("pwa-development", "Progressive web apps"),
          i("enterprise-web-apps", "Enterprise web applications"),
        ],
      },
      {
        title: "Solutions",
        items: [
          i("dashboard-development", "Dashboards and admin panels"),
          i("portal-development", "Customer and client portals"),
          i("booking-system-development", "Booking and reservation systems"),
          i("ticketing-platform-development", "Ticketing and event platforms"),
          i("crm-development", "CRM development"),
          i("internal-tools-development", "Internal tools and custom ERP"),
          i("marketplace-development", "Marketplace platforms"),
          i("lms-development", "LMS and eLearning platforms"),
          i("fintech-web-apps", "Fintech web apps"),
          i("healthcare-portals", "Healthcare portals"),
          i("real-estate-platforms", "Real estate platforms"),
        ],
      },
      {
        title: "Engineering",
        items: [
          i("api-development", "API development and integration"),
          i("payment-gateway-integration", "Payment gateway integration"),
          i("third-party-integrations", "Third-party integrations"),
          i("nodejs-development", "Node.js and NestJS development"),
          i("supabase-firebase-development", "Supabase and Firebase back ends"),
          i("cloud-devops", "Cloud and DevOps"),
          i("legacy-modernisation", "Legacy app modernisation"),
          i("qa-testing", "QA and testing"),
          i("web-app-maintenance", "Web app maintenance and support"),
        ],
      },
    ],
  },
  {
    slug: "mobile-apps",
    label: "Mobile apps",
    short: "iOS and Android, Flutter, React Native",
    metaTitle: "Mobile App Development for iOS and Android",
    metaDescription:
      "iOS and Android apps built once in Flutter or React Native, from first version to App Store and Google Play release and ongoing updates.",
    h1: "Mobile app development for iOS and Android",
    lead:
      "We design and build mobile apps for iPhone and Android from one shared codebase, then handle the App Store and Google Play releases. One team takes the app from idea to the first thousand users and beyond.",
    body: [
      "Most apps we build use Flutter or React Native. Both let one codebase run on iOS and Android, which roughly halves the work compared with building two separate apps, and keeps both versions in step.",
      "You install a test build on your own phone every week, so you feel how the app works long before launch. After release we keep shipping updates, fixing what users report and adding the features they ask for.",
    ],
    choose: [
      {
        q: "Flutter or React Native?",
        a: "Both are solid choices. React Native fits teams that already work in JavaScript or have a React website. Flutter gives very consistent screens across devices. We recommend one based on your team and your features.",
      },
      {
        q: "Do we need an app, or would a web app do?",
        a: "If people use it now and then, a web app that works well on phones may be enough. An app earns its place when people use it often, need notifications, the camera or offline use, or expect to find you in the app stores.",
      },
    ],
    faq: [
      {
        q: "How long does a first version take?",
        a: "Usually 8 to 16 weeks for a first release, depending on the number of screens and integrations.",
      },
      {
        q: "Do you handle App Store and Google Play?",
        a: "Yes. We prepare the listings and screenshots, submit the builds and deal with any changes Apple or Google ask for.",
      },
      {
        q: "Can the app share data with our website?",
        a: "Yes. The app and the website can use the same back end, so accounts, orders and content stay in sync.",
      },
      {
        q: "What happens after launch?",
        a: "We can stay on with a monthly plan for updates, fixes and new features, or hand over to your team with documentation.",
      },
    ],
    proof: ["tilawat", "frontline-ticketing", "ice"],
    image: photo("mobile"),
    imageAlt: "Hands using an app on a phone",
    closing: "Got an app idea for iOS and Android?",
    groups: [
      {
        title: "Platforms",
        items: [
          i("ios-android-app-development", "iOS and Android app development"),
          i("ios-app-development", "iPhone (iOS) app development"),
          i("android-app-development", "Android app development"),
          i("cross-platform-app-development", "Cross-platform app development"),
          i("flutter-app-development", "Flutter app development"),
          i("react-native-app-development", "React Native app development"),
          i("mobile-app-mvp", "Mobile app MVP"),
          i("tablet-app-development", "Tablet and iPad apps"),
        ],
      },
      {
        title: "App types",
        items: [
          i("ecommerce-app-development", "Ecommerce and shopping apps"),
          i("on-demand-app-development", "On-demand and delivery apps"),
          i("booking-app-development", "Booking and ticketing apps"),
          i("fintech-app-development", "Fintech and wallet apps"),
          i("health-fitness-app-development", "Health and fitness apps"),
          i("education-app-development", "Education and eLearning apps"),
          i("social-app-development", "Social and community apps"),
          i("faith-app-development", "Faith and Quran apps"),
          i("travel-app-development", "Travel and mobility apps"),
        ],
      },
      {
        title: "Lifecycle",
        items: [
          i("mobile-app-design", "Mobile app UI/UX design"),
          i("app-backend-development", "App back end and APIs"),
          i("in-app-purchases", "Payments and in-app purchases"),
          i("app-store-publishing", "App Store and Google Play publishing"),
          i("app-modernisation", "App rebuild and modernisation"),
          i("app-maintenance", "App maintenance and support"),
          i("web-to-app-conversion", "Web app to mobile app"),
        ],
      },
    ],
  },
  {
    slug: "shopify",
    label: "Shopify",
    short: "Stores, themes, migrations, Plus",
    metaTitle: "Shopify Agency: Stores, Themes and Migrations",
    metaDescription:
      "Shopify store setup, custom themes, migrations to Shopify, Shopify Plus, apps and ongoing support from a team that has launched real stores.",
    h1: "Shopify development",
    lead:
      "We set up, design and build Shopify stores that are easy to shop on a phone and easy for you to run. That covers new stores, custom themes, moves from other platforms and help after launch.",
    body: [
      "Shopify takes care of hosting, security and checkout, so most of the work is making the store yours: a theme that looks like your brand, product pages that answer buyers' questions, and payments, shipping and apps set up for the countries you sell in.",
      "We have launched Shopify stores for fashion, footwear and fragrance brands. The lessons repeat: shoppers buy when they can find the right product fast, trust the store, and pay the way they are used to paying.",
    ],
    choose: [
      {
        q: "Ready-made theme or custom theme?",
        a: "A good ready-made theme, set up properly, is enough for most new stores and keeps the cost down. A custom theme is worth it when your brand, your products or how people shop need something a theme cannot do well.",
      },
      {
        q: "Shopify or WooCommerce?",
        a: "Shopify suits brands that want a store they can run without managing hosting or updates. WooCommerce suits businesses already on WordPress or needing unusual checkout rules. We will tell you which fits on the first call.",
      },
    ],
    faq: [
      {
        q: "Do I own my Shopify store?",
        a: "Yes. The store is created in your name and we work as collaborators. You stay in control of the account and the billing.",
      },
      {
        q: "Can you move my store to Shopify from another platform?",
        a: "Yes. We move products, customers and, where possible, past orders, and set up redirects so you keep your search traffic.",
      },
      {
        q: "Can my customers pay cash on delivery?",
        a: "Yes. Shopify supports cash on delivery as a manual payment method, and we set it up alongside card and wallet payments.",
      },
      {
        q: "Do you help after launch?",
        a: "Yes, with a monthly plan for changes, new features, speed checks and app updates.",
      },
    ],
    proof: ["stylefits", "replay", "the-heavenly-scents"],
    image: photo("commerce"),
    imageAlt: "Paying online with a card on a laptop",
    closing: "Ready to sell on Shopify?",
    groups: [
      {
        title: "Build",
        items: [
          i("shopify-store-setup", "Shopify store setup"),
          i("shopify-development", "Shopify development"),
          i("shopify-theme-development", "Custom Shopify theme development"),
          i("shopify-theme-customisation", "Shopify theme customisation"),
          i("shopify-plus-development", "Shopify Plus development"),
          i("headless-shopify", "Headless Shopify (Hydrogen)"),
          i("shopify-b2b", "Shopify B2B and wholesale"),
          i("shopify-markets", "Multi-country stores (Markets)"),
        ],
      },
      {
        title: "Migration",
        items: [
          i("shopify-migration", "Migration to Shopify"),
          i("woocommerce-to-shopify", "WooCommerce to Shopify"),
          i("wix-to-shopify", "Wix and Squarespace to Shopify"),
          i("magento-to-shopify", "Magento to Shopify"),
          i("etsy-to-shopify", "Etsy to Shopify"),
          i("bigcommerce-to-shopify", "BigCommerce to Shopify"),
        ],
      },
      {
        title: "Apps and integrations",
        items: [
          i("shopify-app-setup", "Shopify app setup"),
          i("shopify-payments-setup", "Payment gateway setup"),
          i("shopify-erp-integration", "Shopify and Odoo / ERP integration"),
          i("shopify-app-development", "Custom Shopify apps"),
          i("shopify-pos-setup", "Shopify POS setup"),
        ],
      },
      {
        title: "Grow and care",
        items: [
          i("shopify-seo", "Shopify SEO"),
          i("shopify-speed-optimisation", "Shopify speed optimisation"),
          i("shopify-cro", "Conversion optimisation (CRO)"),
          i("shopify-maintenance", "Shopify maintenance and support"),
          i("shopify-email-marketing", "Email marketing (Klaviyo)"),
          i("shopify-store-audit", "Shopify store audit"),
        ],
      },
    ],
  },
  {
    slug: "ecommerce",
    label: "Ecommerce",
    short: "WooCommerce, marketplaces, Odoo",
    metaTitle: "Ecommerce, WooCommerce and Odoo Development",
    metaDescription:
      "Ecommerce websites, WooCommerce stores, marketplace setup on Etsy and more, and Odoo to run orders, stock and accounts in one place.",
    h1: "Ecommerce development",
    lead:
      "We build online stores beyond Shopify, set up shops on marketplaces like Etsy, and connect the systems behind the store so orders, stock and delivery run without copying data by hand.",
    body: [
      "Selling online is more than the storefront. Orders have to reach the warehouse, stock has to stay right across channels, couriers need labels and the accounts need to add up. A lot of our ecommerce work is joining those pieces together.",
      "For the storefront we work with WooCommerce, custom builds and headless setups, and for operations with Odoo. On marketplaces we help you set up properly and write listings around what buyers actually search for.",
    ],
    choose: [
      {
        q: "Own store or marketplace?",
        a: "A marketplace brings buyers who are already looking, but takes fees and owns the customer relationship. Your own store costs more to bring traffic to, but every customer is yours. Many brands do both, and we help connect them.",
      },
      {
        q: "When does Odoo make sense?",
        a: "When you are running sales, stock, purchasing and accounts across spreadsheets and separate apps, and mistakes or double entry are costing you time.",
      },
    ],
    faq: [
      {
        q: "Can you connect our store to our stock and accounts?",
        a: "Yes. We connect stores to Odoo and other systems so orders, stock and customers sync automatically.",
      },
      {
        q: "Do you set up courier and payment integrations?",
        a: "Yes, including local payment gateways and cash on delivery where your customers expect it.",
      },
      {
        q: "Can you help us sell on Etsy?",
        a: "Yes. We research what buyers search for, set up the shop and write listings built to be found.",
      },
      {
        q: "What if we already have a store?",
        a: "We start with a short audit of where shoppers drop off and what slows your team down, then fix the biggest problems first.",
      },
    ],
    proof: ["replay", "stylefits", "the-jumbo-jump"],
    image: photo("commerce"),
    imageAlt: "Paying online with a card on a laptop",
    closing: "Want orders, stock and delivery to run themselves?",
    groups: [
      {
        title: "Online stores",
        items: [
          i("ecommerce-development", "Ecommerce website development"),
          i("woocommerce-development", "WooCommerce development"),
          i("woocommerce-plugin-development", "WooCommerce themes and plugins"),
          i("woocommerce-migration", "WooCommerce migration"),
          i("woocommerce-maintenance", "WooCommerce speed and maintenance"),
          i("woocommerce-subscriptions", "WooCommerce subscriptions"),
          i("woocommerce-b2b", "WooCommerce B2B and wholesale"),
          i("headless-commerce", "Headless commerce"),
          i("custom-ecommerce-development", "Custom ecommerce development"),
          i("magento-bigcommerce", "Magento and BigCommerce"),
        ],
      },
      {
        title: "Marketplaces",
        items: [
          i("multi-vendor-marketplace", "Multi-vendor marketplaces"),
          i("amazon-store-setup", "Amazon store setup"),
          i("daraz-store-setup", "Daraz store setup"),
          i("etsy-store-setup", "Etsy store setup"),
          i("noon-store-setup", "Noon and Amazon.ae setup"),
          i("ebay-store-setup", "eBay store setup"),
          i("social-commerce", "TikTok Shop and Instagram Shop"),
        ],
      },
      {
        title: "Operations",
        items: [
          i("odoo-implementation", "Odoo implementation"),
          i("odoo-ecommerce-integration", "Odoo ecommerce integration"),
          i("inventory-management", "Inventory and order management"),
          i("shipping-integration", "Shipping and courier integration"),
          i("ecommerce-payment-gateways", "Ecommerce payment gateways"),
          i("product-data-management", "Product catalogue management"),
          i("ecommerce-analytics", "Ecommerce analytics"),
        ],
      },
      {
        title: "Business models",
        items: [
          i("d2c-ecommerce", "D2C brand stores"),
          i("subscription-ecommerce", "Subscription commerce"),
          i("ecommerce-mobile-apps", "Ecommerce mobile apps"),
        ],
      },
    ],
  },
  {
    slug: "ai-agents",
    label: "AI agents",
    short: "Agents, chatbots, automation",
    metaTitle: "AI Agent Development and Business Automation",
    metaDescription:
      "AI agents, customer support chatbots, WhatsApp agents and workflow automation that work inside your tools, with a person approving what matters.",
    h1: "AI agents and automation",
    lead:
      "We build AI agents and automations that take repeat work off your team: answering customer questions, sorting enquiries, filling in records and moving data between your apps. A person stays in charge of anything that matters.",
    body: [
      "An AI agent is software that can read a request, look things up in your systems and take a step, like drafting a reply, booking a slot or updating a record. A chatbot answers questions. An automation moves data between apps on a fixed rule. Most useful projects mix all three.",
      "We start with one task your team repeats every day, build it inside the tools you already use, and measure the hours it saves before adding the next one. Where a mistake would cost you, a person approves the step.",
    ],
    choose: [
      {
        q: "Chatbot, agent or simple automation?",
        a: "If the task follows a fixed rule, a plain automation is cheaper and more reliable. If it needs answers from your documents, a chatbot fits. If it needs judgement and several steps across systems, that is an agent.",
      },
      {
        q: "Which AI model will you use?",
        a: "We choose per task, weighing quality, cost, speed and where your data is allowed to go. We work with OpenAI, Anthropic Claude and Google Gemini models.",
      },
    ],
    faq: [
      {
        q: "Will AI replace my team?",
        a: "No. It takes the repeat steps off them. People stay in charge of decisions and of anything a customer sees when the stakes are high.",
      },
      {
        q: "Can it work on WhatsApp?",
        a: "Yes. We build agents for WhatsApp Business that answer common questions, collect details and hand the chat to a person when needed.",
      },
      {
        q: "How do you stop it making things up?",
        a: "We ground answers in your own documents and data, limit what it is allowed to do, test it on real past questions before launch and keep a log you can review.",
      },
      {
        q: "How soon will we see a result?",
        a: "A first useful version of a single task usually takes a few weeks, so you can judge the value before committing to more.",
      },
    ],
    proof: [],
    image: photo("ai"),
    imageAlt: "A laptop glowing in the dark",
    closing: "Got a task your team repeats every day?",
    groups: [
      {
        title: "Agents",
        items: [
          i("ai-agent-development", "AI agent development"),
          i("ai-customer-support-agents", "AI customer support agents"),
          i("ai-sales-agents", "AI sales and lead qualification"),
          i("whatsapp-ai-agents", "WhatsApp AI agents"),
          i("ai-voice-agents", "AI voice agents"),
          i("ai-booking-agents", "AI booking and scheduling agents"),
          i("multi-agent-systems", "Multi-agent systems"),
        ],
      },
      {
        title: "Chatbots and assistants",
        items: [
          i("ai-chatbot-development", "AI chatbot development"),
          i("rag-development", "Knowledge base assistants (RAG)"),
          i("ai-document-processing", "Document processing and extraction"),
          i("ai-search", "AI search for websites and stores"),
          i("ai-copilot-development", "AI copilots inside your product"),
        ],
      },
      {
        title: "Automation",
        items: [
          i("workflow-automation", "Workflow automation"),
          i("crm-automation", "CRM and email automation"),
          i("ai-content-automation", "AI content workflows"),
          i("business-process-automation", "Back-office automation"),
        ],
      },
      {
        title: "Build and integrate",
        items: [
          i("llm-integration", "OpenAI, Claude and Gemini integration"),
          i("ai-integration", "AI features in existing apps"),
          i("mcp-development", "MCP servers and tool integrations"),
          i("ai-mvp-development", "AI MVP and AI SaaS development"),
          i("ai-consulting", "AI consulting and readiness audit"),
          i("ai-guardrails", "AI testing, guardrails and monitoring"),
        ],
      },
    ],
  },
  {
    slug: "design",
    label: "Design",
    short: "UI/UX, product, web, brand",
    metaTitle: "UI/UX Design and Product Design Services",
    metaDescription:
      "UI/UX design for apps, web apps and websites, from research and prototypes to design systems, plus brand identity and pitch decks.",
    h1: "UI/UX and product design",
    lead:
      "We design apps, web apps and websites that people understand the first time they use them. You test a clickable prototype with real users before anything gets built.",
    body: [
      "Good design here means fewer support questions, more sign-ups and fewer people giving up halfway. We get there by finding where people get stuck today, designing the few journeys that matter most and testing them early.",
      "Our designers work next to our engineers, so what we design can be built on time and on budget. We also design brands, pitch decks and marketing pages when a product needs to look as good as it works.",
    ],
    choose: [
      {
        q: "Do we need research, or can you just design?",
        a: "A short round of research is worth it on almost every project. It usually confirms most of what you already know and catches the one thing you did not.",
      },
      {
        q: "Design only, or design and build?",
        a: "Both work. We can hand over clean Figma files to your developers, or our engineers can build what we design.",
      },
    ],
    faq: [
      {
        q: "What do we get at the end?",
        a: "A tested prototype, final screens for mobile and desktop, and a design system your team can keep using.",
      },
      {
        q: "What tools do you use?",
        a: "Figma for design and prototypes, plus testing and analytics tools to watch how people use the product.",
      },
      {
        q: "Can you redesign part of our product?",
        a: "Yes. Many projects start with one flow, like sign-up or checkout, where the numbers show people dropping off.",
      },
      {
        q: "Do you do brand identity too?",
        a: "Yes: logos, brand guidelines, pitch decks and social media designs.",
      },
    ],
    proof: ["insaf-academy", "qriositynet", "the-heavenly-scents"],
    image: photo("ux"),
    imageAlt: "A hand sketching wireframes on a tablet",
    closing: "Want a product people get the first time?",
    groups: [
      {
        title: "Product design",
        items: [
          i("ui-ux-design", "UI/UX design"),
          i("product-design", "Product design"),
          i("app-design", "Mobile app design"),
          i("dashboard-design", "Web app and dashboard design"),
          i("design-systems", "Design systems"),
          i("ux-research", "UX research and user testing"),
          i("ux-audit", "UX audit"),
          i("prototyping", "Prototyping"),
        ],
      },
      {
        title: "Web design",
        items: [
          i("website-design", "Website design"),
          i("landing-page-design", "Landing page design"),
          i("ecommerce-design", "Ecommerce and Shopify design"),
          i("figma-to-code", "Figma to code"),
        ],
      },
      {
        title: "Brand",
        items: [
          i("brand-identity", "Brand identity and logo design"),
          i("rebranding", "Rebranding"),
          i("pitch-deck-design", "Pitch deck design"),
          i("social-media-design", "Social media creatives"),
          i("motion-design", "Motion graphics and product videos"),
        ],
      },
      {
        title: "By audience",
        items: [
          i("startup-design", "Design for startups"),
          i("saas-design", "SaaS design"),
          i("b2b-design", "B2B design"),
        ],
      },
    ],
  },
  {
    slug: "growth",
    label: "Growth and SEO",
    short: "SEO, AI search, ASO, support",
    metaTitle: "SEO, AI Search Optimisation and Growth Services",
    metaDescription:
      "SEO, answer engine optimisation for AI search, app store optimisation and monthly support that keeps your website or app improving.",
    h1: "SEO, AI search and growth",
    lead:
      "We help the right customers find you on Google, in AI assistants like ChatGPT and in the app stores, then keep your site or app improving month after month.",
    body: [
      "Search work has three parts: a site Google can crawl and load fast, pages that answer what people really search for, and other trusted sites mentioning you. We work on all three and report in plain numbers: visits, rankings and enquiries.",
      "More people now ask AI assistants instead of searching. The same groundwork helps there, with extra care for clear answers, structured data and accurate listings, so these tools describe you correctly.",
    ],
    choose: [
      {
        q: "SEO or ads?",
        a: "Ads bring visits the day you pay and stop when you stop. SEO takes months to build but keeps bringing visits. Most businesses use ads for speed and SEO for the long run.",
      },
      {
        q: "Do we need SEO and AEO separately?",
        a: "No. Answer engine optimisation builds on good SEO. We usually do them together.",
      },
    ],
    faq: [
      {
        q: "Can you guarantee first place on Google?",
        a: "No one honestly can. We promise steady work, clear reporting and changes you can see in the numbers.",
      },
      {
        q: "How long before results show?",
        a: "Technical fixes can help within weeks. New content usually takes a few months to build up.",
      },
      {
        q: "Do you work on sites you did not build?",
        a: "Yes. We start with an audit and fix the biggest problems first.",
      },
      {
        q: "How does the monthly plan work?",
        a: "A set amount of work each month, a shared board and a short report on what changed. You can pause or change it.",
      },
    ],
    proof: ["servicemarket"],
    image: photo("seo"),
    imageAlt: "A laptop showing search performance data",
    closing: "Want the right customers to find you?",
    groups: [
      {
        title: "Search",
        items: [
          i("seo", "Search engine optimisation (SEO)"),
          i("local-seo", "Local SEO"),
          i("technical-seo", "Technical SEO"),
          i("ecommerce-seo", "Ecommerce SEO"),
          i("aeo", "Answer engine optimisation (AEO)"),
          i("aso", "App store optimisation (ASO)"),
          i("seo-content", "SEO content writing"),
        ],
      },
      {
        title: "Grow",
        items: [
          i("conversion-optimisation", "Conversion rate optimisation"),
          i("performance-marketing", "Performance marketing"),
          i("growth-support", "Growth and support retainers"),
        ],
      },
    ],
  },
];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function catalogTitle(category: string, slug: string) {
  return getCategory(category)
    ?.groups.flatMap((g) => g.items)
    .find((it) => it.slug === slug)?.title;
}
