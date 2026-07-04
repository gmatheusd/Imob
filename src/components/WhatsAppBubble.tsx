import { buildWhatsAppUrl, siteConfig } from "@/config/siteConfig";
import { MessageCircle } from "lucide-react";

export function WhatsAppBubble() {
  const wa = buildWhatsAppUrl(
    siteConfig.contact.whatsappE164,
    siteConfig.whatsappMessages.general,
  );

  return (
    <a
      href={wa}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-wpp text-white shadow-lg shadow-emerald-900/20 transition hover:scale-105 hover:bg-wpp-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold-500"
      style={{ animation: "wpp-pulse 2.6s infinite" }}
      aria-label="Abrir conversa no WhatsApp com a MAC"
    >
      <MessageCircle className="h-7 w-7" aria-hidden strokeWidth={1.75} />
    </a>
  );
}
