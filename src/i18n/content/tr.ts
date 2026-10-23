import type { LocaleContent } from "@/i18n/registry";

/**
 * Turkish copy for readers in Turkey. Brand and platform names stay as they are.
 * Structure (maps, services, projects) comes from the English pages.
 */

export const TR: LocaleContent = {
  categories: {
    websites: "Web siteleri",
    "web-apps": "Web uygulamaları",
    "mobile-apps": "Mobil uygulamalar",
    shopify: "Shopify",
    ecommerce: "E-ticaret",
    "ai-agents": "Yapay zeka asistanları",
    design: "Tasarım",
    growth: "Büyüme ve pazarlama",
  },

  landing: {
    metaTitle: "Venlynk: Türkiye'deki işletmeler için web, uygulama ve e-ticaret",
    metaDescription:
      "Türkiye'deki markalar ve ihracatçılar için web siteleri, mobil uygulamalar, Shopify mağazaları ve yapay zeka asistanları. Her projeye sabit fiyat teklifi.",
    eyebrow: "Dijital ürün stüdyosu",
    h1: "Türkiye'deki işletmeler için web, uygulama ve e-ticaret",
    lead: "Venlynk, Pakistan'dan uzaktan çalışan bir tasarım ve yazılım ekibidir. Türkiye ile aramızda yalnızca iki saat fark var. Taksitli ödemeye uygun mağazalar, ihracat için çok dilli siteler ve telefonda kusursuz çalışan uygulamalar geliştiriyoruz. İşe başlamadan önce sabit bir fiyat üzerinde anlaşıyoruz.",
    servicesTitle: "Türkçe sunduğumuz hizmetler",
    servicesText: "Bu sayfalar Türkçe hazırlandı. Diğer hizmetlerimizi İngilizce olarak inceleyebilirsiniz.",
    marketsTitle: "Hizmet verdiğimiz pazar",
    marketsText: "Türkiye sayfamız; pazarın ihtiyaçlarını, ödeme yöntemlerini ve dikkate aldığımız veri koruma kurallarını anlatıyor.",
    whyTitle: "İşletmeler neden bizimle çalışıyor",
    why: [
      { title: "Sabit fiyat teklifi", body: "Toplam maliyeti iş başlamadan önce bilirsiniz, proje ortasında sürpriz yaşamazsınız." },
      { title: "Her hafta önizleme", body: "Her hafta telefonunuzda deneyebileceğiniz çalışan bir bağlantı alırsınız; ilerlemeyi kendiniz görür, yön verirsiniz." },
      { title: "İhracata hazır", body: "Birden fazla dil, para birimi ve uluslararası kargo ayarlarıyla yurt dışına satış yapan markalara uygun yapı." },
      { title: "Her şey sizin adınıza", body: "Kod, tasarımlar, alan adı ve tüm hesaplar ilk günden itibaren sizindir." },
    ],
    englishNote: "Sitemizin büyük bölümü İngilizce.",
    englishLink: "Siteyi İngilizce inceleyin",
    closing: "Türkiye'deki müşterileriniz için bir şey mi geliştiriyorsunuz?",
  },

  locations: {
    turkey: {
      country: "Türkiye",
      inText: "Türkiye",
      label: "Türkiye",
      metaTitle: "Türkiye'de Web, Mobil Uygulama ve E-ticaret Geliştirme",
      metaDescription:
        "Türkiye'deki işletmeler için web siteleri, uygulamalar, online mağazalar ve yapay zeka asistanları. Taksitli ödeme, troy kart ve KVKK'ya uygun.",
      h1: "Türkiye'deki işletmeler için web, uygulama ve e-ticaret geliştirme",
      lead: "İstanbul, Ankara ve Türkiye'nin her yerindeki işletmeler için; yurt dışına satış yapan ihracatçılar dahil, web siteleri, mobil uygulamalar, online mağazalar ve yapay zeka asistanları tasarlayıp geliştiriyoruz. Türk alışverişçilerin taksitli ödeme alışkanlığına ve Türkiye'nin veri koruma kanununa uygun çalışıyoruz.",
      market: [
        "Türkiye büyük bir online pazar: 77 milyondan fazla kişi internet kullanıyor. Pek çok marka hem yurt içinde hem yurt dışında satış yapıyor; bu yüzden mağazaların çoğu zaman Türkçe ve İngilizce, birden fazla para birimi ve uluslararası kargo desteğine ihtiyacı oluyor.",
        "Ödemeler burada farklı işliyor. Online alışverişte kredi kartı önde, bunun büyük nedeni de taksit: alışverişçilerin özellikle aradığı 3, 6, 9 veya 12 aylık faizsiz taksitler. Türkiye'nin yerli kart şeması troy büyüyor, FAST ile anlık banka transferleri ise en hızlı artan yöntem.",
        "Türkiye'nin veri koruma kanunu KVKK, yurt dışına veri aktarımını AB modeline yaklaştırmak için 2024'te değiştirildi. Müşteri verilerinin nerede saklandığı ve nereye gönderildiği önemli; barındırma ve entegrasyonları bunu göz önünde tutarak planlıyoruz.",
      ],
      stats: [
        { label: "İnternet kullanıcısı", value: "77,5 milyon, nüfusun %88,3'ü" },
        { label: "Sosyal medya kullanıcı kimliği", value: "62,3 milyon" },
        { label: "Ortalama mobil indirme hızı", value: "68 Mbps" },
        { label: "Online ödemelerde kredi kartı payı, 2025", value: "%52" },
      ],
      needs: [
        { title: "Taksitli ödeme sunan mağazalar", body: "Taksit seçeneklerinin ürün sayfalarında ve ödeme adımında açıkça gösterildiği online mağazalar." },
        { title: "İhracat siteleri", body: "Yurt dışına satış yapan Türk üreticiler ve markalar için İngilizce ve diğer dillerde siteler ve mağazalar." },
        { title: "Hizmet uygulamaları", body: "Türk müşteriler için rezervasyon, teslimat ve üyelik uygulamaları." },
        { title: "Yapay zeka asistanları", body: "Türkçe ve İngilizce yanıt veren destek ve satış asistanları." },
      ],
      payments: [
        { name: "Taksitli kredi kartı ödemesi", body: "Türk ödeme kuruluşları üzerinden kurulan ve ödeme öncesinde gösterilen taksit planları." },
        { name: "troy", body: "Türkiye'nin yerli kart şeması, destekleyen ödeme kuruluşları üzerinden online kabul edilir." },
        { name: "Banka transferi ve FAST", body: "Siparişler ve faturalar için anlık banka ödemeleri." },
        { name: "Dijital cüzdanlar", body: "Ödeme kuruluşunuz destekliyorsa BKM Express ve Papara gibi yerli cüzdanlar." },
      ],
      rules: [
        { title: "KVKK (6698 sayılı Kanun)", body: "Türkiye'nin kişisel verilerin korunması kanunu. 12 Mart 2024'te yayımlanan değişiklikler, Kurul onaylı standart sözleşmeler gibi yurt dışına veri aktarımı için yeni yollar getirdi; bu sözleşmelerin beş iş günü içinde Kurul'a bildirilmesi gerekiyor." },
        { title: "Çerez ve ticari ileti izni", body: "Zorunlu olmayan çerezler ve ticari iletiler için izin gerekir. İzin ve tercih araçlarını buna uygun kuruyoruz." },
        { title: "Türkçe ve İngilizce", body: "Özellikle ihracat odaklı işletmeler için iki dili birlikte planlıyoruz." },
      ],
      working: [
        { title: "İki saat fark", body: "Pakistan, Türkiye'den iki saat ileride; çalışma günlerimiz neredeyse tamamen örtüşüyor." },
        { title: "Görüşmeler ve WhatsApp", body: "Planlama ve değerlendirme için görüntülü görüşmeler, kısa sorular için WhatsApp." },
        { title: "Haftalık ilerleme", body: "Her hafta çalışan bir önizleme bağlantısı." },
        { title: "Sabit fiyat teklifi", body: "İş başlamadan önce üzerinde anlaşılan sabit bir teklif." },
      ],
      proofNote: "Başka pazarlarda moda ve parfüm markaları için hayata geçirdiğimiz online mağazalardan bir seçki.",
      proofTitle: "Seçili işler",
      faq: [
        { q: "Türkiye'de ofisiniz var mı?", a: "Hayır. Türkiye'den iki saat ileride olan Pakistan'dan uzaktan çalışıyoruz; görüntülü görüşmeler, WhatsApp ve ortak proje panoları üzerinden ilerliyoruz." },
        { q: "Mağazamıza taksit seçeneği ekleyebilir misiniz?", a: "Evet, platformunuzda taksit planlarını destekleyen Türk ödeme kuruluşları üzerinden." },
        { q: "Türkçe site geliştiriyor musunuz?", a: "Evet. Çok dilli siteler geliştiriyoruz; Türkçe metinler yayına çıkmadan önce anadili Türkçe olan bir editör tarafından gözden geçiriliyor." },
        { q: "Yurt dışına satış yapmamıza yardım edebilir misiniz?", a: "Evet. Her ihracat pazarı için dilleri, para birimlerini ve kargo ayarlarını kuruyoruz." },
        { q: "Nasıl başlarız?", a: "30 dakikalık bir görüşme ayarlayın ya da bize mesaj gönderin. Bir iş günü içinde dönüş yapıyoruz." },
      ],
      closing: "Türkiye'deki müşterileriniz için bir şey mi geliştiriyorsunuz?",
    },
  },

  services: {
    "shopify/shopify-store-setup": {
      metaTitle: "Shopify Mağaza Kurulumu: Online Mağazanızı Açın",
      metaDescription:
        "Temadan ürünlere, ödemeden kargoya Shopify mağazanızı kuruyoruz, siz satışa başlıyorsunuz. Sabit fiyat teklifi, mağaza sizin adınıza.",
      h1: "Shopify mağaza kurulumu",
      lead: "Shopify mağazanızı boş bir hesaptan gerçek sipariş alır hale gelene kadar kuruyoruz. Markanıza benzeyen, telefonda iyi çalışan ve teslimden sonra kendiniz yönetebileceğiniz bir mağazanız oluyor.",
      forWho: "Instagram veya WhatsApp siparişlerinden geçiş yapan markalar, eski bir platformdan ayrılan mağazalar ve ilk online mağazasını açan herkes.",
      problems: [
        "Siparişleri DM'den alıyorsunuz ve kimin ödeme yaptığını takip edemiyorsunuz.",
        "Shopify'ı kendiniz kurmaya başladınız; tema, ödeme ya da kargoda takıldınız.",
        "Mağazanız çalışıyor ama diğer şablonlardan farksız görünüyor ve ziyaretçiler satın almadan çıkıyor.",
        "Binlerce Shopify uygulamasından hangilerine gerçekten ihtiyacınız olduğunu bilmiyorsunuz.",
      ],
      deliverables: [
        { title: "Size benzeyen bir mağaza", body: "Logonuz, renkleriniz ve yazı tiplerinizle ayarlanmış bir tema; üzerinde sadece adınız yazan bir demo mağaza değil." },
        { title: "Satışa hazır ürünler", body: "Fotoğrafları, fiyatları, bedenleri ve varyantlarıyla eklenmiş, alışverişçiye mantıklı gelen koleksiyonlara ayrılmış ürünler." },
        { title: "Sattığınız yerde çalışan ödeme", body: "Shopify Payments'ın olduğu yerde Shopify Payments, olmadığı yerde yerel bir ödeme kuruluşu; Türkiye'de taksit seçenekleriyle birlikte." },
        { title: "Kargo ve vergiler", body: "Ülke veya şehre göre kargo ücretleri, vergi ayarları ve markanızın diliyle yazılmış sipariş e-postaları." },
        { title: "Alıcıların baktığı sayfalar", body: "Hakkımızda, iletişim, sık sorulan sorular, iade, gizlilik ve koşullar; yeni müşteriler ilk siparişi verirken güvende hissetsin diye." },
        { title: "İşe yarayan bir teslim", body: "Ürün eklemeyi, kampanya yapmayı ve siparişleri yönetmeyi kendiniz yapabilmeniz için kısa bir video anlatım." },
      ],
      steps: [
        { title: "30 dakikalık görüşme", body: "Ne sattığınıza, kimin satın aldığına ve bugün siparişleri nasıl aldığınıza bakıyor, ardından sabit bir teklif gönderiyoruz." },
        { title: "Tasarım ve kurulum", body: "Temayı, koleksiyonları ve temel sayfaları kuruyoruz. Sadece ekran görüntüsü değil, çalışan bir önizleme bağlantısı görüyorsunuz." },
        { title: "Ürünler ve ödeme", body: "Ürünlerinizi yüklüyor, ödeme ve kargoyu bağlıyor, baştan sona test siparişleri veriyoruz." },
        { title: "Yayına alma", body: "Mağazayı yayına alıyor, her şeyi gerçek telefonlarda kontrol ediyor ve ilk siparişler gelirken yanınızda oluyoruz." },
      ],
      timing: "Çoğu mağaza birkaç hafta içinde yayına hazır olur. En büyük etken ürün fotoğraflarının, fiyatların ve açıklamaların ne kadar hızlı hazırlandığıdır; bu yüzden ilk gün size basit bir kontrol listesi veriyoruz.",
      price: {
        headline: "Her mağaza ilk görüşmeden sonra sabit bir teklif alır; iş başlamadan toplam maliyeti bilirsiniz.",
        factors: [
          "Kaç ürün ve varyantınız olduğu",
          "İyi seçilmiş bir temanın yeterli olup olmadığı ya da özel tasarım gerekip gerekmediği",
          "Beden bulucu, paketler veya toptan fiyat gibi ekstralar",
          "Ürünlerin ve müşterilerin başka bir platformdan taşınması",
        ],
        note: "Shopify'ın aylık planı doğrudan Shopify'a ödenir ve hesap sizin adınıza kalır.",
      },
      facts: {
        title: "Müşterilerinizin ödediği şekilde ödeme almak",
        intro: "Shopify, kartlar ve cüzdanların yanında manuel ödeme yöntemlerini de destekler. Bu, havale ve kapıda ödemenin hâlâ tercih edildiği pazarlarda önemlidir.",
        items: [
          { label: "Kapıda ödeme", value: "Manuel ödeme yöntemi olarak desteklenir" },
          { label: "Banka havalesi ve EFT", value: "Manuel ödeme yöntemi olarak desteklenir" },
          { label: "Kartlar ve cüzdanlar", value: "Ülkenize göre Shopify Payments veya üçüncü taraf bir ödeme kuruluşu üzerinden" },
        ],
      },
      proofStory:
        "StyleFits ferace, şal ve takım satıyor; doğru beden ve boyu seçmek satın alma kararını belirliyor. Mağazayı Shopify üzerinde bir beden ve boy bulucuyla kurduk, böylece alışverişçiler telefonlarından doğru bedeni kendileri seçebiliyor.",
      notFit: [
        "Sadece Instagram üzerinden birkaç ürün satıyorsanız, şimdilik WhatsApp ile sipariş alınan basit bir ürün sayfası yeterli olabilir.",
        "İşiniz rezervasyon, karmaşık teklifler veya alışılmadık ödeme kuralları gerektiriyorsa, özel bir web uygulaması veya WooCommerce daha uygun olabilir. Bunu ilk görüşmede söyleriz.",
      ],
      faq: [
        { q: "Mağaza benim mi olacak?", a: "Evet. Shopify hesabı ilk günden itibaren sizin adınıza. Biz ortak çalışan olarak hesaba erişiyor, hazır olduğunuzda çekiliyoruz." },
        { q: "Yayına çıktıktan sonra mağazayı kendim güncelleyebilir miyim?", a: "Evet. Ürün eklemek, fiyat değiştirmek ve kampanya yapmak geliştirici gerektirmez; video anlatım size nasıl yapılacağını gösterir." },
        { q: "Ürünlerimi Instagram, WooCommerce veya başka bir platformdan taşıyabilir misiniz?", a: "Evet. Ürünleri ve fotoğrafları, platformun izin verdiği ölçüde de müşterileri ve geçmiş siparişleri taşıyoruz." },
        { q: "Taksitli ödeme sunabilir miyim?", a: "Evet, Shopify ile uyumlu ve taksit destekleyen Türk ödeme kuruluşları üzerinden." },
        { q: "Sizin benden neye ihtiyacınız var?", a: "Logonuz, ürün fotoğrafları, fiyatlar ve bedenler, kargo ücretleri ve iade politikanız. Fotoğraflar hazır değilse neyin işe yarayacağını söyleriz." },
        { q: "Yayından sonra ne oluyor?", a: "Mağazayı kendiniz yönetebilir ya da güncellemeler, yeni özellikler ve hız kontrolleri için aylık bir planla bizimle devam edebilirsiniz." },
      ],
      imageAlt: "Dizüstü bilgisayarda kartla online ödeme",
      closing: "Shopify'da satışa başlamaya hazır mısınız?",
    },

    "ecommerce/ecommerce-development": {
      metaTitle: "E-ticaret Sitesi Geliştirme",
      metaDescription:
        "Shopify, WooCommerce veya özel yazılımla e-ticaret siteleri; pazarınızın ihtiyaç duyduğu ödeme, kargo ve stok kurulumuyla.",
      h1: "E-ticaret sitesi geliştirme",
      lead: "Online mağazaları işinize uyan platformda kuruyoruz: Shopify, WooCommerce ya da özel yazılım. Pazarınızın ihtiyaç duyduğu ödeme, kargo ve stok yönetimini ayarlıyoruz. Hangi platformun size uyduğunu, siz hiçbir harcama yapmadan önce söylüyoruz.",
      forWho: "Online satışa başlayan ya da artık satış şekline uymayan bir mağazayı geride bırakan işletmeler.",
      problems: [
        "Shopify mı, WooCommerce mı yoksa özel bir mağaza mı size uygun, emin değilsiniz.",
        "Müşterileriniz mağazanızın sunamadığı taksit veya yerel ödeme yöntemleri bekliyor.",
        "Her satıştan sonra siparişler, stok ve kargo elle yönetiliyor.",
        "Başka işletmelere satış yapıyorsunuz ve fiyat listelerine, minimum sipariş tutarına ve faturalara ihtiyacınız var.",
      ],
      deliverables: [
        { title: "Platform önerisi", body: "Ürünleriniz, pazarınız ve ekibiniz için seçeneklerin sade bir karşılaştırması ve bizim önerimiz." },
        { title: "Mağaza tasarımı", body: "Ana sayfa, koleksiyon, ürün ve ödeme sayfaları; önce mobil alışverişçiler için tasarlanır." },
        { title: "Pazarınıza uygun ödeme", body: "Müşterilerinizin beklediği yerde kart, taksit, cüzdan, havale ve kapıda ödeme." },
        { title: "Kargo ve stok", body: "Kargo ücretleri, kargo firması entegrasyonları ve tüm kanallarda doğru kalan stok." },
        { title: "Gerekirse B2B özellikleri", body: "Müşteriye özel fiyatlar, minimum sipariş, teklif ve fatura." },
        { title: "Takip ve raporlar", body: "Satışlar, dönüşüm ve ürün performansı ilk günden itibaren takip edilir." },
      ],
      steps: [
        { title: "Platformu seçin", body: "Seçenekleri sizinle karşılaştırır, doğru olanda anlaşırız." },
        { title: "Tasarım", body: "Temel sayfalar tasarlanır ve telefonlarda test edilir." },
        { title: "Geliştirme ve entegrasyon", body: "Mağaza kurulur, ödeme ve kargo firmaları bağlanır, test siparişleri verilir." },
        { title: "Yayın ve iyileştirme", body: "Yayına alınır, ardından alışverişçilerin ayrıldığı noktalara göre iyileştirilir." },
      ],
      timing: "Bir Shopify veya WooCommerce mağazası genellikle birkaç hafta sürer. Özel e-ticaret projeleri aşamalar halinde planlanır.",
      price: {
        headline: "Her mağaza, platform ve özellikler netleştiğinde sabit bir teklif alır.",
        factors: ["Platform seçimi ve tasarımın ne kadar özel olduğu", "Ürün ve varyant sayısı", "Ödeme, kargo ve ERP entegrasyonları", "B2B veya abonelik özellikleri"],
      },
      proofStory:
        "The Jumbo Jump, müşterilerinin saat seçerek rezervasyon yapmasını ve online ödemesini istiyordu. WordPress sitelerini saat bazlı rezervasyon ve online ödemeyle kurduk; site bir hafta içinde yayına çıktı.",
      notFit: ["Küçük bir kitleye birkaç ürün satıyorsanız, başlangıç için bir pazar yeri veya sosyal medya mağazası yeterli olabilir."],
      faq: [
        { q: "Shopify mı, WooCommerce mı?", a: "Shopify, kendi kendine işleyen bir mağaza isteyen çoğu markaya uyar. WooCommerce ise zaten WordPress kullanan ya da alışılmadık ürün kuralları olan işletmelere uyar. İlk görüşmeden sonra öneride bulunuruz." },
        { q: "Taksit ve kapıda ödeme ekleyebilir misiniz?", a: "Evet. Taksit, destekleyen Türk ödeme kuruluşları üzerinden; kapıda ödeme ise Shopify ve WooCommerce'te kart ödemelerinin yanında sunulabilir." },
        { q: "Mağaza stok sistemimize bağlanabilir mi?", a: "Evet. Mağazaları Odoo ve diğer sistemlere bağlıyoruz, böylece stok ve siparişler otomatik senkronize oluyor." },
        { q: "Sıfırdan özel e-ticaret geliştiriyor musunuz?", a: "Platformlar ihtiyacınızı karşılayamadığında evet; genellikle Next.js ve headless bir e-ticaret altyapısıyla." },
      ],
      imageAlt: "Dizüstü bilgisayarda kartla online ödeme",
      closing: "Online satışı doğru şekilde yapmaya hazır mısınız?",
    },

    "websites/custom-website-development": {
      metaTitle: "Büyüyen İşletmeler İçin Özel Web Sitesi Geliştirme",
      metaDescription:
        "Next.js veya WordPress ile hızlı açılan, ne yaptığınızı anlatan ve talep getiren özel web siteleri. Ekibiniz her sayfayı düzenleyebilir.",
      h1: "Özel web sitesi geliştirme",
      lead: "Hızlı açılan, ne yaptığınızı birkaç saniyede anlatan ve ziyaretçilere size kolayca ulaşma yolu sunan özel web siteleri tasarlayıp geliştiriyoruz. Teslimden sonra ekibiniz, bir geliştiriciyi aramadan istediği sayfayı değiştirebilir.",
      forWho: "Web sitesi eski görünen, yavaş açılan, düzenlemesi zor olan ya da basitçe talep getirmeyen işletmeler.",
      problems: [
        "Siteyi ziyaret edenler var ama neredeyse kimse iletişime geçmiyor.",
        "Tek bir satırı değiştirmek, bir geliştiriciye e-posta atıp bir hafta beklemek demek.",
        "Site telefonlarda yavaş, ziyaretçilerinizin çoğu da telefondan geliyor.",
        "Site yıllar önce yapıldı ve işletmenin bugün yaptığı işi artık yansıtmıyor.",
      ],
      deliverables: [
        { title: "Net bir sayfa planı", body: "Hangi sayfalara ihtiyacınız olduğu, her birinin ne anlatması ve hangi adıma yönlendirmesi gerektiği; tasarımdan önce üzerinde anlaşılır." },
        { title: "Markanıza uyan tasarım", body: "Hazır bir şablon yerine renkleriniz, yazı tipleriniz ve fotoğraflarınız etrafında kurgulanmış, tıklanabilir masaüstü ve mobil tasarımlar." },
        { title: "Hızlı ve sağlam altyapı", body: "Next.js veya WordPress ile geliştirilir, gerçek telefonlarda test edilir ve yayından önce Google'ın hız ölçütlerine göre kontrol edilir." },
        { title: "Ekibinizin düzenleyebileceği sayfalar", body: "Metin, görsel, blog yazısı ve yeni sayfalar için basit bir editör ve kısa bir video anlatım." },
        { title: "Arama motoru temelleri", body: "Sayfa başlıkları, açıklamalar, temiz adresler, yapılandırılmış veri, site haritası ve eski sayfalarınızdan yönlendirmeler." },
        { title: "Talep takibi", body: "Formlar, WhatsApp ve arama düğmeleri Google Analytics'te takip edilir; hangi sayfaların müşteri getirdiğini görürsünüz." },
      ],
      steps: [
        { title: "Görüşme ve plan", body: "Müşterileriniz ve hedefleriniz üzerine 30 dakikalık bir görüşme, ardından sayfa planı ve sabit teklif." },
        { title: "İçerik ve tasarım", body: "İçeriği sizinle şekillendirir, temel sayfaları tasarlarız. Statik görseller değil, tıklanabilir bir önizleme incelersiniz." },
        { title: "Haftalık önizlemelerle geliştirme", body: "Her hafta kendi telefonunuzda ve bilgisayarınızda kontrol edebileceğiniz çalışan bir bağlantı alır, süreç boyunca yön verirsiniz." },
        { title: "Yayın ve teslim", body: "Alan adını taşır, hızı, formları ve takibi kontrol eder, ekibinizi eğitir ve yayından sonra da yanınızda oluruz." },
      ],
      timing: "Bir kurumsal web sitesi, ilk görüşmeden yayına kadar genellikle 4 ila 8 hafta sürer. En büyük etken metinlerin ve fotoğrafların ne kadar hızlı hazırlandığıdır; bu yüzden içeriğe erken başlarız.",
      price: {
        headline: "Her web sitesi ilk görüşmeden sonra sabit bir teklif alır; iş başlamadan toplam maliyeti bilirsiniz.",
        factors: [
          "Sitenin kaç sayfa ve sayfa türüne ihtiyacı olduğu",
          "Rezervasyon, ödeme veya müşteri girişi gibi özel özellikler gerekip gerekmediği",
          "İçeriği bizim mi yazacağımız yoksa sizinkini mi düzenleyeceğimiz",
          "Mevcut bir siteden içerik ve arama trafiğinin taşınması",
        ],
      },
      facts: {
        title: "Google için \"hızlı\" ne demek",
        intro: "Google, gerçek ziyaretçilerin deneyimini üç Önemli Web Verisi metriğiyle ölçer. Ziyaretlerin çoğunun gerçekleştiği mobilde üçünü de geçecek şekilde geliştiriyoruz.",
        items: [
          { label: "LCP (ana içeriğin görünmesi)", value: "2,5 saniye veya daha az" },
          { label: "INP (sayfanın dokunuşa tepkisi)", value: "200 milisaniye veya daha az" },
          { label: "CLS (hiçbir şeyin yerinden kaymaması)", value: "0,1 veya daha az" },
        ],
      },
      proofStory:
        "DXB Off Plan, Dubai'deki projelerden satılık konutlara yatırım yapanlar için bir emlak portalı. Siteyi WordPress üzerinde özel bir tasarımla geliştirdik: sanal turlu ilanlar, hızlı arama ve her talebin satış ekibine ulaşması için arkada bir CRM bağlantısı.",
      notFit: [
        "Bu ay bir fikri test etmek için tek bir sayfaya ihtiyacınız varsa, açılış sayfası tam bir siteden daha hızlı ve daha uygun maliyetlidir.",
        "İhtiyacınızın büyük kısmı bir online mağazaysa, Shopify veya e-ticaret hizmetlerimizle başlayın.",
      ],
      faq: [
        { q: "WordPress mi, Next.js mi?", a: "WordPress, ekibinizin her hafta düzenlediği içerik ağırlıklı sitelere uyar. Next.js ise en yüksek hız, özel özellikler veya bir uygulamayla bağlantı gereken sitelere uyar. İlk görüşmeden sonra birini önerir, farkı sade bir dille anlatırız." },
        { q: "Baştan başlamak yerine mevcut sitemizi yeniden tasarlayabilir misiniz?", a: "Evet. Yapı hâlâ işe yarıyorsa mevcut sitenizi yeniden tasarlar ve hızlandırırız. Düzenlemesi zor ya da temelden yavaşsa, yeniden geliştirmek bir yıl içinde genellikle daha az maliyetli olur." },
        { q: "Yeni site yayına çıktığında Google sıralamalarımızı kaybeder miyiz?", a: "Geçiş planlıysa hayır. Her eski sayfayı yeni adresine eşler, yayından önce kalıcı yönlendirmeleri kurarız." },
        { q: "İçeriği siz mi yazıyorsunuz?", a: "Notlarınızdan ve kısa bir görüşmeden yola çıkarak yazabilir ya da ekibinizin yazdıklarını net ve kolay okunur olacak şekilde düzenleyebiliriz." },
        { q: "Web sitesi kimin olacak?", a: "Sizin. Kod, tasarımlar, alan adı ve tüm hesaplar sizin adınıza." },
        { q: "Yayından sonra ne oluyor?", a: "Siteyi kendiniz yönetebilir ya da güncellemeler, yeni sayfalar, hız kontrolleri ve SEO için aylık bir planla bizimle devam edebilirsiniz." },
      ],
      imageAlt: "Dizüstü bilgisayar ekranında kod",
      closing: "Talep getiren bir web sitesine mi ihtiyacınız var?",
    },

    "mobile-apps/ios-android-app-development": {
      metaTitle: "Flutter ile iOS ve Android Uygulama Geliştirme",
      metaDescription:
        "iPhone ve Android için tek uygulama; Flutter veya React Native ile, haftalık test sürümleriyle. App Store ve Google Play yayınını biz üstleniyoruz.",
      h1: "iOS ve Android uygulama geliştirme",
      lead: "Flutter veya React Native kullanarak hem iPhone'da hem Android'de çalışan tek bir uygulama geliştiriyor, App Store ve Google Play yayınını da biz üstleniyoruz. Her hafta yeni bir test sürümünü kendi telefonunuzda deniyorsunuz.",
      forWho: "Bir uygulama fikri olan girişimciler ve müşterileri telefondan rezervasyon yapmak, sipariş vermek, öğrenmek veya ödeme yapmak isteyen işletmeler.",
      problems: [
        "Bir uygulama fikriniz var ama onu geliştirecek teknik bir ekibiniz yok.",
        "iPhone ve Android için iki ayrı uygulama tekliflerinin toplamı bütçenizi aşıyor.",
        "Önceki geliştirici ayrıldı ve uygulama takıldı, hatalı ya da mağaza tarafından reddedildi.",
        "Müşteriler sürekli bir uygulamanız olup olmadığını soruyor.",
      ],
      deliverables: [
        { title: "Yayına değer bir ilk sürüm", body: "Ana sorunu iyi çözen en küçük özellik setinde anlaşırız; böylece daha erken yayına çıkar, gerçek kullanıcılardan öğrenirsiniz." },
        { title: "Uygulama tasarımı", body: "Başparmak kullanımı, küçük ekranlar ve zayıf bağlantılar için tasarlanmış ekranlar; önce tıklanabilir bir prototip olarak test edilir." },
        { title: "Tek kod, iki platform", body: "iOS ve Android'de çalışan ve her ikisinde de eş kalan tek bir Flutter veya React Native uygulaması." },
        { title: "Arka uç ve yönetim paneli", body: "Hesaplar, ödemeler, bildirimler ve ekibinizin kullanıcıları ve içeriği yönetebileceği bir yönetim paneli." },
        { title: "Mağazalara gönderim", body: "App Store ve Google Play sayfaları, ekran görüntüleri, inceleme notları ve Apple ya da Google'ın istediği değişiklikler." },
        { title: "Yayından sonra güncellemeler", body: "Düzenli bir sürüm ritmiyle çökme takibi, düzeltmeler ve yeni özellikler." },
      ],
      steps: [
        { title: "İlk sürümü şekillendirin", body: "Ana kullanıcı yolculuklarını çıkarır, ilk sürümün ne yapması gerektiğinde ve neyin bekleyebileceğinde anlaşırız." },
        { title: "Tasarım ve prototip", body: "Prototipi telefonunuzda gezer, birkaç gerçek kullanıcıyla test ederiz." },
        { title: "Haftalık sürümlerle geliştirme", body: "Her hafta yeni bir test sürümü yükler, ilerlemeyi kendiniz görürsünüz." },
        { title: "Yayın ve büyüme", body: "İki mağazaya da göndeririz, ilk haftaları yakından izler ve sonraki sürümü kullanıcıların davranışına göre planlarız." },
      ],
      timing: "İlk sürüm genellikle 8 ila 16 hafta sürer. Kullanıcı türlerinin, ekranların ve dış sistemlerin (ödeme, harita, rezervasyon araçları) sayısı en büyük farkı yaratır.",
      price: {
        headline: "Kısa bir planlama görüşmesinden sonra ilk sürüm için sabit bir fiyat veriyoruz; sonraki özellikler ayrıca fiyatlandırılır.",
        factors: [
          "Uygulamanın kaç ekranı ve kullanıcı türü olduğu",
          "Ödeme, harita, sohbet, video veya diğer entegrasyonlar",
          "Yönetim paneline veya eşlik eden bir web sitesine ihtiyaç olup olmadığı",
          "Yayından sonra süren destek ve sürümler",
        ],
      },
      proofStory:
        "Tilawat; kârileri dinlemek, çalma listeleri kaydetmek ve kendi tilavetinizi kaydetmek için bir Kuran ses uygulaması. Flutter ile tasarlayıp geliştirdik; tek bir kod tabanı hem iPhone'a hem Android'e hizmet veriyor.",
      notFit: [
        "İnsanlar uygulamayı yalnızca ara sıra kullanacaksa, telefonda iyi çalışan bir web uygulaması onlara daha iyi ve daha düşük maliyetle hizmet edebilir.",
        "Fikir henüz test edilmediyse, tam geliştirmeye ödeme yapmadan önce iki haftalık bir keşif çalışması ve prototiple başlayın.",
      ],
      faq: [
        { q: "Flutter mı, React Native mi?", a: "İkisi de kendini kanıtlamış durumda. React Native, zaten JavaScript veya React kullanan ekiplere uyar. Flutter ise her cihazda çok tutarlı ekranlar verir. Özelliklerinize ve uygulamanın bakımını kimin yapacağına göre birini öneririz." },
        { q: "Tek kod tabanı, yerel bir uygulamadan daha mı kötü hissettirir?", a: "Çoğu iş uygulamasında hayır; kullanıcılar farkı anlamaz. Yoğun 3D, gelişmiş kamera kullanımı veya derin donanım özellikleri için bu bölümlerde yerel kod önerebiliriz." },
        { q: "Uygulamayı mağazalara kim gönderiyor?", a: "Biz, sizin geliştirici hesaplarınız altında; böylece mağaza sayfaları sizin olur. İnceleme sırasında Apple veya Google'ın istediği değişiklikleri de biz yaparız." },
        { q: "Başka bir geliştiricinin başladığı uygulamayı devralabilir misiniz?", a: "Evet. Önce kodu inceler, devam etmenin mi yoksa bazı bölümleri yeniden yazmanın mı doğru olduğunu açıkça söyleriz." },
        { q: "Uygulama web sitemizle birlikte çalışabilir mi?", a: "Evet. Uygulama ve web sitesi aynı arka ucu paylaşabilir; böylece hesaplar, siparişler ve içerik senkron kalır." },
        { q: "Kod kimin olacak?", a: "Sizin; ilk günden itibaren, sizin hesabınızdaki bir depoda." },
      ],
      imageAlt: "Telefonda uygulama kullanan eller",
      closing: "iPhone ve Android için bir uygulama fikriniz mi var?",
    },

    "design/ui-ux-design": {
      metaTitle: "Uygulama, Web Uygulaması ve Web Siteleri İçin UI/UX Tasarım",
      metaDescription:
        "İnsanların ilk seferde anladığı UI/UX tasarım: araştırma, kullanıcı akışları, gerçek kullanıcılarla test edilen tıklanabilir prototip ve tasarım sistemi.",
      h1: "UI/UX tasarım",
      lead: "İnsanların ilk kullanımda anladığı uygulamalar, web uygulamaları ve web siteleri tasarlıyoruz. Herhangi bir şey geliştirilmeden önce gerçek kullanıcılarla test edilmiş tıklanabilir bir prototip ve geliştiricilerinizin kullanabileceği bir tasarım sistemi alıyorsunuz.",
      forWho: "Yeni bir ürün geliştiren ekipler ve kullanıcıların takıldığı, vazgeçtiği ya da sürekli destekle iletişime geçtiği ürünler.",
      problems: [
        "İnsanlar kayıt oluyor ve bir daha geri gelmiyor.",
        "Destek ekibi aynı \"bunu nasıl yaparım\" sorularını yanıtlayıp duruyor.",
        "Her yeni özellik bir öncekinden biraz farklı görünüyor.",
        "Geliştiricileriniz bir türlü bitmeyen tasarımları bekliyor.",
      ],
      deliverables: [
        { title: "Araştırma", body: "İnsanların gerçekte nerede takıldığını bulmak için kısa görüşmeler, analiz verileri ve ürünün baştan sona incelenmesi." },
        { title: "Kullanıcı akışları", body: "En önemli birkaç yolculuk, görsellerden önce adım adım çıkarılır." },
        { title: "Tıklanabilir prototip", body: "Telefonunuzda deneyebileceğiniz ve gerçek insanlarla test edebileceğiniz bir prototip; değişiklikler koddan önce yapılır." },
        { title: "Son ekranlar", body: "Boş, yükleniyor, hata ve başarı gibi her durumu kapsayan mobil ve masaüstü tasarımlar." },
        { title: "Tasarım sistemi", body: "Ürün büyüdükçe tutarlı kalması için yeniden kullanılabilir bileşenler, renkler, yazı tipleri ve kurallar." },
        { title: "Temiz teslim", body: "Spesifikasyonlarıyla düzenli Figma dosyaları ve ekibiniz geliştirirken ulaşılabilir bir tasarımcı." },
      ],
      steps: [
        { title: "Takılma noktalarını bulun", body: "Verilerinizi inceler, birkaç kullanıcıyla konuşur ve önce çözülmeye değer sorunda anlaşırız." },
        { title: "Taslak ve akışlar", body: "Hiçbir şeyi parlatmadan önce yapıda anlaşmak için hızlı yerleşimler ve akışlar." },
        { title: "Prototip ve test", body: "Gerçek kullanıcılarla test edilen tıklanabilir bir prototip, ardından gördüklerimize göre iyileştirme." },
        { title: "Son tasarım ve teslim", body: "Cilalanmış ekranlar ve bir tasarım sistemi; geliştiricilerinize teslim edilir ya da bizim ekibimiz geliştirir." },
      ],
      timing: "Kayıt veya ödeme gibi tek bir akışın odaklı yeniden tasarımı birkaç hafta sürebilir. Tamamen yeni bir ürün daha uzun sürer ve aşamalar halinde planlanır.",
      price: {
        headline: "Tasarım çalışması ilk görüşmeden sonra sabit bir proje olarak ya da süren ürünler için aylık anlaşmayla fiyatlandırılır.",
        factors: ["Kaç ekran ve kullanıcı türü olduğu", "Ne kadar araştırma ve test istediğiniz", "Tam bir tasarım sistemine ihtiyaç olup olmadığı", "Sadece tasarım mı, tasarım ve geliştirme birlikte mi"],
      },
      proofStory:
        "Insaf Academy, 9 ile 12. sınıflar için Urduca ve İngilizce video dersler ve deneme sınavları sunan ücretsiz bir öğrenme platformu. Platformu yeniden tasarlayıp geliştirdik; net sınıf ve kurs sayfaları öğrencileri ihtiyaç duydukları derslere ve deneme sınavlarına yönlendiriyor.",
      notFit: [
        "Sadece bir logoya veya sosyal medya gönderilerine ihtiyacınız varsa, marka tasarımı hizmetimiz bir UX projesinden daha uygun olur.",
        "Ürünün henüz kullanıcısı yoksa ve fikir test edilmediyse, tam tasarımdan önce kısa bir keşif çalışmasıyla başlayın.",
      ],
      faq: [
        { q: "UI ile UX arasındaki fark nedir?", a: "UX (kullanıcı deneyimi) ürünün nasıl çalıştığıdır: adımlar, yapı ve insanların yapmak istediklerini yapıp yapamadıkları. UI (kullanıcı arayüzü) ise nasıl göründüğüdür: yerleşim, renkler, yazı tipleri ve düğmeler. İkisini birlikte yapıyoruz." },
        { q: "Kullanıcılarımızı zaten tanıyorsak araştırmaya ihtiyacımız var mı?", a: "Kısa bir tur yine de işe yarar. Genellikle bildiklerinizin çoğunu doğrular ve bilmediğiniz o tek şeyi yakalar." },
        { q: "Geliştiricilerimizle çalışabilir misiniz?", a: "Evet. Spesifikasyonlarıyla Figma'da teslim eder, ekibiniz geliştirirken ulaşılabilir kalırız ya da geliştirmeyi bizim mühendislerimiz yapar." },
        { q: "Ürünün sadece bir bölümünü yeniden tasarlayabilir misiniz?", a: "Evet. Pek çok proje, rakamların kullanıcıların vazgeçtiğini gösterdiği onboarding veya ödeme gibi tek bir akışla başlar." },
        { q: "Hangi araçları kullanıyorsunuz?", a: "Tasarım ve prototipler için Figma, ayrıca insanların ürünü nasıl kullandığını görmek için test ve analiz araçları." },
      ],
      imageAlt: "Tablette tel kafes taslak çizen bir el",
      closing: "İnsanların ilk seferde anladığı bir ürün mü istiyorsunuz?",
    },
  },
};
