import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Printer, QrCode } from "lucide-react";
import { DishModal } from "@/components/site/DishModal";
import { QuickDishDialog } from "@/components/site/QuickDishDialog";
import { SectionTitle } from "@/components/site/SectionTitle";
import { allDishes } from "@/data/menu";

type QrDish = (typeof allDishes)[number];

export const Route = createFileRoute("/codigos-qr")({
  component: CodigosQrPage,
  head: () => ({
    meta: [
      { title: "Códigos QR - Lava & Salitre" },
      {
        name: "description",
        content:
          "Códigos QR para acceder a fichas informativas de platos y postres de Lava & Salitre.",
      },
    ],
  }),
});

function CodigosQrPage() {
  const [origin, setOrigin] = useState("http://localhost:5173");
  const [selectedDish, setSelectedDish] = useState<QrDish | null>(null);
  const [technicalDish, setTechnicalDish] = useState<QrDish | null>(null);
  const dishes = useMemo(() => uniqueDishes(allDishes), []);
  const groupedDishes = useMemo(() => groupDishesByCategory(dishes), [dishes]);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <div className="paper">
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <SectionTitle
            eyebrow="Día 2 · Códigos QR"
            title="QR de platos y postres"
            subtitle="Cada código enlaza a una ficha rápida con ingredientes principales, alérgenos, origen del producto, técnica e inspiración del plato."
          />
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex w-fit items-center gap-2 rounded-md border border-foreground px-5 py-3 text-xs uppercase tracking-[0.24em] transition-colors hover:bg-foreground hover:text-primary-foreground print:hidden"
          >
            <Printer className="h-4 w-4" />
            Imprimir
          </button>
        </div>

        <div className="mt-10 rounded-md border border-border bg-background/70 p-5 print:hidden">
          <div className="flex items-start gap-3">
            <QrCode className="mt-1 h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm leading-[1.8] text-muted-foreground">
              Esta página funciona como material de entrega del proyecto: los QR pueden ir impresos
              en una carta física, junto a cada plato, o en pequeñas tarjetas de mesa. El botón abre
              un resumen en ventana modal y el QR enlaza a la ficha informativa completa.
            </p>
          </div>
        </div>

        <div className="mt-10 space-y-12">
          {groupedDishes.map((group) => (
            <section key={group.category}>
              <div className="mb-5 flex items-center gap-4">
                <h2 className="shrink-0 font-serif text-3xl text-foreground">{group.category}</h2>
                <span className="h-px flex-1 bg-border" />
                <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                  {group.dishes.length} QR
                </span>
              </div>

              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 print:grid-cols-2">
                {group.dishes.map((dish) => {
                  const href = `/carta-digital/${dish.id}`;
                  const target = `${origin}${href}`;

                  return (
                    <article
                      key={dish.id}
                      className="break-inside-avoid rounded-md border border-border bg-background/80 p-5"
                    >
                      <div className="flex justify-center rounded-md border border-border bg-white p-4">
                        <img
                          src={qrSrc(target)}
                          alt={`Código QR de ${dish.name}`}
                          className="h-44 w-44"
                          loading="lazy"
                        />
                      </div>
                      <p className="mt-4 text-[10px] uppercase tracking-[0.24em] text-accent">
                        {dish.categoryName}
                      </p>
                      <h3 className="mt-2 font-serif text-2xl leading-tight text-foreground">
                        {dish.name}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {dish.origin}
                      </p>
                      <button
                        type="button"
                        onClick={() => setSelectedDish(dish)}
                        className="mt-4 inline-flex text-left text-xs uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:text-foreground print:hidden"
                      >
                        Abrir ficha rápida
                      </button>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </section>

      <QuickDishDialog
        dish={selectedDish}
        onOpenChange={(open) => !open && setSelectedDish(null)}
        onOpenTechnicalSheet={(dish) => {
          setSelectedDish(null);
          setTechnicalDish(dish);
        }}
      />
      <DishModal
        dish={technicalDish ?? dishes[0]}
        open={Boolean(technicalDish)}
        onOpenChange={(open) => !open && setTechnicalDish(null)}
      />
    </div>
  );
}

function uniqueDishes(dishes: QrDish[]) {
  const seen = new Set<string>();
  return dishes.filter((dish) => {
    if (seen.has(dish.id)) return false;
    seen.add(dish.id);
    return true;
  });
}

function groupDishesByCategory(dishes: QrDish[]) {
  const categoryOrder = [
    { source: "Entrantes", label: "Entrantes" },
    { source: "Primeros platos", label: "Primeros platos" },
    { source: "Segundos platos", label: "Segundos platos" },
    { source: "Sorbete", label: "Sorbete" },
    { source: "Postres", label: "Postres" },
    { source: "Petit four", label: "Petit four" },
  ];

  return categoryOrder
    .map((category) => ({
      category: category.label,
      dishes: dishes.filter((dish) => dish.categoryName === category.source),
    }))
    .filter((group) => group.dishes.length > 0);
}

function qrSrc(target: string) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=12&data=${encodeURIComponent(
    target,
  )}`;
}
