import type { Empreendimento } from "@/config/empreendimentos";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const TAG_STYLES: Record<Empreendimento["segment"], string> = {
  premium: "bg-gold-500 text-ink",
  alto: "bg-white/90 text-ink",
  acessivel: "border border-white/40 bg-graphite/70 text-white",
};

export function EmpreendimentoCard({
  emp,
  featured = false,
}: {
  emp: Empreendimento;
  featured?: boolean;
}) {
  return (
    <article
      className={`group relative flex transform-gpu overflow-hidden rounded-[var(--radius-2xl)] bg-graphite text-white shadow-[var(--shadow-soft)] transition-transform duration-500 ease-out hover:-translate-y-1 ${
        featured
          ? "min-h-[26rem] flex-col justify-end lg:min-h-[32rem] lg:flex-row lg:items-end lg:justify-start"
          : "min-h-[26rem] flex-col justify-end"
      }`}
    >
      {/* Capa: foto real do empreendimento (gradiente atrás como fallback) */}
      <div
        className="placeholder-shot absolute inset-0 z-0"
        style={{ ["--shot-a" as string]: emp.shotColor }}
      >
        <Image
          src={emp.cover}
          alt={`Imagem do ${emp.name}`}
          fill
          sizes={
            featured
              ? "(min-width: 1024px) 1024px, 100vw"
              : "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          }
          className="object-cover transform-gpu [backface-visibility:hidden] will-change-transform transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/45 to-ink/95" />
      </div>

      <span
        className={`absolute left-5 top-5 z-20 rounded-full px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.12em] backdrop-blur ${TAG_STYLES[emp.segment]}`}
      >
        {emp.segmentLabel}
      </span>

      <div
        className={`relative z-10 p-6 sm:p-7 ${
          featured ? "lg:max-w-xl lg:p-9" : ""
        }`}
      >
        <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-200">
          <MapPin className="h-3.5 w-3.5" aria-hidden />
          São Paulo
        </p>
        <h3 className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl">
          {emp.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-white/80">
          {featured ? emp.shortDescription : emp.tagline}
        </p>

        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-white/75">
          <li>{emp.facts.typologies}</li>
          <li aria-hidden>·</li>
          <li>{emp.facts.areas}</li>
          <li aria-hidden>·</li>
          <li>{emp.facts.floors}</li>
        </ul>

        <Link
          href={`/empreendimentos/${emp.slug}/`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition group-hover:text-gold-200"
        >
          Ver empreendimento
          <ArrowRight
            className="h-4 w-4 transition group-hover:translate-x-1"
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}
