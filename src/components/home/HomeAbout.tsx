import { homePageContent } from "@/config/homePage";
import { siteConfig } from "@/config/siteConfig";
import { siteImages } from "@/config/siteImages";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HomeAbout() {
  const content = homePageContent.about;

  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="scroll-mt-24 bg-surface-muted py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
            {content.eyebrow}
          </p>
          <h2
            id="sobre-heading"
            className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl"
          >
            <em className="not-italic text-gold-500">DV</em> Imob
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
            {siteConfig.about.summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <ul className="mt-7 flex flex-wrap gap-2">
            {siteConfig.trustPillars.map((pillar) => (
              <li
                key={pillar}
                className="rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs font-semibold text-text-muted"
              >
                {pillar}
              </li>
            ))}
          </ul>

          <Link
            href="/sobre/"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-gold-600 transition hover:text-gold-700"
          >
            Conheça a imobiliária
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>

        {/* Card de perfil do profissional */}
        <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-[var(--radius-2xl)] bg-graphite shadow-[var(--shadow-soft)]">
          <Image
            src={siteImages.aboutHighlight.src}
            alt={siteImages.aboutHighlight.alt}
            fill
            sizes="(min-width: 1024px) 24rem, 100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 via-ink/40 to-transparent px-7 pb-7 pt-20 text-white">
            <p className="font-display text-2xl font-semibold sm:text-3xl">
              <em className="not-italic text-gold-300">DV</em> Imob
            </p>
            <p className="mt-1 text-sm text-gold-200">{content.rest}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
