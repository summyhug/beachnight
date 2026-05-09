import type { Dict } from "../types";

export const ko: Dict = {
  nav: { home: "홈", about: "소개", join: "참여", language: "언어" },
  hero: {
    title: "해변이 빛나는 밤",
    join: "Beachnight 참여",
    learnMore: "더 알아보기",
    noWithout: (region, beach, _deTickerLead) => `${beach} 없이 ${region}도 없다.`,
  },
  home: {
    statsHeading: "숫자로 보는 Beachnight",
    statThreatenedHeadline: "절반",
    statThreatened: "의 세계 해변이 2100년까지 사라질 수 있습니다.",
    statCoastlineHeadline: "모든",
    statCoastlineCountries: "해안이 초대받습니다.",
    statOneNightHeadline: "하룻밤",
    statOneNight: "우리의 해변을 지키기 위해.",
    whatTitle: "Beachnight란",
    whatP1:
      "해변은 경이로운 곳입니다. 땅과 물 사이의 마법 같은 공간입니다. 행복, 즐거움, 평온의 순간을 선사합니다. 많은 이들에게 생계조차 해변에 달려 있습니다.",
    whatP2:
      "그러나 지금처럼이라면 해수면이 오르며 이 특별한 곳들이 하나둘 사라질 것입니다. 기후변화의 결과를 알면서도, 대부분 혹은 모든 해변이 사라진 세상은 상상하기 어렵습니다.",
    whatP3: "",
    whatP4:
      "Beachnight는 시간 속에 멈춘 한 순간을 만들고자 합니다. 전 세계 해안에 사는 이들이 하나가 되는 순간. 세계의 해변에 빛을 밝히는 순간. 그 아름다움을 기억하고, 우리에게 준 행복에 감사하며, 함께 즐겁고 행복한 밤을 보내기 위해서입니다.",
    whatP5:
      "물론 Beachnight는 행동을 촉구하는 메시지이기도 합니다. 온실가스 배출을 크게 줄이고 가능한 한 많은 해변을 구하도록 전 세계 사람들이 나서 달라는 부름입니다.",
    whenLabel: "Beachnight 일정",
    whenDateTbd: "날짜는 추후 공지",
    whenTimeLabel: "해 지기 직전",
    whenTimeNote:
      "해당 해변의 현지 일몰 시간에 맞춰, 아직 밝을 때 도착해 하늘이 어두워질 때 해안을 밝혀주세요.",
    register: "참가 신청",
    readStory: "전체 이야기 읽기",
  },
  about: {
    title: "Beachnight 소개",
    missionTitle: "우리의 미션",
    missionP1:
      "해변은 경이로운 곳입니다. 땅과 물 사이의 마법 같은 공간입니다. 행복, 즐거움, 평온의 순간을 선사합니다. 많은 이들에게 생계조차 해변에 달려 있습니다.",
    missionP2:
      "그러나 지금처럼이라면 해수면이 오르며 이 특별한 곳들이 하나둘 사라질 것입니다. 기후변화의 결과를 알면서도, 대부분 혹은 모든 해변이 사라진 세상은 상상하기 어렵습니다.",
    missionP3: "",
    missionP4:
      "Beachnight는 시간 속에 멈춘 한 순간을 만들고자 합니다. 전 세계 해안에 사는 이들이 하나가 되는 순간. 세계의 해변에 빛을 밝히는 순간. 그 아름다움을 기억하고, 우리에게 준 행복에 감사하며, 함께 즐겁고 행복한 밤을 보내기 위해서입니다.",
    missionP5:
      "물론 Beachnight는 행동을 촉구하는 메시지이기도 합니다. 온실가스 배출을 크게 줄이고 가능한 한 많은 해변을 구하도록 전 세계 사람들이 나서 달라는 부름입니다.",
    missionP6: "",
    participateTitle: "어떻게 참여하나요?",
    participate1:
      "Beachnight는 아주 간단합니다. 해가 지기 전에 해변으로 가세요. 양초, 횃불(현지 법규와 안전 수칙이 허용할 때), 랜턴, 또는 스마트폰 불빛처럼 무언가를 가져오세요. ",
    participate2BeforeLink:
      "언제인가요? 날짜가 정해지면 몇 주 전에 이곳에 공지됩니다. 또한 ",
    participate2LinkText: "여기서 신청",
    participate2AfterLink: "하시면 미리 연락드립니다.",
    participate3:
      "그전에는? 동료, 친구, 가족에게 Beachnight를 알리고 함께 신청하도록 권해 주세요.",
    aboutMeTitle: "저에 대해",
    aboutMe:
      "저는 오스트리아에서 온 평범한 토마스입니다. 유럽의 작은 내륙국이죠. 🙂 세계 해변의 미래가 걱정되며, 지키는 데 조금이나마 보태고 싶습니다.",
  },
  join: {
    title: "Beachnight 참여",
    subtitle: "다음 행사에 등록하세요. 개인과 단체 모두 환영합니다.",
    dateNote:
      "언제인가요? 날짜가 정해지면 몇 주 전에 이곳에 공지됩니다. 여기서 신청하시면 미리 연락드립니다.",
    success: "감사합니다 — 등록이 완료되었습니다. 남겨 주신 이메일로 연락드리겠습니다.",
    fullName: "이름",
    email: "이메일",
    beach: "당신의 해변",
    location: "거주 지역",
    beachPlaceholder: "해변 또는 해안",
    locationPlaceholder: "도시, 국가",
    submit: "제출",
    submitting: "제출 중…",
  },
  footer: {
    tagline: "하룻밤. 모든 해안. 하나의 신호.",
    quickLinks: "바로가기",
    updatesBlurb: "메일링 리스트는 없습니다. {join}을 이용해 주세요. 소식은 그 경로로만 보냅니다.",
    updatesLinkLabel: "참여 페이지",
    shareTitle: "밤을 나누세요",
    shareText: "사진이나 영상을 올릴 때 #{tag1}와 #{tag2}를 사용해 주시면 이야기를 찾기 쉽습니다.",
    aiVideoNote: "행사 미리보기 영상은 Beachnight가 어떤 모습일지 상상하기 위해 AI로 제작되었습니다.",
  },
};
