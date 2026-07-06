export type Segment = "premium" | "alto" | "acessivel";

export type Empreendimento = {
  slug: string;
  name: string;
  neighborhood: string;
  address: string;
  segment: Segment;
  segmentLabel: string;
  /** Assinatura/manchete extraída do book de marketing. */
  tagline: string;
  /** Resumo curto para o card da home. */
  shortDescription: string;
  /** Destaques numéricos (chips do card). */
  facts: {
    units: string;
    towers: string;
    floors: string;
    typologies: string;
    areas: string;
  };
  /** Diferencial de localização em uma linha. */
  locationHighlight: string;
  /** Tom de cor do card (fica atrás da foto como fallback). */
  shotColor: string;
  /** Pasta das imagens do empreendimento (em public/). */
  imageDir: string;
  /** Caminho da imagem de capa (em public/). */
  cover: string;
  /** Destaque visual na home (card largo). */
  featured?: boolean;
};

/**
 * Ordem reflete a hierarquia comercial do briefing:
 * Vila Clementino + Brooklin (premium) > Vila Mariana + Pinheiros (alto) > São Judas (acessível).
 */
export const empreendimentos: Empreendimento[] = [
  {
    slug: "vila-clementino",
    name: "Vila Clementino",
    neighborhood: "Vila Clementino",
    address: "Av. Dr. Altino Arantes, 635",
    segment: "premium",
    segmentLabel: "Premium",
    tagline: "Toda a excelência lapidada à mão para criar um novo ícone.",
    shortDescription:
      "Atemporalidade e sofisticação a poucos minutos do Parque Ibirapuera. 100% residencial, apenas suítes e um Gourmet Spa exclusivo.",
    facts: {
      units: "100 unidades",
      towers: "1 torre",
      floors: "25 pavimentos",
      typologies: "2 a 4 suítes",
      areas: "81 a 169 m²",
    },
    locationHighlight: "A 12 min do Parque Ibirapuera, esquina valorizada.",
    shotColor: "#7a6a4a",
    imageDir: "/assets/img/empreendimentos/mac-clementino",
    cover: "/assets/img/empreendimentos/mac-clementino/2.jpg",
    featured: true,
  },
  {
    slug: "brooklin",
    name: "Brooklin",
    neighborhood: "Brooklin",
    address: "R. Comendador Eduardo Saccab, 280",
    segment: "premium",
    segmentLabel: "Premium",
    tagline:
      "Toda a imponência em um projeto exclusivamente residencial.",
    shortDescription:
      "Em uma rua arborizada do Brooklin, um projeto contemporâneo de 37 pavimentos com lazer distribuído em 3 níveis, incluindo cobertura.",
    facts: {
      units: "159 unidades",
      towers: "1 torre",
      floors: "37 pavimentos",
      typologies: "2 a 4 dorms",
      areas: "80 a 138 m²",
    },
    locationHighlight: "Rua arborizada, fácil acesso às principais avenidas.",
    shotColor: "#50575e",
    imageDir: "/assets/img/empreendimentos/mac-brooklin",
    cover: "/assets/img/empreendimentos/mac-brooklin/imagem-de-fora.jpg",
    featured: true,
  },
  {
    slug: "vila-mariana",
    name: "Vila Mariana",
    neighborhood: "Vila Mariana",
    address: "R. Dr. Neto de Araújo, 156",
    segment: "alto",
    segmentLabel: "Alto padrão",
    tagline: "Onde a vida flui.",
    shortDescription:
      "Projeto autêntico e exclusivamente residencial em uma das regiões mais cobiçadas da cidade, do 1 dorm às penthouses.",
    facts: {
      units: "108 unidades",
      towers: "1 torre",
      floors: "24 pavimentos",
      typologies: "1 a 3 dorms",
      areas: "40 a 198 m²",
    },
    locationHighlight: "Entre as estações Vila Mariana e Ana Rosa.",
    shotColor: "#5c6b52",
    imageDir: "/assets/img/empreendimentos/mac-vila-mariana",
    cover: "/assets/img/empreendimentos/mac-vila-mariana/foto-da-faxada.jpg",
  },
  {
    slug: "pinheiros",
    name: "Pinheiros",
    neighborhood: "Pinheiros",
    address: "R. Alves Guimarães, 89",
    segment: "alto",
    segmentLabel: "Alto padrão",
    tagline: "Entre Pinheiros e Jardins, o melhor dos mundos.",
    shortDescription:
      "Localização premium entre a Faria Lima e a Paulista, a passos da Oscar Freire. Do 1 dorm a giardinos e penthouses.",
    facts: {
      units: "131 unidades",
      towers: "1 torre",
      floors: "25 pavimentos",
      typologies: "1 a 3 dorms",
      areas: "40 a 94 m²",
    },
    locationHighlight: "Entre Faria Lima e Paulista, perto da Oscar Freire.",
    shotColor: "#6e6256",
    imageDir: "/assets/img/empreendimentos/mac-pinheiros",
    cover: "/assets/img/empreendimentos/mac-pinheiros/1.jpg",
  },
  {
    slug: "sao-judas",
    name: "São Judas",
    neighborhood: "São Judas",
    address: "Av. Fagundes Filho, 524",
    segment: "acessivel",
    segmentLabel: "Mais acessível",
    tagline: "Bem-vindo ao seu novo endereço.",
    shortDescription:
      "Torre única, 100% residencial, em esquina arborizada a 550m da Estação São Judas. Mais de 20 espaços de lazer e unidades HMP.",
    facts: {
      units: "243 unidades",
      towers: "1 torre",
      floors: "24 pavimentos",
      typologies: "2 a 3 dorms",
      areas: "45 a 73 m²",
    },
    locationHighlight: "A 550m da Estação São Judas.",
    shotColor: "#b89968",
    imageDir: "/assets/img/empreendimentos/mac-autoria",
    cover: "/assets/img/empreendimentos/mac-autoria/conceito-externo-1.jpg",
  },
];

export function getEmpreendimento(slug: string): Empreendimento | undefined {
  return empreendimentos.find((e) => e.slug === slug);
}
