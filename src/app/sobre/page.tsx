import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import { FeatureIcon } from "@/components/FeatureIcon";
import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import { siteImages } from "@/config/siteImages";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A Danilo Ventura Negócios Imobiliários (DV Imob) é especialista em lançamentos de médio e alto padrão em São Paulo, com atendimento consultivo do primeiro contato à entrega das chaves.",
};

const empresaParagraphs = [
  "A Danilo Ventura Negócios Imobiliários (DV Imob) é uma imobiliária especializada em lançamentos de médio e alto padrão em São Paulo. Conectamos pessoas ao imóvel certo - para morar ou investir - com um atendimento próximo, consultivo e transparente em todas as etapas.",
  "Trabalhamos com curadoria: selecionamos empreendimentos nos melhores endereços da cidade e acompanhamos cada cliente de perto, com informação clara sobre plantas, valores e condições. Mais do que vender imóveis, ajudamos a tomar decisões imobiliárias bem planejadas.",
];

export default function SobrePage() {
  const wa = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    siteConfig.whatsappMessages.consultant,
  );

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="Sobre a imobiliária"
          title={<><em className="not-italic text-gold-400">DV</em> Imob</>}
          companyName="Danilo Ventura Negócios Imobiliários"
          subtitle="Curadoria de lançamentos de médio e alto padrão em São Paulo, com atendimento consultivo do primeiro contato à entrega das chaves."
          align="left"
          showLogo
        />

        {/* ===== A EMPRESA ===== */}
        <section className="bg-surface py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Quem somos
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Uma imobiliária feita de relacionamento
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-text-muted">
              {empresaParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {siteConfig.trustPillars.map((pillar) => (
                <li
                  key={pillar}
                  className="rounded-full border border-border bg-surface-muted px-3.5 py-1.5 text-xs font-semibold text-text-muted"
                >
                  {pillar}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== NÚMEROS ===== */}
        <section className="bg-surface-muted py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <dl className="flex flex-wrap justify-center gap-8">
              {siteConfig.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="w-56 rounded-[var(--radius-xl)] border border-border bg-surface p-7 text-center"
                >
                  <dd className="font-display text-4xl font-semibold text-gold-500">
                    {stat.value}
                  </dd>
                  <dt className="mt-2 text-sm leading-snug text-text-muted">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ===== FUNDADOR ===== */}
        <section className="bg-surface py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-16 lg:px-8">
            {/* Foto */}
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[var(--radius-2xl)] bg-graphite shadow-[var(--shadow-soft)]">
              <Image
                src={siteImages.danilo.portrait.src}
                alt={siteImages.danilo.portrait.alt}
                fill
                sizes="(min-width: 1024px) 24rem, 100vw"
                className="object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent px-6 pb-6 pt-20 text-white">
                <p className="font-display text-2xl font-semibold">Danilo Ventura</p>
                <p className="mt-1 text-sm text-gold-200">
                  Sócio fundador · CRECI {siteConfig.creci}
                </p>
              </div>
            </div>

            {/* Bio */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                Quem está à frente
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                O fundador
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
                {siteConfig.about.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== DIFERENCIAIS (resumo) ===== */}
        <section className="bg-surface-muted py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                Por que comprar com a gente
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                Diferenciais
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {siteConfig.differentiators.map((item) => (
                <div
                  key={item.id}
                  className="group rounded-[var(--radius-xl)] border border-border bg-surface p-7 transition hover:border-gold-200 hover:shadow-[var(--shadow-soft)]"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 text-gold-600 transition-colors duration-300 group-hover:bg-gold-200 group-hover:text-gold-700">
                    <FeatureIcon icon={item.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/diferenciais/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition hover:text-gold-700"
              >
                Ver todos os diferenciais
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="bg-premium-dark py-20 sm:py-24">
          <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Pronto para dar o próximo passo?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              Fale com a gente e receba uma consultoria personalizada sobre os melhores lançamentos para o seu perfil.
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
