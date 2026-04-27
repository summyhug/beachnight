export type Locale = "en" | "es" | "pt";

type Dict = {
  nav: {
    home: string;
    about: string;
    join: string;
    language: string;
  };
  hero: {
    title: string;
    join: string;
    learnMore: string;
    noWithout: (region: string, beach: string) => string;
  };
  home: {
    statsHeading: string;
    statThreatened: string;
    statCoastlineCountries: string;
    statOneNight: string;
    whatTitle: string;
    whatBody1: string;
    whatBody2: string;
    whenLabel: string;
    register: string;
    readStory: string;
  };
  about: {
    title: string;
    missionTitle: string;
    missionP1: string;
    missionP2: string;
    missionP3: string;
    participateTitle: string;
    participate1: string;
    participate2: string;
    participate3: string;
    dateNote: string;
    aboutMeTitle: string;
    aboutMeP1: string;
    aboutMeP2: string;
  };
  join: {
    title: string;
    subtitle: string;
    dateNote: string;
    success: string;
    fullName: string;
    email: string;
    beach: string;
    location: string;
    beachPlaceholder: string;
    locationPlaceholder: string;
    submit: string;
    submitting: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    newsletter: string;
    emailPlaceholder: string;
    join: string;
    shareTitle: string;
    shareText: string;
  };
};

export const SUPPORTED_LOCALES: Locale[] = ["en", "es", "pt"];

export const DEFAULT_LOCALE: Locale = "en";

const SPANISH_COUNTRIES = new Set([
  "AR",
  "BO",
  "CL",
  "CO",
  "CR",
  "CU",
  "DO",
  "EC",
  "ES",
  "GT",
  "HN",
  "MX",
  "NI",
  "PA",
  "PE",
  "PR",
  "PY",
  "SV",
  "UY",
  "VE",
]);

const PORTUGUESE_COUNTRIES = new Set([
  "AO",
  "BR",
  "CV",
  "GW",
  "MZ",
  "PT",
  "ST",
  "TL",
]);

export function localeFromCountry(country: string | null | undefined): Locale {
  if (!country) return DEFAULT_LOCALE;
  const cc = country.toUpperCase();
  if (SPANISH_COUNTRIES.has(cc)) return "es";
  if (PORTUGUESE_COUNTRIES.has(cc)) return "pt";
  return DEFAULT_LOCALE;
}

export const dict: Record<Locale, Dict> = {
  en: {
    nav: { home: "Home", about: "About", join: "Join", language: "Language" },
    hero: {
      title: "No world without",
      join: "Join Beachnight",
      learnMore: "Learn more",
      noWithout: (region, beach) => `No ${region} without ${beach}.`,
    },
    home: {
      statsHeading: "Beachnight by the numbers",
      statThreatened: "of beaches threatened by 2050",
      statCoastlineCountries: "countries with coastline",
      statOneNight: "to show we care",
      whatTitle: "What Beachnight is",
      whatBody1:
        "Beachnight creates a global moment of unity on the coasts. People, families, and organizations illuminate beaches together to celebrate their beauty and remind the world that these places are worth protecting.",
      whatBody2:
        "Join as an individual or with a business, school, or community group. It is simple, joyful, and meaningful: one night, shared across shores everywhere.",
      whenLabel: "When is Beachnight",
      register: "Register to participate",
      readStory: "Read the full story",
    },
    about: {
      title: "About Beachnight",
      missionTitle: "Our Mission",
      missionP1:
        "Our beaches are extraordinary places between land and water. They give us joy, peace, and unforgettable moments. For many people, they also support livelihoods and local communities.",
      missionP2:
        "Yet sea-level rise and climate change are putting many coastlines at risk. Beachnight creates one shared moment in time: people on coasts around the world illuminate their beaches to celebrate their beauty and stand together for their future.",
      missionP3:
        "It is a joyful global moment, but also a call for action: reduce greenhouse gas emissions, support local coastal protection, and help save as many beaches as possible.",
      participateTitle: "How To Participate",
      participate1:
        "Beachnight is quite simple: You just go to a beach before sunset.",
      participate2:
        "Bring along something to illuminate like candles, torches (if local laws and safety regulations allow), lanterns, or simply your phone.",
      participate3:
        "And until then? Tell your colleagues, friends, and family about Beachnight and get them to sign up as well.",
      dateNote:
        "Once there is a date for Beachnight, it will be published here a few weeks in advance. You can also sign up and be notified proactively.",
      aboutMeTitle: "About me",
      aboutMeP1:
        "I'm Thomas, an ordinary person from Austria, a small landlocked country in Europe. Even though I did not grow up by the sea, I care deeply about the future of the world's beaches.",
      aboutMeP2:
        "Beachnight is my contribution to bring people together in a positive, memorable way and inspire practical climate action.",
    },
    join: {
      title: "Join Beachnight",
      subtitle: "Register to take part in the next event. Individuals and groups are welcome.",
      dateNote:
        "Once the date is finalized, we will notify everyone here a few weeks in advance with practical guidance for participation.",
      success:
        "Thank you — you're registered. We'll be in touch at the email you provided.",
      fullName: "Full name",
      email: "Email",
      beach: "Your Beach",
      location: "Where you're based",
      beachPlaceholder: "Beach or coastline",
      locationPlaceholder: "City, country",
      submit: "Submit",
      submitting: "Submitting…",
    },
    footer: {
      tagline: "One Night. Every Shore. One Signal.",
      quickLinks: "Quick Links",
      newsletter: "Newsletter",
      emailPlaceholder: "Your email",
      join: "Join",
      shareTitle: "Share the night",
      shareText:
        "When you post photos or video, use #{tag1} and #{tag2} so we can find your story.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      join: "Unirse",
      language: "Idioma",
    },
    hero: {
      title: "No hay mundo sin",
      join: "Únete a Beachnight",
      learnMore: "Saber más",
      noWithout: (region, beach) => `No hay ${region} sin ${beach}.`,
    },
    home: {
      statsHeading: "Beachnight en cifras",
      statThreatened: "de playas amenazadas para 2050",
      statCoastlineCountries: "países con costa",
      statOneNight: "para demostrar que nos importa",
      whatTitle: "Qué es Beachnight",
      whatBody1:
        "Beachnight crea un momento global de unión en las costas. Personas, familias y organizaciones iluminan playas juntas para celebrar su belleza y recordar al mundo que estos lugares merecen ser protegidos.",
      whatBody2:
        "Puedes unirte de forma individual o con una empresa, escuela o comunidad. Es simple, alegre y significativo: una noche compartida en costas de todo el mundo.",
      whenLabel: "Cuándo es Beachnight",
      register: "Regístrate para participar",
      readStory: "Leer la historia completa",
    },
    about: {
      title: "Acerca de Beachnight",
      missionTitle: "Nuestra misión",
      missionP1:
        "Nuestras playas son lugares extraordinarios entre la tierra y el agua. Nos dan alegría, paz y momentos inolvidables. Para muchas personas, también sostienen medios de vida y comunidades locales.",
      missionP2:
        "Sin embargo, el aumento del nivel del mar y el cambio climático están poniendo en riesgo muchas costas. Beachnight crea un momento compartido: personas de todo el mundo iluminan playas para celebrar su belleza y unirse por su futuro.",
      missionP3:
        "Es un momento global alegre, pero también un llamado a la acción: reducir emisiones, apoyar la protección costera local y salvar tantas playas como sea posible.",
      participateTitle: "Cómo participar",
      participate1:
        "Beachnight es muy simple: solo ve a una playa antes del atardecer.",
      participate2:
        "Lleva algo para iluminar, como velas, antorchas (si la normativa local lo permite), faroles o simplemente tu teléfono.",
      participate3:
        "¿Y mientras tanto? Cuéntales a colegas, amigos y familia sobre Beachnight y anímalos a registrarse también.",
      dateNote:
        "Cuando haya una fecha para Beachnight, se publicará aquí con unas semanas de antelación. También puedes registrarte para recibir aviso proactivo.",
      aboutMeTitle: "Sobre mí",
      aboutMeP1:
        "Soy Thomas, una persona común de Austria, un pequeño país sin costa en Europa. Aunque no crecí junto al mar, me importa profundamente el futuro de las playas del mundo.",
      aboutMeP2:
        "Beachnight es mi forma de contribuir: unir personas de manera positiva y memorable, e inspirar acción climática práctica.",
    },
    join: {
      title: "Únete a Beachnight",
      subtitle:
        "Regístrate para participar en el próximo evento. Se aceptan personas y grupos.",
      dateNote:
        "Cuando se confirme la fecha, avisaremos aquí con unas semanas de antelación y compartiremos orientación práctica para participar.",
      success:
        "Gracias: tu registro está completo. Te contactaremos en el correo que proporcionaste.",
      fullName: "Nombre completo",
      email: "Correo electrónico",
      beach: "Tu playa",
      location: "Dónde estás",
      beachPlaceholder: "Playa o costa",
      locationPlaceholder: "Ciudad, país",
      submit: "Enviar",
      submitting: "Enviando…",
    },
    footer: {
      tagline: "Una noche. Cada costa. Una señal.",
      quickLinks: "Enlaces rápidos",
      newsletter: "Boletín",
      emailPlaceholder: "Tu correo",
      join: "Unirme",
      shareTitle: "Comparte la noche",
      shareText:
        "Cuando publiques fotos o video, usa #{tag1} y #{tag2} para que podamos encontrar tu historia.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      join: "Participar",
      language: "Idioma",
    },
    hero: {
      title: "Não há mundo sem",
      join: "Participe do Beachnight",
      learnMore: "Saiba mais",
      noWithout: (region, beach) => `Não há ${region} sem ${beach}.`,
    },
    home: {
      statsHeading: "Beachnight em números",
      statThreatened: "de praias ameaçadas até 2050",
      statCoastlineCountries: "países com litoral",
      statOneNight: "para mostrar que nos importamos",
      whatTitle: "O que é o Beachnight",
      whatBody1:
        "O Beachnight cria um momento global de união nas costas. Pessoas, famílias e organizações iluminam praias juntas para celebrar sua beleza e lembrar ao mundo que esses lugares merecem proteção.",
      whatBody2:
        "Participe individualmente ou com empresa, escola ou comunidade. É simples, alegre e significativo: uma noite compartilhada em costas do mundo inteiro.",
      whenLabel: "Quando é o Beachnight",
      register: "Inscreva-se para participar",
      readStory: "Ler a história completa",
    },
    about: {
      title: "Sobre o Beachnight",
      missionTitle: "Nossa missão",
      missionP1:
        "Nossas praias são lugares extraordinários entre a terra e a água. Elas nos dão alegria, paz e momentos inesquecíveis. Para muitas pessoas, também sustentam meios de vida e comunidades locais.",
      missionP2:
        "No entanto, a elevação do nível do mar e as mudanças climáticas colocam muitas costas em risco. O Beachnight cria um momento compartilhado: pessoas em todo o mundo iluminam praias para celebrar sua beleza e se unir pelo seu futuro.",
      missionP3:
        "É um momento global alegre, mas também um chamado à ação: reduzir emissões de gases de efeito estufa, apoiar a proteção costeira local e salvar o maior número possível de praias.",
      participateTitle: "Como participar",
      participate1:
        "O Beachnight é bem simples: basta ir a uma praia antes do pôr do sol.",
      participate2:
        "Leve algo para iluminar, como velas, tochas (se as leis locais permitirem), lanternas ou simplesmente seu celular.",
      participate3:
        "E até lá? Conte para colegas, amigos e família sobre o Beachnight e incentive todos a se inscreverem também.",
      dateNote:
        "Assim que houver uma data para o Beachnight, ela será publicada aqui algumas semanas antes. Você também pode se inscrever para ser avisado proativamente.",
      aboutMeTitle: "Sobre mim",
      aboutMeP1:
        "Sou Thomas, uma pessoa comum da Áustria, um pequeno país sem litoral na Europa. Mesmo sem ter crescido perto do mar, me preocupo profundamente com o futuro das praias do mundo.",
      aboutMeP2:
        "O Beachnight é a minha forma de contribuir: unir pessoas de maneira positiva e memorável e inspirar ação climática prática.",
    },
    join: {
      title: "Participe do Beachnight",
      subtitle:
        "Inscreva-se para participar do próximo evento. Pessoas e grupos são bem-vindos.",
      dateNote:
        "Quando a data for definida, avisaremos aqui com algumas semanas de antecedência e compartilharemos orientações práticas para participação.",
      success:
        "Obrigado — sua inscrição foi concluída. Entraremos em contato pelo e-mail informado.",
      fullName: "Nome completo",
      email: "E-mail",
      beach: "Sua praia",
      location: "Onde você está",
      beachPlaceholder: "Praia ou costa",
      locationPlaceholder: "Cidade, país",
      submit: "Enviar",
      submitting: "Enviando…",
    },
    footer: {
      tagline: "Uma noite. Cada costa. Um sinal.",
      quickLinks: "Links rápidos",
      newsletter: "Newsletter",
      emailPlaceholder: "Seu e-mail",
      join: "Participar",
      shareTitle: "Compartilhe a noite",
      shareText:
        "Quando publicar fotos ou vídeos, use #{tag1} e #{tag2} para que possamos encontrar sua história.",
    },
  },
};
