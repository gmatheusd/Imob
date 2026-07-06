/**
 * Conteúdo detalhado de cada empreendimento (páginas internas).
 * Fonte: books de marketing MAC (ver CONTEUDO-EMPREENDIMENTOS.md).
 * Preenchido por partes - slugs sem detalhe exibem uma página resumida.
 */

export type Tipologia = {
  dorms: string;
  area: string;
  vagas?: string;
  unidades?: string;
};

export type LazerGrupo = {
  title: string;
  items: string[];
};

export type PontoLocalizacao = {
  label: string;
  time?: string;
};

export type FichaItem = {
  label: string;
  value: string;
};

export type Diferencial = {
  title: string;
  description: string;
};

export type ImagemLegenda = {
  src: string;
  caption?: string;
  dorms?: string;
  area?: string;
  vagas?: string;
};

export type EmpreendimentoDetalhe = {
  /** Imagem de fundo do hero da página interna. */
  heroImage: string;
  /** Imagem vertical de apoio (conceito/ficha). */
  conceitoImage: string;
  /** Parágrafos de conceito/posicionamento. */
  conceito: string[];
  fichaTecnica: FichaItem[];
  arquitetos: FichaItem[];
  tipologias: Tipologia[];
  lazer: LazerGrupo[];
  diferenciais: Diferencial[];
  localizacao: {
    mapImage?: string;
    pontos: PontoLocalizacao[];
  };
  galeria: ImagemLegenda[];
  plantas: ImagemLegenda[];
  /** Caminho do book em public/assets/pdfs/ (sem encode). */
  pdf?: string;
};

const DETALHES: Record<string, EmpreendimentoDetalhe> = {
  "vila-clementino": {
    heroImage: "/assets/img/empreendimentos/mac-clementino/16.jpg",
    conceitoImage: "/assets/img/empreendimentos/mac-clementino/1.jpg",
    conceito: [
      "Atemporalidade e sofisticação, concebido para ser um legado. O empreendimento em Vila Clementino traz toda a excelência lapidada à mão para criar um novo ícone, a poucos minutos do Parque Ibirapuera.",
      "Um projeto 100% residencial, com a natureza integrada ao lazer e a rara privacidade de oferecer apenas suítes em todos os apartamentos.",
    ],
    fichaTecnica: [
      { label: "Terreno", value: "2.354 m²" },
      { label: "Torre", value: "1 torre" },
      { label: "Pavimentos", value: "25" },
      { label: "Elevadores", value: "6" },
      { label: "Vagas", value: "180" },
    ],
    arquitetos: [
      { label: "Arquitetura", value: "LE Arquitetos" },
      { label: "Interiores", value: "Bárbara & Purchio" },
    ],
    tipologias: [
      { dorms: "2 suítes", area: "81 m²", vagas: "1 vaga" },
      { dorms: "3 suítes", area: "120 a 121 m²", vagas: "2 vagas" },
      { dorms: "4 suítes", area: "157 m²", vagas: "2 vagas" },
      { dorms: "3 suítes · Giardino", area: "133 m²", vagas: "2 vagas" },
      { dorms: "4 suítes · Giardino", area: "169 m²", vagas: "2 vagas" },
    ],
    lazer: [
      {
        title: "Lazer no térreo elevado",
        items: [
          "Piscina adulto com raia de 25m",
          "Piscina infantil",
          "Solário",
          "Gourmet & Spa exclusivo",
          "Fitness",
          "Ice Recovery",
          "Salão de festas",
          "Festas gourmet com terraço",
          "Coworking",
          "Sala de reunião",
          "Espaço beauty",
          "Massagem",
          "Brinquedoteca",
          "Playground",
          "Quadra recreativa",
        ],
      },
      {
        title: "Serviços e conveniência",
        items: [
          "Delivery",
          "Bicicletário",
          "Pet place",
          "Pet spa",
          "Mini market",
        ],
      },
    ],
    diferenciais: [
      {
        title: "Gourmet & Spa exclusivo",
        description:
          "Deck, spa com hidromassagem e churrasqueira a gás integrados ao paisagismo - uma exclusividade do projeto.",
      },
      {
        title: "Ice Recovery",
        description:
          "Banheira de água gelada para recuperação muscular, proposta pioneira para quem treina.",
      },
      {
        title: "Piscina raia de 25m",
        description:
          "Piscina adulto com raia de 25m, piscina infantil e solário permeados pelo paisagismo natural.",
      },
      {
        title: "100% residencial, só suítes",
        description:
          "Privacidade e exclusividade reais: apenas suítes em todos os apartamentos do edifício.",
      },
    ],
    localizacao: {
      mapImage: "/assets/img/empreendimentos/mac-clementino/localizacao.jpg",
      pontos: [
        { label: "Rua Domingos de Morais", time: "3 min" },
        { label: "Estação Santa Cruz", time: "4 min" },
        { label: "Av. 23 de Maio", time: "4 min" },
        { label: "Colégio Arquidiocesano", time: "5 min" },
        { label: "Estação Hospital São Paulo", time: "6 min" },
        { label: "Parque das Bicicletas", time: "7 min" },
        { label: "Hospital Santa Cruz", time: "8 min" },
        { label: "Parque Ibirapuera", time: "12 min" },
      ],
    },
    galeria: [
      { src: "/assets/img/empreendimentos/mac-clementino/3.jpg", caption: "Lobby pé-direito duplo" },
      { src: "/assets/img/empreendimentos/mac-clementino/16.jpg", caption: "Gourmet & Spa exclusivo" },
      { src: "/assets/img/empreendimentos/mac-clementino/11.jpg", caption: "Festas gourmet" },
      { src: "/assets/img/empreendimentos/mac-clementino/9.jpg", caption: "Lounge social" },
      { src: "/assets/img/empreendimentos/mac-clementino/banner.jpg", caption: "Piscina e solário" },
      { src: "/assets/img/empreendimentos/mac-clementino/7.jpg", caption: "Pet spa" },
      { src: "/assets/img/empreendimentos/mac-clementino/2.jpg", caption: "Fachada ao entardecer" },
      { src: "/assets/img/empreendimentos/mac-clementino/4.jpg", caption: "Delivery" },
    ],
    plantas: [
      { src: "/assets/img/empreendimentos/mac-clementino/planta-1.jpg", dorms: "2 suítes", area: "81 m²", vagas: "1 vaga" },
      { src: "/assets/img/empreendimentos/mac-clementino/planta-2.jpg", dorms: "3 suítes", area: "120 a 121 m²", vagas: "2 vagas" },
      { src: "/assets/img/empreendimentos/mac-clementino/planta-3.jpg", dorms: "4 suítes", area: "157 m²", vagas: "2 vagas" },
      { src: "/assets/img/empreendimentos/mac-clementino/planta-4.jpg", dorms: "3 suítes · Giardino", area: "133 m²", vagas: "2 vagas" },
      { src: "/assets/img/empreendimentos/mac-clementino/planta-5.jpg", dorms: "4 suítes · Giardino", area: "169 m²", vagas: "2 vagas" },
      { src: "/assets/img/empreendimentos/mac-clementino/planta-6.jpg", dorms: "4 suítes · Giardino", area: "169 m²", vagas: "2 vagas" },
    ],
    pdf: "/assets/pdfs/Book-Digital-RA84-MAC-Vl-Clementino-Marketing-2025-08-15.pdf",
  },

  brooklin: {
    heroImage: "/assets/img/empreendimentos/mac-brooklin/15.jpg",
    conceitoImage: "/assets/img/empreendimentos/mac-brooklin/conceito-do-predio.jpg",
    conceito: [
      "Toda a imponência em um projeto exclusivamente residencial, à altura de um bairro desejado pela tranquilidade, modernidade e plena mobilidade.",
      "De elegância atemporal, o empreendimento se destaca pelas linhas horizontais e prismas marcantes na fachada. Jardins e pilotis inspirados na arquitetura modernista paulistana criam uma atmosfera acolhedora, com o verde presente em múltiplos níveis.",
    ],
    fichaTecnica: [
      { label: "Terreno", value: "3.068 m²" },
      { label: "Torre", value: "1 torre" },
      { label: "Pavimentos", value: "37" },
      { label: "Elevadores", value: "5" },
      { label: "Vagas", value: "288" },
    ],
    arquitetos: [
      { label: "Arquitetura", value: "L.E. Arquitetos" },
      { label: "Paisagismo", value: "Núcleo Paisagismo" },
      { label: "Decoração", value: "Chris Silveira" },
    ],
    tipologias: [
      { dorms: "2 suítes", area: "80 m²", vagas: "1 vaga" },
      { dorms: "3 dorms (1 suíte)", area: "99 a 100 m²", vagas: "2 vagas" },
      { dorms: "4 dorms (2 suítes)", area: "138 m²", vagas: "2 vagas" },
    ],
    lazer: [
      {
        title: "Térreo",
        items: [
          "Salão de festas",
          "Lounge festas",
          "Churrasqueira gourmet",
          "Lounge churrasqueira",
          "Praça central",
          "Massagem (2 salas)",
          "Espaço beauty",
          "Coworking",
          "Brinquedoteca",
          "Playground",
          "Pet place",
          "Delivery",
          "Bicicletário",
          "Minimarket (previsão)",
        ],
      },
      {
        title: "1º pavimento",
        items: [
          "Piscina adulto",
          "Piscina infantil",
          "Deck molhado",
          "Spa da piscina",
          "Sauna seca e ducha",
          "Espaço de descanso",
          "Piscina coberta com raia de 25m",
          "Solarium",
          "Quadra recreativa",
        ],
      },
      {
        title: "Cobertura · 33º pavimento",
        items: [
          "Fitness",
          "Sala de ginástica",
          "Terraço fitness",
          "Terraço ginástica",
        ],
      },
    ],
    diferenciais: [
      {
        title: "Lazer em três níveis",
        description:
          "Estrutura distribuída entre o térreo, o 1º pavimento e a cobertura no 33º andar - bem-estar em cada altura.",
      },
      {
        title: "Piscina coberta raia de 25m",
        description:
          "Além da piscina adulto, infantil, spa e sauna seca, uma piscina coberta com raia de 25m para nadar o ano todo.",
      },
      {
        title: "Fitness panorâmico na cobertura",
        description:
          "Fitness, sala de ginástica e dois terraços no 33º pavimento, com vista aberta da cidade.",
      },
      {
        title: "Arquitetura atemporal",
        description:
          "Linhas horizontais e prismas marcantes, pilotis modernistas e paisagismo em múltiplos níveis.",
      },
    ],
    localizacao: {
      mapImage: "/assets/img/empreendimentos/mac-brooklin/localizacao-mapa.png",
      pontos: [
        { label: "Av. Eng. Luís Carlos Berrini" },
        { label: "Estação Berrini (CPTM)" },
        { label: "Shopping Market Place" },
        { label: "Parque do Povo" },
        { label: "Av. Santo Amaro" },
        { label: "Aeroporto de Congonhas" },
      ],
    },
    galeria: [
      { src: "/assets/img/empreendimentos/mac-brooklin/imagem-de-fora.jpg", caption: "Piscina e área externa" },
      { src: "/assets/img/empreendimentos/mac-brooklin/imagem-de-quadra.jpg", caption: "Quadra recreativa" },
      { src: "/assets/img/empreendimentos/mac-brooklin/30.jpg", caption: "Lounge" },
      { src: "/assets/img/empreendimentos/mac-brooklin/20.jpg", caption: "Sala de massagem" },
      { src: "/assets/img/empreendimentos/mac-brooklin/10.jpg", caption: "Entrada" },
      { src: "/assets/img/empreendimentos/mac-brooklin/25.jpg", caption: "Minimarket" },
    ],
    plantas: [
      { src: "/assets/img/empreendimentos/mac-brooklin/planta-1.jpg", dorms: "2 suítes", area: "80 m²", vagas: "1 vaga" },
      { src: "/assets/img/empreendimentos/mac-brooklin/planta-2.jpg", dorms: "2 suítes", area: "80 m²", vagas: "1 vaga" },
      { src: "/assets/img/empreendimentos/mac-brooklin/planta-3.jpg", dorms: "3 dorms (1 suíte)", area: "99 a 100 m²", vagas: "2 vagas" },
      { src: "/assets/img/empreendimentos/mac-brooklin/planta-4.jpg", dorms: "3 dorms (1 suíte)", area: "99 a 100 m²", vagas: "2 vagas" },
      { src: "/assets/img/empreendimentos/mac-brooklin/planta-5.jpg", dorms: "4 dorms (2 suítes)", area: "138 m²", vagas: "2 vagas" },
      { src: "/assets/img/empreendimentos/mac-brooklin/planta-6.jpg", dorms: "4 dorms (2 suítes)", area: "138 m²", vagas: "2 vagas" },
    ],
    pdf: "/assets/pdfs/Book-Digital-RA83-MAC-Brooklin-Marketing-2025-02-03.pdf",
  },

  pinheiros: {
    heroImage: "/assets/img/empreendimentos/mac-pinheiros/16.jpg",
    conceitoImage: "/assets/img/empreendimentos/mac-pinheiros/1.jpg",
    conceito: [
      "Entre Pinheiros e Jardins, o melhor dos mundos. Um endereço entre a Brigadeiro Faria Lima e a Paulista, a passos da Oscar Freire, que reúne excelência, natureza e sofisticação.",
      "A arte de viver bem reside no equilíbrio entre o tradicional e o atemporal: ambientes integrados, com um mix de texturas e materiais que reconecta as pessoas com a natureza no meio urbano.",
    ],
    fichaTecnica: [
      { label: "Terreno", value: "1.732 m²" },
      { label: "Torre", value: "1 torre" },
      { label: "Pavimentos", value: "25" },
      { label: "Elevadores", value: "3" },
      { label: "Lojas", value: "2 de rua" },
    ],
    arquitetos: [
      { label: "Arquitetura", value: "LE Arquitetos" },
      { label: "Paisagismo", value: "Plantar Ideias" },
      { label: "Decoração", value: "Consuelo Jorge" },
    ],
    tipologias: [
      { dorms: "1 dorm", area: "40 m²" },
      { dorms: "2 dorms (1 suíte)", area: "69 a 71 m²", vagas: "0 ou 1 vaga" },
      { dorms: "3 dorms (1 suíte)", area: "93 a 94 m²", vagas: "0 a 2 vagas" },
      { dorms: "Giardinos", area: "81 a 131 m²", vagas: "1 vaga" },
      { dorms: "Penthouses", area: "165 a 194 m²", vagas: "1 a 2 vagas" },
    ],
    lazer: [
      {
        title: "Térreo",
        items: [
          "Piscina adulto",
          "Piscina infantil",
          "Deck",
          "Lounge piscina",
          "Lounge externo",
          "Fitness",
          "Churrasqueira gourmet",
          "Sala de massagem",
          "Pet place",
          "Locker",
          "Delivery",
          "Bicicletário",
          "Jardim",
        ],
      },
      {
        title: "1º pavimento",
        items: [
          "Salão de festas",
          "Copa do salão de festas",
          "Terraço",
          "Coworking",
          "Sala de reunião",
        ],
      },
    ],
    diferenciais: [
      {
        title: "Entre Faria Lima e Paulista",
        description:
          "No quadrilátero mais nobre de São Paulo, ao lado dos Jardins, perto de tudo o que importa.",
      },
      {
        title: "A passos da Oscar Freire",
        description:
          "O m² comercial mais caro do Brasil, com luxo, compras, cultura e gastronomia ao redor.",
      },
      {
        title: "Polo gastronômico premiado",
        description:
          "Próximo de restaurantes estrelados Michelin como D.O.M., Maní, Picchi e Evvai.",
      },
      {
        title: "Saúde e ensino de excelência",
        description:
          "Complexo Hospital das Clínicas, INCOR e a Faculdade de Medicina da USP nas imediações.",
      },
    ],
    localizacao: {
      mapImage: "/assets/img/empreendimentos/mac-pinheiros/mapa-localizacao.jpg",
      pontos: [
        { label: "Rua Oscar Freire", time: "1 min" },
        { label: "Estação Oscar Freire (Linha 4)", time: "4 min" },
        { label: "Av. Brigadeiro Faria Lima", time: "5 min" },
        { label: "Avenida Paulista", time: "13 min" },
        { label: "USP · Faculdade de Medicina", time: "13 min" },
        { label: "Complexo Hospital das Clínicas", time: "15 min" },
      ],
    },
    galeria: [
      { src: "/assets/img/empreendimentos/mac-pinheiros/5.jpg", caption: "Lobby" },
      { src: "/assets/img/empreendimentos/mac-pinheiros/11.jpg", caption: "Lounge" },
      { src: "/assets/img/empreendimentos/mac-pinheiros/14.jpg", caption: "Churrasqueira gourmet" },
      { src: "/assets/img/empreendimentos/mac-pinheiros/22.jpg", caption: "Terraço da cobertura" },
      { src: "/assets/img/empreendimentos/mac-pinheiros/10.jpg", caption: "Sala de massagem" },
      { src: "/assets/img/empreendimentos/mac-pinheiros/16.jpg", caption: "Lounge piscina" },
    ],
    plantas: [
      { src: "/assets/img/empreendimentos/mac-pinheiros/planta-1.png", dorms: "1 dorm", area: "40 m²" },
      { src: "/assets/img/empreendimentos/mac-pinheiros/planta-2.png", dorms: "2 dorms (1 suíte)", area: "69 a 71 m²", vagas: "0 ou 1 vaga" },
      { src: "/assets/img/empreendimentos/mac-pinheiros/planta-3.png", dorms: "3 dorms (1 suíte)", area: "93 a 94 m²", vagas: "0 a 2 vagas" },
      { src: "/assets/img/empreendimentos/mac-pinheiros/planta-4.png", dorms: "Giardinos", area: "81 a 131 m²", vagas: "1 vaga" },
      { src: "/assets/img/empreendimentos/mac-pinheiros/planta-5.png", dorms: "Penthouses", area: "165 a 194 m²", vagas: "1 a 2 vagas" },
      { src: "/assets/img/empreendimentos/mac-pinheiros/planta-6.png", dorms: "Penthouses", area: "165 a 194 m²", vagas: "1 a 2 vagas" },
    ],
    pdf: "/assets/pdfs/Book-Pinheiro-RA79-MAC-Pinheiros-Marketing-2023-09-22.pdf",
  },

  "vila-mariana": {
    heroImage: "/assets/img/empreendimentos/mac-vila-mariana/13.jpg",
    conceitoImage: "/assets/img/empreendimentos/mac-vila-mariana/foto-do-predio.jpg",
    conceito: [
      "Onde a vida flui. Na Vila Mariana, um dos endereços mais cobiçados de São Paulo, no eixo da Avenida Paulista e dentro do conceito Cidade em 15 minutos.",
      "Um projeto autêntico, moderno e exclusivamente residencial - sem studios, sem NRs e sem lojas - pensado em cada detalhe para tornar bem-estar, conforto e privacidade parte da rotina.",
    ],
    fichaTecnica: [
      { label: "Terreno", value: "1.380 m²" },
      { label: "Torre", value: "1 torre" },
      { label: "Pavimentos", value: "24" },
      { label: "Elevadores", value: "3" },
      { label: "Vagas", value: "111" },
    ],
    arquitetos: [{ label: "Decoração", value: "Chris Silveira" }],
    tipologias: [
      { dorms: "1 dorm", area: "40 m²", vagas: "sem vaga" },
      { dorms: "2 dorms (1 suíte)", area: "64 a 70 m²", vagas: "1 vaga" },
      { dorms: "3 dorms (1 suíte)", area: "89 m²", vagas: "2 vagas" },
      { dorms: "Penthouse 2 dorms (1 suíte)", area: "134 a 137 m²", vagas: "2 vagas" },
      { dorms: "Penthouse 3 dorms (1 suíte)", area: "198 m²", vagas: "2 vagas" },
    ],
    lazer: [
      {
        title: "2º pavimento",
        items: [
          "Piscina adulto",
          "Piscina infantil",
          "Spa da piscina",
          "Deck molhado",
          "Solário",
          "Pool lounge",
          "Fitness",
          "Salão de festas",
          "Churrasqueira gourmet",
          "Coworking",
          "Praça coworking",
          "Espaço beauty",
          "Massagem",
          "Brinquedoteca",
          "Playground",
          "Quadra recreativa",
        ],
      },
      {
        title: "Térreo",
        items: ["Minimarket", "Delivery", "Pet place", "Bicicletário"],
      },
    ],
    diferenciais: [
      {
        title: "Cidade em 15 minutos",
        description:
          "No eixo da Avenida Paulista, com tudo por perto - a pé ou de bicicleta. Onde a vida flui.",
      },
      {
        title: "100% residencial",
        description:
          "Sem studios, sem NRs e sem lojas: mais privacidade e tranquilidade para quem mora.",
      },
      {
        title: "Acesso extra pela Rua Vergueiro",
        description:
          "Uma segunda portaria que aproxima ainda mais o morador da Estação Vila Mariana.",
      },
      {
        title: "Do compacto ao amplo",
        description:
          "Do 1 dorm de 40m² às penthouses de até 198m² - opções para cada momento de vida.",
      },
    ],
    localizacao: {
      mapImage: "/assets/img/empreendimentos/mac-vila-mariana/foto-de-drone-do-bairro.jpg",
      pontos: [
        { label: "Estação Vila Mariana", time: "3 min" },
        { label: "Sesc Vila Mariana", time: "6 min" },
        { label: "Estação Ana Rosa", time: "8 min" },
        { label: "Avenida Paulista", time: "10 min" },
        { label: "Parque da Aclimação", time: "10 min" },
        { label: "Parque Ibirapuera", time: "12 min" },
      ],
    },
    galeria: [
      { src: "/assets/img/empreendimentos/mac-vila-mariana/13.jpg", caption: "Piscina" },
      { src: "/assets/img/empreendimentos/mac-vila-mariana/1.jpg", caption: "Lobby" },
      { src: "/assets/img/empreendimentos/mac-vila-mariana/5.jpg", caption: "Coworking" },
      { src: "/assets/img/empreendimentos/mac-vila-mariana/8.jpg", caption: "Fitness" },
      { src: "/assets/img/empreendimentos/mac-vila-mariana/10.jpg", caption: "Brinquedoteca" },
      { src: "/assets/img/empreendimentos/mac-vila-mariana/foto-da-quadra.jpg", caption: "Quadra recreativa" },
    ],
    plantas: [
      { src: "/assets/img/empreendimentos/mac-vila-mariana/planta-1.png", dorms: "1 dorm", area: "40 m²", vagas: "sem vaga" },
      { src: "/assets/img/empreendimentos/mac-vila-mariana/planta-2.png", dorms: "2 dorms (1 suíte)", area: "64 a 70 m²", vagas: "1 vaga" },
      { src: "/assets/img/empreendimentos/mac-vila-mariana/planta-3.png", dorms: "3 dorms (1 suíte)", area: "89 m²", vagas: "2 vagas" },
      { src: "/assets/img/empreendimentos/mac-vila-mariana/planta-4.png", dorms: "Penthouse 2 dorms (1 suíte)", area: "134 a 137 m²", vagas: "2 vagas" },
      { src: "/assets/img/empreendimentos/mac-vila-mariana/planta-5.png", dorms: "Penthouse 3 dorms (1 suíte)", area: "198 m²", vagas: "2 vagas" },
      { src: "/assets/img/empreendimentos/mac-vila-mariana/planta-6.png", dorms: "Penthouse 3 dorms (1 suíte)", area: "198 m²", vagas: "2 vagas" },
    ],
    pdf: "/assets/pdfs/Book-Digital-RA81-MAC-Vila-Mariana-Marketing-2025-05-05.pdf",
  },

  "sao-judas": {
    heroImage: "/assets/img/empreendimentos/mac-autoria/7.jpg",
    conceitoImage: "/assets/img/empreendimentos/mac-autoria/conceito-externo-1.jpg",
    conceito: [
      "Bem-vindo ao seu novo endereço. Autêntico, como você. Conforto é morar em uma torre única, sem studios e 100% residencial, em uma esquina tranquila e arborizada próxima à Estação São Judas.",
      "Aqui, cada detalhe carrega uma assinatura de alto padrão - dos mais de 20 espaços de lazer aos apartamentos com diferenciais únicos.",
    ],
    fichaTecnica: [
      { label: "Terreno", value: "2.220 m²" },
      { label: "Torre", value: "1 torre" },
      { label: "Pavimentos", value: "24" },
      { label: "Elevadores", value: "4" },
      { label: "Vagas", value: "194" },
    ],
    arquitetos: [{ label: "Decoração", value: "Chris Silveira" }],
    tipologias: [
      { dorms: "2 dorms (R2V)", area: "45 m²", vagas: "1 vaga" },
      { dorms: "2 dorms (HMP)", area: "45 m²", vagas: "sem vaga" },
      { dorms: "2 dorms (1 suíte)", area: "60 a 61 m²", vagas: "1 vaga" },
      { dorms: "3 dorms (1 suíte)", area: "71 a 73 m²", vagas: "1 vaga" },
    ],
    lazer: [
      {
        title: "Térreo",
        items: [
          "Piscina adulto",
          "Piscina infantil",
          "Lounge da piscina",
          "Solário",
          "Salão de festas",
          "Festas gourmet",
          "Churrasqueira",
          "Praça da churrasqueira",
          "Coworking",
          "Espaço beauty",
          "Sala de massagem",
          "Brinquedoteca",
          "Playground",
          "Pet Place Grand Patas",
          "Pet Place Mini Patas",
          "Delivery",
          "Lobby",
        ],
      },
      {
        title: "1º pavimento",
        items: [
          "Bicicletário",
          "Pet spa",
          "Mini market (previsão)",
          "Lavanderia (previsão)",
        ],
      },
      {
        title: "20º pavimento",
        items: ["Fitness", "Sala de ginástica", "Terraços"],
      },
    ],
    diferenciais: [
      {
        title: "Seu primeiro lar",
        description:
          "Um jeito acessível de morar bem, em uma torre única e 100% residencial.",
      },
      {
        title: "Unidades HMP",
        description:
          "50 unidades enquadradas em HMP, para famílias com renda familiar de até 10 salários mínimos.",
      },
      {
        title: "Mais de 20 espaços de lazer",
        description:
          "De dois pet places - Grand Patas e Mini Patas - ao fitness com vista no 20º pavimento.",
      },
      {
        title: "A 550m do metrô",
        description:
          "Esquina arborizada a poucos passos da Estação São Judas, na Linha 1-Azul.",
      },
    ],
    localizacao: {
      mapImage: "/assets/img/empreendimentos/mac-autoria/locais-proximos.jpg",
      pontos: [
        { label: "Estação São Judas", time: "7 min a pé" },
        { label: "Av. Jabaquara", time: "3 min" },
        { label: "Estação Conceição", time: "5 min" },
        { label: "Shopping Plaza Sul", time: "10 min" },
        { label: "Parque do Estado", time: "12 min" },
        { label: "Aeroporto de Congonhas", time: "12 min" },
      ],
    },
    galeria: [
      { src: "/assets/img/empreendimentos/mac-autoria/conceito-externo-2.jpg", caption: "Fachada" },
      { src: "/assets/img/empreendimentos/mac-autoria/1.jpg", caption: "Lobby" },
      { src: "/assets/img/empreendimentos/mac-autoria/7.jpg", caption: "Salão de festas" },
      { src: "/assets/img/empreendimentos/mac-autoria/15.jpg", caption: "Festas gourmet" },
      { src: "/assets/img/empreendimentos/mac-autoria/12.jpg", caption: "Brinquedoteca" },
      { src: "/assets/img/empreendimentos/mac-autoria/3.jpg", caption: "Bicicletário" },
    ],
    plantas: [
      { src: "/assets/img/empreendimentos/mac-autoria/planta-1.jpg", dorms: "2 dorms (R2V)", area: "45 m²", vagas: "1 vaga" },
      { src: "/assets/img/empreendimentos/mac-autoria/plata-2.jpg", dorms: "2 dorms (HMP)", area: "45 m²", vagas: "sem vaga" },
      { src: "/assets/img/empreendimentos/mac-autoria/plata-3.jpg", dorms: "2 dorms (1 suíte)", area: "60 a 61 m²", vagas: "1 vaga" },
      { src: "/assets/img/empreendimentos/mac-autoria/planta-4.jpg", dorms: "2 dorms (1 suíte)", area: "60 a 61 m²", vagas: "1 vaga" },
      { src: "/assets/img/empreendimentos/mac-autoria/planta-5.jpg", dorms: "3 dorms (1 suíte)", area: "71 a 73 m²", vagas: "1 vaga" },
      { src: "/assets/img/empreendimentos/mac-autoria/planta-7.jpg", dorms: "3 dorms (1 suíte)", area: "71 a 73 m²", vagas: "1 vaga" },
    ],
    pdf: "/assets/pdfs/Book-Digital-RA85-Autoria-Marketing-2026-02-11.pdf",
  },
};

export function getDetalhe(slug: string): EmpreendimentoDetalhe | undefined {
  return DETALHES[slug];
}
