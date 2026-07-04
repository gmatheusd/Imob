import { siteConfig } from "@/config/siteConfig";

export function HomeStats() {
  return (
    <section
      aria-label="Números da MAC"
      className="bg-ink py-14 text-white sm:py-16"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center md:grid-cols-3 lg:grid-cols-6">
          {siteConfig.stats.map((stat) => (
            <div key={stat.id}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-semibold text-gold-400 sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-[0.1em] text-white/55">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
