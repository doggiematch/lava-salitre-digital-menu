import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/experiencia")({
  component: Experiencia,
  head: () => ({
    meta: [
      { title: "Experiencia — Lava & Salitre" },
      { name: "description", content: "Cocina canaria reinterpretada, producto km 0 y técnica de vanguardia." },
    ],
  }),
});

const blocks = [
  { t: "Cocina canaria reinterpretada", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { t: "Producto km 0", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { t: "Técnicas de vanguardia", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { t: "Experiencia sensorial", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { t: "Tecnología en sala", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { t: "Maridaje propio", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

function Experiencia() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle eyebrow="Filosofía" title="La experiencia" subtitle="Una cocina que conversa con el paisaje volcánico y el mar de Agaete." />

      <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {blocks.map((b, i) => (
          <div key={b.t} className="bg-background p-8">
            <span className="font-serif text-sm text-accent">0{i + 1}</span>
            <h3 className="mt-3 font-serif text-xl">{b.t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.d}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 rounded-md border border-border bg-gradient-to-br from-background to-secondary/40 p-8 md:p-12">
        <p className="font-serif text-2xl italic leading-relaxed text-stone-volcanic md:text-3xl">
          “El sabor de una isla está hecho de viento, sal y piedra caliente. Nosotros sólo lo escuchamos.”
        </p>
        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-accent">— Chef ejecutivo</p>
      </div>
    </div>
  );
}
