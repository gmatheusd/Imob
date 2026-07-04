/**
 * Assets locais em `public/`.
 */
export const siteImages = {
  /** Logo da DV Imob. Colorido em fundo branco, dourado em fundo preto. */
  logo: {
    alt: "DV Imob - Negócios Imobiliários",
    width: 200,
    height: 60,
    /** Fundo claro/branco (header rolado) — logo colorido. */
    light: "/assets/img/dv-imob-logo-colorido.png",
    /** Fundo escuro/preto (hero, footer) — logo dourado. */
    dark: "/assets/img/dv-imob-logo-dorado.png",
  },
  /** Retratos de Danilo Ventura. */
  danilo: {
    portrait: {
      src: "/assets/img/danilo-ventura-2.jpeg",
      alt: "Danilo Ventura, Negócios Imobiliários",
    },
    working: {
      src: "/assets/img/danilo-ventura-1.jpeg",
      alt: "Danilo Ventura analisando projetos imobiliários",
    },
  },
  /** Logo da MAC (incorporadora dos empreendimentos comercializados). */
  macLogo: {
    alt: "MAC Construtora e Incorporadora",
    white: { src: "/assets/img/mac-logo-branco.png", width: 261, height: 98 },
    black: { src: "/assets/img/mac-logo-preto.png", width: 249, height: 95 },
  },
  /** Imagem do card do hero (torre de alto padrão ao entardecer). */
  hero: {
    src: "/assets/img/empreendimentos/mac-clementino/1.jpg",
    alt: "Empreendimento residencial de alto padrão ao entardecer",
  },
  /** Foto de fundo do hero (área de lazer), exibida bem escurecida. */
  heroBackground: {
    src: "/assets/img/empreendimentos/mac-brooklin/imagem-de-fora.jpg",
    alt: "",
  },
  /** Foto usada na seção "Sobre" (retrato do Danilo). */
  aboutHighlight: {
    src: "/assets/img/danilo-ventura-2.jpeg",
    alt: "Danilo Ventura, especialista em lançamentos imobiliários",
  },
} as const;
