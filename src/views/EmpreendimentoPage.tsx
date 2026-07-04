import { Galeria } from "@/components/empreendimento/Galeria";
import { MapaProximidade } from "@/components/empreendimento/MapaProximidade";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import type { Empreendimento } from "@/config/empreendimentos";
import type { EmpreendimentoDetalhe } from "@/config/empreendimentosDetalhes";
import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Download,
  MapPin,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function EmpreendimentoPage({
  emp,
  detalhe,
}: {
  emp: Empreendimento;
  detalhe: EmpreendimentoDetalhe;
}) {
  const waVisita = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    `Olá! Tenho interesse no ${emp.name} (${emp.neighborhood}). Gostaria de agendar uma visita e receber plantas e valores.`,
  );
  const waInfo = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    `Olá! Vim pela página do ${emp.name} e gostaria de mais informações.`,
  );
  const pdfHref = detalhe.pdf ? encodeURI(detalhe.pdf) : undefined;

  return (
    <>
      <SiteHeader />
      <main>
        {/* ===== HERO ===== */}
        <section className="relative flex min-h-[88svh] items-end overflow-hidden bg-premium-dark">
          <Image
            src={detalhe.heroImage}
            alt={`${emp.name} - perspectiva ilustrada`}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="hero-overlay pointer-events-none absolute inset-0" />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-32 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
            <nav
              aria-label="Você está em"
              className="mb-6 flex items-center gap-1.5 text-xs font-medium text-white/70"
            >
              <Link href="/" className="transition hover:text-white">
                Início
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              <Link href="/#empreendimentos" className="transition hover:text-white">
                Empreendimentos
              </Link>
              <ChevronRight className="h-3.5 w-3.5" aria-hidden />
              <span className="text-white/90">{emp.name}</span>
            </nav>

            <span className="inline-block rounded-full bg-gold-500 px-3.5 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-ink">
              {emp.segmentLabel}
            </span>

            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {emp.name}
            </h1>
            <p className="mt-3 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.1em] text-gold-200">
              <MapPin className="h-4 w-4" aria-hidden />
              {emp.neighborhood}, São Paulo
            </p>
            <p className="mt-4 max-w-2xl font-display text-xl italic text-white/90 sm:text-2xl">
              {emp.tagline}
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/85">
              <li>{emp.facts.typologies}</li>
              <li aria-hidden>·</li>
              <li>{emp.facts.areas}</li>
              <li aria-hidden>·</li>
              <li>{emp.facts.floors}</li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={waVisita}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-ink shadow-[var(--shadow-gold)] transition hover:bg-gold-600 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden />
                Agendar visita
              </a>
              {pdfHref ? (
                <a
                  href={pdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Baixar material
                </a>
              ) : null}
            </div>
          </div>
        </section>

        {/* ===== CONCEITO + ARQUITETOS ===== */}
        <section className="bg-surface py-20 sm:py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                O empreendimento
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                {emp.tagline}
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-text-muted">
                {detalhe.conceito.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {detalhe.arquitetos.length ? (
                <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6">
                  {detalhe.arquitetos.map((a) => (
                    <div key={a.label}>
                      <dt className="text-xs uppercase tracking-[0.12em] text-text-muted">
                        {a.label}
                      </dt>
                      <dd className="mt-1 font-display text-lg text-ink">
                        {a.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}
            </div>

            <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[var(--radius-2xl)] bg-graphite shadow-[var(--shadow-soft)]">
              <Image
                src={detalhe.conceitoImage}
                alt={`Fachada do ${emp.name}`}
                fill
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ===== FICHA TÉCNICA ===== */}
        <section aria-label="Ficha técnica" className="bg-ink py-14 text-white sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center sm:grid-cols-3 lg:grid-cols-6">
              {detalhe.fichaTecnica.map((f) => (
                <div key={f.label}>
                  <dt className="text-xs uppercase tracking-[0.1em] text-white/55">
                    {f.label}
                  </dt>
                  <dd className="mt-1 font-display text-2xl font-semibold text-gold-400 sm:text-3xl">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ===== DIFERENCIAIS ===== */}
        {detalhe.diferenciais.length ? (
          <section className="bg-surface-muted py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                Diferenciais
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                Detalhes que tornam este endereço único
              </h2>
              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                {detalhe.diferenciais.map((d) => (
                  <div
                    key={d.title}
                    className="rounded-[var(--radius-xl)] border border-border bg-surface p-7"
                  >
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-muted">
                      {d.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ===== TIPOLOGIAS ===== */}
        <section className="bg-surface py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
              Plantas e metragens
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
              Tipologias
            </h2>

            <div className="mt-10 overflow-hidden rounded-[var(--radius-xl)] border border-border">
              {detalhe.tipologias.map((t, i) => (
                <div
                  key={i}
                  className={`flex flex-col gap-1 px-6 py-5 sm:flex-row sm:items-center sm:justify-between ${
                    i > 0 ? "border-t border-border" : ""
                  }`}
                >
                  <span className="font-display text-lg font-semibold text-ink">
                    {t.dorms}
                  </span>
                  <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-muted">
                    <span>{t.area}</span>
                    {t.vagas ? <span>{t.vagas}</span> : null}
                    {t.unidades ? <span>{t.unidades}</span> : null}
                  </div>
                </div>
              ))}
            </div>

            {detalhe.plantas.length ? (
              <div className="mt-10">
                <h3 className="mb-5 font-display text-xl font-semibold text-ink">
                  Plantas humanizadas
                </h3>
                <Galeria imagens={detalhe.plantas} variant="planta" />
              </div>
            ) : null}
          </div>
        </section>

        {/* ===== LAZER ===== */}
        {detalhe.lazer.length ? (
          <section className="bg-premium-dark py-20 text-white sm:py-24 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-200">
                Lazer e bem-estar
              </p>
              <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                Uma estrutura de lazer completa
              </h2>

              <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
                {detalhe.lazer.map((grupo) => (
                  <div key={grupo.title}>
                    <h3 className="font-display text-xl font-semibold text-gold-400">
                      {grupo.title}
                    </h3>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                      {grupo.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-sm text-white/85"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold-400">
                            <Check className="h-3 w-3" aria-hidden strokeWidth={3} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* ===== GALERIA ===== */}
        {detalhe.galeria.length ? (
          <section className="bg-surface py-20 sm:py-24 lg:py-28">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                Galeria
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                Perspectivas ilustradas
              </h2>
              <p className="mt-3 max-w-2xl text-sm text-text-muted">
                Clique nas imagens para ampliar. Perspectivas artísticas, sujeitas
                a alterações.
              </p>
              <div className="mt-10">
                <Galeria imagens={detalhe.galeria} />
              </div>
            </div>
          </section>
        ) : null}

        {/* ===== LOCALIZAÇÃO ===== */}
        <section className="bg-surface-muted py-20 sm:py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center lg:gap-16">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-600">
                  Localização
                </p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                  {emp.locationHighlight}
                </h2>
                <p className="mt-3 flex items-center gap-2 text-sm text-text-muted">
                  <MapPin className="h-4 w-4 text-gold-600" aria-hidden />
                  {emp.neighborhood}, São Paulo
                </p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {detalhe.localizacao.pontos.map((p) => (
                    <li
                      key={p.label}
                      className="flex items-center justify-between gap-3 border-b border-border py-2 text-sm"
                    >
                      <span className="text-text">{p.label}</span>
                      {p.time ? (
                        <span className="shrink-0 font-semibold text-gold-700">
                          {p.time}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-text-muted">
                  Endereço exato e rota informados no atendimento. Agende uma visita guiada com a gente.
                </p>
              </div>

              <MapaProximidade neighborhood={emp.neighborhood} />
            </div>
          </div>
        </section>

        {/* ===== CTA FINAL ===== */}
        <section className="bg-gold-500">
          <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
                Conheça de perto o {emp.name}.
              </h2>
              <p className="mt-3 text-ink/75">
                Fale com um consultor, receba a tabela de unidades e agende uma
                visita ao stand de vendas.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={waInfo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:bg-graphite"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Falar no WhatsApp
              </a>
              <Link
                href="/#empreendimentos"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/30 px-7 py-4 text-sm font-semibold text-ink transition hover:bg-ink/5"
              >
                Ver outros empreendimentos
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppBubble />
    </>
  );
}
