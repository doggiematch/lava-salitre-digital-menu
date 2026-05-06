import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lava & Salitre — Cocina canaria de vanguardia" },
      { name: "description", content: "Carta digital de Lava & Salitre. Cocina canaria de vanguardia en Puerto de las Nieves, Agaete." },
    ],
  }),
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-20 pt-16 md:pt-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <p className="mb-5 text-[11px] uppercase tracking-[0.4em] text-accent">
              Puerto de las Nieves · Agaete
            </p>
            <h1 className="font-serif text-5xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              Lava <span className="italic text-accent">&</span> Salitre
            </h1>
            <p className="mt-5 max-w-xl font-serif text-xl italic text-stone-volcanic sm:text-2xl">
              Cocina canaria de vanguardia
            </p>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget tellus a eros vehicula
              tincidunt. Una experiencia que dialoga entre la brasa volcánica y la mineralidad del Atlántico.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/menus"
                search={{ menu: "lava" }}
                className="rounded-full border border-foreground bg-foreground px-6 py-3 text-center text-xs uppercase tracking-[0.25em] text-primary-foreground transition hover:bg-transparent hover:text-foreground"
              >
                Menú Lava
              </Link>
              <Link
                to="/menus"
                search={{ menu: "salitre" }}
                className="rounded-full border border-foreground px-6 py-3 text-center text-xs uppercase tracking-[0.25em] transition hover:bg-foreground hover:text-primary-foreground"
              >
                Menú Salitre
              </Link>
              <Link
                to="/menus"
                search={{ menu: "lava-salitre" }}
                className="rounded-full border border-accent bg-accent/10 px-6 py-3 text-center text-xs uppercase tracking-[0.25em] text-foreground transition hover:bg-accent hover:text-accent-foreground"
              >
                Lava & Salitre
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-gradient-to-br from-stone-volcanic via-foreground to-ink">
              <div className="absolute inset-0 [background-image:radial-gradient(circle_at_30%_25%,oklch(0.72_0.11_80/.4),transparent_55%),radial-gradient(circle_at_75%_75%,oklch(0.82_0.04_220/.45),transparent_60%)]" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-background/60">Temporada</p>
                <p className="font-serif text-2xl text-background">Otoño · Invierno</p>
              </div>
              <div className="absolute right-5 top-5 h-12 w-12 rounded-full border border-background/40" />
            </div>
            <p className="mt-3 text-right text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Carta digital · 2026
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background/50">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-3">
          {[
            { t: "Producto km 0", d: "Pequeños productores de Gran Canaria, lonjas locales y huertos volcánicos." },
            { t: "Técnica de vanguardia", d: "Cocción sobre piedra, fermentaciones, ahumados y baja temperatura." },
            { t: "Carta interactiva", d: "Consulta cada plato, su origen, ingredientes y alérgenos en tiempo real." },
          ].map((b) => (
            <div key={b.t}>
              <div className="mb-4 h-px w-10 bg-accent" />
              <h3 className="font-serif text-xl">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
