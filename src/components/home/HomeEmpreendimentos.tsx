"use client";

import { EmpreendimentoCard } from "@/components/EmpreendimentoCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  empreendimentos,
  type Segment,
} from "@/config/empreendimentos";
import { homePageContent } from "@/config/homePage";
import { useState } from "react";

type Filter = "todos" | Segment;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "premium", label: "Premium" },
  { id: "alto", label: "Alto padrão" },
  { id: "acessivel", label: "Acessível" },
];

export function HomeEmpreendimentos() {
  const [filter, setFilter] = useState<Filter>("todos");
  const content = homePageContent.empreendimentos;

  const visible = empreendimentos.filter(
    (e) => filter === "todos" || e.segment === filter,
  );

  return (
    <section
      id="empreendimentos"
      aria-labelledby="empreendimentos-heading"
      className="scroll-mt-24 bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            id="empreendimentos-heading"
            eyebrow={content.eyebrow}
            title={content.title}
            subtitle={content.subtitle}
          />
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrar empreendimentos por segmento"
          >
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  aria-pressed={active}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "bg-ink text-white"
                      : "border border-border text-text-muted hover:border-ink hover:text-ink"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((emp) => (
            <div
              key={emp.slug}
              className={emp.featured ? "sm:col-span-2 lg:col-span-3" : ""}
            >
              <EmpreendimentoCard emp={emp} featured={emp.featured} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
