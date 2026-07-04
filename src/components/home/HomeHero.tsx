import { FeatureIcon } from "@/components/FeatureIcon";
import { homePageContent } from "@/config/homePage";
import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import { siteImages } from "@/config/siteImages";
import type { FeatureIconId } from "@/config/siteConfig";
import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HomeHero() {
  const hero = homePageContent.hero;
  const wa = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    siteConfig.whatsappMessages.consultant,
  );

  const [before, after] = hero.title.split(hero.titleEmphasis);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-premium-dark"
    >
      {/* Foto de fundo bem escurecida (no lugar do fundo preto) */}
      <Image
        src={siteImages.heroBackground.src}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-ink/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/55 to-ink/35" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:pb-24 lg:pt-36 lg:px-8">
        {/* Coluna de texto */}
        <div className="animate-[var(--animate-fade-up)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-200 sm:text-sm">
            {hero.kicker}
          </p>

          <h1
            id="hero-heading"
            className="mt-5 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl"
          >
            {before}
            <em className="not-italic text-gold-400">{hero.titleEmphasis}</em>
            {after}
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
            {hero.lead}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/empreendimentos/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink shadow-[var(--shadow-gold)] transition hover:bg-gold-600 hover:text-white"
            >
              {hero.primaryCta}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        {/* Card de imagem + selos flutuantes */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-2xl)] shadow-[var(--shadow-soft)]">
            <Image
              src={siteImages.hero.src}
              alt={siteImages.hero.alt}
              fill
              priority
              sizes="(min-width: 1024px) 32rem, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>

          {/* Selos flutuantes */}
          {hero.badges.map((badge, i) => (
            <div
              key={badge.label}
              className={`absolute z-10 flex items-center gap-2.5 rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md ${
                i === 0 ? "-left-3 top-8 sm:-left-5" : "-right-3 bottom-10 sm:-right-5"
              }`}
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-500 text-ink">
                <FeatureIcon
                  icon={badge.icon as FeatureIconId}
                  className="h-4 w-4"
                />
              </span>
              {badge.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
