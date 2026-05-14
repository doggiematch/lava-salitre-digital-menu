import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { ProjectPhasePage } from "@/components/site/ProjectPhasePage";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { allDishes } from "@/data/menu";
import { technicalSheets } from "@/data/technicalSheets";

type DigitalDish = (typeof allDishes)[number];

export const Route = createFileRoute("/proyecto/fase-3-desarrollo-tecnologico-implementacion")({
  component: Fase3DesarrolloTecnologicoImplementacion,
  head: () => ({
    meta: [{ title: "Fase 3 - Lava & Salitre" }],
  }),
});

const phaseSections = [
  {
    title: "Realidad aumentada",
    text: "La realidad aumentada se plantea como un recurso puntual para reforzar el relato de algunos platos especiales, no como un elemento decorativo permanente. Podría utilizarse en elaboraciones vinculadas al paisaje volcánico o al Atlántico para mostrar origen del producto, técnica o inspiración, siempre manteniendo la comida como protagonista.",
  },
  {
    title: "Pruebas de funcionamiento",
    text: "Antes de presentar la carta digital al cliente, se comprobarán enlaces, códigos QR, carga de imágenes, legibilidad móvil y acceso a fichas técnicas. También se revisará que ingredientes, alérgenos y descripciones coincidan con la información de las fichas, ya que afectan a la confianza del cliente y al trabajo en sala.",
  },
] as const;

function Fase3DesarrolloTecnologicoImplementacion() {
  const [origin, setOrigin] = useState("http://localhost:5173");
  const dishes = useMemo(() => uniqueDishes(allDishes), []);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <ProjectPhasePage
      phase="Fase 3"
      title="Desarrollo tecnológico e implementación"
      intro="Esta tercera fase transforma la carta en una experiencia digital accesible, informativa y alineada con el posicionamiento del restaurante. El objetivo es crear los elementos tecnológicos que acompañarán la propuesta gastronómica, aportando transparencia, interacción, valor de marca y nuevas oportunidades de comunicación con el cliente."
    >
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:py-16">
          <DigitalPlatformSection />
          <QrCodesSection dishes={dishes} origin={origin} />
          <MultimediaSection dishes={dishes} />
          {phaseSections.map((section) => (
            <article
              key={section.title}
              className="rounded-md border border-border bg-background/70 p-6 md:p-8"
            >
              <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </ProjectPhasePage>
  );
}

function DigitalPlatformSection() {
  return (
    <article className="rounded-md border border-border bg-background/70 p-6 md:p-8">
      <h2 className="font-serif text-2xl text-foreground md:text-3xl">Plataforma digital</h2>
      <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
        La web funciona como presentación digital de Lava & Salitre: un restaurante de cocina
        canaria de vanguardia que une tierra volcánica, salitre atlántico, producto local y menú
        degustación. La plataforma resume el concepto, muestra la carta digital, presenta platos y
        postres con imágenes, y permite consultar fichas rápidas desde códigos QR.
      </p>

      <div className="mt-7 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead className="bg-card/70 text-[10px] uppercase tracking-[0.22em] text-accent">
            <tr>
              <th className="border-r border-border p-3 font-medium">Área</th>
              <th className="border-r border-border p-3 font-medium">Contenido</th>
              <th className="p-3 font-medium">Función para el restaurante</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                area: "Presentación",
                content: "Concepto Lava & Salitre, identidad canaria, público objetivo y propuesta de valor.",
                use: "Explica el restaurante antes de la visita y refuerza su posicionamiento gastronómico.",
              },
              {
                area: "Carta digital",
                content: "Platos, postres, ingredientes principales, técnica aplicada, origen e inspiración.",
                use: "Permite al cliente entender la experiencia y consultar información ampliada.",
              },
              {
                area: "QR en sala",
                content: "Acceso directo a fichas informativas desde cada elaboración.",
                use: "Une carta física y contenido digital sin recargar el servicio.",
              },
              {
                area: "Galería visual",
                content: "Fotografías de platos, postres y recursos de marca.",
                use: "Aumenta el atractivo comercial y facilita su uso en presentaciones y redes.",
              },
            ].map((row) => (
              <tr key={row.area} className="border-t border-border">
                <td className="border-r border-border p-3 font-serif text-lg text-foreground">
                  {row.area}
                </td>
                <td className="border-r border-border p-3 text-sm leading-relaxed text-muted-foreground">
                  {row.content}
                </td>
                <td className="p-3 text-sm leading-relaxed text-muted-foreground">{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function QrCodesSection({ dishes, origin }: { dishes: DigitalDish[]; origin: string }) {
  return (
    <article className="rounded-md border border-border bg-background/70 p-6 md:p-8">
      <h2 className="font-serif text-2xl text-foreground md:text-3xl">Códigos QR</h2>
      <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
        Los códigos QR conectan la carta física con fichas digitales actualizables. Cada QR dirige
        a una ficha rápida con descripción, ingredientes, técnica, origen del producto e información
        de alérgenos.
      </p>

      <div className="mt-7 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead className="bg-card/70 text-[10px] uppercase tracking-[0.22em] text-accent">
            <tr>
              <th className="border-r border-border p-3 font-medium">QR</th>
              <th className="border-r border-border p-3 font-medium">Elaboración</th>
              <th className="border-r border-border p-3 font-medium">Categoría</th>
              <th className="p-3 font-medium">Ficha digital</th>
            </tr>
          </thead>
          <tbody>
            {dishes.map((dish) => {
              const href = `/carta-digital/${dish.id}`;
              const target = `${origin}${href}`;

              return (
                <tr key={dish.id} className="border-t border-border">
                  <td className="border-r border-border p-3">
                    <img
                      src={qrSrc(target)}
                      alt={`Código QR de ${dish.name}`}
                      className="h-20 w-20 bg-white p-1"
                      loading="lazy"
                    />
                  </td>
                  <td className="border-r border-border p-3 font-serif text-lg text-foreground">
                    {dish.name}
                  </td>
                  <td className="border-r border-border p-3 text-sm text-muted-foreground">
                    {dish.categoryName}
                  </td>
                  <td className="p-3 text-sm">
                    <Link
                      to="/carta-digital/$dishId"
                      params={{ dishId: dish.id }}
                      className="font-medium text-accent underline underline-offset-4 transition hover:text-foreground"
                    >
                      Abrir ficha
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </article>
  );
}

function MultimediaSection({ dishes }: { dishes: DigitalDish[] }) {
  const [selectedDish, setSelectedDish] = useState<DigitalDish | null>(null);
  const dessertImages = dishes.filter((dish) =>
    ["Postres", "Petit four"].includes(dish.categoryName),
  );
  const plateImages = dishes.filter((dish) => !["Postres", "Petit four"].includes(dish.categoryName));
  const selectedSheet = selectedDish?.technicalSheetId
    ? technicalSheets[selectedDish.technicalSheetId]
    : undefined;
  const selectedImage = selectedSheet?.photoSrc ?? selectedSheet?.sketchSrc;

  return (
    <article className="rounded-md border border-border bg-background/70 p-6 md:p-8">
      <h2 className="font-serif text-2xl text-foreground md:text-3xl">Contenido multimedia</h2>
      <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
        El contenido multimedia reutiliza las imágenes ya disponibles de platos y postres. Las
        miniaturas cuadradas sirven como material visual para carta digital, presentación del
        restaurante, redes sociales y apoyo al discurso de sala.
      </p>

      <div className="mt-7 grid gap-8">
        <ThumbnailGrid
          title="Postres y petit four"
          dishes={dessertImages}
          onSelectDish={setSelectedDish}
        />
        <ThumbnailGrid title="Platos" dishes={plateImages} onSelectDish={setSelectedDish} />
      </div>

      <Dialog open={Boolean(selectedDish)} onOpenChange={(open) => !open && setSelectedDish(null)}>
        <DialogContent className="max-h-[92vh] max-w-[94vw] overflow-y-auto p-0 md:max-w-4xl">
          {selectedDish ? (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedDish.name}</DialogTitle>
              </DialogHeader>
              {selectedImage ? (
                <img
                  src={selectedImage}
                  alt={selectedDish.name}
                  className="max-h-[78vh] w-full bg-background object-contain"
                />
              ) : null}
              <div className="border-t border-border bg-background p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-accent">
                  {selectedDish.categoryName}
                </p>
                <h3 className="mt-2 font-serif text-2xl text-foreground">{selectedDish.name}</h3>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </article>
  );
}

function ThumbnailGrid({
  title,
  dishes,
  onSelectDish,
}: {
  title: string;
  dishes: DigitalDish[];
  onSelectDish: (dish: DigitalDish) => void;
}) {
  return (
    <section>
      <div className="mb-4 flex items-center gap-4">
        <h3 className="shrink-0 font-serif text-xl text-foreground md:text-2xl">{title}</h3>
        <span className="h-px flex-1 bg-border" />
        <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {dishes.length} imágenes
        </span>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {dishes.map((dish) => {
          const sheet = dish.technicalSheetId ? technicalSheets[dish.technicalSheetId] : undefined;
          const imageSrc = sheet?.photoSrc ?? sheet?.sketchSrc;

          return (
            <figure key={dish.id} className="overflow-hidden rounded-md border border-border bg-card/50">
              <button
                type="button"
                onClick={() => onSelectDish(dish)}
                className="block w-full text-left"
                aria-label={`Abrir imagen de ${dish.name}`}
              >
                {imageSrc ? (
                  <img
                    src={imageSrc}
                    alt={dish.name}
                    className="aspect-square w-full object-cover transition duration-300 hover:scale-[1.03]"
                    loading="lazy"
                  />
                ) : (
                  <div className="aspect-square w-full bg-muted" />
                )}
              </button>
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
    </section>
  );
}

function uniqueDishes(dishes: DigitalDish[]) {
  const seen = new Set<string>();

  return dishes.filter((dish) => {
    if (seen.has(dish.id)) return false;
    seen.add(dish.id);
    return true;
  });
}

function qrSrc(target: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=160x160&margin=8&data=${encodeURIComponent(
    target,
  )}`;
}
