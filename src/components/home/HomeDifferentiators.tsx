import { FeatureIcon } from "@/components/FeatureIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { homePageContent } from "@/config/homePage";
import { siteConfig } from "@/config/siteConfig";

export function HomeDifferentiators() {
  const content = homePageContent.differentiators;

  return (
    <section
      id="diferenciais"
      aria-labelledby="diferenciais-heading"
      className="scroll-mt-24 bg-surface py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="diferenciais-heading"
          eyebrow={content.eyebrow}
          title={content.title}
          subtitle={content.subtitle}
          align="center"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.differentiators.map((item) => (
            <div
              key={item.id}
              className="group rounded-[var(--radius-xl)] border border-border bg-surface p-7 transition hover:border-gold-200 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gold-50 text-gold-600 transition-colors duration-300 group-hover:bg-gold-200 group-hover:text-gold-700">
                <FeatureIcon icon={item.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
