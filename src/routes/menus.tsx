import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  BadgeInfo,
  BookOpen,
  ChefHat,
  Grape,
  Leaf,
  QrCode,
  Search,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import { AllergenSheetView } from "@/components/site/AllergenSheetView";
import { DishModal } from "@/components/site/DishModal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { WinePairingSheetView } from "@/components/site/WinePairingSheetView";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { allergenSheets } from "@/data/allergenSheets";
import { menus, menuList, type Dish, type MenuKey } from "@/data/menu";
import { technicalSheets } from "@/data/technicalSheets";
import { winePairings } from "@/data/winePairings";

export const Route = createFileRoute("/menus")({
  component: MenusPage,
  head: () => ({
    meta: [
      { title: "Menú - Lava & Salitre" },
      {
        name: "description",
        content:
          "Menú interactivo de Lava & Salitre con recorridos degustación, origen de producto, técnicas y alérgenos.",
      },
    ],
  }),
});

const menuPasses: Record<MenuKey, string> = {
  lava: "10 pases",
  salitre: "10 pases",
  "lava-salitre": "15 pases",
};

const serviceNotes = [
  {
    icon: QrCode,
    title: "Acceso QR",
    text: "Consulta inmediata desde mesa con información actualizada de platos, origen y alérgenos.",
  },
  {
    icon: ShieldAlert,
    title: "Alérgenos",
    text: "Cada plato enlaza con su ficha de alérgenos cuando está disponible.",
  },
  {
    icon: Grape,
    title: "Maridaje",
    text: "Opción de maridaje con vinos canarios para completar el recorrido.",
  },
  {
    icon: Leaf,
    title: "Km 0",
    text: "Producto canario de mar y tierra, priorizando proximidad y temporada.",
  },
] as const;

function MenusPage() {
  const [activeKey, setActiveKey] = useState<MenuKey>("lava-salitre");
  const [query, setQuery] = useState("");
  const [activeDish, setActiveDish] = useState<Dish | null>(null);
  const [allergenDish, setAllergenDish] = useState<Dish | null>(null);
  const [pairingDish, setPairingDish] = useState<Dish | null>(null);
  const menu = menus[activeKey];

  const categories = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return menu.categories;

    return menu.categories
      .map((category) => ({
        ...category,
        dishes: category.dishes.filter((dish) =>
          [dish.name, dish.description, dish.origin, dish.technique, ...dish.ingredients]
            .join(" ")
            .toLowerCase()
            .includes(term),
        ),
      }))
      .filter((category) => category.dishes.length > 0);
  }, [menu, query]);

  const allergenSheet = allergenDish ? allergenSheets[allergenDish.id] : undefined;
  const pairingSheet = pairingDish ? winePairings[pairingDish.id] : undefined;
  const dishCount = menu.categories.reduce((total, category) => total + category.dishes.length, 0);

  return (
    <div className="paper">
      <section className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <SectionTitle
          eyebrow="Menú"
          title="Lava & Salitre"
          subtitle="Menús degustación de cocina canaria vanguardista: tierra volcánica, Atlántico, producto km 0 y técnica contemporánea."
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <div className="rounded-md border border-border bg-background/75 p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-card/70">
                <BookOpen className="h-5 w-5 text-accent" />
              </span>
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
                  Menú seleccionado
                </p>
                <h2 className="mt-1 font-serif text-3xl text-foreground">{menu.name}</h2>
              </div>
            </div>
            <p className="mt-4 font-serif text-xl italic text-stone-volcanic">{menu.tagline}</p>
            <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">
              {menu.description}
            </p>

            <div className="mt-6 rounded-md border border-border bg-card/60 p-4">
              <p className="text-[10px] uppercase tracking-[0.24em] text-accent">
                Recorrido degustación
              </p>
              <p className="mt-2 font-serif text-xl text-foreground">{menuPasses[activeKey]}</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {serviceNotes.map((note) => (
              <article key={note.title} className="rounded-md border border-border bg-card/55 p-5">
                <note.icon className="h-5 w-5 text-accent" />
                <h3 className="mt-3 font-serif text-xl text-foreground">{note.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{note.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="grid gap-2 sm:grid-cols-3">
              {menuList.map((item) => {
                const active = item.key === activeKey;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => {
                      setActiveKey(item.key);
                      setQuery("");
                    }}
                    className={`rounded-md border px-4 py-3 text-left transition-colors ${
                      active
                        ? "border-foreground bg-foreground text-primary-foreground"
                        : "border-border bg-background/70 text-foreground hover:border-accent"
                    }`}
                  >
                    <span className="block text-[10px] uppercase tracking-[0.24em] opacity-75">
                      {menuPasses[item.key]}
                    </span>
                    <span className="mt-1 block font-serif text-lg">{item.name}</span>
                  </button>
                );
              })}
            </div>

            <label className="relative block lg:w-80">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <span className="sr-only">Buscar en el menú</span>
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Buscar plato, origen o técnica"
                className="w-full rounded-md border border-border bg-background py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-accent"
              />
            </label>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-accent">
                Recorrido gastronómico
              </p>
              <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
                {dishCount} elaboraciones en {menu.name}
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              Toca una ficha para ver ingredientes completos, técnica, diseño del plato y detalle de
              alérgenos.
            </p>
          </div>

          <div className="mt-10 space-y-12">
            {categories.length === 0 ? (
              <div className="rounded-md border border-border bg-background/70 p-8 text-center">
                <p className="font-serif text-2xl text-foreground">Sin resultados</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  No hay platos que coincidan con esa búsqueda en este menú.
                </p>
              </div>
            ) : null}

            {categories.map((category) => (
              <section key={category.id}>
                <div className="mb-5 flex items-center gap-4">
                  <h3 className="shrink-0 font-serif text-2xl text-foreground">{category.name}</h3>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
                    {category.dishes.length} platos
                  </span>
                </div>
                <div className="grid gap-5 lg:grid-cols-2">
                  {category.dishes.map((dish) => (
                    <DigitalDishCard
                      key={dish.id}
                      dish={dish}
                      onOpenDish={() => setActiveDish(dish)}
                      onOpenAllergens={() => setAllergenDish(dish)}
                      onOpenPairing={() => setPairingDish(dish)}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <DishModal
        dish={activeDish ?? menu.categories[0].dishes[0]}
        open={Boolean(activeDish)}
        onOpenChange={(open) => !open && setActiveDish(null)}
      />

      {allergenSheet ? (
        <Dialog
          open={Boolean(allergenDish)}
          onOpenChange={(open) => !open && setAllergenDish(null)}
        >
          <DialogContent className="max-h-[92vh] max-w-[96vw] overflow-y-auto p-0 md:max-w-5xl lg:max-w-6xl">
            <DialogHeader className="sr-only">
              <DialogTitle>Ficha de alérgenos de {allergenSheet.title}</DialogTitle>
            </DialogHeader>
            <AllergenSheetView sheet={allergenSheet} />
          </DialogContent>
        </Dialog>
      ) : null}

      {pairingSheet ? (
        <Dialog open={Boolean(pairingDish)} onOpenChange={(open) => !open && setPairingDish(null)}>
          <DialogContent className="max-h-[92vh] max-w-[96vw] overflow-y-auto p-0 md:max-w-5xl lg:max-w-6xl">
            <DialogHeader className="sr-only">
              <DialogTitle>Ficha de maridaje de {pairingSheet.dishName}</DialogTitle>
            </DialogHeader>
            <WinePairingSheetView pairing={pairingSheet} />
          </DialogContent>
        </Dialog>
      ) : null}
    </div>
  );
}

function DigitalDishCard({
  dish,
  onOpenDish,
  onOpenAllergens,
  onOpenPairing,
}: {
  dish: Dish;
  onOpenDish: () => void;
  onOpenAllergens: () => void;
  onOpenPairing: () => void;
}) {
  const sheet = dish.technicalSheetId ? technicalSheets[dish.technicalSheetId] : undefined;
  const allergenSheet = allergenSheets[dish.id];
  const pairingSheet = winePairings[dish.id];
  const imageSrc = sheet?.photoSrc ?? sheet?.sketchSrc;

  return (
    <article className="overflow-hidden rounded-md border border-border bg-background/75">
      <div className="flex min-h-full flex-col">
        <button
          type="button"
          onClick={onOpenDish}
          className="group relative aspect-video w-full overflow-hidden bg-stone-950 text-left"
          aria-label={`Abrir ficha de ${dish.name}`}
        >
          {imageSrc ? (
            <img
              src={imageSrc}
              alt={dish.name}
              loading="lazy"
              className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-stone-950 p-6">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
          )}
        </button>

        <div className="flex flex-col p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.24em] text-accent">{dish.origin}</p>
              <h4 className="mt-2 font-serif text-2xl leading-tight text-foreground">
                {dish.name}
              </h4>
            </div>
          </div>

          <p className="mt-4 text-sm leading-[1.7] text-muted-foreground">{dish.description}</p>

          <div className="mt-5 grid gap-3 text-sm md:grid-cols-2">
            <InfoBlock icon={ChefHat} label="Técnica" value={dish.technique} />
            <InfoBlock icon={BadgeInfo} label="Ingredientes" value={dish.ingredients.join(" · ")} />
          </div>

          {dish.allergens.length ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {dish.allergens.slice(0, 4).map((allergen) => (
                <span
                  key={allergen}
                  className="rounded-full border border-border bg-card/70 px-3 py-1 text-xs text-muted-foreground"
                >
                  {allergen}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onOpenDish}
              className="rounded-md border border-foreground px-4 py-2 text-[10px] uppercase tracking-[0.24em] transition-colors hover:bg-foreground hover:text-primary-foreground"
            >
              Ver ficha
            </button>
            {pairingSheet ? (
              <button
                type="button"
                onClick={onOpenPairing}
                className="rounded-md border border-foreground px-4 py-2 text-[10px] uppercase tracking-[0.24em] transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                Ver maridaje
              </button>
            ) : null}
            {allergenSheet ? (
              <button
                type="button"
                onClick={onOpenAllergens}
                className="rounded-md border border-border px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
              >
                Alérgenos
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function InfoBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof ChefHat;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-md border border-border bg-card/45 p-3">
      <div className="flex items-center gap-2">
        <Icon className="h-4 w-4 text-accent" />
        <p className="text-[10px] uppercase tracking-[0.22em] text-accent">{label}</p>
      </div>
      <p className="mt-2 line-clamp-3 text-xs leading-relaxed text-muted-foreground">{value}</p>
    </div>
  );
}
