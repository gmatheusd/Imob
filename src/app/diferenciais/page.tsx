import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import { FeatureIcon } from "@/components/FeatureIcon";
import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Diferenciais",
  description:
    "Entenda por que comprar com Danilo Ventura: atendimento consultivo, experiência de mercado, foco em alto padrão e acompanhamento completo do primeiro contato à entrega das chaves.",
};

export default function DiferenciaisPage() {
  const wa = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    siteConfig.whatsappMessages.consultant,
  );

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="Por que comprar com o Danilo"
          title={<>Consultoria que vai além <em className="not-italic text-gold-400">de vender imóveis</em></>}
          subtitle="Relacionamento, conhecimento de mercado e foco em resultados para conectar você à oportunidade certa, com segurança e transparência."
        />

        {/* Cards de diferenciais */}
        <section className="bg-surface py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.differentiators.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-[var(--radius-xl)] border border-border bg-surface p-8 transition hover:border-gold-200 hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold-50 text-gold-600 transition-colors duration-300 group-hover:bg-gold-200 group-hover:text-gold-700">
                    <FeatureIcon icon={item.icon} className="h-7 w-7" />
                  </span>
                  <h2 className="mt-6 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seção consultiva */}
        <section className="bg-surface-muted py-20 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                  Atendimento
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                  Do primeiro contato à entrega das chaves
                </h2>
                <p className="mt-5 text-base leading-relaxed text-text-muted">
                  O atendimento consultivo significa entender seus objetivos antes de apresentar qualquer produto. Seja para morar ou investir, cada indicação é personalizada para o seu perfil e momento de vida.
                </p>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  Você conta com acompanhamento completo: apresentação de plantas e tabela de valores, visita ao decorado, análise de condições de pagamento e suporte até a assinatura e além.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink shadow-[var(--shadow-gold)] transition hover:bg-gold-600 hover:text-white"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden />
                    Falar com o Danilo
                  </a>
                  <Link
                    href="/sobre/"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-ink transition hover:border-gold-400 hover:text-gold-600"
                  >
                    Sobre a imobiliária
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {siteConfig.stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="rounded-[var(--radius-xl)] border border-border bg-surface p-6"
                  >
                    <p className="font-display text-4xl font-semibold text-gold-500">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm leading-snug text-text-muted">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="bg-premium-dark py-20 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Vamos conversar sobre o seu próximo imóvel?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Fale com o Danilo pelo WhatsApp e receba uma seleção de oportunidades sob medida para o seu objetivo.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-8 py-4 text-sm font-semibold text-ink shadow-[var(--shadow-gold)] transition hover:bg-gold-600 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Falar no WhatsApp
              </a>
              <Link
                href="/#empreendimentos"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Ver empreendimentos
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppBubble />
    </>
  );
}
