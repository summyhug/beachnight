import type { Dict } from "../types";

export const fr: Dict = {
  nav: { home: "Accueil", about: "À propos", join: "Rejoindre", language: "Langue" },
  hero: {
    title: "Pas de monde sans",
    join: "Rejoindre Beachnight",
    learnMore: "En savoir plus",
    noWithout: (region, beach) => `Pas de ${region} sans ${beach}.`,
  },
  home: {
    statsHeading: "Beachnight en chiffres",
    statThreatenedHeadline: "La moitié",
    statThreatened: "des plages du monde pourrait avoir disparu d’ici 2100.",
    statCoastlineHeadline: "Chaque",
    statCoastlineCountries: "côte est invitée.",
    statOneNightHeadline: "1 nuit",
    statOneNight: "pour sauver nos plages.",
    whatTitle: "Qu’est-ce que Beachnight",
    whatP1:
      "Nos plages sont des lieux merveilleux. Des lieux magiques entre la terre et l’eau. Elles nous offrent des moments de bonheur, de joie et de paix. Pour beaucoup, même leur moyen de subsistance dépend d’une plage.",
    whatP2:
      "Pourtant, au rythme actuel, ces lieux extraordinaires vont disparaître un à un avec la montée du niveau de la mer. Même si nous connaissons cette conséquence du changement climatique, il est presque impensable de vivre dans un monde où la plupart — ou toutes — les plages auraient disparu.",
    whatP3: "",
    whatP4:
      "Beachnight veut créer un moment figé dans le temps. Un moment d’unité pour les habitants des côtes du monde entier. Un moment où nous illuminons les plages du monde. Pour célébrer leur beauté, les remercier pour tout le bonheur qu’elles nous donnent, et passer ensemble une nuit joyeuse et heureuse.",
    whatP5:
      "Bien sûr, Beachnight est aussi un appel à l’action. Un appel à mobiliser les gens partout dans le monde pour agir, réduire fortement les émissions de gaz à effet de serre et sauver autant de plages que possible.",
    whenLabel: "Quand a lieu Beachnight",
    whenDateTbd: "Date à annoncer",
    whenTimeLabel: "Juste avant le coucher du soleil",
    whenTimeNote:
      "Coucher du soleil local sur votre plage — arrivez tant qu’il fait encore clair, puis illuminez le rivage à la tombée du jour.",
    register: "S’inscrire pour participer",
    readStory: "Lire l’histoire complète",
  },
  about: {
    title: "À propos de Beachnight",
    missionTitle: "Notre mission",
    missionP1:
      "Nos plages sont des lieux merveilleux. Des lieux magiques entre la terre et l’eau. Elles nous offrent des moments de bonheur, de joie et de paix. Pour beaucoup, même leur moyen de subsistance dépend d’une plage.",
    missionP2:
      "Pourtant, au rythme actuel, ces lieux extraordinaires vont disparaître un à un avec la montée du niveau de la mer. Même si nous connaissons cette conséquence du changement climatique, il est presque impensable de vivre dans un monde où la plupart — ou toutes — les plages auraient disparu.",
    missionP3: "",
    missionP4:
      "Beachnight veut créer un moment figé dans le temps. Un moment d’unité pour les habitants des côtes du monde entier. Un moment où nous illuminons les plages du monde. Pour célébrer leur beauté, les remercier pour tout le bonheur qu’elles nous donnent, et passer ensemble une nuit joyeuse et heureuse.",
    missionP5:
      "Bien sûr, Beachnight est aussi un appel à l’action. Un appel à mobiliser les gens partout dans le monde pour agir, réduire fortement les émissions de gaz à effet de serre et sauver autant de plages que possible.",
    missionP6: "",
    participateTitle: "Comment participer ?",
    participate1:
      "Beachnight est simple : rendez-vous sur une plage avant le coucher du soleil. Apportez une source de lumière — bougies, torches (si la loi et la sécurité le permettent), lanternes ou simplement votre téléphone. ",
    participate2BeforeLink:
      "Quand ? Dès qu’une date sera fixée pour Beachnight, elle sera publiée ici quelques semaines à l’avance. Vous pouvez aussi ",
    participate2LinkText: "vous inscrire ici",
    participate2AfterLink: " et nous vous préviendrons.",
    participate3:
      "En attendant ? Parlez de Beachnight à vos collègues, amis et proches et invitez-les à s’inscrire.",
    aboutMeTitle: "À propos de moi",
    aboutMe:
      "Je suis Thomas, un citoyen ordinaire d’Autriche, un petit pays sans accès à la mer en Europe. 🙂 Je m’inquiète pour l’avenir des plages du monde et je voudrais contribuer à les protéger.",
  },
  join: {
    title: "Rejoindre Beachnight",
    subtitle:
      "Inscrivez-vous pour le prochain événement. Les particuliers et les groupes sont les bienvenus.",
    dateNote:
      "Quand ? Dès qu’une date sera fixée pour Beachnight, elle sera publiée ici quelques semaines à l’avance. Vous pouvez aussi vous inscrire ici et nous vous préviendrons.",
    success: "Merci — vous êtes inscrit. Nous vous contacterons à l’adresse e-mail indiquée.",
    fullName: "Nom complet",
    email: "E-mail",
    beach: "Votre plage",
    location: "Votre lieu de résidence",
    beachPlaceholder: "Plage ou littoral",
    locationPlaceholder: "Ville, pays",
    submit: "Envoyer",
    submitting: "Envoi en cours…",
  },
  footer: {
    tagline: "Une nuit. Chaque rivage. Un signal.",
    quickLinks: "Liens utiles",
    updatesBlurb:
      "Pas de liste de diffusion. Utilisez {join} — c’est le seul canal par lequel nous enverrons des nouvelles.",
    updatesLinkLabel: "la page d’inscription",
    shareTitle: "Partagez la nuit",
    shareText:
      "Pour vos photos ou vidéos, utilisez #{tag1} et #{tag2} afin que nous puissions retrouver votre histoire.",
    aiVideoNote:
      "La vidéo d’aperçu de l’événement a été créée avec l’IA pour imaginer à quoi pourrait ressembler Beachnight.",
  },
};
