import { empreendimentos } from "@/config/empreendimentos";
import { siteConfig } from "@/config/siteConfig";
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base: MetadataRoute.Sitemap = [
    {
      url: `${siteConfig.siteUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const emps: MetadataRoute.Sitemap = empreendimentos.map((e) => ({
    url: `${siteConfig.siteUrl}/empreendimentos/${e.slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...base, ...emps];
}
