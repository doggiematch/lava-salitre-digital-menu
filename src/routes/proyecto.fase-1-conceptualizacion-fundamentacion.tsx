import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarCheck,
  CircleHelp,
  Compass,
  Heart,
  MapPin,
  MessageCircle,
  QrCode,
  Sparkles,
  TabletSmartphone,
  Target,
  UserRound,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { ProjectPhasePage } from "@/components/site/ProjectPhasePage";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projectReportPhases } from "@/data/projectReport";

export const Route = createFileRoute("/proyecto/fase-1-conceptualizacion-fundamentacion")({
  component: Fase1ConceptualizacionFundamentacion,
  head: () => ({
    meta: [{ title: "Fase 1 - Lava & Salitre" }],
  }),
});

const PROJECT_WEB_URL =
  "https://lava-salitre-digital-menu-el3mqseme-doggiematchs-projects.vercel.app/";

const phaseSections: readonly { title: string; text: string }[] = [];
const phaseReport = projectReportPhases[0];

const traditionalDesserts = [
  {
    name: "Bienmesabe",
    description: "Dulce de almendra intenso, muy representativo de la memoria repostera canaria.",
  },
  {
    name: "Príncipe Alberto",
    description:
      "Postre palmero con chocolate, bizcocho y frutos secos, de carácter profundo y reconocible.",
  },
  {
    name: "Quesillo",
    description:
      "Flan cremoso y popular, ligado a una repostería cercana, doméstica y ampliamente conocida.",
  },
  {
    name: "Frangollo",
    description:
      "Elaboración de millo con leche, pasas, almendra y canela, con una identidad muy local.",
  },
  {
    name: "Leche asada",
    description: "Postre suave y tostado que conecta con una cocina sencilla, cálida y familiar.",
  },
  {
    name: "Truchas de batata",
    description:
      "Masa rellena de batata, especialmente vinculada a celebraciones y fechas festivas.",
  },
] as const;

const avantGardeResources = [
  "Deconstrucciones que conservan el sabor principal y reorganizan la experiencia en el plato.",
  "Espumas y aires para aligerar elaboraciones tradicionales sin borrar su identidad.",
  "Gelificaciones que permiten presentar frutas, caldos o cremas con mayor precisión visual.",
  "Crujientes y tierras para aportar contraste, lectura de paisaje y sensación volcánica.",
  "Trabajo de temperaturas para combinar bocados fríos, templados y cálidos dentro del mismo recorrido.",
  "Presentaciones minimalistas que ayudan a que el producto y la idea del plato sean claros.",
] as const;

const reinterpretationExamples = [
  {
    title: "Bienmesabe en texturas",
    description:
      "Reinterpretación del postre tradicional canario bienmesabe, presentando sus sabores clásicos en diferentes texturas y temperaturas.",
    components:
      "Gel de limón, crema ligera de almendra, helado de almendra y crujiente de almendra.",
    image: "/proyecto/fase-1/bienmesabe-texturas.jpg",
  },
  {
    title: "Príncipe Alberto volcánico",
    description:
      "Reinterpretación del postre tradicional palmero Príncipe Alberto, con un guiño volcánico que aporta ligereza, textura y elegancia contemporánea.",
    components:
      "Bizcocho aireado de chocolate, tierra de cacao, crujiente de cacao, mousse de chocolate y almendra tostada.",
    image: "/proyecto/fase-1/principe-alberto-volcanico.jpg",
  },
  {
    title: "Quesillo líquido con caramelo salino",
    description:
      "Reinterpreta la esencia del quesillo tradicional canario, respetando su sabor inconfundible con texturas más ligeras y una presentación contemporánea.",
    components: "Crema de quesillo, crujiente de azúcar, espuma de leche y caramelo salino.",
    image: "/proyecto/fase-1/quesillo-liquido-caramelo-salino.jpg",
  },
  {
    title: "Frangollo cremoso con aire de canela",
    description:
      "Mantiene el sabor tradicional del frangollo, pero lo presenta de forma más delicada, visual y contemporánea.",
    components:
      "Crema de frangollo, almendra tostada, aire de canela, pasas al ron y crujiente de gofio tostado.",
    image: "/proyecto/fase-1/frangollo-cremoso-aire-canela.jpg",
  },
  {
    title: "Trucha de batata deconstruida",
    description:
      "Una reinterpretación que mantiene el sabor familiar de la trucha de batata clásica, transformándola en un postre más limpio, elegante y actual.",
    components: "Crujiente de masa, gel cítrico, crema de batata y almendra tostada.",
    image: "/proyecto/fase-1/trucha-batata-deconstruida.jpg",
  },
] as const;

const km0Ingredients = [
  {
    ingredient: "Almendra",
    island: "Gran Canaria",
    source: "Productores locales de Tejeda",
    origin: "Tejeda, cumbre de Gran Canaria",
  },
  {
    ingredient: "Cacao / chocolate",
    island: "La Palma",
    source: "Obradores artesanales palmeros",
    origin: "La Palma",
  },
  {
    ingredient: "Leche de cabra",
    island: "Fuerteventura",
    source: "Ganaderías majoreras",
    origin: "Zonas ganaderas de Fuerteventura",
  },
  {
    ingredient: "Lima",
    island: "Tenerife",
    source: "Productores de frutas subtropicales / mercados agrícolas",
    origin: "Norte de Tenerife",
  },
  {
    ingredient: "Limón",
    island: "Tenerife",
    source: "Mercados agrícolas y fincas locales",
    origin: "Tacoronte y norte de Tenerife",
  },
  {
    ingredient: "Miel de palma",
    island: "La Gomera",
    source: "Productores de Alojera / Vallehermoso",
    origin: "Alojera, Vallehermoso",
  },
  {
    ingredient: "Naranja",
    island: "Tenerife",
    source: "Mercadillo del Agricultor de Tacoronte / fincas locales",
    origin: "Tacoronte y norte de Tenerife",
  },
  {
    ingredient: "Piña tropical",
    island: "El Hierro",
    source: "Cooperativa del Campo de Frontera",
    origin: "Valle de El Golfo, La Frontera",
  },
  {
    ingredient: "Plátano",
    island: "Tenerife",
    source: "Cooperativas y empaquetados plataneros",
    origin: "Norte y sur de Tenerife",
  },
  {
    ingredient: "Ron",
    island: "Gran Canaria",
    source: "Destilerías Arehucas",
    origin: "Arucas, norte de Gran Canaria",
  },
  {
    ingredient: "Huevos",
    island: "Gran Canaria",
    source: "Granjas avícolas locales / Mercado Agrícola de San Mateo",
    origin: "Medianías de Gran Canaria",
  },
  {
    ingredient: "Azúcar",
    island: "Gran Canaria",
    source: "Proveedores locales de repostería / obradores artesanales",
    origin: "Gran Canaria, tradición repostera y azucarera",
  },
  {
    ingredient: "Vainilla",
    island: "La Palma",
    source: "Productores de cultivos subtropicales / mercados locales",
    origin: "Zonas cálidas y húmedas de La Palma",
  },
  {
    ingredient: "Mango",
    island: "Gran Canaria",
    source: "Fincas subtropicales / mercados agrícolas locales",
    origin: "Mogán, La Aldea y sur de Gran Canaria",
  },
  {
    ingredient: "Papaya",
    island: "Tenerife",
    source: "Productores de frutas tropicales / cooperativas agrícolas",
    origin: "Güímar, Arona y zonas cálidas de Tenerife",
  },
  {
    ingredient: "Tuno indio",
    island: "Lanzarote",
    source: "Productores locales de tunera / mercados agrícolas",
    origin: "Teguise, Tinajo y zonas de secano de Lanzarote",
  },
  {
    ingredient: "Gofio",
    island: "Tenerife",
    source: "Molinos de gofio tradicionales",
    origin: "La Orotava, Los Realejos y zonas cerealistas",
  },
  {
    ingredient: "Queso palmero",
    island: "La Palma",
    source: "Queserías artesanales palmeras",
    origin: "Garafía, Puntagorda y zonas ganaderas de La Palma",
  },
  {
    ingredient: "Batata",
    island: "Lanzarote",
    source: "Agricultores locales / mercados agrícolas",
    origin: "Jable de Lanzarote y zonas de cultivo de Teguise",
  },
  {
    ingredient: "Aguacate",
    island: "Tenerife",
    source: "Fincas subtropicales / mercados agrícolas",
    origin: "La Orotava, Los Realejos y norte de Tenerife",
  },
] as const;

const dessertIngredientSelection = [
  {
    ingredient: "Chocolate negro",
    recipe: "Ceniza dulce de chocolate volcánico / Bombón volcánico",
    reason:
      "Base intensa y oscura para representar la parte volcánica del concepto. Funciona en ganaches, rocas, bombones o texturas cremosas.",
  },
  {
    ingredient: "Cacao",
    recipe: "Ceniza dulce / La Palma bajo cacao / Bombón volcánico",
    reason:
      "Aporta color, amargor y sensación de tierra volcánica. Se puede usar en polvo, tierra crujiente, aire o acabado exterior.",
  },
  {
    ingredient: "Leche de cabra",
    recipe: "Ceniza dulce de chocolate volcánico",
    reason:
      "Conecta con el producto local y permite crear un aire ahumado ligero, ideal para dar aroma sin cargar el postre.",
  },
  {
    ingredient: "Almendra de Tejeda",
    recipe: "Bienmesabe aéreo con almendra de Tejeda",
    reason:
      "Ingrediente clave de la repostería canaria. Sirve para espumas, cremas, crujientes y versiones modernas del bienmesabe.",
  },
  {
    ingredient: "Miel de palma",
    recipe: "Bienmesabe aéreo con almendra de Tejeda",
    reason:
      "Aporta dulzor profundo y carácter canario. Puede utilizarse como base, salsa, caramelo o glaseado fino.",
  },
  {
    ingredient: "Piña de El Hierro",
    recipe: "Piña de El Hierro a la brasa",
    reason:
      "Ingrediente fresco y tropical, con buen equilibrio entre dulzor y acidez. A la brasa gana un toque tostado muy interesante.",
  },
  {
    ingredient: "Vainilla",
    recipe: "Piña de El Hierro a la brasa",
    reason:
      "Acompaña bien a frutas tropicales y suaviza el conjunto. Funciona en quenelles, cremas, espumas o helados.",
  },
  {
    ingredient: "Plátano canario",
    recipe: "La Palma bajo cacao",
    reason:
      "Producto muy reconocible de las islas. En la ficha se trabaja como esfera líquida, creando un efecto de lava dulce.",
  },
  {
    ingredient: "Ron canario",
    recipe: "Bombón volcánico",
    reason:
      "Aporta un punto aromático y adulto al petit four. El relleno líquido crea sorpresa al morder.",
  },
  {
    ingredient: "Sal marina",
    recipe: "Toffee crujiente aireado",
    reason:
      "Equilibra el dulzor del caramelo y conecta con la parte Salitre del restaurante. Refuerza el contraste dulce-salado.",
  },
] as const;

const islandConceptProducts = [
  {
    island: "Gran Canaria",
    products: "Cherne, cilantro, cítricos y almendra de Tejeda.",
    dishes: "Ceviche de cherne y bienmesabe aéreo.",
  },
  {
    island: "Tenerife",
    products: "Vieja canaria, papa negra y algas.",
    dishes: "Vieja sancochada.",
  },
  {
    island: "La Gomera",
    products: "Miel de palma, mojo verde y cilantro.",
    dishes: "Bruma de Agaete y cherne glaseado.",
  },
  {
    island: "La Palma",
    products: "Plátano canario y cacao/chocolate.",
    dishes: "La Palma bajo cacao.",
  },
  {
    island: "El Hierro",
    products: "Piña tropical y pepino.",
    dishes: "Piña de El Hierro a la brasa y ostra canaria.",
  },
  {
    island: "Lanzarote",
    products: "Cabrilla, hinojo y sal marina.",
    dishes: "Cabrilla confitada.",
  },
  {
    island: "Fuerteventura",
    products: "Leche de cabra, cabrito y atún rojo.",
    dishes: "Cabrito de cumbre, atún rojo y ceniza dulce.",
  },
  {
    island: "La Graciosa",
    products: "Agua de mar, sal marina y pescado fresco.",
    dishes: "Perla Atlántica y sorbete de lima.",
  },
] as const;

const logoVersions = [
  {
    src: "/galeria/logo-version-dorada-negro.png",
    alt: "Logotipo dorado de Lava & Salitre sobre fondo negro",
    title: "Versión principal",
    description:
      "Dorada sobre fondo oscuro, pensada para soportes elegantes, presencia digital y piezas de mayor impacto.",
    frameClassName: "bg-stone-950",
  },
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo dorado de Lava & Salitre con fondo transparente",
    title: "Versión dorada adaptable",
    description:
      "Útil para aplicaciones sobre fotografía, materiales corporativos y fondos neutros donde el oro mantiene protagonismo.",
    frameClassName: "bg-stone-950",
  },
  {
    src: "/galeria/logo-version-blanca-negro.png",
    alt: "Logotipo blanco de Lava & Salitre sobre fondo negro",
    title: "Versión blanca",
    description:
      "Funciona en fondos oscuros cuando se busca máxima limpieza, contraste y lectura inmediata.",
    frameClassName: "bg-stone-950",
  },
  {
    src: "/galeria/logo-version-dorada-blanco.png",
    alt: "Logotipo dorado y negro de Lava & Salitre sobre fondo blanco",
    title: "Versión clara premium",
    description:
      "Adecuada para papelería, cartas, presentaciones y soportes impresos con fondo claro.",
    frameClassName: "bg-card",
  },
  {
    src: "/galeria/logo-version-negra-blanco.png",
    alt: "Logotipo negro de Lava & Salitre sobre fondo blanco",
    title: "Versión monocroma",
    description:
      "Pensada para usos sobrios, documentación, sellos, grabados o aplicaciones donde el color no sea posible.",
    frameClassName: "bg-card",
  },
  {
    src: "/galeria/logo-version-claim-centrado.png",
    alt: "Logotipo de Lava & Salitre con claim Tierra y Mar centrado",
    title: "Versión con claim centrado",
    description:
      "Refuerza el mensaje Tierra y Mar en piezas donde la identidad conceptual debe quedar especialmente clara.",
    frameClassName: "bg-card",
  },
] as const;

const audienceSegments = [
  {
    title: "Segmentación demográfica",
    icon: UsersRound,
    text: "Lava y Salitre se dirige principalmente a personas adultas, entre 30 y 60 años, con mayor peso entre los 35 y 55 años. Es un cliente con una situación económica más estable, dispuesto a pagar por una experiencia gastronómica cuidada, con menú degustación, producto de calidad, opción de maridaje y servicio personalizado.",
  },
  {
    title: "Segmentación geográfica",
    icon: MapPin,
    text: "El público principal vendría de Gran Canaria, especialmente de personas que quieran desplazarse hasta Agaete para una comida o cena especial. También se contempla a clientes de Tenerife por la conexión marítima con el Puerto de las Nieves, además de turistas nacionales y extranjeros interesados en una cocina canaria actual vinculada al mar, la tierra y el paisaje volcánico.",
  },
  {
    title: "Segmentación psicográfica",
    icon: Heart,
    text: "El cliente valora la gastronomía como una experiencia, no solo como una comida. Le interesa el origen del producto, la historia de cada plato y la relación del menú con Canarias. Busca restaurantes con personalidad, identidad propia, presentación cuidada, sostenibilidad y respeto por el entorno.",
  },
  {
    title: "Segmentación conductual",
    icon: CalendarCheck,
    text: "Lava y Salitre no sería un restaurante de consumo diario. El cliente acudiría en momentos concretos como celebraciones, escapadas, aniversarios, comidas especiales o cenas diferentes. Antes de reservar consultaría opiniones, fotos, redes sociales, recomendaciones y la posibilidad de elegir menú con o sin maridaje.",
  },
  {
    title: "Segmentación por necesidades",
    icon: Target,
    text: "La necesidad principal no es comer rápido ni barato, sino vivir una experiencia especial y bien cuidada. El cliente quiere producto canario de calidad, atención cercana, una cocina conectada con Canarias y una presentación moderna y creativa.",
  },
] as const;

const audienceValues = [
  "Cocina de autor",
  "Experiencias tranquilas",
  "Kilómetro cero",
  "Producto local",
  "Restaurantes con identidad propia",
  "Sostenibilidad y respeto por el entorno",
  "Vinos canarios",
] as const;

const audienceNeeds = [
  "Conocer una cocina canaria más actual.",
  "Disfrutar de una comida o cena especial.",
  "Probar producto canario bien trabajado.",
  "Sentirse cómodo en un ambiente elegante pero cercano.",
  "Tener la opción de acompañar el menú con vinos canarios.",
  "Vivir una experiencia gastronómica tranquila.",
] as const;

const personaDetails = [
  { label: "Nombre ficticio", value: "Marta Suárez" },
  { label: "Edad", value: "42 años" },
  { label: "Residencia", value: "Las Palmas de Gran Canaria" },
  { label: "Profesión", value: "Responsable comercial" },
  { label: "Nivel económico", value: "Medio-alto" },
  {
    label: "Situación personal",
    value: "Tiene pareja, vida social activa y suele buscar planes especiales los fines de semana.",
  },
] as const;

const culinaryTechnologies = [
  {
    title: "Esferificación",
    description:
      "Permite convertir un líquido en pequeñas esferas con una capa fina exterior y un interior líquido que explota en boca.",
    use: "En Lava y Salitre puede utilizarse para esferas de mojo rojo, mojo verde, caldo de pescado o jugo de tuno indio, presentando sabores canarios de forma moderna y sorprendente.",
  },
  {
    title: "Nitrógeno líquido",
    description:
      "Congela alimentos de forma muy rápida y permite crear helados al momento, efectos de frío o pequeños contrastes visuales.",
    use: "Se reservaría para momentos concretos, sobre todo postres o pequeños bocados, como un helado rápido de plátano canario o un toque frío en un prepostre.",
  },
  {
    title: "Deconstrucción",
    description:
      "Parte de un plato tradicional, separa sus elementos y los presenta de otra manera manteniendo el sabor original.",
    use: "Encaja con la unión entre tradición e innovación: unas papas arrugadas con mojo podrían convertirse en crema de papa, esfera de mojo y sal cristalizada.",
  },
  {
    title: "Espumas",
    description:
      "Transforman cremas, salsas o líquidos en texturas ligeras y aireadas, normalmente mediante sifón.",
    use: "Pueden aplicarse a gofio, queso canario, marisco o mojo suave para aportar sabor, ligereza y una presentación más cuidada.",
  },
  {
    title: "Gelificaciones",
    description:
      "Convierten líquidos en geles usando agar-agar, gelatina o pectina, aportando forma, color y textura.",
    use: "Se usarían geles de lima, maracuyá, vino malvasía o caldo marino para dar frescor y equilibrar pescados, mariscos o postres.",
  },
] as const;

const digitalTechnologies = [
  {
    title: "Carta con código QR",
    icon: QrCode,
    description:
      "Permite consultar la carta desde el móvil y actualizar platos, precios o productos de temporada con facilidad.",
    use: "Puede incluir alérgenos, fotos, explicaciones de platos, origen de productos y recomendaciones de maridaje, manteniendo también una carta física para quien la prefiera.",
  },
  {
    title: "Menús interactivos",
    icon: TabletSmartphone,
    description:
      "Amplían la información sobre cada plato: ingredientes principales, isla de origen, técnica utilizada o vino recomendado.",
    use: "Ayudan a que el cliente entienda mejor una propuesta basada en producto canario y platos elaborados.",
  },
  {
    title: "Realidad aumentada",
    icon: Sparkles,
    description:
      "Añade elementos digitales sobre el entorno real a través del móvil, como visualizaciones del plato o del origen del producto.",
    use: "Se aplicaría solo en platos especiales o momentos concretos del menú degustación para aportar innovación sin restar protagonismo a la comida.",
  },
] as const;

const selectedTechnologyUses = [
  {
    technology: "Carta física",
    where: "Servicio en sala",
    reason: "Mantiene comodidad y elegancia.",
  },
  {
    technology: "Deconstrucción",
    where: "Platos canarios reinterpretados",
    reason: "Une tradición e innovación.",
  },
  {
    technology: "Esferificación",
    where: "Mojos, caldos y jugos",
    reason: "Da un toque moderno y sorprendente.",
  },
  {
    technology: "Espumas",
    where: "Entrantes, salsas y postres",
    reason: "Aporta ligereza.",
  },
  {
    technology: "Gelificaciones",
    where: "Puntos cítricos, frutales o marinos",
    reason: "Controla sabores y mejora la presentación.",
  },
  {
    technology: "Menú interactivo",
    where: "Explicación de la propuesta gastronómica",
    reason: "Ayuda a conocer el origen de cada ingrediente.",
  },
  {
    technology: "Nitrógeno líquido",
    where: "Postres o bocados concretos",
    reason: "Crea contraste de frío y efecto visual.",
  },
  {
    technology: "QR interactivo",
    where: "Carta digital",
    reason: "Facilita alérgenos, origen y maridajes.",
  },
  {
    technology: "Realidad aumentada",
    where: "Platos especiales",
    reason: "Aporta originalidad como complemento puntual.",
  },
] as const;

const personaInsightCards = [
  {
    title: "¿Quién es?",
    icon: UserRound,
    text: "Marta es una persona adulta, curiosa y con interés por la gastronomía. Le gusta descubrir restaurantes diferentes, sobre todo aquellos que trabajan con producto local y ofrecen una experiencia cuidada. No busca platos enormes ni una carta muy larga: prefiere un menú pensado, con varios pases, buena presentación y una historia detrás.",
  },
  {
    title: "Intereses",
    icon: Heart,
    text: "Le interesan la cocina canaria actual, los vinos de las islas, los restaurantes con encanto y los planes tranquilos. Valora el producto local y le gusta conocer el origen de lo que come.",
  },
  {
    title: "Necesidades",
    icon: Target,
    text: "Necesita encontrar un restaurante especial, cuidado y con personalidad. Quiere sentirse bien atendida, comer bien y vivir una experiencia que merezca la pena, con elegancia y cercanía.",
  },
  {
    title: "Motivaciones",
    icon: Compass,
    text: "Elegiría Lava y Salitre por la unión entre mar, tierra y paisaje de Agaete, por una cocina canaria diferente, productos de cercanía, técnicas actuales y vinos canarios.",
  },
] as const;

const reservationInfoCards = [
  {
    title: "Posibles dudas",
    icon: CircleHelp,
    text: "Podría preguntarse si el precio será adecuado, si el menú degustación será suficiente, si los platos serán demasiado modernos, si el restaurante se adapta a intolerancias o si la experiencia merece la pena frente a otros restaurantes de la isla.",
  },
  {
    title: "Canales",
    icon: MessageCircle,
    text: "Buscaría información en Instagram, Google Maps, la web del restaurante, opiniones de otros clientes, recomendaciones de amigos, guías gastronómicas y publicaciones sobre restaurantes canarios.",
  },
] as const;

function CardTitle({ icon: Icon, title }: { icon: LucideIcon; title: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="grid size-10 shrink-0 place-items-center rounded-md border border-accent/30 bg-accent/10 text-accent">
        <Icon aria-hidden="true" className="size-5" strokeWidth={1.8} />
      </span>
      <h4 className="pt-1 font-serif text-xl text-foreground">{title}</h4>
    </div>
  );
}

function ProjectWebText({ text }: { text: string }) {
  const parts = text.split(/(\bla web\b|\bweb\b)/i);

  return (
    <>
      {parts.map((part, index) =>
        /^la web$|^web$/i.test(part) ? (
          <a
            key={`${part}-${index}`}
            href={PROJECT_WEB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline underline-offset-4 transition-colors hover:text-accent"
          >
            {part}
          </a>
        ) : (
          part
        ),
      )}
    </>
  );
}

function Fase1ConceptualizacionFundamentacion() {
  return (
    <ProjectPhasePage phase={phaseReport.phase} title={phaseReport.title} intro={phaseReport.intro}>
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 lg:py-16">
          <GastronomicContextSection />
          <Km0IngredientsSection />
          <GastronomicConceptSection />
          <TargetAudienceSection />
          <GastronomicTechnologiesSection />
          {phaseSections.map((section) => (
            <article
              key={section.title}
              className="rounded-md border border-border bg-background/70 p-6 lg:p-8"
            >
              <h2 className="font-serif text-2xl text-foreground lg:text-3xl">{section.title}</h2>
              <p className="mt-4 max-w-4xl text-sm leading-[1.8] text-muted-foreground lg:text-base">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </ProjectPhasePage>
  );
}

function GastronomicContextSection() {
  const [selectedExample, setSelectedExample] = useState<
    (typeof reinterpretationExamples)[number] | null
  >(null);

  return (
    <article className="rounded-md border border-border bg-background/70 p-6 lg:p-8">
      <h2 className="mt-3 font-serif text-2xl text-foreground lg:text-3xl">
        Contexto gastronómico canario
      </h2>

      <div className="mt-5 space-y-5">
        <Text>
          La repostería canaria forma parte de la memoria gastronómica de las islas. Sus postres se
          apoyan en ingredientes sencillos, sabores reconocibles y elaboraciones ligadas al hogar, a
          la celebración y al producto local. Para Lava & Salitre, este contexto permite construir
          una cocina moderna sin perder una raíz comprensible para el cliente.
        </Text>
        <Text>
          La propuesta no busca sustituir la cocina tradicional, sino darle una lectura más actual.
          El objetivo es que cada pase mantenga una conexión con Canarias, ya sea por el
          ingrediente, por la técnica reinterpretada o por la memoria del sabor que el cliente
          reconoce en una forma nueva.
        </Text>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Postres tradicionales como punto de partida
        </h3>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {traditionalDesserts.map((dessert) => (
            <div key={dessert.name} className="border-l border-accent/40 pl-4">
              <h4 className="font-serif text-lg text-foreground">{dessert.name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {dessert.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Reinterpretación con cocina de vanguardia
        </h3>
        <Text className="mt-4">
          Reinterpretar un plato o un postre no significa cambiarlo por completo. La clave está en
          mantener su sabor principal y presentarlo de una forma más actual, con más ligereza, mejor
          lectura visual y mayor contraste de texturas.
        </Text>
        <ul className="mt-5 grid gap-3 lg:grid-cols-2">
          {avantGardeResources.map((resource) => (
            <li
              key={resource}
              className="rounded-md border border-border bg-card/50 p-4 text-sm leading-relaxed text-muted-foreground"
            >
              {resource}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Líneas creativas de postres canarios
        </h3>
        <p className="mt-3 text-sm leading-[1.8] text-muted-foreground lg:text-base">
          Estos bocetos muestran cómo un sabor tradicional puede transformarse en un pase más
          técnico, visual y adaptado a un menú degustación. Cada enlace abre la imagen en modal para
          verla ampliada.
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {reinterpretationExamples.map((example, index) => (
            <div key={example.title} className="rounded-md border border-border bg-card/50 p-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-accent">
                Propuesta {index + 1}
              </p>
              <h4 className="mt-2 font-serif text-xl text-foreground">{example.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {example.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground">Componentes:</span> {example.components}
              </p>
              <button
                type="button"
                onClick={() => setSelectedExample(example)}
                className="mt-4 text-sm font-medium text-accent underline underline-offset-4 transition hover:text-foreground"
              >
                Abrir imagen del boceto
              </button>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={Boolean(selectedExample)}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedExample(null);
          }
        }}
      >
        <DialogContent className="max-h-[92vh] max-w-[94vw] overflow-y-auto p-0 lg:max-w-4xl">
          {selectedExample && (
            <>
              <DialogHeader className="sr-only">
                <DialogTitle>{selectedExample.title}</DialogTitle>
              </DialogHeader>
              <img
                src={selectedExample.image}
                alt={selectedExample.title}
                className="max-h-[88vh] w-full bg-background object-contain"
              />
            </>
          )}
        </DialogContent>
      </Dialog>
    </article>
  );
}

function Km0IngredientsSection() {
  return (
    <article className="rounded-md border border-border bg-background/70 p-6 lg:p-8">
      <h2 className="mt-3 font-serif text-2xl text-foreground lg:text-3xl">Ingredientes km 0</h2>

      <div className="mt-5 space-y-5">
        <Text>
          La investigación de ingredientes km 0 define una despensa canaria amplia para Lava &
          Salitre, ordenada por isla, productor o procedencia y zona agrícola u origen. Esta base
          permite construir una carta con trazabilidad, identidad local y coherencia con el relato
          de tierra volcánica y Atlántico.
        </Text>
        <Text>
          Las procedencias se plantean como propuesta de abastecimiento para el proyecto. En
          productos elaborados o de apoyo, como azúcar, vainilla, chocolate o gofio, se vinculan a
          mercados, productores, obradores o zonas de producción locales.
        </Text>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Listado de 20 ingredientes producidos en Canarias
        </h3>
        <div className="mt-5 overflow-hidden rounded-md border border-border">
          <div className="grid grid-cols-[3rem_1fr] bg-card/70 text-[10px] uppercase tracking-[0.22em] text-accent lg:grid-cols-[3rem_1fr_0.8fr_1.35fr_1.25fr]">
            <div className="border-r border-border p-3">Nº</div>
            <div className="border-r border-border p-3">Ingrediente</div>
            <div className="hidden border-r border-border p-3 lg:block">Isla</div>
            <div className="hidden border-r border-border p-3 lg:block">
              Productor / procedencia
            </div>
            <div className="hidden p-3 lg:block">Zona agrícola u origen</div>
          </div>
          {km0Ingredients.map((item, index) => (
            <div
              key={item.ingredient}
              className="grid grid-cols-[3rem_1fr] border-t border-border bg-background lg:grid-cols-[3rem_1fr_0.8fr_1.35fr_1.25fr]"
            >
              <div className="border-r border-border p-3 text-sm text-muted-foreground">
                {index + 1}
              </div>
              <div className="border-r border-border p-3">
                <p className="font-serif text-lg text-foreground">{item.ingredient}</p>
                <div className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground lg:hidden">
                  <p>{item.island}</p>
                  <p>{item.source}</p>
                  <p>{item.origin}</p>
                </div>
              </div>
              <div className="hidden border-r border-border p-3 text-sm leading-relaxed text-muted-foreground lg:block">
                {item.island}
              </div>
              <div className="hidden border-r border-border p-3 text-sm leading-relaxed text-muted-foreground lg:block">
                {item.source}
              </div>
              <div className="hidden p-3 text-sm leading-relaxed text-muted-foreground lg:block">
                {item.origin}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <p className="text-[10px] uppercase tracking-[0.28em] text-accent">
          Lava y Salitre - Carta de postres
        </p>
        <h3 className="mt-3 font-serif text-xl text-foreground lg:text-2xl">
          Selección de 10 ingredientes principales
        </h3>
        <Text className="mt-4">
          Para la carta de postres de Lava y Salitre se seleccionan ingredientes que aparecen
          directamente en las fichas de postres y petit fours trabajadas. La elección se basa en
          productos con identidad canaria, sabor reconocible y capacidad para trabajarse con
          técnicas actuales dentro de los menús Lava, Salitre y Lava y Salitre.
        </Text>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {dessertIngredientSelection.map((item, index) => (
            <div key={item.ingredient} className="rounded-md border border-border bg-card/50 p-5">
              <p className="text-[10px] uppercase tracking-[0.28em] text-accent">
                Ingrediente {index + 1}
              </p>
              <h4 className="mt-2 font-serif text-xl text-foreground">{item.ingredient}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground">Receta:</span> {item.recipe}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.reason}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">Conclusión</h3>
        <Text className="mt-4">
          Estos ingredientes forman una base coherente para la carta dulce del restaurante porque
          salen de las recetas ya creadas y refuerzan el concepto de Lava y Salitre. El chocolate,
          el cacao, el plátano y la piña conectan con la parte volcánica y tropical; la sal marina y
          el ron aportan contraste; y la almendra, la miel de palma y la leche de cabra mantienen la
          identidad canaria del proyecto.
        </Text>
        <Text className="mt-4">
          De esta forma, la carta de postres mantiene una línea clara: postres pequeños, visuales,
          con producto local y con técnicas de cocina de vanguardia, sin añadir ingredientes que no
          aparezcan en las fichas.
        </Text>
      </div>
    </article>
  );
}

function GastronomicConceptSection() {
  return (
    <article className="rounded-md border border-border bg-background/70 p-6 lg:p-8">
      <h2 className="mt-3 font-serif text-2xl text-foreground lg:text-3xl">
        Concepto gastronómico
      </h2>

      <div className="mt-6 flow-root">
        <figure className="mb-5 overflow-hidden rounded-md border border-border bg-black lg:float-right lg:mb-4 lg:ml-7 lg:w-[47%]">
          <img
            src="/proyecto/fase-1/concepto-lava-salitre.jpg"
            alt="Identidad visual de Lava y Salitre"
            className="aspect-[16/9] w-full object-cover"
            loading="lazy"
          />
        </figure>
        <div className="space-y-5">
          <Text>
            Lava y Salitre es un restaurante inspirado en dos elementos muy presentes en Canarias:
            la lava volcánica y el salitre del Atlántico. El nombre representa la unión entre la
            tierra y el mar, dos partes fundamentales de la identidad canaria.
          </Text>
          <Text>
            Su estilo se define como una cocina canaria minimalista y de vanguardia, con platos de
            mar y tierra elaborados con productos locales, de temporada y, siempre que sea posible,
            de kilómetro cero.
          </Text>
          <Text>
            La filosofía del restaurante se basa en respetar el producto canario y presentarlo de
            una forma más actual, limpia y elegante, sin perder la esencia tradicional. Cada plato
            busca contar una parte del paisaje de las islas: el sabor salino del mar, la fuerza
            volcánica de la tierra y la riqueza de sus productos.
          </Text>
        </div>
      </div>

      <LogoIdentitySection />

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Representación de las ocho islas Canarias
        </h3>
        <Text className="mt-4">
          El menú representa a las ocho islas Canarias mediante ingredientes como pescados frescos,
          algas, agua de mar, sal marina, gofio, papas, miel de palma, almendra de Tejeda, piña de
          El Hierro, plátano canario, leche de cabra, vino canario y carnes locales.
        </Text>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {islandConceptProducts.map((item) => (
            <div key={item.island} className="rounded-md border border-border bg-card/50 p-5">
              <h4 className="font-serif text-xl text-foreground">{item.island}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground">Productos utilizados:</span> {item.products}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground">Platos donde aparecen:</span> {item.dishes}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Tradición canaria con mirada vanguardista
        </h3>
        <div className="mt-4 space-y-5">
          <Text>
            En Lava y Salitre, la tradición canaria se transforma en una propuesta vanguardista,
            minimalista y con esencia Michelin. El restaurante se inspira en la fuerza de la lava y
            en el carácter marino del salitre, uniendo tierra y mar en cada plato.
          </Text>
          <Text>
            Se trabajarán productos locales de km 0, como pescado fresco, gofio, papas antiguas,
            quesos canarios, miel de palma o frutas de las islas, aplicando técnicas vanguardistas
            como espumas, geles, aires, texturas crujientes, cocciones precisas y emplatados
            limpios.
          </Text>
          <Text>
            La idea es respetar el sabor de Canarias, pero presentarlo de una forma más elegante,
            creativa y sorprendente, propia de una experiencia de alta cocina.
          </Text>
        </div>
      </div>
    </article>
  );
}

function LogoIdentitySection() {
  return (
    <div className="mt-8 border-t border-border/60 pt-7">
      <div>
        <p className="text-[10px] uppercase tracking-[0.28em] text-accent">Identidad visual</p>
        <h3 className="mt-3 font-serif text-xl text-foreground lg:text-2xl">
          Logotipo de Lava & Salitre
        </h3>
      </div>

      <div className="mt-5 grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <a
          href="/galeria/logo-version-dorada-negro.png"
          target="_blank"
          rel="noreferrer"
          className="block overflow-hidden rounded-md border border-border bg-black"
          aria-label="Abrir logotipo principal de Lava & Salitre"
        >
          <img
            src="/galeria/logo-version-dorada-negro.png"
            alt="Logotipo principal de Lava & Salitre"
            loading="lazy"
            className="h-full min-h-64 w-full object-contain"
          />
        </a>
        <div className="space-y-5">
          <Text>
            La identidad visual de Lava & Salitre resume el mismo concepto que sostiene la cocina
            del restaurante: la fuerza de la tierra volcánica y la presencia constante del mar. El
            símbolo superior representa una montaña o formación volcánica atravesada por un
            recorrido orgánico que puede leerse como lava, camino, costa o corriente marina.
          </Text>
          <Text>
            El dorado aporta calidez, valor gastronómico y una sensación premium sin alejarse de la
            naturaleza del proyecto. El negro conecta con la piedra volcánica y la elegancia de la
            sala; el blanco permite versiones más limpias y luminosas para soportes claros.
          </Text>
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-2">
        <div className="rounded-md border border-border bg-card/60 p-5">
          <h4 className="font-serif text-xl text-foreground">Isotipo</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Es la parte simbólica: la montaña volcánica, el trazo sinuoso y los puntos que evocan
            salitre, arena, espuma o mineralidad. Puede funcionar como recurso gráfico, aunque al
            ser una marca nueva conviene acompañarlo del nombre para que el cliente lo asocie con el
            restaurante.
          </p>
        </div>
        <div className="rounded-md border border-border bg-card/60 p-5">
          <h4 className="font-serif text-xl text-foreground">Logotipo</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Es la composición tipográfica de Lava & Salitre, acompañada por la palabra Restaurante.
            La elección de una tipografía serif transmite oficio, pausa y una experiencia
            gastronómica cuidada.
          </p>
        </div>
        <div className="rounded-md border border-border bg-card/60 p-5">
          <h4 className="font-serif text-xl text-foreground">Claim</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Tierra y Mar funciona como claim porque condensa la promesa del restaurante en una idea
            breve y memorable: producto terrestre, paisaje volcánico, pescado, sal marina y
            Atlántico.
          </p>
        </div>
        <div className="rounded-md border border-border bg-card/60 p-5">
          <h4 className="font-serif text-xl text-foreground">Imagotipo</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            La marca se entiende como un imagotipo porque combina un símbolo reconocible con un
            texto legible, y ambos pueden separarse en ciertos usos sin romper la coherencia visual.
          </p>
        </div>
      </div>

      <div className="mt-7">
        <h4 className="font-serif text-xl text-foreground">Versiones del logotipo</h4>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground lg:text-base">
          Las distintas versiones permiten mantener una identidad coherente en sala, carta, web,
          redes sociales, papelería, señalética y materiales promocionales, adaptándose a fondos
          oscuros, claros, fotográficos o monocromos sin perder reconocimiento.
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {logoVersions.map((version) => (
            <figure
              key={version.src}
              className="overflow-hidden rounded-md border border-border bg-background"
            >
              <a
                href={version.src}
                target="_blank"
                rel="noreferrer"
                className={`flex h-40 items-center justify-center p-4 ${version.frameClassName}`}
                aria-label={`Abrir ${version.title}`}
              >
                <img
                  src={version.src}
                  alt={version.alt}
                  loading="lazy"
                  className="max-h-full w-full object-contain"
                />
              </a>
              <figcaption className="p-4">
                <p className="font-serif text-lg text-foreground">{version.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {version.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

function TargetAudienceSection() {
  return (
    <article className="rounded-md border border-border bg-background/70 p-6 lg:p-8">
      <h2 className="mt-3 font-serif text-2xl text-foreground lg:text-3xl">Público objetivo</h2>

      <div className="mt-6 grid gap-4 lg:grid-cols-4">
        <div className="rounded-md border border-border bg-card/50 p-5">
          <p className="text-[10px] uppercase tracking-[0.28em] text-accent">Ubicación</p>
          <p className="mt-2 font-serif text-lg text-foreground">
            Puerto de las Nieves, Agaete, Gran Canaria
          </p>
        </div>
        <div className="rounded-md border border-border bg-card/50 p-5">
          <p className="text-[10px] uppercase tracking-[0.28em] text-accent">Concepto</p>
          <p className="mt-2 font-serif text-lg text-foreground">
            Cocina canaria actual basada en el mar, la tierra y el producto local
          </p>
        </div>
        <div className="rounded-md border border-border bg-card/50 p-5">
          <p className="text-[10px] uppercase tracking-[0.28em] text-accent">Cliente principal</p>
          <p className="mt-2 font-serif text-lg text-foreground">
            Adulto, curioso y con interés por experiencias gastronómicas diferentes
          </p>
        </div>
        <div className="rounded-md border border-border bg-card/50 p-5">
          <p className="text-[10px] uppercase tracking-[0.28em] text-accent">Edad orientativa</p>
          <p className="mt-2 font-serif text-lg text-foreground">
            30 a 60 años, con especial peso entre 35 y 55
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-5">
        <Text>
          Para definir mejor el público al que se dirige Lava y Salitre, es importante no quedarse
          solo en la edad o en el tipo de cliente. El restaurante no está pensado para todo el
          mundo, sino para personas que buscan una experiencia gastronómica especial, con producto
          canario, buen servicio y una propuesta diferente.
        </Text>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Segmentación del público objetivo
        </h3>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {audienceSegments.map((segment) => (
            <div key={segment.title} className="rounded-md border border-border bg-card/50 p-5">
              <CardTitle icon={segment.icon} title={segment.title} />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{segment.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 border-t border-border/60 pt-7 lg:grid-cols-2">
        <div>
          <h3 className="font-serif text-xl text-foreground lg:text-2xl">
            Lo que valora este cliente
          </h3>
          <ul className="mt-5 grid gap-3">
            {audienceValues.map((value) => (
              <li
                key={value}
                className="rounded-md border border-border bg-card/50 p-4 text-sm leading-relaxed text-muted-foreground"
              >
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl text-foreground lg:text-2xl">
            Necesidades principales
          </h3>
          <ul className="mt-5 grid gap-3">
            {audienceNeeds.map((need) => (
              <li
                key={need}
                className="rounded-md border border-border bg-card/50 p-4 text-sm leading-relaxed text-muted-foreground"
              >
                {need}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Buyer persona: cliente ideal de Lava y Salitre
        </h3>
        <div className="mt-5 overflow-hidden rounded-md border border-border">
          {personaDetails.map((detail) => (
            <div
              key={detail.label}
              className="grid border-t border-border first:border-t-0 lg:grid-cols-[14rem_1fr]"
            >
              <div className="bg-card/60 p-4 text-[10px] uppercase tracking-[0.24em] text-accent">
                {detail.label}
              </div>
              <div className="p-4 text-sm leading-relaxed text-muted-foreground">
                {detail.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {personaInsightCards.map((card) => (
            <div key={card.title} className="rounded-md border border-border bg-card/50 p-5">
              <CardTitle icon={card.icon} title={card.title} />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <ProjectWebText text={card.text} />
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Antes de reservar y canales de información
        </h3>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {reservationInfoCards.map((card) => (
            <div key={card.title} className="rounded-md border border-border bg-card/50 p-5">
              <CardTitle icon={card.icon} title={card.title} />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <ProjectWebText text={card.text} />
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Qué espera de Lava y Salitre
        </h3>
        <Text className="mt-4">
          Espera una experiencia completa: buena comida, buen servicio, ambiente tranquilo, producto
          canario y una presentación cuidada. No quiere un restaurante frío ni excesivamente formal:
          quiere sentirse cómoda, disfrutar sin prisa y notar que cada plato tiene sentido dentro
          del concepto.
        </Text>
        <Text className="mt-4">
          En conclusión, Lava y Salitre se dirige a un público adulto que valora la gastronomía, el
          producto local y las experiencias diferentes. Puede atraer tanto a público local como a
          turistas gastronómicos, parejas, pequeños grupos, gourmets y personas interesadas en la
          sostenibilidad. La clave será ofrecer una experiencia coherente, elegante y cercana, donde
          el cliente pueda descubrir Canarias desde una mirada más moderna, sin perder la esencia de
          las islas.
        </Text>
      </div>
    </article>
  );
}

function GastronomicTechnologiesSection() {
  return (
    <article className="rounded-md border border-border bg-background/70 p-6 lg:p-8">
      <h2 className="mt-3 font-serif text-2xl text-foreground lg:text-3xl">
        Tecnologías gastronómicas
      </h2>

      <div className="mt-5 space-y-5">
        <Text>
          La cocina actual no solo se basa en preparar buenos platos, sino también en buscar nuevas
          formas de sorprender al cliente. Las tecnologías culinarias modernas permiten cambiar
          texturas, jugar con la temperatura y presentar los alimentos de una manera más atractiva.
        </Text>
        <Text>
          En Lava y Salitre, estas técnicas se usarían con equilibrio, sin quitar protagonismo al
          producto canario. La idea no sería hacer platos complicados porque sí, sino mejorar la
          experiencia del comensal y dar una imagen más actual del restaurante.
        </Text>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Tecnologías culinarias modernas
        </h3>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {culinaryTechnologies.map((technology) => (
            <div key={technology.title} className="rounded-md border border-border bg-card/50 p-5">
              <h4 className="font-serif text-xl text-foreground">{technology.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {technology.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground">Aplicación:</span> {technology.use}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Tecnologías digitales para la carta
        </h3>
        <Text className="mt-4">
          Las tecnologías digitales modernizan la imagen del restaurante, facilitan la información
          al cliente y mejoran la organización del servicio. En Lava y Salitre deben reforzar el
          relato gastronómico sin sustituir la atención en sala ni la elegancia de una carta física.
        </Text>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {digitalTechnologies.map((technology) => (
            <div key={technology.title} className="rounded-md border border-border bg-card/50 p-5">
              <CardTitle icon={technology.icon} title={technology.title} />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {technology.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                <span className="text-foreground">Aplicación:</span> {technology.use}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">
          Tecnologías elegidas y justificación
        </h3>
        <Text className="mt-4">
          Lava y Salitre utilizaría tecnologías culinarias y digitales siempre con sentido. No se
          trata de llenar los platos de técnicas modernas, sino de escoger las que realmente aporten
          algo al concepto del restaurante.
        </Text>
        <div className="mt-5 overflow-hidden rounded-md border border-border">
          <div className="grid bg-card/70 text-[10px] uppercase tracking-[0.22em] text-accent lg:grid-cols-[1fr_1.2fr_1.4fr]">
            <div className="border-b border-border p-3 lg:border-r">Tecnología</div>
            <div className="hidden border-b border-r border-border p-3 lg:block">
              Dónde se usaría
            </div>
            <div className="hidden border-b border-border p-3 lg:block">Por qué se usaría</div>
          </div>
          {selectedTechnologyUses.map((item) => (
            <div
              key={item.technology}
              className="grid border-t border-border bg-background first:border-t-0 lg:grid-cols-[1fr_1.2fr_1.4fr]"
            >
              <div className="p-4 lg:border-r lg:border-border">
                <p className="font-serif text-lg text-foreground">{item.technology}</p>
                <div className="mt-2 space-y-1 text-sm leading-relaxed text-muted-foreground lg:hidden">
                  <p>{item.where}</p>
                  <p>{item.reason}</p>
                </div>
              </div>
              <div className="hidden border-r border-border p-4 text-sm leading-relaxed text-muted-foreground lg:block">
                {item.where}
              </div>
              <div className="hidden p-4 text-sm leading-relaxed text-muted-foreground lg:block">
                {item.reason}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 border-t border-border/60 pt-7">
        <h3 className="font-serif text-xl text-foreground lg:text-2xl">Conclusión</h3>
        <div className="mt-4 space-y-5">
          <Text>
            Lava y Salitre combinaría tradición canaria con técnicas modernas, manteniendo siempre
            el respeto por el producto. Las tecnologías culinarias servirían para mejorar la
            textura, la presentación y la experiencia del cliente, no para esconder el sabor
            original de los ingredientes.
          </Text>
          <Text>
            La deconstrucción, las espumas, las gelificaciones y algunas esferificaciones ayudarían
            a mostrar la cocina canaria desde una visión más actual. El nitrógeno líquido se usaría
            solo en momentos concretos, principalmente para crear sorpresa en postres o pequeños
            bocados.
          </Text>
          <Text>
            En cuanto a la carta, lo más adecuado sería combinar una carta física elegante con una
            carta QR interactiva. Así se ofrece comodidad a todos los clientes y se amplía la
            información sobre platos, alérgenos, productos canarios y maridajes.
          </Text>
        </div>
      </div>
    </article>
  );
}

function Text({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`text-sm leading-[1.85] text-muted-foreground lg:text-base ${className}`}>
      {children}
    </p>
  );
}
