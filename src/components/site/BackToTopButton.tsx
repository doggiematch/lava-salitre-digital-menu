import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 360);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <button
      type="button"
      aria-label="Subir al inicio de la pagina"
      title="Subir"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`fixed bottom-4 right-4 z-30 grid size-11 place-items-center rounded-md border border-border bg-background/95 text-foreground shadow-lg backdrop-blur transition hover:border-foreground hover:bg-secondary print:hidden ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0"
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}
