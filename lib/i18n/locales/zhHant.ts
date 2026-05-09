import type { Dict } from "../types";

export const zhHant: Dict = {
  nav: { home: "首頁", about: "關於", join: "參與", language: "語言" },
  hero: {
    title: "世界離不開",
    join: "加入 Beachnight",
    learnMore: "了解更多",
    noWithout: (region, beach, _deTickerLead) => `沒有${beach}，就沒有${region}。`,
  },
  home: {
    statsHeading: "Beachnight 數據一覽",
    statThreatenedHeadline: "一半",
    statThreatened: "的世界海灘可能在 2100 年前消失。",
    statCoastlineHeadline: "每一片",
    statCoastlineCountries: "海岸都受到邀請。",
    statOneNightHeadline: "一夜",
    statOneNight: "為拯救我們的海灘。",
    whatTitle: "什麼是 Beachnight",
    whatP1:
      "海灘是美妙的地方，是陸地與海水之間神奇的交界。它們帶給我們快樂、嬉戲與寧靜。對許多人來說，生計也離不開海灘。",
    whatP2:
      "然而，按今天的趨勢，隨著海平面上升，這些非凡之地會一個接一個地消失。我們明知氣候變遷會帶來這樣的後果，卻很難想像生活在一個大多數甚至全部海灘都已消失的世界裡。",
    whatP3: "",
    whatP4:
      "Beachnight 希望凝固一個時刻：一個屬於全世界沿海居民的團結時刻；一個我們共同點亮世界海灘的時刻——欣賞它們的美，感謝它們帶給我們的幸福，並一起度過歡樂的夜晚。",
    whatP5:
      "當然，Beachnight 也是行動號召，激勵世界各地的人們有所作為，大幅減少溫室氣體排放，盡可能挽救更多海灘。",
    whenLabel: "Beachnight 何時舉行",
    whenDateTbd: "日期待公布",
    whenTimeLabel: "日落前",
    whenTimeNote: "依你所在海灘的當地日落時間參加——天還亮時抵達，暮色降臨時點亮海岸。",
    register: "登記參與",
    readStory: "閱讀完整故事",
  },
  about: {
    title: "關於 Beachnight",
    missionTitle: "我們的使命",
    missionP1:
      "海灘是美妙的地方，是陸地與海水之間神奇的交界。它們帶給我們快樂、嬉戲與寧靜。對許多人來說，生計也離不開海灘。",
    missionP2:
      "然而，按今天的趨勢，隨著海平面上升，這些非凡之地會一個接一個地消失。我們明知氣候變遷會帶來這樣的後果，卻很難想像生活在一個大多數甚至全部海灘都已消失的世界裡。",
    missionP3: "",
    missionP4:
      "Beachnight 希望凝固一個時刻：一個屬於全世界沿海居民的團結時刻；一個我們共同點亮世界海灘的時刻——欣賞它們的美，感謝它們帶給我們的幸福，並一起度過歡樂的夜晚。",
    missionP5:
      "當然，Beachnight 也是行動號召，激勵世界各地的人們有所作為，大幅減少溫室氣體排放，盡可能挽救更多海灘。",
    missionP6: "",
    participateTitle: "如何參與？",
    participate1:
      "Beachnight 很簡單：在日落到來前來到海灘。帶上可以照明的東西——蠟燭、火把（須符合當地法律與安全規定）、燈籠，或用手機燈光也可以。",
    participate2BeforeLink:
      "什麼時候舉行？一旦確定 Beachnight 的日期，我們會提前幾週在此公布。您也可以",
    participate2LinkText: "在此登記",
    participate2AfterLink: "，我們會主動通知您。",
    participate3: "在那之前呢？請告訴同事、朋友和家人 Beachnight，並邀請他們一起登記。",
    aboutMeTitle: "關於我",
    aboutMe:
      "我是 Thomas，來自歐洲內陸小國奧地利的普通人。 🙂 我擔心世界海灘的未來，希望能為拯救它們盡一份力。",
  },
  join: {
    title: "加入 Beachnight",
    subtitle: "登記參加下一次活動。歡迎個人與團體。",
    dateNote:
      "什麼時候舉行？一旦確定 Beachnight 的日期，我們會提前幾週在此公布。您也可以在此登記，我們會主動通知您。",
    success: "謝謝——您已登記。我們會透過您提供的電子郵件與您聯絡。",
    fullName: "姓名",
    email: "電子郵件",
    beach: "您的海灘",
    location: "您所在的地區",
    beachPlaceholder: "海灘或海岸線",
    locationPlaceholder: "城市、國家",
    submit: "送出",
    submitting: "送出中…",
  },
  footer: {
    tagline: "一夜。每一片海岸。同一個訊號。",
    quickLinks: "快速連結",
    updatesBlurb: "沒有郵件清單。請使用{join}——這是我們發送更新的唯一方式。",
    updatesLinkLabel: "登記頁面",
    shareTitle: "分享這一夜",
    shareText: "發布照片或影片時，請使用 #{tag1} 與 #{tag2}，方便我們看到您的故事。",
    aiVideoNote: "活動預覽影片由 AI 生成，以想像 Beachnight 可能的樣貌。",
  },
};
