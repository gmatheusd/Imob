import { empreendimentos } from "@/config/empreendimentos";
import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import { siteImages } from "@/config/siteImages";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const wa = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    siteConfig.whatsappMessages.general,
  );

  return (
    <footer className="bg-premium-dark text-text-invert">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Image
              src={siteImages.logo.dark}
              alt={siteImages.logo.alt}
              width={siteImages.logo.width}
              height={siteImages.logo.height}
              className="h-20 w-auto object-contain"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              Há mais de 16 anos no mercado imobiliário, com consultoria
              personalizada em lançamentos de médio e alto padrão em São Paulo.
              Mais do que vender imóveis, ajudar você a realizar projetos de
              vida.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-gold-400 hover:text-gold-200"
                aria-label="Instagram do Danilo Ventura"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-gold-400 hover:text-gold-200"
                aria-label="Enviar e-mail para o Danilo"
              >
                <Mail className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Empreendimentos
            </h4>
            <ul className="mt-4 grid gap-2.5 text-sm text-white/70">
              {empreendimentos.map((e) => (
                <li key={e.slug}>
                  <Link
                    href={`/empreendimentos/${e.slug}/`}
                    className="transition hover:text-gold-200"
                  >
                    {e.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Contato
            </h4>
            <ul className="mt-4 grid gap-2.5 text-sm text-white/70">
              <li>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-gold-200"
                >
                  WhatsApp comercial
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition hover:text-gold-200"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <Link
                  href="/#contato"
                  className="transition hover:text-gold-200"
                >
                  Formulário de interesse
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/40">
          {/* Linha 1: copyright + aviso legal */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-white/50">
              © {year} {siteConfig.legalName} · CRECI {siteConfig.creci} · CNPJ {siteConfig.cnpj}
            </span>
            <span className="sm:text-right">
              Imagens meramente ilustrativas. Empreendimentos comercializados sob responsabilidade das respectivas incorporadoras.
            </span>
          </div>

          {/* Linha 2: mapa do site + crédito */}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              <Link href="/mapa-do-site/" className="transition hover:text-white/70">
                Mapa do site
              </Link>
              <Link href="/politica-de-privacidade/" className="transition hover:text-white/70">
                Política de Privacidade
              </Link>
            </div>
            <a
              href="https://axcalidigital.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition hover:text-white/70"
            >
              <span>Site criado e otimizado por</span>
              <Image
                src="/assets/img/logo-excali.png"
                alt="Axcali Digital"
                width={18}
                height={18}
                className="h-4 w-auto object-contain"
              />
              <span className="font-semibold">Axcali Digital</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
