import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/proyecto/carta-fisica-abierta")({
  component: CartaFisicaAbierta,
  head: () => ({
    meta: [{ title: "Carta física abierta - Lava & Salitre" }],
  }),
});

type MenuSpread = {
  title: string;
  description: string;
  src: string;
  alt: string;
};

const menuSpreads: MenuSpread[] = [
  {
    title: "Portada",
    description: "Presentación exterior de la carta física.",
    src: "/proyecto/fase-2/carta-fisica/portada-carta-menu.png",
    alt: "Portada negra de la carta física de Lava & Salitre con logotipo dorado.",
  },
  {
    title: "Apertura institucional",
    description: "Contraportada interior y mensaje del CEO.",
    src: "/proyecto/fase-2/carta-fisica/interior-1-carta-menu.png",
    alt: "Carta abierta con datos del restaurante y mensaje del CEO.",
  },
  {
    title: "Menús degustación",
    description: "Índice visual de los tres recorridos gastronómicos.",
    src: "/proyecto/fase-2/carta-fisica/interior-2-carta-menu.png",
    alt: "Interior de carta abierta con los menus Lava, Salitre y Tierra y Mar.",
  },
  {
    title: "Menu Lava y Menu Salitre",
    description: "Pases principales organizados con fotografía y códigos QR.",
    src: "/proyecto/fase-2/carta-fisica/interior-3-carta-menu.png",
    alt: "Interior de carta abierta con Menú Lava y Menú Salitre, platos y códigos QR.",
  },
  {
    title: "Menu Lava & Salitre",
    description: "Recorrido completo de la carta en formato abierto.",
    src: "/proyecto/fase-2/carta-fisica/interior-4-carta-menu.png",
    alt: "Interior de carta abierta con Menú Lava y Salitre y listado de platos con códigos QR.",
  },
  {
    title: "Carta de vinos",
    description: "Selección de vinos blancos, rosados, tintos, espumosos y dulces.",
    src: "/proyecto/fase-2/carta-fisica/carta-vinos.png",
    alt: "Carta de vinos abierta con seleccion de vinos canarios.",
  },
];

function CartaFisicaAbierta() {
  return (
    <div className="min-h-screen bg-[#15130f] text-stone-100">
      <header className="border-b border-gold/20 bg-[#100f0c]/95">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-8 lg:flex-row lg:items-end lg:justify-between lg:py-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.34em] text-gold">Fase 2</p>
            <h1 className="mt-3 font-serif text-4xl leading-tight text-stone-50 lg:text-6xl">
              Carta física abierta
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-[1.8] text-stone-300 lg:text-base">
              Visualización ordenada de la carta de platos y la carta de vinos en formato físico.
            </p>
          </div>

          <Link
            to="/proyecto/fase-2-diseno-carta-contenido"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/10 px-4 py-3 text-xs uppercase tracking-[0.22em] text-stone-100 transition-colors hover:bg-gold hover:text-[#17120b]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Volver a fase 2
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-7xl gap-8 px-5 py-8 lg:gap-10 lg:py-12">
        {menuSpreads.map((spread, index) => (
          <figure
            key={spread.src}
            className="overflow-hidden rounded-md border border-gold/20 bg-[#211c16] shadow-2xl shadow-black/40"
          >
            <div className="flex flex-col gap-3 border-b border-gold/15 px-4 py-4 sm:flex-row sm:items-center sm:justify-between lg:px-6">
              <figcaption>
                <p className="text-[10px] uppercase tracking-[0.28em] text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-serif text-2xl text-stone-50">{spread.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-stone-300">{spread.description}</p>
              </figcaption>
            </div>
            <div className="bg-[#0f0e0b] p-2 lg:p-4">
              <img
                src={spread.src}
                alt={spread.alt}
                className="h-auto w-full rounded-sm object-contain"
                loading={index < 2 ? "eager" : "lazy"}
              />
            </div>
          </figure>
        ))}
      </main>
    </div>
  );
}
