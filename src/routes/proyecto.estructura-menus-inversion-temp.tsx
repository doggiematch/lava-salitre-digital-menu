import { createFileRoute } from "@tanstack/react-router";
import { ProjectCategoryPage } from "@/components/site/ProjectCategoryPage";

export const Route = createFileRoute("/proyecto/estructura-menus-inversion-temp")({
  component: EstructuraMenusInversion,
  head: () => ({
    meta: [
      { title: "Estructura, menús e inversión inicial — Lava & Salitre" },
      {
        name: "description",
        content:
          "Estructura del restaurante, menús degustación e inversión inicial del proyecto Lava & Salitre.",
      },
    ],
  }),
});

function EstructuraMenusInversion() {
  return (
    <ProjectCategoryPage
      activeSection="estructura-menus-inversion"
      title="Estructura, menús e inversión inicial"
      subtitle="Capacidad, servicio, zonas del restaurante, menús degustación y presupuesto aproximado."
    />
  );
}
