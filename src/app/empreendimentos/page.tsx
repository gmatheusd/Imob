import { EmpreendimentosGrid } from "@/components/empreendimentos/EmpreendimentosGrid";
import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Empreendimentos",
  description:
    "Conheça os empreendimentos MAC comercializados por Danilo Ventura: Vila Clementino, Brooklin, Vila Mariana, Pinheiros e Autoria. Lançamentos de médio e alto padrão em São Paulo.",
};

export default function EmpreendimentosPage() {
  const wa = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    siteConfig.whatsappMessages.consultant,
  );

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="Portfólio"
          title={<>Empreendimentos <em className="not-italic text-gold-400">selecionados</em></>}
          subtitle="Lançamentos de médio e alto padrão nos melhores endereços de São Paulo, com curadoria e acompanhamento do primeiro contato à entrega das chaves."
        />

        {/* Grid com filtros */}
        <section className="bg-surface py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <EmpreendimentosGrid />
          </div>
        </section>

        {/* CTA */}
        <section className="bg-surface-muted py-20 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Atendimento consultivo
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-ink sm:text-4xl">
              Não encontrou o que procura?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Fale com o Danilo e receba uma seleção personalizada de oportunidades de acordo com o seu perfil e objetivo - morar ou investir.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-ink shadow-[var(--shadow-gold)] transition hover:bg-gold-600 hover:text-white"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppBubble />
    </>
  );
}
