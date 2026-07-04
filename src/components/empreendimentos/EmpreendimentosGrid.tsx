"use client";

import { EmpreendimentoCard } from "@/components/EmpreendimentoCard";
import { empreendimentos, type Segment } from "@/config/empreendimentos";
import { useState } from "react";

type Filter = "todos" | Segment;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "premium", label: "Premium" },
  { id: "alto", label: "Alto padrão" },
  { id: "acessivel", label: "Mais acessível" },
];

export function EmpreendimentosGrid() {
  const [filter, setFilter] = useState<Filter>("todos");

  const visible = empreendimentos.filter(
    (e) => filter === "todos" || e.segment === filter,
  );

  return (
    <>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filtrar por segmento"
      >
        {FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => setFilter(f.id)}
              aria-pressed={active}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
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
    </>
  );
}
