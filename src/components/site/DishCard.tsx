import { useState } from "react";
import type { Dish } from "@/data/menu";
import { DishModal } from "./DishModal";
import { allergenSheets } from "@/data/allergenSheets";
import { AllergenSheetView } from "./AllergenSheetView";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function DishCard({ dish }: { dish: Dish }) {
  const [open, setOpen] = useState(false);
  const [allergenOpen, setAllergenOpen] = useState(false);
  const allergenSheet = allergenSheets[dish.id];

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-sm border border-border/60 bg-cream/30 p-7 transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/60 hover:bg-cream/60 hover:shadow-[0_30px_60px_-30px_oklch(0.46_0.018_50/.35)]">
      {/* corner ornament */}
      <span className="pointer-events-none absolute right-5 top-5 font-serif text-xs italic text-accent opacity-40 transition-opacity group-hover:opacity-100">
        ※
      </span>

      <div className="flex items-start justify-between gap-4 pr-6">
        <h3 className="font-serif text-[1.4rem] leading-tight text-foreground">{dish.name}</h3>
      </div>

      <div className="my-4 hairline" />

      <p className="text-[0.92rem] leading-[1.7] text-muted-foreground">{dish.description}</p>

      <p className="mt-5 font-serif text-xs italic text-stone-volcanic">
        {dish.ingredients.slice(0, 3).join(" · ")}
      </p>

      <div className="mt-6 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-foreground/80 px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-foreground transition hover:bg-foreground hover:text-primary-foreground"
          >
            Ver ficha
          </button>
          {allergenSheet ? (
            <button
              type="button"
              onClick={() => setAllergenOpen(true)}
              className="rounded-full border border-border px-4 py-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition hover:border-foreground hover:text-foreground"
            >
              Alérgenos
            </button>
          ) : null}
        </div>
      </div>

      <DishModal dish={dish} open={open} onOpenChange={setOpen} />
      {allergenSheet ? (
        <Dialog open={allergenOpen} onOpenChange={setAllergenOpen}>
          <DialogContent className="max-h-[92vh] max-w-[96vw] overflow-y-auto p-0 md:max-w-5xl lg:max-w-6xl">
            <DialogHeader className="sr-only">
              <DialogTitle>Ficha de alérgenos de {allergenSheet.title}</DialogTitle>
            </DialogHeader>
            <AllergenSheetView sheet={allergenSheet} />
          </DialogContent>
        </Dialog>
      ) : null}
    </article>
  );
}
