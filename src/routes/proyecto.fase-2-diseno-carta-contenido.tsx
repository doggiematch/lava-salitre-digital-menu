import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { DishModal } from "@/components/site/DishModal";
import { ProjectPhasePage } from "@/components/site/ProjectPhasePage";
import { allDishes, type Dish } from "@/data/menu";
import { technicalSheets } from "@/data/technicalSheets";

export const Route = createFileRoute("/proyecto/fase-2-diseno-carta-contenido")({
  component: Fase2DisenoCartaContenido,
  head: () => ({
    meta: [{ title: "Fase 2 - Lava & Salitre" }],
  }),
});

type MenuRow = {
  dishId: string;
  name: string;
  category: string;
  ingredients: string;
  technique: string;
  narrative: string;
  visual: string;
  type: "Postre" | "Petit four" | "Plato";
};

const dessertRows: MenuRow[] = [
  {
    dishId: "bienmesabe-aereo",
    name: "Bienmesabe aéreo con almendra de Tejeda",
    category: "Postres de innovación",
    ingredients: "Almendra de Tejeda, miel de palma, cítricos y almendra crujiente.",
    technique: "Espuma con sifón, granizado cítrico y crujiente.",
    narrative:
      "Parte de un dulce canario muy conocido y lo transforma en una versión más ligera, fresca y adecuada para un menú degustación.",
    visual:
      "Espuma suave de bienmesabe, granizado cítrico para equilibrar el dulzor y crujiente de almendra como contraste.",
    type: "Postre",
  },
  {
    dishId: "ceniza-dulce",
    name: "Ceniza dulce de chocolate volcánico",
    category: "Postres de innovación",
    ingredients:
      "Chocolate negro, leche de cabra canaria, cacao, bizcocho seco de chocolate y azúcar glas.",
    technique: "Deshidratación, ahumado y aire.",
    narrative:
      "Representa la parte volcánica de Lava & Salitre mediante chocolate, ceniza dulce y humo, conectando con la lava solidificada del paisaje canario.",
    visual:
      "Ganache como roca volcánica, ceniza fina de cacao y bizcocho seco, terminada con aire ahumado de leche de cabra.",
    type: "Postre",
  },
  {
    dishId: "pina-hierro",
    name: "Piña de El Hierro a la brasa",
    category: "Postres de innovación",
    ingredients: "Piña de El Hierro, cítricos, tierra volcánica dulce y teja fina.",
    technique: "Brasa, gelificación cítrica, tierra dulce y presentación en bocado.",
    narrative:
      "La piña de El Hierro gana un punto tostado y caramelizado sin perder frescor, creando un postre sencillo pero con intención.",
    visual:
      "Disco de piña caramelizada, quenelle de vainilla, puntos de gel cítrico, tierra volcánica dulce y teja fina para altura.",
    type: "Postre",
  },
  {
    dishId: "palma-cacao",
    name: "La Palma bajo cacao",
    category: "Postres de innovación",
    ingredients: "Plátano canario, chocolate, tierra de cacao y aire de cacao.",
    technique: "Esferificación, tierra de cacao, aire y presentación en bocado.",
    narrative:
      "Parte de la combinación reconocible de plátano canario y chocolate, pero la convierte en un bocado líquido y sorprendente.",
    visual:
      "Esfera líquida de plátano como lava dulce, chocolate cremoso, tierra oscura de cacao y aire ligero de cacao.",
    type: "Postre",
  },
  {
    dishId: "bombon-volcanico",
    name: "Bombón volcánico",
    category: "Petit four",
    ingredients: "Chocolate, ron canario, cacao y bizcocho seco triturado.",
    technique: "Relleno líquido, contraste de texturas y trampantojo volcánico.",
    narrative:
      "Cierra el menú con una pequeña roca de chocolate que esconde un relleno líquido de ron canario.",
    visual:
      "Exterior oscuro con aspecto de piedra volcánica, acabado de cacao y bizcocho seco, e interior líquido que sorprende al morder.",
    type: "Petit four",
  },
  {
    dishId: "toffee-aireado",
    name: "Toffee crujiente aireado",
    category: "Petit four",
    ingredients: "Caramelo, mantequilla, sal marina y bicarbonato.",
    technique: "Aireado del toffee con bicarbonato y textura porosa crujiente.",
    narrative:
      "Reinterpreta el toffee clásico en una pieza más ligera, técnica y fácil de comer al final del menú.",
    visual:
      "Pieza porosa y crujiente, con burbujas internas, contraste entre caramelo tostado y sal marina.",
    type: "Petit four",
  },
];

const plateRows: MenuRow[] = [
  {
    dishId: "perla-atlantica",
    name: "Perla Atlántica",
    category: "Platos canarios de vanguardia",
    ingredients:
      "Agua de mar canaria, limón canario, aceite de hierbas, microbrotes y flor comestible.",
    technique:
      "Esferificación inversa para crear una esfera salina y cítrica que se rompe en boca.",
    narrative:
      "Snack de apertura que funciona como primer contacto con el mar y representa la parte atlántica del restaurante.",
    visual: "Pequeña esfera con apariencia de perla marina, limpia, fresca y directa.",
    type: "Plato",
  },
  {
    dishId: "bruma-agaete",
    name: "Bruma de Agaete",
    category: "Platos canarios de vanguardia",
    ingredients: "Pepino, hierbahuerto, miel de palma y microhojas.",
    technique: "Criogranizado con nitrógeno líquido para conseguir una nieve fina y muy fría.",
    narrative:
      "Busca transmitir el frescor de la costa de Agaete con un punto vegetal, ligero y ligeramente dulce.",
    visual: "Textura de nieve fina, casi como una bruma fría, terminada con microhojas.",
    type: "Plato",
  },
  {
    dishId: "cochino-negro",
    name: "Cochino negro encapsulado",
    category: "Platos canarios de vanguardia",
    ingredients: "Cochino negro canario, gofio, miel de palma y vino tinto.",
    technique: "Cocción sous-vide y esferificación inversa del jugo de cochino negro.",
    narrative:
      "Parte de un producto ganadero canario y concentra su jugo en una esfera líquida con memoria de guiso.",
    visual: "Esfera de jugo sobre tierra de gofio, con lectura volcánica y popular.",
    type: "Plato",
  },
  {
    dishId: "cabrito-cumbre",
    name: "Cabrito de cumbre en ceniza volcánica",
    category: "Platos canarios de vanguardia",
    ingredients:
      "Cabrito canario, batata, vino tinto Listán Negro, miel de palma y aceituna negra.",
    technique: "Cocción sous-vide, prensado, glaseado y ceniza gastronómica de aceituna negra.",
    narrative:
      "Representa la zona de medianías y cumbre mediante cabrito meloso, vino canario y miel de palma.",
    visual: "Cabrito glaseado con crema de batata y ceniza negra que aporta imagen volcánica.",
    type: "Plato",
  },
  {
    dishId: "conejo-salmorejo",
    name: "Conejo en salmorejo invertido",
    category: "Platos canarios de vanguardia",
    ingredients: "Conejo canario, ajo, pimentón, tomillo, vino blanco y tomate.",
    technique: "Deconstrucción con gel de tomate y espuma templada de salmorejo en sifón.",
    narrative:
      "Versión moderna de un plato canario reconocible, separando sus partes para darles nuevas texturas.",
    visual: "Conejo jugoso, gel de tomate y espuma templada que conserva el sabor tradicional.",
    type: "Plato",
  },
  {
    dishId: "vaca-canaria",
    name: "Vaca canaria madurada",
    category: "Platos canarios de vanguardia",
    ingredients: "Lomo bajo de vaca canaria, papa bonita, vino tinto canario, tomillo y ajo.",
    technique: "Maduración, jugo reducido, emulsión de papa bonita y crujiente de piel.",
    narrative:
      "Cierre de carnes con producto canario marcado, jugoso y acompañado de un jugo intenso.",
    visual: "Corte marcado con emulsión fina de papa bonita, jugo brillante y crujiente de piel.",
    type: "Plato",
  },
  {
    dishId: "ostra-canaria",
    name: "Ostra canaria, aire marino y granizado salino",
    category: "Platos canarios de vanguardia",
    ingredients: "Ostra canaria, agua de mar filtrada, pepino, limón y lecitina de soja.",
    technique: "Aire marino y granizado salino para reforzar la sensación atlántica.",
    narrative: "Bocado frío y limpio que respeta la ostra y refuerza su personalidad marina.",
    visual: "Ostra casi natural con granizado de pepino y aire marino de aspecto ligero.",
    type: "Plato",
  },
  {
    dishId: "ceviche-cherne",
    name: "Ceviche de cherne, leche de tigre clarificada y aceite de cilantro",
    category: "Platos canarios de vanguardia",
    ingredients: "Cherne fresco, lima, cilantro, cebolla morada, fumet y maíz tostado.",
    technique: "Clarificación de leche de tigre y elaboración de aceite aromático de cilantro.",
    narrative:
      "Pase fresco y elegante donde la acidez se mantiene, pero con un acabado más limpio.",
    visual: "Cherne brillante con aceite verde, cebolla morada y maíz tostado como contraste.",
    type: "Plato",
  },
  {
    dishId: "vieja-sancochada",
    name: "Vieja sancochada, caldo limpio y aceite de algas",
    category: "Platos canarios de vanguardia",
    ingredients: "Vieja canaria, papa negra, algas, espinas de pescado y verduras.",
    technique: "Cocción controlada, caldo claro y aceite de algas.",
    narrative:
      "Lleva la vieja sancochada a una versión más fina, manteniendo pescado canario y papa.",
    visual: "Pescado con puré suave de papa negra, caldo claro y gotas de aceite de algas.",
    type: "Plato",
  },
  {
    dishId: "sama-roquera",
    name: "Sama roquera glaseada, fondo reducido y mojo verde elegante",
    category: "Platos canarios de vanguardia",
    ingredients: "Sama roquera, cilantro, ajo, vinagre, espinas de pescado y mantequilla.",
    technique: "Glaseado con fondo reducido y mojo verde refinado.",
    narrative:
      "Parte de la tradición del pescado con mojo verde, afinando el mojo para no tapar el sabor del pescado.",
    visual: "Sama marcada y brillante con fondo reducido y puntos de mojo verde elegante.",
    type: "Plato",
  },
  {
    dishId: "sorbete-lima",
    name: "Sorbete de lima, sal marina y aceite de oliva suave",
    category: "Platos canarios de vanguardia",
    ingredients: "Lima canaria, sal marina, aceite de oliva suave y ralladura de lima.",
    technique: "Mantecado de sorbete con equilibrio entre acidez, salinidad y grasa suave.",
    narrative: "Pase de transición pensado para limpiar el paladar antes del postre.",
    visual: "Bocado pequeño, frío y ligero, con brillo de aceite y ralladura cítrica.",
    type: "Plato",
  },
  {
    dishId: "cabrilla-confitada",
    name: "Cabrilla confitada, caldo clarificado de azafrán y hinojo",
    category: "Platos canarios de vanguardia",
    ingredients: "Cabrilla canaria, hinojo, azafrán, espinas de pescado y aceite suave.",
    technique: "Confitado a baja temperatura y caldo clarificado.",
    narrative:
      "Elaboración marina fina, con cocción suave y un caldo aromático sin sensación de guiso pesado.",
    visual: "Pescado jugoso con caldo claro de azafrán e hinojo, limpio y delicado.",
    type: "Plato",
  },
  {
    dishId: "atun-rojo",
    name: "Atún rojo, brasa suave, jugo marino y toque graso",
    category: "Platos canarios de vanguardia",
    ingredients: "Atún rojo, algas, pepino, aceite de oliva suave y espinas de pescado.",
    technique: "Marcado tipo tataki, jugo marino reducido y emulsión grasa.",
    narrative:
      "Plato potente de pescado marcado por fuera y rojo en el interior, equilibrado con frescor vegetal.",
    visual:
      "Atún marcado con interior rojo, jugo marino brillante, emulsión grasa y pepino crujiente.",
    type: "Plato",
  },
];

const menuStructure = [
  {
    title: "Platos canarios de vanguardia",
    description:
      "Pases salados de mar, costa, cumbre y ganadería local que dan identidad al recorrido.",
    count: plateRows.length,
  },
  {
    title: "Postres de innovación",
    description:
      "Creaciones dulces vinculadas al paisaje volcánico, la fruta canaria y las técnicas de vanguardia.",
    count: dessertRows.filter((row) => row.category === "Postres de innovación").length,
  },
  {
    title: "Petit four",
    description:
      "Bocados finales pequeños, técnicos y directos para cerrar la experiencia sin pesadez.",
    count: dessertRows.filter((row) => row.category === "Petit four").length,
  },
] as const;

const visualScheme = [
  {
    title: "Portada",
    text: "Nombre Lava & Salitre, cocina canaria de vanguardia y referencia a lava, salitre, costa y producto local.",
  },
  {
    title: "Recorrido",
    text: "La lectura avanza desde los platos canarios de vanguardia hasta los postres y petit four.",
  },
  {
    title: "Ficha de elaboración",
    text: "Cada ficha muestra nombre creativo, ingredientes principales canarios y técnica innovadora aplicada.",
  },
  {
    title: "Cierre",
    text: "La carta física se apoya en QR para ampliar fichas técnicas, alérgenos, origen y explicación de cada elaboración.",
  },
] as const;

const plateNarratives = [
  {
    name: "Perla Atlántica",
    idea: "Esfera salina que abre el menú como una gota del Atlántico.",
    relation: "Costa, salitre, roca volcánica y mar canario.",
    story:
      "Perla Atlántica está inspirada en el mar que rodea Canarias. Es un bocado pequeño, delicado y directo, pensado para abrir el menú con una sensación limpia, salina y fresca. La esfera representa una perla marina, pero también una gota del Atlántico transformada en alta cocina.",
    connection:
      "El plato se relaciona con la costa canaria, las rocas volcánicas junto al mar y la mezcla de salitre, piedra negra y brisa atlántica.",
  },
  {
    name: "Bruma de Agaete",
    idea: "Bocado frío y vegetal con textura de nieve fina.",
    relation: "Bruma, barrancos, costa norte y miel de palma.",
    story:
      "Bruma de Agaete nace de la sensación fresca que se percibe en la costa norte de Gran Canaria. El pepino, el hierbahuerto y la miel de palma crean un equilibrio entre frescor, aroma y dulzor suave.",
    connection:
      "Conecta con Agaete, sus barrancos, su costa y el ambiente húmedo que llega desde el Atlántico. También introduce la miel de palma como puente entre islas.",
  },
  {
    name: "Cochino negro encapsulado",
    idea: "Jugo de guiso tradicional concentrado en una esfera.",
    relation: "Ganadería local, cocina rural y gofio.",
    story:
      "Parte de la cocina tradicional de carne, pero llevada a un formato pequeño y técnico. La idea es concentrar el sabor profundo del cochino negro en una esfera líquida, como si el jugo de un guiso canario se pudiera comer de un solo bocado.",
    connection:
      "El cochino negro está ligado a la ganadería local y a la cocina rural. El gofio aporta un fondo tostado, familiar e histórico dentro de la alimentación canaria.",
  },
  {
    name: "Cabrito de cumbre en ceniza volcánica",
    idea: "Cabrito meloso con batata y efecto de ceniza comestible.",
    relation: "Cumbres, ganadería caprina y paisaje volcánico.",
    story:
      "Se inspira en la ganadería de las medianías y zonas altas de Canarias. El cabrito se presenta como un lingote meloso y brillante, acompañado de crema de batata y ceniza comestible.",
    connection:
      "La cumbre, la ganadería caprina y la tierra volcánica aparecen en la ceniza negra, que recuerda a la lava y a los suelos oscuros de las islas.",
  },
  {
    name: "Conejo en salmorejo invertido",
    idea: "Deconstrucción del conejo en salmorejo tradicional.",
    relation: "Cocina familiar, campo y sabores populares.",
    story:
      "Nace de uno de los platos más reconocibles de la cocina canaria. En esta versión se separan la carne, el tomate y la salsa para transformar el plato en una propuesta más actual.",
    connection:
      "Conecta con la cocina de casa, los guisos, las reuniones familiares y los sabores de campo, respetando la memoria del conejo en salmorejo.",
  },
  {
    name: "Vaca canaria madurada",
    idea: "Carne marcada, jugo intenso, papa bonita y crujiente.",
    relation: "Ganadería, producto local y aprovechamiento.",
    story:
      "Funciona como plato de cierre dentro de la parte de carnes. Parte del respeto al producto: el corte noble se marca, los huesos y recortes se convierten en jugo, la papa bonita aporta suavidad y la piel se transforma en crujiente.",
    connection:
      "Se relaciona con la ganadería canaria, la producción local y la papa bonita como parte de la agricultura tradicional.",
  },
  {
    name: "Ostra canaria, aire marino y granizado salino",
    idea: "Bocado de mar puro, frío y directo.",
    relation: "Costa limpia, Atlántico, sal y roca.",
    story:
      "Está pensado como un bocado de mar puro. La ostra se mantiene casi intacta para respetar su sabor natural, mientras el granizado de pepino y el aire marino refuerzan la sensación salina.",
    connection:
      "Se relaciona con las costas limpias de Canarias, el mar abierto, el salitre y la frescura del litoral.",
  },
  {
    name: "Ceviche de cherne",
    idea: "Cherne fresco con leche de tigre clarificada y aceite de cilantro.",
    relation: "Pesca local, lonja y cocina costera actual.",
    story:
      "Se inspira en la pesca local y en la frescura de la costa canaria. El cherne se presenta con una leche de tigre clarificada que aporta acidez de forma limpia y elegante.",
    connection:
      "El cherne está muy vinculado a la cocina canaria y aquí se relaciona con la lonja, el mar, el producto de cercanía y una cocina costera más ligera.",
  },
  {
    name: "Vieja sancochada",
    idea: "Versión fina de la vieja con papa negra, caldo limpio y algas.",
    relation: "Sancocho, pescado tradicional y papa canaria.",
    story:
      "Parte de una elaboración sencilla y reconocible: la vieja sancochada. La vieja se cocina de forma controlada para mantenerla jugosa y se acompaña de papa negra, caldo claro y aceite de algas.",
    connection:
      "Conecta con los sancochos, la cocina marinera, las comidas familiares y la unión entre pescado y papa.",
  },
  {
    name: "Sama roquera glaseada",
    idea: "Pescado con fondo reducido y mojo verde refinado.",
    relation: "Pesca de roca y mojo verde canario.",
    story:
      "Toma como base una idea muy canaria: pescado con mojo verde. La sama se presenta glaseada, con fondo reducido de espinas y un mojo verde más fino y controlado.",
    connection:
      "La sama roquera representa la pesca de roca y el mojo verde conecta directamente con la identidad gastronómica canaria.",
  },
  {
    name: "Sorbete de lima",
    idea: "Bocado frío para limpiar el paladar.",
    relation: "Cítricos, sal marina, clima cálido y costa.",
    story:
      "Funciona como un descanso dentro del menú. La lima aporta acidez, la sal marina potencia el frescor y el aceite de oliva da una sensación grasa muy suave.",
    connection:
      "Se relaciona con el clima cálido de Canarias, los cítricos locales y la presencia constante del mar.",
  },
  {
    name: "Cabrilla confitada",
    idea: "Pescado de roca con caldo clarificado de azafrán e hinojo.",
    relation: "Lanzarote, mineralidad, roca y mar.",
    story:
      "Se inspira en los pescados de roca y en una cocina de mar más delicada. La cabrilla se cocina lentamente en aceite y se acompaña de un caldo clarificado de azafrán e hinojo.",
    connection:
      "Se relaciona con Lanzarote y su paisaje mineral, seco y volcánico; la cabrilla representa el mar de roca.",
  },
  {
    name: "Atún rojo a la brasa",
    idea: "Atún marcado tipo tataki con jugo marino y toque graso.",
    relation: "Mar abierto, pesca intensa, fuego y Atlántico.",
    story:
      "Se inspira en la fuerza del mar abierto y en la intensidad del atún rojo. La pieza se marca por fuera y queda roja en el interior, con jugo marino, emulsión grasa y pepino.",
    connection:
      "Se relaciona con el Atlántico más abierto, la pesca de grandes especies, el fuego de la brasa y las algas como vínculo con el océano.",
  },
] as const;

const dessertNarratives = [
  {
    name: "Ceniza dulce de chocolate volcánico",
    story:
      "Este postre nace de la imagen más potente de Canarias: la tierra volcánica. No se plantea como un simple postre de chocolate, sino como una pequeña roca volcánica donde el chocolate aporta intensidad, color oscuro y profundidad.",
    connection:
      "Representa la lava, la ceniza, el humo y el paisaje volcánico de las islas, llevando al plato una parte muy reconocible de Canarias.",
  },
  {
    name: "Bienmesabe aéreo con almendra de Tejeda",
    story:
      "Está inspirado en el bienmesabe, un dulce canario familiar y ligado a la repostería tradicional. La propuesta lo vuelve más ligero mediante una espuma, manteniendo el sabor de la almendra y la miel.",
    connection:
      "Se relaciona con la repostería tradicional canaria, la almendra de Tejeda, los dulces caseros y los sabores de toda la vida.",
  },
  {
    name: "Piña de El Hierro a la brasa",
    story:
      "Parte de un producto sencillo y con identidad: la piña tropical de El Hierro. Al pasarla por la brasa gana un punto tostado y caramelizado, sin perder frescor.",
    connection:
      "Representa la agricultura tropical de las islas, el producto local de El Hierro y la relación entre fruta, fuego y tierra volcánica.",
  },
  {
    name: "La Palma bajo cacao",
    story:
      "Se inspira en una combinación reconocible: plátano canario y chocolate. La esfera líquida de plátano crea una pequeña lava dulce al romperse.",
    connection:
      "Se relaciona con el plátano de Canarias y con el paisaje volcánico de La Palma, uniendo producto local y presentación creativa.",
  },
  {
    name: "Bombón volcánico",
    story:
      "Está pensado como un último bocado con sorpresa: por fuera parece una pequeña roca de chocolate y por dentro guarda un relleno líquido de ron canario.",
    connection:
      "Representa la roca volcánica, el color oscuro de la lava y el ron canario, producto presente en la cultura gastronómica de las islas.",
  },
  {
    name: "Toffee crujiente aireado",
    story:
      "Nace de la idea de terminar el menú con algo dulce, pero no pesado. El toffee clásico se transforma en una pieza crujiente, ligera y equilibrada con sal marina.",
    connection:
      "Se relaciona con el mar, la sal marina y el contraste entre dulce y salado, representando la parte costera del concepto Lava & Salitre.",
  },
] as const;

function Fase2DisenoCartaContenido() {
  return (
    <ProjectPhasePage
      phase="Fase 2"
      title="Diseño de la carta y contenido"
      intro="Esta segunda fase convierte el concepto gastronómico en una oferta concreta y comercializable. La carta se basa en elaboraciones canarias de vanguardia con identidad propia, siempre con nombre creativo, ingredientes principales canarios y una técnica innovadora aplicada."
    >
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:py-16">
          <MenuStructureSection />
          <DessertsAndPlatesSection />
          <NarrativeSection />
          <VisualDesignSection />
          <TechnicalSheetsSection rows={[...plateRows, ...dessertRows]} />
        </div>
      </section>
    </ProjectPhasePage>
  );
}

function MenuStructureSection() {
  return (
    <article className="rounded-md border border-border bg-background/70 p-6 md:p-8">
      <h2 className="font-serif text-2xl text-foreground md:text-3xl">Estructura de la carta</h2>
      <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
        La carta se plantea como un recorrido de menú degustación con identidad canaria. No copia
        platos tradicionales tal cual, sino que parte de productos y sabores reconocibles para
        darles una presentación más actual, limpia y propia de un restaurante gastronómico.
      </p>

      <div className="mt-7 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead className="bg-card/70 text-[10px] uppercase tracking-[0.22em] text-accent">
            <tr>
              <th className="border-r border-border p-3 font-medium">Orden</th>
              <th className="border-r border-border p-3 font-medium">Sección</th>
              <th className="border-r border-border p-3 font-medium">Función en la carta</th>
              <th className="p-3 font-medium">Propuestas</th>
            </tr>
          </thead>
          <tbody>
            {menuStructure.map((section, index) => (
              <tr key={section.title} className="border-t border-border">
                <td className="border-r border-border p-3 font-serif text-xl text-accent">
                  {String(index + 1).padStart(2, "0")}
                </td>
                <td className="border-r border-border p-3 font-serif text-lg text-foreground">
                  {section.title}
                </td>
                <td className="border-r border-border p-3 text-sm leading-relaxed text-muted-foreground">
                  {section.description}
                </td>
                <td className="p-3 text-sm text-muted-foreground">{section.count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground md:text-2xl">
          Esquema visual de la carta
        </h3>
        <div className="mt-5 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-md border border-border bg-card/50 p-5">
            <div className="border-b border-border pb-5 text-center">
              <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Lava & Salitre</p>
              <h4 className="mt-3 font-serif text-3xl text-foreground">La carta</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Cocina canaria de vanguardia · lava · salitre · producto local
              </p>
            </div>
            <div className="grid gap-4 py-5">
              {menuStructure.map((section, index) => (
                <div
                  key={section.title}
                  className="grid grid-cols-[2.5rem_1fr] items-start gap-4 border-b border-border/60 pb-4 last:border-b-0 last:pb-0"
                >
                  <span className="font-serif text-2xl text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-serif text-lg text-foreground">{section.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {section.count} propuestas seleccionadas
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
              Carta física en sala + carta QR con fotografías, origen del producto, alérgenos y
              fichas técnicas.
            </div>
          </div>

          <div className="grid gap-4">
            {visualScheme.map((item, index) => (
              <div key={item.title} className="rounded-md border border-border bg-card/50 p-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-accent">
                  Bloque {index + 1}
                </p>
                <h4 className="mt-2 font-serif text-xl text-foreground">{item.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

function DessertsAndPlatesSection() {
  const dessertCategories = ["Postres de innovación", "Petit four"];

  return (
    <article className="rounded-md border border-border bg-background/70 p-6 md:p-8">
      <h2 className="font-serif text-2xl text-foreground md:text-3xl">Los platos</h2>
      <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
        Los platos canarios de vanguardia combinan elaboraciones frías, bocados de apertura,
        pescados, carnes y un pase refrescante. Las técnicas modernas se usan para mejorar textura,
        concentrar sabor o hacer que la presentación sea más elegante sin perder raíz canaria.
      </p>

      <div className="mt-7">
        <MenuTable title="Platos canarios de vanguardia" rows={plateRows} />
      </div>

      <div className="mt-10 border-t border-border/60 pt-8">
        <h3 className="font-serif text-2xl text-foreground md:text-3xl">Los postres</h3>
        <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
          La propuesta dulce se construye con seis elaboraciones: cuatro postres y dos petit four.
          Todas incluyen un nombre creativo, ingredientes principales canarios y una técnica
          innovadora aplicada.
        </p>
        <div className="mt-7 grid gap-7">
          {dessertCategories.map((category) => (
            <MenuTable
              key={category}
              title={category}
              rows={dessertRows.filter((row) => row.category === category)}
            />
          ))}
        </div>
      </div>
    </article>
  );
}

function NarrativeSection() {
  return (
    <article className="rounded-md border border-border bg-background/70 p-6 md:p-8">
      <h2 className="font-serif text-2xl text-foreground md:text-3xl">Narrativa gastronómica</h2>
      <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
        La narrativa de Lava & Salitre cuenta Canarias a través de sus productos, paisajes y formas
        de cocinar. La lava representa la tierra, la cumbre, la ganadería, el fuego y el origen
        volcánico. El salitre representa el mar, la costa, la pesca y la frescura del Atlántico.
      </p>
      <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
        Cada elaboración mantiene una raíz canaria reconocible, pero se presenta con una mirada más
        actual. No se trata de copiar la receta tradicional tal cual, sino de transformarla en una
        experiencia más limpia, técnica y elegante, propia de un menú degustación.
      </p>

      <div className="mt-7">
        <NarrativeSummaryTable />
      </div>
      <div className="mt-7">
        <NarrativeDetailTable title="Historia de los platos" rows={plateNarratives} />
      </div>
      <div className="mt-7">
        <NarrativeDetailTable
          title="Historia de los postres y petit four"
          rows={dessertNarratives}
        />
      </div>

      <div className="mt-8 border-t border-border/60 pt-6">
        <h3 className="font-serif text-xl text-foreground md:text-2xl">Conclusión</h3>
        <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
          La narrativa busca contar Canarias desde diferentes puntos de vista: el mar, la costa, la
          cumbre, la ganadería, la agricultura, los productos tradicionales y el paisaje volcánico.
          En conjunto, el menú mantiene la identidad de Lava & Salitre: una cocina donde la lava
          representa la tierra, la fuerza y el origen volcánico, mientras que el salitre representa
          el mar, la frescura y la memoria atlántica.
        </p>
      </div>
    </article>
  );
}

function VisualDesignSection() {
  return (
    <article className="rounded-md border border-border bg-background/70 p-6 md:p-8">
      <h2 className="font-serif text-2xl text-foreground md:text-3xl">Diseño visual</h2>
      <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
        El diseño visual se apoya en presentaciones limpias, bocados precisos, contrastes de textura
        y referencias al paisaje: roca volcánica, ceniza, bruma, mar, algas, cítricos y producto de
        temporada.
      </p>
      <div className="mt-7">
        <DetailTable title="Diseño visual de platos" rows={plateRows} field="visual" />
      </div>
      <div className="mt-7">
        <DetailTable
          title="Diseño visual de postres y petit four"
          rows={dessertRows}
          field="visual"
        />
      </div>
    </article>
  );
}

function TechnicalSheetsSection({ rows }: { rows: MenuRow[] }) {
  const [activeDishId, setActiveDishId] = useState<string | null>(null);
  const dishesById = useMemo(() => buildDishesById(), []);
  const activeDish = activeDishId ? dishesById.get(activeDishId) : undefined;

  return (
    <article className="rounded-md border border-border bg-background/70 p-6 md:p-8">
      <h2 className="font-serif text-2xl text-foreground md:text-3xl">Fichas técnicas</h2>
      <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground md:text-base">
        Las fichas técnicas permiten ampliar ingredientes, técnica aplicada, origen, inspiración y
        alérgenos. Cada enlace abre la ficha digital correspondiente.
      </p>

      <div className="mt-7 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead className="bg-card/70 text-[10px] uppercase tracking-[0.22em] text-accent">
            <tr>
              <th className="border-r border-border p-3 font-medium">Elaboración</th>
              <th className="border-r border-border p-3 font-medium">Tipo</th>
              <th className="border-r border-border p-3 font-medium">Técnica</th>
              <th className="p-3 font-medium">Ficha</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.dishId} className="border-t border-border">
                <td className="border-r border-border p-3 font-serif text-lg text-foreground">
                  {row.name}
                </td>
                <td className="border-r border-border p-3 text-sm text-muted-foreground">
                  {row.type}
                </td>
                <td className="border-r border-border p-3 text-sm leading-relaxed text-muted-foreground">
                  {row.technique}
                </td>
                <td className="p-3 text-sm">
                  <button
                    type="button"
                    onClick={() => setActiveDishId(row.dishId)}
                    className="font-medium text-accent underline underline-offset-4 transition hover:text-foreground"
                  >
                    Ver ficha técnica
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {activeDish ? (
        <DishModal
          dish={activeDish}
          open={Boolean(activeDishId)}
          onOpenChange={(open) => !open && setActiveDishId(null)}
        />
      ) : null}
    </article>
  );
}

function buildDishesById() {
  const dishesById = new Map<string, Dish>();

  allDishes.forEach((dish) => {
    dishesById.set(dish.id, dish);
  });

  Object.values(technicalSheets).forEach((sheet) => {
    if (dishesById.has(sheet.id)) return;

    const description = sheet.plate.find((row) => row.label === "Descripción del plato")?.value ?? "";
    const technique =
      sheet.plate.find((row) => row.label === "Técnica culinaria aplicada")?.value ?? "";
    const inspiration =
      sheet.plate.find((row) => row.label === "Inspiración o historia")?.value ?? "";
    const origin =
      sheet.ingredient.find((row) => row.label === "Isla o zona de producción")?.value ?? "";

    dishesById.set(sheet.id, {
      id: sheet.id,
      name: sheet.name,
      description,
      longDescription: description,
      ingredients: sheet.ingredients.slice(0, 4).map((row) => row.label),
      technique,
      origin,
      inspiration,
      allergens: [],
      price: 0,
      technicalSheetId: sheet.id,
    });
  });

  return dishesById;
}

function MenuTable({ title, rows }: { title: string; rows: MenuRow[] }) {
  return (
    <section>
      <h3 className="font-serif text-xl text-foreground md:text-2xl">{title}</h3>
      <div className="mt-4 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[900px] border-collapse text-left">
          <thead className="bg-card/70 text-[10px] uppercase tracking-[0.22em] text-accent">
            <tr>
              <th className="border-r border-border p-3 font-medium">Nombre creativo</th>
              <th className="border-r border-border p-3 font-medium">
                Ingredientes principales canarios
              </th>
              <th className="p-3 font-medium">Técnica innovadora aplicada</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.dishId} className="border-t border-border">
                <td className="border-r border-border p-3 font-serif text-lg text-foreground">
                  {row.name}
                </td>
                <td className="border-r border-border p-3 text-sm leading-relaxed text-muted-foreground">
                  {row.ingredients}
                </td>
                <td className="p-3 text-sm leading-relaxed text-muted-foreground">
                  {row.technique}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function DetailTable({
  title,
  rows,
  field,
}: {
  title: string;
  rows: MenuRow[];
  field: "narrative" | "visual";
}) {
  return (
    <section>
      <h3 className="font-serif text-xl text-foreground md:text-2xl">{title}</h3>
      <div className="mt-4 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[760px] border-collapse text-left">
          <thead className="bg-card/70 text-[10px] uppercase tracking-[0.22em] text-accent">
            <tr>
              <th className="border-r border-border p-3 font-medium">Elaboración</th>
              <th className="p-3 font-medium">
                {field === "narrative" ? "Relato" : "Presentación"}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.dishId} className="border-t border-border">
                <td className="border-r border-border p-3 font-serif text-lg text-foreground">
                  {row.name}
                </td>
                <td className="p-3 text-sm leading-relaxed text-muted-foreground">{row[field]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function NarrativeSummaryTable() {
  return (
    <section>
      <h3 className="font-serif text-xl text-foreground md:text-2xl">
        Resumen narrativo de los platos
      </h3>
      <div className="mt-4 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead className="bg-card/70 text-[10px] uppercase tracking-[0.22em] text-accent">
            <tr>
              <th className="border-r border-border p-3 font-medium">Nº</th>
              <th className="border-r border-border p-3 font-medium">Plato</th>
              <th className="border-r border-border p-3 font-medium">Idea principal</th>
              <th className="p-3 font-medium">Relación con Canarias</th>
            </tr>
          </thead>
          <tbody>
            {plateNarratives.map((row, index) => (
              <tr key={row.name} className="border-t border-border">
                <td className="border-r border-border p-3 font-serif text-lg text-accent">
                  {index + 1}
                </td>
                <td className="border-r border-border p-3 font-serif text-lg text-foreground">
                  {row.name}
                </td>
                <td className="border-r border-border p-3 text-sm leading-relaxed text-muted-foreground">
                  {row.idea}
                </td>
                <td className="p-3 text-sm leading-relaxed text-muted-foreground">
                  {row.relation}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function NarrativeDetailTable({
  title,
  rows,
}: {
  title: string;
  rows: readonly { name: string; story: string; connection: string }[];
}) {
  return (
    <section>
      <h3 className="font-serif text-xl text-foreground md:text-2xl">{title}</h3>
      <div className="mt-4 overflow-x-auto rounded-md border border-border">
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead className="bg-card/70 text-[10px] uppercase tracking-[0.22em] text-accent">
            <tr>
              <th className="border-r border-border p-3 font-medium">Elaboración</th>
              <th className="border-r border-border p-3 font-medium">Historia o inspiración</th>
              <th className="p-3 font-medium">Relación con Canarias</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name} className="border-t border-border">
                <td className="border-r border-border p-3 font-serif text-lg text-foreground">
                  {row.name}
                </td>
                <td className="border-r border-border p-3 text-sm leading-relaxed text-muted-foreground">
                  {row.story}
                </td>
                <td className="p-3 text-sm leading-relaxed text-muted-foreground">
                  {row.connection}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
