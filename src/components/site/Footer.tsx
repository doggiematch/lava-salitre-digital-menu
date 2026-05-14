import { Link } from "@tanstack/react-router";
import { Monogram, WaveDivider } from "./Decorations";

const sitemap = [
  { to: "/", label: "Inicio" },
  { to: "/menus", label: "Menú" },
  { to: "/carta-digital", label: "Carta digital" },
  { to: "/conocenos", label: "Conócenos" },
  { to: "/galeria", label: "Galería" },
  { to: "/reservas", label: "Reservas" },
  { to: "/contacto", label: "Contacto" },
] as const;

const projectLinks = [
  {
    to: "/proyecto/fase-1-conceptualizacion-fundamentacion",
    label: "Fase 1 Conceptualización y fundamentación",
  },
  {
    to: "/proyecto/fase-2-diseno-carta-contenido",
    label: "Fase 2 Diseño de la carta y contenido",
  },
  {
    to: "/proyecto/fase-3-desarrollo-tecnologico-implementacion",
    label: "Fase 3 Desarrollo tecnológico e implementación",
  },
  {
    to: "/proyecto/fase-4-documentacion-presentacion",
    label: "Fase 4 Documentación y presentación",
  },
] as const;

const presentationLinks = [
  {
    to: "/proyecto/presentacion",
    label: "Presentación",
  },
] as const;

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-cream/30">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <Monogram size={96} className="h-24 w-24 text-foreground" />
          <p className="mt-4 font-serif text-2xl italic">Lava & Salitre</p>
          <WaveDivider className="mt-3 h-3 w-32 text-accent" />
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Ubicación</p>
            <p className="mt-3 font-serif text-lg">Puerto de las Nieves</p>
            <p className="text-sm text-muted-foreground">Agaete · Gran Canaria</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Horario</p>
            <p className="mt-3 text-sm text-muted-foreground">Mar–Dom · 13:00–16:00</p>
            <p className="text-sm text-muted-foreground">Mar–Sáb · 20:00–23:30</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Contacto</p>
            <p className="mt-3 text-sm text-muted-foreground">+34 928 000 000</p>
            <p className="text-sm text-muted-foreground">hola@lavaysalitre.es</p>
            <p className="mt-2 font-serif text-sm italic">@lavaysalitre</p>
          </div>
        </div>

        <div className="mt-14 grid gap-10 border-t border-border/50 pt-12 md:grid-cols-[1fr_1fr_0.7fr]">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-accent">
              Mapa de navegación
            </p>
            <nav
              className="mt-4 grid gap-2 sm:grid-cols-2 md:grid-cols-4"
              aria-label="Mapa de navegación"
            >
              {sitemap.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Proyecto</p>
            <nav className="mt-4 grid gap-2" aria-label="Proyecto">
              {projectLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Presentación</p>
            <nav className="mt-4 grid gap-2" aria-label="Presentación">
              {presentationLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 py-6 text-center text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        © {new Date().getFullYear()} Lava & Salitre · Cocina canaria de vanguardia
      </div>
    </footer>
  );
}
