import { createFileRoute } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useState } from "react";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/galeria")({
  component: Galeria,
  head: () => ({
    meta: [
      { title: "Galería — Lava & Salitre" },
      {
        name: "description",
        content:
          "Galería fotográfica de Lava & Salitre: sala, terraza, cocina y equipo en Puerto de las Nieves.",
      },
    ],
  }),
});

const photos = [
  {
    src: "/galeria/fachada-atardecer.png",
    alt: "Fachada de Lava & Salitre al atardecer frente al mar",
    title: "Frente al Atlántico",
    className: "md:col-span-2",
  },
  {
    src: "/galeria/salon-vistas.png",
    alt: "Salón principal con mesas vestidas y vistas a Puerto de las Nieves",
    title: "Sala principal",
    className: "",
  },
  {
    src: "/galeria/recepcion.png",
    alt: "Recepción del restaurante con piedra volcánica y madera cálida",
    title: "Bienvenida",
    className: "",
  },
  {
    src: "/galeria/terraza-atardecer.png",
    alt: "Terraza del restaurante con mesas y vistas al atardecer",
    title: "Terraza",
    className: "md:col-span-2",
  },
  {
    src: "/galeria/cocina.png",
    alt: "Cocina profesional de Lava & Salitre preparada para el servicio",
    title: "Cocina vista",
    className: "md:col-span-2",
  },
  {
    src: "/galeria/equipo.png",
    alt: "Equipo de sala y cocina frente a la entrada del restaurante",
    title: "El equipo",
    className: "",
  },
];

function Galeria() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof photos)[number] | null>(null);

  return (
    <div className="paper">
      <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <div className="grid items-end gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionTitle
            eyebrow="Galería"
            title="El restaurante en imágenes"
            subtitle="Piedra volcánica, madera cálida y el Atlántico como telón de fondo para cada servicio."
          />

          <div className="flex min-h-[300px] items-center justify-center lg:justify-end md:min-h-[420px]">
            <img
              src="/galeria/logo-version-dorada-transparente.png"
              alt="Logo de Lava & Salitre"
              className="h-auto max-h-[300px] w-auto max-w-full object-contain md:max-h-[390px] lg:max-w-[680px]"
            />
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[260px] gap-4 md:grid-cols-3 md:auto-rows-[320px]">
          {photos.map((photo) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setSelectedPhoto(photo)}
              className={`group relative cursor-pointer overflow-hidden rounded-md border border-border bg-card text-left ${photo.className}`}
              aria-label={`Abrir imagen: ${photo.title}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
              />
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-5 py-5">
                <span className="text-[10px] uppercase tracking-[0.24em] text-cream">
                  {photo.title}
                </span>
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/85 px-4 py-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full border border-cream/30 bg-ink/70 text-cream transition hover:bg-cream hover:text-ink"
            aria-label="Cerrar imagen"
          >
            <X size={18} />
          </button>
          <img
            src={selectedPhoto.src}
            alt={selectedPhoto.alt}
            className="max-h-[88vh] max-w-[92vw] rounded-md object-contain shadow-[0_30px_90px_-35px_oklch(0_0_0/.8)]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
