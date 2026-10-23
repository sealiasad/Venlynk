import type { LocationPage } from "@/content/locations";

/**
 * Second wave of city pages. Each one is written for its own city: different
 * market facts, needs, questions and proof, never a copy of the country page.
 */

const UPDATED = "2026-10-23";

const WEEKLY = { title: "Weekly progress", body: "A working preview link every week, so you can check progress on your own phone." };
const FIXED = { title: "Fixed quotes", body: "A fixed quote agreed after the first call, before any work starts." };

export const MORE_CITIES: LocationPage[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "abu-dhabi",
    tz: "Asia/Dubai",
    pin: { name: "Abu Dhabi", lat: 24.45, lng: 54.38 },
    parent: "uae",
    country: "Abu Dhabi",
    inText: "Abu Dhabi",
    isoCode: "AE",
    metaTitle: "Web and App Development for Abu Dhabi Businesses",
    metaDescription:
      "Websites, apps, portals and AI agents for Abu Dhabi companies, built bilingual and secure, by a remote team one hour away.",
    h1: "Web and app development for Abu Dhabi businesses",
    lead:
      "We design and build websites, apps, customer portals and AI agents for companies in Abu Dhabi, in English and Arabic, with the security and documentation larger organisations expect. Our team works one hour ahead of you, so most of our day is yours too.",
    market: [
      "Abu Dhabi is the UAE's capital and its largest emirate by area, and it is growing fast. The emirate's statistics centre counted just over 4.1 million residents in 2024, up 7.5% on the year before.",
      "Much of the economy runs through government entities, energy, finance and large family groups, alongside a fast-growing start-up scene around Hub71 and ADGM. That mix means many projects come with procurement steps, security questions and a need for clear documentation.",
      "Arabic matters more here than in many markets. Government-facing and family-owned businesses often expect a full Arabic experience, not a translated afterthought, and data handling has to fit either federal law or ADGM's own regime.",
    ],
    stats: [
      { label: "Abu Dhabi population, 2024", value: "4.14 million" },
      { label: "Population growth in 2024", value: "7.5%" },
      { label: "UAE internet users", value: "About 99% of the population" },
    ],
    needs: [
      { title: "Bilingual corporate websites", body: "Sites in Arabic and English with equal care, for companies that deal with government and large partners." },
      { title: "Customer and partner portals", body: "Secure portals where clients track requests, documents and payments without email chains." },
      { title: "Start-up MVPs", body: "First versions of products for founders in Abu Dhabi's start-up programmes, built to show investors and users fast." },
      { title: "AI assistants on internal knowledge", body: "Assistants that answer staff and customer questions from your own documents, with control over what they can see." },
    ],
    working: [
      { title: "One hour apart", body: "Pakistan is one hour ahead of Abu Dhabi, so meetings fit easily into your working day." },
      { title: "Documentation built in", body: "Scope, security answers and handover documents prepared as part of the project, not as an extra." },
      WEEKLY,
      FIXED,
    ],
    services: [
      "websites/multilingual-websites",
      "web-apps/custom-web-app-development",
      "web-apps/mvp-development",
      "ai-agents/ai-agent-development",
      "mobile-apps/ios-android-app-development",
      "design/ux-audit",
    ],
    proof: ["dxb-off-plan", "servicemarket"],
    proofNote: "Our UAE work so far: a property portal for Dubai's off-plan market and ongoing work for one of the UAE's home services marketplaces.",
    proofTitle: "Our work in the UAE",
    faq: [
      { q: "Do you have an office in Abu Dhabi?", a: "No. We work remotely from Pakistan, one hour ahead, over video calls, WhatsApp and a shared project board." },
      { q: "Can you go through a vendor registration or procurement process?", a: "Yes. We can provide company details, scope documents and answers to security questionnaires for your procurement team." },
      { q: "Do you build for companies registered in ADGM?", a: "Yes. We build around the data rules that apply to you, whether that is federal law or ADGM's own regulations." },
      { q: "Can the Arabic version be as complete as the English one?", a: "Yes. We plan both languages together, with right-to-left layouts and Arabic content reviewed by a native speaker." },
    ],
    closing: "Planning a project in Abu Dhabi?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "riyadh",
    tz: "Asia/Riyadh",
    pin: { name: "Riyadh", lat: 24.71, lng: 46.68 },
    parent: "saudi-arabia",
    country: "Riyadh",
    inText: "Riyadh",
    isoCode: "SA",
    metaTitle: "Web and App Development for Riyadh Businesses",
    metaDescription:
      "Arabic-first websites, apps, SaaS and AI agents for Riyadh companies and start-ups, from a remote team two hours ahead.",
    h1: "Web and app development for Riyadh businesses",
    lead:
      "We build Arabic-first websites, mobile apps, SaaS products and AI agents for Riyadh companies and start-ups. We work remotely from Pakistan, two hours ahead, so your mornings and our afternoons overlap every working day.",
    market: [
      "Riyadh is Saudi Arabia's capital and its biggest city, home to almost 7 million people. Regional headquarters, government programmes and a growing start-up scene have made it the centre of the Kingdom's digital economy.",
      "Riyadh buyers move quickly and compare a lot. Many companies here are building their first proper digital products, from customer apps to internal systems, and expect them to feel as polished as the big consumer apps people use daily.",
      "Arabic is the default language for most customers, and many businesses also serve English-speaking expatriates and partners. Products need to work properly in both directions, with mada, Apple Pay and instalment payments where money changes hands.",
    ],
    stats: [
      { label: "Riyadh population, approx.", value: "6.9 million" },
      { label: "Saudi internet users", value: "About 99% of the population" },
    ],
    needs: [
      { title: "SaaS and B2B platforms", body: "Web products for Saudi businesses, designed Arabic-first with English as a full second language." },
      { title: "Customer apps", body: "iOS and Android apps for booking, ordering and loyalty, with payments Saudi customers trust." },
      { title: "Dashboards for management", body: "Clear reporting for leadership teams that have outgrown spreadsheets." },
      { title: "AI agents in Arabic", body: "Agents that answer customers on WhatsApp and the web in Arabic and English, and hand over to your team when needed." },
    ],
    working: [
      { title: "Two hours apart", body: "Pakistan is two hours ahead of Riyadh, so your working morning overlaps our afternoon." },
      { title: "Sunday to Thursday aware", body: "We plan calls and releases around the Saudi working week, not just our own." },
      WEEKLY,
      FIXED,
    ],
    services: [
      "web-apps/saas-development",
      "mobile-apps/ios-android-app-development",
      "web-apps/dashboard-development",
      "ai-agents/ai-sales-agents",
      "websites/multilingual-websites",
      "design/saas-design",
    ],
    proof: ["frontline-ticketing", "stock-stream"],
    proofNote: "Product work similar to what Riyadh teams ask for: a ticketing app and website, and a live data app we redesigned and rebuilt.",
    proofTitle: "Work like this we have delivered",
    faq: [
      { q: "Do you have an office in Riyadh?", a: "No. We work remotely from Pakistan, two hours ahead, with calls planned around the Saudi working week." },
      { q: "Can you build Arabic-first, not just translated?", a: "Yes. We design the Arabic experience first or alongside English, with right-to-left layouts from the first wireframe." },
      { q: "Can you integrate mada and Apple Pay?", a: "Yes, through payment gateways that support Saudi merchants." },
      { q: "Do you follow Saudi data rules?", a: "We build consent, privacy notices and data handling around the PDPL. Your legal adviser confirms the details for your business." },
    ],
    closing: "Building something in Riyadh?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "jeddah",
    tz: "Asia/Riyadh",
    pin: { name: "Jeddah", lat: 21.49, lng: 39.19 },
    parent: "saudi-arabia",
    country: "Jeddah",
    inText: "Jeddah",
    isoCode: "SA",
    metaTitle: "Ecommerce, Website and App Development in Jeddah",
    metaDescription:
      "Online stores, websites, booking apps and WhatsApp agents for Jeddah retailers, hospitality and family businesses. Arabic and English.",
    h1: "Ecommerce, web and app development for Jeddah businesses",
    lead:
      "We build online stores, websites, booking apps and WhatsApp agents for Jeddah retailers, hospitality businesses and family companies, in Arabic and English, from a remote team two hours ahead.",
    market: [
      "Jeddah is Saudi Arabia's second city and its main Red Sea port, with around 3.7 million people. Trade, retail and hospitality have long driven the city, and it is the gateway for millions of pilgrims travelling to Makkah each year.",
      "That makes Jeddah a commerce city. Many established family businesses and retail brands sell in stores and on Instagram, and are now moving to proper online stores and marketplaces, with the delivery and cash-on-delivery options local shoppers expect.",
      "Hospitality and travel businesses here serve visitors from around the world, so sites and booking flows often need Arabic, English and sometimes Urdu, Malay or Indonesian, with prices and policies made very clear.",
    ],
    stats: [
      { label: "Jeddah population, approx.", value: "3.7 million" },
      { label: "Saudi internet users", value: "About 99% of the population" },
    ],
    needs: [
      { title: "Online stores for retail brands", body: "Shopify and custom stores with mada, Apple Pay, instalments and cash on delivery, in Arabic and English." },
      { title: "Marketplace selling", body: "Listings on noon and Amazon alongside your own store, so you reach shoppers where they already buy." },
      { title: "Hospitality and travel booking", body: "Booking websites and apps for hotels, tours and transport serving visitors from many countries." },
      { title: "WhatsApp ordering", body: "Agents that answer product questions and take orders on WhatsApp, day and night." },
    ],
    working: [
      { title: "Two hours apart", body: "Pakistan is two hours ahead of Jeddah, so calls fit your working morning." },
      { title: "Many languages, one team", body: "We plan Arabic, English and, where needed, Urdu versions together." },
      WEEKLY,
      FIXED,
    ],
    services: [
      "shopify/shopify-store-setup",
      "ecommerce/noon-store-setup",
      "web-apps/booking-system-development",
      "ai-agents/whatsapp-ai-agents",
      "design/brand-identity",
      "mobile-apps/booking-app-development",
    ],
    proof: ["stylefits", "replay"],
    proofNote: "Shopify stores we have built for fashion brands, including modest fashion, where sizing and mobile checkout decide the sale.",
    proofTitle: "Stores we have delivered",
    faq: [
      { q: "Can you help us sell on noon as well as our own store?", a: "Yes. We set up marketplace listings and your own store together, so stock and prices stay in step." },
      { q: "Can customers pay cash on delivery?", a: "Yes. We set it up alongside mada, cards and instalment options." },
      { q: "Can you build in Urdu as well as Arabic and English?", a: "Yes. Our team speaks Urdu, so it is a natural third language for businesses serving South Asian visitors." },
      { q: "Do you have an office in Jeddah?", a: "No. We work remotely from Pakistan, two hours ahead, over video calls and WhatsApp." },
    ],
    closing: "Taking your Jeddah business online?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "manchester",
    tz: "Europe/London",
    pin: { name: "Manchester", lat: 53.48, lng: -2.24 },
    parent: "uk",
    country: "Manchester",
    inText: "Manchester",
    isoCode: "GB",
    metaTitle: "Web and App Development for Manchester Businesses",
    metaDescription:
      "Websites, Shopify stores, web apps and AI automation for Manchester and North West businesses, from a remote team with a morning overlap.",
    h1: "Web and app development for Manchester businesses",
    lead:
      "We build websites, Shopify stores, web apps and AI automations for Manchester and North West businesses. We work remotely from Pakistan with a daily overlap with your morning, giving you a senior team without big-agency overheads.",
    market: [
      "Greater Manchester is home to close to 3 million people and one of the UK's biggest digital clusters outside London, with media, ecommerce, fintech and health tech companies spread from MediaCityUK to the city centre.",
      "The city is especially strong in online retail. Several of the UK's best-known fashion and beauty brands grew up here, and many smaller D2C brands now compete with them for the same shoppers on the same phones.",
      "Manchester businesses tend to be practical buyers: they want to see real work, a clear plan and costs they can budget for. Many also sell across the UK and into Europe, so GDPR, cookie consent and accessibility need planning from the start.",
    ],
    needs: [
      { title: "D2C ecommerce", body: "Shopify stores built for speed, reviews and repeat purchases, competing with the big local fashion and beauty brands." },
      { title: "Websites for professional firms", body: "Clear sites for law, finance and property firms that turn local searches into enquiries." },
      { title: "Internal tools", body: "Web apps that replace spreadsheets and manual admin for growing teams." },
      { title: "AI and automation", body: "Support agents and workflow automation that let small teams handle more customers." },
    ],
    working: [
      { title: "Your morning, our afternoon", body: "Pakistan is four to five hours ahead of the UK, depending on the season, so your morning overlaps our afternoon." },
      { title: "UK rules built in", body: "UK GDPR, cookie consent and accessibility planned in from the first design." },
      WEEKLY,
      FIXED,
    ],
    services: [
      "shopify/shopify-store-setup",
      "websites/custom-website-development",
      "web-apps/custom-web-app-development",
      "ai-agents/workflow-automation",
      "websites/website-accessibility",
      "shopify/shopify-maintenance",
    ],
    proof: ["replay", "the-heavenly-scents"],
    proofNote: "Shopify stores we have built for fashion and fragrance brands, the kind of D2C work Manchester is known for.",
    proofTitle: "Stores we have delivered",
    faq: [
      { q: "Do you have an office in Manchester?", a: "No. We work remotely from Pakistan, with a daily overlap with UK mornings, over video calls and a shared project board." },
      { q: "Do you work with businesses outside the city centre?", a: "Yes. We work with businesses across Greater Manchester and the North West, all remotely." },
      { q: "Can you take over an existing Shopify store?", a: "Yes. We review the store first, then look after it on a monthly plan or improve it project by project." },
      { q: "Do you make sites accessible?", a: "Yes. We design and test to WCAG 2.2 AA, which also helps if you sell into the EU." },
    ],
    closing: "Building something in Manchester?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "sydney",
    tz: "Australia/Sydney",
    pin: { name: "Sydney", lat: -33.87, lng: 151.21 },
    parent: "australia",
    country: "Sydney",
    inText: "Sydney",
    isoCode: "AU",
    metaTitle: "Web and App Development for Sydney Businesses",
    metaDescription:
      "Websites, apps, Shopify stores and AI agents for Sydney businesses, from a remote team whose morning overlaps your afternoon.",
    h1: "Web and app development for Sydney businesses",
    lead:
      "We design and build websites, apps, Shopify stores and AI agents for Sydney businesses. Our working morning overlaps your afternoon, and work keeps moving after your day ends, so you often wake up to progress.",
    market: [
      "Greater Sydney is Australia's largest city, with more than 5 million people, and its main hub for finance, professional services and tech. It is also one of the most expensive places in the world to hire developers, which is why many Sydney businesses work with remote teams.",
      "Sydney customers pay by tapping and expect the same online: Apple Pay, Google Pay and buy now pay later at checkout, clear GST-inclusive prices and honest delivery times.",
      "Service businesses here compete hard in local search. Trades, clinics and professional firms win work from people searching on their phones for someone nearby, so fast sites and well-structured service pages matter.",
    ],
    needs: [
      { title: "Service business websites", body: "Fast sites for trades, clinics and professional firms that turn local searches into calls and bookings." },
      { title: "Shopify stores", body: "Stores with Afterpay, wallets and Australian shipping rules set up properly." },
      { title: "Apps for start-ups", body: "MVPs and mobile apps for founders who want to launch without a local agency budget." },
      { title: "AI support agents", body: "Agents that answer customers out of hours and hand over to your team in the morning." },
    ],
    working: [
      { title: "Your afternoon, our morning", body: "Sydney is five to six hours ahead of Pakistan, depending on daylight saving, so we overlap with your afternoon." },
      { title: "Work while you sleep", body: "Changes you ask for in the afternoon are often ready when you start the next day." },
      WEEKLY,
      FIXED,
    ],
    services: [
      "websites/custom-website-development",
      "shopify/shopify-store-setup",
      "web-apps/mvp-development",
      "ai-agents/ai-customer-support-agents",
      "mobile-apps/ios-android-app-development",
      "growth/seo",
    ],
    proof: ["techoutsource", "replay"],
    proofNote: "Including a website for an Australian software house that explains its services and lets visitors book a call.",
    proofTitle: "Work we have delivered",
    faq: [
      { q: "Have you worked with Australian clients?", a: "Yes, including TechOutsource, an Australian software house, and our founder worked remotely for an Australian consultancy before starting Venlynk." },
      { q: "How do time zones work?", a: "Our morning overlaps your afternoon for calls, and work continues after your day ends." },
      { q: "Can you set up Afterpay on our store?", a: "Yes, on Shopify and other platforms that support it, where your business qualifies." },
      { q: "Do you have an office in Sydney?", a: "No. We work remotely from Pakistan over video calls and a shared project board." },
    ],
    closing: "Building something in Sydney?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "toronto",
    tz: "America/Toronto",
    pin: { name: "Toronto", lat: 43.65, lng: -79.38 },
    parent: "canada",
    country: "Toronto",
    inText: "Toronto",
    isoCode: "CA",
    metaTitle: "Web and App Development for Toronto Start-ups and Businesses",
    metaDescription:
      "MVPs, SaaS, websites, Shopify stores and AI automation for Toronto start-ups and businesses, built while you sleep and reviewed each morning.",
    h1: "Web and app development for Toronto start-ups and businesses",
    lead:
      "We build MVPs, SaaS products, websites, Shopify stores and AI automations for Toronto start-ups and businesses. Our day runs while you sleep, so you review progress each morning and we pick up your feedback the same evening.",
    market: [
      "Toronto is Canada's largest city and its biggest tech hub, with around 7 million people in the wider region and a dense mix of fintech, AI and SaaS companies alongside the country's banks.",
      "For founders, that means fierce competition for developers and high salaries. Many Toronto start-ups build their first product with a remote team, then grow an in-house team once they have traction.",
      "Toronto is also one of the most diverse cities in the world. Consumer products often need to work for customers from many backgrounds, and businesses serving all of Canada need French where the law or the audience requires it, plus privacy handled under PIPEDA.",
    ],
    needs: [
      { title: "MVPs and SaaS", body: "First versions of web products built to launch, learn and raise." },
      { title: "Fintech and B2B dashboards", body: "Clear, secure dashboards and portals for financial and B2B products." },
      { title: "D2C stores", body: "Shopify stores for Canadian brands, with Canadian shipping, taxes and payments set up properly." },
      { title: "AI automation", body: "Automations and agents that let lean teams handle more without hiring." },
    ],
    working: [
      { title: "A day ahead, every day", body: "Pakistan is nine to ten hours ahead of Toronto, so we work while you sleep and you review in the morning." },
      { title: "A short daily overlap", body: "We agree a regular call time early in your morning for anything that needs a conversation." },
      WEEKLY,
      FIXED,
    ],
    services: [
      "web-apps/mvp-development",
      "web-apps/saas-development",
      "design/saas-design",
      "shopify/shopify-store-setup",
      "ai-agents/workflow-automation",
      "web-apps/dashboard-development",
    ],
    proof: ["stock-stream", "frontline-ticketing"],
    proofNote: "Product work similar to what Toronto start-ups ask for: a live finance app we redesigned and rebuilt, and a ticketing app and website.",
    proofTitle: "Work like this we have delivered",
    faq: [
      { q: "How does the time difference work in practice?", a: "We share a short call early in your morning, work through your day overnight, and you review a preview link when you start." },
      { q: "Can you build in English and French?", a: "Yes. We plan both languages from the start where your audience or Quebec's rules require it." },
      { q: "Do you handle Canadian privacy rules?", a: "We build consent and data handling around PIPEDA and provincial rules. Your legal adviser confirms the details." },
      { q: "Do you have an office in Toronto?", a: "No. We work remotely from Pakistan over video calls and a shared project board." },
    ],
    closing: "Building something in Toronto?",
    updated: UPDATED,
  },
];
