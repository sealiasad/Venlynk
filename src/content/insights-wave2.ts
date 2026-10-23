import type { Insight } from "@/content/types";

/** Buyer-question articles that support the service and location pages. */
export const INSIGHTS_WAVE2: Insight[] = [
  {
    slug: "noon-or-amazon-ae-for-new-sellers",
    title: "noon or Amazon.ae: where should a new Gulf seller start?",
    category: "Ecommerce",
    date: "2026-10-23",
    readingTime: "5 min",
    excerpt:
      "Both marketplaces reach millions of Gulf shoppers. The better first choice depends on your products, your margins and how much of the work you want to hand over.",
    author: "Venlynk",
    serviceLinks: ["ecommerce/noon-store-setup", "shopify/shopify-store-setup", "ecommerce/shipping-integration"],
    content: [
      {
        type: "p",
        text: "For brands entering the UAE or Saudi Arabia, marketplaces are often the fastest way to reach shoppers. The two names everyone asks about are noon and Amazon.ae. You can sell on both, but most sellers do better starting with one and doing it properly.",
      },
      { type: "h", text: "What they have in common" },
      {
        type: "list",
        items: [
          "Both expect a registered business. noon asks for a trade licence or commercial registration, and Amazon.ae asks for business, tax and bank details.",
          "Both charge commission on each sale, which varies by category, plus fees for using their warehouses if you choose to.",
          "Both reward complete, accurate listings: good titles, attributes, images and, increasingly, Arabic content.",
        ],
      },
      { type: "h", text: "Where they differ in practice" },
      {
        type: "p",
        text: "noon is a regional marketplace built around Gulf shoppers, with Arabic and English throughout and a strong presence in Saudi Arabia as well as the UAE. Amazon.ae is part of Amazon's global network, which matters if you already sell on Amazon elsewhere and know its tools and rules.",
      },
      {
        type: "p",
        text: "The categories that do well differ too, and so do promotions, delivery promises and how search ranks listings. Look at who already sells products like yours on each, at what price, and with how many reviews.",
      },
      { type: "h", text: "Questions that decide it" },
      {
        type: "list",
        items: [
          "Where are your customers: mostly UAE, or Saudi Arabia as well?",
          "Do you already sell on Amazon in another country?",
          "Can your margins carry marketplace commission and fulfilment fees?",
          "Do you want to ship orders yourself, or hand storage and delivery to the marketplace?",
          "Can you provide good Arabic listings, or will you need help?",
        ],
      },
      {
        type: "quote",
        text: "A marketplace brings you shoppers. Your own store keeps them.",
      },
      { type: "h", text: "Do not skip your own store" },
      {
        type: "p",
        text: "Marketplaces own the customer relationship. A simple Shopify store alongside them gives you a place to send repeat buyers, run your own offers and keep more margin. Plan from the start how stock and prices stay in step across channels, so you do not oversell.",
      },
      {
        type: "p",
        text: "If you are deciding now, we can review your products and margins and recommend where to start, then set up the account and listings in English and Arabic.",
      },
    ],
  },
  {
    slug: "flutter-or-react-native",
    title: "Flutter or React Native: how to choose for your app",
    category: "Mobile",
    date: "2026-10-23",
    readingTime: "6 min",
    excerpt:
      "Both build iPhone and Android apps from one codebase, and both power big apps. The right choice depends more on your team and product than on benchmarks.",
    author: "Venlynk",
    serviceLinks: ["mobile-apps/flutter-app-development", "mobile-apps/react-native-app-development", "mobile-apps/ios-android-app-development"],
    content: [
      {
        type: "p",
        text: "We build in both, so we get asked this a lot. The honest answer: for most business apps, either will do the job well. The choice matters most for who will maintain the app and what else your team already builds.",
      },
      { type: "h", text: "What they share" },
      {
        type: "list",
        items: [
          "One codebase for iPhone and Android, which usually means lower cost than two native apps.",
          "Mature tooling, large communities and plenty of ready-made packages.",
          "Access to device features such as the camera, location and payments, with native code where needed.",
        ],
      },
      { type: "h", text: "Choose Flutter when" },
      {
        type: "list",
        items: [
          "You want the app to look and behave the same on every device, down to the pixel.",
          "The design is custom and animation-heavy rather than standard platform screens.",
          "You do not have an existing React team whose skills you want to reuse.",
        ],
      },
      { type: "h", text: "Choose React Native when" },
      {
        type: "list",
        items: [
          "Your team already builds your website or product in React and TypeScript.",
          "You want to share logic, types or even some components with your web app.",
          "You prefer the app to use each platform's own native controls.",
        ],
      },
      { type: "h", text: "What matters more than the framework" },
      {
        type: "p",
        text: "Most app problems we are asked to fix are not caused by the framework. They come from unclear scope, weak back-end design, no crash monitoring and no plan for updates after launch. A well-built Flutter app and a well-built React Native app both beat a poorly built native one.",
      },
      {
        type: "quote",
        text: "Pick the framework your future team can maintain, not the one that won last week's benchmark.",
      },
      {
        type: "p",
        text: "Tilawat, a Quran audio app we designed and built, runs on Flutter. For teams with a React web product, React Native is often the more natural fit. Tell us about your product and team and we will recommend one, with reasons.",
      },
    ],
  },
  {
    slug: "how-to-brief-a-development-agency",
    title: "How to brief a development agency (and get a quote you can trust)",
    category: "Product design",
    date: "2026-10-23",
    readingTime: "5 min",
    excerpt:
      "A good brief does not need to be long. It needs to answer six questions, so agencies quote the same thing and you can compare them fairly.",
    author: "Venlynk",
    serviceLinks: ["web-apps/mvp-development", "design/ux-audit", "websites/custom-website-development"],
    content: [
      {
        type: "p",
        text: "Quotes for the same project can differ wildly because each agency imagines a different project. A short, clear brief fixes most of that. You do not need technical language. You need to answer these six questions.",
      },
      { type: "h", text: "1. What problem are you solving?" },
      {
        type: "p",
        text: "Describe the business problem, not the solution. 'Customers keep calling to book, and we miss calls at night' is more useful than 'we need an app'. It lets the agency suggest the simplest thing that works.",
      },
      { type: "h", text: "2. Who will use it?" },
      {
        type: "p",
        text: "List the kinds of users: customers, staff, admins, partners. Each one is a set of screens and permissions, so this is the biggest single factor in size.",
      },
      { type: "h", text: "3. What must the first version do?" },
      {
        type: "p",
        text: "Split your list into must-have for launch and later. A focused first version launches sooner, costs less and teaches you what to build next.",
      },
      { type: "h", text: "4. What already exists?" },
      {
        type: "p",
        text: "Mention current websites, apps, CRMs, payment providers, brand guidelines and designs. Connections to existing systems are a common source of surprise costs.",
      },
      { type: "h", text: "5. What does success look like?" },
      {
        type: "p",
        text: "More bookings, fewer support calls, faster pages, a product investors can try. A measurable goal helps the agency make trade-offs on your behalf.",
      },
      { type: "h", text: "6. When, and roughly how much?" },
      {
        type: "p",
        text: "Share your deadline and a rough budget range. It is not a negotiating weakness; it lets a good agency propose what fits instead of guessing.",
      },
      {
        type: "quote",
        text: "The best briefs are short, honest about constraints and clear about what success means.",
      },
      { type: "h", text: "When comparing quotes" },
      {
        type: "list",
        items: [
          "Check that each quote covers the same scope, and ask what is excluded.",
          "Ask who will actually do the work, and whether you will meet them.",
          "Ask how you will see progress during the project.",
          "Ask what happens after launch: fixes, updates and support.",
        ],
      },
      {
        type: "p",
        text: "If you would like a second opinion on your brief, send it to us. Every project we take on starts with a 30-minute call and a fixed quote.",
      },
    ],
  },
  {
    slug: "shopify-or-woocommerce-for-a-gulf-store",
    title: "Shopify or WooCommerce for a store in the UAE or Saudi Arabia?",
    category: "Ecommerce",
    date: "2026-10-23",
    readingTime: "6 min",
    excerpt:
      "Both platforms run successful Gulf stores. The right choice depends on who will run the store, how you take payment and how much you want to own.",
    author: "Venlynk",
    serviceLinks: ["shopify/shopify-store-setup", "ecommerce/woocommerce-development", "ecommerce/noon-store-setup"],
    content: [
      {
        type: "p",
        text: "This is one of the first questions Gulf brands ask us, and the honest answer is that both work. We have built stores on each. What decides it is less about features and more about how your business runs day to day.",
      },
      { type: "h", text: "Who will run the store?" },
      {
        type: "p",
        text: "Shopify is hosted for you. Security, updates and checkout are Shopify's job, and your team works in one clean admin. If nobody on your team wants to think about servers or plugin updates, that alone often settles it.",
      },
      {
        type: "p",
        text: "WooCommerce runs on WordPress, on hosting you choose. You get more control, and more responsibility: updates, backups and security are yours, or your developer's. It suits businesses that already run WordPress well, or that need unusual checkout rules.",
      },
      { type: "h", text: "How will customers pay?" },
      {
        type: "p",
        text: "Gulf shoppers expect choice: cards, Apple Pay, buy now pay later such as Tabby or Tamara, and in Saudi Arabia mada cards. Many still want cash on delivery for a first order. Both platforms can offer all of these, but the route differs.",
      },
      {
        type: "list",
        items: [
          "On Shopify, check whether Shopify Payments is available for your country and business. If you use a different gateway instead, Shopify adds its own transaction fee on top of the gateway's fee.",
          "On WooCommerce, you pick a gateway plugin from a local provider and pay only that provider's fees, but you own the setup and its updates.",
          "Cash on delivery works on both, as a manual payment method on Shopify and a built-in option on WooCommerce.",
        ],
      },
      { type: "h", text: "Arabic and English" },
      {
        type: "p",
        text: "Both can run a proper bilingual store with right-to-left Arabic. The difference is in how translations are managed. Shopify handles languages through its own markets and translation tools; WooCommerce usually relies on a multilingual plugin. Either way, budget for real Arabic copy rather than machine translation. Shoppers notice.",
      },
      { type: "h", text: "Marketplaces alongside your store" },
      {
        type: "p",
        text: "Many Gulf brands sell on noon and Amazon.ae as well as their own site. Marketplaces bring shoppers; your own store keeps the customer relationship and the margin. Whichever platform you choose, plan how stock and prices stay in step across channels before launch, not after the first oversold order.",
      },
      {
        type: "quote",
        text: "Choose the platform your team can run well on a busy Thursday, not the one with the longest feature list.",
      },
      { type: "h", text: "A simple way to decide" },
      {
        type: "list",
        items: [
          "Want a store your team can run without technical help: Shopify.",
          "Already on WordPress with content that ranks well: WooCommerce is worth a close look.",
          "Need unusual pricing, checkout or B2B rules: talk it through before choosing, because either can work with the right setup.",
        ],
      },
      {
        type: "p",
        text: "If you are unsure, we are happy to look at your products, payments and team and give you a straight recommendation on a short call.",
      },
    ],
  },
  {
    slug: "what-decides-the-cost-of-an-app",
    title: "What actually decides the cost of building an app",
    category: "Mobile",
    date: "2026-10-23",
    readingTime: "6 min",
    excerpt:
      "Two apps that look similar on the surface can differ hugely in effort. These are the factors that really move the quote.",
    author: "Venlynk",
    serviceLinks: ["mobile-apps/ios-android-app-development", "mobile-apps/mobile-app-mvp", "design/app-design"],
    content: [
      {
        type: "p",
        text: "We give every project a fixed quote after a first call, and the most common question before that call is: what makes an app cost more or less? The screens you can see are only part of the answer. Most of the effort sits behind them.",
      },
      { type: "h", text: "1. How many kinds of user there are" },
      {
        type: "p",
        text: "An app for one kind of user is one product. A booking app with customers, staff and an admin is really three products sharing a back end. Each role needs its own screens, permissions and testing. Counting roles is the fastest way to estimate size.",
      },
      { type: "h", text: "2. What happens behind the screens" },
      {
        type: "p",
        text: "Logins, payments, notifications, live tracking and syncing with other systems are where time goes. A screen that shows a list is quick. A screen that books a slot, takes a deposit, updates a calendar and sends a WhatsApp confirmation is not.",
      },
      { type: "h", text: "3. Connections to other systems" },
      {
        type: "p",
        text: "Every connection to an existing system, such as a CRM, an ERP, a booking engine or a payment provider, adds work and risk, especially if that system is old or poorly documented. Ask early what you already use.",
      },
      { type: "h", text: "4. Design depth" },
      {
        type: "p",
        text: "A clean app built on standard components costs less than one with custom animation and illustration throughout. Both can be good. The question is where custom design earns its keep, usually on the first screens people see and the moment they pay.",
      },
      { type: "h", text: "5. Platforms and devices" },
      {
        type: "p",
        text: "Building iPhone and Android from one codebase with Flutter or React Native keeps cost down compared with two separate native apps. Tablets, a web version or offline use each add to the scope.",
      },
      { type: "h", text: "6. What happens after launch" },
      {
        type: "p",
        text: "Apps need updates as iOS and Android change, plus fixes and improvements once real users arrive. Plan for ongoing support from the start rather than treating launch as the finish line.",
      },
      {
        type: "quote",
        text: "The cheapest way to build an app is to build less of it first.",
      },
      {
        type: "p",
        text: "That is why we often suggest a focused first version: the one journey that proves the idea, done well. It costs less, launches sooner and tells you what to build next. Bring us your list of features and we will help you find that first version.",
      },
    ],
  },
  {
    slug: "european-accessibility-act-what-it-means-for-your-website",
    title: "The European Accessibility Act: what it means for your website",
    category: "Engineering",
    date: "2026-10-23",
    readingTime: "5 min",
    excerpt:
      "If you sell online to customers in the EU, accessibility is no longer just good practice. Here is what changed, who it covers and where to start.",
    author: "Venlynk",
    serviceLinks: ["websites/website-accessibility", "websites/website-redesign", "shopify/shopify-development"],
    content: [
      {
        type: "p",
        text: "Since 28 June 2025, the European Accessibility Act has applied across the EU. For many businesses the biggest change is simple: online shops and other consumer services sold in the EU now need to be accessible to people with disabilities. This is general information, not legal advice, but it should help you ask the right questions.",
      },
      { type: "h", text: "Who it covers" },
      {
        type: "p",
        text: "The Act covers a set of consumer products and services, and ecommerce is one of them. It can apply to businesses based outside the EU when they sell to EU consumers. Service providers that are micro-enterprises, meaning fewer than 10 staff and no more than €2 million in annual turnover, are exempt from the service requirements.",
      },
      { type: "h", text: "What standard to aim for" },
      {
        type: "p",
        text: "The harmonised standard used to show conformity, EN 301 549, relies on WCAG 2.1 Level AA for web content. In practice, if your site meets WCAG 2.1 AA, and ideally the newer WCAG 2.2 AA criteria too, you are in a strong position.",
      },
      { type: "h", text: "Where shops usually fall short" },
      {
        type: "list",
        items: [
          "Checkout steps that cannot be completed with a keyboard alone.",
          "Product images and buttons with no text alternative for screen readers.",
          "Low-contrast text, especially grey on white and text over photos.",
          "Form errors shown only in red, with no message explaining what went wrong.",
          "Pop-ups and cookie banners that trap keyboard users.",
        ],
      },
      { type: "h", text: "Why an overlay plugin is not the answer" },
      {
        type: "p",
        text: "Plugins that promise instant compliance add a toolbar on top of the site but leave the underlying code unchanged. Many people who use assistive technology find them unhelpful. Real fixes in your theme or templates are what make the site usable.",
      },
      {
        type: "quote",
        text: "Accessibility fixes usually make the site better for everyone: clearer forms, readable text, fewer dead ends.",
      },
      { type: "h", text: "Where to start" },
      {
        type: "list",
        items: [
          "Test your main journeys, from landing page to paid order, with a keyboard and a screen reader.",
          "Fix the blockers on checkout and forms first.",
          "Publish an accessibility statement saying what standard you meet and how people can report problems.",
          "Add accessibility checks to how you build new pages, so the work does not slowly undo itself.",
        ],
      },
      {
        type: "p",
        text: "If you would like an outside view, we audit sites against WCAG and fix what we find on Shopify, WordPress and custom builds.",
      },
    ],
  },
  {
    slug: "adding-arabic-to-your-website",
    title: "Adding Arabic to your website the right way",
    category: "Product design",
    date: "2026-10-23",
    readingTime: "5 min",
    excerpt:
      "A translate button and a mirrored layout are not an Arabic website. Here is what it takes to build one customers in the Gulf trust.",
    author: "Venlynk",
    serviceLinks: ["websites/multilingual-websites", "design/ui-ux-design", "websites/custom-website-development"],
    content: [
      {
        type: "p",
        text: "For businesses selling in the UAE and Saudi Arabia, an Arabic version of the website is often the difference between looking local and looking like a visitor. But a lot of Arabic sites are built in a way that quietly works against them. These are the things we get right first.",
      },
      { type: "h", text: "Give Arabic its own pages" },
      {
        type: "p",
        text: "Automatic translation widgets swap text in the browser, so search engines never see a proper Arabic page. Give each language its own address, link the versions together with hreflang tags, and Google can show Arabic searchers the Arabic page.",
      },
      { type: "h", text: "Design for right to left, not a mirror image" },
      {
        type: "p",
        text: "Flipping the whole layout breaks things that should not flip: logos, phone numbers, video controls and charts. Good right-to-left design decides element by element what mirrors and what stays. That is far easier to plan from the first wireframe than to fix after launch.",
      },
      { type: "h", text: "Handle mixed text" },
      {
        type: "p",
        text: "Arabic pages often include English product names, prices and codes. Without care, punctuation jumps to the wrong end of the line and numbers read in the wrong order. These details make a page feel either professional or broken.",
      },
      { type: "h", text: "Choose fonts for Arabic" },
      {
        type: "p",
        text: "Many web fonts have no Arabic characters, so the browser falls back to whatever it has, and the page looks mismatched. Pick an Arabic typeface that sits well beside your English one and loads quickly.",
      },
      { type: "h", text: "Write it, do not just translate it" },
      {
        type: "p",
        text: "Machine translation is a useful first draft. A native speaker should always review the final copy, especially headlines, calls to action and anything about price, delivery or returns.",
      },
      {
        type: "quote",
        text: "Customers forgive a small website. They do not forgive one that reads like it was not meant for them.",
      },
      { type: "h", text: "Keep both languages up to date" },
      {
        type: "p",
        text: "The most common failure is not launch day; it is six months later, when English has moved on and Arabic has not. Set up your content system so both languages sit side by side and updates happen together.",
      },
      {
        type: "p",
        text: "If you are planning an Arabic version, we can review your current site and tell you what is involved before you commit.",
      },
    ],
  },
];
