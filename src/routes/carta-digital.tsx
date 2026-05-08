import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, QrCode, ShieldAlert, Sparkles, Tablet } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/carta-digital")({
  component: CartaDigital,
  head: () => ({
    meta: [
      { title: "Carta digital — Lava & Salitre" },
      {
        name: "description",
        content:
          "Una carta digital interactiva: QR en mesa, tablet, alérgenos y ficha ampliada de cada plato.",
      },
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
      <SectionTitle
        eyebrow="Tecnología en sala"
        title="Una carta que se vive"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Una experiencia digital pensada para no interrumpir la conversación."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
        <div className="mx-auto flex h-[420px] w-full max-w-sm items-center justify-center">
          <img
            src="/galeria/logo-version-dorada-transparente.png"
            alt="Logo de Lava & Salitre"
            className="h-[420px] w-full object-contain"
          />
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
