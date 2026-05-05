export type Dict = {
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
    statOneNightHeadline: string;
    statOneNight: string;
    whatTitle: string;
    whatP1: string;
    whatP2: string;
    whatP3: string;
    whatP4: string;
    whatP5: string;
    whenLabel: string;
    whenDateTbd: string;
    whenTimeLabel: string;
    whenTimeNote: string;
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
