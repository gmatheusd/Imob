import { empreendimentos } from "@/config/empreendimentos";
import { siteConfig } from "@/config/siteConfig";

/** JSON-LD da organização + lista de empreendimentos (SEO). */
export function getSiteJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: siteConfig.legalName,
    alternateName: siteConfig.fantasia,
    url: siteConfig.siteUrl,
    description: siteConfig.seo.description,
    areaServed: {
      "@type": "City",
      name: "São Paulo",
    },
    knowsAbout: [
      "Lançamentos imobiliários",
      "Imóveis residenciais de alto padrão",
      "Consultoria e investimento imobiliário",
    ],
    makesOffer: empreendimentos.map((e) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Residence",
        name: e.name,
        address: {
          "@type": "PostalAddress",
          addressLocality: e.neighborhood,
          addressRegion: "SP",
          addressCountry: "BR",
        },
      },
      url: `${siteConfig.siteUrl}/empreendimentos/${e.slug}/`,
    })),
  };
}
