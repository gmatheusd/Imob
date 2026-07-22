import { PageHero } from "@/components/PageHero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import { siteConfig } from "@/config/siteConfig";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Saiba como a Danilo Ventura Negócios Imobiliários (DV Imob) coleta, usa e protege seus dados pessoais, em conformidade com a LGPD.",
};

const lastUpdated = "22 de julho de 2026";

type Section = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

const sections: Section[] = [
  {
    id: "quem-somos",
    title: "1. Quem somos",
    paragraphs: [
      `Esta Política de Privacidade se aplica ao site ${siteConfig.siteUrl.replace("https://", "")}, operado por ${siteConfig.razaoSocial} (CNPJ ${siteConfig.cnpj}, CRECI ${siteConfig.creci}), doravante "DV Imob", controladora dos dados pessoais tratados por meio deste site, nos termos da Lei nº 13.709/2018 (LGPD).`,
    ],
  },
  {
    id: "dados-coletados",
    title: "2. Quais dados coletamos",
    paragraphs: [
      "Coletamos os seguintes dados, apenas quando você mesmo os fornece ou como resultado natural da navegação no site:",
    ],
    bullets: [
      "Dados de identificação e contato informados no formulário de interesse: nome, telefone e, quando informado, e-mail.",
      "Preferências de busca informadas no formulário: empreendimento de interesse e número de dormitórios.",
      "Dados de navegação coletados de forma automática, como páginas visitadas, tempo de permanência, origem do acesso e tipo de dispositivo, por meio de cookies e ferramentas de analytics.",
    ],
  },
  {
    id: "como-usamos",
    title: "3. Como usamos os dados",
    paragraphs: [
      "Os dados informados no formulário de interesse são usados exclusivamente para retorno comercial: nosso site monta uma mensagem com as informações preenchidas e abre o WhatsApp para que você a envie diretamente ao nosso atendimento. Não mantemos banco de dados próprio com esses formulários — eles não são armazenados em nossos servidores, apenas repassados ao WhatsApp por sua própria iniciativa.",
      "Os dados de navegação são usados para entender o desempenho do site, melhorar conteúdos e a experiência de uso, e mensurar a origem de visitantes e campanhas.",
    ],
  },
  {
    id: "compartilhamento",
    title: "4. Com quem compartilhamos dados",
    paragraphs: [
      "Não vendemos nem alugamos dados pessoais. O compartilhamento ocorre nas seguintes situações:",
    ],
    bullets: [
      "WhatsApp / Meta Platforms, Inc.: ao enviar o formulário de interesse, você mesmo encaminha seus dados para conversa via WhatsApp, sujeita também à política de privacidade do WhatsApp.",
      "Incorporadoras e parceiros comerciais: quando necessário para viabilizar a negociação de um empreendimento específico de seu interesse.",
      "Google (Google Analytics e Google Tag Manager): ferramentas de mensuração de audiência e desempenho do site, descritas na seção de cookies abaixo.",
    ],
  },
  {
    id: "cookies",
    title: "5. Cookies e ferramentas de rastreamento",
    paragraphs: [
      "Utilizamos o Google Tag Manager e o Google Analytics para entender como os visitantes usam o site, medir tráfego e melhorar sua experiência. Essas ferramentas utilizam cookies e identificadores para coletar dados de navegação de forma agregada e, em geral, pseudonimizada.",
      "Você pode bloquear ou apagar cookies a qualquer momento nas configurações do seu navegador. Isso pode limitar algumas funcionalidades do site, mas não impede sua navegação ou o uso do formulário de contato.",
    ],
  },
  {
    id: "armazenamento",
    title: "6. Armazenamento e segurança",
    paragraphs: [
      "Como o site não possui banco de dados próprio de leads, os dados do formulário trafegam apenas entre seu navegador e o WhatsApp. Os dados de navegação coletados por Google Analytics/Tag Manager são armazenados nos servidores do Google, conforme as políticas de segurança e retenção da própria empresa.",
      "Comunicações realizadas diretamente pelo WhatsApp, e-mail ou telefone são armazenadas por nós apenas para fins de atendimento comercial, pelo tempo necessário ao relacionamento com o cliente ou até solicitação de exclusão.",
    ],
  },
  {
    id: "direitos",
    title: "7. Seus direitos como titular de dados",
    paragraphs: [
      "Nos termos da LGPD, você pode solicitar, a qualquer momento:",
    ],
    bullets: [
      "Confirmação da existência de tratamento de dados.",
      "Acesso, correção ou atualização dos seus dados.",
      "Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desacordo com a lei.",
      "Portabilidade dos dados a outro fornecedor de serviço.",
      "Eliminação dos dados tratados com o seu consentimento.",
      "Revogação do consentimento e oposição a tratamentos realizados com base em outras hipóteses legais.",
    ],
  },
  {
    id: "contato",
    title: "8. Contato",
    paragraphs: [
      `Para exercer seus direitos ou tirar dúvidas sobre esta política, entre em contato pelo e-mail ${siteConfig.contact.email} ou pelo telefone ${siteConfig.contact.phoneDisplay}.`,
    ],
  },
  {
    id: "alteracoes",
    title: "9. Alterações desta política",
    paragraphs: [
      "Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças em nossas práticas ou por exigência legal ou regulatória. Recomendamos revisitar esta página de tempos em tempos.",
    ],
  },
];

export default function PoliticaDePrivacidadePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          kicker="Transparência e proteção de dados"
          title="Política de Privacidade"
          subtitle={`Última atualização: ${lastUpdated}`}
          align="left"
        />

        <section className="bg-surface py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {sections.map((section) => (
                <div key={section.id}>
                  <h2 className="font-display text-xl font-semibold text-ink sm:text-2xl">
                    {section.title}
                  </h2>
                  <div className="mt-4 space-y-4 text-base leading-relaxed text-text-muted">
                    {section.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                  </div>
                  {section.bullets && (
                    <ul className="mt-4 space-y-2.5">
                      {section.bullets.map((b, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-sm leading-relaxed text-text-muted"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400"
                            aria-hidden
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsAppBubble />
    </>
  );
}
