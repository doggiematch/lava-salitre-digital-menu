import { createFileRoute, Link } from "@tanstack/react-router";
import { LavaBlob, WaveDivider } from "@/components/site/Decorations";

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
      {/* HERO */}
      <section className="paper relative overflow-hidden">
        {/* decorative blob */}
        <LavaBlob className="pointer-events-none absolute -right-32 -top-24 h-[560px] w-[560px] opacity-90 animate-float" />
        <div className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-salitre/30 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 pb-24 pt-14 md:pt-20 lg:grid-cols-12 lg:gap-12 lg:px-10 lg:pt-28">
          <div className="animate-fade-up lg:col-span-7">
            <div className="ornament mb-8">Puerto de las Nieves · Agaete</div>

            <h1 className="font-serif text-[3.5rem] leading-[0.95] text-foreground sm:text-[5rem] md:text-[6.5rem]">
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

            <p className="mt-10 max-w-xl text-base leading-[1.8] text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Una experiencia que
              dialoga entre la brasa volcánica, la mineralidad del Atlántico y el silencio
              luminoso de las islas.
            </p>

            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link to="/menus" search={{ menu: "lava" }} className="btn-primary">
                Menú Lava
              </Link>
              <Link to="/menus" search={{ menu: "salitre" }} className="btn-ghost">
                Menú Salitre
              </Link>
              <Link to="/menus" search={{ menu: "lava-salitre" }} className="btn-gold">
                Lava & Salitre
              </Link>
            </div>
          </div>

          {/* Right plate */}
          <div className="relative animate-fade-up lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2px] bg-gradient-to-br from-stone-volcanic via-foreground to-ink shadow-[0_40px_100px_-30px_oklch(0.18_0.012_55/.5)]">
              {/* warm glow */}
              <div className="absolute inset-0 [background-image:radial-gradient(circle_at_30%_25%,oklch(0.78_0.13_65/.45),transparent_55%),radial-gradient(circle_at_75%_75%,oklch(0.82_0.045_215/.4),transparent_60%)]" />
              {/* texture */}
              <div
                className="absolute inset-0 opacity-[0.18]"
                style={{
                  backgroundImage:
                    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
                }}
              />
              {/* frame */}
              <div className="absolute inset-4 border border-cream/15" />
              <div className="absolute right-6 top-6 flex h-14 w-14 items-center justify-center rounded-full border border-cream/30 font-serif text-sm italic text-cream">
                ※
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7">
                <p className="text-[10px] uppercase tracking-[0.4em] text-cream/60">Temporada</p>
                <p className="mt-1 font-serif text-3xl text-cream">Otoño · Invierno</p>
                <WaveDivider className="mt-4 h-3 w-32 text-cream/50" />
              </div>
            </div>
            <p className="mt-4 text-right text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
              Carta digital · MMXXVI
            </p>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="relative border-y border-border/50 bg-cream/40">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-3 lg:px-10">
          {[
            { n: "01", t: "Producto km 0", d: "Pequeños productores de Gran Canaria, lonjas locales y huertos volcánicos." },
            { n: "02", t: "Técnica de vanguardia", d: "Cocción sobre piedra, fermentaciones, ahumados lentos y baja temperatura." },
            { n: "03", t: "Carta interactiva", d: "Consulta cada plato, su origen, ingredientes y alérgenos en tiempo real." },
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

      {/* PHILOSOPHY QUOTE */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
          <div className="ornament mb-8 justify-center">Filosofía</div>
          <p className="font-serif text-3xl italic leading-[1.4] text-stone-volcanic sm:text-4xl md:text-[2.75rem]">
            “El sabor de una isla está hecho de viento, sal y piedra caliente.
            Nosotros sólo lo escuchamos.”
          </p>
          <WaveDivider className="mx-auto mt-10 h-3 w-40 text-accent" />
          <p className="mt-4 text-[11px] uppercase tracking-[0.35em] text-muted-foreground">
            Chef ejecutivo · Lava & Salitre
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-16 text-center md:flex-row md:justify-between md:text-left lg:px-10">
          <div>
            <h3 className="font-serif text-3xl">Reserva tu mesa</h3>
            <p className="mt-2 text-sm text-muted-foreground">Frente al Atlántico, en Puerto de las Nieves.</p>
          </div>
          <Link to="/reservas" className="btn-primary">Solicitar reserva</Link>
        </div>
      </section>
    </>
  );
}
