import { Monogram, WaveDivider } from "./Decorations";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border/60 bg-cream/30">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-20 lg:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <Monogram size={56} className="text-foreground" />
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
      </div>
      <div className="border-t border-border/50 py-6 text-center text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
        © {new Date().getFullYear()} Lava & Salitre · Cocina canaria de vanguardia
      </div>
    </footer>
  );
}
