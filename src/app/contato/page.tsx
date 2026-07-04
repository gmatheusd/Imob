"use client";

import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import { empreendimentos } from "@/config/empreendimentos";
import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import { Check, Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

type Status = { type: "ok" | "err"; message: string } | null;

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

export default function ContatoPage() {
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
    const mensagem = String(data.get("mensagem") ?? "").trim();

    if (!nome || !telefone) {
      setStatus({ type: "err", message: "Preencha nome e telefone." });
      return;
    }

    const msg =
      `Olá! Sou ${nome}.` +
      (empreendimento ? ` Tenho interesse no ${empreendimento}.` : "") +
      (dormitorios ? ` Procuro ${dormitorios}.` : "") +
      (mensagem ? ` ${mensagem}` : "") +
      ` Telefone: ${telefone}` +
      (email ? ` · E-mail: ${email}` : "");

    const url = buildWhatsAppUrl(siteConfig.contact.whatsappE164, msg);

    setStatus({
      type: "ok",
      message: "Abrindo o WhatsApp para concluir…",
    });
    window.open(url, "_blank", "noopener,noreferrer");
    form.reset();
  }

  const wa = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    siteConfig.whatsappMessages.general,
  );

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="Fale com o Danilo"
          title={<>Vamos conversar sobre <em className="not-italic text-gold-400">o seu imóvel</em></>}
          subtitle="Preencha o formulário ou escolha o canal de atendimento que preferir. O Danilo responde com agilidade e atenção."
        />

        {/* Canais + formulário */}
        <section className="bg-surface py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:items-start lg:gap-16 lg:px-8">

            {/* Canais de contato */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                Canais de atendimento
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-text-muted">
                Prefere ir direto ao ponto? Escolha o canal mais conveniente para você.
              </p>

              <ul className="mt-8 grid gap-4">
                <li>
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 rounded-[var(--radius-xl)] border border-border bg-surface p-5 transition hover:border-gold-300 hover:shadow-[var(--shadow-soft)]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-600 transition-colors group-hover:bg-gold-200">
                      <MessageCircle className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">WhatsApp</p>
                      <p className="mt-0.5 text-sm text-text-muted">
                        {siteConfig.contact.phoneDisplay}
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="group flex items-center gap-4 rounded-[var(--radius-xl)] border border-border bg-surface p-5 transition hover:border-gold-300 hover:shadow-[var(--shadow-soft)]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-600 transition-colors group-hover:bg-gold-200">
                      <Mail className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">E-mail</p>
                      <p className="mt-0.5 text-sm text-text-muted">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.contact.phoneE164}`}
                    className="group flex items-center gap-4 rounded-[var(--radius-xl)] border border-border bg-surface p-5 transition hover:border-gold-300 hover:shadow-[var(--shadow-soft)]"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-50 text-gold-600 transition-colors group-hover:bg-gold-200">
                      <Phone className="h-6 w-6" aria-hidden />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">Telefone</p>
                      <p className="mt-0.5 text-sm text-text-muted">
                        {siteConfig.contact.phoneDisplay}
                      </p>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="mt-8 rounded-[var(--radius-xl)] border border-border bg-surface-muted p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-600">
                  CRECI {siteConfig.creci}
                </p>
                <p className="mt-2 text-sm font-semibold text-ink">
                  {siteConfig.legalName}
                </p>
                <p className="mt-1 text-xs text-text-muted">
                  CNPJ {siteConfig.cnpj}
                </p>
                <ul className="mt-4 grid gap-1.5">
                  {[
                    "Atendimento consultivo e personalizado",
                    "Resposta rápida pelo WhatsApp",
                    "Visita ao decorado agendada por você",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-text-muted">
                      <Check className="h-3.5 w-3.5 shrink-0 text-gold-500" strokeWidth={3} aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Formulário */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-[var(--radius-2xl)] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] sm:p-8"
            >
              <h2 className="font-display text-2xl font-semibold text-ink">
                Envie uma mensagem
              </h2>
              <p className="mt-2 text-sm text-text-muted">
                Preencha e o Danilo entra em contato com as melhores oportunidades para o seu perfil.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
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
                <Field label="Mensagem" htmlFor="mensagem">
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={4}
                    placeholder="Conte um pouco sobre o que procura…"
                    className="field-input resize-none"
                  />
                </Field>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-ink shadow-[var(--shadow-gold)] transition hover:bg-gold-600 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Enviar pelo WhatsApp
              </button>

              {status ? (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-3 text-sm font-medium ${
                    status.type === "ok" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {status.message}
                </p>
              ) : null}
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppBubble />
    </>
  );
}
