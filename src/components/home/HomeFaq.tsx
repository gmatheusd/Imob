"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { homePageContent } from "@/config/homePage";
import { siteConfig } from "@/config/siteConfig";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function HomeFaq() {
  const content = homePageContent.faq;
  const [open, setOpen] = useState<string | null>(siteConfig.faq[0]?.id ?? null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="scroll-mt-24 bg-surface-muted py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="faq-heading"
          eyebrow={content.eyebrow}
          title={content.title}
          align="center"
        />

        <div className="mt-10 divide-y divide-border overflow-hidden rounded-[var(--radius-xl)] border border-border bg-surface">
          {siteConfig.faq.map((item) => {
            const isOpen = open === item.id;
            return (
              <div key={item.id}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-surface-muted"
                  >
                    <span className="font-medium text-ink">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-gold-600 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-text-muted">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
