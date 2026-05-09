import type { Dict } from "../types";

export const pt: Dict = {
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
    noWithout: (region, beach, _deTickerLead) => `Não há ${region} sem ${beach}.`,
  },
  home: {
    statsHeading: "Beachnight em números",
    statThreatenedHeadline: "Metade",
    statThreatened: "das praias do mundo pode desaparecer até 2100.",
    statCoastlineHeadline: "Cada",
    statCoastlineCountries: "litoral é bem-vindo.",
    statOneNightHeadline: "1 noite",
    statOneNight: "para salvar as nossas praias.",
    whatTitle: "O que é o Beachnight",
    whatP1:
      "Nossas praias são lugares maravilhosos. São lugares mágicos entre a terra e a água. Elas nos dão momentos de felicidade, diversão e paz. Para muitas pessoas, até os seus meios de vida dependem de uma praia.",
    whatP2:
      "No entanto, como parece hoje, esses lugares extraordinários vão desaparecer um a um à medida que o nível do mar sobe. Mesmo sabendo desta consequência das alterações climáticas, é quase impensável imaginar um mundo em que a maioria ou todas as praias simplesmente desapareçam.",
    whatP3: "",
    whatP4:
      "O Beachnight pretende criar um momento congelado no tempo. Um momento de união para pessoas que vivem nas costas de todo o mundo. Um momento em que iluminamos as praias do mundo. Para apreciar a sua beleza, agradecer por nos darem tanta felicidade e também para passarmos uma noite alegre e feliz juntos.",
    whatP5:
      "Claro que o Beachnight também é um chamado à ação. Um chamado para motivar pessoas em todo o mundo a fazer a diferença, a contribuir para reduzir drasticamente as emissões de gases de efeito estufa e a salvar o máximo possível de praias.",
    whenLabel: "Quando é o Beachnight",
    whenDateTbd: "Data a anunciar",
    whenTimeLabel: "Logo antes do pôr do sol",
    whenTimeNote:
      "Pôr do sol local na sua praia — chegue enquanto ainda há luz e ilumine a costa enquanto o céu escurece.",
    register: "Inscreva-se para participar",
    readStory: "Ler a história completa",
  },
  about: {
    title: "Sobre o Beachnight",
    missionTitle: "Nossa missão",
    missionP1:
      "Nossas praias são lugares maravilhosos. São lugares mágicos entre a terra e a água. Elas nos dão momentos de felicidade, diversão e paz. Para muitas pessoas, até os seus meios de vida dependem de uma praia.",
    missionP2:
      "No entanto, como parece hoje, esses lugares extraordinários vão desaparecer um a um à medida que o nível do mar sobe. Mesmo sabendo desta consequência das alterações climáticas, é quase impensável imaginar um mundo em que a maioria ou todas as praias simplesmente desapareçam.",
    missionP3: "",
    missionP4:
      "O Beachnight pretende criar um momento congelado no tempo. Um momento de união para pessoas que vivem nas costas de todo o mundo. Um momento em que iluminamos as praias do mundo. Para apreciar a sua beleza, agradecer por nos darem tanta felicidade e também para passarmos uma noite alegre e feliz juntos.",
    missionP5:
      "Claro que o Beachnight também é um chamado à ação. Um chamado para motivar pessoas em todo o mundo a fazer a diferença, a contribuir para reduzir drasticamente as emissões de gases de efeito estufa e a salvar o máximo possível de praias.",
    missionP6: "",
    participateTitle: "Como posso participar?",
    participate1:
      "O Beachnight é bem simples: você só vai a uma praia antes do pôr do sol. Leve algo para iluminar, como velas, tochas (se as leis e regulamentos de segurança locais permitirem), lanternas ou simplesmente o seu telemóvel. ",
    participate2BeforeLink:
      "Quando será? Assim que houver uma data para o Beachnight, ela será publicada aqui algumas semanas antes. Você também pode ",
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
};
