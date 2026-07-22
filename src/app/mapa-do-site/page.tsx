import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import { empreendimentos } from "@/config/empreendimentos";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mapa do site",
  description: "Todas as páginas do site de Danilo Ventura Negócios Imobiliários.",
};

const sections = [
  {
    title: "Páginas principais",
    links: [
      { label: "Início", href: "/" },
      { label: "Empreendimentos", href: "/empreendimentos/" },
      { label: "Sobre", href: "/sobre/" },
      { label: "Diferenciais", href: "/diferenciais/" },
      { label: "Contato", href: "/contato/" },
      { label: "Política de Privacidade", href: "/politica-de-privacidade/" },
    ],
  },
  {
    title: "Empreendimentos",
    links: empreendimentos.map((e) => ({
      label: e.name,
      href: `/empreendimentos/${e.slug}/`,
      meta: `${e.neighborhood} · ${e.segmentLabel}`,
    })),
  },
];

export default function MapaDoSitePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="Navegação"
          title="Mapa do site"
          align="left"
        />

        <section className="bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 sm:grid-cols-2">
              {sections.map((section) => (
                <div key={section.title}>
                  <h2 className="font-display text-lg font-semibold text-ink">
                    {section.title}
                  </h2>
                  <ul className="mt-4 grid gap-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex flex-col rounded-lg border border-border bg-surface px-4 py-3 transition hover:border-gold-300 hover:shadow-[var(--shadow-soft)]"
                        >
                          <span className="text-sm font-semibold text-ink group-hover:text-gold-600 transition-colors">
                            {link.label}
                          </span>
                          {"meta" in link && link.meta ? (
                            <span className="mt-0.5 text-xs text-text-muted">
                              {link.meta}
                            </span>
                          ) : null}
                          <span className="mt-0.5 text-xs text-text-muted">
                            {link.href}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppBubble />
    </>
  );
}
