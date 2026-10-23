import type { LocationPage } from "@/content/locations";

/**
 * Gulf country pages: Qatar, Kuwait, Bahrain and Oman. Each written for its own
 * market: local card networks, data rules and buying habits differ by country.
 */

const UPDATED = "2026-10-23";

export const GULF_COUNTRIES: LocationPage[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "qatar",
    tz: "Asia/Qatar",
    pin: { name: "Doha", lat: 25.29, lng: 51.53 },
    country: "Qatar",
    inText: "Qatar",
    isoCode: "QA",
    metaTitle: "Web, App and Ecommerce Development for Qatar",
    metaDescription:
      "Websites, apps, online stores and AI agents for businesses in Doha and across Qatar, with NAPS and QPay payments and Arabic built in.",
    h1: "Web, app and ecommerce development for Qatar businesses",
    lead:
      "We design and build websites, mobile apps, online stores and AI agents for businesses in Doha and across Qatar. We work remotely from Pakistan, two hours ahead, with Arabic and English and the payment methods Qatari customers use.",
    market: [
      "Qatar is small and extremely connected. Almost everyone is online, people carry around one and a half mobile connections each, and mobile internet runs at speeds few countries match. In a market that compact, word of mouth travels fast, and so does a bad app review.",
      "Spending power is high and expectations follow. Customers here compare local businesses with the best international apps, so a clunky booking flow or a slow store stands out quickly.",
      "Payments have a local flavour. Many shoppers pay with locally issued debit cards that run on the NAPS network, and online that often means QPay. A checkout that only takes international cards can turn away a large share of local buyers.",
    ],
    stats: [
      { label: "Internet users", value: "3.10 million, about 99% of the population" },
      { label: "Mobile connections", value: "4.75 million, 152% of the population" },
      { label: "Median mobile download speed", value: "511 Mbps" },
      { label: "Social media user identities", value: "2.95 million" },
    ],
    needs: [
      { title: "Premium retail and fashion stores", body: "Stores for brands selling to customers who expect the polish of the best global sites, in Arabic and English." },
      { title: "Hospitality and events", body: "Booking and ticketing for restaurants, venues, tours and events, with fast mobile checkout." },
      { title: "Service businesses on WhatsApp", body: "AI agents that answer enquiries and book appointments for clinics, salons and home services." },
      { title: "Corporate and government-facing sites", body: "Bilingual websites with the documentation and accessibility larger organisations expect." },
    ],
    payments: [
      { name: "NAPS debit cards and QPay", body: "Qatar's local debit network, used by many shoppers online through QPay, connected through gateways that support it." },
      { name: "International cards and Apple Pay", body: "Visa, Mastercard and wallets for residents and visitors." },
      { name: "Buy now, pay later", body: "Instalment options where your gateway and products qualify." },
      { name: "Cash on delivery", body: "Still expected by some shoppers for a first order." },
    ],
    rules: [
      { title: "Qatar's personal data law", body: "Law No. 13 of 2016 sets rules for collecting and using personal data, including consent and security. We build privacy notices, consent and data handling around it." },
      { title: "Arabic and right-to-left", body: "Arabic pages designed for right to left from the first wireframe, with mixed Arabic and English text handled cleanly." },
      { title: "Clear prices in QAR", body: "Prices, delivery fees and return terms shown before payment, which builds trust and reduces abandoned carts." },
    ],
    working: [
      { title: "Two hours apart", body: "Pakistan is two hours ahead of Qatar, so your morning overlaps our afternoon every working day." },
      { title: "Calls and WhatsApp", body: "Video calls for planning and reviews, WhatsApp for quick questions." },
      { title: "Weekly progress", body: "A working preview link every week, so you can check progress on your phone." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "shopify/shopify-store-setup",
      "web-apps/booking-system-development",
      "ai-agents/whatsapp-ai-agents",
      "websites/multilingual-websites",
      "mobile-apps/ios-app-development",
      "design/brand-identity",
    ],
    proof: ["servicemarket", "stylefits"],
    proofNote: "Gulf and retail work we have delivered: ongoing work for a UAE home services marketplace, and a Shopify store for a modest fashion brand.",
    proofTitle: "Our work in the Gulf and retail",
    faq: [
      { q: "Do you have an office in Qatar?", a: "No. We work remotely from Pakistan, two hours ahead, over video calls, WhatsApp and a shared project board." },
      { q: "Can customers pay with their local debit cards?", a: "Yes. We connect a gateway that supports NAPS cards and QPay alongside international cards." },
      { q: "Can you build in Arabic and English?", a: "Yes. We plan both languages together, with right-to-left Arabic layouts." },
      { q: "Do you follow Qatar's data protection law?", a: "We build consent, privacy notices and data handling around Law No. 13 of 2016. Your legal adviser confirms the details for your business." },
    ],
    closing: "Building something for Qatar?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "kuwait",
    tz: "Asia/Kuwait",
    pin: { name: "Kuwait City", lat: 29.38, lng: 47.99 },
    country: "Kuwait",
    inText: "Kuwait",
    isoCode: "KW",
    metaTitle: "Web, App and Ecommerce Development for Kuwait",
    metaDescription:
      "Websites, apps, online stores and WhatsApp agents for Kuwait businesses, with KNET payments, Arabic and English, from a remote team two hours ahead.",
    h1: "Web, app and ecommerce development for Kuwait businesses",
    lead:
      "We build websites, mobile apps, online stores and AI agents for businesses in Kuwait, with KNET payments, Arabic and English, and the fast delivery experience Kuwaiti shoppers expect. We work remotely from Pakistan, two hours ahead.",
    market: [
      "Kuwait is one of the most connected countries in the region: almost everyone is online and mobile connections far outnumber people. Shoppers are used to ordering food, groceries and fashion through apps and expect delivery to match.",
      "Payments are where many international stores go wrong. KNET, Kuwait's local debit network, carries most local card payments, and many shoppers will look for it at checkout. A store without KNET can feel foreign to Kuwaiti buyers.",
      "Social media and Instagram selling are a big part of local retail. Many Kuwaiti brands started on Instagram and are now moving to proper online stores so they can manage orders, stock and customers in one place.",
    ],
    stats: [
      { label: "Internet users", value: "5.00 million, about 99% of the population" },
      { label: "Mobile connections", value: "7.72 million, 153% of the population" },
      { label: "Median mobile download speed", value: "415 Mbps" },
      { label: "Social media user identities", value: "4.44 million" },
    ],
    needs: [
      { title: "From Instagram to a real store", body: "Shopify and custom stores for brands that outgrew taking orders in DMs, with KNET at checkout." },
      { title: "Food, grocery and delivery apps", body: "Ordering and delivery apps with live tracking for restaurants, cloud kitchens and stores." },
      { title: "WhatsApp ordering and support", body: "Agents that answer product questions and take orders on WhatsApp in Arabic and English." },
      { title: "Booking for clinics and salons", body: "Online booking and reminders that cut phone calls and no-shows." },
    ],
    payments: [
      { name: "KNET", body: "Kuwait's local debit network, which most local shoppers use online, connected through gateways that support it." },
      { name: "Cards and Apple Pay", body: "International cards and wallets for residents and visitors." },
      { name: "Buy now, pay later", body: "Instalment options where your gateway and products qualify." },
      { name: "Cash on delivery", body: "Still common for first orders and easy to offer alongside online payment." },
    ],
    rules: [
      { title: "CITRA data privacy rules", body: "Kuwait's telecom and IT regulator issued its Data Privacy Protection Regulation No. 26 of 2024, which covers consent, clear terms in Arabic and English, security and breach reporting for licensed providers. We build consent and privacy notices to that standard for every client." },
      { title: "Arabic and English terms", body: "Terms, privacy notices and checkout copy written clearly in both languages." },
      { title: "Clear prices in KWD", body: "Prices, delivery fees and return terms shown before payment." },
    ],
    working: [
      { title: "Two hours apart", body: "Pakistan is two hours ahead of Kuwait, so our working days overlap for most of yours." },
      { title: "Calls and WhatsApp", body: "Video calls for planning and reviews, WhatsApp for quick questions." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "shopify/shopify-store-setup",
      "mobile-apps/on-demand-app-development",
      "ai-agents/whatsapp-ai-agents",
      "mobile-apps/ecommerce-app-development",
      "web-apps/booking-system-development",
      "ecommerce/shipping-integration",
    ],
    proof: ["stylefits", "replay"],
    proofNote: "Shopify stores we have built for fashion brands that moved from social selling to their own store.",
    proofTitle: "Stores we have delivered",
    faq: [
      { q: "Can our store accept KNET?", a: "Yes. We connect a payment gateway that supports KNET alongside cards and Apple Pay." },
      { q: "We sell on Instagram today. Where do we start?", a: "Usually with a Shopify store and WhatsApp ordering, so orders, stock and customers are managed in one place." },
      { q: "Do you have an office in Kuwait?", a: "No. We work remotely from Pakistan, two hours ahead, over video calls and WhatsApp." },
      { q: "Can the store be in Arabic?", a: "Yes, with right-to-left layouts and properly written Arabic content." },
    ],
    closing: "Building something for Kuwait?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "bahrain",
    tz: "Asia/Bahrain",
    pin: { name: "Manama", lat: 26.23, lng: 50.59 },
    country: "Bahrain",
    inText: "Bahrain",
    isoCode: "BH",
    metaTitle: "Web, App and Fintech Development for Bahrain",
    metaDescription:
      "Websites, apps, fintech products and online stores for Bahrain businesses, with BENEFIT and BenefitPay, Arabic and English, built remotely.",
    h1: "Web, app and fintech development for Bahrain businesses",
    lead:
      "We design and build websites, apps, fintech products and online stores for businesses in Bahrain, with BENEFIT and BenefitPay payments, Arabic and English, from a remote team two hours ahead.",
    market: [
      "Bahrain is compact, open and almost fully online. It has long positioned itself as a regional base for finance and fintech, with a central bank sandbox and many banks, payment companies and start-ups working from Manama.",
      "Local payments run through BENEFIT, Bahrain's national payment network, and its BenefitPay wallet is part of everyday life, from paying friends to paying shops by QR code. Shoppers increasingly expect to see it at online checkouts too.",
      "Because many Bahraini businesses also serve Saudi customers across the causeway, products often need to work for both markets, in Arabic and English, with prices and delivery that make sense on both sides.",
    ],
    stats: [
      { label: "Internet users", value: "1.64 million, about 99% of the population" },
      { label: "Mobile connections", value: "2.61 million, 158% of the population" },
      { label: "Median mobile download speed", value: "223 Mbps" },
      { label: "Social media user identities", value: "1.31 million" },
    ],
    needs: [
      { title: "Fintech products", body: "Web and mobile products for fintech start-ups and financial firms, designed for trust, clarity and security." },
      { title: "Bank and business portals", body: "Secure portals where customers track applications, documents and payments." },
      { title: "Stores selling to Bahrain and Saudi Arabia", body: "Online stores with BENEFIT, mada and cards, in Arabic and English." },
      { title: "AI support for regulated businesses", body: "Assistants that answer from approved content only, with every conversation logged." },
    ],
    payments: [
      { name: "BENEFIT debit cards", body: "Bahrain's national card network, used by most local debit card holders, connected through gateways that support it." },
      { name: "BenefitPay", body: "Bahrain's most widely used wallet, increasingly expected at online checkouts." },
      { name: "Cards and Apple Pay", body: "International cards and wallets for residents and visitors." },
      { name: "mada for Saudi shoppers", body: "Where you also sell into Saudi Arabia, mada cards alongside the rest." },
    ],
    rules: [
      { title: "Bahrain's Personal Data Protection Law", body: "Law No. 30 of 2018 governs how personal data is collected, used and transferred. We build consent, privacy notices and data handling around it." },
      { title: "Security for financial products", body: "Encryption, audit logs, role-based access and secure development practices as standard on fintech work." },
      { title: "Arabic and English", body: "Both languages planned together, with right-to-left layouts from the start." },
    ],
    working: [
      { title: "Two hours apart", body: "Pakistan is two hours ahead of Bahrain, so our days overlap for most of yours." },
      { title: "Security reviews welcome", body: "We answer security questionnaires and work with your compliance team." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "web-apps/custom-web-app-development",
      "web-apps/portal-development",
      "design/saas-design",
      "mobile-apps/ios-android-app-development",
      "ai-agents/rag-development",
      "ecommerce/ecommerce-development",
    ],
    proof: ["stock-stream", "dxb-off-plan"],
    proofNote: "A live finance app we redesigned and rebuilt, and a property portal for Gulf investors.",
    proofTitle: "Work like this we have delivered",
    faq: [
      { q: "Can our checkout accept BenefitPay?", a: "Yes, through a payment gateway that supports BENEFIT and BenefitPay, alongside cards." },
      { q: "Do you work with fintech start-ups?", a: "Yes. We design and build web and mobile products with security and clarity at the centre, and work alongside your compliance advisers." },
      { q: "Can one store serve Bahrain and Saudi Arabia?", a: "Yes, with prices, payments and delivery set up for each market." },
      { q: "Do you have an office in Bahrain?", a: "No. We work remotely from Pakistan, two hours ahead, over video calls and WhatsApp." },
    ],
    closing: "Building something in Bahrain?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "oman",
    tz: "Asia/Muscat",
    pin: { name: "Muscat", lat: 23.59, lng: 58.41 },
    country: "Oman",
    inText: "Oman",
    isoCode: "OM",
    metaTitle: "Web, App and Ecommerce Development for Oman",
    metaDescription:
      "Websites, apps, online stores and AI agents for Oman businesses, with OmanNet payments, Arabic first and the new data protection law built in.",
    h1: "Web, app and ecommerce development for Oman businesses",
    lead:
      "We build websites, apps, online stores and AI agents for businesses in Muscat and across Oman, Arabic first, with OmanNet payments and the country's data protection law built in. We are one hour ahead, so our working days line up.",
    market: [
      "Oman is a growing digital market. Around 95% of people are online and many businesses are building their first proper website, store or app, which means good basics still stand out.",
      "Tourism, logistics, retail and family-owned businesses are big parts of the economy, and many serve both Omani customers and visitors. Sites often need Arabic first, with English alongside.",
      "Data rules are now firmly in force. Oman's Personal Data Protection Law became fully enforceable in February 2026, with requirements for consent, Arabic privacy notices, breach reporting and transfers abroad, so new projects need to plan for them from the start.",
    ],
    stats: [
      { label: "Internet users", value: "5.28 million, about 95% of the population" },
      { label: "Mobile connections", value: "6.93 million, 125% of the population" },
      { label: "Median mobile download speed", value: "134 Mbps" },
      { label: "Social media user identities", value: "3.44 million" },
    ],
    needs: [
      { title: "First proper websites", body: "Clear, fast sites for established businesses that have relied on word of mouth and social media." },
      { title: "Tourism and hospitality booking", body: "Booking for hotels, tours and experiences serving visitors from around the world." },
      { title: "Online stores", body: "Stores with OmanNet, cards and cash on delivery, in Arabic and English." },
      { title: "WhatsApp agents", body: "Agents that answer and book on WhatsApp, in Arabic and English." },
    ],
    payments: [
      { name: "OmanNet debit cards", body: "Oman's national card network, used for local debit cards online, connected through gateways that support it." },
      { name: "Cards and Apple Pay", body: "International cards and wallets for residents and visitors." },
      { name: "Cash on delivery", body: "Still common, especially for first orders." },
    ],
    rules: [
      { title: "Oman's Personal Data Protection Law", body: "Royal Decree No. 6 of 2022, now fully enforceable, requires explicit consent, clear privacy notices with Arabic as the primary version, breach reporting and conditions on transferring data abroad. We build these into every project." },
      { title: "Arabic first", body: "Arabic designed as the main language where your customers expect it, with English alongside." },
      { title: "Clear prices in OMR", body: "Prices, delivery fees and return terms shown before payment." },
    ],
    working: [
      { title: "One hour apart", body: "Pakistan is one hour ahead of Oman, so our working days line up almost completely." },
      { title: "Calls and WhatsApp", body: "Video calls for planning and reviews, WhatsApp for quick questions." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "websites/custom-website-development",
      "websites/multilingual-websites",
      "web-apps/booking-system-development",
      "shopify/shopify-store-setup",
      "ai-agents/ai-booking-agents",
      "growth/local-seo",
    ],
    proof: ["servicemarket", "the-jumbo-jump"],
    proofNote: "Including ongoing work for a UAE home services marketplace and a booking website that went live within a week.",
    proofTitle: "Work we have delivered",
    faq: [
      { q: "Do you follow Oman's data protection law?", a: "We build consent, Arabic privacy notices and data handling around the PDPL. Your legal adviser confirms the details for your business." },
      { q: "Can customers pay with OmanNet cards?", a: "Yes, through a gateway that supports OmanNet, alongside international cards." },
      { q: "Can the site be Arabic first?", a: "Yes. We design Arabic as the main language where that suits your customers." },
      { q: "Do you have an office in Oman?", a: "No. We work remotely from Pakistan, one hour ahead, over video calls and WhatsApp." },
    ],
    closing: "Building something for Oman?",
    updated: UPDATED,
  },
];
