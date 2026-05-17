import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { allDishes } from "@/data/menu";
import { technicalSheets } from "@/data/technicalSheets";

export const Route = createFileRoute("/proyecto/presentacion")({
  component: PresentacionProyecto,
  head: () => ({
    meta: [
      { title: "Presentación del proyecto - Lava & Salitre" },
      {
        name: "description",
        content:
          "Presentación visual resumida del proyecto Lava & Salitre para exposición en clase.",
      },
    ],
  }),
});

const phaseSlides = [
  {
    phase: "Fase 1",
    title: "Conceptualización y fundamentación",
    image: "/galeria/imagen-hero.png",
    text:
      "En esta fase se define la base del proyecto: un restaurante canario de vanguardia que parte de la tradición repostera, los productos de kilómetro cero y las técnicas actuales para crear una propuesta con identidad propia.",
    bullets: [
      "Investigación de postres tradicionales canarios.",
      "Selección de ingredientes locales y de temporada.",
      "Definición del concepto, público objetivo y tecnologías gastronómicas.",
    ],
  },
  {
    phase: "Fase 2",
    title: "Diseño de la carta y contenido",
    image: "/fotos-platos/bienmesabe-aereo.png",
    text:
      "La segunda fase convierte la idea en una carta concreta. Se organizan los postres, petit four y platos canarios de vanguardia, cada uno con nombre creativo, ingredientes principales, técnica aplicada y narrativa gastronómica.",
    bullets: [
      "Estructura de carta clara y fácil de presentar.",
      "Creación de platos, postres y fichas técnicas.",
      "Relato ligado al paisaje, la cultura y la cocina canaria.",
    ],
  },
  {
    phase: "Fase 3",
    title: "Desarrollo tecnológico e implementación",
    image: "/fotos-platos/perla-atlantica.png",
    text:
      "La tercera fase lleva la carta al entorno digital. La web, los códigos QR y las imágenes permiten que el cliente consulte información de cada elaboración de forma rápida, visual y actualizable.",
    bullets: [
      "Carta digital accesible desde móvil.",
      "Códigos QR enlazados a fichas informativas.",
      "Galería multimedia con platos y postres del proyecto.",
    ],
  },
  {
    phase: "Fase 4",
    title: "Documentación y presentación",
    image: "/galeria/salon-vistas.png",
    text:
      "La última fase ordena todo el trabajo en una memoria y una exposición final. El objetivo es demostrar que Lava & Salitre no es solo una idea gastronómica, sino una propuesta coherente, comunicable y viable.",
    bullets: [
      "Introducción del proyecto y valor del producto local.",
      "Análisis DAFO, marketing y presupuesto.",
      "Presentación final clara, visual y profesional.",
    ],
  },
] as const;

const conceptPoints = [
  {
    title: "Lava",
    text: "Representa la tierra, la cumbre, el fuego, la ganadería y el origen volcánico de Canarias.",
  },
  {
    title: "Salitre",
    text: "Representa el mar, la costa, la pesca, la frescura atlántica y la relación directa con Agaete.",
  },
  {
    title: "Vanguardia",
    text: "Actualiza sabores reconocibles con técnicas como esferificación, espumas, gelificaciones, brasa y texturas aireadas.",
  },
] as const;

const tastingPath = [
  "Platos canarios de vanguardia",
  "Postres clásicos reinterpretados",
  "Postres de innovación",
  "Petit four",
] as const;

const featuredDishIds = [
  "perla-atlantica",
  "bruma-agaete",
  "cabrito-cumbre",
  "vieja-sancochada",
  "ceniza-dulce",
  "bienmesabe-aereo",
  "pina-hierro",
  "palma-cacao",
  "bombon-volcanico",
  "toffee-aireado",
] as const;

function PresentacionProyecto() {
  const featuredDishes = featuredDishIds
    .map((id) => uniqueDishes(allDishes).find((dish) => dish.id === id))
    .filter(Boolean) as Array<(typeof allDishes)[number]>;

  return (
    <div className="paper">
      <section className="mx-auto grid max-w-6xl gap-10 px-5 py-14 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:py-20">
        <div>
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">
            Presentación final
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground lg:text-6xl">
            Lava & Salitre
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-[1.8] text-muted-foreground lg:text-lg">
            Lava & Salitre es una propuesta de restaurante canario de vanguardia situada en Agaete.
            El proyecto une producto local, paisaje volcánico, mar Atlántico y una carta pensada para
            explicar Canarias desde una mirada actual.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/proyecto/fase-1-conceptualizacion-fundamentacion"
              className="inline-flex items-center gap-2 rounded-md border border-foreground px-5 py-3 text-xs uppercase tracking-[0.24em] transition-colors hover:bg-foreground hover:text-primary-foreground"
            >
              Ver fases
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/carta-digital"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              Carta digital
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-md border border-border bg-card/50">
          <img
            src="/galeria/terraza-atardecer.png"
            alt="Restaurante Lava & Salitre frente al mar"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Concepto</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-4xl">
            Tradición canaria, producto local y cocina actual
          </h2>
          <div className="mt-7 grid gap-4 lg:grid-cols-3">
            {conceptPoints.map((point) => (
              <article key={point.title} className="rounded-md border border-border bg-background/70 p-5">
                <h3 className="font-serif text-2xl text-foreground">{point.title}</h3>
                <p className="mt-3 text-sm leading-[1.8] text-muted-foreground">{point.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">
            Guion de exposición
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-4xl">
            Las cuatro fases del proyecto
          </h2>
          <div className="mt-7 grid gap-6">
            {phaseSlides.map((slide) => (
              <article
                key={slide.phase}
                className="grid overflow-hidden rounded-md border border-border bg-background/70 lg:grid-cols-[0.85fr_1.15fr]"
              >
                <img src={slide.image} alt={slide.title} className="h-full min-h-64 w-full object-cover" />
                <div className="p-6 lg:p-8">
                  <p className="text-[10px] uppercase tracking-[0.35em] text-accent">
                    {slide.phase}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-foreground lg:text-3xl">
                    {slide.title}
                  </h3>
                  <p className="mt-4 text-sm leading-[1.8] text-muted-foreground lg:text-base">
                    {slide.text}
                  </p>
                  <ul className="mt-5 grid gap-2">
                    {slide.bullets.map((bullet) => (
                      <li key={bullet} className="text-sm leading-relaxed text-muted-foreground">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Carta</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-4xl">
            Recorrido gastronómico
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-[1.8] text-muted-foreground lg:text-base">
            La carta se entiende como un recorrido breve y ordenado. Primero aparecen los platos
            canarios de vanguardia; después, la parte dulce con postres clásicos reinterpretados,
            postres de innovación y petit four.
          </p>
          <div className="mt-7 grid gap-4 lg:grid-cols-4">
            {tastingPath.map((step, index) => (
              <article key={step} className="rounded-md border border-border bg-card/50 p-5">
                <p className="font-serif text-3xl text-accent">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-serif text-xl text-foreground">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Galería de apoyo</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-4xl">
            Imágenes para explicar la propuesta
          </h2>
          <div className="mt-7 grid grid-cols-2 gap-4 lg:grid-cols-5">
            {featuredDishes.map((dish) => {
              const sheet = dish.technicalSheetId ? technicalSheets[dish.technicalSheetId] : undefined;
              const imageSrc = sheet?.photoSrc ?? sheet?.sketchSrc;

              return (
                <figure
                  key={dish.id}
                  className="overflow-hidden rounded-md border border-border bg-card/50"
                >
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={dish.name}
                      className="aspect-square w-full object-cover"
                      loading="lazy"
                    />
                  ) : null}
                  <figcaption className="p-3">
                    <p className="line-clamp-2 min-h-[2.5rem] text-sm leading-snug text-foreground">
                      {dish.name}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-accent">
                      {dish.categoryName}
                    </p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:py-16">
          <div className="overflow-hidden rounded-md border border-border bg-card/50">
            <img
              src="/galeria/logo-lava-salitre.png"
              alt="Logo Lava & Salitre"
              className="aspect-video w-full object-cover"
            />
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Cierre</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground lg:text-4xl">
              Una experiencia canaria contemporánea
            </h2>
            <p className="mt-4 text-sm leading-[1.8] text-muted-foreground lg:text-base">
              Como conclusión, Lava & Salitre propone una forma de contar Canarias desde la cocina:
              producto local, paisaje, memoria gastronómica y tecnología sencilla al servicio de la
              experiencia. La propuesta es visual, clara y preparada para presentarse tanto en sala
              como en formato digital.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function uniqueDishes(dishes: typeof allDishes) {
  const seen = new Set<string>();

  return dishes.filter((dish) => {
    if (seen.has(dish.id)) return false;
    seen.add(dish.id);
    return true;
  });
}
