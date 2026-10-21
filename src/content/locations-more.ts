import type { LocationPage, LocationSource } from "@/content/locations";

/** Second wave of country pages and the first city pages. Same rules as locations.ts. */

const UPDATED = "2026-10-21";

const DR = (country: string, slug: string): LocationSource => ({
  label: `DataReportal: Digital 2026, ${country}`,
  url: `https://datareportal.com/reports/digital-2026-${slug}`,
});

const EAA: LocationSource = {
  label: "Noerr: Accessibility in e-commerce, new obligations from June 2025",
  url: "https://www.noerr.com/en/insights/accessibility-in-e-commerce-new-obligations-for-online-shop-operators-starting-from-june-2025",
};

export const MORE_COUNTRIES: LocationPage[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "usa",
    country: "United States",
    inText: "the US",
    isoCode: "US",
    metaTitle: "Web, App and Shopify Development for US Businesses",
    metaDescription:
      "Websites, MVPs, mobile apps, Shopify stores and AI agents for US founders and businesses, built by a remote team that works while you sleep.",
    h1: "Web, app and AI development for US businesses",
    lead:
      "We design and build websites, MVPs, mobile apps, Shopify stores and AI agents for founders and growing businesses across the United States. We work remotely from Pakistan, so a lot of the building happens during your night and is ready to review in your morning.",
    market: [
      "The US is the world's most competitive online market. More than 320 million people are online, and in most niches several well-funded competitors are already advertising. A product or site has to be clearly better on a phone, not just present, to earn attention.",
      "That is why many US founders work in short cycles: a lean first version, real users within weeks, then improvements driven by data. Our time difference suits that rhythm. You review in your morning, we build in your night.",
      "Privacy rules are a patchwork. There is still no single federal privacy law, and around 20 states have their own consumer privacy laws, led by California. A product that sells nationally needs consent, opt-outs and data requests designed in from the start.",
    ],
    stats: [
      { label: "Internet users", value: "324 million, 93.1% of the population" },
      { label: "Mobile connections", value: "417 million, 120% of the population" },
      { label: "Median mobile download speed", value: "154 Mbps" },
      { label: "States with comprehensive consumer privacy laws in effect", value: "20, as of August 2026" },
    ],
    statsNote: "Digital figures for late 2025 from DataReportal's Digital 2026 report for the US. Privacy law count from Enzuzo's 2026 state privacy law tracker.",
    needs: [
      { title: "MVPs and SaaS for founders", body: "First versions of web and mobile products, built fast enough to test with users and show investors." },
      { title: "Shopify stores for D2C brands", body: "Stores built for conversion, subscriptions and the apps US shoppers expect, from reviews to buy now pay later." },
      { title: "AI agents for small teams", body: "Support agents, lead qualification and automations that let a small team handle more without hiring." },
      { title: "Extra hands for in-house teams", body: "Design and engineering capacity alongside your own developers, working from a shared board." },
    ],
    payments: [
      { name: "Cards, Apple Pay and Google Pay", body: "Through Stripe, Shopify Payments or your existing processor." },
      { name: "PayPal and Venmo", body: "Widely used for online purchases and easy to add through supported gateways." },
      { name: "Buy now, pay later", body: "Affirm, Klarna or Afterpay where your platform and products qualify." },
      { name: "Subscriptions", body: "Recurring billing, trials and plan changes through Stripe Billing or Shopify subscription apps." },
    ],
    rules: [
      { title: "State privacy laws", body: "California's CCPA as amended by the CPRA, and laws in states such as Virginia, Colorado and Texas, set rules on notices, opt-outs and data requests. We design privacy controls that work across states." },
      { title: "Accessibility", body: "We build to WCAG guidelines so your site works with screen readers and keyboards, which also lowers the risk of accessibility complaints." },
      { title: "Sales tax at checkout", body: "We set up tax collection through Shopify or Stripe Tax so the right rate is charged by state." },
    ],
    working: [
      { title: "Work while you sleep", body: "Pakistan is 9 to 13 hours ahead of the US, depending on your time zone and the season, so progress is ready when your day starts." },
      { title: "Calls in shared hours", body: "Planning calls are booked in the hours we share, usually your morning." },
      { title: "A shared board", body: "Every request, question and decision tracked in one place, so nothing waits on a call." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "web-apps/mvp-development",
      "web-apps/saas-development",
      "shopify/shopify-store-setup",
      "mobile-apps/ios-android-app-development",
      "ai-agents/ai-customer-support-agents",
      "design/ui-ux-design",
    ],
    proof: ["frontline-ticketing", "tilawat", "stylefits"],
    proofTitle: "Selected work",
    proofNote: "A selection of products we have delivered for clients in other markets.",
    faq: [
      { q: "Do you have a US office?", a: "No. We work remotely from Pakistan. US clients work with us over video calls, a shared board and email or Slack." },
      { q: "How do you handle the time difference?", a: "We book calls in shared hours and use the rest of the day to build, so you see progress each morning." },
      { q: "Can you sign an NDA and assign IP to our US company?", a: "Yes. We sign an NDA before discussing details, and our contract assigns the code and designs to you." },
      { q: "Can you help with CCPA and state privacy laws?", a: "We build the technical side: consent, opt-outs and data requests. Your lawyer decides the policy." },
      { q: "How do we start?", a: "Book a 30-minute call or send a message. We reply within one working day." },
    ],
    sources: [
      DR("United States", "united-states-of-america"),
      { label: "Enzuzo: US state privacy laws, 2026 tracker", url: "https://www.enzuzo.com/blog/us-state-privacy-laws" },
    ],
    closing: "Building something for US customers?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "canada",
    country: "Canada",
    inText: "Canada",
    isoCode: "CA",
    metaTitle: "Web, App and Shopify Development in Canada",
    metaDescription:
      "Websites, apps, Shopify stores and AI agents for Canadian businesses, with Interac, bilingual English and French options and PIPEDA in mind.",
    h1: "Web, app and ecommerce development for Canadian businesses",
    lead:
      "We design and build websites, mobile apps, Shopify stores and AI agents for businesses across Canada, from Toronto and Vancouver to Montreal and Calgary. We plan for Canadian payments, privacy law and, where you need it, French alongside English.",
    market: [
      "Canada is highly connected: about 95% of people are online. Shoppers compare Canadian stores with US giants, so delivery costs, duties and prices in Canadian dollars need to be clear before checkout, or buyers leave.",
      "Payments are almost entirely digital. Payments Canada data shows cards carried 63% of payment volume in 2024, with digital payments at 86% of all transactions. Interac is a household name, and Interac e-Transfer is increasingly used by businesses to request and receive payment.",
      "Language matters too. Quebec customers expect French, and Quebec's own privacy law applies there. A product built for all of Canada usually needs both languages and privacy settings that work across provinces.",
    ],
    stats: [
      { label: "Internet users", value: "38.2 million, 95.1% of the population" },
      { label: "Social media user identities", value: "33.0 million" },
      { label: "Cards' share of payment volume, 2024", value: "63% (credit 33%, debit 30%)" },
      { label: "Digital share of all payment transactions, 2024", value: "86%" },
    ],
    statsNote: "Digital figures for late 2025 from DataReportal's Digital 2026 report for Canada. Payment figures from Payments Canada data as summarised by the NCFA.",
    needs: [
      { title: "Shopify stores selling across Canada and the US", body: "Stores priced in CAD and USD, with clear duties, shipping and tax for each market." },
      { title: "English and French websites", body: "Bilingual sites with proper French versions of every page, not machine translations." },
      { title: "Apps and MVPs for start-ups", body: "First versions of products for founders in Toronto, Vancouver and Montreal." },
      { title: "Automation for small teams", body: "AI agents and workflows that take repeat admin off small teams." },
    ],
    payments: [
      { name: "Credit cards and Apple Pay", body: "Through Shopify Payments, Stripe or your existing processor." },
      { name: "Interac e-Transfer", body: "For invoices, deposits and larger orders, where customers request or send payment from their bank." },
      { name: "PayPal", body: "Easy to add as a familiar alternative." },
      { name: "Buy now, pay later", body: "Options such as Affirm or Klarna where your platform and products qualify." },
    ],
    rules: [
      { title: "PIPEDA and provincial laws", body: "PIPEDA covers most private-sector personal data in Canada. Alberta, British Columbia and Quebec have their own private-sector privacy laws, and Quebec's law sets especially detailed consent rules." },
      { title: "Canada's anti-spam law", body: "Marketing emails and messages need consent and a clear way to unsubscribe. We build sign-up forms and email flows with this in mind." },
      { title: "French for Quebec", body: "If you sell in Quebec, plan French content and interfaces from the start." },
    ],
    working: [
      { title: "Time difference", body: "Pakistan is 8 to 13 hours ahead of Canada depending on the province and season, so work moves forward while you sleep." },
      { title: "Calls in shared hours", body: "Planning and review calls booked in the hours we share." },
      { title: "A shared board", body: "Requests, decisions and progress tracked in one place." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "shopify/shopify-store-setup",
      "websites/custom-website-development",
      "web-apps/mvp-development",
      "mobile-apps/ios-android-app-development",
      "ai-agents/workflow-automation",
      "growth/seo",
    ],
    proof: ["replay", "the-heavenly-scents", "frontline-ticketing"],
    proofTitle: "Selected work",
    proofNote: "A selection of stores and products we have delivered for clients in other markets.",
    faq: [
      { q: "Do you have an office in Canada?", a: "No. We work remotely from Pakistan with clients across Canada." },
      { q: "Can you build in English and French?", a: "Yes. We set up proper language versions of each page, and recommend a native French reviewer for the final copy." },
      { q: "Can customers pay by Interac?", a: "We can set up Interac e-Transfer for invoices and larger orders, and card and wallet payments at checkout." },
      { q: "Can my store sell to the US too?", a: "Yes. We set up separate currencies, prices and shipping rules for each market." },
      { q: "How do we start?", a: "Book a 30-minute call or send a message. We reply within one working day." },
    ],
    sources: [
      DR("Canada", "canada"),
      { label: "NCFA: How Canadians pay online in 2026", url: "https://ncfacanada.org/how-canadians-pay-online-in-2026-interac-digital-wallets-and-open-banking/" },
      { label: "Office of the Privacy Commissioner of Canada: provincial laws that may apply instead of PIPEDA", url: "https://www.priv.gc.ca/en/privacy-topics/privacy-laws-in-canada/the-personal-information-protection-and-electronic-documents-act-pipeda/legislation-related-to-pipeda/provincial-legislation-deemed-substantially-similar-to-pipeda/" },
    ],
    closing: "Building something for Canadian customers?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "australia",
    country: "Australia",
    inText: "Australia",
    isoCode: "AU",
    metaTitle: "Web, App and Shopify Development in Australia",
    metaDescription:
      "Websites, apps, Shopify stores and AI agents for Australian businesses, from a remote team with Australian clients and a same-day overlap.",
    h1: "Web, app and ecommerce development for Australian businesses",
    lead:
      "We design and build websites, mobile apps, Shopify stores and AI agents for Australian businesses, from Sydney and Melbourne to Brisbane and Perth. Our working morning overlaps with your afternoon, and we have built for Australian clients before.",
    market: [
      "Australians are almost all online, and they pay by tapping. The Reserve Bank's 2025 consumer payments survey found cards made up about 73% of payments, and 43% of consumers used a phone to pay contactlessly in the survey week. Cash has steadied at around 15%.",
      "That habit carries online. Checkouts with Apple Pay, Google Pay and buy now pay later convert better here than long card forms, and Afterpay started in Australia, so shoppers know it well.",
      "Australian buyers also expect clarity: GST-inclusive prices, honest delivery times and easy returns. Small details like an Australian phone number format and local spelling make a site feel local.",
    ],
    stats: [
      { label: "Internet users", value: "26.2 million, 97.1% of the population" },
      { label: "Median mobile download speed", value: "122 Mbps" },
      { label: "Cards' share of consumer payments, 2025", value: "About 73%" },
      { label: "Consumers paying by phone in the survey week, 2025", value: "43%, up from 35% in 2022" },
    ],
    statsNote: "Digital figures for late 2025 from DataReportal's Digital 2026 report for Australia. Payment figures from the Reserve Bank of Australia's 2025 Consumer Payments Survey.",
    needs: [
      { title: "Service business websites", body: "Clear, fast sites for trades, clinics and professional firms that turn local searches into calls and bookings." },
      { title: "Shopify stores", body: "Stores with Afterpay, wallet payments and shipping rules for Australia and New Zealand." },
      { title: "Software company websites", body: "Sites that explain technical services and pricing clearly and book calls, like the one we built for TechOutsource." },
      { title: "AI agents for small teams", body: "Support and enquiry handling that runs after hours, when small teams are offline." },
    ],
    payments: [
      { name: "Cards, Apple Pay and Google Pay", body: "Through Shopify Payments, Stripe or your existing provider." },
      { name: "Afterpay and Zip", body: "Buy now, pay later options Australian shoppers already use." },
      { name: "PayPal", body: "A familiar alternative at checkout." },
      { name: "PayID and bank transfer", body: "For invoices and larger orders where your provider supports it." },
    ],
    rules: [
      { title: "Privacy Act 1988", body: "The Australian Privacy Principles apply to most businesses with annual turnover above $3 million, and to some smaller ones, such as health providers and businesses that trade in personal information." },
      { title: "Spam Act", body: "Marketing emails and SMS need consent and an easy unsubscribe, which we build into forms and email flows." },
      { title: "Accessibility", body: "We design to WCAG guidelines, which also helps you meet disability discrimination expectations." },
    ],
    working: [
      { title: "Our morning, your afternoon", body: "Sydney is 5 to 6 hours ahead of Pakistan depending on daylight saving, so we overlap every working day." },
      { title: "Calls and a shared board", body: "Video calls for planning and reviews, and a shared board for every request." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "websites/custom-website-development",
      "shopify/shopify-store-setup",
      "mobile-apps/ios-android-app-development",
      "ai-agents/ai-customer-support-agents",
      "websites/landing-page-development",
      "growth/seo",
    ],
    proof: ["techoutsource"],
    proofNote: "A website for an Australian software house that explains its services, stack and pricing and books calls. Our founder also worked remotely for an Australian consulting firm as a WordPress consultant.",
    faq: [
      { q: "Do you have an Australian office?", a: "No. We work remotely from Pakistan, overlapping with your afternoons." },
      { q: "Can you add Afterpay to our store?", a: "Yes, where your platform and business qualify with the provider." },
      { q: "Do prices show GST?", a: "Yes. We set prices and checkout up to show GST the way Australian shoppers expect." },
      { q: "Have you worked with Australian clients?", a: "Yes, including TechOutsource, an Australian software house." },
      { q: "How do we start?", a: "Book a 30-minute call or send a message. We reply within one working day." },
    ],
    sources: [
      DR("Australia", "australia"),
      { label: "Reserve Bank of Australia: Consumer Payment Behaviour in Australia (May 2026)", url: "https://rba.gov.au/publications/bulletin/2026/may/consumer-payment-behaviour-in-australia.html" },
      { label: "HWL Ebsworth: Privacy for small businesses", url: "https://hwlebsworth.com.au/privacy-for-small-businesses/" },
    ],
    closing: "Building something for Australian customers?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "netherlands",
    country: "Netherlands",
    inText: "the Netherlands",
    isoCode: "NL",
    metaTitle: "Web, App and Shopify Development for Dutch Businesses",
    metaDescription:
      "Websites, apps, Shopify stores and AI agents for businesses in the Netherlands, with iDEAL, GDPR and the European Accessibility Act built in.",
    h1: "Web, app and ecommerce development for Dutch businesses",
    lead:
      "We design and build websites, mobile apps, Shopify stores and AI agents for businesses in Amsterdam, Rotterdam and across the Netherlands. We work in English, which most Dutch businesses use comfortably, and build for iDEAL, GDPR and EU accessibility rules.",
    market: [
      "The Netherlands is one of Europe's most digital countries: about 99% of people are online and mobile networks are fast. Dutch shoppers buy online often and expect a smooth, honest checkout.",
      "One payment method stands out. iDEAL, which pays straight from the shopper's bank, accounts for around 71% of Dutch online payments according to 2025 figures. A store without iDEAL looks foreign to many Dutch buyers.",
      "EU rules shape every build: GDPR for personal data and cookies, and since 28 June 2025 the European Accessibility Act for many online shops. We design for both from the first wireframe.",
    ],
    stats: [
      { label: "Internet users", value: "18.2 million, 99.0% of the population" },
      { label: "Median mobile download speed", value: "163 Mbps" },
      { label: "iDEAL's share of Dutch online payments, 2025", value: "About 71%" },
      { label: "European Accessibility Act applies to e-commerce from", value: "28 June 2025" },
    ],
    statsNote: "Digital figures for late 2025 from DataReportal's Digital 2026 report for the Netherlands. iDEAL share as reported by Searchlab from Currence data. Accessibility date per Noerr.",
    needs: [
      { title: "Shopify stores for EU shoppers", body: "Stores with iDEAL, EU VAT, multiple currencies and shipping across Europe." },
      { title: "SaaS and MVPs", body: "Products for Dutch start-ups and scale-ups, designed for European customers and GDPR." },
      { title: "Accessible websites", body: "Sites and stores built to WCAG to meet the European Accessibility Act." },
      { title: "Extra capacity for agencies", body: "Design and development support for Dutch agencies, working from your boards." },
    ],
    payments: [
      { name: "iDEAL", body: "The Dutch bank payment method most shoppers choose, through Mollie, Adyen, Stripe or Shopify Payments." },
      { name: "Cards and wallets", body: "Cards, Apple Pay and Google Pay for international shoppers." },
      { name: "Pay later", body: "Options such as Klarna and Riverty where your platform and products qualify." },
      { name: "Bancontact and SEPA", body: "For Belgian shoppers and business customers paying by bank transfer." },
    ],
    rules: [
      { title: "GDPR and cookie consent", body: "Personal data and non-essential cookies need a lawful basis and, for tracking, prior consent. We set up consent banners and analytics that respect the choice." },
      { title: "European Accessibility Act", body: "From 28 June 2025, many online shops must meet accessibility requirements. Micro-enterprises with fewer than ten employees and annual turnover or balance sheet of no more than two million euros are exempt." },
      { title: "EU consumer rules", body: "Clear prices including VAT, delivery costs before checkout and an easy way to withdraw from a purchase." },
    ],
    working: [
      { title: "Three to four hours apart", body: "Pakistan is 3 to 4 hours ahead of the Netherlands, so most of your working day overlaps with ours." },
      { title: "In English", body: "Calls, documents and boards in English. We work with your translator for Dutch copy." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "shopify/shopify-store-setup",
      "web-apps/saas-development",
      "websites/custom-website-development",
      "design/ui-ux-design",
      "ai-agents/ai-agent-development",
      "websites/website-maintenance",
    ],
    proof: ["the-heavenly-scents", "frontline-ticketing", "tilawat"],
    proofTitle: "Selected work",
    proofNote: "A selection of stores and products we have delivered for clients in other markets.",
    faq: [
      { q: "Do you have an office in the Netherlands?", a: "No. We work remotely from Pakistan, three to four hours ahead of you." },
      { q: "Do you work in Dutch?", a: "We work in English. For Dutch content we work with your copywriter or a native translator." },
      { q: "Can you add iDEAL to our store?", a: "Yes, through Mollie, Adyen, Stripe or Shopify Payments." },
      { q: "Can you make our site meet the European Accessibility Act?", a: "We design and build to WCAG and can audit an existing site. Your legal adviser confirms whether the Act applies to you." },
      { q: "How do we start?", a: "Book a 30-minute call or send a message. We reply within one working day." },
    ],
    sources: [
      DR("The Netherlands", "netherlands"),
      { label: "Searchlab: online payment statistics Netherlands 2026", url: "https://searchlab.nl/statistieken/online-betalen-statistieken-nederland-2026" },
      EAA,
    ],
    closing: "Building something for Dutch customers?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "ireland",
    country: "Ireland",
    inText: "Ireland",
    isoCode: "IE",
    metaTitle: "Web, App and Shopify Development for Irish Businesses",
    metaDescription:
      "Websites, apps, Shopify stores and AI agents for businesses in Ireland, built for GDPR, EU accessibility rules and customers across the EU.",
    h1: "Web, app and ecommerce development for Irish businesses",
    lead:
      "We design and build websites, mobile apps, Shopify stores and AI agents for businesses in Dublin, Cork and across Ireland. Ireland is English-speaking and inside the EU, so we build for local customers and for selling across Europe from day one.",
    market: [
      "Almost everyone in Ireland is online, and many Irish businesses sell well beyond the island: to the UK, the rest of the EU and the US. That makes multi-currency stores, EU VAT and clear shipping rules part of most ecommerce projects here.",
      "Ireland is also home to the European headquarters of many global tech companies, which raises customer expectations. People are used to fast, polished digital products and notice when a site lags behind.",
      "As an EU country, Ireland follows GDPR, and its Data Protection Commission is one of Europe's most active regulators. Since 28 June 2025, the European Accessibility Act also applies to many online shops.",
    ],
    stats: [
      { label: "Internet users", value: "5.26 million, 98.9% of the population" },
      { label: "Social media user identities", value: "4.26 million" },
      { label: "Median mobile download speed", value: "59 Mbps" },
      { label: "European Accessibility Act applies to e-commerce from", value: "28 June 2025" },
    ],
    statsNote: "Digital figures for late 2025 from DataReportal's Digital 2026 report for Ireland. Accessibility date per Noerr.",
    needs: [
      { title: "Stores that sell across borders", body: "Shopify stores in EUR and GBP, with EU VAT and shipping to the UK and Europe." },
      { title: "Websites for professional firms", body: "Clear sites for accountants, solicitors, clinics and consultancies that turn searches into enquiries." },
      { title: "MVPs and SaaS for start-ups", body: "First versions of products built to European privacy standards." },
      { title: "Accessibility upgrades", body: "Audits and fixes so existing sites meet WCAG and the European Accessibility Act." },
    ],
    payments: [
      { name: "Cards, Apple Pay and Google Pay", body: "Through Shopify Payments, Stripe or your existing provider." },
      { name: "PayPal", body: "A familiar alternative for Irish and UK shoppers." },
      { name: "Pay later", body: "Options such as Klarna where your platform and products qualify." },
      { name: "SEPA bank payments", body: "For business customers paying by bank transfer across the eurozone." },
    ],
    rules: [
      { title: "GDPR", body: "Personal data needs a lawful basis, clear notices and secure handling. Ireland's Data Protection Commission enforces it." },
      { title: "Cookie consent", body: "Non-essential cookies and tracking need consent before they load. We set up consent and analytics accordingly." },
      { title: "European Accessibility Act", body: "From 28 June 2025, many online shops must meet accessibility requirements, with an exemption for micro-enterprises." },
    ],
    working: [
      { title: "Four to five hours apart", body: "Pakistan is 4 to 5 hours ahead of Ireland, so your morning is our afternoon." },
      { title: "In English", body: "Calls, documents and boards in English." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "websites/custom-website-development",
      "shopify/shopify-store-setup",
      "web-apps/mvp-development",
      "design/website-design",
      "ai-agents/ai-customer-support-agents",
      "growth/seo",
    ],
    proof: ["replay", "care-foundation", "frontline-ticketing"],
    proofTitle: "Selected work",
    proofNote: "A selection of websites, stores and products we have delivered for clients in other markets.",
    faq: [
      { q: "Do you have an Irish office?", a: "No. We work remotely from Pakistan and overlap with Irish working hours every day." },
      { q: "Can you work to GDPR?", a: "Yes. We build consent, notices, data access and deletion into what we make." },
      { q: "Can our store sell to the UK and EU?", a: "Yes. We set up currencies, VAT and shipping for each market." },
      { q: "Can you check our site for accessibility?", a: "Yes. We audit against WCAG and fix the issues we find." },
      { q: "How do we start?", a: "Book a 30-minute call or send a message. We reply within one working day." },
    ],
    sources: [DR("Ireland", "ireland"), EAA],
    closing: "Building something for Irish customers?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "singapore",
    country: "Singapore",
    inText: "Singapore",
    isoCode: "SG",
    metaTitle: "Web, App and AI Development for Singapore Businesses",
    metaDescription:
      "Websites, apps, Shopify stores and AI agents for Singapore businesses, built for PayNow, the PDPA and one of the most connected markets.",
    h1: "Web, app and AI development for Singapore businesses",
    lead:
      "We design and build websites, mobile apps, Shopify stores and AI agents for businesses in Singapore. We work in English, three hours behind Singapore time, and build for PayNow, the PDPA and customers across Southeast Asia.",
    market: [
      "Singapore is small, wealthy and almost entirely online. People hold more than one mobile connection each, mobile internet is among the fastest in the world, and nine in ten people use social media. Digital products are judged against the best apps in Asia.",
      "Many Singapore businesses use the city as a base for the whole region. That means sites and apps that handle several currencies, languages and payment methods, from PayNow at home to e-wallets and bank transfers in neighbouring markets.",
      "The Personal Data Protection Act sets clear rules on consent and on data breaches, and the Do Not Call registry limits telemarketing. Building these in from the start is easier than retrofitting them.",
    ],
    stats: [
      { label: "Internet users", value: "5.78 million, 98.4% of the population" },
      { label: "Mobile connections", value: "9.79 million, 166% of the population" },
      { label: "Social media user identities", value: "5.33 million, 90.6% of the population" },
      { label: "Median mobile download speed", value: "165 Mbps" },
    ],
    statsNote: "Figures for late 2025 from DataReportal's Digital 2026 report for Singapore.",
    needs: [
      { title: "Regional ecommerce", body: "Stores that sell across Singapore and Southeast Asia with the right currencies and payments." },
      { title: "SaaS and fintech products", body: "Web and mobile products for start-ups building from Singapore for the region." },
      { title: "AI agents and automation", body: "Support agents and workflows for lean teams with high labour costs." },
      { title: "Corporate websites", body: "Clear, fast sites for regional headquarters and professional firms." },
    ],
    payments: [
      { name: "PayNow", body: "Singapore's instant bank transfer, often shown as a QR code at checkout, through supported gateways." },
      { name: "Cards and wallets", body: "Cards, Apple Pay, Google Pay and GrabPay where your gateway supports them." },
      { name: "Buy now, pay later", body: "Options such as Atome where your platform and products qualify." },
      { name: "Regional methods", body: "E-wallets and bank transfers for neighbouring markets, through a regional gateway." },
    ],
    rules: [
      { title: "Personal Data Protection Act (PDPA)", body: "Personal data needs consent for a stated purpose, and people can withdraw it. The Personal Data Protection Commission enforces the Act and can impose significant financial penalties." },
      { title: "Do Not Call registry", body: "Marketing calls and messages to Singapore numbers must be checked against the registry. We design lead forms and messaging flows around it." },
      { title: "Accessibility", body: "We design to WCAG so your product works for everyone, including older users and people using assistive technology." },
    ],
    working: [
      { title: "Three hours apart", body: "Singapore is three hours ahead of Pakistan, so most of your working day overlaps with ours." },
      { title: "In English", body: "Calls, documents and boards in English." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "web-apps/saas-development",
      "mobile-apps/ios-android-app-development",
      "shopify/shopify-store-setup",
      "ai-agents/ai-agent-development",
      "ai-agents/workflow-automation",
      "design/ui-ux-design",
    ],
    proof: ["stock-stream", "frontline-ticketing", "tilawat"],
    proofTitle: "Selected work",
    proofNote: "A selection of apps and products we have delivered for clients in other markets.",
    faq: [
      { q: "Do you have an office in Singapore?", a: "No. We work remotely from Pakistan, three hours behind Singapore." },
      { q: "Can you add PayNow?", a: "Yes, through payment gateways that support PayNow for online merchants." },
      { q: "Can you build for several Southeast Asian markets at once?", a: "Yes. We plan currencies, languages and payment methods per market from the start." },
      { q: "Can you work to the PDPA?", a: "Yes. We build consent, notices and data handling into what we make. Your adviser confirms the policy." },
      { q: "How do we start?", a: "Book a 30-minute call or send a message. We reply within one working day." },
    ],
    sources: [
      DR("Singapore", "singapore"),
      { label: "IAPP: The personal data protection framework in Singapore", url: "https://iapp.org/news/a/the-personal-data-protection-framework-in-singapore" },
    ],
    closing: "Building something for Singapore and the region?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "malaysia",
    country: "Malaysia",
    inText: "Malaysia",
    isoCode: "MY",
    metaTitle: "Web, App and Shopify Development in Malaysia",
    metaDescription:
      "Websites, apps, Shopify stores and AI agents for Malaysian businesses, with FPX, DuitNow and the updated PDPA built in.",
    h1: "Web, app and ecommerce development for Malaysian businesses",
    lead:
      "We design and build websites, mobile apps, Shopify stores and AI agents for businesses in Kuala Lumpur, Penang and across Malaysia. We build for FPX and DuitNow payments, the updated Personal Data Protection Act, and customers who switch between English and Malay.",
    market: [
      "Malaysia is a mobile-first market: 98% of people are online and 85% use social media. Many shoppers discover products on social platforms and expect to buy in a few taps on their phone.",
      "Bank-based payments are central. FPX lets shoppers pay straight from their online banking at checkout, and DuitNow QR lets them scan and pay instantly from a banking app. Both run on PayNet and are backed by Bank Negara Malaysia.",
      "Data rules have tightened. The Personal Data Protection (Amendment) Act 2024 added data breach notification and data protection officer duties from 1 June 2025, so new products should be built with these in mind.",
    ],
    stats: [
      { label: "Internet users", value: "35.4 million, 98.0% of the population" },
      { label: "Social media user identities", value: "30.7 million, 85.0% of the population" },
      { label: "Median mobile download speed", value: "144 Mbps" },
      { label: "PDPA breach notification and DPO duties in force from", value: "1 June 2025" },
    ],
    statsNote: "Digital figures for late 2025 from DataReportal's Digital 2026 report for Malaysia. PDPA dates from DLA Piper's data protection guide.",
    needs: [
      { title: "Shopify and WooCommerce stores", body: "Stores with FPX, DuitNow and e-wallets, built for shoppers coming from social media." },
      { title: "English and Malay websites", body: "Bilingual sites, with Chinese or Tamil versions where your audience needs them." },
      { title: "Apps for services and education", body: "Booking, learning and membership apps for Malaysian customers." },
      { title: "WhatsApp agents", body: "AI agents that answer questions and take orders on WhatsApp, where many customers start." },
    ],
    payments: [
      { name: "FPX", body: "Online banking checkout from the shopper's own bank, through supported gateways." },
      { name: "DuitNow QR", body: "Instant scan-and-pay from banking apps, with funds settling almost immediately." },
      { name: "E-wallets", body: "Touch 'n Go eWallet, GrabPay and others where your gateway supports them." },
      { name: "Cards", body: "Local and international cards for customers who prefer them." },
    ],
    rules: [
      { title: "Personal Data Protection Act 2010, as amended", body: "The 2024 amendments added data breach notification and data protection officer duties from 1 June 2025, rules for cross-border transfers from 1 April 2025, and a new right to data portability." },
      { title: "Bilingual content", body: "Plan Malay and English versions together so neither feels like an afterthought." },
      { title: "Accessibility", body: "We design to WCAG so your product works for everyone." },
    ],
    working: [
      { title: "Three hours apart", body: "Malaysia is three hours ahead of Pakistan, so most of your working day overlaps with ours." },
      { title: "Calls and WhatsApp", body: "Video calls for planning and reviews, WhatsApp for quick questions." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "shopify/shopify-store-setup",
      "ecommerce/woocommerce-development",
      "mobile-apps/ios-android-app-development",
      "ai-agents/whatsapp-ai-agents",
      "websites/custom-website-development",
      "design/ui-ux-design",
    ],
    proof: ["stylefits", "insaf-academy", "tilawat"],
    proofTitle: "Selected work",
    proofNote: "A selection of stores, platforms and apps we have delivered for clients in other markets.",
    faq: [
      { q: "Do you have an office in Malaysia?", a: "No. We work remotely from Pakistan, three hours behind Malaysia." },
      { q: "Can you add FPX and DuitNow?", a: "Yes, through Malaysian payment gateways that support them." },
      { q: "Can you build in Malay?", a: "Yes. We set up proper language versions and work with a native reviewer for the final copy." },
      { q: "Will our product meet the new PDPA rules?", a: "We build the technical side, such as consent, breach logging and data requests. Your adviser confirms the policy." },
      { q: "How do we start?", a: "Message us on WhatsApp or book a call. We reply within one working day." },
    ],
    sources: [
      DR("Malaysia", "malaysia"),
      { label: "Curlec: FPX vs DuitNow", url: "https://curlec.com/blog/fpx-vs-duitnow/" },
      { label: "DLA Piper: Data protection in Malaysia", url: "https://www.dlapiperdataprotection.com/?c=MY&t=law" },
    ],
    closing: "Building something for Malaysian customers?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "turkey",
    country: "Turkey",
    inText: "Turkey",
    isoCode: "TR",
    metaTitle: "Web, App and Ecommerce Development in Turkey",
    metaDescription:
      "Websites, apps, online stores and AI agents for businesses in Turkey, built for instalment payments, troy cards and the KVKK data law.",
    h1: "Web, app and ecommerce development for businesses in Turkey",
    lead:
      "We design and build websites, mobile apps, online stores and AI agents for businesses in Istanbul, Ankara and across Turkey, including exporters selling abroad. We build for the way Turkish shoppers pay, with instalments, and for Turkey's data protection law.",
    market: [
      "Turkey is a large online market: more than 77 million people use the internet. Many brands sell both at home and abroad, so stores often need Turkish and English, several currencies and international shipping.",
      "Payments work differently here. Credit cards lead online, largely because of taksit: interest-free instalments over 3, 6, 9 or 12 months that shoppers actively look for. Turkey's own troy card scheme is growing, and instant bank transfers through FAST are rising fastest.",
      "Turkey's data protection law, KVKK, was amended in 2024 to bring cross-border data transfers closer to the EU model. Where customer data is stored and sent matters, so we plan hosting and integrations with it in mind.",
    ],
    stats: [
      { label: "Internet users", value: "77.5 million, 88.3% of the population" },
      { label: "Social media user identities", value: "62.3 million" },
      { label: "Median mobile download speed", value: "68 Mbps" },
      { label: "Credit cards' share of online payments, 2025", value: "52%" },
    ],
    statsNote: "Digital figures for late 2025 from DataReportal's Digital 2026 report for Turkey. Payment share from Worldpay data as cited by Antom.",
    needs: [
      { title: "Stores with instalment checkout", body: "Online stores where taksit options are shown clearly on product pages and at checkout." },
      { title: "Export websites", body: "Sites and stores in English and other languages for Turkish manufacturers and brands selling abroad." },
      { title: "Apps for services", body: "Booking, delivery and membership apps for Turkish customers." },
      { title: "AI agents", body: "Support and sales agents that answer in Turkish and English." },
    ],
    payments: [
      { name: "Credit cards with instalments", body: "Taksit plans set up through Turkish payment providers, shown before checkout." },
      { name: "troy", body: "Turkey's domestic card scheme, accepted online through supported providers." },
      { name: "Bank transfers and FAST", body: "Instant bank payments for orders and invoices." },
      { name: "Digital wallets", body: "Domestic wallets such as BKM Express and Papara where your provider supports them." },
    ],
    rules: [
      { title: "KVKK (Law No. 6698)", body: "Turkey's personal data protection law. Amendments published on 12 March 2024 added new routes for transferring data abroad, such as Board-approved standard contracts, which must be notified to the Board within five working days." },
      { title: "Cookie and marketing consent", body: "Non-essential cookies and commercial messages need consent. We set up consent and preference tools to match." },
      { title: "Turkish and English", body: "Plan both languages together, especially for export-focused businesses." },
    ],
    working: [
      { title: "Two hours apart", body: "Pakistan is two hours ahead of Turkey, so our working days overlap almost completely." },
      { title: "In English", body: "Calls, documents and boards in English. We work with your team or a native reviewer for Turkish copy." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "ecommerce/ecommerce-development",
      "shopify/shopify-store-setup",
      "websites/custom-website-development",
      "mobile-apps/ios-android-app-development",
      "ai-agents/ai-agent-development",
      "design/ui-ux-design",
    ],
    proof: ["replay", "stylefits", "the-heavenly-scents"],
    proofTitle: "Selected work",
    proofNote: "A selection of online stores we have delivered for fashion and fragrance brands in other markets.",
    faq: [
      { q: "Do you have an office in Turkey?", a: "No. We work remotely from Pakistan, two hours ahead of Turkey." },
      { q: "Can you add taksit instalments to our store?", a: "Yes, through Turkish payment providers that support instalment plans on your platform." },
      { q: "Do you build in Turkish?", a: "We build multilingual sites and work with your team or a native reviewer for Turkish copy." },
      { q: "Can you help us sell abroad?", a: "Yes. We set up languages, currencies and shipping for each export market." },
      { q: "How do we start?", a: "Book a 30-minute call or send a message. We reply within one working day." },
    ],
    sources: [
      DR("Turkey", "turkey"),
      { label: "Antom: Turkey payment methods market guide", url: "https://www.antom.com/markets/turkey" },
      { label: "CMS: Data protection reform in Turkiye", url: "https://cms.law/en/tur/legal-updates/data-protection-reform-in-turkiye-a-step-towards-alignment-with-eu-s-gdpr2" },
    ],
    closing: "Building something for customers in Turkey?",
    updated: UPDATED,
  },
];

/* ======================================================================== */

export const CITY_PAGES: LocationPage[] = [
  {
    slug: "dubai",
    parent: "uae",
    country: "Dubai",
    inText: "Dubai",
    isoCode: "AE",
    metaTitle: "Web Development and App Development Company for Dubai",
    metaDescription:
      "Websites, apps, Shopify stores and WhatsApp AI agents for Dubai businesses, from property and home services to retail brands.",
    h1: "Web and app development for Dubai businesses",
    lead:
      "We build websites, apps, Shopify stores and WhatsApp AI agents for Dubai businesses, with real projects in the city behind us: a property portal for off-plan investors and ongoing work for one of the UAE's home services marketplaces.",
    market: [
      "Dubai grew to 4.58 million people by the end of 2025, up 7.5% in a year, according to the emirate's statistics office. Many of those people are new to the city and find services online, from somewhere to live to someone to clean it.",
      "That makes Dubai's competitive sectors very digital: property, home services, hospitality, clinics and retail. Customers compare several options on their phone and message the first business that answers clearly.",
      "Dubai businesses also serve a very international audience. Sites often need English and Arabic, and sometimes Russian, Chinese or Hindi, with prices and booking that work for visitors and residents alike.",
    ],
    stats: [
      { label: "Dubai population, end of 2025", value: "4.58 million" },
      { label: "Population growth in 2025", value: "7.5%" },
      { label: "UAE internet users", value: "About 99% of the population" },
    ],
    statsNote: "Dubai figures from the Dubai Data and Statistics Establishment, as reported by The National. Internet figure from DataReportal's Digital 2026 report for the UAE.",
    needs: [
      { title: "Property portals and developer sites", body: "Listings, virtual tours, fast search and CRM-connected enquiry forms for developers and brokers." },
      { title: "Booking for home and personal services", body: "Booking and payment flows for cleaning, maintenance, salons and clinics." },
      { title: "Retail and fashion stores", body: "Shopify stores with buy now pay later, Arabic and English, and fast delivery options." },
      { title: "WhatsApp AI agents", body: "Instant replies to enquiries day and night, handing hot leads to your sales team." },
    ],
    working: [
      { title: "One hour apart", body: "Pakistan is one hour ahead of Dubai, so our working days line up." },
      { title: "Calls and WhatsApp", body: "Video calls for planning and reviews, WhatsApp for quick questions." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "websites/custom-website-development",
      "ai-agents/whatsapp-ai-agents",
      "shopify/shopify-store-setup",
      "mobile-apps/ios-android-app-development",
      "web-apps/custom-web-app-development",
      "growth/seo",
    ],
    proof: ["dxb-off-plan", "servicemarket"],
    proofNote: "DXB Off Plan, a property portal for Dubai's off-plan market, and ServiceMarket, the UAE's marketplace for cleaning, moving and home maintenance.",
    faq: [
      { q: "Do you have an office in Dubai?", a: "No. We work remotely from Pakistan, one hour ahead of Dubai, and our Dubai clients work with us over video calls and WhatsApp." },
      { q: "Have you worked with Dubai companies?", a: "Yes, including DXB Off Plan and ServiceMarket." },
      { q: "Can you build in Arabic and English?", a: "Yes, with right-to-left layouts designed in from the start." },
      { q: "Can you connect enquiries to our CRM?", a: "Yes. Forms, WhatsApp and calls can all feed your CRM, so no lead is lost." },
    ],
    sources: [
      { label: "The National: Dubai population surpassed 4.5 million by end of 2025", url: "https://thenationalnews.com/news/uae/2026/07/30/dubai-population-surpassed-45-million-by-end-of-2025" },
      DR("United Arab Emirates", "united-arab-emirates"),
    ],
    closing: "Building something for Dubai?",
    updated: UPDATED,
  },
  {
    slug: "london",
    parent: "uk",
    country: "London",
    inText: "London",
    isoCode: "GB",
    metaTitle: "Web and App Development for London Businesses",
    metaDescription:
      "MVPs, websites, Shopify stores and AI agents for London start-ups and businesses, from a remote team that overlaps with your working day.",
    h1: "Web and app development for London businesses",
    lead:
      "We build MVPs, websites, Shopify stores and AI agents for London start-ups and businesses. We work remotely from Pakistan, overlapping with your working day, which lets founders get senior design and engineering without London agency rates.",
    market: [
      "London is home to almost 9 million people and one of the world's busiest start-up and fintech scenes. Competition for customers, and for developers, is intense, which is why many London founders build their first version with an outside team.",
      "London customers are used to slick digital services. A booking that takes too many steps, or a store that loads slowly on the Tube, loses them quickly.",
      "Many London businesses also sell nationally or internationally from day one, so we plan for UK GDPR, cookie consent and, where needed, EU customers from the start.",
    ],
    stats: [
      { label: "London population, mid-2023 estimate", value: "8.95 million" },
      { label: "UK internet users", value: "97.8% of the population" },
      { label: "UK adults registered for a mobile wallet, 2025", value: "65%" },
    ],
    statsNote: "London population from the ONS mid-2023 estimate via the London Datastore. UK figures from DataReportal's Digital 2026 report and UK Finance.",
    needs: [
      { title: "MVPs for founders", body: "First versions of web and mobile products, launched to real users within a few months." },
      { title: "Booking and service platforms", body: "Booking, quoting and payment flows for service businesses, like the ByStored booking flow our founder built." },
      { title: "D2C Shopify stores", body: "Stores built for card and wallet checkouts, reviews and subscriptions." },
      { title: "AI for lean teams", body: "Support agents and automations that let small teams handle more." },
    ],
    working: [
      { title: "Your morning, our afternoon", body: "Pakistan is four to five hours ahead of London, so we overlap every working day." },
      { title: "Calls and shared boards", body: "Video calls for planning and reviews, and a shared board for every request." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "web-apps/mvp-development",
      "web-apps/saas-development",
      "websites/custom-website-development",
      "shopify/shopify-store-setup",
      "ai-agents/ai-agent-development",
      "design/ui-ux-design",
    ],
    proof: ["bystored", "frontline-ticketing", "replay"],
    proofNote: "ByStored, a London storage and removals company, was built by our founder in a previous role. Each card shows exactly how the work was delivered.",
    faq: [
      { q: "Do you have a London office?", a: "No. We work remotely from Pakistan and overlap with London working hours every day." },
      { q: "Can you build an MVP we can show investors?", a: "Yes. We build a real, working first version, not just slides or a clickable mock-up." },
      { q: "Can you work to UK GDPR?", a: "Yes. Consent, notices, data access and deletion are built into what we make." },
      { q: "How do we start?", a: "Book a 30-minute call. We reply within one working day." },
    ],
    sources: [
      { label: "London Datastore: demography", url: "https://data.london.gov.uk/demography" },
      DR("United Kingdom", "united-kingdom"),
      { label: "UK Finance: Payment Markets Report 2025 key findings", url: "https://www.ukfinance.org.uk/news-and-insight/press-release/digital-payments-continue-grow-mobile-wallets-become-more-popular" },
    ],
    closing: "Building something in London?",
    updated: UPDATED,
  },
  {
    slug: "karachi",
    parent: "pakistan",
    country: "Karachi",
    inText: "Karachi",
    isoCode: "PK",
    metaTitle: "Web Development Company in Karachi",
    metaDescription:
      "Venlynk is a Karachi studio building websites, mobile apps, Shopify stores and WhatsApp AI agents for Karachi brands, exporters and start-ups.",
    h1: "Web, app and ecommerce development in Karachi",
    lead:
      "Venlynk is based in Karachi. We build websites, mobile apps, Shopify stores and WhatsApp AI agents for Karachi brands, exporters and start-ups, and our founder has been building for the web here since 2013.",
    market: [
      "Karachi is Pakistan's commercial capital: home to the country's main port, the State Bank of Pakistan and the head offices of many of its largest companies, brands and banks.",
      "Karachi businesses sell in two directions. Retail and fashion brands sell to customers across Pakistan, where cash on delivery, WhatsApp ordering and light, fast mobile sites matter most. Exporters and IT firms sell abroad, where trust, clear English and professional design decide the deal.",
      "We know both sides. Our founder started his career at Creative Chaos building websites for brands including Toyota, Coke Studio and Jubilee Life, later led UX at Dawaai.pk, and now runs Venlynk from Karachi.",
    ],
    needs: [
      { title: "Fashion and retail stores", body: "Shopify stores with cash on delivery, local wallets and courier integrations, built light for any phone." },
      { title: "Export and B2B websites", body: "Professional sites for textile, manufacturing and IT exporters that win the trust of overseas buyers." },
      { title: "WhatsApp ordering", body: "AI agents and automations that answer, take orders and follow up on WhatsApp." },
      { title: "Apps for education and health", body: "Learning, booking and telemedicine apps in Urdu and English." },
    ],
    working: [
      { title: "Same city, same time zone", body: "We work Monday to Friday, by appointment, over video calls and WhatsApp." },
      { title: "Urdu and English", body: "We talk in whichever you prefer, and build in both." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "shopify/shopify-store-setup",
      "websites/custom-website-development",
      "ai-agents/whatsapp-ai-agents",
      "mobile-apps/ios-android-app-development",
      "websites/wordpress-development",
      "design/website-design",
    ],
    proof: ["dawaai", "the-jumbo-jump", "insaf-academy"],
    proofNote: "Dawaai.pk, Pakistan's online pharmacy, where our founder led UX and front end in a previous role, plus a booking site and a learning platform delivered by Venlynk.",
    faq: [
      { q: "Are you really based in Karachi?", a: "Yes. Venlynk is run from Karachi and works remotely with clients here and abroad." },
      { q: "Do you build websites for exporters?", a: "Yes. We build English sites for manufacturers and IT firms that need to win the trust of overseas buyers, with clear product information and enquiry forms." },
      { q: "Do you work with small businesses?", a: "Yes. Many projects start small, like a Shopify store or a WhatsApp agent, and grow from there." },
      { q: "How do we start?", a: "Message us on WhatsApp or book a call. We reply within one working day." },
    ],
    sources: [DR("Pakistan", "pakistan")],
    closing: "Building something in Karachi?",
    updated: UPDATED,
  },
];
