import { Link, createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/proyecto/")({
  component: ProyectoIndex,
  head: () => ({
    meta: [
      { title: "Proyecto - Lava & Salitre" },
      {
        name: "description",
        content:
          "Menú del proyecto Lava & Salitre: investigación, estructura, concepto y tecnologías gastronómicas.",
      },
    ],
  }),
});

const projectMenu = [
  {
    to: "/proyecto/conceptualizacion-fundamentacion",
    title: "Conceptualización y fundamentación",
    description:
      "Definición del concepto gastronómico del restaurante desde la tradición canaria, el kilómetro cero y la cocina de vanguardia.",
  },
  {
    to: "/proyecto/estructura-menus-inversion",
    title: "Estructura, menús e inversión inicial",
    description:
      "Capacidad, servicio, zonas del restaurante, menús degustación y presupuesto aproximado.",
  },
  {
    to: "/proyecto/tecnologias-gastronomicas",
    title: "Tecnologías gastronómicas",
    description:
      "Técnicas modernas, carta interactiva y recursos digitales aplicados a la experiencia gastronómica.",
  },
] as const;

function ProyectoIndex() {
  return (
    <div className="paper">
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <SectionTitle
          eyebrow="Proyecto"
          title="Proyecto Lava & Salitre"
          subtitle="Investigación de producto, estructura de menús, concepto gastronómico y tecnologías de la experiencia."
        />
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Menú del proyecto</p>
          <nav className="mt-7 grid gap-4 md:grid-cols-2" aria-label="Menú del proyecto">
            {projectMenu.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-md border border-border bg-background/70 p-6 transition-colors hover:border-accent hover:bg-card/70"
              >
                <h2 className="font-serif text-2xl text-foreground">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-5 text-[10px] uppercase tracking-[0.28em] text-accent transition-colors group-hover:text-foreground">
                  Abrir página
                </p>
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
