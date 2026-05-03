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
    statThreatenedHeadline: string;
    statThreatened: string;
    statCoastlineHeadline: string;
    statCoastlineCountries: string;
    statOneNight: string;
    whatTitle: string;
    whatP1: string;
    whatP2: string;
    whatP3: string;
    whatP4: string;
    whatP5: string;
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
    missionP4: string;
    missionP5: string;
    missionP6: string;
    participateTitle: string;
    participate1: string;
    participate2BeforeLink: string;
    participate2LinkText: string;
    participate2AfterLink: string;
    participate3: string;
    aboutMeTitle: string;
    aboutMe: string;
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
    updatesBlurb: string;
    updatesLinkLabel: string;
    shareTitle: string;
    shareText: string;
    aiVideoNote: string;
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
      statThreatenedHeadline: "Rising seas",
      statThreatened:
        "Climate projections show widespread sandy‑beach erosion and retreat; how much and how fast depends on warming, local geography, and shoreline type.",
      statCoastlineHeadline: "~150",
      statCoastlineCountries:
        "UN member states border the ocean (landlocked members are the exception; counts differ if territories are included).",
      statOneNight: "to show we care",
      whatTitle: "What Beachnight is",
      whatP1:
        "Our beaches are wonderful places. They are magical places between land and water. They give us moments of happiness, fun and peace. For many people, even their livelihoods depend on a beach.",
      whatP2:
        "Yet, as it looks today, these extraordinary places are going to disappear one by one as the sea level rises.",
      whatP3:
        "For me, even though I am aware of this situation, it’s quite unthinkable to live in a world where most or all of the beaches have just disappeared.",
      whatP4:
        "Beachnight is intended to create a moment frozen in time. A moment of unity for people living on the coasts all around the world. A moment in which we illuminate the beaches of the world. To cherish their beauty, to thank them for giving us so much happiness and also to spend a joyful, happy night together.",
      whatP5:
        "Of course Beachnight is also a call for action. A call to motivate people all around the world to make a difference, to make a contribution to vastly reduce greenhouse gas emissions and to save as many beaches as possible.",
      whenLabel: "When is Beachnight",
      register: "Register to participate",
      readStory: "Read the full story",
    },
    about: {
      title: "About Beachnight",
      missionTitle: "Our Mission",
      missionP1:
        "Our beaches are wonderful places. They are magical places between land and water. They give us moments of happiness, fun and peace. For many people, even their livelihoods depend on a beach.",
      missionP2:
        "Yet, as it looks today, these extraordinary places are going to disappear one by one as the sea level rises.",
      missionP3:
        "For me, even though I am aware of this situation, it’s quite unthinkable to live in a world where most or all of the beaches have just disappeared.",
      missionP4:
        "Beachnight is intended to create a moment frozen in time. A moment of unity for people living on the coasts all around the world. A moment in which we illuminate the beaches of the world. To cherish their beauty, to thank them for giving us so much happiness and also to spend a joyful, happy night together.",
      missionP5:
        "Of course Beachnight is also a call for action. A call to motivate people all around the world to make a difference, to make a contribution to vastly reduce greenhouse gas emissions and to save as many beaches as possible.",
      missionP6: "",
      participateTitle: "How can I participate?",
      participate1:
        "Beachnight is quite simple: You just go to a beach before sunset. Bring along something to illuminate like candles, torches (if local laws and safety regulations allow), lanterns or simply your phone. ",
      participate2BeforeLink: "When will this be? Once there is a date for Beachnight, it will be published here a few weeks in advance. You can also ",
      participate2LinkText: "sign up here",
      participate2AfterLink:
        " and you’ll be notified proactively.",
      participate3:
        "And until then? Tell your colleagues, friends and family about Beachnight and get them to sign up as well.",
      aboutMeTitle: "About me",
      aboutMe:
        "I’m Thomas, an ordinary guy from Austria, a small landlocked country in Europe. 🙂 I’m concerned about the future of the world’s beaches and would like to make a contribution to save them.",
    },
    join: {
      title: "Join Beachnight",
      subtitle: "Register to take part in the next event. Individuals and groups are welcome.",
      dateNote:
        "When will this be? Once there is a date for Beachnight, it will be published here a few weeks in advance. You can also sign up here and you’ll be notified proactively.",
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
      updatesBlurb:
        "No mailing list. Use the {join} — that’s the only way we’ll send updates.",
      updatesLinkLabel: "Join page",
      shareTitle: "Share the night",
      shareText:
        "When you post photos or video, use #{tag1} and #{tag2} so we can find your story.",
      aiVideoNote:
        "The event preview video was made with AI to imagine what Beachnight could look like.",
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
      statThreatenedHeadline: "Mar en alza",
      statThreatened:
        "Los estudios climáticos proyectan erosión y retroceso generalizados de playas arenosas; el alcance depende del calentamiento, la geografía local y el tipo de costa.",
      statCoastlineHeadline: "~150",
      statCoastlineCountries:
        "Estados miembros de la ONU tienen costa oceánica (los sin litoral son la excepción; las cifras varían si se incluyen territorios).",
      statOneNight: "para demostrar que nos importa",
      whatTitle: "Qué es Beachnight",
      whatP1:
        "Nuestras playas son lugares maravillosos. Son lugares mágicos entre la tierra y el agua. Nos dan momentos de felicidad, diversión y paz. Para muchas personas, incluso sus medios de vida dependen de una playa.",
      whatP2:
        "Sin embargo, tal como se ve hoy, estos lugares extraordinarios van a desaparecer uno a uno a medida que sube el nivel del mar.",
      whatP3:
        "Para mí, aunque soy consciente de esta situación, es bastante impensable vivir en un mundo donde la mayoría o todas las playas simplemente hayan desaparecido.",
      whatP4:
        "Beachnight pretende crear un momento congelado en el tiempo. Un momento de unión para las personas que viven en las costas de todo el mundo. Un momento en el que iluminamos las playas del mundo. Para apreciar su belleza, agradecerles por darnos tanta felicidad y también para pasar una noche alegre y feliz juntos.",
      whatP5:
        "Por supuesto, Beachnight también es un llamado a la acción. Un llamado para motivar a personas de todo el mundo a marcar la diferencia, a contribuir a reducir drásticamente las emisiones de gases de efecto invernadero y a salvar tantas playas como sea posible.",
      whenLabel: "Cuándo es Beachnight",
      register: "Regístrate para participar",
      readStory: "Leer la historia completa",
    },
    about: {
      title: "Acerca de Beachnight",
      missionTitle: "Nuestra misión",
      missionP1:
        "Nuestras playas son lugares maravillosos. Son lugares mágicos entre la tierra y el agua. Nos dan momentos de felicidad, diversión y paz. Para muchas personas, incluso sus medios de vida dependen de una playa.",
      missionP2:
        "Sin embargo, tal como se ve hoy, estos lugares extraordinarios van a desaparecer uno a uno a medida que sube el nivel del mar.",
      missionP3:
        "Para mí, aunque soy consciente de esta situación, es bastante impensable vivir en un mundo donde la mayoría o todas las playas simplemente hayan desaparecido.",
      missionP4:
        "Beachnight pretende crear un momento congelado en el tiempo. Un momento de unión para las personas que viven en las costas de todo el mundo. Un momento en el que iluminamos las playas del mundo. Para apreciar su belleza, agradecerles por darnos tanta felicidad y también para pasar una noche alegre y feliz juntos.",
      missionP5:
        "Por supuesto, Beachnight también es un llamado a la acción. Un llamado para motivar a personas de todo el mundo a marcar la diferencia, a contribuir a reducir drásticamente las emisiones de gases de efecto invernadero y a salvar tantas playas como sea posible.",
      missionP6: "",
      participateTitle: "¿Cómo puedo participar?",
      participate1:
        "Beachnight es bastante simple: solo vas a una playa antes del atardecer. Lleva algo para iluminar, como velas, antorchas (si las leyes y normativas de seguridad locales lo permiten), faroles o simplemente tu teléfono. ",
      participate2BeforeLink: "¿Cuándo será? Cuando haya una fecha para Beachnight, se publicará aquí con unas semanas de antelación. También puedes ",
      participate2LinkText: "registrarte aquí",
      participate2AfterLink: " y te avisaremos de forma proactiva.",
      participate3:
        "¿Y mientras tanto? Cuéntales a colegas, amigos y familia sobre Beachnight y consigue que se registren también.",
      aboutMeTitle: "Sobre mí",
      aboutMe:
        "Soy Thomas, un tipo normal de Austria, un pequeño país sin litoral en Europa. 🙂 Me preocupa el futuro de las playas del mundo y me gustaría hacer una contribución para salvarlas.",
    },
    join: {
      title: "Únete a Beachnight",
      subtitle:
        "Regístrate para participar en el próximo evento. Se aceptan personas y grupos.",
      dateNote:
        "¿Cuándo será? Cuando haya una fecha para Beachnight, se publicará aquí con unas semanas de antelación. También puedes registrarte aquí y te avisaremos de forma proactiva.",
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
      updatesBlurb:
        "No hay lista de correo. Entra en {join}: es la única forma de recibir novedades.",
      updatesLinkLabel: "la página de registro",
      shareTitle: "Comparte la noche",
      shareText:
        "Cuando publiques fotos o video, usa #{tag1} y #{tag2} para que podamos encontrar tu historia.",
      aiVideoNote:
        "El video de muestra del evento se creó con IA para imaginar cómo podría verse Beachnight.",
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
      statThreatenedHeadline: "Mar a subir",
      statThreatened:
        "Estudos climáticos projetam erosão e recuo generalizados de praias arenosas; o quanto e quão rápido depende do aquecimento, da geografia local e do tipo de costa.",
      statCoastlineHeadline: "~150",
      statCoastlineCountries:
        "Estados-membros da ONU fazem fronteira com o oceano (os sem litoral são a exceção; totais mudam se territórios forem incluídos).",
      statOneNight: "para mostrar que nos importamos",
      whatTitle: "O que é o Beachnight",
      whatP1:
        "Nossas praias são lugares maravilhosos. São lugares mágicos entre a terra e a água. Elas nos dão momentos de felicidade, diversão e paz. Para muitas pessoas, até os seus meios de vida dependem de uma praia.",
      whatP2:
        "No entanto, como parece hoje, esses lugares extraordinários vão desaparecer um a um à medida que o nível do mar sobe.",
      whatP3:
        "Para mim, mesmo estando ciente dessa situação, é bastante impensável viver num mundo em que a maioria ou todas as praias simplesmente desapareceram.",
      whatP4:
        "O Beachnight pretende criar um momento congelado no tempo. Um momento de união para pessoas que vivem nas costas de todo o mundo. Um momento em que iluminamos as praias do mundo. Para apreciar a sua beleza, agradecer por nos darem tanta felicidade e também para passarmos uma noite alegre e feliz juntos.",
      whatP5:
        "Claro que o Beachnight também é um chamado à ação. Um chamado para motivar pessoas em todo o mundo a fazer a diferença, a contribuir para reduzir drasticamente as emissões de gases de efeito estufa e a salvar o máximo possível de praias.",
      whenLabel: "Quando é o Beachnight",
      register: "Inscreva-se para participar",
      readStory: "Ler a história completa",
    },
    about: {
      title: "Sobre o Beachnight",
      missionTitle: "Nossa missão",
      missionP1:
        "Nossas praias são lugares maravilhosos. São lugares mágicos entre a terra e a água. Elas nos dão momentos de felicidade, diversão e paz. Para muitas pessoas, até os seus meios de vida dependem de uma praia.",
      missionP2:
        "No entanto, como parece hoje, esses lugares extraordinários vão desaparecer um a um à medida que o nível do mar sobe.",
      missionP3:
        "Para mim, mesmo estando ciente dessa situação, é bastante impensável viver num mundo em que a maioria ou todas as praias simplesmente desapareceram.",
      missionP4:
        "O Beachnight pretende criar um momento congelado no tempo. Um momento de união para pessoas que vivem nas costas de todo o mundo. Um momento em que iluminamos as praias do mundo. Para apreciar a sua beleza, agradecer por nos darem tanta felicidade e também para passarmos uma noite alegre e feliz juntos.",
      missionP5:
        "Claro que o Beachnight também é um chamado à ação. Um chamado para motivar pessoas em todo o mundo a fazer a diferença, a contribuir para reduzir drasticamente as emissões de gases de efeito estufa e a salvar o máximo possível de praias.",
      missionP6: "",
      participateTitle: "Como posso participar?",
      participate1:
        "O Beachnight é bem simples: você só vai a uma praia antes do pôr do sol. Leve algo para iluminar, como velas, tochas (se as leis e regulamentos de segurança locais permitirem), lanternas ou simplesmente o seu telemóvel. ",
      participate2BeforeLink: "Quando será? Assim que houver uma data para o Beachnight, ela será publicada aqui algumas semanas antes. Você também pode ",
      participate2LinkText: "inscrever-se aqui",
      participate2AfterLink: " e será notificado de forma proativa.",
      participate3:
        "E até lá? Conte a colegas, amigos e família sobre o Beachnight e faça com que eles também se inscrevam.",
      aboutMeTitle: "Sobre mim",
      aboutMe:
        "Sou o Thomas, um cara comum da Áustria, um pequeno país sem litoral na Europa. 🙂 Estou preocupado com o futuro das praias do mundo e gostaria de fazer uma contribuição para salvá-las.",
    },
    join: {
      title: "Participe do Beachnight",
      subtitle:
        "Inscreva-se para participar do próximo evento. Pessoas e grupos são bem-vindos.",
      dateNote:
        "Quando será? Assim que houver uma data para o Beachnight, ela será publicada aqui algumas semanas antes. Você também pode se inscrever aqui e será notificado de forma proativa.",
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
      updatesBlurb:
        "Sem lista de e-mails. Use {join} — é o único jeito de recebermos novidades.",
      updatesLinkLabel: "a página de inscrição",
      shareTitle: "Compartilhe a noite",
      shareText:
        "Quando publicar fotos ou vídeos, use #{tag1} e #{tag2} para que possamos encontrar sua história.",
      aiVideoNote:
        "O vídeo de prévia do evento foi feito com IA para imaginar como o Beachnight poderia parecer.",
    },
  },
};
