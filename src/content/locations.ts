/**
 * Country pages. Venlynk works remotely from Pakistan, so these pages never
 * claim a local office. Each page is written for its own market: figures are
 * sourced and dated, and only projects actually delivered are shown.
 */

export type LocationSource = { label: string; url: string };

export type LocationPage = {
  slug: string;
  country: string;
  /** "the UAE", "Saudi Arabia": how the name reads inside a sentence. */
  inText: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  /** The market in a few short paragraphs, specific to this country. */
  market: string[];
  /** Digital facts, each tied to a source in `sources`. */
  stats: { label: string; value: string }[];
  statsNote: string;
  /** What businesses here commonly need, in their words. */
  needs: { title: string; body: string }[];
  /** Payments we set up for buyers in this market. */
  payments: { name: string; body: string }[];
  /** Rules a website or app here should be built around. */
  rules: { title: string; body: string }[];
  /** How remote work with Venlynk runs from this country. */
  working: { title: string; body: string }[];
  /** Live service pages to feature, as "category/slug". */
  services: string[];
  proof: string[];
  proofNote?: string;
  faq: { q: string; a: string }[];
  sources: LocationSource[];
  closing: string;
  updated: string;
  isoCode: string;
};

const UPDATED = "2026-10-21";

const DR = (country: string, slug: string): LocationSource => ({
  label: `DataReportal: Digital 2026, ${country}`,
  url: `https://datareportal.com/reports/digital-2026-${slug}`,
});

export const LOCATIONS: LocationPage[] = [
  /* ------------------------------------------------------------------ */
  {
    slug: "uae",
    country: "United Arab Emirates",
    inText: "the UAE",
    isoCode: "AE",
    metaTitle: "Web, App and Shopify Development for UAE Businesses",
    metaDescription:
      "Websites, mobile apps, Shopify stores and AI agents for businesses in the UAE, built for one of the most connected markets in the world.",
    h1: "Web, app and ecommerce development for UAE businesses",
    lead:
      "We design and build websites, mobile apps, Shopify stores and AI agents for businesses in Dubai, Abu Dhabi and across the UAE. We work remotely from Pakistan, one hour ahead of the UAE, so our working days line up almost completely.",
    market: [
      "The UAE is one of the most connected countries in the world. Almost everyone is online, people carry more than one phone connection each, and mobile internet is among the fastest anywhere. That raises the bar: a slow site or a clumsy app feels broken here sooner than in most markets.",
      "Customers also expect choice at checkout. Cards and Apple Pay are standard, buy now pay later services are common, and the Central Bank's own Aani instant payments and Jaywan domestic card are adding new options. A store that only takes one kind of card leaves money on the table.",
      "The UAE population is international, so many businesses need English and Arabic, and some need Urdu, Hindi or Russian as well. Right-to-left Arabic layouts have to be designed in from the start, not bolted on later.",
    ],
    stats: [
      { label: "Internet users", value: "11.3 million, about 99% of the population" },
      { label: "Mobile connections", value: "23.0 million, 202% of the population" },
      { label: "Social media user identities", value: "12.5 million" },
      { label: "Median mobile download speed", value: "614 Mbps" },
    ],
    statsNote: "Figures for late 2025, from DataReportal's Digital 2026 report for the UAE.",
    needs: [
      { title: "Property and real estate portals", body: "Listings, search, virtual tours and a CRM that catches every enquiry, for developers and brokers selling to local and overseas buyers." },
      { title: "Service marketplaces and booking", body: "Booking flows for home services, clinics, salons and rentals, where customers expect to book and pay in a few taps." },
      { title: "Shopify stores for regional brands", body: "Stores that sell across the UAE and the wider Gulf, with the payment methods, delivery options and languages shoppers expect." },
      { title: "WhatsApp-first customer service", body: "Many UAE customers would rather message than fill in a form. AI agents on the WhatsApp Business Platform answer them in seconds." },
    ],
    payments: [
      { name: "Cards and Apple Pay or Google Pay", body: "Through gateways that support UAE merchants, set up on Shopify, WooCommerce or a custom checkout." },
      { name: "Buy now, pay later", body: "Instalment options such as Tabby and Tamara where your platform and products qualify." },
      { name: "Jaywan cards", body: "The UAE's domestic card scheme, accepted for online purchases as gateways add support." },
      { name: "Cash on delivery", body: "Still expected by some shoppers, especially for first orders, and easy to offer alongside online payment." },
    ],
    rules: [
      { title: "UAE Personal Data Protection Law", body: "Federal Decree-Law No. 45 of 2021 governs how personal data is collected and used. Free zones with their own data laws, such as DIFC and ADGM, follow those instead. We build consent, privacy notices and data access around the rules that apply to you." },
      { title: "Arabic and right-to-left support", body: "Arabic pages need mirrored layouts, Arabic fonts and careful handling of mixed Arabic and English text. We design for both directions from the first wireframe." },
      { title: "Clear prices and policies", body: "Prices in AED, delivery costs and return policies shown clearly before payment, which builds trust and reduces abandoned carts." },
    ],
    working: [
      { title: "One hour apart", body: "Pakistan is one hour ahead of the UAE, so calls, reviews and quick questions happen in your normal working day." },
      { title: "Calls and WhatsApp", body: "Video calls for planning and reviews, and WhatsApp for quick questions, in the way UAE businesses already work." },
      { title: "Weekly progress you can see", body: "A working preview link every week, so you can check progress on your own phone." },
      { title: "Fixed quotes", body: "Every project gets a fixed quote before work starts, agreed after the first call." },
    ],
    services: [
      "websites/custom-website-development",
      "mobile-apps/ios-android-app-development",
      "shopify/shopify-store-setup",
      "ai-agents/whatsapp-ai-agents",
      "design/ui-ux-design",
      "web-apps/custom-web-app-development",
    ],
    proof: ["dxb-off-plan", "servicemarket"],
    proofNote: "Projects for UAE clients: a property portal in Dubai and ongoing work for one of the UAE's home services marketplaces.",
    faq: [
      { q: "Do you have an office in the UAE?", a: "No. We work remotely from Pakistan, one hour ahead of the UAE. Our UAE clients work with us over video calls, WhatsApp and shared project boards." },
      { q: "Can you build in Arabic as well as English?", a: "Yes. We design right-to-left layouts from the start and set up language switching so each page has a proper Arabic version." },
      { q: "Can you set up Tabby or Tamara on our store?", a: "Yes, where your platform and business qualify with the provider. We handle the technical setup and testing." },
      { q: "Do you work with companies in free zones?", a: "Yes. We follow the data rules that apply to your company, whether federal law or a free zone's own regime." },
      { q: "How do we start?", a: "Message us on WhatsApp or book a 30-minute call. We reply within one working day." },
    ],
    sources: [
      DR("United Arab Emirates", "united-arab-emirates"),
      { label: "The National: UAE expands federal payment channels with Aani and Jaywan", url: "https://thenationalnews.com/business/banking/2026/08/03/uae-expands-federal-payment-channels-with-aani-and-jaywan" },
      { label: "Clyde & Co: UAE issues landmark personal data protection law", url: "https://www.clydeco.com/en/insights/2021/11/uae-issues-landmark-personal-data-protection-law" },
    ],
    closing: "Building something for the UAE market?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "saudi-arabia",
    country: "Saudi Arabia",
    inText: "Saudi Arabia",
    isoCode: "SA",
    metaTitle: "Web, App and Ecommerce Development for Saudi Businesses",
    metaDescription:
      "Websites, apps, online stores and AI agents for businesses in Saudi Arabia, built for Arabic-first customers, mada payments and the PDPL.",
    h1: "Web, app and ecommerce development for Saudi businesses",
    lead:
      "We design and build websites, mobile apps, online stores and AI agents for businesses in Riyadh, Jeddah and across Saudi Arabia. We build Arabic-first where your customers need it, with the payment methods they use and the data rules Saudi law sets.",
    market: [
      "Saudi Arabia is a large, young and almost fully online market. More than 34 million people use the internet, and mobile is how most of them shop, book and bank. Customers here are quick to compare, so the experience on a phone often decides who gets the sale.",
      "Payments have moved fast. The Saudi Central Bank reports that electronic payments made up 79% of all retail payments in 2024, up from 70% the year before. Shoppers expect mada cards, Apple Pay and instalment options, and many still like the safety of paying on delivery for a first order.",
      "Arabic is the first language for most customers, and a translated afterthought shows. Good Saudi sites and apps are planned in Arabic and English together, with layouts, search and content that work in both directions.",
    ],
    stats: [
      { label: "Internet users", value: "34.4 million, about 99% of the population" },
      { label: "Mobile connections", value: "48.7 million, 140% of the population" },
      { label: "Social media user identities", value: "38.6 million" },
      { label: "Electronic share of retail payments, 2024", value: "79%, up from 70% in 2023" },
    ],
    statsNote: "Digital figures for late 2025 from DataReportal's Digital 2026 report for Saudi Arabia. Payments figure from the Saudi Central Bank (SAMA).",
    needs: [
      { title: "Arabic-first online stores", body: "Stores built around Arabic search and browsing, with English as a full second language, not a word-for-word copy." },
      { title: "Booking and service apps", body: "Apps for clinics, salons, education and home services, where customers book, pay and get reminders on their phone." },
      { title: "Customer service on WhatsApp", body: "AI agents that answer common questions in Arabic and English, and pass complex chats to your team." },
      { title: "Portals and internal systems", body: "Web apps that replace spreadsheets for growing companies, with roles, approvals and reports." },
    ],
    payments: [
      { name: "mada", body: "Saudi Arabia's national debit card network, which shoppers expect at every checkout." },
      { name: "Apple Pay and cards", body: "Visa, Mastercard and Apple Pay through gateways licensed for Saudi merchants." },
      { name: "Buy now, pay later", body: "Instalment options such as Tabby and Tamara where your platform and products qualify." },
      { name: "Cash on delivery", body: "Offered alongside online payment for customers who prefer it." },
    ],
    rules: [
      { title: "Personal Data Protection Law (PDPL)", body: "In force since 14 September 2023 and fully enforceable since 14 September 2024, regulated by the Saudi Data and AI Authority (SDAIA). It covers consent, privacy notices and strict conditions on moving personal data outside the Kingdom, which affects where your site and data are hosted." },
      { title: "E-commerce Law", body: "Online sellers must show who they are and where they are registered, give clear terms and full prices including delivery and VAT, and allow returns within seven days for most products. We build these into the store from the start." },
      { title: "Arabic and right-to-left support", body: "Mirrored layouts, Arabic fonts and search that understands Arabic, designed in rather than translated afterwards." },
    ],
    working: [
      { title: "Two hours apart", body: "Pakistan is two hours ahead of Saudi Arabia, so our working day covers most of yours." },
      { title: "Calls and WhatsApp", body: "Video calls for planning and reviews, WhatsApp for quick questions." },
      { title: "Weekly progress", body: "A working preview every week, so you see progress, not just reports." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "ecommerce/ecommerce-development",
      "mobile-apps/ios-android-app-development",
      "ai-agents/whatsapp-ai-agents",
      "websites/custom-website-development",
      "web-apps/custom-web-app-development",
      "design/ui-ux-design",
    ],
    proof: ["dxb-off-plan", "servicemarket"],
    proofNote: "Our Gulf work so far is for UAE clients: a Dubai property portal and an ongoing retainer with a home services marketplace.",
    faq: [
      { q: "Do you have an office in Saudi Arabia?", a: "No. We work remotely from Pakistan, two hours ahead of Saudi Arabia, over video calls, WhatsApp and shared boards." },
      { q: "Can you build an Arabic-first store?", a: "Yes. We plan the Arabic and English versions together, with right-to-left layouts and Arabic-friendly search." },
      { q: "Can you add mada and Apple Pay?", a: "Yes, through a payment gateway licensed for Saudi merchants. We handle the setup and test every payment method." },
      { q: "Can our data stay in Saudi Arabia?", a: "Where the PDPL or your sector requires it, we can host with cloud providers that offer Saudi data centres." },
      { q: "How do we start?", a: "Message us on WhatsApp or book a 30-minute call. We reply within one working day." },
    ],
    sources: [
      DR("Saudi Arabia", "saudi-arabia"),
      { label: "SAMA: E-payments account for 79% of total retail payments in 2024", url: "https://www.sama.gov.sa/en-us/mediacenter/news/pages/news-1083.aspx" },
      { label: "Clyde & Co: Saudi Arabia's Personal Data Protection Law becomes enforceable", url: "https://www.clydeco.com/en/insights/2024/09/saudi-arabia-s-personal-data-protection-law-become" },
      { label: "Saudipedia: E-commerce Law in Saudi Arabia", url: "https://saudipedia.com/en/e-commerce-law-in-saudi-arabia" },
    ],
    closing: "Building something for Saudi customers?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "uk",
    country: "United Kingdom",
    inText: "the UK",
    isoCode: "GB",
    metaTitle: "Web, App and Shopify Development for UK Businesses",
    metaDescription:
      "Websites, apps, Shopify stores and AI agents for UK businesses, built for a card and wallet-first market and UK GDPR, by a remote team.",
    h1: "Web, app and ecommerce development for UK businesses",
    lead:
      "We design and build websites, mobile apps, Shopify stores and AI agents for UK businesses, from London start-ups to established firms across England, Scotland and Wales. We work remotely from Pakistan, and your working morning overlaps with our afternoon every day.",
    market: [
      "The UK is a mature, demanding online market. Almost everyone is online and most people bank on their phone, so customers judge a business by how quickly its site loads, how easy it is to book or buy, and whether it feels trustworthy.",
      "Payments are overwhelmingly digital. UK Finance reports that debit cards made up more than half of all UK payments in 2025, cash fell to 8%, and nearly two thirds of adults were registered for a mobile wallet. Checkout has to make card and wallet payments effortless.",
      "UK buyers also read the small print. Clear pricing, honest delivery times, accessible design and a privacy notice written in plain English are part of what makes a UK site convert, not just legal boxes to tick.",
    ],
    stats: [
      { label: "Internet users", value: "68.1 million, 97.8% of the population" },
      { label: "Debit cards' share of all payments, 2025", value: "More than half" },
      { label: "Cash share of all payments, 2025", value: "8%, down from 9% in 2024" },
      { label: "Adults registered for a mobile wallet, 2025", value: "65%" },
    ],
    statsNote: "Internet figure for late 2025 from DataReportal's Digital 2026 report for the UK. Payment figures from UK Finance's Payment Markets Report 2025.",
    needs: [
      { title: "Websites that win trust fast", body: "Clear, fast service sites for professional firms, clinics and trades, where the first impression decides whether someone calls." },
      { title: "Shopify stores for D2C brands", body: "Stores built for card and wallet checkouts, reviews and returns policies UK shoppers expect." },
      { title: "MVPs and SaaS for founders", body: "First versions of products for start-ups that need to show traction to customers and investors quickly." },
      { title: "AI for small teams", body: "Support agents and automations that take repeat admin off small teams without hiring." },
    ],
    payments: [
      { name: "Cards, Apple Pay and Google Pay", body: "Through Shopify Payments, Stripe or your existing provider." },
      { name: "PayPal", body: "Still widely used for online purchases and easy to add." },
      { name: "Buy now, pay later", body: "Klarna and Clearpay where your platform and products qualify." },
      { name: "Bank payments", body: "Open banking and Pay by Bank options through providers that support them." },
    ],
    rules: [
      { title: "UK GDPR and the Data Protection Act 2018", body: "The core rules for personal data in the UK, regulated by the ICO. The Data (Use and Access) Act 2025 makes the first changes to UK GDPR, including some cookie exceptions, phased in by the government." },
      { title: "Cookies and consent", body: "Non-essential cookies and tracking still need consent unless a new exception applies. We set up consent banners and analytics that respect the visitor's choice." },
      { title: "Accessibility", body: "We design to WCAG guidelines so your site works for people using screen readers, keyboards and larger text." },
    ],
    working: [
      { title: "Your morning, our afternoon", body: "Pakistan is five hours ahead of the UK in winter and four in summer, so we overlap every working day." },
      { title: "Calls and shared boards", body: "Video calls for planning and reviews, a shared board for every request, and email or WhatsApp for quick questions." },
      { title: "Weekly progress", body: "A working preview link every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "websites/custom-website-development",
      "shopify/shopify-store-setup",
      "web-apps/mvp-development",
      "mobile-apps/ios-android-app-development",
      "ai-agents/ai-customer-support-agents",
      "growth/seo",
    ],
    proof: ["bystored", "replay", "stylefits"],
    proofNote: "ByStored, a London storage and removals company, was built by our founder in a previous role. Each project card shows exactly how the work was delivered.",
    faq: [
      { q: "Do you have a UK office?", a: "No. We work remotely from Pakistan and overlap with UK working hours every day. Clients work with us over video calls, email and shared boards." },
      { q: "Can you work to UK GDPR?", a: "Yes. We build consent, privacy notices, data access and deletion into what we make, and can agree a data processing agreement with you." },
      { q: "Do you invoice in pounds?", a: "We agree currency and payment terms when we send the quote." },
      { q: "Can you work with our in-house team?", a: "Yes. Many UK clients use us alongside their own developers or marketers." },
      { q: "How do we start?", a: "Book a 30-minute call or send us a message. We reply within one working day." },
    ],
    sources: [
      DR("United Kingdom", "united-kingdom"),
      { label: "UK Finance: Payment Markets Report 2025 key findings", url: "https://www.ukfinance.org.uk/news-and-insight/press-release/digital-payments-continue-grow-mobile-wallets-become-more-popular" },
      { label: "Osborne Clarke: Data (Use and Access) Act becomes law", url: "https://www.osborneclarke.com/insights/data-use-and-access-act-becomes-law-first-ever-changes-uk-gdpr" },
    ],
    closing: "Building something for UK customers?",
    updated: UPDATED,
  },

  /* ------------------------------------------------------------------ */
  {
    slug: "pakistan",
    country: "Pakistan",
    inText: "Pakistan",
    isoCode: "PK",
    metaTitle: "Software House in Karachi: Web, App and Shopify Development",
    metaDescription:
      "Venlynk is a Karachi-based studio building websites, mobile apps, Shopify stores and AI agents for Pakistani businesses, with local payments built in.",
    h1: "Web, app and ecommerce development in Pakistan",
    lead:
      "Venlynk is a design and engineering studio based in Karachi. We build websites, mobile apps, Shopify stores and AI agents for Pakistani businesses, with the payment methods, delivery options and mobile-first design that customers here expect.",
    market: [
      "Pakistan's online market is growing quickly from a lower base. About 117 million people were online at the end of 2025, less than half the population, and mobile download speeds average a fraction of the Gulf's. That changes how good products are built: light pages, small apps and screens that still work on patchy connections and older phones.",
      "Payments are going digital fast. The State Bank of Pakistan reports that digital channels handled 88% of retail transactions in FY25, up from 78% two years earlier, with Raast instant payments more than doubling. Yet many online shoppers still choose cash on delivery, especially for a first order from a new store.",
      "Customers here message before they buy. WhatsApp is often the real storefront, so stores and service businesses that answer quickly, show clear prices and offer cash on delivery win more orders.",
    ],
    stats: [
      { label: "Internet users", value: "117 million, 45.6% of the population" },
      { label: "Mobile connections", value: "194 million, 75.9% of the population" },
      { label: "Median mobile download speed", value: "24.3 Mbps" },
      { label: "Digital share of retail transactions, FY25", value: "88%, up from 78% in FY23" },
    ],
    statsNote: "Digital figures for late 2025 from DataReportal's Digital 2026 report for Pakistan. Payments figure from the State Bank of Pakistan's FY25 payment systems review.",
    needs: [
      { title: "Shopify and WooCommerce stores", body: "Stores with cash on delivery, local wallets and courier integrations, built light enough to load on any phone." },
      { title: "Apps for education and health", body: "Learning platforms, telemedicine and booking apps that work in Urdu and English on low-cost phones." },
      { title: "WhatsApp ordering and support", body: "AI agents and automations that answer price and stock questions and take orders on WhatsApp." },
      { title: "Websites for exporters and services", body: "Sites that win the trust of international buyers for Pakistani manufacturers, IT firms and service companies." },
    ],
    payments: [
      { name: "Cash on delivery", body: "Still the first choice for many shoppers, set up with clear rules to reduce fake orders." },
      { name: "JazzCash and Easypaisa", body: "Mobile wallets most Pakistani customers already use, through supported gateways." },
      { name: "Raast and bank transfer", body: "Instant bank payments through Raast, increasingly used for orders and invoices." },
      { name: "Cards", body: "Local and international cards through payment gateways that serve Pakistani merchants." },
    ],
    rules: [
      { title: "No general data protection act yet", body: "Pakistan's Personal Data Protection Bill has not yet been passed. Data offences fall under the Prevention of Electronic Crimes Act 2016 and sector rules such as banking confidentiality. We still build to international privacy standards, which matters when you sell abroad." },
      { title: "Urdu and English", body: "Many products need both. We design for Urdu's right-to-left script and Nastaliq fonts where your audience reads Urdu." },
      { title: "Built for real connections", body: "Pages and apps tested on mid-range phones and slower mobile data, because that is how many customers use them." },
    ],
    working: [
      { title: "Same time zone", body: "Our working day is your working day." },
      { title: "Calls and WhatsApp", body: "Video calls for planning and reviews, and WhatsApp for quick questions, wherever you are in Pakistan." },
      { title: "Weekly progress", body: "A working preview every week." },
      { title: "Fixed quotes", body: "A fixed quote agreed before work starts." },
    ],
    services: [
      "shopify/shopify-store-setup",
      "ecommerce/woocommerce-development",
      "mobile-apps/ios-android-app-development",
      "ai-agents/whatsapp-ai-agents",
      "websites/wordpress-development",
      "web-apps/custom-web-app-development",
    ],
    proof: ["insaf-academy", "care-foundation", "the-jumbo-jump"],
    proofNote: "Projects for Pakistani clients: a free learning platform, a non-profit's website and a booking site with online payments.",
    faq: [
      { q: "Where are you based?", a: "In Karachi. We work remotely with clients across Pakistan and overseas, by appointment, Monday to Friday." },
      { q: "Can you add JazzCash, Easypaisa and cash on delivery?", a: "Yes, through payment gateways that support them, alongside card payments." },
      { q: "Can you build in Urdu?", a: "Yes. We design right-to-left Urdu layouts with suitable fonts, alongside English." },
      { q: "Do you work with small businesses?", a: "Yes. Many projects start small, like a Shopify store or a WhatsApp agent, and grow from there." },
      { q: "How do we start?", a: "Message us on WhatsApp or book a call. We reply within one working day." },
    ],
    sources: [
      DR("Pakistan", "pakistan"),
      { label: "State Bank of Pakistan: Annual Payment Systems Review FY25 (press release)", url: "https://www.sbp.org.pk/press/2025/Pr-03-Nov-2025.pdf" },
      { label: "Commoner Law: Data privacy in Pakistan without a PDP Act (2026)", url: "https://commoner-law.com/pakistan/data-privacy-digital-rights/data-privacy-without-pdp-act" },
    ],
    closing: "Building something for customers in Pakistan?",
    updated: UPDATED,
  },
];

export function getLocation(slug: string) {
  return LOCATIONS.find((l) => l.slug === slug);
}
