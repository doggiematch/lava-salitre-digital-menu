import { createFileRoute } from "@tanstack/react-router";
import { QrCode, Tablet, BookOpen, ShieldAlert, Sparkles } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/carta-digital")({
  component: CartaDigital,
  head: () => ({
    meta: [
      { title: "Carta digital — Lava & Salitre" },
      { name: "description", content: "Una carta digital interactiva: QR en mesa, tablet, alérgenos y ficha ampliada de cada plato." },
    ],
  }),
});

const features = [
  { icon: QrCode, t: "Acceso por QR", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: Tablet, t: "Tablet en mesa", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: BookOpen, t: "Carta interactiva", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: ShieldAlert, t: "Alérgenos", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
  { icon: Sparkles, t: "Ficha ampliada", d: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
];

function CartaDigital() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle eyebrow="Tecnología en sala" title="Una carta que se vive" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Una experiencia digital pensada para no interrumpir la conversación." />

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative mx-auto flex h-[420px] w-full max-w-sm items-center justify-center">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-stone-volcanic to-ink" />
          <div className="relative h-[92%] w-[88%] rounded-[1.5rem] bg-background p-5 shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-serif text-lg">Lava & Salitre</span>
              <span className="h-2 w-2 rounded-full bg-accent" />
            </div>
            <div className="space-y-3">
              {["Bienmesabe Lunar", "Frangollo Volcánico", "Mango de Salitre", "Quesillo Atlántico"].map((n) => (
                <div key={n} className="flex items-center justify-between rounded border border-border/60 px-3 py-2">
                  <span className="text-sm">{n}</span>
                  <span className="text-xs text-accent">Ver</span>
                </div>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2 text-[10px] uppercase tracking-widest">
              <div className="rounded bg-secondary p-2 text-center">QR</div>
              <div className="rounded bg-secondary p-2 text-center">Alérgenos</div>
              <div className="rounded bg-accent/20 p-2 text-center">Ficha</div>
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.t} className="rounded-md border border-border/70 bg-card/60 p-5">
              <f.icon size={20} className="text-accent" />
              <h3 className="mt-3 font-serif text-lg">{f.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
