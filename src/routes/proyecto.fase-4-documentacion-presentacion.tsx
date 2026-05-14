import { createFileRoute } from "@tanstack/react-router";
import { ProjectPhasePage } from "@/components/site/ProjectPhasePage";

export const Route = createFileRoute("/proyecto/fase-4-documentacion-presentacion")({
  component: Fase4DocumentacionPresentacion,
  head: () => ({
    meta: [{ title: "Fase 4 - Lava & Salitre" }],
  }),
});

const phaseSections = [
  {
    title: "Introducción del proyecto",
    text: "La memoria del proyecto debe comenzar con una explicación clara de la oportunidad empresarial: crear un restaurante de postres vanguardistas que utiliza producto local canario como eje de diferenciación. Esta introducción permitirá presentar el objetivo general, el valor cultural de la propuesta y la importancia de trabajar con ingredientes de proximidad, tanto por identidad gastronómica como por posicionamiento de marca, sostenibilidad y conexión con el territorio.",
  },
  {
    title: "Análisis DAFO",
    text: "El análisis DAFO permitirá valorar el proyecto con una mirada estratégica y realista. Identificar fortalezas, debilidades, oportunidades y amenazas ayuda a anticipar decisiones clave antes de la puesta en marcha, desde la diferenciación del concepto hasta posibles riesgos operativos, competencia, costes o dependencia de proveedores. Para un inversor, este apartado demuestra capacidad de análisis, control del entorno y preparación empresarial.",
  },
  {
    title: "Plan de marketing",
    text: "El plan de marketing definirá cómo se dará visibilidad al restaurante y cómo se construirá una comunidad alrededor de la experiencia. La estrategia debe combinar promoción local, atractivo turístico y presencia digital, con especial atención a redes sociales, fotografía de producto, videos cortos y contenido que explique el origen de los ingredientes y la innovación aplicada. El objetivo será generar deseo, reconocimiento de marca y tráfico hacia el restaurante.",
  },
  {
    title: "Presupuesto",
    text: "El presupuesto permitirá traducir la propuesta creativa en una estimación económica comprensible. Se contemplarán los costes de producción de los postres, incluyendo ingredientes, pruebas y elaboración, junto con los costes tecnológicos asociados a la web, códigos QR y contenido multimedia. Este apartado es esencial para analizar viabilidad, necesidades de inversión inicial y margen de mejora antes de convertir el concepto en una operación real.",
  },
  {
    title: "Presentación final",
    text: "La presentación final debe condensar el proyecto en un formato visual claro, profesional y convincente. Servirá para exponer el concepto gastronómico, la estructura de la carta, el valor del producto local y el componente tecnológico de la experiencia. Más allá de una explicación académica, esta presentación funcionará como una defensa comercial del proyecto, mostrando su coherencia, potencial de mercado y capacidad para diferenciarse.",
  },
] as const;

function Fase4DocumentacionPresentacion() {
  return (
    <ProjectPhasePage
      phase="Fase 4"
      title="Documentación y presentación"
      intro="Esta cuarta fase consolida el proyecto en una memoria completa y una presentación final capaz de comunicar su valor de forma clara, profesional y convincente. El objetivo es ordenar la información estratégica, económica, gastronómica y visual para demostrar la viabilidad de la propuesta y su potencial como restaurante especializado en postres vanguardistas con identidad canaria."
    >
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:py-16">
          {phaseSections.map((section) => (
            <article
              key={section.title}
              className="rounded-md border border-border bg-background/70 p-6 md:p-8"
            >
              <h2 className="font-serif text-2xl text-foreground md:text-3xl">
                {section.title}
              </h2>
              <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </ProjectPhasePage>
  );
}
