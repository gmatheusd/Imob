import { empreendimentos, getEmpreendimento } from "@/config/empreendimentos";
import { getDetalhe } from "@/config/empreendimentosDetalhes";
import { siteConfig } from "@/config/siteConfig";
import { EmpreendimentoEmBreve } from "@/views/EmpreendimentoEmBreve";
import { EmpreendimentoPage } from "@/views/EmpreendimentoPage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return empreendimentos.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const emp = getEmpreendimento(slug);
  if (!emp) return {};

  const title = `${emp.name}, São Paulo`;
  const description = `${emp.tagline} ${emp.shortDescription}`;
  const url = `${siteConfig.siteUrl}/empreendimentos/${emp.slug}/`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${emp.name} | ${siteConfig.fantasia}`,
      description,
      url,
      type: "website",
      locale: "pt_BR",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const emp = getEmpreendimento(slug);
  if (!emp) notFound();

  const detalhe = getDetalhe(slug);
  return detalhe ? (
    <EmpreendimentoPage emp={emp} detalhe={detalhe} />
  ) : (
    <EmpreendimentoEmBreve emp={emp} />
  );
}
