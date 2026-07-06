export type NavItem = {
  label: string;
  href: string;
  children?: readonly NavItem[];
};

export type FeatureIconId =
  | "gem"
  | "ruler"
  | "leaf"
  | "shield"
  | "award"
  | "handshake"
  | "building"
  | "sparkles";

export type FeatureItem = {
  id: string;
  title: string;
  description: string;
  icon: FeatureIconId;
};

export type StatItem = {
  id: string;
  value: string;
  label: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const siteConfig = {
  name: "Danilo Ventura",
  legalName: "Danilo Ventura Negócios Imobiliários",
  fantasia: "DV Imob",
  siteUrl: "https://www.daniloventura.com.br",

  creci: "048.717-J",
  cnpj: "58.489.887/0001-03",
  razaoSocial: "DANILO R P VENTURA NEGÓCIOS IMOBILIÁRIOS",

  contact: {
    phoneDisplay: "(11) 99436-8556",
    phoneE164: "+5511994368556",
    email: "contato@daniloventura.com.br",
    whatsappE164: "5511994368556",
  },

  social: {
    instagram: "https://www.instagram.com/gerente.daniloventura?igsh=MXUwanpiY3FtNWRtdA==",
  },

  navLinks: [
    { label: "Início", href: "/" },
    { label: "Empreendimentos", href: "/empreendimentos/" },
    { label: "Sobre", href: "/sobre/" },
    { label: "Diferenciais", href: "/diferenciais/" },
    { label: "Contato", href: "/contato/" },
  ] satisfies NavItem[],

  footerQuickLinks: [
    { label: "Empreendimentos", href: "/empreendimentos/" },
    { label: "Sobre", href: "/sobre/" },
    { label: "Diferenciais", href: "/diferenciais/" },
    { label: "Contato", href: "/contato/" },
  ] satisfies NavItem[],

  seo: {
    title: {
      default:
        "DV Imob | Imobiliária e lançamentos de alto padrão em São Paulo",
      template: "%s | DV Imob",
    },
    description:
      "Danilo Ventura Negócios Imobiliários é especialista em lançamentos de médio e alto padrão em São Paulo. Consultoria personalizada para compra, investimento e realização do seu próximo imóvel.",
    keywords: [
      "Danilo Ventura",
      "imobiliária São Paulo",
      "lançamentos imobiliários SP",
      "imóveis de alto padrão",
      "negócios imobiliários",
      "investimento imobiliário",
      "apartamentos alto padrão",
      "DV Imob",
    ],
  },

  whatsappMessages: {
    general:
      "Olá! Vim pelo site da DV Imob e gostaria de mais informações sobre os empreendimentos.",
    consultant:
      "Olá! Gostaria de uma consultoria sobre lançamentos e oportunidades de investimento.",
  },

  /** Credenciais e números da imobiliária. */
  stats: [
    { id: "creci", value: "CRECI", label: "048.717-J" },
    { id: "consultivo", value: "100%", label: "atendimento consultivo" },
    { id: "padrao", value: "Alto", label: "padrão e lançamentos" },
  ] satisfies StatItem[],

  /** Selos / pilares de atuação. */
  trustPillars: [
    "Experiência de mercado",
    "Especialista em lançamentos",
    "Médio e alto padrão",
    "Atendimento consultivo",
  ],

  /** Diferenciais da imobiliária (seção da home). */
  differentiators: [
    {
      id: "consultivo",
      title: "Atendimento consultivo",
      description:
        "Cada cliente tem objetivos, necessidades e sonhos únicos. O atendimento é feito sob medida, do primeiro contato à entrega das chaves.",
      icon: "handshake",
    },
    {
      id: "experiencia",
      title: "Experiência de mercado",
      description:
        "Trajetória construída dentro dos estandes de vendas, acompanhando de perto importantes lançamentos imobiliários.",
      icon: "award",
    },
    {
      id: "alto-padrao",
      title: "Foco em alto padrão",
      description:
        "Expertise na comercialização de empreendimentos de médio e alto padrão, com curadoria de produtos selecionados.",
      icon: "gem",
    },
    {
      id: "transparencia",
      title: "Segurança e transparência",
      description:
        "Compromisso com clareza e segurança em todas as etapas da negociação, sem surpresas.",
      icon: "shield",
    },
    {
      id: "estrategia",
      title: "Visão estratégica",
      description:
        "Conecta incorporadoras, investidores, proprietários e compradores de forma eficiente, com olhar de negócio.",
      icon: "building",
    },
    {
      id: "relacionamento",
      title: "Relacionamento duradouro",
      description:
        "Mais do que vender imóveis, ajudar pessoas a realizarem projetos de vida com decisões bem planejadas.",
      icon: "sparkles",
    },
  ] satisfies FeatureItem[],

  about: {
    summary: [
      "Há mais de 16 anos no mercado imobiliário, Danilo Ventura construiu uma trajetória sólida em lançamentos de médio e alto padrão, com passagem por grandes estandes de vendas e liderança de equipes comerciais.",
      "Fundador da Danilo Ventura Negócios Imobiliários, sua missão é oferecer consultoria personalizada e atendimento consultivo para quem quer morar bem ou investir com segurança e transparência.",
    ],
    paragraphs: [
      "Há mais de 16 anos atuando no mercado imobiliário, Danilo Ventura construiu sua trajetória baseada em relacionamento, conhecimento do mercado e foco em resultados. Ao longo dessa jornada, participou de importantes lançamentos imobiliários, desenvolvendo expertise na comercialização de empreendimentos de médio e alto padrão e na gestão de equipes de alta performance.",
      "Sua carreira foi construída dentro dos estandes de vendas, acompanhando de perto as transformações do mercado, as necessidades dos clientes e a evolução dos produtos imobiliários. Essa vivência prática permitiu que desenvolvesse uma visão estratégica capaz de conectar incorporadoras, investidores, proprietários e compradores de forma eficiente e transparente.",
      "Como Gerente Comercial e Gerente de Vendas, liderou equipes, estruturou operações comerciais, desenvolveu campanhas de captação e participou diretamente de negociações que contribuíram para o sucesso de diversos empreendimentos. Sua atuação sempre foi pautada pela valorização do atendimento consultivo, entendendo que cada cliente possui objetivos, necessidades e sonhos únicos.",
      "Fundador da Danilo Ventura Negócios Imobiliários, tem como missão oferecer um atendimento personalizado e uma consultoria completa para clientes que buscam oportunidades em lançamentos imobiliários, imóveis residenciais e investimentos estratégicos. Seu compromisso é proporcionar segurança, transparência e excelência em todas as etapas da negociação.",
      "Mais do que vender imóveis, Danilo acredita em construir relacionamentos duradouros e ajudar pessoas a realizarem projetos de vida por meio de decisões imobiliárias bem planejadas.",
    ],
  },

  faq: [
    {
      id: "faq-1",
      question: "Quais empreendimentos o Danilo comercializa?",
      answer:
        "O portfólio reúne lançamentos selecionados de médio e alto padrão em São Paulo, com empreendimentos em Vila Clementino, Brooklin, Vila Mariana, Pinheiros e São Judas. Cada um tem página própria com plantas, diferenciais e lazer.",
    },
    {
      id: "faq-2",
      question: "Como funciona o atendimento?",
      answer:
        "O atendimento é consultivo e personalizado: entendemos seu objetivo (morar ou investir), perfil e orçamento, e apresentamos as melhores oportunidades. Você recebe plantas, tabela de valores e condições, e pode agendar uma visita ao decorado.",
    },
    {
      id: "faq-3",
      question: "Trabalha com investimento imobiliário?",
      answer:
        "Sim. Com visão estratégica de mercado, Danilo orienta investidores na escolha de produtos com bom potencial de valorização e rentabilidade, conectando a oportunidade certa ao seu perfil.",
    },
    {
      id: "faq-4",
      question: "Preciso pagar pela consultoria?",
      answer:
        "Não. A consultoria e o acompanhamento na compra de lançamentos não têm custo para o cliente - a corretagem é tratada junto à incorporadora. Você conta com assessoria completa, do primeiro contato à assinatura.",
    },
    {
      id: "faq-5",
      question: "Como falo com o Danilo?",
      answer:
        "O contato mais rápido é pelo WhatsApp. Você também pode preencher o formulário de interesse no site que o Danilo retorna com as informações e as melhores oportunidades para o seu perfil.",
    },
  ] satisfies FaqItem[],
} as const;

export function buildWhatsAppUrl(phoneE164: string, message: string): string {
  const digits = phoneE164.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
