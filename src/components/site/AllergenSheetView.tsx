import type { AllergenSheet, AllergenStatus } from "@/data/allergenSheets";
import { SheetScrollTopButton } from "./SheetScrollTopButton";

export function AllergenSheetView({ sheet }: { sheet: AllergenSheet }) {
  const contained = sheet.rows.filter((row) => row.status !== "No contiene");

  return (
    <article className="bg-background px-4 py-6 text-foreground sm:px-8 md:px-12 md:py-10">
      <header className="border-b border-gold pb-6 text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Carta de alérgenos</p>
        <h2 className="mt-3 font-serif text-3xl leading-tight text-foreground md:text-5xl">
          {sheet.title}
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
          {sheet.subtitle}
        </p>
      </header>

      {sheet.sourceImageSrc ? (
        <figure className="mt-6 overflow-hidden rounded-md border border-border bg-card/45">
          <img
            src={sheet.sourceImageSrc}
            alt={`Carta de alÃ©rgenos original de ${sheet.title}`}
            className="h-auto w-full"
          />
        </figure>
      ) : null}

      <div className="mt-6 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
        <section className="rounded-md border border-border bg-card/45 p-5">
          <p className="text-[10px] uppercase tracking-[0.24em] text-accent">Representa</p>
          <h3 className="mt-2 font-serif text-2xl text-foreground">{sheet.represents}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sheet.originNote}</p>
        </section>
        <section className="rounded-md border border-border bg-card/45 p-5">
          <p className="text-[10px] uppercase tracking-[0.24em] text-accent">
            Ingredientes principales
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {sheet.ingredients.map((ingredient) => (
              <li
                key={ingredient}
                className="rounded-full border border-border bg-background px-3 py-1 text-sm"
              >
                {ingredient}
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-6 overflow-x-auto rounded-md border border-border">
        <div className="min-w-[760px]">
          <div className="grid grid-cols-[0.9fr_0.75fr_1.35fr] bg-stone-volcanic px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            <span>Alérgeno</span>
            <span>¿Contiene?</span>
            <span>Observaciones</span>
          </div>
          {sheet.rows.map((row) => (
            <div
              key={row.allergen}
              className="grid grid-cols-[0.9fr_0.75fr_1.35fr] gap-3 border-t border-border bg-background px-4 py-3 text-sm"
            >
              <span className="font-semibold text-foreground">{row.allergen}</span>
              <span className={`font-semibold ${statusClass(row.status)}`}>{row.status}</span>
              <span className="leading-relaxed text-muted-foreground">{row.observation}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="rounded-md border border-border bg-card/45 p-5">
          <p className="text-[10px] uppercase tracking-[0.24em] text-sage">Contiene</p>
          <p className="mt-2 text-sm font-semibold leading-relaxed text-foreground">
            {sheet.containsSummary}
          </p>
        </div>
        <div className="rounded-md border border-border bg-card/45 p-5">
          <p className="text-[10px] uppercase tracking-[0.24em] text-accent">Trazas</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{sheet.traceNote}</p>
        </div>
        <div className="rounded-md border border-border bg-card/45 p-5">
          <p className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Leyenda</p>
          <div className="mt-3 space-y-2 text-sm">
            <LegendItem label="Sí contiene" className="bg-sage" />
            <LegendItem label="No contiene" className="bg-destructive" />
            {contained.some((row) => row.status === "Puede contener") ? (
              <LegendItem label="Puede contener" className="bg-accent" />
            ) : null}
          </div>
        </div>
      </footer>

      <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
        Si usted es alérgico o intolerante, consulte con nuestro personal. La información
        proporcionada se basa en los ingredientes de la receta y puede variar por cambios de
        proveedor o manipulación en cocina.
      </p>

      <SheetScrollTopButton />
    </article>
  );
}

function statusClass(status: AllergenStatus) {
  if (status === "Sí contiene") return "text-sage";
  if (status === "Puede contener") return "text-accent";
  return "text-destructive";
}

function LegendItem({ label, className }: { label: string; className: string }) {
  return (
    <p className="flex items-center gap-2">
      <span className={`h-3 w-3 rounded-full ${className}`} />
      <span>{label}</span>
    </p>
  );
}
