import type { ServicePage } from "@/content/service-pages";

/**
 * Wave 3: design, booking and marketplace builds, regional marketplaces,
 * multilingual and accessible sites, and two AI agents. Same writing rules as
 * service-pages.ts: plain words, real proof only, no prices.
 */

const photo = (k: string) => `/images/services/${k}.webp`;
const UPDATED = "2026-10-23";

export const WAVE3_PAGES: ServicePage[] = [
  /* ============================ DESIGN ============================ */
  {
    category: "design",
    slug: "app-design",
    metaTitle: "Mobile App Design: iOS and Android UI/UX",
    metaDescription:
      "Mobile app design for iOS and Android: user flows, screens and a clickable prototype your developers can build from. Fixed quote after one call.",
    h1: "Mobile app design",
    lead:
      "We design iOS and Android apps that feel obvious the first time someone opens them. You get the flows, every screen and a clickable prototype, ready for your developers or ours to build.",
    forWho:
      "Founders planning a new app, and teams whose current app gets downloads but loses people before they book, buy or sign up.",
    problems: [
      "People download the app, open it once and never come back.",
      "Every new feature has been squeezed in, and the app now feels crowded.",
      "Your developers are designing screens as they go, and it shows.",
      "You need something investors and early users can tap through before you build.",
    ],
    deliverables: [
      { title: "User flows", body: "The main journeys mapped step by step, from first open to the moment that matters: a booking, a payment, a sign up." },
      { title: "Every screen designed", body: "All states included: empty, loading, error and success, not just the happy path." },
      { title: "Clickable prototype", body: "A Figma prototype you can tap through on your own phone and put in front of real users." },
      { title: "Platform-aware details", body: "Navigation, gestures and controls that feel right on both iPhone and Android." },
      { title: "A small design system", body: "Colours, type, buttons and components named and organised, so the app stays consistent as it grows." },
      { title: "Developer handover", body: "Specs, spacing and assets in Figma, plus a walkthrough call with whoever is building it." },
    ],
    steps: [
      { title: "Understand the app", body: "Who uses it, what they need to get done and where they get stuck today." },
      { title: "Flows and wireframes", body: "The structure agreed in simple wireframes before any colour or polish." },
      { title: "Visual design", body: "Screens designed in your brand, reviewed with you every week." },
      { title: "Prototype and handover", body: "A tested prototype and a clean Figma file handed to your developers." },
    ],
    timing:
      "Design for a focused first version usually takes a few weeks. Larger apps with many roles or flows take longer, and we agree the scope before we start.",
    price: {
      headline: "App design gets a fixed quote once we know the flows and screens involved.",
      factors: [
        "How many user roles and main journeys the app has",
        "Whether you have a brand and design system already",
        "Testing the prototype with real users",
        "Design for a tablet or web version as well",
      ],
    },
    proof: {
      project: "tilawat",
      story:
        "Tilawat is a Quran audio app for listening to reciters, saving playlists and recording your own recitation. We designed it end to end and then built it in Flutter, so the screens in Figma are the screens people use.",
    },
    alsoProjects: ["stock-stream", "frontline-ticketing"],
    notFit: [
      "If you only need a few screens tidied up inside an app that already works, a UX audit is a quicker and cheaper first step.",
    ],
    faq: [
      { q: "Do you design for both iPhone and Android?", a: "Yes. We design one app that respects both platforms, and call out the places where iPhone and Android should behave differently." },
      { q: "Can you also build the app?", a: "Yes. We build in Flutter and React Native, so design and development can stay in one team. You can also hand the designs to your own developers." },
      { q: "Will I own the design files?", a: "Yes. The Figma file is yours, organised so any designer or developer can pick it up later." },
      { q: "Can we test the design before building?", a: "Yes. The clickable prototype works on a phone, and we can run short sessions with real users to catch problems early." },
    ],
    related: ["design/ui-ux-design", "mobile-apps/ios-android-app-development", "mobile-apps/flutter-app-development"],
    tools: ["Figma", "Maze", "Flutter", "App Store", "Google Play"],
    image: photo("mobile"),
    imageAlt: "Mobile app screens being designed",
    closing: "Planning an app people will keep using?",
    updated: UPDATED,
  },
  {
    category: "design",
    slug: "ux-audit",
    metaTitle: "UX Audit: Find Why Visitors Don't Convert",
    metaDescription:
      "A UX audit of your website or app: where people get stuck, why they leave, and a ranked list of fixes. Plain findings, not a 90-page report.",
    h1: "UX audit",
    lead:
      "We review your website or app the way your customers use it, find the places where people get stuck or give up, and hand you a short, ranked list of what to fix first.",
    forWho:
      "Teams with steady traffic but disappointing sign ups, bookings or sales, and anyone about to spend on a redesign who wants to know what is actually wrong first.",
    problems: [
      "Traffic is fine, but people leave before they buy, book or sign up.",
      "Everyone on the team has a different opinion about what to change.",
      "You are about to redesign and do not want to repeat the same mistakes.",
      "Customers keep asking support how to do simple things.",
    ],
    deliverables: [
      { title: "Journey review", body: "Your key journeys walked through on phone and desktop, step by step, the way a new customer meets them." },
      { title: "Data check", body: "Analytics and recordings reviewed, where you have them, to see where people actually drop off." },
      { title: "Findings with screenshots", body: "Each problem shown on the real screen, with why it hurts and how often it is likely to happen." },
      { title: "Ranked fix list", body: "Fixes sorted by impact and effort, so the quick wins are obvious." },
      { title: "Suggested designs", body: "Before and after sketches for the most important fixes." },
      { title: "Readout call", body: "We walk your team through the findings and answer questions." },
    ],
    steps: [
      { title: "Agree the goal", body: "Which journeys matter most and what success looks like." },
      { title: "Review", body: "Hands-on review of the site or app, plus your data where available." },
      { title: "Findings", body: "Problems written up, ranked and illustrated." },
      { title: "Readout", body: "A call to go through it together and plan the next step." },
    ],
    timing:
      "A focused audit of the main journeys usually takes one to two weeks. Larger products with many user types take longer.",
    price: {
      headline: "Every audit gets a fixed quote based on what we are reviewing.",
      factors: [
        "How many journeys and user types to cover",
        "Website, app or both",
        "Whether analytics and session recordings are available",
        "Adding short sessions with real users",
      ],
    },
    proof: {
      project: "frontline-ticketing",
      story:
        "Frontline Ticketing sells event tickets through an app and a website. We redesigned both, from finding an event to paying for it, starting from where buyers were getting stuck.",
    },
    notFit: [
      "If your product has very little traffic yet, an audit has little data to work with. A design review of the main flows may be more useful.",
    ],
    faq: [
      { q: "Is this just an opinion, or is it based on data?", a: "Both. We use established usability principles and, where you have them, your analytics and session recordings to show what is really happening." },
      { q: "Do we need to give you access to anything?", a: "Read access to analytics helps, and a test account if parts of the product are behind a login." },
      { q: "Will you fix the problems too?", a: "If you want. Many clients take the ranked list to their own team, and some ask us to design and build the fixes." },
      { q: "How long is the report?", a: "Short on purpose. You get a ranked list with screenshots, not a document nobody reads." },
    ],
    related: ["design/ui-ux-design", "websites/website-redesign", "growth/seo"],
    tools: ["Figma", "Hotjar", "Google Analytics", "Maze"],
    image: photo("ux"),
    imageAlt: "Reviewing screens and notes during a UX review",
    closing: "Want to know what is holding your site back?",
    updated: UPDATED,
  },
  {
    category: "design",
    slug: "brand-identity",
    metaTitle: "Brand Identity and Logo Design for Startups",
    metaDescription:
      "Brand identity and logo design for startups and growing businesses: logo, colours, type and a guide your team can use. Designed for screens first.",
    h1: "Brand identity and logo design",
    lead:
      "We design the logo, colours, type and visual rules that make your business recognisable, with screens in mind from the start, and a short guide so everyone uses them the same way.",
    forWho:
      "New businesses that need a brand before they launch, and growing ones whose logo was made in a hurry and no longer fits.",
    problems: [
      "Your logo was a quick fix and now appears on everything.",
      "Your website, social posts and slides all look slightly different.",
      "You are launching soon and need to look established from day one.",
      "Your logo looks fine large but falls apart as an app icon or favicon.",
    ],
    deliverables: [
      { title: "Logo", body: "A main logo, a compact version and an icon, tested at every size from billboard to browser tab." },
      { title: "Colour and type", body: "A palette and font pairing chosen for screens and print, with contrast checked for readability." },
      { title: "Visual style", body: "Rules for images, icons and layout, so new designs look like they belong." },
      { title: "Brand guide", body: "A short guide your team and suppliers can follow, without design training." },
      { title: "Ready-to-use files", body: "Logo files for web, print and social, plus templates for posts or slides if you need them." },
    ],
    steps: [
      { title: "Discovery", body: "Your business, audience, competitors and the impression you want to make." },
      { title: "Directions", body: "Two or three distinct directions to react to, not dozens of variations." },
      { title: "Refine", body: "The chosen direction developed and tested on real uses: website, app icon, social, documents." },
      { title: "Hand over", body: "Final files and the brand guide." },
    ],
    timing: "A focused brand identity usually takes a few weeks, depending on how many touchpoints and templates you need.",
    price: {
      headline: "Brand work gets a fixed quote after a short discovery call.",
      factors: [
        "Logo only or a full identity",
        "How many templates you need (social, slides, documents)",
        "Naming help, if the name is not settled",
        "Applying the brand to your website or app",
      ],
    },
    notFit: [
      "If you only need a few social graphics in your existing style, social media creatives are a better fit than a new identity.",
    ],
    faq: [
      { q: "How many logo options will I see?", a: "Two or three considered directions. Fewer, stronger options lead to better decisions than a long list." },
      { q: "Do I own the logo?", a: "Yes. Once the project is complete, the design and files are yours." },
      { q: "Can you apply the brand to our website as well?", a: "Yes. We design and build websites, so the brand can carry straight into your site or app." },
      { q: "Do you check that the logo works small?", a: "Yes. We test the icon at favicon and app icon sizes before anything is final." },
    ],
    related: ["design/website-design", "design/ui-ux-design", "websites/custom-website-development"],
    tools: ["Figma"],
    image: photo("ux"),
    imageAlt: "Brand design work on a desk",
    closing: "Ready to look the part from day one?",
    updated: UPDATED,
  },
  {
    category: "design",
    slug: "pitch-deck-design",
    metaTitle: "Pitch Deck Design for Startups and Sales Teams",
    metaDescription:
      "Pitch deck design for fundraising and sales: a clear story, slides that read in seconds, and an editable file your team can update.",
    h1: "Pitch deck design",
    lead:
      "We turn your story and numbers into a deck that investors or buyers understand in a few minutes. Clear structure, slides that read at a glance, and a file your team can keep updating.",
    forWho:
      "Founders raising a round, and sales teams whose proposal or company deck needs to win more meetings.",
    problems: [
      "Your deck has everything in it, but nobody remembers the main point.",
      "Slides are full of text that people read instead of listening to you.",
      "Your numbers are strong, but the charts make them hard to see.",
      "Every salesperson has their own version of the deck.",
    ],
    deliverables: [
      { title: "Story first", body: "The order of slides worked out with you, so each one makes one point and leads to the next." },
      { title: "Slide design", body: "Every slide designed in your brand, with headlines that state the takeaway." },
      { title: "Charts that make the point", body: "Your numbers shown simply, with the important figure impossible to miss." },
      { title: "Editable master", body: "Built in PowerPoint, Google Slides or Keynote with master layouts, so updates stay on brand." },
      { title: "Send and present versions", body: "A version to present live and a version that reads well on its own when emailed." },
    ],
    steps: [
      { title: "Story call", body: "What you are asking for, who is in the room and what they need to believe." },
      { title: "Outline", body: "Slide by slide outline agreed before design." },
      { title: "Design", body: "Slides designed and reviewed with you in one or two rounds." },
      { title: "Hand over", body: "Final deck, master layouts and a PDF version." },
    ],
    timing: "A focused deck usually takes one to two weeks, depending on length and how ready the content is.",
    price: {
      headline: "Every deck gets a fixed quote once we know the length and the content you have.",
      factors: [
        "Number of slides",
        "Whether the story and copy need writing or are mostly ready",
        "Custom charts, diagrams or illustrations",
        "Extra versions for different audiences",
      ],
    },
    notFit: ["If you need a single one-pager rather than a deck, tell us and we will scope it as a smaller job."],
    faq: [
      { q: "Can you help with the story, not just the design?", a: "Yes. Most of the value is in the structure. We work through the story with you before designing anything." },
      { q: "Which software will the deck be in?", a: "PowerPoint, Google Slides or Keynote, whichever your team uses day to day." },
      { q: "Can we edit it ourselves later?", a: "Yes. We build master layouts so your team can add slides that still look right." },
      { q: "Do you sign an NDA?", a: "Yes, happily. Decks often contain sensitive numbers." },
    ],
    related: ["design/brand-identity", "design/website-design", "design/ui-ux-design"],
    tools: ["Figma"],
    image: photo("growth"),
    imageAlt: "Presentation slides with charts",
    closing: "Got a story that deserves a better deck?",
    updated: UPDATED,
  },
  {
    category: "design",
    slug: "saas-design",
    metaTitle: "SaaS Product Design: Dashboards and Web Apps",
    metaDescription:
      "SaaS product design for web apps and dashboards: onboarding, data-heavy screens and a design system your developers can build from.",
    h1: "SaaS design",
    lead:
      "We design SaaS products and dashboards where people do real work every day. Clear onboarding, tables and charts that make sense, and a design system that keeps every new feature consistent.",
    forWho:
      "SaaS founders building a first version, and product teams whose app has grown feature by feature and become hard to use.",
    problems: [
      "New users sign up, look around and never come back.",
      "Your dashboard shows a lot of data but answers no questions.",
      "Each feature was designed separately, and the product feels stitched together.",
      "Developers are waiting on design, so releases slip.",
    ],
    deliverables: [
      { title: "Onboarding", body: "The first-run experience designed to get people to their first useful result quickly." },
      { title: "Core screens", body: "The main workflows designed in detail, including tables, filters, forms and empty states." },
      { title: "Dashboards", body: "Charts and summaries built around the decisions your users make, not just the data you have." },
      { title: "Design system", body: "Components and rules in Figma, ready to match a component library in code." },
      { title: "Roles and permissions", body: "What admins, team members and viewers see, designed rather than bolted on." },
      { title: "Sprint-ready handover", body: "Designs delivered in the order your developers will build them." },
    ],
    steps: [
      { title: "Understand the product", body: "Users, jobs to be done, current analytics and support questions." },
      { title: "Structure", body: "Navigation and main flows agreed in wireframes." },
      { title: "Design in sprints", body: "Screens designed ahead of development and reviewed weekly." },
      { title: "Ongoing support", body: "Design support while the product is built, so details are not lost." },
    ],
    timing:
      "A focused first version usually takes a few weeks of design. Many SaaS clients keep us on afterwards for new features, sprint by sprint.",
    price: {
      headline: "SaaS design gets a fixed quote for a defined scope, or a monthly plan for ongoing work.",
      factors: [
        "Number of user roles and core workflows",
        "Dashboards and reporting needed",
        "Whether a design system exists already",
        "Ongoing design support during development",
      ],
    },
    proof: {
      project: "stock-stream",
      story:
        "Stock Stream is a live stock ticker with a personal watchlist, picture in picture and a full screen view. We redesigned and rebuilt it, so busy data stays readable at a glance.",
    },
    alsoProjects: ["frontline-ticketing"],
    notFit: [
      "If you have not yet tested whether people want the product, start with a small MVP and keep the design simple until you have users.",
    ],
    faq: [
      { q: "Can you work with our developers?", a: "Yes. We design in sprints ahead of your team and join their planning so designs arrive when they are needed." },
      { q: "Do you design the marketing site too?", a: "Yes, if you want. Keeping the product and the website in one design language makes the whole thing feel more trustworthy." },
      { q: "Will the design match a component library?", a: "We can design to match the library your developers use, such as shadcn/ui or Material, which saves build time." },
      { q: "Can you also build it?", a: "Yes. We build SaaS products in Next.js, React and Node.js." },
    ],
    related: ["web-apps/saas-development", "web-apps/dashboard-development", "design/ui-ux-design"],
    tools: ["Figma", "React", "Next.js", "Maze"],
    image: photo("ux"),
    imageAlt: "Dashboard screens being designed",
    closing: "Want a product people enjoy using every day?",
    updated: UPDATED,
  },

  /* ============================ WEB APPS ============================ */
  {
    category: "web-apps",
    slug: "booking-system-development",
    metaTitle: "Booking and Reservation System Development",
    metaDescription:
      "Custom booking and reservation systems: live availability, online payment, reminders and an admin panel your team actually likes using.",
    h1: "Booking and reservation systems",
    lead:
      "We build booking systems that let customers see what is available, book and pay in a few taps, and get reminders, while your team manages everything from one simple admin panel.",
    forWho:
      "Venues, clinics, salons, rental and service businesses that take bookings by phone or WhatsApp today, or have outgrown an off-the-shelf booking tool.",
    problems: [
      "Bookings come in by phone, WhatsApp and email, and double bookings happen.",
      "Customers cannot see availability, so they message you to ask.",
      "No-shows cost you money because there is no deposit or reminder.",
      "Your booking plugin cannot handle how your business really works.",
    ],
    deliverables: [
      { title: "Live availability", body: "Slots, rooms, staff or items shown as they really are, updated the moment someone books." },
      { title: "Online payment", body: "Full payment or deposits through a gateway that works in your country." },
      { title: "Reminders", body: "Email, SMS or WhatsApp confirmations and reminders to cut no-shows." },
      { title: "Admin panel", body: "Your team sees, moves and cancels bookings, blocks time and manages prices in one place." },
      { title: "Your rules built in", body: "Buffers, capacity limits, packages and peak pricing set up the way your business works." },
      { title: "Calendar sync", body: "Bookings synced to Google or Outlook calendars, where it helps your team." },
    ],
    steps: [
      { title: "Map how you book today", body: "Every rule, exception and question your team handles by hand." },
      { title: "Design the flow", body: "Customer booking and admin screens designed and tested." },
      { title: "Build", body: "Built with a working preview every week." },
      { title: "Launch", body: "Real test bookings and payments, then go live." },
    ],
    timing:
      "A focused booking system can launch quickly when the rules are clear. The Jumbo Jump went live within a week. More complex scheduling takes longer.",
    price: {
      headline: "Every booking system gets a fixed quote once we have mapped your rules.",
      factors: [
        "How complex your availability rules are",
        "Payments, deposits and refunds",
        "Reminders by SMS or WhatsApp",
        "Connections to your calendar, CRM or accounting",
      ],
    },
    proof: {
      project: "the-jumbo-jump",
      story:
        "The Jumbo Jump is home to the world's largest jumping castle. We built their website with slot booking and online payments, and it went live within a week.",
    },
    alsoProjects: ["frontline-ticketing"],
    notFit: [
      "If you take a handful of simple appointments, an existing booking tool may be enough. We will tell you if that is the case.",
    ],
    faq: [
      { q: "Can customers pay a deposit instead of the full amount?", a: "Yes. Deposits, full payment or pay on arrival can be offered, depending on the service." },
      { q: "Can it send WhatsApp reminders?", a: "Yes, through the WhatsApp Business Platform, alongside email or SMS." },
      { q: "Can we use it on a phone?", a: "Yes. Both the booking flow and the admin panel are designed for phones first." },
      { q: "Can you add an AI agent that takes bookings?", a: "Yes. An AI booking agent can answer questions and book slots on WhatsApp or your website, using the same availability." },
    ],
    related: ["ai-agents/ai-booking-agents", "web-apps/custom-web-app-development", "mobile-apps/booking-app-development"],
    tools: ["Next.js", "Stripe", "PostgreSQL", "Supabase"],
    image: photo("web"),
    imageAlt: "Booking calendar on a laptop",
    closing: "Ready to stop taking bookings by hand?",
    updated: UPDATED,
  },
  {
    category: "web-apps",
    slug: "real-estate-platforms",
    metaTitle: "Real Estate Platform and Property Portal Development",
    metaDescription:
      "Property portals and real estate platforms: listings, smart search, virtual tours and a CRM that catches every enquiry. Built for developers and brokers.",
    h1: "Real estate platforms",
    lead:
      "We build property portals and real estate platforms with fast search, rich listings and virtual tours, connected to a CRM so every enquiry reaches the right agent.",
    forWho:
      "Developers, brokers and property investment businesses that sell to local and overseas buyers and need more than a listings plugin.",
    problems: [
      "Enquiries arrive by phone, email and WhatsApp and some are never followed up.",
      "Listings are updated by hand in several places and go out of date.",
      "Overseas buyers cannot get a feel for a property without a visit.",
      "Your search is slow and buyers give up before they find a match.",
    ],
    deliverables: [
      { title: "Listings that sell", body: "Photos, floor plans, payment plans, location and key facts laid out the way buyers compare properties." },
      { title: "Fast search", body: "Filters by area, price, type, bedrooms and handover date, quick on phones." },
      { title: "Virtual tours", body: "Video and 3D tours embedded, so overseas buyers can shortlist without travelling." },
      { title: "CRM connection", body: "Every enquiry captured with its source and routed to the right agent." },
      { title: "Admin for your team", body: "Listings, projects and developers managed in one place, with no developer needed." },
      { title: "Search-friendly pages", body: "Project and area pages structured to rank for what buyers search." },
    ],
    steps: [
      { title: "Discovery", body: "Your listings, buyers, sales process and CRM." },
      { title: "Design", body: "Search, listing and enquiry flows designed and tested." },
      { title: "Build", body: "Built with weekly previews, data imported from your current sources." },
      { title: "Launch", body: "Go live with tracking on every enquiry." },
    ],
    timing:
      "A property portal usually takes several weeks to a few months, depending on data sources, integrations and how many listing types you have.",
    price: {
      headline: "Every platform gets a fixed quote after discovery.",
      factors: [
        "Number of listing types and data sources",
        "CRM and lead routing",
        "Virtual tours and media",
        "Multiple languages, such as English and Arabic",
      ],
    },
    proof: {
      project: "dxb-off-plan",
      story:
        "DXB Off Plan is a property portal for people investing in Dubai's off plan projects. We built it with listings, virtual tours, fast search and a CRM behind it.",
    },
    alsoProjects: ["mnm-estates"],
    notFit: [
      "If you are a single agent with a few listings, a well-built website with a listings section may be enough for now.",
    ],
    faq: [
      { q: "Can listings come from our CRM or a property feed?", a: "Yes. We can import listings from a feed or CRM, or let your team manage them directly in the admin." },
      { q: "Can the portal be in English and Arabic?", a: "Yes. We design right-to-left layouts from the start and give each page a proper Arabic version." },
      { q: "Do you work with developers selling off plan?", a: "Yes. Payment plans, handover dates and project pages are built in." },
      { q: "Can enquiries go straight to WhatsApp?", a: "Yes. Enquiries can open a WhatsApp chat with the right agent and still be logged in your CRM." },
    ],
    related: ["web-apps/custom-web-app-development", "websites/multilingual-websites", "ai-agents/whatsapp-ai-agents"],
    tools: ["Next.js", "WordPress", "PostgreSQL", "Google Analytics"],
    image: photo("web"),
    imageAlt: "Property listings on a laptop",
    closing: "Want a portal that turns browsers into buyers?",
    updated: UPDATED,
  },
  {
    category: "web-apps",
    slug: "marketplace-development",
    metaTitle: "Marketplace Platform Development",
    metaDescription:
      "Two-sided marketplace development: sign up for buyers and sellers, listings, bookings, payments and reviews. From MVP to a platform that scales.",
    h1: "Marketplace platforms",
    lead:
      "We build two-sided marketplaces where customers find, book and pay providers, and providers manage their listings, jobs and payouts. Start lean, then grow it as both sides grow.",
    forWho:
      "Founders building a marketplace for services, rentals or trades, and businesses turning a directory into a platform where deals actually happen.",
    problems: [
      "You need both sides to join, but the sign-up feels like paperwork.",
      "Payments and payouts between customers and providers are a headache.",
      "Providers ask for jobs to be handled offline, and you lose the commission.",
      "Your first version needs to launch fast without painting you into a corner.",
    ],
    deliverables: [
      { title: "Two sign-up journeys", body: "Customers and providers each get a simple sign-up, with checks for providers where you need them." },
      { title: "Listings and search", body: "Providers manage their offers; customers search, filter and compare." },
      { title: "Booking or bidding", body: "Instant booking, quotes or bids, depending on how your market works." },
      { title: "Payments and payouts", body: "Customers pay on the platform, providers get paid out, and your commission is handled automatically." },
      { title: "Reviews and trust", body: "Ratings, verified badges and dispute handling that keep both sides honest." },
      { title: "Admin console", body: "Approve providers, manage disputes and see how the marketplace is performing." },
    ],
    steps: [
      { title: "Shape the MVP", body: "The smallest version that proves both sides will use it." },
      { title: "Design", body: "Customer, provider and admin flows designed together." },
      { title: "Build", body: "Built in stages with a working preview every week." },
      { title: "Launch and grow", body: "Launch, measure, then add what the market asks for." },
    ],
    timing:
      "A marketplace MVP usually takes a few months. We plan it so the first version launches early and the rest grows with real usage.",
    price: {
      headline: "Every marketplace gets a fixed quote for the first version after we shape the MVP together.",
      factors: [
        "Booking, quote or bidding model",
        "Payments, payouts and commission rules",
        "Provider verification",
        "Mobile apps in addition to the web platform",
      ],
    },
    proof: {
      project: "servicemarket",
      story:
        "ServiceMarket is the UAE's marketplace for cleaning, moving and home maintenance. We work on their web portal on a monthly retainer, shipping improvements every month.",
    },
    alsoProjects: ["buildbid"],
    notFit: [
      "If you have not yet found providers willing to join, test demand first with a simple landing page and manual matching before building a full platform.",
    ],
    faq: [
      { q: "Can the marketplace take a commission automatically?", a: "Yes. Payments can be split so providers are paid out and your commission is kept, using a gateway that supports marketplaces." },
      { q: "Do we need mobile apps from day one?", a: "Usually not. A fast mobile website is often enough to start, with apps added once usage grows." },
      { q: "Can you work on an existing marketplace?", a: "Yes. We work on ServiceMarket's portal on a monthly retainer." },
      { q: "How do we stop providers taking jobs offline?", a: "Good on-platform messaging, payment protection and reviews give both sides a reason to stay. We design those in." },
    ],
    related: ["web-apps/mvp-development", "web-apps/saas-development", "mobile-apps/on-demand-app-development"],
    tools: ["Next.js", "Stripe", "PostgreSQL", "Supabase", "React Native"],
    image: photo("web"),
    imageAlt: "Marketplace web app on screen",
    closing: "Building a marketplace both sides will love?",
    updated: UPDATED,
  },

  /* ============================ MOBILE ============================ */
  {
    category: "mobile-apps",
    slug: "on-demand-app-development",
    metaTitle: "On-Demand and Delivery App Development",
    metaDescription:
      "On-demand and delivery apps: a customer app, a driver or provider app and an admin panel, with live tracking, payments and notifications.",
    h1: "On-demand and delivery apps",
    lead:
      "We build the full set an on-demand business needs: a customer app to order or book, a driver or provider app to accept and complete jobs, and an admin panel to run it all, with live tracking in between.",
    forWho:
      "Delivery, mobility, home services and rental businesses that coordinate jobs by phone and WhatsApp today, or are launching a new on-demand service.",
    problems: [
      "Dispatchers spend the day on the phone assigning jobs.",
      "Customers keep calling to ask where their driver is.",
      "Drivers use paper or chat groups for routes and proof of delivery.",
      "An off-the-shelf app does not fit how your service works.",
    ],
    deliverables: [
      { title: "Customer app", body: "Order or book, pay, track the driver live and rate the job." },
      { title: "Driver or provider app", body: "Accept jobs, follow routes and stops, and record proof of delivery or completion." },
      { title: "Admin and dispatch", body: "See every job and driver on a map, assign work and handle issues." },
      { title: "Live tracking", body: "Location updates and arrival estimates that keep customers informed." },
      { title: "Payments", body: "Cards, wallets and cash on delivery, depending on your market." },
      { title: "Notifications", body: "Push, SMS or WhatsApp updates at each step of the job." },
    ],
    steps: [
      { title: "Map the job", body: "Every step from order to completion, and who does what." },
      { title: "Design three apps", body: "Customer, driver and admin flows designed together." },
      { title: "Build", body: "Built in Flutter or React Native, with a working preview every week." },
      { title: "Pilot and launch", body: "Tested with real drivers and customers, then released to the stores." },
    ],
    timing:
      "A first version with customer, driver and admin apps usually takes a few months. Starting with one city or one service type speeds it up.",
    price: {
      headline: "Every on-demand app gets a fixed quote once we have mapped the job flow.",
      factors: [
        "Number of apps (customer, driver, vendor, admin)",
        "Live tracking and route planning",
        "Payments, payouts and cash handling",
        "Languages and markets at launch",
      ],
    },
    proof: {
      project: "ice",
      story:
        "ICE is a mobility client in Germany. We built two apps: riders book trips and rentals in one, and drivers follow routes, stops and proof of delivery in the other.",
    },
    alsoProjects: ["servicemarket"],
    notFit: [
      "If you handle a few jobs a day, a simple booking website with WhatsApp updates may be the smarter first step.",
    ],
    faq: [
      { q: "Do we need separate apps for customers and drivers?", a: "Usually yes. Drivers need different screens and offline support. Both can share one back end." },
      { q: "Can the driver app work with a weak signal?", a: "Yes. Jobs and proof of delivery can be saved on the phone and synced when the signal returns." },
      { q: "Can customers pay cash on delivery?", a: "Yes. Cash can be recorded by the driver and reconciled in the admin panel." },
      { q: "Which technology do you use?", a: "Flutter or React Native for the apps, so iPhone and Android share one codebase." },
    ],
    related: ["mobile-apps/ios-android-app-development", "mobile-apps/flutter-app-development", "web-apps/marketplace-development"],
    tools: ["Flutter", "React Native", "Firebase", "Supabase", "Stripe"],
    image: photo("mobile"),
    imageAlt: "Delivery tracking on a phone",
    closing: "Ready to run your service from an app?",
    updated: UPDATED,
  },
  {
    category: "mobile-apps",
    slug: "booking-app-development",
    metaTitle: "Booking and Ticketing App Development",
    metaDescription:
      "Booking and ticketing apps for events, venues, travel and services: browse, book, pay and get a ticket or confirmation on the phone.",
    h1: "Booking and ticketing apps",
    lead:
      "We design and build apps where people find an event, a slot or a trip, book it and pay in a few taps, and then get a ticket or confirmation they can find in seconds on the day.",
    forWho:
      "Event organisers, venues, ticket sellers, travel and service businesses whose customers book on their phones.",
    problems: [
      "People drop out of your booking flow before paying.",
      "Tickets get lost in email, and the door queue slows down.",
      "Your app looks dated next to the big ticketing platforms.",
      "You want your own app instead of paying a platform on every sale.",
    ],
    deliverables: [
      { title: "Browse and search", body: "Events, slots or trips listed clearly, with filters that match how people choose." },
      { title: "Fast checkout", body: "Seat or slot selection and payment in as few steps as possible." },
      { title: "Tickets in the app", body: "QR tickets or confirmations that open instantly, even offline, plus wallet passes where useful." },
      { title: "Scanning for staff", body: "A staff mode or app to scan tickets at the door." },
      { title: "Reminders", body: "Push notifications before the event or booking." },
      { title: "Admin panel", body: "Manage events, capacity, prices and refunds without a developer." },
    ],
    steps: [
      { title: "Review your sales", body: "Where people drop out and what they ask support." },
      { title: "Design", body: "Browse, book and ticket flows designed and tested on phones." },
      { title: "Build", body: "Built with weekly previews and real test payments." },
      { title: "Launch", body: "Released to the App Store and Google Play, with scanning tested on site." },
    ],
    timing: "A focused booking app usually takes a few months, depending on seating, payments and integrations.",
    price: {
      headline: "Every booking app gets a fixed quote after we review your current flow.",
      factors: [
        "Seat maps or simple slots",
        "Payment methods and refunds",
        "Ticket scanning and staff tools",
        "Connections to an existing ticketing or booking system",
      ],
    },
    proof: {
      project: "frontline-ticketing",
      story:
        "Frontline Ticketing sells event tickets through an app and a website. We redesigned both, from finding an event to paying for it.",
    },
    alsoProjects: ["ice", "the-jumbo-jump"],
    notFit: [
      "If you run a few events a year, a well-built booking website may serve you better than an app.",
    ],
    faq: [
      { q: "Will tickets work without internet at the venue?", a: "Yes. Tickets are saved on the phone so they open without a signal." },
      { q: "Can we keep our current ticketing system?", a: "Often yes. We can build the app on top of your existing system if it has an API." },
      { q: "Do you handle App Store and Google Play publishing?", a: "Yes. We prepare the store listings and handle the review process." },
      { q: "Can we add a website as well?", a: "Yes. The same back end can power a booking website alongside the app." },
    ],
    related: ["web-apps/ticketing-platform-development", "web-apps/booking-system-development", "mobile-apps/ios-android-app-development"],
    tools: ["Flutter", "React Native", "Stripe", "Firebase", "App Store", "Google Play"],
    image: photo("mobile"),
    imageAlt: "Event ticket on a phone",
    closing: "Want bookings that take seconds, not minutes?",
    updated: UPDATED,
  },

  /* ============================ ECOMMERCE ============================ */
  {
    category: "ecommerce",
    slug: "noon-store-setup",
    metaTitle: "Noon and Amazon.ae Seller Account Setup",
    metaDescription:
      "Noon and Amazon.ae store setup for UAE and Saudi sellers: account onboarding, listings in English and Arabic, pricing and fulfilment set up properly.",
    h1: "Noon and Amazon.ae setup",
    lead:
      "We help you start selling on noon and Amazon.ae: the seller account, product listings in English and Arabic, images, pricing and fulfilment, set up so your products can be found and bought.",
    forWho:
      "Brands and traders in the UAE and Saudi Arabia, and international brands entering the Gulf, who want to sell on the region's biggest marketplaces.",
    problems: [
      "Seller onboarding stalls on documents and approvals.",
      "Your listings get few views because titles and attributes are incomplete.",
      "Arabic listings are missing or machine translated.",
      "You are unsure whether to fulfil orders yourself or use the marketplace's warehouses.",
    ],
    deliverables: [
      { title: "Onboarding support", body: "The documents each marketplace asks for checked before you apply, so approval is not delayed." },
      { title: "Listings that rank", body: "Titles, attributes, bullet points and descriptions written for how shoppers search on each marketplace." },
      { title: "English and Arabic", body: "Listings in both languages, written properly rather than machine translated." },
      { title: "Images", body: "Product images prepared to each marketplace's image rules." },
      { title: "Pricing and fulfilment", body: "Prices, stock and fulfilment option set up, whether you ship yourself or use the marketplace's warehouses." },
      { title: "Your own store too", body: "Optionally, a Shopify store alongside, so you are not fully dependent on marketplaces." },
    ],
    steps: [
      { title: "Check readiness", body: "Your licence, tax registration and product range reviewed." },
      { title: "Onboard", body: "Seller accounts set up and approved." },
      { title: "List", body: "Products listed in English and Arabic with images and attributes." },
      { title: "Go live", body: "First orders tested, then monthly support if you want it." },
    ],
    timing:
      "Setting up and listing a first range usually takes a few weeks. Approval times depend on the marketplace and how ready your documents are.",
    price: {
      headline: "Every marketplace setup gets a fixed quote based on your range and the marketplaces you choose.",
      factors: [
        "noon, Amazon.ae or both",
        "Number of products and variants",
        "Arabic copy and image preparation",
        "Ongoing listing and account management",
      ],
      note: "Marketplace fees and commissions are paid to noon or Amazon directly.",
    },
    facts: {
      title: "What noon asks for before you can sell",
      intro: "Documents differ by country and by whether you sell as a local or international business.",
      items: [
        { label: "UAE sellers", value: "UAE trade licence or registration, VAT certificate (or the non-VAT option), ID and bank proof" },
        { label: "Saudi sellers", value: "Commercial Registration for trading or ecommerce, plus a VAT number" },
        { label: "International sellers", value: "Can sell in the UAE and Saudi Arabia with a non-local trade licence, passport and payout details" },
      ],
    },
    notFit: [
      "If you do not yet hold a trade licence or commercial registration, sort that first. We can set up your own Shopify store in the meantime.",
    ],
    faq: [
      { q: "Do I need a trade licence to sell on noon?", a: "Yes. noon asks for a trade licence or commercial registration. International companies can use a licence from their home country to sell in the UAE and Saudi Arabia." },
      { q: "Can you write the Arabic listings?", a: "Yes. Arabic listings are written by people, then checked, rather than machine translated." },
      { q: "Should I use the marketplace's fulfilment?", a: "It depends on your margins and volume. We walk through both options with you before you decide." },
      { q: "Can you also manage the account each month?", a: "Yes. We can keep listings, prices and stock up to date on a monthly plan." },
    ],
    related: ["ecommerce/ecommerce-development", "shopify/shopify-store-setup", "websites/multilingual-websites"],
    tools: ["Shopify", "Google Sheets"],
    image: photo("commerce"),
    imageAlt: "Shopping online on a phone",
    closing: "Ready to sell on the Gulf's biggest marketplaces?",
    updated: UPDATED,
  },
  {
    category: "ecommerce",
    slug: "daraz-store-setup",
    metaTitle: "Daraz Store Setup and Listing Service in Pakistan",
    metaDescription:
      "Daraz store setup for Pakistani brands: seller account, product listings, images, pricing and promotions set up properly so your products sell.",
    h1: "Daraz store setup",
    lead:
      "We set up and list your store on Daraz, Pakistan's biggest online marketplace: the seller account, product listings, images, prices and campaign settings, so your products are easy to find and buy.",
    forWho:
      "Pakistani brands and sellers who want to reach Daraz shoppers, and businesses selling on Instagram or WhatsApp that are ready for a marketplace.",
    problems: [
      "Your products are on Daraz, but buried under similar listings.",
      "Titles and images do not meet Daraz's guidelines, so listings get rejected.",
      "Managing stock on Daraz and your own store at once is a mess.",
      "You are unsure which campaigns are worth joining.",
    ],
    deliverables: [
      { title: "Seller account setup", body: "Account created and verified, with store details and policies filled in properly." },
      { title: "Listings", body: "Titles, attributes and descriptions written for how Daraz shoppers search, in English and Urdu where helpful." },
      { title: "Images", body: "Product images prepared to Daraz's image guidelines." },
      { title: "Pricing and stock", body: "Prices, variants and stock set up, with a simple way to keep them in sync with your own store." },
      { title: "Store page", body: "Your Daraz store page branded so it looks like a real shop, not a list of products." },
      { title: "Campaign advice", body: "Which sales campaigns and vouchers suit your margins." },
    ],
    steps: [
      { title: "Review", body: "Your products, prices and current channels." },
      { title: "Set up", body: "Account and store page ready." },
      { title: "List", body: "Products listed with images and attributes." },
      { title: "Support", body: "First orders checked, then monthly help if you want it." },
    ],
    timing: "A first range is usually listed within a few weeks, depending on how many products and how ready the photos are.",
    price: {
      headline: "Every Daraz setup gets a fixed quote based on your range.",
      factors: [
        "Number of products and variants",
        "Image preparation and copywriting",
        "Syncing stock with Shopify or WooCommerce",
        "Ongoing account management",
      ],
      note: "Daraz charges its own commission on each order, which varies by category.",
    },
    notFit: [
      "If your products are high-value or need a lot of explanation, your own store may convert better than a marketplace. Many brands do both.",
    ],
    faq: [
      { q: "Does Daraz charge to list products?", a: "Daraz says there is no listing fee. It takes a commission on each order, and the rate depends on the product category." },
      { q: "Can you connect Daraz to our Shopify or WooCommerce store?", a: "Yes. We can keep stock and prices in step, so you do not oversell." },
      { q: "Can you also manage campaigns like 11.11?", a: "Yes. We can prepare listings and prices for big sale campaigns as part of a monthly plan." },
      { q: "Do you work with brands outside Karachi?", a: "Yes. We work with sellers across Pakistan, remotely." },
    ],
    related: ["ecommerce/ecommerce-development", "ecommerce/woocommerce-development", "shopify/shopify-store-setup"],
    tools: ["Shopify", "WooCommerce", "Google Sheets"],
    image: photo("commerce"),
    imageAlt: "Online shopping on a phone",
    closing: "Ready to sell on Daraz the right way?",
    updated: UPDATED,
  },

  /* ============================ WEBSITES ============================ */
  {
    category: "websites",
    slug: "multilingual-websites",
    metaTitle: "Multilingual Website Development: Arabic and English",
    metaDescription:
      "Multilingual websites built properly: separate pages per language, right-to-left Arabic layouts, real translations and the setup Google needs.",
    h1: "Multilingual websites",
    lead:
      "We build websites in more than one language the right way: each language gets its own pages, Arabic and Urdu read right to left, and search engines show each visitor the version in their language.",
    forWho:
      "Businesses selling in the Gulf, Europe or Pakistan whose customers speak different languages, and anyone whose current translated site relies on an automatic widget.",
    problems: [
      "Your site uses an automatic translate button, and it reads badly.",
      "The Arabic version is a mirror image with broken layouts.",
      "Google shows English pages to people searching in Arabic.",
      "Updating content in two languages is so painful the second one goes stale.",
    ],
    deliverables: [
      { title: "A page per language", body: "Each language on its own address, so it can rank in search and be shared." },
      { title: "Right-to-left layouts", body: "Arabic and Urdu designed to read right to left, with mixed English text and numbers handled properly." },
      { title: "Language switcher", body: "A clear switch that takes visitors to the same page in the other language." },
      { title: "Search setup", body: "hreflang tags and sitemaps so Google shows the right language to the right person." },
      { title: "Translation workflow", body: "Content managed side by side in your CMS, so both languages stay up to date." },
      { title: "Fonts that work", body: "Typefaces chosen for each script, loading fast." },
    ],
    steps: [
      { title: "Plan the languages", body: "Which pages, which languages and who translates." },
      { title: "Design both directions", body: "Layouts designed for left to right and right to left from the start." },
      { title: "Build", body: "Built with the language structure and CMS workflow in place." },
      { title: "Launch", body: "Each language checked by a native speaker before going live." },
    ],
    timing: "A multilingual site usually takes a little longer than a single-language one, mostly for translation and review.",
    price: {
      headline: "Every multilingual site gets a fixed quote based on pages and languages.",
      factors: [
        "Number of languages and pages",
        "Right-to-left languages such as Arabic or Urdu",
        "Who provides the translations",
        "Adding a language to an existing site",
      ],
    },
    proof: {
      project: "insaf-academy",
      story:
        "Insaf Academy is a free learning platform with video lectures and mock exams for classes 9 to 12, in Urdu and English. We redesigned and rebuilt it for B Group.",
    },
    alsoProjects: ["bible-study-fellowship"],
    notFit: ["If almost all your customers speak one language, a single well-written site will serve you better for now."],
    faq: [
      { q: "Can you translate the content?", a: "We work with native-speaking translators and reviewers. Automatic translation alone is not good enough for a business site." },
      { q: "Is an automatic translation widget bad for SEO?", a: "Usually it does not help, because the translated text is not on its own indexable pages. Separate pages per language work better." },
      { q: "Can you add Arabic to our existing website?", a: "Yes, though layouts often need adjusting for right to left. We review the site first and tell you what is involved." },
      { q: "Which CMS works best for multiple languages?", a: "WordPress and headless setups with Next.js both handle it well. We recommend one based on your team." },
    ],
    related: ["websites/custom-website-development", "websites/wordpress-development", "websites/nextjs-development"],
    tools: ["Next.js", "WordPress", "Google Search Console", "Figma"],
    image: photo("web"),
    imageAlt: "Website shown in two languages",
    closing: "Want a site that speaks your customers' language?",
    updated: UPDATED,
  },
  {
    category: "websites",
    slug: "website-accessibility",
    metaTitle: "Website Accessibility (WCAG) Audit and Fixes",
    metaDescription:
      "Website accessibility audits and fixes to WCAG 2.1 and 2.2 AA: keyboard, screen reader, contrast and forms. Includes what the EU Accessibility Act means.",
    h1: "Website accessibility (WCAG)",
    lead:
      "We check your website against the WCAG accessibility guidelines, fix what blocks people using keyboards, screen readers or zoom, and give you a plain record of what was tested and changed.",
    forWho:
      "Businesses selling online in the EU and UK, public-facing organisations, and any company that wants its site usable by everyone.",
    problems: [
      "You have heard about the European Accessibility Act and do not know if it applies to you.",
      "Your checkout cannot be completed with a keyboard alone.",
      "An automated scanner gave you hundreds of warnings and no priorities.",
      "Someone told you an accessibility overlay plugin would solve it.",
    ],
    deliverables: [
      { title: "Audit", body: "Your key pages and journeys tested against WCAG 2.1 and 2.2 AA, by hand and with tools." },
      { title: "Real assistive tech", body: "Journeys checked with a keyboard and screen readers, not just an automated scan." },
      { title: "Ranked fix list", body: "Issues grouped and ordered, with the blockers on checkout and forms first." },
      { title: "Fixes", body: "Code and design changes made by us or handed to your developers with clear instructions." },
      { title: "Accessibility statement", body: "A plain statement for your site describing the standard you meet and how to report problems." },
      { title: "Keeping it accessible", body: "Checks added to your process so new pages do not undo the work." },
    ],
    steps: [
      { title: "Scope", body: "Which pages and journeys matter, and which rules apply to you." },
      { title: "Test", body: "Manual and automated testing against WCAG." },
      { title: "Fix", body: "Issues fixed in order of impact." },
      { title: "Retest", body: "Fixes checked and the statement published." },
    ],
    timing: "An audit of the main journeys usually takes one to two weeks. Fixing time depends on what the audit finds.",
    price: {
      headline: "Every accessibility project gets a fixed quote for the audit, then for the fixes.",
      factors: [
        "Number of pages and journeys tested",
        "Your platform (Shopify, WordPress or custom)",
        "Whether we make the fixes or your team does",
        "Ongoing checks for new content",
      ],
    },
    facts: {
      title: "The European Accessibility Act in brief",
      intro: "General information, not legal advice.",
      items: [
        { label: "In force since", value: "28 June 2025" },
        { label: "Covers", value: "Online shops and other consumer services sold in the EU" },
        { label: "Standard", value: "EN 301 549, which uses WCAG 2.1 AA for web content" },
        { label: "Exempt", value: "Service micro-enterprises: fewer than 10 staff and no more than €2 million turnover" },
      ],
    },
    notFit: [
      "We do not sell or recommend overlay plugins that promise instant compliance. Real fixes in the site itself are what make it usable.",
    ],
    faq: [
      { q: "Does the European Accessibility Act apply to us?", a: "It can apply to businesses outside the EU that sell to EU consumers. Very small service businesses are exempt. Check with your lawyer; we can help with the technical side." },
      { q: "Which WCAG version do you test against?", a: "WCAG 2.1 AA as the baseline used by the EU standard, plus the newer WCAG 2.2 AA criteria." },
      { q: "Will an accessibility plugin fix everything?", a: "No. Overlay plugins do not fix the underlying code, and many users with disabilities find them unhelpful." },
      { q: "Can you fix a Shopify or WordPress site?", a: "Yes. We fix themes and templates on Shopify, WordPress and custom builds." },
    ],
    related: ["websites/website-redesign", "websites/website-maintenance", "shopify/shopify-development"],
    tools: ["Figma", "Google Search Console"],
    image: photo("web"),
    imageAlt: "Accessible website on a laptop",
    closing: "Want a site everyone can use?",
    updated: UPDATED,
  },

  /* ============================ AI AGENTS ============================ */
  {
    category: "ai-agents",
    slug: "ai-booking-agents",
    metaTitle: "AI Booking and Scheduling Agents",
    metaDescription:
      "AI agents that answer questions and book appointments on WhatsApp, your website or phone, using your real availability. Hands over to staff when needed.",
    h1: "AI booking and scheduling agents",
    lead:
      "We build AI agents that talk to customers on WhatsApp or your website, answer their questions and book them into real available slots, then hand over to your team whenever a person is needed.",
    forWho:
      "Clinics, salons, venues, rental and service businesses that lose bookings because nobody can reply quickly, especially out of hours.",
    problems: [
      "Messages asking for a slot arrive at night and get answered too late.",
      "Staff spend hours a day replying to the same questions.",
      "Customers book, forget and do not show up.",
      "You tried a chatbot before and it frustrated customers.",
    ],
    deliverables: [
      { title: "An agent that knows your business", body: "Trained on your services, prices, policies and FAQs, in your tone of voice." },
      { title: "Real bookings", body: "Connected to your calendar or booking system, so it only offers slots that are free." },
      { title: "WhatsApp and website", body: "Works on the WhatsApp Business Platform and as a chat on your site." },
      { title: "Reminders and changes", body: "Sends reminders and lets customers reschedule or cancel in the chat." },
      { title: "Smooth handover", body: "Passes the conversation to a person, with the full history, when it should." },
      { title: "Reports", body: "How many conversations, bookings and handovers, so you see the value." },
    ],
    steps: [
      { title: "Map conversations", body: "Your most common questions and booking rules." },
      { title: "Build and connect", body: "Agent built and connected to your booking system." },
      { title: "Test", body: "Tested on real conversations with your team before launch." },
      { title: "Launch and tune", body: "Launched, then improved weekly from real chats." },
    ],
    timing: "A focused booking agent usually takes a few weeks, depending on your booking system and channels.",
    price: {
      headline: "Every agent gets a fixed quote for the build, plus clear running costs.",
      factors: [
        "Channels: WhatsApp, website or both",
        "Your booking system and how it connects",
        "Languages the agent needs to speak",
        "Ongoing tuning and support",
      ],
      note: "WhatsApp and AI model usage are billed by their providers based on volume.",
    },
    facts: {
      title: "How WhatsApp limits business messages",
      intro: "Agents have to be designed around WhatsApp's rules for when businesses can message customers.",
      items: [
        { label: "Customer service window", value: "24 hours after the customer's last message" },
        { label: "Outside the window", value: "Only approved message templates, such as reminders" },
      ],
    },
    notFit: [
      "If you get a few booking messages a day, a simple online booking page may be all you need.",
    ],
    faq: [
      { q: "Will the AI make up answers?", a: "It is limited to your information and booking rules, and hands over to a person when it is not sure." },
      { q: "Can it book into our existing system?", a: "Usually yes, if your booking system has an API or calendar integration. We check before quoting." },
      { q: "Can it speak Arabic or Urdu?", a: "Yes. The agent can reply in the customer's language." },
      { q: "Do we keep control?", a: "Yes. Your team can see every conversation and take over at any time." },
    ],
    related: ["ai-agents/whatsapp-ai-agents", "ai-agents/ai-customer-support-agents", "web-apps/booking-system-development"],
    tools: ["OpenAI", "Claude", "n8n", "Supabase"],
    image: photo("ai"),
    imageAlt: "Chat conversation booking an appointment",
    closing: "Want bookings to come in while you sleep?",
    updated: UPDATED,
  },
  {
    category: "ai-agents",
    slug: "ai-sales-agents",
    metaTitle: "AI Sales and Lead Qualification Agents",
    metaDescription:
      "AI agents that reply to new leads in seconds, ask the right qualifying questions, book calls and update your CRM, so your team spends time on real buyers.",
    h1: "AI sales and lead qualification",
    lead:
      "We build AI agents that reply to new enquiries in seconds, ask the questions your sales team would ask, book qualified leads into calls and log everything in your CRM.",
    forWho:
      "Businesses that get more enquiries than their team can answer quickly, such as real estate, education, B2B services and agencies.",
    problems: [
      "Leads wait hours for a reply and go cold or go to a competitor.",
      "Your sales team spends most of the day on enquiries that never buy.",
      "Lead details are scattered across WhatsApp, email and forms.",
      "Nobody follows up after the first message.",
    ],
    deliverables: [
      { title: "Instant first reply", body: "Every new lead gets a helpful answer in seconds, day or night." },
      { title: "Qualifying questions", body: "The agent asks about budget, timing and needs, in a natural conversation." },
      { title: "Calls booked", body: "Qualified leads are booked straight into your team's calendar." },
      { title: "CRM updated", body: "Each lead logged with answers, source and score in HubSpot, Zoho or your CRM." },
      { title: "Follow-ups", body: "Polite follow-ups for leads that go quiet, within each channel's rules." },
      { title: "Handover", body: "Hot leads passed to a salesperson with the full conversation." },
    ],
    steps: [
      { title: "Define a good lead", body: "What your best customers have in common and what to ask." },
      { title: "Build and connect", body: "Agent built and connected to your channels and CRM." },
      { title: "Test", body: "Run on real enquiries alongside your team." },
      { title: "Launch and improve", body: "Launched, then tuned from real conversations." },
    ],
    timing: "A focused lead agent usually takes a few weeks, depending on channels and CRM.",
    price: {
      headline: "Every agent gets a fixed quote for the build, plus clear running costs.",
      factors: [
        "Channels: WhatsApp, website, email or forms",
        "Your CRM and calendar",
        "Languages and markets",
        "Ongoing tuning",
      ],
      note: "AI model and messaging usage are billed by their providers based on volume.",
    },
    notFit: [
      "If you get a handful of leads a week, a fast human reply and a simple CRM will serve you better.",
    ],
    faq: [
      { q: "Will leads know they are talking to AI?", a: "We recommend saying so. People mind slow replies far more than talking to a helpful assistant." },
      { q: "Which CRMs can it update?", a: "Common ones such as HubSpot, Zoho and Pipedrive, and others with an API." },
      { q: "Can it handle WhatsApp leads from ads?", a: "Yes. Click-to-WhatsApp ad leads can be answered and qualified straight away." },
      { q: "What if a lead asks something it cannot answer?", a: "It says so and passes the conversation to your team." },
    ],
    related: ["ai-agents/ai-agent-development", "ai-agents/whatsapp-ai-agents", "ai-agents/workflow-automation"],
    tools: ["OpenAI", "Claude", "n8n", "Google Sheets"],
    image: photo("ai"),
    imageAlt: "Sales chat with a new lead",
    closing: "Want every lead answered in seconds?",
    updated: UPDATED,
  },
];
