/**
 * Interface text for the localised page templates. Page content lives in
 * src/i18n/content; this file only holds labels, headings and short phrases
 * the templates add around that content.
 */

export type Locale = "en" | "ar" | "tr";
export const LOCALES: Locale[] = ["en", "ar", "tr"];
export const TRANSLATED: Exclude<Locale, "en">[] = ["ar", "tr"];

export const LOCALE_META: Record<Locale, { name: string; dir: "ltr" | "rtl"; og: string; bcp47: string }> = {
  en: { name: "English", dir: "ltr", og: "en_GB", bcp47: "en-GB" },
  ar: { name: "العربية", dir: "rtl", og: "ar_AE", bcp47: "ar" },
  tr: { name: "Türkçe", dir: "ltr", og: "tr_TR", bcp47: "tr-TR" },
};

export type UI = {
  home: string;
  locations: string;
  services: string;
  pakistan: string;
  getQuote: string;
  whatsapp: string;
  trust: [string, string, string];
  homeBase: string;
  teamHere: string;
  kmAway: (km: string) => string;
  nav: {
    services: string;
    market: string;
    needs: string;
    together: string;
    payRules: string;
    rules: string;
    work: string;
    faq: string;
    get: string;
    how: string;
    example: string;
    pricing: string;
    fit: string;
  };
  onThisPage: string;
  servicesFor: (place: string) => string;
  whatClientsHire: (place: string) => string;
  viewService: string;
  needElse: string;
  browseAll: string;
  theMarket: string;
  buildingFor: (place: string) => string;
  parentNote: (country: string) => [string, string];
  keyFigures: string;
  whatWeBuild: string;
  businessesAsk: (place: string) => string;
  workingHours: string;
  workingTogether: string;
  workingWith: (place: string) => string;
  payRulesKicker: string;
  rulesKicker: string;
  payTitle: (place: string) => string;
  rulesTitle: string;
  legal: string;
  paymentsExpect: string;
  ourWork: string;
  workDelivered: string;
  seeAllWork: string;
  faqKicker: string;
  questionsIn: (place: string) => string;
  questionsGeneric: string;
  askWhatsApp: string;
  cityPages: string;
  lastReviewed: string;
  ctaText: string;
  /* Time zones */
  sharedHours: string;
  yourMorning: string;
  aDay: (n: number) => string;
  allDay: string;
  workReady: string;
  nineToSix: string;
  tovTitleSame: string;
  tovTitleShared: (h: number) => string;
  tovTitleNone: string;
  tovSame: string;
  tovSentence: (h: number, ahead: boolean, place: string, shared: boolean) => string;
  tovNote: (place: string) => string;
  /* Service pages */
  bestFor: string;
  price: string;
  priceValue: string;
  progress: string;
  progressValue: string;
  soundFamiliar: string;
  rightPlace: string;
  whatYouGet: string;
  everything: string;
  deliveredTogether: string;
  howItWorks: string;
  stepsTitle: (n: number) => string;
  goodToKnow: string;
  exampleProject: string;
  readProject: string;
  moreLikeThis: string;
  projectsLikeThis: string;
  pricing: string;
  pricingTitle: string;
  shapesQuote: string;
  isItRight: string;
  honestAnswer: string;
  goodFit: string;
  notFit: string;
  relatedServices: string;
  projectLabel: Record<string, string>;
  /* Landing */
  marketsTitle: string;
  translatedNote: string;
};

const EN: UI = {
  home: "Home",
  locations: "Locations",
  services: "Services",
  pakistan: "Pakistan",
  getQuote: "Get a fixed quote",
  whatsapp: "WhatsApp us",
  trust: ["Reply within one working day", "Fixed quote before work starts", "Weekly preview links"],
  homeBase: "Our home base: Pakistan",
  teamHere: "Where our team works",
  kmAway: (km) => `${km} km away`,
  nav: {
    services: "Services",
    market: "The market",
    needs: "What we build",
    together: "Working together",
    payRules: "Payments and rules",
    rules: "Rules",
    work: "Our work",
    faq: "FAQ",
    get: "What you get",
    how: "How it works",
    example: "Example",
    pricing: "Pricing",
    fit: "Is it right for you",
  },
  onThisPage: "On this page",
  servicesFor: (p) => `Services for ${p}`,
  whatClientsHire: (p) => `What clients in ${p} hire us for`,
  viewService: "View service",
  needElse: "Need something else? We cover web, mobile, ecommerce, AI, design and growth.",
  browseAll: "Browse all services",
  theMarket: "The market",
  buildingFor: (p) => `What building for ${p} really means`,
  parentNote: (c) => ["Payments, data rules and working across time zones are covered on our", `${c} page`],
  keyFigures: "Key figures",
  whatWeBuild: "What we build",
  businessesAsk: (p) => `What businesses in ${p} ask us for`,
  workingHours: "Working hours",
  workingTogether: "Working together",
  workingWith: (p) => `Working with us from ${p}`,
  payRulesKicker: "Payments and rules",
  rulesKicker: "Rules",
  payTitle: (p) => `Built for how ${p} pays, and what the law expects`,
  rulesTitle: "Rules we build around",
  legal: "General information, not legal advice. Your lawyer has the final word on compliance.",
  paymentsExpect: "Payments customers expect",
  ourWork: "Our work",
  workDelivered: "Work we have delivered",
  seeAllWork: "See all work",
  faqKicker: "FAQ",
  questionsIn: (p) => `Questions clients in ${p} ask`,
  questionsGeneric: "Questions clients ask",
  askWhatsApp: "Something else on your mind? Ask us on WhatsApp.",
  cityPages: "City pages",
  lastReviewed: "Last reviewed",
  ctaText: "Tell us what you need. After a 30-minute call, you get a fixed quote for the whole project.",
  sharedHours: "Shared hours",
  yourMorning: "Your morning",
  aDay: (n) => `${n} a day`,
  allDay: "All day",
  workReady: "Work ready",
  nineToSix: "9:00 to 18:00",
  tovTitleSame: "The same working day, every day",
  tovTitleShared: (h) => `${h} hour${h === 1 ? "" : "s"} of shared working time, every weekday`,
  tovTitleNone: "Work moves forward while you sleep",
  tovSame: "We work in your time zone, so calls and quick questions fit your normal day.",
  tovSentence: (h, ahead, p, shared) =>
    `Pakistan is ${h} hour${h === 1 ? "" : "s"} ${ahead ? "ahead of" : "behind"} ${p} today. ${
      shared ? "Calls and reviews fit inside the hours we share." : "We agree a short daily overlap for calls and hand over at the end of each day."
    }`,
  tovNote: (p) => `9:00 to 18:00 in each country, shown in ${p} time.`,
  bestFor: "Best for",
  price: "Price",
  priceValue: "Fixed quote after one call",
  progress: "Progress",
  progressValue: "A preview link every week",
  soundFamiliar: "Sound familiar?",
  rightPlace: "You are in the right place if",
  whatYouGet: "What you get",
  everything: "Everything included",
  deliveredTogether: "Delivered together and tested before launch.",
  howItWorks: "How it works",
  stepsTitle: (n) => `${n} steps, one fixed price`,
  goodToKnow: "Good to know",
  exampleProject: "Example project",
  readProject: "Read the project",
  moreLikeThis: "More projects like this",
  projectsLikeThis: "Projects like this",
  pricing: "Pricing",
  pricingTitle: "A fixed quote, so you know the full cost up front",
  shapesQuote: "What shapes the quote",
  isItRight: "Is it right for you",
  honestAnswer: "An honest answer before you spend anything",
  goodFit: "A good fit",
  notFit: "Probably not the right fit",
  relatedServices: "Related services",
  projectLabel: {},
  marketsTitle: "Markets we serve",
  translatedNote: "",
};

const AR: UI = {
  home: "الرئيسية",
  locations: "المواقع",
  services: "الخدمات",
  pakistan: "باكستان",
  getQuote: "احصل على عرض سعر ثابت",
  whatsapp: "راسلنا على واتساب",
  trust: ["نرد خلال يوم عمل واحد", "عرض سعر ثابت قبل بدء العمل", "رابط معاينة كل أسبوع"],
  homeBase: "مقرّنا: باكستان",
  teamHere: "حيث يعمل فريقنا",
  kmAway: (km) => `على بعد ${km} كم`,
  nav: {
    services: "الخدمات",
    market: "السوق",
    needs: "ماذا نبني",
    together: "كيف نعمل معاً",
    payRules: "الدفع والأنظمة",
    rules: "الأنظمة",
    work: "أعمالنا",
    faq: "الأسئلة الشائعة",
    get: "ماذا تحصل",
    how: "طريقة العمل",
    example: "مثال",
    pricing: "التسعير",
    fit: "هل تناسبك؟",
  },
  onThisPage: "في هذه الصفحة",
  servicesFor: (p) => `خدماتنا في ${p}`,
  whatClientsHire: (p) => `ما يطلبه منا العملاء في ${p}`,
  viewService: "تفاصيل الخدمة",
  needElse: "تحتاج شيئاً آخر؟ نغطي المواقع والتطبيقات والتجارة الإلكترونية والذكاء الاصطناعي والتصميم والنمو.",
  browseAll: "كل الخدمات",
  theMarket: "السوق",
  buildingFor: (p) => `ماذا يعني البناء لسوق ${p}`,
  parentNote: (c) => ["الدفع وأنظمة البيانات والعمل عبر المناطق الزمنية مشروحة في", `صفحة ${c}`],
  keyFigures: "أرقام رئيسية",
  whatWeBuild: "ماذا نبني",
  businessesAsk: (p) => `ما تطلبه منا الشركات في ${p}`,
  workingHours: "ساعات العمل",
  workingTogether: "كيف نعمل معاً",
  workingWith: (p) => `العمل معنا من ${p}`,
  payRulesKicker: "الدفع والأنظمة",
  rulesKicker: "الأنظمة",
  payTitle: (p) => `مصمّم لطريقة الدفع في ${p} ولما يتطلبه القانون`,
  rulesTitle: "الأنظمة التي نلتزم بها",
  legal: "معلومات عامة وليست استشارة قانونية. القرار النهائي في الامتثال لمستشارك القانوني.",
  paymentsExpect: "طرق الدفع التي يتوقعها العملاء",
  ourWork: "أعمالنا",
  workDelivered: "أعمال قمنا بتنفيذها",
  seeAllWork: "كل الأعمال",
  faqKicker: "الأسئلة الشائعة",
  questionsIn: (p) => `أسئلة يطرحها العملاء في ${p}`,
  questionsGeneric: "أسئلة يطرحها العملاء",
  askWhatsApp: "لديك سؤال آخر؟ اسألنا على واتساب.",
  cityPages: "صفحات المدن",
  lastReviewed: "آخر مراجعة",
  ctaText: "أخبرنا بما تحتاجه. بعد مكالمة مدتها 30 دقيقة تحصل على عرض سعر ثابت للمشروع كاملاً.",
  sharedHours: "ساعات مشتركة",
  yourMorning: "صباحك",
  aDay: (n) => `${n} ساعات يومياً`,
  allDay: "طوال اليوم",
  workReady: "العمل جاهز",
  nineToSix: "9:00 إلى 18:00",
  tovTitleSame: "يوم العمل نفسه، كل يوم",
  tovTitleShared: (h) => `${h} ساعات عمل مشتركة كل يوم عمل`,
  tovTitleNone: "العمل يتقدم وأنت نائم",
  tovSame: "نعمل في منطقتك الزمنية، فتناسب المكالمات والأسئلة السريعة يومك المعتاد.",
  tovSentence: (h, ahead, p, shared) =>
    `باكستان ${ahead ? "تسبق" : "تتأخر عن"} ${p} بـ${h === 1 ? "ساعة واحدة" : h === 2 ? "ساعتين" : `${h} ساعات`} اليوم. ${
      shared ? "المكالمات والمراجعات تتم ضمن الساعات المشتركة." : "نتفق على وقت قصير يومياً للمكالمات ونسلّم العمل في نهاية كل يوم."
    }`,
  tovNote: (p) => `من 9:00 إلى 18:00 في كل بلد، بتوقيت ${p}.`,
  bestFor: "مناسبة لـ",
  price: "السعر",
  priceValue: "عرض سعر ثابت بعد مكالمة واحدة",
  progress: "متابعة التقدم",
  progressValue: "رابط معاينة كل أسبوع",
  soundFamiliar: "هل يبدو هذا مألوفاً؟",
  rightPlace: "أنت في المكان الصحيح إذا",
  whatYouGet: "ماذا تحصل",
  everything: "كل ما هو مشمول",
  deliveredTogether: "يُسلَّم معاً ويُختبر قبل الإطلاق.",
  howItWorks: "طريقة العمل",
  stepsTitle: (n) => `${n} خطوات بسعر ثابت واحد`,
  goodToKnow: "معلومة مفيدة",
  exampleProject: "مشروع كمثال",
  readProject: "اقرأ عن المشروع",
  moreLikeThis: "مشاريع أخرى مشابهة",
  projectsLikeThis: "مشاريع مشابهة",
  pricing: "التسعير",
  pricingTitle: "عرض سعر ثابت، لتعرف التكلفة كاملة مسبقاً",
  shapesQuote: "ما الذي يحدد عرض السعر",
  isItRight: "هل تناسبك؟",
  honestAnswer: "إجابة صادقة قبل أن تنفق أي شيء",
  goodFit: "مناسبة إذا",
  notFit: "قد لا تكون مناسبة إذا",
  relatedServices: "خدمات ذات صلة",
  projectLabel: {
    "Delivered by Venlynk": "من تنفيذ Venlynk",
    "Ongoing retainer": "عقد شهري مستمر",
    "Founder's previous role": "من عمل المؤسس السابق",
    "Collaborative engagement": "عمل مشترك",
    "In development": "قيد التطوير",
  },
  marketsTitle: "الأسواق التي نخدمها",
  translatedNote: "",
};

const TR: UI = {
  home: "Ana sayfa",
  locations: "Konumlar",
  services: "Hizmetler",
  pakistan: "Pakistan",
  getQuote: "Sabit fiyat teklifi alın",
  whatsapp: "WhatsApp'tan yazın",
  trust: ["Bir iş günü içinde yanıt", "İşe başlamadan sabit fiyat", "Her hafta önizleme bağlantısı"],
  homeBase: "Merkezimiz: Pakistan",
  teamHere: "Ekibimizin çalıştığı yer",
  kmAway: (km) => `${km} km uzaklıkta`,
  nav: {
    services: "Hizmetler",
    market: "Pazar",
    needs: "Ne inşa ediyoruz",
    together: "Birlikte çalışma",
    payRules: "Ödemeler ve kurallar",
    rules: "Kurallar",
    work: "İşlerimiz",
    faq: "SSS",
    get: "Neler alırsınız",
    how: "Nasıl çalışır",
    example: "Örnek",
    pricing: "Fiyatlandırma",
    fit: "Size uygun mu",
  },
  onThisPage: "Bu sayfada",
  servicesFor: (p) => `${p} için hizmetler`,
  whatClientsHire: (p) => `${p} müşterilerinin bizden istedikleri`,
  viewService: "Hizmeti incele",
  needElse: "Başka bir şeye mi ihtiyacınız var? Web, mobil, e-ticaret, yapay zekâ, tasarım ve büyüme alanlarında çalışıyoruz.",
  browseAll: "Tüm hizmetler",
  theMarket: "Pazar",
  buildingFor: (p) => `${p} pazarı için geliştirmek ne demek`,
  parentNote: (c) => ["Ödemeler, veri kuralları ve saat farkıyla çalışma", `${c} sayfamızda anlatılıyor`],
  keyFigures: "Temel rakamlar",
  whatWeBuild: "Ne inşa ediyoruz",
  businessesAsk: (p) => `${p} işletmelerinin bizden istedikleri`,
  workingHours: "Çalışma saatleri",
  workingTogether: "Birlikte çalışma",
  workingWith: (p) => `${p} üzerinden bizimle çalışmak`,
  payRulesKicker: "Ödemeler ve kurallar",
  rulesKicker: "Kurallar",
  payTitle: (p) => `${p} ödeme alışkanlıklarına ve yasal gerekliliklere göre`,
  rulesTitle: "Uyduğumuz kurallar",
  legal: "Genel bilgidir, hukuki danışmanlık değildir. Uyum konusunda son söz avukatınızındır.",
  paymentsExpect: "Müşterilerin beklediği ödeme yöntemleri",
  ourWork: "İşlerimiz",
  workDelivered: "Teslim ettiğimiz işler",
  seeAllWork: "Tüm işler",
  faqKicker: "SSS",
  questionsIn: (p) => `${p} müşterilerinin sorduğu sorular`,
  questionsGeneric: "Müşterilerin sorduğu sorular",
  askWhatsApp: "Aklınızda başka bir soru mu var? WhatsApp'tan sorun.",
  cityPages: "Şehir sayfaları",
  lastReviewed: "Son inceleme",
  ctaText: "Neye ihtiyacınız olduğunu anlatın. 30 dakikalık bir görüşmenin ardından projenin tamamı için sabit fiyat teklifi alırsınız.",
  sharedHours: "Ortak saatler",
  yourMorning: "Sabahınız",
  aDay: (n) => `Günde ${n} saat`,
  allDay: "Gün boyu",
  workReady: "İş hazır",
  nineToSix: "09:00–18:00",
  tovTitleSame: "Her gün aynı mesai",
  tovTitleShared: (h) => `Her iş günü ${h} saat ortak mesai`,
  tovTitleNone: "Siz uyurken iş ilerler",
  tovSame: "Sizinle aynı saat diliminde çalışıyoruz; görüşmeler ve kısa sorular normal gününüze sığar.",
  tovSentence: (h, ahead, p, shared) =>
    `Pakistan bugün ${p} saatinin ${h} saat ${ahead ? "önünde" : "gerisinde"}. ${
      shared ? "Görüşmeler ve incelemeler ortak saatlere sığar." : "Görüşmeler için her gün kısa bir ortak zaman belirler, günün sonunda işi devrederiz."
    }`,
  tovNote: (p) => `Her iki ülkede 09:00–18:00, ${p} saatine göre gösterilir.`,
  bestFor: "Kimler için",
  price: "Fiyat",
  priceValue: "Tek görüşmeden sonra sabit fiyat",
  progress: "İlerleme",
  progressValue: "Her hafta önizleme bağlantısı",
  soundFamiliar: "Tanıdık geliyor mu?",
  rightPlace: "Doğru yerdesiniz, eğer",
  whatYouGet: "Neler alırsınız",
  everything: "Pakete dahil olanlar",
  deliveredTogether: "Hepsi birlikte teslim edilir ve yayından önce test edilir.",
  howItWorks: "Nasıl çalışır",
  stepsTitle: (n) => `${n} adım, tek sabit fiyat`,
  goodToKnow: "Bilmekte fayda var",
  exampleProject: "Örnek proje",
  readProject: "Projeyi inceleyin",
  moreLikeThis: "Benzer diğer projeler",
  projectsLikeThis: "Benzer projeler",
  pricing: "Fiyatlandırma",
  pricingTitle: "Sabit fiyat teklifi: toplam maliyeti baştan bilirsiniz",
  shapesQuote: "Teklifi belirleyenler",
  isItRight: "Size uygun mu",
  honestAnswer: "Para harcamadan önce dürüst bir cevap",
  goodFit: "Uygun olduğu durumlar",
  notFit: "Muhtemelen uygun olmadığı durumlar",
  relatedServices: "İlgili hizmetler",
  projectLabel: {
    "Delivered by Venlynk": "Venlynk tarafından teslim edildi",
    "Ongoing retainer": "Devam eden aylık iş",
    "Founder's previous role": "Kurucunun önceki görevi",
    "Collaborative engagement": "Ortak çalışma",
    "In development": "Geliştiriliyor",
  },
  marketsTitle: "Hizmet verdiğimiz pazarlar",
  translatedNote: "",
};

export const UI_TEXT: Record<Locale, UI> = { en: EN, ar: AR, tr: TR };
export const ui = (locale: Locale) => UI_TEXT[locale];

/** Date in the locale's own format. */
export function formatDateIn(iso: string, locale: Locale) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString(LOCALE_META[locale].bcp47, {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Prefix an English path with the locale, e.g. /locations/uae -> /ar/locations/uae. */
export const localePath = (locale: Locale, path: string) => (locale === "en" ? path : path === "/" ? `/${locale}` : `/${locale}${path}`);
