import { siteImages } from "@/config/siteImages";
import Image from "next/image";

interface PageHeroProps {
  kicker?: string;
  title: React.ReactNode;
  companyName?: string;
  subtitle?: string;
  align?: "left" | "center";
  showLogo?: boolean;
}

export function PageHero({
  kicker,
  title,
  companyName,
  subtitle,
  align = "center",
  showLogo = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-premium-dark pt-32 pb-20 sm:pb-24 lg:pt-40 lg:pb-28">
      <div className="absolute inset-0">
        <Image
          src={siteImages.heroBackground.src}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/35" />
      </div>

      {/* Layout com logo à direita */}
      {showLogo ? (
        <div className="relative z-10 mx-auto flex max-w-5xl items-center gap-12 px-4 sm:px-6 lg:px-8">
          <div className="flex-1">
            {kicker && (
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400 sm:text-sm">
                {kicker}
              </p>
            )}
            <h1
              className={`font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl ${kicker ? "mt-5" : ""}`}
            >
              {title}
            </h1>
            {companyName && (
              <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-white/55">
                {companyName}
              </p>
            )}
            {subtitle && (
              <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
                {subtitle}
              </p>
            )}
          </div>
          <div className="hidden shrink-0 lg:flex lg:items-center lg:justify-end">
            <Image
              src={siteImages.logo.dark}
              alt={siteImages.logo.alt}
              width={siteImages.logo.width}
              height={siteImages.logo.height}
              className="h-28 w-auto object-contain opacity-90"
              priority
            />
          </div>
        </div>
      ) : (
        <div
          className={`relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 ${
            align === "center" ? "text-center" : ""
          }`}
        >
          {kicker && (
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-400 sm:text-sm">
              {kicker}
            </p>
          )}
          <h1
            className={`font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl ${
              kicker ? "mt-5" : ""
            }`}
          >
            {title}
          </h1>
          {companyName && (
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-white/55">
              {companyName}
            </p>
          )}
          {subtitle && (
            <p className="mt-6 text-base leading-relaxed text-white/85 sm:text-lg">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </section>
  );
}
