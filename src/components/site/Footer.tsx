export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-background/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl">Lava & Salitre</h3>
          <p className="mt-2 text-sm text-muted-foreground">Cocina canaria de vanguardia.</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>Puerto de las Nieves</p>
          <p>Agaete · Gran Canaria</p>
          <p className="mt-2">Mar–Dom · 13:00–16:00 · 20:00–23:30</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p>+34 928 000 000</p>
          <p>hola@lavaysalitre.es</p>
          <p className="mt-2">@lavaysalitre</p>
        </div>
      </div>
      <div className="border-t border-border/50 py-5 text-center text-xs tracking-widest text-muted-foreground">
        © {new Date().getFullYear()} LAVA & SALITRE — TODOS LOS DERECHOS RESERVADOS
      </div>
    </footer>
  );
}
