import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import type { Empreendimento } from "@/config/empreendimentos";
import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/** Página interna resumida para empreendimentos cujo conteúdo completo
 *  ainda está sendo finalizado. Mantém os links ativos e converte via WhatsApp. */
export function EmpreendimentoEmBreve({ emp }: { emp: Empreendimento }) {
  const wa = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    `Olá! Tenho interesse no ${emp.name} (${emp.neighborhood}). Gostaria de receber plantas, valores e condições.`,
  );

  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-premium-dark">
          <Image
            src={emp.cover}
            alt={`${emp.name} - perspectiva ilustrada`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-overlay pointer-events-none absolute inset-0" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-20">
            <span className="inline-block rounded-full bg-gold-500 px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink">
              {emp.segmentLabel}
            </span>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {emp.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] text-gold-200">
              <MapPin className="h-4 w-4" aria-hidden />
              {emp.neighborhood}, São Paulo
            </p>
            <p className="mt-4 max-w-2xl text-base text-white/85">
              {emp.shortDescription}
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
              <li>{emp.facts.typologies}</li>
              <li aria-hidden>·</li>
              <li>{emp.facts.areas}</li>
              <li aria-hidden>·</li>
              <li>{emp.facts.floors}</li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink shadow-[var(--shadow-gold)] transition hover:bg-gold-600 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Falar com um consultor
              </a>
              <Link
                href="/#empreendimentos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Ver outros empreendimentos
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-surface py-20 text-center sm:py-24">
          <div className="mx-auto max-w-xl px-4 sm:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Conteúdo completo em breve
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
              Plantas, lazer e galeria a caminho
            </h2>
            <p className="mt-4 text-text-muted">
              Estamos finalizando a página completa deste empreendimento. Enquanto
              isso, fale com um de nossos consultores e receba todo o material.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-graphite"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Quero saber mais
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppBubble />
    </>
  );
}
