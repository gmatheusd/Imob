"use client";

import type { ImagemLegenda } from "@/config/empreendimentosDetalhes";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function Galeria({
  imagens,
  variant = "foto",
}: {
  imagens: ImagemLegenda[];
  variant?: "foto" | "planta";
}) {
  const [aberta, setAberta] = useState<number | null>(null);
  const isPlanta = variant === "planta";

  const prev = () => setAberta((i) => (i === null ? null : (i - 1 + imagens.length) % imagens.length));
  const next = () => setAberta((i) => (i === null ? null : (i + 1) % imagens.length));

  useEffect(() => {
    if (aberta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberta(null);
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aberta, imagens.length]);

  const imgAberta = aberta !== null ? imagens[aberta] : null;

  return (
    <>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {imagens.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setAberta(i)}
            className={`group relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500 ${
              isPlanta
                ? "flex flex-col overflow-hidden rounded-[var(--radius-xl)] border border-border bg-white transition hover:border-gold-300 hover:shadow-[var(--shadow-soft)]"
                : "aspect-[4/3] overflow-hidden rounded-[var(--radius-xl)] bg-graphite"
            }`}
          >
            <div className={isPlanta ? "relative aspect-[4/3] w-full" : "relative h-full w-full"}>
              <Image
                src={img.src}
                alt={img.dorms ?? img.caption ?? "Planta do empreendimento"}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className={`transform-gpu transition-transform duration-700 ease-out ${
                  isPlanta
                    ? "object-contain p-3"
                    : "object-cover group-hover:scale-[1.04]"
                }`}
              />
              {img.caption && !isPlanta ? (
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/85 to-transparent px-4 pb-3 pt-8 text-left text-xs font-medium text-white">
                  {img.caption}
                </span>
              ) : null}
            </div>
            {isPlanta && (img.dorms || img.area || img.vagas) ? (
              <div className="flex flex-wrap items-center gap-1.5 border-t border-border px-3 py-2.5">
                {img.dorms && (
                  <span className="text-xs font-semibold text-ink">{img.dorms}</span>
                )}
                {img.area && (
                  <span className="rounded-full bg-gold-50 px-2 py-0.5 text-xs font-medium text-gold-700">
                    {img.area}
                  </span>
                )}
                {img.vagas && (
                  <span className="rounded-full bg-surface-muted px-2 py-0.5 text-xs text-text-muted">
                    {img.vagas}
                  </span>
                )}
              </div>
            ) : null}
          </button>
        ))}
      </div>

      {aberta !== null && imgAberta ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4"
          onClick={() => setAberta(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Visualizar imagem"
        >
          {/* Fechar */}
          <button
            type="button"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Fechar"
            onClick={() => setAberta(null)}
          >
            <X className="h-5 w-5" aria-hidden />
          </button>

          {/* Navegação — prev */}
          {imagens.length > 1 && (
            <button
              type="button"
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
              aria-label="Anterior"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft className="h-6 w-6" aria-hidden />
            </button>
          )}

          {/* Imagem + info */}
          <figure
            className="flex w-full max-w-4xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {isPlanta ? (
              <div className="w-full rounded-[var(--radius-xl)] bg-white p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={imgAberta.src}
                  alt={imgAberta.dorms ?? "Planta"}
                  className="mx-auto max-h-[62vh] w-auto object-contain"
                />
              </div>
            ) : (
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={imgAberta.src}
                  alt={imgAberta.caption ?? "Imagem"}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            )}

            {/* Chips de tipologia no lightbox */}
            {isPlanta && (imgAberta.dorms || imgAberta.area || imgAberta.vagas) ? (
              <div className="mt-4 flex flex-wrap justify-center gap-2">
                {imgAberta.dorms && (
                  <span className="rounded-full bg-white/15 px-3.5 py-1.5 text-sm font-semibold text-white">
                    {imgAberta.dorms}
                  </span>
                )}
                {imgAberta.area && (
                  <span className="rounded-full bg-gold-500 px-3.5 py-1.5 text-sm font-semibold text-ink">
                    {imgAberta.area}
                  </span>
                )}
                {imgAberta.vagas && (
                  <span className="rounded-full bg-white/10 px-3.5 py-1.5 text-sm text-white/70">
                    {imgAberta.vagas}
                  </span>
                )}
              </div>
            ) : null}

            {/* Caption normal (fotos) */}
            {!isPlanta && imgAberta.caption ? (
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {imgAberta.caption}
              </figcaption>
            ) : null}

            {/* Contador */}
            {imagens.length > 1 && (
              <p className="mt-3 text-xs text-white/40">
                {aberta + 1} / {imagens.length}
              </p>
            )}
          </figure>

          {/* Navegação — next */}
          {imagens.length > 1 && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
              aria-label="Próxima"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight className="h-6 w-6" aria-hidden />
            </button>
          )}
        </div>
      ) : null}
    </>
  );
}
