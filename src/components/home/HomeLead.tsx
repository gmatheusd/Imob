"use client";

import { empreendimentos } from "@/config/empreendimentos";
import { homePageContent } from "@/config/homePage";
import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import { Check } from "lucide-react";
import { useState } from "react";

type Status = { type: "ok" | "err"; message: string } | null;

export function HomeLead() {
  const content = homePageContent.lead;
  const [status, setStatus] = useState<Status>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "").trim();
    const telefone = String(data.get("telefone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const empreendimento = String(data.get("empreendimento") ?? "").trim();
    const dormitorios = String(data.get("dormitorios") ?? "").trim();

    if (!nome || !telefone) {
      setStatus({ type: "err", message: "Preencha nome e telefone." });
      return;
    }

    // Sem backend: encaminha o lead ao WhatsApp comercial.
    const msg =
      `Olá! Sou ${nome}.` +
      (empreendimento ? ` Tenho interesse no ${empreendimento}.` : "") +
      (dormitorios ? ` Procuro ${dormitorios}.` : "") +
      ` Telefone: ${telefone}` +
      (email ? ` · E-mail: ${email}` : "");
    const url = buildWhatsAppUrl(siteConfig.contact.whatsappE164, msg);

    setStatus({
      type: "ok",
      message: "Recebemos seus dados! Abrindo o WhatsApp para concluir…",
    });
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  }

  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="scroll-mt-24 bg-premium-dark py-20 text-white sm:py-24 lg:py-28"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-200">
            {content.eyebrow}
          </p>
          <h2
            id="contato-heading"
            className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
          >
            {content.title}
          </h2>
          <p className="mt-4 max-w-md text-white/75">{content.description}</p>
          <ul className="mt-8 grid gap-3">
            {content.bullets.map((b) => (
              <li key={b} className="flex items-center gap-3 text-sm text-white/85">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink">
                  <Check className="h-3.5 w-3.5" aria-hidden strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-[var(--radius-2xl)] bg-surface p-6 text-ink shadow-[var(--shadow-soft)] sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Nome completo *" htmlFor="nome">
              <input
                id="nome"
                name="nome"
                type="text"
                autoComplete="name"
                required
                className="field-input"
              />
            </Field>
            <Field label="Telefone / WhatsApp *" htmlFor="telefone">
              <input
                id="telefone"
                name="telefone"
                type="tel"
                autoComplete="tel"
                placeholder="(11) 90000-0000"
                required
                className="field-input"
              />
            </Field>
          </div>
          <div className="mt-4 grid gap-4">
            <Field label="E-mail" htmlFor="email">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="field-input"
              />
            </Field>
            <Field label="Empreendimento de interesse" htmlFor="empreendimento">
              <select
                id="empreendimento"
                name="empreendimento"
                className="field-input"
                defaultValue=""
              >
                <option value="">Selecione…</option>
                {empreendimentos.map((e) => (
                  <option key={e.slug} value={e.name}>
                    {e.name}
                  </option>
                ))}
                <option value="Ainda não decidi">Ainda não decidi</option>
              </select>
            </Field>
            <Field label="Dormitórios" htmlFor="dormitorios">
              <select
                id="dormitorios"
                name="dormitorios"
                className="field-input"
                defaultValue=""
              >
                <option value="">Selecione…</option>
                <option value="2 dormitórios">2 dormitórios</option>
                <option value="3 dormitórios">3 dormitórios</option>
                <option value="4 dormitórios">4 dormitórios</option>
              </select>
            </Field>
          </div>

          <button
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-gold-600 hover:text-white"
          >
            Quero saber mais
          </button>

          {status ? (
            <p
              role="status"
              aria-live="polite"
              className={`mt-3 text-sm font-medium ${
                status.type === "ok" ? "text-wpp-dark" : "text-red-600"
              }`}
            >
              {status.message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-semibold text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
