import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/proyecto")({
  component: Proyecto,
  head: () => ({
    meta: [
      { title: "Proyecto - Lava & Salitre" },
      {
        name: "description",
        content:
          "Investigación, estructura, concepto y tecnologías gastronómicas del proyecto Lava & Salitre.",
      },
    ],
  }),
});

function Proyecto() {
  return <Outlet />;
}
