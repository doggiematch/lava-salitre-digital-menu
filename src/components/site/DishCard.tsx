import { useState } from "react";
import type { Dish } from "@/data/menu";
import { DishModal } from "./DishModal";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function DishCard({ dish }: { dish: Dish }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="group relative flex flex-col rounded-md border border-border/70 bg-card/70 p-6 transition-all hover:border-accent/50 hover:shadow-[0_8px_30px_-12px_oklch(0.42_0.012_60/0.25)]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-serif text-xl leading-tight text-foreground">{dish.name}</h3>
        <span className="font-serif text-lg text-accent">{dish.price}€</span>
      </div>
      <div className="my-3 hairline" />
      <p className="text-sm leading-relaxed text-muted-foreground">{dish.description}</p>
      <p className="mt-3 text-xs uppercase tracking-widest text-stone-volcanic">
        {dish.ingredients.slice(0, 3).join(" · ")}
      </p>
      <div className="mt-5 flex items-center gap-3 text-xs">
        <button
          onClick={() => setOpen(true)}
          className="rounded-full border border-foreground/80 px-4 py-2 uppercase tracking-widest text-foreground transition hover:bg-foreground hover:text-primary-foreground"
        >
          Ver ficha
        </button>
        <Dialog>
          <DialogTrigger className="rounded-full border border-border px-4 py-2 uppercase tracking-widest text-muted-foreground transition hover:text-foreground">
            Alérgenos
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle className="font-serif text-xl">Alérgenos</DialogTitle>
            </DialogHeader>
            <ul className="mt-2 flex flex-wrap gap-2">
              {dish.allergens.map((a) => (
                <li key={a} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                  {a}
                </li>
              ))}
            </ul>
          </DialogContent>
        </Dialog>
      </div>
      <DishModal dish={dish} open={open} onOpenChange={setOpen} />
    </article>
  );
}
