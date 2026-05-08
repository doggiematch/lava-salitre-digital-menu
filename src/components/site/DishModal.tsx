import { useState } from "react";
import type { Dish } from "@/data/menu";
import { technicalSheets, type TechnicalRow, type TechnicalSheet } from "@/data/technicalSheets";
import { allergenSheets } from "@/data/allergenSheets";
import { AllergenSheetView } from "./AllergenSheetView";
import { SheetScrollTopButton } from "./SheetScrollTopButton";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

const SKETCH_LINK_TEXT = "Accede aquí al boceto del emplatado";

type ViewerImage = {
  src: string;
  alt: string;
};

export function DishModal({
  dish,
  open,
  onOpenChange,
}: {
  dish: Dish;
  open: boolean;
  onOpenChange: (o: boolean) => void;
}) {
  const sheet = dish.technicalSheetId ? technicalSheets[dish.technicalSheetId] : undefined;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-h-[92vh] max-w-[96vw] overflow-y-auto p-0 md:max-w-5xl lg:max-w-6xl"
        onInteractOutside={(event) => {
          const target = event.target as HTMLElement | null;
          if (target?.closest("[data-image-viewer='true']")) {
            event.preventDefault();
          }
        }}
      >
        <DialogHeader className="sr-only">
          <DialogTitle>{dish.name}</DialogTitle>
        </DialogHeader>
        {sheet ? <TechnicalSheetView sheet={sheet} /> : <FallbackDishView dish={dish} />}
      </DialogContent>
    </Dialog>
  );
}

function TechnicalSheetView({ sheet }: { sheet: TechnicalSheet }) {
  const [viewerImage, setViewerImage] = useState<ViewerImage | null>(null);
  const [allergenOpen, setAllergenOpen] = useState(false);
  const designRows = sheet.design.rows.filter((row) => row.value !== SKETCH_LINK_TEXT || sheet.sketchSrc);
  const plateRows = sheet.plate.filter((row) => row.label !== "Precio estimado");
  const allergenSheet = allergenSheets[sheet.id];

  return (
    <article className="relative overflow-hidden bg-background px-4 py-6 text-foreground sm:px-8 md:px-12 md:py-10">
      <div className="pointer-events-none absolute -left-16 -top-20 h-44 w-44 rounded-full bg-sand/55 md:h-64 md:w-64" />
      <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-stone-volcanic/10 md:h-56 md:w-56" />

      <header className="relative border-b border-gold pb-4">
        <div className="grid gap-5 md:grid-cols-[8.5rem_1fr_auto] md:items-start md:gap-6">
          {sheet.photoSrc ? (
            <button
              type="button"
              className="group h-28 w-28 cursor-pointer overflow-hidden rounded-md border border-border bg-card shadow-sm md:h-32 md:w-32"
              aria-label={`Ampliar fotografía de ${sheet.name}`}
              onClick={() => setViewerImage({ src: sheet.photoSrc!, alt: `Fotografía de ${sheet.name}` })}
            >
              <img
                src={sheet.photoSrc}
                alt={`Fotografía de ${sheet.name}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ) : null}

          <div>
            <h2 className="font-serif text-4xl leading-none text-foreground md:text-5xl">
              {sheet.name}
            </h2>
            <p className="mt-2 text-sm font-medium text-stone-volcanic md:text-base">
              {sheet.type} · {sheet.menus}
            </p>
          </div>

          <div className="inline-flex w-fit rounded-full border border-gold px-5 py-2 text-xs text-muted-foreground">
            Lava & Salitre · ficha gastronómica
          </div>
        </div>
      </header>

      <div className="relative mt-6 space-y-8">
        <SheetSection title="Ficha de ingrediente canario">
          <InfoRows rows={sheet.ingredient} />
        </SheetSection>

        <SheetSection title="Ficha del plato">
          <InfoRows rows={plateRows.slice(0, 2)} />
          <div className="mt-4 rounded-md border border-border bg-card/45 p-4">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Ingredientes principales · medidas por ración
            </p>
            <IngredientGrid rows={sheet.ingredients} />
          </div>
          <InfoRows
            rows={plateRows.slice(2)}
            className="mt-4"
            onOpenAllergens={allergenSheet ? () => setAllergenOpen(true) : undefined}
          />
        </SheetSection>

        <SheetSection title="Ficha de diseño del plato">
          <InfoRows
            rows={designRows}
            sketchSrc={sheet.sketchSrc}
            onOpenImage={(image) => setViewerImage(image)}
            sheetName={sheet.name}
          />
          <div className="mt-4 rounded-md border border-border bg-card/45 p-4">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Elementos del plato
            </p>
            <PillList items={sheet.design.elements} />
          </div>
          <div className="mt-4 rounded-md border border-border bg-card/45 p-4">
            <p className="mb-3 text-xs uppercase tracking-[0.24em] text-muted-foreground">
              Texturas presentes
            </p>
            <PillList items={sheet.design.textures} />
          </div>
          <InfoRows className="mt-4" rows={[{ label: "Decoración", value: sheet.design.decoration }]} />
        </SheetSection>
      </div>

      <footer className="relative mt-10 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span>Proyecto gastronómico · Lava & Salitre</span>
        <span>Ficha técnica</span>
      </footer>

      <SheetScrollTopButton />

      <ImageViewer image={viewerImage} onClose={() => setViewerImage(null)} />
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

function SheetSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/80">
          <span className="h-2 w-2 rounded-full bg-gold" />
        </span>
        <h3 className="text-base font-semibold uppercase tracking-wide text-foreground md:text-xl">
          {title}
        </h3>
        <span className="h-px flex-1 bg-gold/70" />
      </div>
      {children}
    </section>
  );
}

function InfoRows({
  rows,
  className = "",
  sketchSrc,
  onOpenImage,
  onOpenAllergens,
  sheetName = "",
}: {
  rows: TechnicalRow[];
  className?: string;
  sketchSrc?: string;
  onOpenImage?: (image: ViewerImage) => void;
  onOpenAllergens?: () => void;
  sheetName?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-md border border-border bg-card/30 ${className}`}>
      {rows.map((row) => {
        const isSketchLink = Boolean(sketchSrc && onOpenImage && row.value === SKETCH_LINK_TEXT);
        const isAllergenLink = Boolean(onOpenAllergens && row.value === "Consulta aquí la carta de alérgenos");

        return (
          <div key={row.label} className="border-b border-border last:border-b-0 sm:grid sm:grid-cols-[17rem_1fr]">
            <div className="bg-secondary/60 px-4 py-3 text-sm font-semibold text-stone-volcanic">
              {row.label}
            </div>
            <div className="whitespace-pre-line px-4 py-3 text-sm leading-relaxed text-foreground">
              {isSketchLink ? (
                <button
                  type="button"
                  className="cursor-pointer text-left underline underline-offset-4 transition-colors hover:text-gold"
                  onClick={() => onOpenImage({ src: sketchSrc!, alt: `Boceto de ${sheetName}` })}
                >
                  {row.value}
                </button>
              ) : isAllergenLink ? (
                <button
                  type="button"
                  className="cursor-pointer text-left underline underline-offset-4 transition-colors hover:text-gold"
                  onClick={onOpenAllergens}
                >
                  {row.value}
                </button>
              ) : isLinkText(row.value) ? (
                <span className="underline underline-offset-4">{row.value}</span>
              ) : (
                row.value
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function IngredientGrid({ rows }: { rows: TechnicalRow[] }) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-background text-left">
      <div className="grid grid-cols-[minmax(0,1fr)_minmax(6rem,0.35fr)] gap-3 bg-secondary px-3 py-2 text-left text-sm font-semibold text-stone-volcanic">
        <span>Ingrediente</span>
        <span>Medida</span>
      </div>
      {rows.map((row) => (
        <div
          key={`${row.label}-${row.value}`}
          className="grid grid-cols-[minmax(0,1fr)_minmax(6rem,0.35fr)] gap-3 border-t border-border px-3 py-2 text-left text-sm"
        >
          <span className="min-w-0 break-words">{row.label}</span>
          <span className="min-w-0 break-words">{row.value}</span>
        </div>
      ))}
    </div>
  );
}

function PillList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li key={item} className="rounded-md border border-border/70 bg-background px-3 py-2 text-sm">
          <span className="mr-2 inline-block h-2 w-2 rounded-full bg-sage" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function isLinkText(value: string) {
  return value === SKETCH_LINK_TEXT || value === "Consulta aquí la carta de alérgenos";
}

function ImageViewer({ image, onClose }: { image: ViewerImage | null; onClose: () => void }) {
  if (!image) {
    return null;
  }

  return (
    <div
      data-image-viewer="true"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-foreground/92 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onPointerDown={(event) => event.stopPropagation()}
      onClick={(event) => {
        event.stopPropagation();
        onClose();
      }}
    >
      <button
        type="button"
        className="absolute right-4 top-4 flex h-12 w-12 cursor-pointer items-center justify-center rounded-md border border-background/70 bg-background text-foreground shadow-lg transition-colors hover:bg-secondary md:right-6 md:top-6"
        aria-label="Cerrar imagen"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
      >
        <X className="h-7 w-7" />
      </button>
      <img
        src={image.src}
        alt={image.alt}
        className="max-h-[88vh] max-w-[94vw] object-contain shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  );
}

function FallbackDishView({ dish }: { dish: Dish }) {
  return (
    <div className="space-y-6 p-6">
      <h2 className="font-serif text-3xl">{dish.name}</h2>
      <p className="text-sm leading-relaxed text-muted-foreground">{dish.longDescription}</p>
      <button className="w-full rounded-full border border-foreground py-3 text-xs uppercase tracking-[0.25em]">
        Cerrar ficha
      </button>
    </div>
  );
}
