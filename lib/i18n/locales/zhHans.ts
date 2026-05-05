import type { Dict } from "../types";

export const zhHans: Dict = {
  nav: { home: "首页", about: "关于", join: "参与", language: "语言" },
  hero: {
    title: "世界离不开",
    join: "加入 Beachnight",
    learnMore: "了解更多",
    noWithout: (region, beach) => `没有${beach}，就没有${region}。`,
  },
  home: {
    statsHeading: "Beachnight 数据一览",
    statThreatenedHeadline: "一半",
    statThreatened: "的世界海滩可能在 2100 年前消失。",
    statCoastlineHeadline: "每一片",
    statCoastlineCountries: "海岸都受到邀请。",
    statOneNightHeadline: "一夜",
    statOneNight: "为拯救我们的海滩。",
    whatTitle: "什么是 Beachnight",
    whatP1:
      "海滩是美妙的地方，是陆地与海水之间神奇的交界。它们带给我们快乐、嬉戏与宁静。对许多人来说，生计也离不开海滩。",
    whatP2:
      "然而，按今天的趋势，随着海平面上升，这些非凡之地会一个接一个地消失。我们明知气候变化会带来这样的后果，却很难想象生活在一个大多数甚至全部海滩都已消失的世界里。",
    whatP3: "",
    whatP4:
      "Beachnight 希望凝固一个时刻：一个属于全世界沿海居民的团结时刻；一个我们共同点亮世界海滩的时刻——欣赏它们的美，感谢它们带给我们的幸福，并一起度过欢乐的夜晚。",
    whatP5:
      "当然，Beachnight 也是行动号召，激励世界各地的人们有所作为，大幅减少温室气体排放，尽可能挽救更多海滩。",
    whenLabel: "Beachnight 何时举行",
    whenDateTbd: "日期待公布",
    whenTimeLabel: "日落前",
    whenTimeNote: "按你所在海滩的当地日落时间参加——天还亮时到达，暮色降临时点亮海岸。",
    register: "登记参与",
    readStory: "阅读完整故事",
  },
  about: {
    title: "关于 Beachnight",
    missionTitle: "我们的使命",
    missionP1:
      "海滩是美妙的地方，是陆地与海水之间神奇的交界。它们带给我们快乐、嬉戏与宁静。对许多人来说，生计也离不开海滩。",
    missionP2:
      "然而，按今天的趋势，随着海平面上升，这些非凡之地会一个接一个地消失。我们明知气候变化会带来这样的后果，却很难想象生活在一个大多数甚至全部海滩都已消失的世界里。",
    missionP3: "",
    missionP4:
      "Beachnight 希望凝固一个时刻：一个属于全世界沿海居民的团结时刻；一个我们共同点亮世界海滩的时刻——欣赏它们的美，感谢它们带给我们的幸福，并一起度过欢乐的夜晚。",
    missionP5:
      "当然，Beachnight 也是行动号召，激励世界各地的人们有所作为，大幅减少温室气体排放，尽可能挽救更多海滩。",
    missionP6: "",
    participateTitle: "如何参与？",
    participate1:
      "Beachnight 很简单：在日落前来到海滩。带上可以照明的东西——蜡烛、火把（须符合当地法律与安全规定）、灯笼，或用手机灯光也可以。",
    participate2BeforeLink:
      "什么时候举行？一旦确定 Beachnight 的日期，我们会提前几周在此公布。您也可以",
    participate2LinkText: "在此登记",
    participate2AfterLink: "，我们会主动通知您。",
    participate3: "在那之前呢？请告诉同事、朋友和家人 Beachnight，并邀请他们一起登记。",
    aboutMeTitle: "关于我",
    aboutMe:
      "我是 Thomas，来自欧洲内陆小国奥地利的普通人。 🙂 我担心世界海滩的未来，希望能为拯救它们尽一份力。",
  },
  join: {
    title: "加入 Beachnight",
    subtitle: "登记参加下一次活动。欢迎个人与团体。",
    dateNote:
      "什么时候举行？一旦确定 Beachnight 的日期，我们会提前几周在此公布。您也可以在此登记，我们会主动通知您。",
    success: "谢谢——您已登记。我们会通过您提供的邮箱与您联系。",
    fullName: "姓名",
    email: "电子邮箱",
    beach: "您的海滩",
    location: "您所在的地区",
    beachPlaceholder: "海滩或海岸线",
    locationPlaceholder: "城市、国家",
    submit: "提交",
    submitting: "提交中…",
  },
  footer: {
    tagline: "一夜。每一片海岸。同一个信号。",
    quickLinks: "快速链接",
    updatesBlurb: "没有邮件列表。请使用{join}——这是我们发送更新的唯一方式。",
    updatesLinkLabel: "登记页面",
    shareTitle: "分享这一夜",
    shareText: "发布照片或视频时，请使用 #{tag1} 和 #{tag2}，方便我们看到您的故事。",
    aiVideoNote: "活动预览视频由 AI 生成，以想象 Beachnight 可能的样貌。",
  },
};
