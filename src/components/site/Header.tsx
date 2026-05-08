import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Monogram } from "./Decorations";

const nav = [
  { to: "/", label: "Inicio" },
  { to: "/menus", label: "Menús" },
  { to: "/carta-digital", label: "Carta digital" },
  { to: "/experiencia", label: "Experiencia" },
  { to: "/galeria", label: "Galería" },
  { to: "/conocenos", label: "Conócenos" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-500 ${
        scrolled ? "border-b border-border/60 bg-background/85 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Monogram size={72} className="h-16 w-16 text-foreground md:h-20 md:w-20" />
          <span className="hidden font-serif text-base italic tracking-wider text-foreground sm:inline">
            Lava <span className="not-italic text-accent">&</span> Salitre
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground gold-underline" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/reservas" className="btn-gold !py-2 !px-4 !text-[10px]">
            Reservar
          </Link>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/60 text-foreground backdrop-blur lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-x-0 top-[88px] z-30 origin-top transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="mx-4 overflow-hidden rounded-2xl border border-border bg-background/95 shadow-[0_30px_80px_-30px_oklch(0.18_0.012_55/.4)] backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4">
            {nav.map((n, i) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between border-b border-border/50 py-4 text-sm tracking-wide text-foreground last:border-0"
                activeProps={{ className: "text-accent" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                <span className="flex items-center gap-3">
                  <span className="font-serif text-[10px] italic text-accent">0{i + 1}</span>
                  {n.label}
                </span>
                <span className="text-muted-foreground transition-transform group-hover:translate-x-1">→</span>
              </Link>
            ))}
            <Link to="/reservas" onClick={() => setOpen(false)} className="btn-gold mt-5 mb-2 w-full">
              Reservar mesa
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
