import type { Dish } from "@/data/menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function DishModal({
  dish,
  open,
  onOpenChange,
}: {
  dish: Dish;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto p-0">
        <div className="relative h-56 w-full overflow-hidden bg-gradient-to-br from-stone-volcanic via-foreground to-ink">
          <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_30%_40%,oklch(0.72_0.11_80/.45),transparent_55%),radial-gradient(circle_at_70%_70%,oklch(0.82_0.04_220/.35),transparent_60%)]" />
          <div className="absolute bottom-4 left-6 right-6">
            <p className="text-xs uppercase tracking-[0.3em] text-background/70">Ficha del plato</p>
            <h2 className="font-serif text-3xl text-background">{dish.name}</h2>
          </div>
        </div>
        <div className="space-y-6 p-6">
          <DialogHeader className="sr-only">
            <DialogTitle>{dish.name}</DialogTitle>
          </DialogHeader>
          <p className="text-sm leading-relaxed text-muted-foreground">{dish.longDescription}</p>

          <Section title="Ingredientes">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-foreground">
              {dish.ingredients.map((i) => (
                <li key={i}>· {i}</li>
              ))}
            </ul>
          </Section>

          <Section title="Técnica">
            <p className="text-sm text-foreground">{dish.technique}</p>
          </Section>

          <Section title="Inspiración">
            <p className="text-sm text-foreground">{dish.inspiration}</p>
          </Section>

          <Section title="Origen del producto">
            <p className="text-sm text-foreground">{dish.origin}</p>
          </Section>

          <Section title="Alérgenos">
            <div className="flex flex-wrap gap-2">
              {dish.allergens.map((a) => (
                <span key={a} className="rounded-full bg-secondary px-3 py-1 text-xs">
                  {a}
                </span>
              ))}
            </div>
          </Section>

          <button
            onClick={() => onOpenChange(false)}
            className="mt-2 w-full rounded-full border border-foreground py-3 text-xs uppercase tracking-[0.25em] transition hover:bg-foreground hover:text-primary-foreground"
          >
            Cerrar ficha
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-2 text-[11px] uppercase tracking-[0.3em] text-accent">{title}</h4>
      {children}
    </div>
  );
}
