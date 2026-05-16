import { BadgeInfo, ChefHat, ExternalLink, Leaf, ShieldAlert } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { allergenSheets } from "@/data/allergenSheets";
import type { Dish } from "@/data/menu";
import { technicalSheets } from "@/data/technicalSheets";

export function QuickDishDialog({
  dish,
  onOpenChange,
  onOpenTechnicalSheet,
}: {
  dish: Dish | null;
  onOpenChange: (open: boolean) => void;
  onOpenTechnicalSheet?: (dish: Dish) => void;
}) {
  const allergenSheet = dish ? allergenSheets[dish.id] : undefined;
  const sheet = dish?.technicalSheetId ? technicalSheets[dish.technicalSheetId] : undefined;
  const imageSrc = sheet?.photoSrc ?? sheet?.sketchSrc;

  return (
    <Dialog open={Boolean(dish)} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[92vh] max-w-[94vw] overflow-y-auto p-0 md:max-w-3xl">
        {dish ? (
          <>
            <DialogHeader className="sr-only">
              <DialogTitle>Ficha rápida de {dish.name}</DialogTitle>
            </DialogHeader>

            <article className="bg-background text-foreground">
              {imageSrc ? (
                <img src={imageSrc} alt={dish.name} className="aspect-video w-full object-cover" />
              ) : null}

              <div className="p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[0.35em] text-accent">
                  Resumen del plato
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground">
                  {dish.name}
                </h2>
                <p className="mt-4 text-sm leading-[1.8] text-muted-foreground">
                  {dish.description}
                </p>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <SummaryCard icon={Leaf} label="Origen" value={dish.origin} />
                  <SummaryCard icon={ChefHat} label="Técnica" value={dish.technique} />
                  <SummaryCard
                    icon={BadgeInfo}
                    label="Ingredientes clave"
                    value={dish.ingredients.join(" · ")}
                  />
                  <SummaryCard
                    icon={ShieldAlert}
                    label="Resumen de alérgenos"
                    value={allergenSheet?.containsSummary ?? dish.allergens.join(" · ")}
                  />
                </div>

                {allergenSheet?.traceNote ? (
                  <div className="mt-5 rounded-md border border-border bg-card/50 p-4">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-accent">Trazas</p>
                    <p className="mt-2 text-sm leading-[1.8] text-muted-foreground">
                      {allergenSheet.traceNote}
                    </p>
                  </div>
                ) : null}

                {onOpenTechnicalSheet ? (
                  <button
                    type="button"
                    onClick={() => onOpenTechnicalSheet(dish)}
                    className="mt-6 inline-flex items-center gap-2 rounded-md border border-foreground px-5 py-3 text-xs uppercase tracking-[0.24em] transition-colors hover:bg-foreground hover:text-primary-foreground"
                  >
                    Ver ficha completa
                    <ExternalLink className="h-4 w-4" />
                  </button>
                ) : null}
              </div>
            </article>
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}

function SummaryCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Leaf;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-border bg-card/50 p-4">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-accent" />
        <p className="text-[10px] uppercase tracking-[0.22em] text-accent">{label}</p>
      </div>
      <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{value || "Sin datos"}</p>
    </div>
  );
}
