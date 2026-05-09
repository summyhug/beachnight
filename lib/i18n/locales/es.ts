import type { Dict } from "../types";

export const es: Dict = {
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
    noWithout: (region, beach, _deTickerLead) => `No hay ${region} sin ${beach}.`,
  },
  home: {
    statsHeading: "Beachnight en cifras",
    statThreatenedHeadline: "La mitad",
    statThreatened: "de las playas del mundo pueden desaparecer hacia 2100.",
    statCoastlineHeadline: "Cada",
    statCoastlineCountries: "costa está invitada.",
    statOneNightHeadline: "1 noche",
    statOneNight: "para proteger nuestras playas.",
    whatTitle: "Qué es Beachnight",
    whatP1:
      "Nuestras playas son lugares maravillosos. Son lugares mágicos entre la tierra y el agua. Nos dan momentos de felicidad, diversión y paz. Para muchas personas, incluso sus medios de vida dependen de una playa.",
    whatP2:
      "Sin embargo, tal como se ve hoy, estos lugares extraordinarios van a desaparecer uno a uno a medida que sube el nivel del mar. Aunque somos conscientes de esta consecuencia del cambio climático, es bastante impensable imaginar un mundo donde la mayoría o todas las playas hayan desaparecido.",
    whatP3: "",
    whatP4:
      "Beachnight pretende crear un momento congelado en el tiempo. Un momento de unión para las personas que viven en las costas de todo el mundo. Un momento en el que iluminamos las playas del mundo. Para apreciar su belleza, agradecerles por darnos tanta felicidad y también para pasar una noche alegre y feliz juntos.",
    whatP5:
      "Por supuesto, Beachnight también es un llamado a la acción. Un llamado para motivar a personas de todo el mundo a marcar la diferencia, a contribuir a reducir drásticamente las emisiones de gases de efecto invernadero y a salvar tantas playas como sea posible.",
    whenLabel: "Cuándo es Beachnight",
    whenDateTbd: "Fecha por anunciar",
    whenTimeLabel: "Justo antes del atardecer",
    whenTimeNote:
      "Atardecer local en tu playa: llega cuando aún hay luz y enciende la costa mientras cae el cielo.",
    register: "Regístrate para participar",
    readStory: "Leer la historia completa",
  },
  about: {
    title: "Acerca de Beachnight",
    missionTitle: "Nuestra misión",
    missionP1:
      "Nuestras playas son lugares maravillosos. Son lugares mágicos entre la tierra y el agua. Nos dan momentos de felicidad, diversión y paz. Para muchas personas, incluso sus medios de vida dependen de una playa.",
    missionP2:
      "Sin embargo, tal como se ve hoy, estos lugares extraordinarios van a desaparecer uno a uno a medida que sube el nivel del mar. Aunque somos conscientes de esta consecuencia del cambio climático, es bastante impensable imaginar un mundo donde la mayoría o todas las playas hayan desaparecido.",
    missionP3: "",
    missionP4:
      "Beachnight pretende crear un momento congelado en el tiempo. Un momento de unión para las personas que viven en las costas de todo el mundo. Un momento en el que iluminamos las playas del mundo. Para apreciar su belleza, agradecerles por darnos tanta felicidad y también para pasar una noche alegre y feliz juntos.",
    missionP5:
      "Por supuesto, Beachnight también es un llamado a la acción. Un llamado para motivar a personas de todo el mundo a marcar la diferencia, a contribuir a reducir drásticamente las emisiones de gases de efecto invernadero y a salvar tantas playas como sea posible.",
    missionP6: "",
    participateTitle: "¿Cómo puedo participar?",
    participate1:
      "Beachnight es bastante simple: solo vas a una playa antes del atardecer. Lleva algo para iluminar, como velas, antorchas (si las leyes y normativas de seguridad locales lo permiten), faroles o simplemente tu teléfono. ",
    participate2BeforeLink:
      "¿Cuándo será? Cuando haya una fecha para Beachnight, se publicará aquí con unas semanas de antelación. También puedes ",
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
};
