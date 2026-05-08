import { createFileRoute, Link } from "@tanstack/react-router";
import { WaveDivider } from "@/components/site/Decorations";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lava & Salitre — Cocina canaria de vanguardia" },
      {
        name: "description",
        content:
          "Carta digital de Lava & Salitre. Cocina canaria de vanguardia en Puerto de las Nieves, Agaete.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-88px)] overflow-hidden border-b border-border/50">
        <img
          src="/galeria/imagen-hero.png"
          alt="Plato de Lava & Salitre frente al paisaje de Agaete"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100svh-88px)] max-w-7xl items-center px-6 py-16 lg:-translate-x-8 lg:px-10 xl:-translate-x-14">
          <div className="relative max-w-[38rem] animate-fade-up px-5 py-6 sm:px-8 sm:py-8">
            <div className="absolute inset-0 -z-10 rounded-xl border border-background/30 bg-background/28 shadow-[0_24px_90px_-45px_oklch(0.18_0.012_55/.55)] backdrop-blur-md" />
            <div className="ornament mb-8">Puerto de las Nieves · Agaete</div>

            <h1 className="font-serif text-[3.5rem] leading-[0.95] text-foreground drop-shadow-sm sm:text-[5rem] md:text-[6.5rem]">
              Lava
              <br />
              <span className="italic text-accent">&amp;</span> Salitre
            </h1>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-accent" />
              <p className="font-serif text-xl italic text-stone-volcanic sm:text-2xl">
                Cocina canaria de vanguardia
              </p>
            </div>

            <p className="mt-10 max-w-xl text-base leading-[1.8] text-foreground/82">
              Una experiencia gastronómica frente al Atlántico, donde el producto canario, la piedra
              volcánica y la brisa marina se encuentran en menús degustación de tierra, mar y
              memoria insular.
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/menus" search={{ menu: "lava" }} className="btn-primary">
                Menú Lava
              </Link>
              <Link
                to="/menus"
                search={{ menu: "salitre" }}
                className="rounded-full border border-background/75 bg-background/58 px-6 py-3 text-xs uppercase tracking-[0.25em] text-foreground shadow-sm backdrop-blur-md transition hover:border-foreground hover:bg-foreground hover:text-primary-foreground"
              >
                Menú Salitre
              </Link>
              <Link
                to="/menus"
                search={{ menu: "lava-salitre" }}
                className="rounded-full border border-background/75 bg-background/58 px-6 py-3 text-xs uppercase tracking-[0.25em] text-foreground shadow-sm backdrop-blur-md transition hover:border-foreground hover:bg-foreground hover:text-primary-foreground"
              >
                Lava & Salitre
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-y border-border/50 bg-cream/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 lg:px-10">
          {[
            {
              n: "01",
              t: "Producto km 0",
              d: "Pequeños productores de Gran Canaria, lonjas locales y huertos volcánicos.",
            },
            {
              n: "02",
              t: "Técnica de vanguardia",
              d: "Cocción sobre piedra, fermentaciones, ahumados lentos y baja temperatura.",
            },
            {
              n: "03",
              t: "Carta interactiva",
              d: "Consulta cada plato, su origen, ingredientes y alérgenos en tiempo real.",
            },
          ].map((b) => (
            <div key={b.t} className="group">
              <div className="flex items-baseline gap-3">
                <span className="font-serif text-3xl italic text-accent">{b.n}</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <h3 className="mt-5 font-serif text-2xl text-foreground">{b.t}</h3>
              <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="ornament mb-8 justify-center">Filosofía</div>
          <p className="font-serif text-3xl italic leading-[1.4] text-stone-volcanic sm:text-4xl md:text-[2.75rem]">
            “El sabor de una isla está hecho de viento, sal y piedra caliente. Nosotros sólo lo
            escuchamos.”
          </p>
          <WaveDivider className="mx-auto mt-10 h-3 w-40 text-accent" />
          <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            Chef ejecutivo · Lava & Salitre
          </p>
        </div>
      </section>

      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center md:flex-row md:justify-between md:text-left lg:px-10">
          <div>
            <h3 className="font-serif text-3xl">Reserva tu mesa</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Frente al Atlántico, en Puerto de las Nieves.
            </p>
          </div>
          <Link to="/reservas" className="btn-primary">
            Solicitar reserva
          </Link>
        </div>
      </section>
    </>
  );
}
