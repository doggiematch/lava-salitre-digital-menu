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
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : ""}>
      {eyebrow && (
        <div className={`ornament mb-5 ${isCenter ? "justify-center" : ""}`}>{eyebrow}</div>
      )}
      <h2 className="font-serif text-[2.5rem] leading-[1.05] text-foreground sm:text-5xl md:text-[3.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 max-w-2xl text-base leading-[1.75] text-muted-foreground ${isCenter ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
