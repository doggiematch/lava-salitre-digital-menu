import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  BookOpenText,
  Calculator,
  CircleAlert,
  CircleCheck,
  ShieldAlert,
  TrendingUp,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
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
    icon: BookOpenText,
    text: "Lava y Salitre plantea una propuesta gastronómica basada en la cocina canaria, llevada a una versión más actual, cuidada y con lenguaje de vanguardia. El proyecto busca demostrar que los productos de las islas tienen valor propio y pueden formar parte de platos modernos sin perder la esencia tradicional.",
    highlights: [
      "El producto local es el eje del concepto: gofio, papas antiguas, quesos canarios, miel de palma, pescados frescos, frutas tropicales y vinos volcánicos.",
      "La propuesta apoya a agricultores, ganaderos, pescadores y pequeños productores canarios, reforzando una cocina más cercana y sostenible.",
      "Cada plato debe representar algo del territorio: el mar, la tierra volcánica, los sabores tradicionales y la identidad de las islas.",
      "La idea principal es crear una cocina canaria actual, respetando el producto local y la cultura gastronómica de Canarias.",
    ],
  },
  {
    title: "Análisis DAFO",
    icon: BarChart3,
    text: "El análisis DAFO ayuda a valorar el proyecto de forma estratégica, identificando los puntos fuertes de Lava y Salitre, los aspectos que necesitan control y los factores externos que pueden favorecer o dificultar su puesta en marcha.",
    groups: [
      {
        label: "Debilidades",
        icon: CircleAlert,
        items: [
          "Coste más elevado del producto kilómetro cero.",
          "Dependencia de proveedores locales y de la disponibilidad de ciertos ingredientes.",
          "Necesidad de personal cualificado para ejecutar técnicas modernas con precisión.",
          "Elaboraciones más complejas, con mayor organización previa y control de temperaturas.",
          "Precio menos accesible para clientes que busquen una experiencia frecuente o informal.",
        ],
      },
      {
        label: "Amenazas",
        icon: ShieldAlert,
        items: [
          "Competencia gastronómica con propuestas de calidad y reconocimiento en Canarias.",
          "Subida de materias primas y posible reducción del margen de beneficio.",
          "Cambios en la demanda hacia opciones más económicas o informales.",
          "Estacionalidad turística si el restaurante depende demasiado del visitante.",
          "Riesgo reputacional si no se mantiene una calidad constante en producto, servicio y equipo.",
        ],
      },
      {
        label: "Fortalezas",
        icon: CircleCheck,
        items: [
          "Identidad canaria marcada, basada en producto local, cultura gastronómica y unión entre mar y tierra.",
          "Concepto original y reconocible: lava y salitre como reflejo del paisaje volcánico y del Atlántico.",
          "Uso de técnicas modernas como espumas, gelificaciones, deconstrucciones y presentaciones limpias.",
          "Menús estructurados en Lava, Salitre y Lava y Salitre, lo que ordena la experiencia del cliente.",
          "Narrativa gastronómica fuerte, con platos capaces de contar historias sobre las islas.",
        ],
      },
      {
        label: "Oportunidades",
        icon: TrendingUp,
        items: [
          "Crecimiento del turismo gastronómico y búsqueda de experiencias auténticas.",
          "Mayor interés por la sostenibilidad, la trazabilidad y el producto de cercanía.",
          "Colaboración con bodegas, agricultores, pescadores y ganaderos canarios.",
          "Diferenciación frente a propuestas más tradicionales mediante una experiencia completa.",
          "Uso de herramientas digitales como carta QR, realidad aumentada o menús interactivos.",
        ],
      },
    ],
    conclusion:
      "La clave será mantener el equilibrio entre tradición e innovación: respetar el producto canario y presentarlo de una forma actual, cuidada y con personalidad propia.",
  },
  {
    title: "Plan de marketing",
    icon: Megaphone,
    text: "La estrategia de promoción presentará el restaurante como una experiencia gastronómica canaria, moderna y cuidada, donde el producto local es el verdadero protagonista. No se busca vender solo un menú, sino transmitir una forma de entender Canarias a través del mar, la lava, el producto insular y una cocina actual.",
    groups: [
      {
        label: "Estrategia de promoción",
        items: [
          "Cuidar una imagen visual elegante y cercana con fotografías de platos, sala, equipo, ambiente y producto local.",
          "Explicar el origen de los ingredientes para reforzar la filosofía de kilómetro cero.",
          "Crear expectativa antes de cada temporada o cambio de carta con pruebas, detalles de emplatado e inspiración del menú.",
          "Colaborar con productores, bodegas canarias, hoteles, guías gastronómicas y perfiles vinculados a la cocina.",
        ],
      },
      {
        label: "Redes sociales",
        items: [
          "Instagram: fotos cuidadas, vídeos de emplatado, historias del día a día, encuestas y publicaciones sobre producto canario.",
          "TikTok: vídeos naturales y dinámicos con pruebas de recetas, técnicas de cocina, montajes de platos y momentos reales del servicio.",
          "Facebook: novedades, menús especiales, eventos, reservas, colaboraciones y contenido informativo.",
        ],
      },
    ],
    table: {
      headers: ["Acción", "Objetivo"],
      rows: [
        ["Vídeos cortos de emplatado", "Mostrar la parte visual, creativa y técnica del restaurante."],
        ["Productos canarios de temporada", "Reforzar la identidad local y la filosofía de kilómetro cero."],
        ["Equipo de cocina y sala", "Hacer el proyecto más humano, cercano y real."],
        ["Maridajes con vinos canarios", "Dar valor a la experiencia completa del menú degustación."],
        ["Menús especiales o eventos", "Atraer reservas en fechas concretas y crear movimiento en redes."],
        ["Creadores gastronómicos", "Llegar a público interesado en gastronomía y experiencias diferentes."],
      ],
    },
    conclusion:
      "El marketing debe enseñar no solo los platos terminados, sino también la historia que hay detrás: producto canario, equipo, creatividad y conexión con el paisaje de las islas.",
  },
  {
    title: "Presupuesto",
    icon: Calculator,
    text: "El presupuesto está planteado para un menú degustación de bocados, snacks y pases pequeños. Las cantidades son controladas, el producto canario tiene protagonismo y la presentación mantiene un nivel cuidado sin convertir la propuesta en un presupuesto exagerado.",
    groups: [
      {
        label: "Coste de producción",
        items: [
          "Snacks y bocados iniciales: 0,80 EUR - 1,80 EUR por persona.",
          "Aperitivos de mar: 1,50 EUR - 3,00 EUR por persona.",
          "Aperitivos de tierra: 1,20 EUR - 2,80 EUR por persona.",
          "Pases de pescado: 3,00 EUR - 5,50 EUR por persona.",
          "Pases de carne: 3,50 EUR - 6,00 EUR por persona.",
          "Postres principales: 2,00 EUR - 4,00 EUR por persona.",
          "Petit fours: 0,50 EUR - 1,20 EUR por persona.",
          "Postres con técnica especial: 2,50 EUR - 4,50 EUR por persona.",
        ],
      },
      {
        label: "Maridaje",
        items: [
          "Maridaje corto: 6 EUR - 10 EUR por persona.",
          "Maridaje completo: 12 EUR - 20 EUR por persona.",
          "Maridaje especial: 22 EUR - 30 EUR por persona.",
          "El maridaje se calcula con pequeñas cantidades de vino canario por pase, no con copas completas.",
        ],
      },
    ],
    table: {
      headers: ["Menú", "Precio sin maridaje", "Precio con maridaje"],
      rows: [
        ["Menú Lava", "55 EUR - 70 EUR", "70 EUR - 90 EUR"],
        ["Menú Salitre", "60 EUR - 75 EUR", "75 EUR - 95 EUR"],
        ["Menú Lava y Salitre", "75 EUR - 95 EUR", "95 EUR - 120 EUR"],
      ],
    },
    extraTable: {
      title: "Inversión tecnológica inicial recomendada",
      headers: ["Concepto", "Coste estimado"],
      rows: [
        ["Web básica", "600 EUR"],
        ["Dominio y alojamiento", "120 EUR"],
        ["QR y carta digital", "200 EUR"],
        ["Fotografías iniciales", "400 EUR"],
        ["Vídeos básicos para redes", "250 EUR"],
        ["Diseño inicial de redes", "200 EUR"],
        ["Total tecnológico inicial estimado", "1.770 EUR"],
      ],
    },
    conclusion:
      "Sin maridaje, el coste de producción del menú se estima entre 23,50 EUR y 42 EUR por persona. La parte tecnológica debe comenzar de forma sencilla con web, códigos QR, carta digital, fotografías y vídeos básicos para redes.",
  },
] as const;

function CardTitle({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-md border border-accent/30 bg-accent/10 text-accent">
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
      </span>
      <h2 className="pt-1 font-serif text-2xl text-foreground md:text-3xl">{title}</h2>
    </div>
  );
}

function GroupTitle({ icon: Icon, title }: { icon?: LucideIcon; title: string }) {
  return (
    <div className="flex items-center gap-3">
      {Icon ? (
        <span className="grid size-8 shrink-0 place-items-center rounded-md border border-accent/25 bg-accent/10 text-accent">
          <Icon aria-hidden="true" className="size-4" strokeWidth={1.9} />
        </span>
      ) : null}
      <h3 className="font-serif text-xl text-foreground">{title}</h3>
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  return (
    <div className="mt-6 overflow-hidden rounded-md border border-border">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-card/70 text-[10px] uppercase tracking-[0.22em] text-accent">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border/70">
          {rows.map((row) => (
            <tr key={row.join("-")} className="bg-background/45">
              {row.map((cell) => (
                <td key={cell} className="px-4 py-3 align-top leading-relaxed text-muted-foreground">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Fase4DocumentacionPresentacion() {
  return (
    <ProjectPhasePage
      phase="Fase 4"
      title="Documentación y presentación"
      intro="Esta cuarta fase consolida el proyecto en una memoria completa capaz de comunicar su valor de forma clara y profesional. El objetivo es ordenar la información estratégica, económica, gastronómica y visual para demostrar la viabilidad de Lava y Salitre como restaurante especializado en cocina canaria de vanguardia."
    >
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:py-16">
          {phaseSections.map((section) => (
            <article
              key={section.title}
              className="rounded-md border border-border bg-background/70 p-6 md:p-8"
            >
              <CardTitle icon={section.icon} title={section.title} />
              <p className="mt-5 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
                {section.text}
              </p>

              {"highlights" in section && (
                <ul className="mt-5 grid gap-3 text-sm leading-relaxed text-muted-foreground md:grid-cols-2">
                  {section.highlights.map((item) => (
                    <li key={item} className="rounded-md border border-border bg-card/50 p-4">
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {"groups" in section && (
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {section.groups.map((group) => (
                    <div key={group.label} className="rounded-md border border-border bg-card/50 p-5">
                      <GroupTitle icon={"icon" in group ? group.icon : undefined} title={group.label} />
                      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                        {group.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {"table" in section && <DataTable headers={section.table.headers} rows={section.table.rows} />}

              {"extraTable" in section && (
                <div className="mt-6">
                  <h3 className="font-serif text-xl text-foreground">{section.extraTable.title}</h3>
                  <DataTable headers={section.extraTable.headers} rows={section.extraTable.rows} />
                </div>
              )}

              {"conclusion" in section && (
                <p className="mt-5 rounded-md border border-accent/20 bg-accent/10 p-4 text-sm leading-relaxed text-foreground">
                  {section.conclusion}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </ProjectPhasePage>
  );
}
