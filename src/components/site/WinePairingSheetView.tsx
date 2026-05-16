import { Grape, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { wineImageSrcByName, type WinePairing } from "@/data/winePairings";
import { SheetScrollTopButton } from "./SheetScrollTopButton";

const pairingRows = (pairing: WinePairing) => [
  { label: "Vino elegido", value: pairing.wine },
  { label: "Bodega / isla", value: pairing.wineryIsland },
  { label: "Tipo de uva", value: pairing.grape },
  { label: "Características del vino", value: pairing.characteristics },
  { label: "Por qué marida con el plato", value: pairing.reason },
  { label: "Nota de cata", value: pairing.tastingNote },
  { label: "Resumen del maridaje", value: pairing.summary },
];

export function WinePairingSheetView({ pairing }: { pairing: WinePairing }) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const imageSrc = wineImageSrcByName[pairing.wine];

  return (
    <article className="relative overflow-hidden bg-background px-4 py-6 text-foreground sm:px-8 md:px-12 md:py-10">
      <div className="pointer-events-none absolute -left-16 -top-20 h-44 w-44 rounded-full bg-sand/55 md:h-64 md:w-64" />
      <div className="pointer-events-none absolute -right-10 -top-12 h-36 w-36 rounded-full bg-stone-volcanic/10 md:h-56 md:w-56" />

      <header className="relative border-b border-gold pb-4">
        <div className="grid gap-5 md:grid-cols-[8.5rem_1fr_auto] md:items-start md:gap-6">
          {imageSrc ? (
            <button
              type="button"
              onClick={() => setViewerOpen(true)}
              className="group flex h-28 w-28 items-center justify-center overflow-hidden rounded-md border border-border bg-[#faf5ed] shadow-sm md:h-32 md:w-32"
              aria-label={`Ampliar imagen de ${pairing.wine}`}
            >
              <img
                src={imageSrc}
                alt={`Botella de ${pairing.wine}`}
                className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          ) : (
            <div className="flex h-28 w-28 items-center justify-center rounded-md border border-border bg-[#faf5ed] shadow-sm md:h-32 md:w-32">
              <Grape className="h-12 w-12 text-accent" strokeWidth={1.5} />
            </div>
          )}

          <div>
            <h2 className="font-serif text-4xl leading-none text-foreground md:text-5xl">
              {pairing.dishName}
            </h2>
            <p className="mt-2 text-sm font-medium text-stone-volcanic md:text-base">
              Maridaje con vino canario · {pairing.wine}
            </p>
          </div>

          <div className="inline-flex w-fit rounded-full border border-gold px-5 py-2 text-xs text-muted-foreground">
            Lava & Salitre · ficha maridaje
          </div>
        </div>
      </header>

      <div className="relative mt-6 space-y-8">
        <SheetSection title="Ficha de maridaje">
          <InfoRows rows={pairingRows(pairing)} />
        </SheetSection>
      </div>

      <footer className="relative mt-10 flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
        <span>Proyecto gastronómico · Lava & Salitre</span>
        <span>Ficha maridaje</span>
      </footer>

      <SheetScrollTopButton />
      <BottleImageViewer
        imageSrc={imageSrc}
        imageAlt={`Botella de ${pairing.wine}`}
        open={viewerOpen}
        onClose={() => setViewerOpen(false)}
      />
    </article>
  );
}

function SheetSection({ title, children }: { title: string; children: ReactNode }) {
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

function InfoRows({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <div className="overflow-hidden rounded-md border border-border bg-card/30">
      {rows.map((row) => (
        <div
          key={row.label}
          className="border-b border-border last:border-b-0 sm:grid sm:grid-cols-[17rem_1fr]"
        >
          <div className="bg-secondary/60 px-4 py-3 text-sm font-semibold text-stone-volcanic">
            {row.label}
          </div>
          <div className="whitespace-pre-line px-4 py-3 text-sm leading-relaxed text-foreground">
            {row.value}
          </div>
        </div>
      ))}
    </div>
  );
}

function BottleImageViewer({
  imageSrc,
  imageAlt,
  open,
  onClose,
}: {
  imageSrc?: string;
  imageAlt: string;
  open: boolean;
  onClose: () => void;
}) {
  if (!open || !imageSrc || typeof document === "undefined") {
    return null;
  }

  const stopViewerEvent = (event: React.SyntheticEvent) => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  const closeViewer = (event: React.SyntheticEvent) => {
    stopViewerEvent(event);
    onClose();
  };

  return createPortal(
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-stone-950/85 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={imageAlt}
      onClick={closeViewer}
    >
      <div className="relative max-h-[92vh] max-w-[92vw]" onClick={stopViewerEvent}>
        <button
          type="button"
          onClick={closeViewer}
          className="absolute right-3 top-3 z-10 rounded-full border border-white/30 bg-stone-950/70 p-2 text-white shadow-lg transition-colors hover:bg-white hover:text-stone-950"
          aria-label="Cerrar imagen de la botella"
        >
          <X className="h-5 w-5" />
        </button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="max-h-[92vh] max-w-[92vw] rounded-md object-contain shadow-2xl"
        />
      </div>
    </div>,
    document.body,
  );
}
