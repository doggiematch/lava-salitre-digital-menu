import { createFileRoute } from "@tanstack/react-router";
import { ProjectCategoryPage } from "@/components/site/ProjectCategoryPage";

export const Route = createFileRoute("/proyecto/tecnologias-gastronomicas-temp")({
  component: TecnologiasGastronomicas,
  head: () => ({
    meta: [
      { title: "Tecnologías gastronómicas — Lava & Salitre" },
      {
        name: "description",
        content:
          "Técnicas culinarias, tecnologías de carta y aplicaciones gastronómicas del proyecto Lava & Salitre.",
      },
    ],
  }),
});

function TecnologiasGastronomicas() {
  return (
    <ProjectCategoryPage
      activeSection="tecnologias-gastronomicas"
      title="Tecnologías gastronómicas"
      subtitle="Técnicas modernas, carta interactiva y recursos digitales aplicados a la experiencia gastronómica."
    />
  );
}
