import { Link, createFileRoute } from "@tanstack/react-router";
import { DownloadInformeButton } from "@/components/DownloadInformeButton";
import { SectionTitle } from "@/components/site/SectionTitle";
import { projectIndexMenu } from "@/data/projectReport";

export const Route = createFileRoute("/proyecto/")({
  component: ProyectoIndex,
  head: () => ({
    meta: [
      { title: "Proyecto - Lava & Salitre" },
      {
        name: "description",
        content: "Fases del proyecto Lava & Salitre.",
      },
    ],
  }),
});

function ProyectoIndex() {
  return (
    <div className="paper">
      <section className="mx-auto max-w-6xl px-5 py-14 lg:py-20">
        <SectionTitle eyebrow="Proyecto" title="Proyecto Lava & Salitre" />
        <div className="mt-8 flex flex-wrap gap-3">
          <DownloadInformeButton />
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 lg:py-16">
          <nav className="grid gap-4 lg:grid-cols-2" aria-label="Menú del proyecto">
            {projectIndexMenu.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="group rounded-md border border-border bg-background/70 p-6 transition-colors hover:border-accent hover:bg-card/70"
              >
                <p className="text-[10px] uppercase tracking-[0.35em] text-accent">{item.phase}</p>
                <h2 className="mt-3 font-serif text-2xl text-foreground">{item.title}</h2>
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
