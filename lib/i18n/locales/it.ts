import type { Dict } from "../types";

export const it: Dict = {
  nav: { home: "Home", about: "Chi siamo", join: "Partecipa", language: "Lingua" },
  hero: {
    title: "Nessun mondo senza",
    join: "Unisciti a Beachnight",
    learnMore: "Scopri di più",
    noWithout: (region, beach) => `Non c'è ${region} senza ${beach}.`,
  },
  home: {
    statsHeading: "Beachnight in numeri",
    statThreatenedHeadline: "Metà",
    statThreatened: "delle spiagge del mondo potrebbe scomparire entro il 2100.",
    statCoastlineHeadline: "Ogni",
    statCoastlineCountries: "costa è invitata.",
    statOneNightHeadline: "1 notte",
    statOneNight: "per salvare le nostre spiagge.",
    whatTitle: "Cos’è Beachnight",
    whatP1:
      "Le nostre spiagge sono luoghi meravigliosi. Luoghi magici tra terra e mare. Ci regalano momenti di felicità, divertimento e pace. Per molte persone, persino il sostentamento dipende da una spiaggia.",
    whatP2:
      "Eppure, così com’è oggi, questi luoghi straordinari scompariranno uno dopo l’altro con l’innalzamento del livello del mare. Anche sapendo questa conseguenza dei cambiamenti climatici, è quasi impensabile vivere in un mondo in cui la maggior parte — o tutte — le spiagge siano scomparse.",
    whatP3: "",
    whatP4:
      "Beachnight intende creare un momento sospeso nel tempo. Un momento di unità per chi vive sulle coste di tutto il mondo. Un momento in cui illuminiamo le spiagge del mondo. Per apprezzarne la bellezza, ringraziarle per tutta la felicità che ci donano e trascorrere insieme una notte gioiosa e serena.",
    whatP5:
      "Naturalmente Beachnight è anche un appello all’azione. Un invito a motivare persone ovunque a fare la differenza, a contribuire a ridurre fortemente le emissioni di gas serra e a salvare il più possibile le spiagge.",
    whenLabel: "Quando è Beachnight",
    whenDateTbd: "Data da annunciare",
    whenTimeLabel: "Poco prima del tramonto",
    whenTimeNote:
      "Tramonto locale sulla tua spiaggia: arriva finché c’è ancora luce, poi illumina la costa mentre il cielo si scurisce.",
    register: "Registrati per partecipare",
    readStory: "Leggi la storia completa",
  },
  about: {
    title: "Su Beachnight",
    missionTitle: "La nostra missione",
    missionP1:
      "Le nostre spiagge sono luoghi meravigliosi. Luoghi magici tra terra e mare. Ci regalano momenti di felicità, divertimento e pace. Per molte persone, persino il sostentamento dipende da una spiaggia.",
    missionP2:
      "Eppure, così com’è oggi, questi luoghi straordinari scompariranno uno dopo l’altro con l’innalzamento del livello del mare. Anche sapendo questa conseguenza dei cambiamenti climatici, è quasi impensabile vivere in un mondo in cui la maggior parte — o tutte — le spiagge siano scomparse.",
    missionP3: "",
    missionP4:
      "Beachnight intende creare un momento sospeso nel tempo. Un momento di unità per chi vive sulle coste di tutto il mondo. Un momento in cui illuminiamo le spiagge del mondo. Per apprezzarne la bellezza, ringraziarle per tutta la felicità che ci donano e trascorrere insieme una notte gioiosa e serena.",
    missionP5:
      "Naturalmente Beachnight è anche un appello all’azione. Un invito a motivare persone ovunque a fare la differenza, a contribuire a ridurre fortemente le emissioni di gas serra e a salvare il più possibile le spiagge.",
    missionP6: "",
    participateTitle: "Come posso partecipare?",
    participate1:
      "Beachnight è semplice: vai in spiaggia prima del tramonto. Porta qualcosa per illuminare — candele, fiaccole (se leggi e sicurezza lo consentono), lanterne o semplicemente il telefono. ",
    participate2BeforeLink:
      "Quando? Appena ci sarà una data per Beachnight, la pubblicheremo qui con qualche settimana di anticipo. Puoi anche ",
    participate2LinkText: "iscriverti qui",
    participate2AfterLink: " e ti avviseremo in anticipo.",
    participate3:
      "Nel frattempo? Parla di Beachnight a colleghi, amici e famiglia e invitali a iscriversi.",
    aboutMeTitle: "Su di me",
    aboutMe:
      "Sono Thomas, una persona comune dall’Austria, un piccolo paese senza mare in Europa. 🙂 Mi preoccupa il futuro delle spiagge del mondo e vorrei dare il mio contributo per salvarle.",
  },
  join: {
    title: "Unisciti a Beachnight",
    subtitle:
      "Registrati per il prossimo evento. Sono benvenuti singoli partecipanti e gruppi.",
    dateNote:
      "Quando? Appena ci sarà una data per Beachnight, la pubblicheremo qui con qualche settimana di anticipo. Puoi anche iscriverti qui e ti avviseremo in anticipo.",
    success: "Grazie — sei registrato. Ti contatteremo all’indirizzo e-mail che hai indicato.",
    fullName: "Nome e cognome",
    email: "E-mail",
    beach: "La tua spiaggia",
    location: "Dove vivi",
    beachPlaceholder: "Spiaggia o costa",
    locationPlaceholder: "Città, paese",
    submit: "Invia",
    submitting: "Invio in corso…",
  },
  footer: {
    tagline: "Una notte. Ogni riva. Un segnale.",
    quickLinks: "Link rapidi",
    updatesBlurb:
      "Nessuna mailing list. Usa {join}: è l’unico modo in cui invieremo aggiornamenti.",
    updatesLinkLabel: "la pagina di iscrizione",
    shareTitle: "Condividi la notte",
    shareText:
      "Quando pubblichi foto o video, usa #{tag1} e #{tag2} così possiamo trovare la tua storia.",
    aiVideoNote:
      "Il video di anteprima dell’evento è stato realizzato con l’IA per immaginare come potrebbe apparire Beachnight.",
  },
};
