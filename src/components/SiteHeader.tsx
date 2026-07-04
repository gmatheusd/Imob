"use client";

import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import { empreendimentos } from "@/config/empreendimentos";
import { siteImages } from "@/config/siteImages";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileEmp, setMobileEmp] = useState(false);
  const wa = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    siteConfig.whatsappMessages.consultant,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);


  const onDark = !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-border/70 bg-surface/90 py-3 backdrop-blur-md"
          : "border-b border-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="group shrink-0"
          onClick={() => setOpen(false)}
          aria-label="Danilo Ventura Negócios Imobiliários - início"
        >
          <Image
            src={onDark ? siteImages.logo.dark : siteImages.logo.light}
            alt={siteImages.logo.alt}
            width={siteImages.logo.width}
            height={siteImages.logo.height}
            className="h-11 w-auto object-contain"
            priority
          />
        </Link>

        {/* Nav desktop */}
        <nav
          className={`hidden items-center gap-8 text-sm font-medium transition-colors lg:flex ${
            onDark ? "text-white/90" : "text-text-muted"
          }`}
          aria-label="Principal"
        >
          {siteConfig.navLinks.map((item) => {
            if (item.label === "Empreendimentos") {
              return (
                <div key={item.href} className="group relative">
                  <button
                    type="button"
                    className={`inline-flex items-center gap-1 transition-colors hover:text-gold-600 ${
                      onDark ? "hover:text-gold-200" : ""
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180"
                      aria-hidden
                    />
                  </button>

                  <div className="pointer-events-none absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                  <div className="rounded-[var(--radius-xl)] border border-border bg-surface shadow-[var(--shadow-soft)]">
                    <div className="p-2">
                      <Link
                        href="/empreendimentos/"
                        className="flex items-center rounded-lg px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-gold-600 transition hover:bg-surface-muted"
                      >
                        Ver todos
                      </Link>
                      <div className="my-1 border-t border-border" />
                      {empreendimentos.map((e) => (
                        <Link
                          key={e.slug}
                          href={`/empreendimentos/${e.slug}/`}
                          className="flex flex-col rounded-lg px-3 py-2.5 transition hover:bg-surface-muted"
                        >
                          <span className="text-sm font-semibold text-ink">{e.name}</span>
                          <span className="mt-0.5 text-xs text-text-muted">{e.neighborhood} · {e.segmentLabel}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative transition-colors hover:text-gold-600 ${
                  onDark ? "hover:text-gold-200" : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center justify-center rounded-full bg-gold-500 px-5 py-2.5 text-sm font-semibold text-ink shadow-[var(--shadow-gold)] transition hover:bg-gold-600 hover:text-white lg:inline-flex"
        >
          Fale com um consultor
        </a>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border transition lg:hidden ${
            onDark ? "border-white/30 text-white" : "border-border text-ink"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </div>

      {/* Menu mobile */}
      {open ? (
        <div id="mobile-menu" className="border-t border-border bg-surface lg:hidden">
          <nav
            className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-base font-medium sm:px-6"
            aria-label="Mobile"
          >
            {siteConfig.navLinks.map((item) => {
              if (item.label === "Empreendimentos") {
                return (
                  <div key={item.href}>
                    <button
                      type="button"
                      onClick={() => setMobileEmp((v) => !v)}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-text-muted transition hover:bg-surface-muted hover:text-gold-600"
                    >
                      {item.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${mobileEmp ? "rotate-180" : ""}`}
                        aria-hidden
                      />
                    </button>
                    {mobileEmp && (
                      <div className="ml-3 mt-1 grid gap-0.5 border-l-2 border-gold-200 pl-3">
                        <Link
                          href="/empreendimentos/"
                          onClick={() => { setOpen(false); setMobileEmp(false); }}
                          className="rounded-lg px-2 py-2 text-sm font-semibold text-gold-600 transition hover:bg-surface-muted"
                        >
                          Ver todos
                        </Link>
                        {empreendimentos.map((e) => (
                          <Link
                            key={e.slug}
                            href={`/empreendimentos/${e.slug}/`}
                            onClick={() => { setOpen(false); setMobileEmp(false); }}
                            className="flex flex-col rounded-lg px-2 py-2 transition hover:bg-surface-muted"
                          >
                            <span className="text-sm font-medium text-ink">{e.name}</span>
                            <span className="text-xs text-text-muted">{e.neighborhood}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-text-muted transition hover:bg-surface-muted hover:text-gold-600"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-gold-500 px-4 py-3 text-center font-semibold text-ink"
              onClick={() => setOpen(false)}
            >
              Fale com um consultor
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
