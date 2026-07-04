import { homePageContent } from "@/config/homePage";
import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import { MessageCircle } from "lucide-react";

export function HomeCta() {
  const content = homePageContent.cta;
  const wa = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    siteConfig.whatsappMessages.general,
  );

  return (
    <section aria-labelledby="cta-heading" className="bg-gold-500">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-20">
        <div className="max-w-2xl">
          <h2
            id="cta-heading"
            className="font-display text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl"
          >
            {content.title}
          </h2>
          <p className="mt-3 text-ink/75">{content.description}</p>
        </div>
        <a
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-semibold text-white transition hover:bg-graphite"
        >
          <MessageCircle className="h-5 w-5" aria-hidden />
          {content.buttonLabel}
        </a>
      </div>
    </section>
  );
}
