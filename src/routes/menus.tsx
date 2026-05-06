import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { menus, menuList, type MenuKey } from "@/data/menu";
import { DishCard } from "@/components/site/DishCard";
import { SectionTitle } from "@/components/site/SectionTitle";
import { Search } from "lucide-react";

const searchSchema = z.object({
  menu: z.enum(["lava", "salitre", "lava-salitre"]).optional().catch(undefined),
});

export const Route = createFileRoute("/menus")({
  validateSearch: searchSchema,
  component: MenusPage,
  head: () => ({
    meta: [
      { title: "Menús — Lava & Salitre" },
      { name: "description", content: "Explora los tres menús degustación de Lava & Salitre: Lava, Salitre y Lava & Salitre." },
    ],
  }),
});

function MenusPage() {
  const { menu: menuParam } = Route.useSearch();
  const navigate = Route.useNavigate();
  const activeKey: MenuKey = menuParam ?? "lava-salitre";
  const menu = menus[activeKey];

  const [category, setCategory] = useState<string>("all");
  const [query, setQuery] = useState("");

  const dishes = useMemo(() => {
    const cats = category === "all" ? menu.categories : menu.categories.filter((c) => c.id === category);
    if (!query.trim()) return cats;
    const q = query.toLowerCase();
    return cats
      .map((c) => ({ ...c, dishes: c.dishes.filter((d) => d.name.toLowerCase().includes(q)) }))
      .filter((c) => c.dishes.length > 0);
  }, [menu, category, query]);

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle eyebrow="La carta" title="Nuestros menús" subtitle="Tres recorridos gastronómicos: la brasa, el mar y su encuentro." />

      <div className="mt-10 flex flex-wrap gap-3">
        {menuList.map((m) => {
          const active = m.key === activeKey;
          return (
            <button
              key={m.key}
              onClick={() => navigate({ search: { menu: m.key } })}
              className={`rounded-full border px-5 py-2.5 text-xs uppercase tracking-[0.25em] transition ${
                active
                  ? "border-foreground bg-foreground text-primary-foreground"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {m.name}
            </button>
          );
        })}
      </div>

      <div className="mt-8 rounded-md border border-border/70 bg-card/50 p-6">
        <p className="font-serif text-2xl">{menu.tagline}</p>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{menu.description}</p>
      </div>

      <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2">
          <FilterPill active={category === "all"} onClick={() => setCategory("all")}>
            Todas
          </FilterPill>
          {menu.categories.map((c) => (
            <FilterPill key={c.id} active={category === c.id} onClick={() => setCategory(c.id)}>
              {c.name}
            </FilterPill>
          ))}
        </div>
        <div className="relative">
          <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar plato..."
            className="w-full rounded-full border border-border bg-background py-2 pl-9 pr-4 text-sm outline-none focus:border-accent md:w-72"
          />
        </div>
      </div>

      <div className="mt-10 space-y-14">
        {dishes.length === 0 && (
          <p className="text-center text-sm text-muted-foreground">Ningún plato coincide con tu búsqueda.</p>
        )}
        {dishes.map((cat) => (
          <section key={cat.id}>
            <div className="mb-6 flex items-end justify-between">
              <h3 className="font-serif text-2xl text-foreground">{cat.name}</h3>
              <div className="ml-6 h-px flex-1 bg-border" />
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              {cat.dishes.map((d) => (
                <DishCard key={d.id} dish={d} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 text-center">
        <Link to="/reservas" className="rounded-full border border-foreground px-6 py-3 text-xs uppercase tracking-[0.25em] hover:bg-foreground hover:text-primary-foreground">
          Reservar mesa
        </Link>
      </div>
    </div>
  );
}

function FilterPill({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-widest transition ${
        active ? "border-accent bg-accent/10 text-foreground" : "border-border text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
