export const siteConfig = {
  brand: {
    name: "ES-ES Danışmanlık",
    legalName: "ES-ES Danışmanlık",
    tagline: "Doğru Rehberlik, Etkili Süreç, Etkili Sonuç.",
    subTagline:
      "Doğru rehberlik, etkili süreçle birleştiğinde etkili sonuçlar doğurur.",
    motto: "Etkili Süreç Etkili Sonuç",
  },
  url: "https://esesdanismanlik.net",
  locale: "tr-TR",
  contact: {
    phone: "0506 380 44 41",
    phoneE164: "+905063804441",
    email: "info@esesdanismanlik.net",
    legacyEmail: "salih.akbay2@gmail.com",
    whatsapp: "+905063804441",
    address: {
      street: "Şair Çelebi Sokak, Gürtaş İş Merkezi No: 1/4",
      district: "Ortabayır / Kağıthane",
      city: "İstanbul",
      country: "Türkiye",
      mapsUrl:
        "https://www.google.com/maps/search/?api=1&query=Gürtaş+İş+Merkezi+Şair+Çelebi+Sokak+Kağıthane+İstanbul",
    },
  },
  social: {
    instagram: "",
    linkedin: "",
    youtube: "",
  },
  calendly: {
    introUrl: "https://calendly.com/es-esdanismanlik/tanisma",
    enabled: false,
  },
  forms: {
    // FormSubmit.co — anahtarsız form→e-posta rölesi. Gönderimler doğrudan
    // contact.email adresine düşer. İlk gönderimde gelen onay linkine bir kez
    // tıklanması gerekir (etkinleştirme).
    provider: "formsubmit",
  },
  nav: [
    { label: "Hakkımızda", href: "/hakkimizda" },
    {
      label: "Hizmetler",
      href: "/hizmetler",
      children: [
        { label: "Bireysel Akademik Mentörlük", href: "/hizmetler/bireysel-mentorluk" },
        { label: "Grup Mentörlük Programları", href: "/hizmetler/grup-programlari" },
        { label: "Kurumsal Danışmanlık", href: "/hizmetler/kurumsal" },
      ],
    },
    { label: "Yaklaşımımız", href: "/yaklasimimiz" },
    { label: "SSS", href: "/sss" },
    { label: "İletişim", href: "/iletisim" },
  ] as ReadonlyArray<{
    readonly label: string;
    readonly href: string;
    readonly children?: ReadonlyArray<{ readonly label: string; readonly href: string }>;
  }>,
  footerLegal: [
    { label: "KVKK Aydınlatma Metni", href: "/kvkk-aydinlatma" },
    { label: "Gizlilik Politikası", href: "/gizlilik-politikasi" },
    { label: "Çerez Politikası", href: "/cerez-politikasi" },
    { label: "Yasal Uyarı", href: "/yasal-uyari" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
