import { ArrowUp } from "lucide-react";

export function SheetScrollTopButton() {
  return (
    <button
      type="button"
      className="sticky bottom-4 left-full z-20 mt-6 flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background/95 text-foreground shadow-lg transition hover:border-foreground hover:bg-secondary"
      aria-label="Subir al inicio de la ficha"
      onClick={(event) => {
        event.currentTarget.closest("[role='dialog']")?.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
