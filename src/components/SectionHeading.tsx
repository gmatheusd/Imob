type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  invert?: boolean;
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  invert = false,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.22em] ${
            invert ? "text-gold-200" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={`mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl ${
          invert ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            invert ? "text-white/75" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
