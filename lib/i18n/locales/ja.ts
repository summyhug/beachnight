import type { Dict } from "../types";

export const ja: Dict = {
  nav: { home: "ホーム", about: "概要", join: "参加", language: "言語" },
  hero: {
    title: "世界なき",
    join: "Beachnight に参加",
    learnMore: "詳しく見る",
    noWithout: (region, beach, _deTickerLead) => `${beach}のない${region}はない。`,
  },
  home: {
    statsHeading: "数字で見る Beachnight",
    statThreatenedHeadline: "半数",
    statThreatened: "の世界の砂浜が2100年までに失われる可能性があります。",
    statCoastlineHeadline: "どの",
    statCoastlineCountries: "海岸も歓迎です。",
    statOneNightHeadline: "一夜",
    statOneNight: "で砂浜を守る。",
    whatTitle: "Beachnight とは",
    whatP1:
      "砂浜はすばらしい場所です。陸と水のあいだにある、魔法のような場所。幸福、遊び、そして安らぎの時間をくれます。多くの人にとって、生活そのものが砂浜にかかっています。",
    whatP2:
      "それでも今日のままでは、海面が上がるにつれ、これらのかけがえのない場所は一つずつ消えていきます。気候変動の帰結として知っていても、砂浜のほとんどやすべてが消えた世界で生きることは考えにくいことです。",
    whatP3: "",
    whatP4:
      "Beachnight は、時間のなかにとどまる一瞬をつくりたいと考えています。世界中の海岸に暮らす人々の団結の瞬間。世界の砂浜を照らす瞬間。その美しさに想いを馳せ、これほどの幸福をくれたことへの感謝、そしてともに楽しく幸せな夜を過ごすために。",
    whatP5:
      "もちろん Beachnight は行動を呼びかけるものでもあります。温室効果ガス排出を大きく減らし、できる限り多くの砂浜を救うために、世界中の人々に力を合わせてほしい、という呼びかけです。",
    whenLabel: "Beachnight はいつ",
    whenDateTbd: "日程は後日発表",
    whenTimeLabel: "日没直前",
    whenTimeNote:
      "あなたの海辺での日没時刻に合わせて、まだ明るいうちに到着し、空が暮れていく中で海岸を照らしてください。",
    register: "参加登録",
    readStory: "ストーリーを読む",
  },
  about: {
    title: "Beachnight について",
    missionTitle: "私たちの使命",
    missionP1:
      "砂浜はすばらしい場所です。陸と水のあいだにある、魔法のような場所。幸福、遊び、そして安らぎの時間をくれます。多くの人にとって、生活そのものが砂浜にかかっています。",
    missionP2:
      "それでも今日のままでは、海面が上がるにつれ、これらのかけがえのない場所は一つずつ消えていきます。気候変動の帰結として知っていても、砂浜のほとんどやすべてが消えた世界で生きることは考えにくいことです。",
    missionP3: "",
    missionP4:
      "Beachnight は、時間のなかにとどまる一瞬をつくりたいと考えています。世界中の海岸に暮らす人々の団結の瞬間。世界の砂浜を照らす瞬間。その美しさに想いを馳せ、これほどの幸福をくれたことへの感謝、そしてともに楽しく幸せな夜を過ごすために。",
    missionP5:
      "もちろん Beachnight は行動を呼びかけるものでもあります。温室効果ガス排出を大きく減らし、できる限り多くの砂浜を救うために、世界中の人々に力を合わせてほしい、という呼びかけです。",
    missionP6: "",
    participateTitle: "どう参加できますか？",
    participate1:
      "Beachnight はとてもシンプルです。日没前に砂浜へ行きます。ろうそく、たいまつ（現地の法律と安全上許される場合）、ランタン、あるいはスマートフォンの光など、照らすものを持ってきてください。",
    participate2BeforeLink:
      "いつ開催？ 日程が決まり次第、数週間前にここでお知らせします。また",
    participate2LinkText: "こちらから登録",
    participate2AfterLink: "いただくと、こちらからご連絡します。",
    participate3:
      "それまでにできること？ 同僚、友人、家族に Beachnight を伝え、一緒に登録してもらいましょう。",
    aboutMeTitle: "自己紹介",
    aboutMe:
      "オーストリアというヨーロッパの小さな内陸国から来た、ごく普通のトーマスです。 🙂 世界の砂浜の未来が心配で、守るために少しでも役立ちたいと思っています。",
  },
  join: {
    title: "Beachnight に参加",
    subtitle: "次のイベントに登録してください。個人・グループどちらも歓迎です。",
    dateNote:
      "いつ開催？ 日程が決まり次第、数週間前にここでお知らせします。こちらから登録いただいても、こちらからご連絡します。",
    success: "ありがとうございます。登録を受け付けました。ご登録のメールアドレスにご連絡します。",
    fullName: "氏名",
    email: "メール",
    beach: "あなたの砂浜",
    location: "お住まいの地域",
    beachPlaceholder: "砂浜または海岸",
    locationPlaceholder: "市、国",
    submit: "送信",
    submitting: "送信中…",
  },
  footer: {
    tagline: "一夜。すべての海岸。ひとつの合図。",
    quickLinks: "クイックリンク",
    updatesBlurb: "メーリングリストはありません。{join}をご利用ください。更新はそこからだけお送りします。",
    updatesLinkLabel: "参加登録ページ",
    shareTitle: "夜をシェア",
    shareText: "写真や動画を投稿するときは #{tag1} と #{tag2} を付けてください。みなさんのストーリーを見つけやすくなります。",
    aiVideoNote: "イベントのプレビュー映像は、Beachnight がどのように見えるかを想像してもらうために AI で作成しました。",
  },
};
