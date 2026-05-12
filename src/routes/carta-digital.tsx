import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Printer } from "lucide-react";
import { SectionTitle } from "@/components/site/SectionTitle";
import { WaveDivider } from "@/components/site/Decorations";
import { allDishes } from "@/data/menu";

type DigitalCartaDish = (typeof allDishes)[number];
type CartaDish = DigitalCartaDish & { menuNames: string[] };

export const Route = createFileRoute("/carta-digital")({
  component: CartaDigital,
  head: () => ({
    meta: [
      { title: "Carta digital - Lava & Salitre" },
      {
        name: "description",
        content:
          "Carta digital con codigos QR de cada elaboracion de Lava & Salitre, descripcion breve, menus, origen y alergenos.",
      },
    ],
  }),
});

function CartaDigital() {
  const [origin, setOrigin] = useState("http://localhost:5173");
  const dishes = useMemo(() => uniqueDishes(allDishes), []);
  const groupedDishes = useMemo(() => groupDishesByCategory(dishes), [dishes]);

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  return (
    <div className="paper">
      <section className="mx-auto max-w-5xl px-5 py-12 md:py-16">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <SectionTitle
            eyebrow="Carta digital"
            title="Lava & Salitre"
            subtitle="Carta de consulta en mesa: cada elaboracion mantiene su QR directo, una descripcion breve y la informacion esencial de menu, origen, ingredientes y alergenos."
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

        <div className="mt-8 flex justify-center">
          <WaveDivider className="h-4 w-52 text-accent" />
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-sm border border-border/70 bg-cream/35 px-6 py-7 text-center md:px-10">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">
            Carta escaneable
          </p>
          <p className="mt-4 font-serif text-2xl italic text-stone-volcanic">
            Tierra volcanica, Atlantico y producto canario de temporada.
          </p>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-5 py-12 md:py-16">
          <div className="space-y-14">
            {groupedDishes.map((group) => (
              <section key={group.category} className="break-inside-avoid">
                <ElegantDivider label={group.category} count={`${group.dishes.length} QR`} />

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  {group.dishes.map((dish) => {
                    const target = `${origin}/carta-digital/${dish.id}`;
                    const keywords = dishKeywords(dish);

                    return (
                      <article
                        key={dish.id}
                        className="relative grid min-h-full gap-4 rounded-sm border border-border/70 bg-cream/30 p-5 sm:grid-cols-[145px_1fr]"
                      >
                        <span className="pointer-events-none absolute right-5 top-5 font-serif text-xs italic text-accent/50">
                          ※
                        </span>
                        <div className="flex flex-col items-center text-center sm:pr-0">
                          <div className="flex h-32 w-32 items-center justify-center rounded-sm border border-border bg-white p-3">
                            <img
                              src={qrSrc(target)}
                              alt={`Codigo QR de ${dish.name}`}
                              className="h-full w-full"
                              loading="lazy"
                            />
                          </div>
                          <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-accent">
                            {dish.categoryName}
                          </p>
                          <h2 className="mt-2 font-serif text-xl leading-tight text-foreground">
                            {dish.name}
                          </h2>
                        </div>

                        <div className="flex min-w-0 flex-col border-t border-border/60 pt-4 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                          <p className="text-sm leading-[1.75] text-muted-foreground">
                            {dish.description}
                          </p>

                          <div className="mt-5 grid gap-4">
                            <InfoBlock label="Menú" value={dish.menuNames.join(" · ")} />
                            <InfoBlock label="Origen" value={dish.origin} />
                          </div>

                          {keywords.length ? (
                            <div className="mt-5 flex flex-wrap gap-2">
                              {keywords.map((keyword) => (
                                <InfoPill key={keyword}>{keyword}</InfoPill>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function uniqueDishes(dishes: DigitalCartaDish[]): CartaDish[] {
  const dishMap = new Map<string, CartaDish>();

  dishes.forEach((dish) => {
    const current = dishMap.get(dish.id);
    if (current) {
      if (!current.menuNames.includes(dish.menuName)) {
        current.menuNames.push(dish.menuName);
      }
      return;
    }

    dishMap.set(dish.id, { ...dish, menuNames: [dish.menuName] });
  });

  return Array.from(dishMap.values());
}

function groupDishesByCategory(dishes: CartaDish[]) {
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

function dishKeywords(dish: CartaDish) {
  const keywords = [...dish.ingredients, ...dish.allergens]
    .flatMap((item) => item.split(/[·,()]/))
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((item) => item.length <= 28)
    .filter((item) => !/^(sin|posibles|opcional|trazas)/i.test(item));

  return Array.from(new Set(keywords)).slice(0, 7);
}

function ElegantDivider({ label, count }: { label: string; count: string }) {
  return (
    <div>
      <div className="flex items-center gap-4">
        <span className="h-px flex-1 bg-border" />
        <p className="text-center font-serif text-3xl text-foreground">{label}</p>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="mt-3 flex items-center justify-center gap-4">
        <WaveDivider className="h-3 w-24 text-accent" />
        <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {count}
        </span>
        <WaveDivider className="h-3 w-24 text-accent" />
      </div>
    </div>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] uppercase tracking-[0.24em] text-accent">{label}</p>
      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{value || "Sin datos"}</p>
    </div>
  );
}

function InfoPill({ children }: { children: React.ReactNode }) {
  if (!children) return null;

  return (
    <span className="rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  );
}
