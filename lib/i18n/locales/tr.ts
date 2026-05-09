import type { Dict } from "../types";

export const tr: Dict = {
  nav: { home: "Ana sayfa", about: "Hakkında", join: "Katıl", language: "Dil" },
  hero: {
    title: "Dünya onsuz",
    join: "Beachnight’e katıl",
    learnMore: "Daha fazla bilgi",
    noWithout: (region, beach, _deTickerLead) => `${beach} olmadan ${region} olmaz.`,
  },
  home: {
    statsHeading: "Beachnight rakamlarla",
    statThreatenedHeadline: "Yarısı",
    statThreatened: "dünyanın plajları 2100 yılına kadar yok olabilir.",
    statCoastlineHeadline: "Her",
    statCoastlineCountries: "kıyı davetlidir.",
    statOneNightHeadline: "1 gece",
    statOneNight: "plajlarımızı kurtarmak için.",
    whatTitle: "Beachnight nedir",
    whatP1:
      "Plajlarımız harika yerler. Kara ile su arasında büyülü köprüler. Mutluluk, eğlence ve huzur anları sunarlar. Birçok insan için geçim bile bir plajaya bağlıdır.",
    whatP2:
      "Buna rağmen, deniz seviyesi yükseldikçe bu olağanüstü yerler birer birer yok olacak. İklim değişikliğinin bu sonucunu bilsek de, çoğu ya da tüm plajların kaybolduğu bir dünyada yaşamak düşünülemez.",
    whatP3: "",
    whatP4:
      "Beachnight, zamanda donmuş bir an yaratmayı amaçlar. Dünyanın kıyılarında yaşayan insanlar için birlik anı. Dünyanın plajlarını aydınlattığımız bir an. Güzelliklerine hayran olmak, bize mutluluk verdikleri için teşekkür etmek ve birlikte neşeli bir gece geçirmek için.",
    whatP5:
      "Elbette Beachnight aynı zamanda harekete geçme çağrısıdır. İnsanları sera gazı emisyonlarını büyük ölçüde azaltmaya ve mümkün olduğunca çok plajı kurtarmaya teşvik etmek için.",
    whenLabel: "Beachnight ne zaman",
    whenDateTbd: "Tarih daha sonra açıklanacak",
    whenTimeLabel: "Gün batımından hemen önce",
    whenTimeNote:
      "Kendi plajınızdaki yerel gün batımına göre gelin — hava hâlâ aydınlıkken gelin, gökyüzü kararmaya başlarken kıyıyı aydınlatın.",
    register: "Katılmak için kaydolun",
    readStory: "Tüm hikayeyi okuyun",
  },
  about: {
    title: "Beachnight hakkında",
    missionTitle: "Misyonumuz",
    missionP1:
      "Plajlarımız harika yerler. Kara ile su arasında büyülü köprüler. Mutluluk, eğlence ve huzur anları sunarlar. Birçok insan için geçim bile bir plajaya bağlıdır.",
    missionP2:
      "Buna rağmen, deniz seviyesi yükseldikçe bu olağanüstü yerler birer birer yok olacak. İklim değişikliğinin bu sonucunu bilsek de, çoğu ya da tüm plajların kaybolduğu bir dünyada yaşamak düşünülemez.",
    missionP3: "",
    missionP4:
      "Beachnight, zamanda donmuş bir an yaratmayı amaçlar. Dünyanın kıyılarında yaşayan insanlar için birlik anı. Dünyanın plajlarını aydınlattığımız bir an. Güzelliklerine hayran olmak, bize mutluluk verdikleri için teşekkür etmek ve birlikte neşeli bir gece geçirmek için.",
    missionP5:
      "Elbette Beachnight aynı zamanda harekete geçme çağrısıdır. İnsanları sera gazı emisyonlarını büyük ölçüde azaltmaya ve mümkün olduğunca çok plajı kurtarmaya teşvik etmek için.",
    missionP6: "",
    participateTitle: "Nasıl katılabilirim?",
    participate1:
      "Beachnight oldukça basit: Gün batımından önce bir plaja gidin. Mum, meşale (yerel yasalar ve güvenlik izin veriyorsa), fener veya telefonunuz gibi bir ışık kaynağı getirin. ",
    participate2BeforeLink:
      "Ne zaman? Beachnight için bir tarih belirlendiğinde, burada birkaç hafta önceden yayınlanacak. Ayrıca ",
    participate2LinkText: "buradan kayıt olabilirsiniz",
    participate2AfterLink: " ve size haber vereceğiz.",
    participate3:
      "Peki şimdilik? Beachnight’i iş arkadaşlarınıza, arkadaşlarınıza ve ailenize anlatın; onları da kaydolmaya davet edin.",
    aboutMeTitle: "Benim hakkımda",
    aboutMe:
      "Ben Thomas, Avrupa’da denize kıyısı olmayan küçük bir ülke olan Avusturya’dan sıradan bir insanım. 🙂 Dünyanın plajlarının geleceği beni endişelendiriyor ve onları korumak için katkıda bulunmak istiyorum.",
  },
  join: {
    title: "Beachnight’e katılın",
    subtitle:
      "Bir sonraki etkinliğe kaydolun. Bireyler ve gruplar davetlidir.",
    dateNote:
      "Ne zaman? Beachnight için bir tarih belirlendiğinde, burada birkaç hafta önceden yayınlanacak. Buradan kayıt olursanız size haber vereceğiz.",
    success: "Teşekkürler — kaydınız alındı. Verdiğiniz e-posta adresinden sizinle iletişime geçeceğiz.",
    fullName: "Ad soyad",
    email: "E-posta",
    beach: "Plajınız",
    location: "Bulunduğunuz yer",
    beachPlaceholder: "Plaj veya kıyı",
    locationPlaceholder: "Şehir, ülke",
    submit: "Gönder",
    submitting: "Gönderiliyor…",
  },
  footer: {
    tagline: "Bir gece. Her kıyı. Bir işaret.",
    quickLinks: "Hızlı bağlantılar",
    updatesBlurb:
      "Posta listesi yok. {join} sayfasını kullanın — güncellemeleri yalnızca oradan göndeririz.",
    updatesLinkLabel: "kayıt sayfası",
    shareTitle: "Geceyi paylaşın",
    shareText:
      "Fotoğraf veya video paylaşırken hikayenizi bulabilmemiz için #{tag1} ve #{tag2} etiketlerini kullanın.",
    aiVideoNote:
      "Etkinlik önizleme videosu, Beachnight’in nasıl görünebileceğini hayal etmek için yapay zekâ ile oluşturuldu.",
  },
};
