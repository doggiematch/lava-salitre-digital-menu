import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/contacto")({
  component: Contacto,
  head: () => ({
    meta: [
      { title: "Contacto — Lava & Salitre" },
      { name: "description", content: "Lava & Salitre. Puerto de las Nieves, Agaete, Gran Canaria." },
    ],
  }),
});

function Contacto() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle eyebrow="Visítanos" title="Contacto" subtitle="Puerto de las Nieves, Agaete. Frente al Atlántico." />

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <div className="space-y-6">
          <Item icon={MapPin} title="Ubicación" lines={["Puerto de las Nieves", "Agaete · Gran Canaria"]} />
          <Item icon={Clock} title="Horario" lines={["Mar–Sáb · 13:00–16:00", "Mar–Sáb · 20:00–23:30", "Domingo · solo comidas"]} />
          <Item icon={Phone} title="Teléfono" lines={["+34 928 000 000", "hola@lavaysalitre.es"]} />
          <Item icon={Instagram} title="Redes" lines={["@lavaysalitre", "#cocinacanariadevanguardia"]} />
        </div>

        <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border bg-gradient-to-br from-salitre/40 via-background to-sand/60">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,oklch(0.42_0.012_60/.08)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.42_0.012_60/.08)_1px,transparent_1px)] [background-size:32px_32px]" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg">
              <MapPin size={20} />
            </div>
            <p className="mt-3 font-serif text-lg">Lava & Salitre</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Puerto de las Nieves</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Item({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) {
  return (
    <div className="flex gap-4 rounded-md border border-border bg-card/60 p-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
        <Icon size={18} />
      </div>
      <div>
        <h3 className="font-serif text-lg">{title}</h3>
        {lines.map((l) => (
          <p key={l} className="text-sm text-muted-foreground">{l}</p>
        ))}
      </div>
    </div>
  );
}
