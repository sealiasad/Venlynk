import type { ServicePage } from "@/content/service-pages";

/**
 * Wave 4: platform-specific apps, portals and learning platforms, practical AI,
 * Shopify growth, logistics, WordPress care, local SEO and Figma to code.
 * Same rules: plain words, real proof only, no prices.
 */

const photo = (k: string) => `/images/services/${k}.webp`;
const UPDATED = "2026-10-23";

export const WAVE4_PAGES: ServicePage[] = [
  /* ============================ MOBILE ============================ */
  {
    category: "mobile-apps",
    slug: "android-app-development",
    metaTitle: "Android App Development Company",
    metaDescription:
      "Android app development for phones and tablets: designed for the devices your customers really use, tested on real hardware and published on Google Play.",
    h1: "Android app development",
    lead:
      "We design, build and publish Android apps that run smoothly on the phones your customers actually own, not just the latest flagship. From the first screen to Google Play approval, and updates after launch.",
    forWho:
      "Businesses whose customers are mostly on Android, which is the case in Pakistan, much of the Gulf workforce and many emerging markets, and teams with an Android app that feels slow or crashes.",
    problems: [
      "Your app works on your phone but crashes or lags on cheaper Android devices.",
      "Reviews on Google Play complain about speed, battery or crashes.",
      "Your Android app lags behind your iPhone app in features and polish.",
      "Google Play keeps warning you about policy or target API deadlines.",
    ],
    deliverables: [
      { title: "Designed for Android", body: "Navigation, back behaviour and controls that feel right on Android, not an iPhone design squeezed onto it." },
      { title: "Works on real devices", body: "Tested on a range of screen sizes and mid-range phones, with care over app size, memory and battery." },
      { title: "Weak networks handled", body: "Caching and offline states so the app stays useful on slow or patchy connections." },
      { title: "Google Play ready", body: "Store listing, data safety form, signing and release tracks handled for you." },
      { title: "Crash reporting", body: "Crash and performance monitoring set up from day one, so problems are fixed before reviews mention them." },
      { title: "iPhone too, if needed", body: "Built in Flutter or Kotlin, so an iPhone version can share most of the work when you are ready." },
    ],
    steps: [
      { title: "Plan", body: "Who uses the app, on which devices, and what the first version must do." },
      { title: "Design", body: "Flows and screens designed for Android and tested as a prototype." },
      { title: "Build", body: "Built with a test build on your phone every week." },
      { title: "Publish", body: "Released on Google Play, then monitored and improved." },
    ],
    timing: "A focused first version usually takes a few months. The scope, integrations and number of user roles decide the timeline.",
    price: {
      headline: "Every Android app gets a fixed quote after we agree the first version's scope.",
      factors: [
        "Number of screens and user roles",
        "Payments, maps, notifications and other device features",
        "Offline support",
        "Whether an iPhone version is needed too",
      ],
    },
    facts: {
      title: "Google Play's yearly target API rule",
      intro: "Google Play raises the Android version that new apps and updates must target every year. Apps that fall behind cannot publish updates.",
      items: [
        { label: "What it affects", value: "New apps and every update you publish" },
        { label: "How we handle it", value: "We build to the current requirement and keep apps on our support plans up to date" },
      ],
    },
    proof: {
      project: "tilawat",
      story:
        "Tilawat is a Quran audio app for listening to reciters, saving playlists and recording your own recitation. We designed and built it in Flutter for Android and iPhone.",
    },
    alsoProjects: ["ice", "stock-stream"],
    notFit: ["If your customers are split evenly between iPhone and Android, building both together in Flutter or React Native is usually better value."],
    faq: [
      { q: "Native Kotlin or Flutter?", a: "Flutter if you will want an iPhone version too; native Kotlin if the app depends heavily on Android-only hardware features. We recommend one on the first call." },
      { q: "Will it work on older and cheaper phones?", a: "Yes. We agree a minimum Android version and test on mid-range devices, not just the latest models." },
      { q: "Do you publish it on Google Play for us?", a: "Yes. We prepare the listing, data safety details and release, under your own developer account." },
      { q: "Can you take over our existing Android app?", a: "Yes. We review the code first and tell you honestly whether to improve it or rebuild." },
    ],
    related: ["mobile-apps/ios-android-app-development", "mobile-apps/flutter-app-development", "mobile-apps/app-maintenance"],
    tools: ["Flutter", "Firebase", "Google Play", "Sentry"],
    image: photo("mobile"),
    imageAlt: "Android phone showing an app",
    closing: "Ready to build for the phones your customers use?",
    updated: UPDATED,
  },
  {
    category: "mobile-apps",
    slug: "ios-app-development",
    metaTitle: "iPhone (iOS) App Development Company",
    metaDescription:
      "iPhone and iPad app development: native-feeling design, Apple Pay, App Store approval and updates after launch. Fixed quote after one call.",
    h1: "iPhone (iOS) app development",
    lead:
      "We build iPhone apps that feel at home on iOS, from gestures and typography to Apple Pay and widgets, and we take them through App Store review so you launch without surprises.",
    forWho:
      "Brands whose best customers are on iPhone, which is common in the UK, US, Australia and the Gulf, and teams whose iOS app needs a rebuild or a polish.",
    problems: [
      "Your app was rejected by App Store review and you are not sure why.",
      "The app works, but it does not feel like an iPhone app.",
      "Apple Pay, sign in with Apple or notifications are missing or unreliable.",
      "Every iOS update seems to break something.",
    ],
    deliverables: [
      { title: "Designed for iOS", body: "Layouts, navigation and details that follow Apple's design conventions, so the app feels familiar." },
      { title: "Apple features", body: "Apple Pay, sign in with Apple, notifications, widgets and Face ID where they help your users." },
      { title: "App Store approval", body: "Listing, privacy details and review notes prepared so the app passes review first time where possible." },
      { title: "iPad when useful", body: "Layouts that adapt to iPad if your customers use one." },
      { title: "Monitoring", body: "Crash and performance reporting from launch day." },
      { title: "Android when ready", body: "Built in Flutter or Swift, so an Android version can follow when you need it." },
    ],
    steps: [
      { title: "Plan", body: "The first version agreed, with the Apple features that matter." },
      { title: "Design", body: "Screens designed for iOS and tested as a prototype on a real iPhone." },
      { title: "Build", body: "TestFlight builds on your phone every week." },
      { title: "Launch", body: "Submitted, approved and released, then supported." },
    ],
    timing: "A focused first version usually takes a few months, plus the App Store review, which is usually quick but can take longer for apps with payments or accounts.",
    price: {
      headline: "Every iPhone app gets a fixed quote after we agree the first version.",
      factors: [
        "Number of screens and user roles",
        "Apple Pay, in-app purchases and subscriptions",
        "iPad layouts",
        "An Android version alongside",
      ],
    },
    proof: {
      project: "frontline-ticketing",
      story:
        "Frontline Ticketing sells event tickets through an iPhone and Android app and a website. We redesigned both, from finding an event to paying for it.",
    },
    alsoProjects: ["tilawat", "stock-stream"],
    notFit: ["If you also need Android at launch, building both together in Flutter or React Native usually costs less than two separate apps."],
    faq: [
      { q: "Swift or Flutter?", a: "Flutter or React Native when you want Android too; Swift when the app leans on iOS-only features. We will recommend one for your case." },
      { q: "Do I need an Apple developer account?", a: "Yes. The app is published under your own account, so you own it. We help you set it up." },
      { q: "What if Apple rejects the app?", a: "We handle the response and changes. Careful preparation avoids most rejections." },
      { q: "Can you add in-app purchases or subscriptions?", a: "Yes, through Apple's in-app purchase system where Apple's rules require it." },
    ],
    related: ["mobile-apps/ios-android-app-development", "mobile-apps/react-native-app-development", "design/app-design"],
    tools: ["Flutter", "React Native", "App Store", "Firebase", "Sentry"],
    image: photo("mobile"),
    imageAlt: "iPhone showing an app",
    closing: "Want an app that feels at home on iPhone?",
    updated: UPDATED,
  },
  {
    category: "mobile-apps",
    slug: "ecommerce-app-development",
    metaTitle: "Ecommerce and Shopping App Development",
    metaDescription:
      "Shopping apps connected to your Shopify, WooCommerce or custom store: fast browsing, saved carts, push offers and one-tap checkout.",
    h1: "Ecommerce and shopping apps",
    lead:
      "We build shopping apps that sit on top of your existing store, so products, prices and orders stay in one place, while your best customers get faster browsing, saved details and offers straight to their phone.",
    forWho:
      "Online brands with loyal repeat customers, where an app can drive more frequent orders than the mobile website alone.",
    problems: [
      "Your best customers buy again and again, but always through the browser.",
      "Email offers get lost; you want a direct line to customers' phones.",
      "Your mobile site is fine, but checkout still takes too many steps.",
      "You are worried an app means managing products twice.",
    ],
    deliverables: [
      { title: "Connected to your store", body: "Products, stock, prices and orders come from Shopify, WooCommerce or your own system, so nothing is managed twice." },
      { title: "Fast browsing", body: "Search, filters and product pages tuned for thumbs and quick decisions." },
      { title: "One-tap checkout", body: "Saved addresses and payment, Apple Pay and Google Pay, and cash on delivery where your customers expect it." },
      { title: "Push offers", body: "Targeted notifications for new drops, abandoned carts and back-in-stock." },
      { title: "Loyalty and accounts", body: "Order history, reorders, wishlists and loyalty points in one place." },
      { title: "Store publishing", body: "Listed on the App Store and Google Play under your accounts." },
    ],
    steps: [
      { title: "Check the fit", body: "Your repeat-purchase data and what an app should add." },
      { title: "Design", body: "Shopping journeys designed and tested on phones." },
      { title: "Build and connect", body: "App built and connected to your store." },
      { title: "Launch", body: "Released, then improved from real order data." },
    ],
    timing: "A shopping app on top of an existing store usually takes a few months, depending on custom features and integrations.",
    price: {
      headline: "Every shopping app gets a fixed quote once we know your store and features.",
      factors: [
        "Store platform and how it connects",
        "Loyalty, subscriptions or custom features",
        "Payment methods and markets",
        "Push notification campaigns",
      ],
    },
    notFit: ["If most of your customers buy once, a fast mobile website will usually earn more than an app. We will tell you honestly."],
    faq: [
      { q: "Do we have to manage products in two places?", a: "No. The app reads from your existing store, so products and orders stay in one system." },
      { q: "Will customers really download an app?", a: "Your repeat customers often will, especially with app-only offers. First-time shoppers usually stay on the website, which is fine." },
      { q: "Can the app work with Shopify?", a: "Yes. We build on Shopify's APIs so the app and the store share products, customers and orders." },
      { q: "Can customers pay cash on delivery?", a: "Yes, alongside cards and wallets where your market expects it." },
    ],
    related: ["shopify/shopify-development", "ecommerce/ecommerce-development", "mobile-apps/ios-android-app-development"],
    tools: ["Flutter", "React Native", "Shopify", "WooCommerce", "Firebase"],
    image: photo("commerce"),
    imageAlt: "Shopping app on a phone",
    closing: "Want your best customers one tap away?",
    updated: UPDATED,
  },

  /* ============================ WEB APPS ============================ */
  {
    category: "web-apps",
    slug: "lms-development",
    metaTitle: "LMS and eLearning Platform Development",
    metaDescription:
      "Learning platforms with video lessons, quizzes, mock exams and progress tracking, built for schools, academies and training teams. Multilingual.",
    h1: "LMS and eLearning platforms",
    lead:
      "We build learning platforms where students watch lessons, take quizzes and mock exams and see their progress, and where teachers and admins manage courses without technical help. In more than one language where needed.",
    forWho:
      "Academies, schools, tutoring businesses, nonprofits and companies training staff, who have outgrown video links and spreadsheets.",
    problems: [
      "Lessons live in YouTube links and WhatsApp groups, and students get lost.",
      "You cannot see who is keeping up and who has dropped off.",
      "Your current LMS is clunky, and students avoid it.",
      "Many students learn on cheap phones with slow data.",
    ],
    deliverables: [
      { title: "Courses and lessons", body: "Video, notes and downloads organised into courses, chapters and lessons." },
      { title: "Quizzes and mock exams", body: "Practice questions and timed exams with instant results." },
      { title: "Progress tracking", body: "Students see what is next; teachers and parents see how they are doing." },
      { title: "Phone first", body: "Designed for phones and slow connections, because that is how many students learn." },
      { title: "More than one language", body: "Courses and interface in English, Urdu, Arabic or other languages." },
      { title: "Admin tools", body: "Teachers add courses and questions themselves, with no developer needed." },
    ],
    steps: [
      { title: "Understand learners", body: "Who studies, on what devices, and what success looks like." },
      { title: "Design", body: "Student, teacher and admin journeys designed together." },
      { title: "Build", body: "Built with weekly previews and real course content." },
      { title: "Launch", body: "Piloted with a group of students, then opened up." },
    ],
    timing: "A focused learning platform usually takes a few months, depending on course types, exams and integrations.",
    price: {
      headline: "Every learning platform gets a fixed quote after we map your courses and users.",
      factors: [
        "Course and exam types",
        "Paid courses and subscriptions",
        "Languages",
        "Mobile apps in addition to the web platform",
      ],
    },
    proof: {
      project: "insaf-academy",
      story:
        "Insaf Academy is a free learning platform with video lectures and mock exams for classes 9 to 12, in Urdu and English. We redesigned and rebuilt it for B Group.",
    },
    alsoProjects: ["qriositynet"],
    notFit: ["If you are selling a handful of courses, an existing course platform may be enough to start. We will say so."],
    faq: [
      { q: "Can students pay for courses?", a: "Yes. Courses can be free, paid once or by subscription, with local payment methods." },
      { q: "Will it work on cheap phones?", a: "Yes. We design and test for mid-range phones and slow connections." },
      { q: "Can teachers add content themselves?", a: "Yes. Courses, lessons and questions are managed in a simple admin." },
      { q: "Can you build it in Urdu or Arabic?", a: "Yes. Insaf Academy runs in Urdu and English, and we design right-to-left layouts for Arabic." },
    ],
    related: ["web-apps/custom-web-app-development", "websites/multilingual-websites", "mobile-apps/ios-android-app-development"],
    tools: ["Next.js", "Laravel", "PostgreSQL", "Supabase"],
    image: photo("web"),
    imageAlt: "Online lesson on a laptop",
    closing: "Building a platform students actually use?",
    updated: UPDATED,
  },
  {
    category: "web-apps",
    slug: "portal-development",
    metaTitle: "Customer and Client Portal Development",
    metaDescription:
      "Secure portals where customers, clients or partners log in to track requests, documents, invoices and progress, instead of chasing you by email.",
    h1: "Customer and client portals",
    lead:
      "We build secure portals where your customers, clients or partners log in to see their requests, documents, invoices and progress for themselves, so your team stops answering the same status emails.",
    forWho:
      "Service businesses, agencies, property firms, logistics and B2B companies whose clients keep asking where things stand.",
    problems: [
      "Clients email or call every day to ask for updates.",
      "Documents and invoices are scattered across email threads.",
      "Onboarding a new client means a pile of forms and back and forth.",
      "Partners need some of your data, but not all of it.",
    ],
    deliverables: [
      { title: "Secure log in", body: "Accounts for each client or partner, with roles that control who sees what." },
      { title: "Status at a glance", body: "Requests, orders, projects or cases with clear status and next steps." },
      { title: "Documents and invoices", body: "Uploads, downloads and e-signatures in one place." },
      { title: "Requests and messages", body: "Clients raise requests and talk to your team inside the portal, with a full history." },
      { title: "Connected to your systems", body: "Data pulled from your CRM, ERP or accounting, so nothing is typed twice." },
      { title: "Notifications", body: "Email or WhatsApp updates when something changes." },
    ],
    steps: [
      { title: "Map the questions", body: "What clients ask most and where the answers live today." },
      { title: "Design", body: "Client and staff views designed and tested." },
      { title: "Build and connect", body: "Built with weekly previews and connected to your systems." },
      { title: "Roll out", body: "Launched with a first group of clients, then everyone." },
    ],
    timing: "A focused portal usually takes a few months, depending mostly on the systems it connects to.",
    price: {
      headline: "Every portal gets a fixed quote after we map your clients' questions and your systems.",
      factors: [
        "Number of user roles and permissions",
        "Systems to connect (CRM, ERP, accounting)",
        "Documents, e-signatures and payments",
        "Mobile app access",
      ],
    },
    proof: {
      project: "servicemarket",
      story:
        "ServiceMarket is the UAE's marketplace for cleaning, moving and home maintenance. We work on their web portal on a monthly retainer, shipping improvements every month.",
    },
    notFit: ["If you have a handful of clients, a shared folder and a weekly update email may be all you need for now."],
    faq: [
      { q: "Is client data secure?", a: "Yes. We use role-based access, encryption and audit logs, and follow the data rules that apply to you." },
      { q: "Can it connect to our CRM or ERP?", a: "Usually yes, through their APIs. We check what your systems support before quoting." },
      { q: "Can clients use it on their phone?", a: "Yes. Portals are designed to work well on phones." },
      { q: "Can it be branded as ours?", a: "Yes. It carries your brand and can sit on your own domain." },
    ],
    related: ["web-apps/custom-web-app-development", "web-apps/dashboard-development", "web-apps/api-development"],
    tools: ["Next.js", "PostgreSQL", "Supabase", "Vercel"],
    image: photo("web"),
    imageAlt: "Client portal dashboard",
    closing: "Ready to stop answering status emails?",
    updated: UPDATED,
  },

  /* ============================ AI ============================ */
  {
    category: "ai-agents",
    slug: "rag-development",
    metaTitle: "Knowledge Base AI Assistants (RAG)",
    metaDescription:
      "AI assistants that answer from your own documents, policies and help articles, with sources shown, for staff or customers. Private and controlled.",
    h1: "Knowledge base assistants",
    lead:
      "We build AI assistants that answer questions from your own documents, policies and help articles, show where each answer came from, and stay within what you allow them to see.",
    forWho:
      "Teams drowning in internal questions, support teams with large help centres, and businesses whose knowledge sits in PDFs, drives and wikis nobody searches.",
    problems: [
      "Staff ask the same questions every day because nobody can find the policy.",
      "New hires take months to learn where everything is.",
      "Your help centre is full of answers customers never find.",
      "You tried a general chatbot and it made things up.",
    ],
    deliverables: [
      { title: "Your sources connected", body: "Documents, help articles, drives and wikis indexed so the assistant can search them." },
      { title: "Answers with sources", body: "Every answer links to the document it came from, so people can check." },
      { title: "Access control", body: "The assistant only uses what each person is allowed to see." },
      { title: "Where people already work", body: "Available on your website, inside your product, or in Slack, Teams or WhatsApp." },
      { title: "Kept up to date", body: "New and changed documents picked up automatically." },
      { title: "Quality checks", body: "Test questions and monitoring that catch wrong or weak answers." },
    ],
    steps: [
      { title: "Collect questions", body: "The real questions people ask and where the answers live." },
      { title: "Connect and index", body: "Sources connected and prepared." },
      { title: "Build and test", body: "Assistant built and tested against real questions." },
      { title: "Launch and improve", body: "Rolled out, with answers reviewed and improved weekly." },
    ],
    timing: "A focused assistant on one knowledge source usually takes a few weeks. More sources and access rules take longer.",
    price: {
      headline: "Every assistant gets a fixed quote for the build, plus clear running costs.",
      factors: [
        "Number and type of sources",
        "Access rules and single sign-on",
        "Channels: website, Slack, Teams, WhatsApp",
        "Languages",
      ],
      note: "AI model and hosting usage are billed by their providers based on volume.",
    },
    notFit: ["If your documents are few and well organised, a better search or FAQ page may solve the problem without AI."],
    faq: [
      { q: "Will it make up answers?", a: "It is designed to answer only from your sources and to say when it does not know. Showing sources lets people check." },
      { q: "Is our data used to train public AI models?", a: "We use providers and settings where your data is not used for training, and can host parts privately where needed." },
      { q: "Can it answer in Arabic or Urdu?", a: "Yes, even when the documents are in English." },
      { q: "What sources can it use?", a: "PDFs, Word files, Google Drive, SharePoint, Notion, help centres and websites, among others." },
    ],
    related: ["ai-agents/ai-agent-development", "ai-agents/ai-customer-support-agents", "ai-agents/ai-chatbot-development"],
    tools: ["OpenAI", "Claude", "Supabase", "Python"],
    image: photo("ai"),
    imageAlt: "Assistant answering from documents",
    closing: "Want answers your team can actually find?",
    updated: UPDATED,
  },
  {
    category: "ai-agents",
    slug: "ai-voice-agents",
    metaTitle: "AI Voice Agents for Phone Calls",
    metaDescription:
      "AI voice agents that answer calls, book appointments and route callers, in natural speech, day and night, and hand over to your team when needed.",
    h1: "AI voice agents",
    lead:
      "We build AI voice agents that answer your phone in natural speech, help callers with common requests, book appointments and pass the call to a person whenever it should.",
    forWho:
      "Clinics, service businesses, property firms and support teams that miss calls, especially after hours or at busy times.",
    problems: [
      "Calls go unanswered at busy times and after hours.",
      "Your team spends the day answering the same three questions by phone.",
      "Callers wait on hold and hang up.",
      "Your phone menu frustrates more people than it helps.",
    ],
    deliverables: [
      { title: "Natural conversation", body: "A voice agent that understands normal speech, not just menu options." },
      { title: "Common tasks handled", body: "Opening hours, prices, order status, bookings and other routine requests." },
      { title: "Bookings", body: "Appointments made directly in your calendar or booking system." },
      { title: "Smart handover", body: "Calls passed to the right person with a summary, when needed." },
      { title: "Summaries and logs", body: "Every call transcribed and summarised for your team." },
      { title: "Your number", body: "Connected to your existing phone number or a new one." },
    ],
    steps: [
      { title: "Listen", body: "Your most common calls and how they should end." },
      { title: "Design the conversation", body: "Scripts, rules and handover points agreed." },
      { title: "Build and test", body: "Agent built and tested on real call scenarios." },
      { title: "Go live", body: "Launched on part of your calls first, then all." },
    ],
    timing: "A focused voice agent usually takes a few weeks, depending on your phone system and integrations.",
    price: {
      headline: "Every voice agent gets a fixed quote for the build, plus clear running costs.",
      factors: [
        "Number of call types handled",
        "Phone system and number setup",
        "Booking, CRM or order system integrations",
        "Languages and accents",
      ],
      note: "Call minutes and AI usage are billed by their providers based on volume.",
    },
    notFit: ["If most of your calls are complex or sensitive, start with a voice agent that only takes messages and books callbacks."],
    faq: [
      { q: "Will callers know it is AI?", a: "We recommend saying so at the start. Callers mostly care about getting help quickly." },
      { q: "Can it speak Arabic or Urdu?", a: "Yes, with voices and languages chosen for your callers." },
      { q: "What if it cannot help?", a: "It transfers the call or takes a message, with a summary for your team." },
      { q: "Can it use our existing number?", a: "Usually yes, by forwarding calls to the agent." },
    ],
    related: ["ai-agents/ai-booking-agents", "ai-agents/ai-customer-support-agents", "ai-agents/ai-agent-development"],
    tools: ["OpenAI", "Claude", "n8n"],
    image: photo("ai"),
    imageAlt: "Phone call handled by an AI agent",
    closing: "Never miss another call?",
    updated: UPDATED,
  },
  {
    category: "ai-agents",
    slug: "ai-consulting",
    metaTitle: "AI Consulting and Readiness Audit",
    metaDescription:
      "An AI readiness audit for your business: where AI will genuinely save time or win customers, what it would take, and a ranked plan. No hype.",
    h1: "AI consulting and readiness audit",
    lead:
      "We look at how your business actually runs, find the few places where AI or automation would genuinely save time or win customers, and give you a ranked plan with honest effort and risk for each.",
    forWho:
      "Owners and managers who know they should be using AI but do not want to waste money on the wrong project.",
    problems: [
      "Everyone says you need AI, but nobody can say where.",
      "You tried a tool or two, and they did not stick.",
      "Your team is worried about data, accuracy or jobs.",
      "Vendors keep pitching, and you cannot tell what is real.",
    ],
    deliverables: [
      { title: "Process review", body: "Interviews and a walk-through of the work that takes the most time or loses the most customers." },
      { title: "Opportunity list", body: "Where AI or simple automation would help, and where it would not." },
      { title: "Effort and risk", body: "For each idea: what it takes, what it costs to run and what could go wrong." },
      { title: "Data and privacy check", body: "What data each idea needs and the rules that apply." },
      { title: "Ranked plan", body: "A short roadmap, starting with one quick, low-risk win." },
      { title: "Readout session", body: "A session with your team to answer questions and agree next steps." },
    ],
    steps: [
      { title: "Interviews", body: "Short conversations with the people who do the work." },
      { title: "Review", body: "Processes, tools and data reviewed." },
      { title: "Plan", body: "Opportunities ranked and written up." },
      { title: "Readout", body: "Session with your team, and a proposal for the first step if you want it." },
    ],
    timing: "A focused audit usually takes one to two weeks, depending on team size and the number of processes reviewed.",
    price: {
      headline: "Every audit gets a fixed quote based on the size of your team and the areas covered.",
      factors: [
        "Number of teams and processes",
        "On-site or remote interviews",
        "Depth of data and privacy review",
        "A small proof of concept afterwards",
      ],
    },
    notFit: ["If you already know exactly what you want to automate, skip the audit and go straight to a build."],
    faq: [
      { q: "Will you just recommend a chatbot?", a: "No. Often the best first step is plain automation with no AI at all. We recommend what fits." },
      { q: "Do you sell a particular AI tool?", a: "No. We are not tied to one vendor, and recommend what suits your work and budget." },
      { q: "Can you build what you recommend?", a: "Yes, if you want. Many clients start with the first quick win straight after the audit." },
      { q: "What about our staff?", a: "We look for work people would gladly hand off, and involve the team from the start." },
    ],
    related: ["ai-agents/workflow-automation", "ai-agents/ai-agent-development", "ai-agents/rag-development"],
    tools: ["OpenAI", "Claude", "n8n", "Google Sheets"],
    image: photo("ai"),
    imageAlt: "Team planning AI use cases",
    closing: "Want an honest view of where AI fits?",
    updated: UPDATED,
  },

  /* ============================ SHOPIFY ============================ */
  {
    category: "shopify",
    slug: "shopify-seo",
    metaTitle: "Shopify SEO Services",
    metaDescription:
      "Shopify SEO that fixes the technical issues Shopify stores share, structures collections around real searches and writes product pages that rank.",
    h1: "Shopify SEO",
    lead:
      "We fix the technical problems most Shopify stores share, organise collections around what shoppers really search for, and improve product and category pages so more people find your store without paid ads.",
    forWho: "Shopify brands that rely on ads for almost every sale and want a steady flow of search traffic as well.",
    problems: [
      "Almost all your sales come from paid ads.",
      "Your collection pages have no text and rank for nothing.",
      "Product pages use the supplier's descriptions, like every other store.",
      "Apps and themes have added duplicate pages and slowed the store.",
    ],
    deliverables: [
      { title: "Technical clean-up", body: "Duplicate URLs, broken links, redirects, sitemap and structured data reviewed and fixed." },
      { title: "Collections that rank", body: "Collections planned around real searches, with helpful intro text and filters that do not create clutter." },
      { title: "Product pages", body: "Unique titles, descriptions and FAQs that answer what buyers ask." },
      { title: "Speed", body: "Theme and app weight reduced so pages load fast on phones." },
      { title: "Content", body: "Guides and articles that bring in shoppers earlier in their search." },
      { title: "Monthly report", body: "Visits, rankings and revenue from search, in plain numbers." },
    ],
    steps: [
      { title: "Audit", body: "Technical, content and competitor review." },
      { title: "Fix", body: "Technical issues fixed first." },
      { title: "Improve", body: "Collections and products improved, highest value first." },
      { title: "Grow", body: "Monthly content and reporting." },
    ],
    timing: "Technical fixes take a few weeks. Search results build over months, which is why most clients keep us on monthly.",
    price: {
      headline: "Shopify SEO starts with a fixed-price audit, then a monthly plan if you want one.",
      factors: [
        "Number of products and collections",
        "How much technical clean-up is needed",
        "Content volume each month",
        "Markets and languages",
      ],
    },
    notFit: ["We do not promise rankings or quick wins. If you need sales next week, ads are the faster lever."],
    faq: [
      { q: "How long until we see results?", a: "Technical fixes help within weeks; meaningful growth usually takes several months of steady work." },
      { q: "Do you write product descriptions?", a: "Yes, starting with your best sellers and the products with the most search interest." },
      { q: "Can you fix Shopify's duplicate URLs?", a: "We fix internal links and canonical tags so search engines see one version of each product." },
      { q: "Do you also work on AI search?", a: "Yes. Clear answers and structured data also help your store appear in AI answers." },
    ],
    related: ["growth/seo", "shopify/shopify-speed-optimisation", "growth/aeo"],
    tools: ["Shopify", "Google Search Console", "Google Analytics", "Semrush"],
    image: photo("seo"),
    imageAlt: "Search results and analytics on a laptop",
    closing: "Want sales that do not depend on ads?",
    updated: UPDATED,
  },
  {
    category: "shopify",
    slug: "shopify-speed-optimisation",
    metaTitle: "Shopify Speed Optimisation",
    metaDescription:
      "Faster Shopify stores: we find what slows your store down, from apps to images to theme code, fix it and prove the result with real data.",
    h1: "Shopify speed optimisation",
    lead:
      "We find what is slowing your Shopify store down, usually apps, images and theme code, fix it without breaking anything, and show you the before and after with real visitor data.",
    forWho: "Shopify stores that feel slow on phones, fail Google's speed checks, or have collected years of apps.",
    problems: [
      "Your store takes ages to load on a phone.",
      "Google's speed report shows red for your product pages.",
      "You have installed and removed many apps, and some left code behind.",
      "Your theme has been edited so often nobody knows what is safe to change.",
    ],
    deliverables: [
      { title: "Speed audit", body: "Real visitor data and lab tests showing exactly what slows each template." },
      { title: "App clean-up", body: "Unused apps removed, leftover code cleaned and heavy apps replaced where possible." },
      { title: "Images and media", body: "Images resized and served in modern formats; videos loaded only when needed." },
      { title: "Theme code", body: "Render-blocking scripts and styles reduced and loaded smarter." },
      { title: "Safe changes", body: "Changes made on a copy of your theme and published only after testing." },
      { title: "Before and after", body: "A report comparing real-user speed before and after." },
    ],
    steps: [
      { title: "Measure", body: "Baseline speed from real visitors and tests." },
      { title: "Plan", body: "Fixes ranked by impact." },
      { title: "Fix", body: "Changes made on a theme copy and tested." },
      { title: "Prove", body: "Published and measured again." },
    ],
    timing: "Most speed projects take one to three weeks. Real-user data then needs a few weeks to reflect the change.",
    price: {
      headline: "Every speed project gets a fixed quote after the audit.",
      factors: [
        "Number of apps and how deeply they are built in",
        "Theme condition",
        "Number of templates",
        "Ongoing monitoring",
      ],
    },
    facts: {
      title: "Google's Core Web Vitals targets",
      intro: "Google uses Core Web Vitals, measured on real visits, as part of its page experience signals. The 'good' marks are:",
      items: [
        { label: "Largest Contentful Paint (main content shows)", value: "2.5 seconds or less" },
        { label: "Interaction to Next Paint (page reacts to a tap)", value: "200 milliseconds or less" },
        { label: "Cumulative Layout Shift (nothing jumps around)", value: "0.1 or less" },
      ],
    },
    alsoProjects: ["stylefits", "replay"],
    notFit: ["If the store is slow because the theme is deeply broken, a new custom theme may be better value than patching."],
    faq: [
      { q: "Will removing apps break anything?", a: "We check what each app does first and test everything on a copy before publishing." },
      { q: "How much faster will it be?", a: "It depends on what we find. We measure before and after so you see the real difference." },
      { q: "Does speed affect sales?", a: "Faster pages usually mean fewer people leaving before the page loads, especially on phones." },
      { q: "Will it stay fast?", a: "We give you simple rules for adding apps and content, and can monitor speed monthly." },
    ],
    related: ["shopify/shopify-maintenance", "shopify/shopify-seo", "shopify/shopify-theme-development"],
    tools: ["Shopify", "Google Search Console", "Google Analytics"],
    image: photo("commerce"),
    imageAlt: "Fast-loading store on a phone",
    closing: "Ready for a store that loads before people leave?",
    updated: UPDATED,
  },
  {
    category: "shopify",
    slug: "shopify-markets",
    metaTitle: "Multi-Country Shopify Stores with Shopify Markets",
    metaDescription:
      "Sell in several countries from one Shopify store: local currencies, languages, prices, duties and domains set up with Shopify Markets.",
    h1: "Multi-country stores (Markets)",
    lead:
      "We set up your Shopify store to sell properly in several countries at once, with local currencies, languages, prices and shipping for each market, all run from one store.",
    forWho: "Brands selling across the Gulf, the UK and Europe or further, who are tired of running separate stores or showing one currency to everyone.",
    problems: [
      "Shoppers abroad see prices in the wrong currency and leave.",
      "You run separate stores for each country and copy changes by hand.",
      "Duties and shipping surprises lead to refused deliveries.",
      "Your store is English only, but customers in some markets expect Arabic.",
    ],
    deliverables: [
      { title: "Markets planned", body: "Which countries to group, and how each should be priced and fulfilled." },
      { title: "Currencies and prices", body: "Local currencies with rounded prices, or fixed prices per market where margins need it." },
      { title: "Languages", body: "Translated store content, including right-to-left Arabic where needed." },
      { title: "Shipping and duties", body: "Rates and delivery options per market, with duties shown up front where possible." },
      { title: "Domains and SEO", body: "Country domains or subfolders set up so each market can rank locally." },
      { title: "Local payments", body: "Payment methods shoppers expect in each country." },
    ],
    steps: [
      { title: "Plan markets", body: "Countries, pricing and fulfilment agreed." },
      { title: "Configure", body: "Markets, currencies, languages and shipping set up." },
      { title: "Translate", body: "Content translated and reviewed." },
      { title: "Launch", body: "Tested with real orders in each market." },
    ],
    timing: "A multi-market setup usually takes a few weeks, mostly depending on translation and the number of markets.",
    price: {
      headline: "Every multi-market setup gets a fixed quote based on your markets and languages.",
      factors: [
        "Number of markets and languages",
        "Fixed prices per market",
        "Duties and international shipping",
        "Country domains and SEO",
      ],
    },
    notFit: ["If more than nine in ten of your sales are in one country, perfect that market first."],
    faq: [
      { q: "Do we need a separate store for each country?", a: "Usually not. Shopify Markets runs several countries from one store. Very different businesses per country may still need separate stores." },
      { q: "Can we show prices in AED, SAR and GBP?", a: "Yes, with prices rounded neatly or set by hand for each market." },
      { q: "Can the store be in Arabic for Gulf shoppers?", a: "Yes, with right-to-left layouts and properly translated content." },
      { q: "Will each country rank in Google?", a: "With country domains or subfolders and the right language tags, each market can rank locally." },
    ],
    related: ["shopify/shopify-development", "websites/multilingual-websites", "shopify/shopify-seo"],
    tools: ["Shopify", "Google Search Console"],
    image: photo("commerce"),
    imageAlt: "Store shown in several currencies",
    closing: "Ready to sell beyond one country?",
    updated: UPDATED,
  },

  /* ============================ ECOMMERCE ============================ */
  {
    category: "ecommerce",
    slug: "shipping-integration",
    metaTitle: "Shipping and Courier Integration for Online Stores",
    metaDescription:
      "Connect your store to couriers in Pakistan, the UAE and Saudi Arabia: automatic bookings, labels, tracking and cash on delivery reconciliation.",
    h1: "Shipping and courier integration",
    lead:
      "We connect your online store to the couriers you use, so orders become bookings automatically, labels print in one click, customers get tracking updates and cash on delivery is reconciled without spreadsheets.",
    forWho: "Online stores in Pakistan and the Gulf shipping dozens or hundreds of orders a day, with staff copying addresses into courier portals by hand.",
    problems: [
      "Someone copies every order into the courier's website by hand.",
      "Customers call to ask where their order is.",
      "Cash on delivery payments do not match orders, and money goes missing.",
      "Returns and refused deliveries are tracked in a spreadsheet, if at all.",
    ],
    deliverables: [
      { title: "Automatic bookings", body: "Orders sent to the right courier automatically, based on city, weight or service." },
      { title: "Labels in one click", body: "Shipping labels and packing slips printed in batches." },
      { title: "Tracking updates", body: "Tracking numbers saved to orders, with SMS, email or WhatsApp updates to customers." },
      { title: "Cash on delivery reconciliation", body: "Courier payments matched against orders, with mismatches flagged." },
      { title: "Returns", body: "Refused and returned parcels tracked back into stock." },
      { title: "More than one courier", body: "Couriers compared and chosen per order, where that saves money." },
    ],
    steps: [
      { title: "Map your shipping", body: "Couriers, cities, rates and how orders flow today." },
      { title: "Connect", body: "Store connected to courier APIs." },
      { title: "Test", body: "Real bookings and labels tested." },
      { title: "Go live", body: "Switched on, with your team trained." },
    ],
    timing: "Connecting one or two couriers usually takes a few weeks, depending on the courier's API.",
    price: {
      headline: "Every shipping integration gets a fixed quote based on your couriers and order flow.",
      factors: [
        "Number of couriers",
        "Store platform (Shopify, WooCommerce or custom)",
        "Cash on delivery reconciliation",
        "Customer notifications by SMS or WhatsApp",
      ],
    },
    notFit: ["If you ship a few orders a day, the courier's own app or plugin may be enough."],
    faq: [
      { q: "Which couriers can you connect?", a: "Couriers with an API or plugin, such as TCS, Leopards, PostEx and Trax in Pakistan, and Aramex and SMSA in the Gulf. We check your courier before quoting." },
      { q: "Does it work with Shopify and WooCommerce?", a: "Yes, and with custom stores." },
      { q: "Can customers track orders on WhatsApp?", a: "Yes, through the WhatsApp Business Platform." },
      { q: "Can it handle cash on delivery?", a: "Yes, including matching courier payouts to orders." },
    ],
    related: ["ecommerce/woocommerce-development", "shopify/shopify-development", "ai-agents/workflow-automation"],
    tools: ["Shopify", "WooCommerce", "n8n", "Google Sheets"],
    image: photo("commerce"),
    imageAlt: "Parcels ready for courier pickup",
    closing: "Ready to stop copying orders by hand?",
    updated: UPDATED,
  },

  /* ============================ WEBSITES ============================ */
  {
    category: "websites",
    slug: "wordpress-speed-optimisation",
    metaTitle: "WordPress Speed Optimisation",
    metaDescription:
      "Faster WordPress sites: hosting, caching, images, plugins and theme code fixed, with Core Web Vitals measured before and after.",
    h1: "WordPress speed optimisation",
    lead:
      "We make slow WordPress sites fast: we find whether hosting, plugins, images or theme code is the problem, fix it safely on a copy of the site and show you the improvement with real data.",
    forWho: "Businesses with a WordPress or WooCommerce site that feels slow, fails Google's speed checks or slows down every time a plugin is added.",
    problems: [
      "Your site takes several seconds to load on a phone.",
      "Google's speed report shows red for most pages.",
      "A page builder and dozens of plugins have piled up over the years.",
      "Your hosting is cheap, and it shows at busy times.",
    ],
    deliverables: [
      { title: "Speed audit", body: "Real-user data and tests showing what slows each page type." },
      { title: "Hosting and caching", body: "Server, caching and CDN set up properly, or a move to better hosting if needed." },
      { title: "Plugin clean-up", body: "Heavy and unused plugins removed or replaced." },
      { title: "Images", body: "Images compressed, resized and served in modern formats, with lazy loading." },
      { title: "Theme and page builder", body: "Unused scripts and styles removed, and heavy templates lightened." },
      { title: "Before and after", body: "Speed measured before and after, in a short report." },
    ],
    steps: [
      { title: "Measure", body: "Baseline speed and the causes." },
      { title: "Plan", body: "Fixes ranked by impact." },
      { title: "Fix on a copy", body: "Changes made on a staging site and tested." },
      { title: "Publish and prove", body: "Published, then measured again." },
    ],
    timing: "Most speed projects take one to three weeks, depending on the site's size and condition.",
    price: {
      headline: "Every speed project gets a fixed quote after the audit.",
      factors: [
        "Size of the site and number of templates",
        "Page builder and plugin count",
        "Hosting changes",
        "WooCommerce store pages",
      ],
    },
    facts: {
      title: "Google's Core Web Vitals targets",
      intro: "Google measures these on real visits. The 'good' marks are:",
      items: [
        { label: "Largest Contentful Paint", value: "2.5 seconds or less" },
        { label: "Interaction to Next Paint", value: "200 milliseconds or less" },
        { label: "Cumulative Layout Shift", value: "0.1 or less" },
      ],
    },
    alsoProjects: ["care-foundation"],
    notFit: ["If the site is very old and built on an abandoned theme, a rebuild may be better value than tuning it."],
    faq: [
      { q: "Will the site look different?", a: "No. Speed work happens behind the scenes, and we test every page type before publishing." },
      { q: "Do we need new hosting?", a: "Sometimes. We test first and only recommend a move if hosting is the real bottleneck." },
      { q: "Can you speed up WooCommerce?", a: "Yes, including product, cart and checkout pages, which need careful caching." },
      { q: "Will it stay fast?", a: "We set up monitoring and can look after it on a maintenance plan." },
    ],
    related: ["websites/wordpress-maintenance", "websites/wordpress-development", "growth/seo"],
    tools: ["WordPress", "Google Search Console", "Google Analytics"],
    image: photo("web"),
    imageAlt: "Website speed report on a laptop",
    closing: "Ready for a WordPress site that loads fast?",
    updated: UPDATED,
  },
  {
    category: "websites",
    slug: "wordpress-security",
    metaTitle: "WordPress Security and Malware Removal",
    metaDescription:
      "Hacked WordPress site? We remove malware, close the hole it came through, clean search results and harden the site so it does not happen again.",
    h1: "WordPress security and malware removal",
    lead:
      "If your WordPress site has been hacked, we clean it, find and close the way in, help remove search warnings and harden the site so it stays clean. If it has not been hacked yet, we make it much harder to.",
    forWho: "Anyone whose WordPress site is showing spam, redirecting visitors, flagged by Google or their host, or simply has not been updated in a long time.",
    problems: [
      "Your site redirects visitors to spam or shows pages you did not create.",
      "Google or your browser shows a warning before people can visit.",
      "Your host has suspended the site for malware.",
      "Plugins and WordPress itself have not been updated in months.",
    ],
    deliverables: [
      { title: "Malware clean-up", body: "Infected files, database entries and hidden users found and removed." },
      { title: "Root cause", body: "The vulnerable plugin, theme or password that let attackers in, found and fixed." },
      { title: "Search warnings", body: "Help requesting a review from Google and cleaning up spam pages from search results." },
      { title: "Hardening", body: "Updates, secure settings, firewall, two-factor log in and least-privilege user roles." },
      { title: "Backups", body: "Regular off-site backups set up and tested." },
      { title: "Monitoring", body: "Uptime and file-change monitoring, so problems are caught early." },
    ],
    steps: [
      { title: "Contain", body: "Site backed up as-is, then access locked down." },
      { title: "Clean", body: "Malware removed and the hole closed." },
      { title: "Restore trust", body: "Search and host warnings cleared." },
      { title: "Harden", body: "Protection and monitoring put in place." },
    ],
    timing: "Hacked sites are treated as urgent. Most clean-ups take a few days, depending on how deep the infection goes.",
    price: {
      headline: "Every clean-up gets a fixed quote once we have looked at the site.",
      factors: [
        "How widespread the infection is",
        "Size of the site and number of installs",
        "Search result clean-up",
        "Ongoing security monitoring",
      ],
    },
    facts: {
      title: "Where WordPress attacks usually start",
      intro: "Most WordPress security problems come from plugins, not from WordPress itself. That is why keeping plugins to the ones each site really needs, and keeping them updated, matters so much.",
      items: [
        { label: "Most common way in", value: "Outdated or abandoned plugins and themes" },
        { label: "Best defence", value: "Fewer plugins, regular tested updates and strong log in security" },
      ],
    },
    notFit: ["If the site is very old and heavily infected, rebuilding on clean code can be safer than cleaning. We will tell you if so."],
    faq: [
      { q: "How quickly can you start?", a: "We treat hacked sites as urgent. Message us on WhatsApp with the site address and we will confirm a start time straight away." },
      { q: "Will we lose content?", a: "We back up the site first and keep your real content while removing what does not belong." },
      { q: "How did they get in?", a: "Most often through an outdated plugin or theme, or a weak password. We find the cause so it can be closed." },
      { q: "Can you stop it happening again?", a: "We harden the site and can keep it updated and monitored on a maintenance plan." },
    ],
    related: ["websites/wordpress-maintenance", "websites/website-maintenance", "websites/wordpress-development"],
    tools: ["WordPress", "Google Search Console"],
    image: photo("web"),
    imageAlt: "Security check on a website",
    closing: "Need your site cleaned and protected?",
    updated: UPDATED,
  },

  /* ============================ GROWTH ============================ */
  {
    category: "growth",
    slug: "local-seo",
    metaTitle: "Local SEO for Service Businesses",
    metaDescription:
      "Local SEO for clinics, trades, salons and service firms: Google Business Profile, service and area pages, reviews and local citations.",
    h1: "Local SEO",
    lead:
      "We help service businesses show up when people nearby search for what they offer: a well-run Google Business Profile, clear service and area pages, more genuine reviews and consistent details across the web.",
    forWho: "Clinics, trades, salons, restaurants, law and property firms and other businesses that win customers in a specific city or area.",
    problems: [
      "Competitors appear in the map results and you do not.",
      "Your Google Business Profile is half-filled and rarely updated.",
      "Your website has one services page for everything.",
      "You have few reviews, and some are years old.",
    ],
    deliverables: [
      { title: "Google Business Profile", body: "Profile completed and optimised: categories, services, photos, hours and regular posts." },
      { title: "Service and area pages", body: "Pages for each main service and the areas you genuinely serve." },
      { title: "Reviews", body: "A simple way to ask happy customers for reviews, and templates for replying." },
      { title: "Consistent details", body: "Name, address and phone made consistent across directories." },
      { title: "Local structured data", body: "Markup that helps search engines understand your business and locations." },
      { title: "Monthly report", body: "Calls, direction requests, visits and rankings, in plain numbers." },
    ],
    steps: [
      { title: "Audit", body: "Your profile, site, reviews and local competitors." },
      { title: "Fix foundations", body: "Profile, details and structured data corrected." },
      { title: "Build pages", body: "Service and area pages written and published." },
      { title: "Grow", body: "Reviews, posts and reporting every month." },
    ],
    timing: "Foundations take a few weeks. Map rankings usually improve over a few months of steady work.",
    price: {
      headline: "Local SEO starts with a fixed-price audit, then a monthly plan if you want one.",
      factors: [
        "Number of locations",
        "Number of services and areas",
        "Website changes needed",
        "Review and content volume",
      ],
    },
    notFit: ["We only list real locations. If you want to appear in a city where you have no address, area pages on your site are the honest route."],
    faq: [
      { q: "Can we rank in a city where we have no office?", a: "Not in the map results without a real address there. Service and area pages on your website can still rank in normal results." },
      { q: "Do you buy or write reviews?", a: "No. Fake reviews break Google's rules and damage trust. We help you ask real customers." },
      { q: "How long does it take?", a: "Profile fixes can help within weeks; stronger rankings usually take a few months." },
      { q: "Do you manage the Google Business Profile for us?", a: "Yes, as part of a monthly plan, with you keeping ownership." },
    ],
    related: ["growth/seo", "websites/custom-website-development", "websites/landing-page-development"],
    tools: ["Google Search Console", "Google Analytics", "Semrush"],
    image: photo("seo"),
    imageAlt: "Map search results on a phone",
    closing: "Want to be the first business nearby people find?",
    updated: UPDATED,
  },

  /* ============================ DESIGN ============================ */
  {
    category: "design",
    slug: "figma-to-code",
    metaTitle: "Figma to Code: Pixel-Accurate Development",
    metaDescription:
      "Figma designs turned into fast, responsive, accessible websites and apps in Next.js, React, WordPress, Shopify or Flutter, matching the design closely.",
    h1: "Figma to code",
    lead:
      "Send us your Figma file and we turn it into a fast, responsive and accessible website or app that matches the design closely, in Next.js, React, WordPress, Shopify or Flutter, with a clean handover.",
    forWho: "Designers, design studios and agencies who need a reliable build partner, and companies with finished designs and no developers.",
    problems: [
      "Your last developer's build looked nothing like the design.",
      "Animations and details were dropped because they were 'hard'.",
      "The design falls apart on screen sizes nobody designed for.",
      "You need a build partner who respects your design decisions.",
    ],
    deliverables: [
      { title: "Close match to the design", body: "Spacing, type, colours and interactions built as designed, checked side by side." },
      { title: "Every screen size", body: "Sensible behaviour between the breakpoints you designed, agreed where the file is silent." },
      { title: "Interactions and motion", body: "Hover states, transitions and animations implemented, not dropped." },
      { title: "Accessible and fast", body: "Semantic code, keyboard support and good speed scores as standard." },
      { title: "Editable content", body: "Content managed in a CMS so your client can update it." },
      { title: "White-label", body: "Happy to work behind your studio, under your name." },
    ],
    steps: [
      { title: "File review", body: "We review the Figma file and raise questions before quoting." },
      { title: "Build", body: "Built with a preview link every week." },
      { title: "Design QA", body: "Side-by-side review with you, and fixes." },
      { title: "Handover", body: "Code, CMS access and a walkthrough." },
    ],
    timing: "A typical marketing site takes a few weeks to build from a finished design. Apps take longer.",
    price: {
      headline: "Every build gets a fixed quote after we review your Figma file.",
      factors: [
        "Number of unique templates",
        "Animations and interactions",
        "CMS and integrations",
        "Platform (Next.js, WordPress, Shopify, Flutter)",
      ],
    },
    proof: {
      project: "tilawat",
      story:
        "Tilawat is a Quran audio app we designed in Figma and built in Flutter, so the screens people use match the design they approved.",
    },
    alsoProjects: ["frontline-ticketing"],
    notFit: ["If the designs are still changing every week, finish the key screens first. Building moving designs wastes your budget."],
    faq: [
      { q: "Do you work white-label for agencies?", a: "Yes. We can work behind your studio and never contact your client unless you want us to." },
      { q: "What if the design does not cover every screen size?", a: "We propose sensible behaviour and check it with you, rather than guessing." },
      { q: "Which platforms do you build in?", a: "Next.js and React, WordPress, Shopify and Flutter for apps." },
      { q: "How do you check it matches the design?", a: "We review side by side with the Figma file before handover, and fix differences." },
    ],
    related: ["websites/nextjs-development", "websites/wordpress-development", "design/website-design"],
    tools: ["Figma", "Next.js", "React", "WordPress", "Flutter"],
    image: photo("ux"),
    imageAlt: "Figma design next to code",
    closing: "Got a design that deserves a faithful build?",
    updated: UPDATED,
  },
];
