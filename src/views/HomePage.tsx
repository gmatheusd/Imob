import {
  HomeAbout,
  HomeCta,
  HomeDifferentiators,
  HomeEmpreendimentos,
  HomeFaq,
  HomeHero,
  HomeLead,
} from "@/components/home";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";

export function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HomeHero />
        <HomeAbout />
        <HomeEmpreendimentos />
        <HomeDifferentiators />
        <HomeFaq />
        <HomeLead />
        <HomeCta />
      </main>
      <SiteFooter />
      <WhatsAppBubble />
    </>
  );
}
