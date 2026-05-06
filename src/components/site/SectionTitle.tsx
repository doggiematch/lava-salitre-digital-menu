export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p className="mb-3 text-[11px] uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
      )}
      <h2 className="font-serif text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-base text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
