import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BadgeInfo, ChefHat, Leaf, ShieldAlert } from "lucide-react";
import { allDishes } from "@/data/menu";
import { allergenSheets } from "@/data/allergenSheets";
import { technicalSheets } from "@/data/technicalSheets";

export const Route = createFileRoute("/carta-digital/$dishId")({
  component: QuickDishPage,
  head: ({ params }) => {
    const dish = allDishes.find((item) => item.id === params.dishId);
    return {
      meta: [
        { title: `${dish?.name ?? "Ficha rápida"} - Lava & Salitre` },
        {
          name: "description",
          content:
            dish?.description ??
            "Ficha rápida de plato con ingredientes, alérgenos y origen del producto.",
        },
      ],
    };
  },
});

function QuickDishPage() {
  const { dishId } = Route.useParams();
  const dish = allDishes.find((item) => item.id === dishId);
  const sheet = dish?.technicalSheetId ? technicalSheets[dish.technicalSheetId] : undefined;
  const allergenSheet = dish ? allergenSheets[dish.id] : undefined;
  const imageSrc = sheet?.photoSrc ?? sheet?.sketchSrc;

  if (!dish) {
    return (
      <div className="paper">
        <section className="mx-auto max-w-3xl px-5 py-16 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Carta digital</p>
          <h1 className="mt-4 font-serif text-4xl text-foreground">Plato no encontrado</h1>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            El código QR no coincide con una ficha disponible en la carta actual.
          </p>
          <Link
            to="/carta-digital"
            className="mt-8 inline-flex rounded-md border border-foreground px-5 py-3 text-xs uppercase tracking-[0.24em] transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Volver a la carta
          </Link>
        </section>
      </div>
    );
  }

  return (
    <div className="paper">
      <section className="mx-auto max-w-4xl px-5 py-8 lg:py-12">
        <Link
          to="/carta-digital"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Carta digital
        </Link>

        <article className="mt-8 overflow-hidden rounded-md border border-border bg-background/80">
          {imageSrc ? (
            <img src={imageSrc} alt={dish.name} className="aspect-video w-full object-cover" />
          ) : null}

          <div className="p-6 lg:p-8">
            <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Ficha rápida QR</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground lg:text-5xl">
              {dish.name}
            </h1>
            <p className="mt-4 text-base leading-[1.8] text-muted-foreground">
              {dish.description}
            </p>

            <div className="mt-8 grid gap-4 lg:grid-cols-2">
              <InfoCard icon={Leaf} label="Origen del producto" value={dish.origin} />
              <InfoCard icon={ChefHat} label="Técnica" value={dish.technique} />
              <InfoCard
                icon={BadgeInfo}
                label="Ingredientes principales"
                value={dish.ingredients.join(" · ")}
              />
              <InfoCard
                icon={ShieldAlert}
                label="Alérgenos"
                value={allergenSheet?.containsSummary ?? dish.allergens.join(" · ")}
              />
            </div>

            {dish.inspiration ? (
              <div className="mt-6 rounded-md border border-border bg-card/50 p-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-accent">
                  Inspiración
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                  {dish.inspiration}
                </p>
              </div>
            ) : null}

            {allergenSheet ? (
              <div className="mt-6 rounded-md border border-border bg-card/50 p-5">
                <p className="text-[10px] uppercase tracking-[0.24em] text-accent">
                  Nota de trazas
                </p>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">
                  {allergenSheet.traceNote}
                </p>
              </div>
            ) : null}
          </div>
        </article>
      </section>
    </div>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Leaf;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-border bg-card/50 p-5">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-accent" />
        <p className="text-[10px] uppercase tracking-[0.24em] text-accent">{label}</p>
      </div>
      <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">{value || "Sin datos"}</p>
    </div>
  );
}
