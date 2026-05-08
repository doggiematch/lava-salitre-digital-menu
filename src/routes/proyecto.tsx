import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ProjectSections } from "./conocenos";

export const Route = createFileRoute("/proyecto")({
  component: Proyecto,
  head: () => ({
    meta: [
      { title: "Proyecto — Lava & Salitre" },
      {
        name: "description",
        content:
          "Investigación, estructura, concepto y tecnologías gastronómicas del proyecto Lava & Salitre.",
      },
    ],
  }),
});

function Proyecto() {
  return (
    <div className="paper">
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <SectionTitle
          eyebrow="Proyecto"
          title="Proyecto Lava & Salitre"
          subtitle="Investigación de producto, estructura de menús, concepto gastronómico y tecnologías de la experiencia."
        />
      </section>
      <ProjectSections />
    </div>
  );
}
