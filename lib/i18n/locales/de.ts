import type { Dict } from "../types";

export const de: Dict = {
  nav: { home: "Start", about: "Über uns", join: "Mitmachen", language: "Sprache" },
  hero: {
    title: "Keine Welt ohne",
    join: "Beachnight beitreten",
    learnMore: "Mehr erfahren",
    noWithout: (region, beach, deTickerLead) => {
      const lead = deTickerLead === "keine" ? "Keine" : "Kein";
      return `${lead} ${region} ohne ${beach}.`;
    },
  },
  home: {
    statsHeading: "Beachnight in Zahlen",
    statThreatenedHeadline: "Die Hälfte",
    statThreatened: "der Strände der Welt könnte bis 2100 verschwunden sein.",
    statCoastlineHeadline: "Jede",
    statCoastlineCountries: "Küste ist eingeladen.",
    statOneNightHeadline: "1 Nacht",
    statOneNight: "um unsere Strände zu retten.",
    whatTitle: "Was Beachnight ist",
    whatP1:
      "Unsere Strände sind wunderbare Orte. Magische Orte zwischen Land und Wasser. Sie schenken uns Glück, Spaß und Ruhe. Für viele Menschen hängt sogar der Lebensunterhalt von einem Strand ab.",
    whatP2:
      "Doch so wie es heute aussieht, werden diese außergewöhnlichen Orte mit steigendem Meeresspiegel einer nach dem anderen verschwinden. Auch wenn wir uns dieser Folge des Klimawandels bewusst sind, ist es kaum vorstellbar, in einer Welt zu leben, in der die meisten oder alle Strände einfach verschwunden sind.",
    whatP3: "",
    whatP4:
      "Beachnight soll einen Moment in der Zeit einfrieren. Einen Moment der Solidarität für Menschen an Küsten auf der ganzen Welt. Einen Moment, in dem wir die Strände der Welt erleuchten. Um ihre Schönheit zu würdigen, uns für so viel Glück zu bedanken und gemeinsam eine fröhliche, glückliche Nacht zu erleben.",
    whatP5:
      "Natürlich ist Beachnight auch ein Aufruf zum Handeln. Ein Aufruf, Menschen weltweit zu motivieren, etwas zu bewirken, Treibhausgasemissionen stark zu senken und so viele Strände wie möglich zu retten.",
    whenLabel: "Wann ist Beachnight",
    whenDateTbd: "Datum wird bekannt gegeben",
    whenTimeLabel: "Kurz vor Sonnenuntergang",
    whenTimeNote:
      "Lokaler Sonnenuntergang an Ihrem Strand — kommen Sie, solange es noch hell ist, und erleuchten Sie dann die Küste in der Dämmerung.",
    register: "Zur Teilnahme anmelden",
    readStory: "Die ganze Geschichte lesen",
  },
  about: {
    title: "Über Beachnight",
    missionTitle: "Unsere Mission",
    missionP1:
      "Unsere Strände sind wunderbare Orte. Magische Orte zwischen Land und Wasser. Sie schenken uns Glück, Spaß und Ruhe. Für viele Menschen hängt sogar der Lebensunterhalt von einem Strand ab.",
    missionP2:
      "Doch so wie es heute aussieht, werden diese außergewöhnlichen Orte mit steigendem Meeresspiegel einer nach dem anderen verschwinden. Auch wenn wir uns dieser Folge des Klimawandels bewusst sind, ist es kaum vorstellbar, in einer Welt zu leben, in der die meisten oder alle Strände einfach verschwunden sind.",
    missionP3: "",
    missionP4:
      "Beachnight soll einen Moment in der Zeit einfrieren. Einen Moment der Solidarität für Menschen an Küsten auf der ganzen Welt. Einen Moment, in dem wir die Strände der Welt erleuchten. Um ihre Schönheit zu würdigen, uns für so viel Glück zu bedanken und gemeinsam eine fröhliche, glückliche Nacht zu erleben.",
    missionP5:
      "Natürlich ist Beachnight auch ein Aufruf zum Handeln. Ein Aufruf, Menschen weltweit zu motivieren, etwas zu bewirken, Treibhausgasemissionen stark zu senken und so viele Strände wie möglich zu retten.",
    missionP6: "",
    participateTitle: "Wie kann ich mitmachen?",
    participate1:
      "Beachnight ist ganz einfach: Gehen Sie vor Sonnenuntergang an einen Strand. Bringen Sie etwas zum Leuchten mit — Kerzen, Fackeln (wenn Gesetze und Sicherheit es erlauben), Laternen oder einfach Ihr Handy. ",
    participate2BeforeLink:
      "Wann? Sobald ein Termin für Beachnight feststeht, veröffentlichen wir ihn hier einige Wochen im Voraus. Sie können sich auch ",
    participate2LinkText: "hier anmelden",
    participate2AfterLink: ", dann informieren wir Sie aktiv.",
    participate3:
      "Bis dahin? Erzählen Sie Kolleginnen, Freundinnen und Familie von Beachnight und laden Sie sie ebenfalls zur Anmeldung ein.",
    aboutMeTitle: "Über mich",
    aboutMe:
      "Ich bin Thomas, ein ganz normaler Mensch aus Österreich, einem kleinen Binnenland in Europa. 🙂 Mir liegt die Zukunft der Strände dieser Welt am Herzen; ich möchte einen Beitrag leisten, sie zu retten.",
  },
  join: {
    title: "Beachnight beitreten",
    subtitle:
      "Melden Sie sich für die nächste Veranstaltung an. Einzelpersonen und Gruppen sind willkommen.",
    dateNote:
      "Wann? Sobald ein Termin für Beachnight feststeht, veröffentlichen wir ihn hier einige Wochen im Voraus. Sie können sich auch hier anmelden; dann informieren wir Sie aktiv.",
    success:
      "Danke — Sie sind registriert. Wir melden uns an der von Ihnen angegebenen E-Mail-Adresse.",
    fullName: "Vollständiger Name",
    email: "E-Mail",
    beach: "Ihr Strand",
    location: "Wo Sie leben",
    beachPlaceholder: "Strand oder Küste",
    locationPlaceholder: "Stadt, Land",
    submit: "Absenden",
    submitting: "Wird gesendet…",
  },
  footer: {
    tagline: "Eine Nacht. Jede Küste. Ein Signal.",
    quickLinks: "Schnellzugriff",
    updatesBlurb:
      "Kein Newsletter. Nutzen Sie {join} — nur dort erhalten Sie Updates von uns.",
    updatesLinkLabel: "die Mitmach-Seite",
    shareTitle: "Teilen Sie die Nacht",
    shareText:
      "Wenn Sie Fotos oder Videos posten, nutzen Sie #{tag1} und #{tag2}, damit wir Ihre Geschichte finden können.",
    aiVideoNote:
      "Das Veranstaltungs-Preview-Video wurde mit KI erstellt, um zu zeigen, wie Beachnight aussehen könnte.",
  },
};
