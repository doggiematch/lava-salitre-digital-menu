import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/conocenos")({
  component: Conocenos,
  head: () => ({
    meta: [
      { title: "Conócenos — Lava & Salitre" },
      {
        name: "description",
        content:
          "Conoce el público, el enclave, la propuesta gastronómica y la identidad de Lava & Salitre.",
      },
    ],
  }),
});

const overview = [
  { label: "Concepto", value: "Cocina canaria vanguardista basada en productos del mar y de la tierra." },
  { label: "Ubicación", value: "Avenida de los Poetas, s/n, Puerto de las Nieves, Agaete." },
  {
    label: "Cliente principal",
    value: "Adulto, curioso, con interés por gastronomía, producto local y experiencias diferentes.",
  },
  { label: "Rango de edad orientativo", value: "30 a 60 años, con especial peso entre 35 y 55 años." },
  { label: "Elemento diferenciador", value: "Menú degustación con opción de maridaje con vinos canarios." },
] as const;

const location = [
  "Lava & Salitre",
  "Avenida de los Poetas, s/n",
  "Puerto de las Nieves",
  "35489 Agaete, Las Palmas",
  "Gran Canaria, Islas Canarias",
  "Ubicación para Google Maps: buscar “Avenida de los Poetas, Puerto de las Nieves, Agaete”.",
] as const;

const segments = [
  {
    title: "Turistas gastronómicos",
    paragraphs: [
      "Uno de los públicos principales serán los turistas gastronómicos. Este cliente viaja buscando algo más que playa, descanso o paisaje. Quiere conocer el destino a través de su cocina y suele interesarse por restaurantes que trabajen con productos locales y tengan una propuesta diferente.",
      "En Gran Canaria, y especialmente en un enclave como Agaete, este perfil puede sentirse atraído por una cocina que muestre Canarias desde una mirada más actual. Lava & Salitre ofrecería una experiencia donde cada plato tenga relación con el mar, la tierra, el paisaje volcánico y la cultura gastronómica de las islas.",
      "Para este cliente será importante que el restaurante explique el origen de los ingredientes, la idea de cada plato y el motivo de las técnicas utilizadas. No necesita una explicación excesiva, pero sí quiere entender qué está comiendo y por qué ese plato forma parte del menú.",
    ],
  },
  {
    title: "Público local canario",
    paragraphs: [
      "El público local será otro pilar importante. Puede proceder de Gran Canaria, Tenerife u otras islas. Este cliente ya conoce muchos sabores canarios y puede tener una conexión emocional con los productos de la tierra y del mar. Precisamente por eso, la propuesta puede resultar atractiva si se trabaja con respeto.",
      "Lava & Salitre no buscará copiar la cocina tradicional tal como se sirve en los restaurantes de siempre. La idea será partir de esa base y llevarla a un formato más actual, con técnicas modernas, presentaciones limpias y un menú degustación bien estructurado. El cliente local debe reconocer la esencia canaria, aunque el plato se presente de una forma nueva.",
      "Este público puede acudir en celebraciones, aniversarios, comidas especiales o cenas diferentes. No se trata de un restaurante pensado para todos los días, sino para momentos en los que el cliente quiere disfrutar de algo más cuidado y especial.",
    ],
  },
  {
    title: "Clientes de Tenerife y otras islas cercanas",
    paragraphs: [
      "La conexión de Agaete con Tenerife es una ventaja clara. El Puerto de las Nieves permite plantear el restaurante como un punto atractivo para personas que se desplazan entre islas por ocio, gastronomía o escapadas cortas. Un cliente de Tenerife podría visitar Agaete y reservar en Lava & Salitre como parte de una experiencia diferente en Gran Canaria.",
      "También se pueden tener en cuenta islas como La Palma y El Hierro, que comparten una fuerte identidad volcánica, natural y de producto local. Aunque Fuerteventura y Lanzarote también forman parte de la riqueza gastronómica canaria, su conexión con Agaete es menos directa y requiere más tiempo, por lo que su influencia sería menos inmediata dentro de la estrategia inicial.",
    ],
  },
  {
    title: "Gourmets y amantes de la alta cocina",
    paragraphs: [
      "Otro público clave serán los gourmets y personas aficionadas a la cocina de autor. Este cliente busca restaurantes con personalidad, menús degustación, técnica, presentación cuidada y una historia detrás. Suele consultar guías, seguir recomendaciones gastronómicas y estar dispuesto a desplazarse si la propuesta le parece interesante.",
      "Para este perfil, Lava & Salitre puede resultar atractivo porque une varios elementos potentes: cocina canaria, producto local, mar, tierra volcánica, diseño cuidado, posibilidad de maridaje y una ubicación con encanto. La clave será que la creatividad tenga sentido. El restaurante no debe hacer platos complejos solo por llamar la atención, sino usar la técnica para mejorar el producto y contar mejor la identidad canaria.",
    ],
  },
  {
    title: "Parejas y pequeños grupos",
    paragraphs: [
      "El restaurante también se orientará a parejas y pequeños grupos que busquen una experiencia tranquila y especial. Este perfil puede acudir para celebrar un aniversario, un cumpleaños, una escapada gastronómica o una comida importante. El menú degustación encaja bien con este tipo de cliente porque permite disfrutar sin prisa, siguiendo un recorrido de varios pases.",
      "El ambiente será fundamental. Lava & Salitre deberá transmitir calma, elegancia y cercanía, sin convertirse en un espacio frío o demasiado rígido. La decoración, la iluminación, la música, la vajilla y el trato del personal deberán acompañar la experiencia gastronómica.",
    ],
  },
  {
    title: "Clientes interesados en producto local y sostenibilidad",
    paragraphs: [
      "Otro segmento importante será el cliente que valora el producto de proximidad, la sostenibilidad y el consumo responsable. Cada vez más personas quieren saber de dónde viene lo que comen y prefieren restaurantes que apoyen a productores cercanos.",
      "Lava & Salitre se apoyará en productos canarios de mar y tierra, priorizando el kilómetro cero siempre que sea posible. Esto permitirá reforzar la relación con pescadores, agricultores, ganaderos, bodegas y pequeños productores de las islas. La sostenibilidad no se planteará como una moda, sino como una forma coherente de trabajar en un restaurante que quiere representar Canarias desde el respeto al territorio.",
    ],
  },
] as const;

const idealClient = [
  {
    aspect: "Edad orientativa",
    description: "Principalmente de 30 a 60 años, con mayor peso entre 35 y 55 años.",
  },
  {
    aspect: "Nivel adquisitivo",
    description: "Medio-alto, dispuesto a pagar por producto, técnica y experiencia.",
  },
  {
    aspect: "Intereses",
    description:
      "Gastronomía, producto local, vinos canarios, cultura de las islas, restaurantes de autor y experiencias tranquilas.",
  },
  {
    aspect: "Motivación de visita",
    description: "Celebración especial, escapada gastronómica, turismo gastronómico o interés por la cocina canaria actual.",
  },
  {
    aspect: "Expectativa principal",
    description: "Vivir una experiencia coherente, con platos cuidados, buen servicio, maridaje y conexión con el paisaje canario.",
  },
] as const;

const expectations = [
  "Producto canario de calidad, fresco y bien seleccionado.",
  "Cocina creativa, pero con sentido y conexión con Canarias.",
  "Presentaciones limpias, visuales y cuidadas.",
  "Servicio profesional, cercano y natural.",
  "Ambiente tranquilo, elegante y relacionado con el entorno.",
  "Posibilidad de maridaje con vinos canarios.",
  "Explicaciones claras sobre el origen del producto y la idea de cada plato.",
] as const;

const sources = [
  {
    label: "Guía MICHELIN España - Restaurantes en Canarias",
    href: "https://guide.michelin.com/es/es/canarias/restaurantes",
  },
  {
    label: "Guía Repsol - Listado de nuevos Soles Guía Repsol 2026",
    href: "https://www.guiarepsol.com/es/soles-repsol/soles-2026/listado-de-nuevos-restaurantes-con-soles-guia-repsol-2026/",
  },
  {
    label: "Guía Repsol - Restaurantes del hotel Corales Villas, Adeje, Tenerife",
    href: "https://www.guiarepsol.com/es/comer/nuestros-favoritos/los-restaurantes-del-hotel-corales-villas-adeje-tenerife/",
  },
  {
    label: "Fred. Olsen Express - Fast ferry Gran Canaria (Agaete) - Tenerife",
    href: "https://www.fredolsen.es/es/fast-ferry-barco-gran-canaria-tenerife-tenerife-gran-canaria",
  },
  {
    label: "Turismo de Gran Canaria - Ruta Agaete - Puerto de las Nieves",
    href: "https://www.grancanaria.com/turismo/serviciosmultimedia/audioguias/cascos-historicos/ruta-agaete-puerto-de-las-nieves/",
  },
  {
    label: "Visit Agaete - Restaurantes en Agaete y referencias a Avenida de los Poetas",
    href: "https://visitagaete.es/restaurantes/",
  },
] as const;

const locationPhotos = [
  {
    src: "/galeria/fachada-atardecer.png",
    alt: "Fachada de Lava & Salitre al atardecer frente al mar",
    title: "Vista exterior de Lava & Salitre en el Puerto de las Nieves.",
  },
  {
    src: "/galeria/salon-vistas.png",
    alt: "Comedor de Lava & Salitre con vistas al entorno del Puerto de las Nieves",
    title: "Vista interior del comedor y zona de maridaje.",
  },
] as const;

const km0Ingredients = [
  { name: "Almendra", origin: "Tejeda, Gran Canaria" },
  { name: "Cacao / chocolate", origin: "Obradores artesanales de La Palma" },
  { name: "Leche de cabra", origin: "Zonas ganaderas de Fuerteventura" },
  { name: "Lima", origin: "Norte de Tenerife" },
  { name: "Limón", origin: "Tacoronte y norte de Tenerife" },
  { name: "Miel de palma", origin: "Alojera y Vallehermoso, La Gomera" },
  { name: "Naranja", origin: "Tacoronte y norte de Tenerife" },
  { name: "Piña tropical", origin: "Valle de El Golfo, La Frontera, El Hierro" },
  { name: "Plátano", origin: "Norte y sur de Tenerife" },
  { name: "Ron", origin: "Arucas, norte de Gran Canaria" },
  { name: "Huevos", origin: "Medianías de Gran Canaria" },
  { name: "Azúcar", origin: "Gran Canaria" },
  { name: "Vainilla", origin: "Zonas cálidas y húmedas de La Palma" },
  { name: "Mango", origin: "Mogán, La Aldea y sur de Gran Canaria" },
  { name: "Papaya", origin: "Güímar, Arona y zonas cálidas de Tenerife" },
  { name: "Tuno indio", origin: "Teguise, Tinajo y zonas de secano de Lanzarote" },
  { name: "Gofio", origin: "La Orotava, Los Realejos y zonas cerealistas" },
  { name: "Queso palmero", origin: "Garafía, Puntagorda y zonas ganaderas de La Palma" },
  { name: "Batata", origin: "Jable de Lanzarote y zonas de cultivo de Teguise" },
  { name: "Aguacate", origin: "La Orotava, Los Realejos y norte de Tenerife" },
] as const;

const dessertIngredients = [
  {
    name: "Almendra",
    role: "Bienmesabe, pralinés, crujientes y cremas con memoria repostera canaria.",
  },
  {
    name: "Cacao / chocolate",
    role: "Ganaches, tierras dulces, bombones y matices volcánicos en los petit four.",
  },
  {
    name: "Leche de cabra",
    role: "Aires, espumas lácteas y notas ahumadas que suavizan los postres más intensos.",
  },
  {
    name: "Lima",
    role: "Geles cítricos y acidez limpia para equilibrar frutas tropicales y elaboraciones dulces.",
  },
  {
    name: "Limón",
    role: "Granizados, ralladuras aromáticas y frescor para cremas, espumas y bienmesabe.",
  },
  {
    name: "Miel de palma",
    role: "Salsas, bases dulces y profundidad tradicional en postres de inspiración gomera.",
  },
  {
    name: "Naranja",
    role: "Zumos, granizados, geles y contraste fresco en postres de mayor dulzor.",
  },
  {
    name: "Piña tropical",
    role: "Fruta braseada, compotas y geles para una línea fresca y atlántica.",
  },
  {
    name: "Plátano",
    role: "Cremas, purés, esferas líquidas y combinaciones con cacao de carácter canario.",
  },
  {
    name: "Ron",
    role: "Almíbar aromático, rellenos líquidos y bombones con identidad de Gran Canaria.",
  },
] as const;

const culinaryTechnologies = [
  {
    name: "Deconstrucción",
    description:
      "Permite reinterpretar platos canarios tradicionales desde una mirada actual, conservando el sabor reconocible y elevando la presentación.",
  },
  {
    name: "Espumas",
    description:
      "Aportan ligereza en entrantes, salsas y postres. Una espuma de gofio, queso o marisco puede sumar sabor sin hacer pesado el plato.",
  },
  {
    name: "Gelificaciones",
    description:
      "Transforman líquidos en geles para crear puntos de sabor precisos con lima, fruta, vino malvasía o fondos marinos.",
  },
  {
    name: "Esferificación",
    description:
      "Se usa de forma puntual para mojos, caldos o jugos, aportando sorpresa sin quitar protagonismo al producto principal.",
  },
  {
    name: "Nitrógeno líquido",
    description:
      "Se reserva para postres o pequeños bocados donde el contraste de frío y el efecto visual tengan sentido dentro del menú.",
  },
] as const;

const digitalTechnologies = [
  {
    name: "Carta QR interactiva",
    description:
      "Facilita actualizar platos, precios, alérgenos, origen de productos y recomendaciones de maridaje.",
  },
  {
    name: "Carta física",
    description:
      "Mantiene una experiencia elegante y cómoda para quienes prefieren leer el menú de forma tradicional en sala.",
  },
  {
    name: "Menú interactivo",
    description:
      "Permite consultar ingredientes principales, isla de origen, técnica utilizada y vino recomendado para cada pase.",
  },
  {
    name: "Realidad aumentada",
    description:
      "Se plantea solo como complemento en platos especiales, para explicar visualmente el origen del producto o el concepto del menú.",
  },
] as const;

const technologySummary = [
  { technology: "Deconstrucción", use: "Platos canarios reinterpretados", reason: "Une tradición e innovación" },
  { technology: "Espumas", use: "Entrantes, salsas y postres", reason: "Aporta ligereza" },
  { technology: "Gelificaciones", use: "Puntos cítricos, frutales o marinos", reason: "Controla sabores y mejora la presentación" },
  { technology: "Esferificación", use: "Mojos, caldos y jugos", reason: "Da un toque moderno y sorprendente" },
  { technology: "Nitrógeno líquido", use: "Postres o bocados concretos", reason: "Crea contraste de frío y efecto visual" },
  { technology: "QR interactivo", use: "Carta digital", reason: "Facilita alérgenos, origen y maridajes" },
  { technology: "Carta física", use: "Servicio en sala", reason: "Mantiene comodidad y elegancia" },
] as const;

const islandProducts = [
  {
    island: "Gran Canaria",
    products: "Cherne, cilantro, cítricos, almendra de Tejeda",
    dishes: "Ceviche de cherne, bienmesabe aéreo",
  },
  {
    island: "Tenerife",
    products: "Vieja canaria, papa negra, algas",
    dishes: "Vieja sancochada",
  },
  {
    island: "La Gomera",
    products: "Miel de palma, mojo verde, cilantro",
    dishes: "Bruma de Agaete, cherne glaseado",
  },
  {
    island: "La Palma",
    products: "Plátano canario, cacao/chocolate",
    dishes: "La Palma bajo cacao",
  },
  {
    island: "El Hierro",
    products: "Piña tropical, pepino",
    dishes: "Piña de El Hierro a la brasa, ostra canaria",
  },
  {
    island: "Lanzarote",
    products: "Cabrilla, hinojo, sal marina",
    dishes: "Cabrilla confitada",
  },
  {
    island: "Fuerteventura",
    products: "Leche de cabra, cabrito, atún rojo",
    dishes: "Cabrito de cumbre, atún rojo, ceniza dulce",
  },
  {
    island: "La Graciosa",
    products: "Agua de mar, sal marina, pescado fresco",
    dishes: "Perla Atlántica, sorbete de lima",
  },
] as const;

const logoVersions = [
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo dorado de Lava & Salitre sobre fondo negro",
    title: "Versión principal",
    description: "Dorada sobre fondo oscuro, pensada para soportes elegantes, presencia digital y piezas de mayor impacto.",
  },
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo dorado de Lava & Salitre con fondo transparente",
    title: "Versión dorada adaptable",
    description: "Útil para aplicaciones sobre fotografía, materiales corporativos y fondos neutros donde el oro mantiene protagonismo.",
  },
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo blanco de Lava & Salitre sobre fondo negro",
    title: "Versión blanca",
    description: "Funciona en fondos oscuros cuando se busca máxima limpieza, contraste y lectura inmediata.",
  },
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo dorado y negro de Lava & Salitre sobre fondo blanco",
    title: "Versión clara premium",
    description: "Adecuada para papelería, cartas, presentaciones y soportes impresos con fondo claro.",
  },
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo negro de Lava & Salitre sobre fondo blanco",
    title: "Versión monocroma",
    description: "Pensada para usos sobrios, documentación, sellos, grabados o aplicaciones donde el color no sea posible.",
  },
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo de Lava & Salitre con claim Tierra y Mar centrado",
    title: "Versión con claim centrado",
    description: "Refuerza el mensaje Tierra y Mar en piezas donde la identidad conceptual debe quedar especialmente clara.",
  },
] as const;

const restaurantZones = [
  "Entrada principal con recepción",
  "Sala principal con vistas al mar",
  "Terraza exterior",
  "Cocina semiabierta",
  "Zona de pase para el emplatado",
  "Pequeña bodega o zona de maridaje con vinos canarios seleccionados",
] as const;

const tastingMenuStructure = [
  {
    name: "Menú Lava",
    concept: "Tierra, carnes, quesos, gofio, papas y productos volcánicos",
    dishes: "10 platos",
    withoutPairing: "90 EUR",
    withPairing: "145 EUR",
  },
  {
    name: "Menú Salitre",
    concept: "Mar, pescados, algas, sal marina y producto atlántico",
    dishes: "10 platos",
    withoutPairing: "90 EUR",
    withPairing: "145 EUR",
  },
  {
    name: "Menú Lava & Salitre",
    concept: "Fusión entre tierra y mar",
    dishes: "15 platos",
    withoutPairing: "125 EUR",
    withPairing: "195 EUR",
  },
] as const;

const investmentOptions = [
  {
    option: "Traspaso con mobiliario y maquinaria",
    note: "Más rápido y económico si el local incluye cocina equipada, salida de humos y parte de las licencias.",
    recommendation: "Mejor opción para empezar",
  },
  {
    option: "Traspaso sin mobiliario",
    note: "Permite adaptar mejor el diseño, aunque exige invertir más en equipamiento.",
    recommendation: "Opción intermedia",
  },
  {
    option: "Compra con mobiliario",
    note: "Ofrece más control del local, pero requiere una inversión inicial muy alta.",
    recommendation: "Arriesgada al inicio",
  },
  {
    option: "Alquiler desde cero",
    note: "No exige comprar el local, aunque reforma y equipamiento pueden encarecer el arranque.",
    recommendation: "Solo si el alquiler es bueno",
  },
] as const;

const investmentBudget = [
  { concept: "Traspaso del local", estimate: "30.000 EUR - 70.000 EUR" },
  { concept: "Reforma estética y adaptación", estimate: "25.000 EUR - 50.000 EUR" },
  { concept: "Mobiliario, vajilla y decoración", estimate: "15.000 EUR - 30.000 EUR" },
  { concept: "Maquinaria adicional de cocina", estimate: "20.000 EUR - 40.000 EUR" },
  { concept: "Licencias, gestoría y trámites", estimate: "5.000 EUR - 12.000 EUR" },
  { concept: "Stock inicial y bodega", estimate: "8.000 EUR - 15.000 EUR" },
  { concept: "Marketing, carta, web e imagen", estimate: "3.000 EUR - 8.000 EUR" },
  { concept: "Fondo de seguridad inicial", estimate: "20.000 EUR - 40.000 EUR" },
] as const;

function Conocenos() {
  return (
    <div className="paper">
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <SectionTitle
          eyebrow="Lava & Salitre"
          title="Conócenos"
          subtitle="Proyecto de restaurante gastronómico en el Puerto de las Nieves, Agaete."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
          {overview.map((item) => (
            <div key={item.label} className="bg-background p-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-accent">{item.label}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-border/60 bg-background">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[0.9fr_1.1fr] md:items-center md:py-16">
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-28 w-28 border-l border-t border-accent/50" />
            <div className="absolute -bottom-5 -right-5 h-44 w-44 rounded-full bg-accent/15 blur-2xl" />
            <div className="absolute inset-6 border border-accent/20" />
            <figure className="relative overflow-hidden rounded-md border border-border bg-card shadow-[0_30px_90px_-45px_oklch(0.18_0.012_55/.55)]">
              <img
                src="/galeria/rudy-ceo.png"
                alt="Rudy Lindgreen García, CEO de Lava & Salitre"
                loading="lazy"
                className="h-[420px] w-full object-cover object-top md:h-[560px]"
              />
            </figure>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-accent">CEO & Culinary Leader</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-foreground md:text-4xl">
              “Lava & Salitre nace para escuchar la isla: el mar, la piedra caliente y la memoria de cada producto.”
            </h2>
            <p className="mt-4 font-serif text-lg italic text-stone-volcanic">Rudy Lindgreen García</p>
            <div className="mt-5 space-y-4">
              <CeoText>
                Rudy lidera Lava & Salitre desde una visión clara: unir la identidad canaria, el producto
                local y una cocina actual en una experiencia gastronómica cuidada de principio a fin.
              </CeoText>
              <CeoText>
                Su papel combina dirección, criterio culinario y sensibilidad por el territorio. Bajo su mirada, el
                restaurante busca representar el vínculo entre el mar, la tierra volcánica y la hospitalidad canaria.
              </CeoText>
              <CeoText>
                La propuesta nace para quienes valoran el origen de los ingredientes, el ritmo de un menú degustación, el
                maridaje con vinos canarios y una sala donde el servicio acompaña sin imponerse.
              </CeoText>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export function ProjectSections() {
  return (
    <>
      <section id="investigacion-ingredientes-km-0" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Categoría</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
            Investigación de ingredientes km 0
          </h2>
          <div className="mt-6 space-y-5">
            <Text>
              En Lava & Salitre, la carta nace de una investigación sobre ingredientes canarios capaces de contar el paisaje
              desde el plato. La selección combina producto fresco, elaboraciones tradicionales, frutas de temporada,
              lácteos, frutos secos y productos de apoyo repostero vinculados a distintas islas.
            </Text>
            <Text>
              Esta mirada permite que cada elaboración tenga una raíz concreta: una zona de cultivo, una tradición local, un
              productor cercano o un sabor reconocible de Canarias. Para el cliente, esto se traduce en postres y platos con
              identidad, pensados para disfrutar el territorio sin perder elegancia ni técnica.
            </Text>
          </div>

          <div className="mt-10 rounded-md border border-border bg-background/70 p-6">
            <h3 className="font-serif text-2xl text-foreground">Base dulce de la carta de postres</h3>
            <p className="mt-3 text-sm leading-[1.85] text-muted-foreground md:text-base">
              Estos diez ingredientes principales forman la base de nuestra carta de postres. Cada uno aporta una función:
              dulzor, acidez, untuosidad, aroma, textura o memoria canaria.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {dessertIngredients.map((ingredient) => (
                <article key={ingredient.name} className="rounded-md border border-border bg-card/60 p-5">
                  <h4 className="font-serif text-xl text-foreground">{ingredient.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ingredient.role}</p>
                </article>
              ))}
            </div>
          </div>

          <details className="group mt-8 rounded-md border border-border bg-background/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-serif text-xl text-foreground">
              Ver selección completa de ingredientes canarios
              <span className="text-sm text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="grid gap-px border-t border-border bg-border md:grid-cols-2">
              {km0Ingredients.map((ingredient) => (
                <div key={ingredient.name} className="bg-background p-5">
                  <p className="font-serif text-lg text-foreground">{ingredient.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{ingredient.origin}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section id="estructura-menus-inversion" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Categoría</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
            Estructura, menús e inversión inicial
          </h2>
          <div className="mt-6 space-y-5">
            <Text>
              Lava & Salitre se concibe como un restaurante íntimo de alta cocina canaria contemporánea, con una capacidad
              controlada y una estructura pensada para cuidar el ritmo del servicio. La propuesta busca equilibrar sala,
              cocina, bodega y experiencia para que cada pase llegue al cliente con precisión.
            </Text>
            <Text>
              El modelo prioriza empezar de forma inteligente: un local ya acondicionado mediante traspaso reduce el riesgo
              inicial y permite concentrar la inversión en diseño, cocina, vajilla, bodega, carta digital, web e imagen.
            </Text>
          </div>

          <details className="group mt-8 rounded-md border border-border bg-background/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-serif text-xl text-foreground">
              Ver estructura, menús e inversión
              <span className="text-sm text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="space-y-8 border-t border-border p-5 md:p-8">
              <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-md border border-border bg-card/60 p-6">
                  <h3 className="font-serif text-2xl text-foreground">Capacidad y servicio</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    El restaurante tendrá una capacidad aproximada de 30 a 35 comensales por servicio, con dos pases diarios:
                    uno al mediodía y otro por la noche. Así puede atender entre 60 y 70 comensales al día manteniendo una
                    atención personalizada, tiempos controlados y calidad en cada plato.
                  </p>
                </div>
                <div className="rounded-md border border-border bg-card/60 p-6">
                  <h3 className="font-serif text-2xl text-foreground">Diseño del espacio</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    El diseño combina paredes blancas, piedra volcánica negra, madera natural, cristaleras amplias y luz
                    cálida. La estética representa la unión entre lava y salitre: tierra volcánica, mar y una sala elegante
                    sin perder calidez.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-foreground">Zonas del restaurante</h3>
                <InfoList items={restaurantZones} />
              </div>

              <div>
                <h3 className="font-serif text-2xl text-foreground">Estructura de menús degustación</h3>
                <div className="mt-5 grid gap-4 lg:grid-cols-3">
                  {tastingMenuStructure.map((menu) => (
                    <article key={menu.name} className="rounded-md border border-border bg-card/60 p-5">
                      <h4 className="font-serif text-xl text-foreground">{menu.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{menu.concept}</p>
                      <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-accent">{menu.dishes}</p>
                      <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
                        <p>Sin maridaje: {menu.withoutPairing}</p>
                        <p>Con maridaje: {menu.withPairing}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-foreground">Opciones de inversión inicial</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {investmentOptions.map((item) => (
                    <article key={item.option} className="rounded-md border border-border bg-card/60 p-5">
                      <h4 className="font-serif text-xl text-foreground">{item.option}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                      <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-accent">{item.recommendation}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-foreground">Presupuesto aproximado</h3>
                <div className="mt-5 overflow-hidden rounded-md border border-border">
                  {investmentBudget.map((row) => (
                    <div
                      key={row.concept}
                      className="grid gap-3 border-b border-border bg-background p-5 last:border-b-0 md:grid-cols-[0.6fr_0.4fr]"
                    >
                      <p className="font-serif text-lg text-foreground">{row.concept}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{row.estimate}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  La inversión total recomendada se sitúa entre 126.000 EUR y 265.000 EUR, según el estado del local y el
                  equipamiento incluido. La opción más prudente al inicio sería un alquiler con traspaso.
                </p>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section id="concepto-gastronomico" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Categoría</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
            Concepto gastronómico: lava, salitre e identidad canaria
          </h2>
          <div className="mt-6 rounded-md border border-border bg-background/70 p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-accent">Definición del concepto</p>
            <h3 className="mt-3 font-serif text-2xl text-foreground">Lava & Salitre: tierra volcánica y Atlántico</h3>
            <div className="mt-5 space-y-5">
              <Text>
                Lava & Salitre es un restaurante inspirado en dos elementos muy presentes en Canarias: la lava volcánica y
                el salitre del Atlántico. El nombre representa la unión entre la tierra y el mar, dos partes fundamentales
                de la identidad canaria.
              </Text>
              <Text>
                El estilo del restaurante se define como una cocina canaria minimalista y de vanguardia, con platos de mar y
                tierra elaborados con productos locales, de temporada y, siempre que sea posible, de kilómetro cero.
              </Text>
              <Text>
                Su filosofía se basa en respetar el producto canario y presentarlo de una forma más actual, limpia y
                elegante, sin perder la esencia tradicional. Cada plato busca contar una parte del paisaje de las islas: el
                sabor salino del mar, la fuerza volcánica de la tierra y la riqueza de sus productos.
              </Text>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <Text>
              Lava & Salitre nace de dos fuerzas esenciales del paisaje canario: la lava volcánica y el salitre del
              Atlántico. La tierra y el mar se encuentran en una propuesta de cocina canaria minimalista, actual y elegante,
              donde cada plato busca expresar una parte de las islas.
            </Text>
            <Text>
              La filosofía del restaurante es respetar el producto local y presentarlo con una mirada más limpia y
              contemporánea. Pescados, algas, sal marina, gofio, papas, miel de palma, almendra, piña, plátano, leche de
              cabra, vino canario y carnes locales ayudan a construir un recorrido que representa a Canarias desde el sabor.
            </Text>
          </div>

          <details className="group mt-8 rounded-md border border-border bg-background/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-serif text-xl text-foreground">
              Ver productos e islas representadas
              <span className="text-sm text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="space-y-6 border-t border-border p-5 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                {islandProducts.map((item) => (
                  <article key={item.island} className="rounded-md border border-border bg-card/60 p-5">
                    <h3 className="font-serif text-2xl text-foreground">{item.island}</h3>
                    <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-accent">Productos</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.products}</p>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-accent">Platos</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.dishes}</p>
                  </article>
                ))}
              </div>
              <Text>
                El menú funciona como un mapa gastronómico: cada isla aporta ingredientes, memoria y carácter. La intención
                no es copiar la cocina tradicional, sino mantener su esencia y llevarla a un lenguaje visual más cuidado,
                técnico y contemporáneo.
              </Text>

              <div className="space-y-5 border-t border-border/60 pt-7">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-accent">Tradición e innovación</p>
                  <h3 className="mt-3 font-serif text-2xl text-foreground">
                    Cocina canaria transformada con mirada vanguardista
                  </h3>
                </div>
                <Text>
                  En Lava & Salitre, la tradición canaria se transforma en una propuesta vanguardista, minimalista y con
                  vocación de alta cocina. El restaurante se inspira en la fuerza de la lava y en el carácter marino del
                  salitre, uniendo tierra y mar en cada plato.
                </Text>
                <Text>
                  La cocina trabaja productos locales como pescado fresco, gofio, papas antiguas, quesos canarios, miel de
                  palma y frutas de las islas, aplicando técnicas actuales como espumas, geles, aires, texturas crujientes,
                  cocciones precisas y emplatados limpios.
                </Text>
                <Text>
                  La idea es respetar el sabor de Canarias, pero presentarlo de una forma más elegante, creativa y
                  sorprendente, propia de una experiencia gastronómica cuidada de principio a fin.
                </Text>
              </div>

              <div className="space-y-6 border-t border-border/60 pt-7">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-accent">Identidad visual</p>
                  <h3 className="mt-3 font-serif text-2xl text-foreground">Logotipo de Lava & Salitre</h3>
                </div>

                <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
                  <figure className="overflow-hidden rounded-md border border-border bg-black">
                    <img
                      src="/galeria/logo-version-dorada-transparente.png"
                      alt="Logotipo principal de Lava & Salitre"
                      loading="lazy"
                      className="h-full min-h-64 w-full object-contain"
                    />
                  </figure>
                  <div className="space-y-4">
                    <Text>
                      La identidad visual de Lava & Salitre resume el mismo concepto que sostiene la cocina del restaurante:
                      la fuerza de la tierra volcánica y la presencia constante del mar. El símbolo superior representa una
                      montaña o formación volcánica atravesada por un recorrido orgánico que puede leerse como lava, camino,
                      costa o corriente marina.
                    </Text>
                    <Text>
                      El dorado aporta calidez, valor gastronómico y una sensación premium sin alejarse de la naturaleza del
                      proyecto. El negro conecta con la piedra volcánica y la elegancia de la sala; el blanco permite
                      versiones más limpias y luminosas para soportes claros.
                    </Text>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-md border border-border bg-card/60 p-5">
                    <h4 className="font-serif text-xl text-foreground">Isotipo</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Es la parte simbólica: la montaña volcánica, el trazo sinuoso y los puntos que evocan salitre, arena,
                      espuma o mineralidad. Puede funcionar como recurso gráfico, aunque al ser una marca nueva conviene
                      acompañarlo del nombre para que el cliente lo asocie rápidamente con el restaurante.
                    </p>
                  </div>
                  <div className="rounded-md border border-border bg-card/60 p-5">
                    <h4 className="font-serif text-xl text-foreground">Logotipo</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Es la composición tipográfica de Lava & Salitre, acompañada por la palabra Restaurante. La elección de
                      una tipografía serif transmite oficio, pausa y una experiencia gastronómica cuidada, más cercana a una
                      casa de autor que a una marca informal.
                    </p>
                  </div>
                  <div className="rounded-md border border-border bg-card/60 p-5">
                    <h4 className="font-serif text-xl text-foreground">Claim</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Tierra y Mar funciona como eslogan o claim porque condensa la promesa del restaurante en una idea
                      breve, clara y memorable. Explica la dualidad de la carta: producto terrestre, paisaje volcánico,
                      pescado, sal marina y Atlántico.
                    </p>
                  </div>
                  <div className="rounded-md border border-border bg-card/60 p-5">
                    <h4 className="font-serif text-xl text-foreground">Imagotipo</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      La marca se entiende como un imagotipo porque combina un símbolo reconocible con un texto legible, y
                      ambos pueden separarse en ciertos usos. Para una empresa joven es más recomendable utilizar el conjunto
                      completo, ya que un isotipo aislado suele funcionar mejor cuando la marca lleva años en el mercado y el
                      público ya la reconoce sin necesidad de leer el nombre.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-xl text-foreground">Versiones del logotipo</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Las distintas versiones permiten mantener una identidad coherente en sala, carta, web, redes sociales,
                    papelería, señalética y materiales promocionales, adaptándose a fondos oscuros, claros, fotográficos o
                    monocromos sin perder reconocimiento.
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {logoVersions.map((version) => (
                      <figure key={version.src} className="overflow-hidden rounded-md border border-border bg-background">
                        <div className="flex h-40 items-center justify-center bg-stone-950 p-4">
                          <img
                            src={version.src}
                            alt={version.alt}
                            loading="lazy"
                            className="max-h-full w-full object-contain"
                          />
                        </div>
                        <figcaption className="p-4">
                          <p className="font-serif text-lg text-foreground">{version.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{version.description}</p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>

      <section id="tecnologias-gastronomicas" className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Categoría</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">Público objetivo</h2>
          <div className="mt-6 space-y-5">
            <Text>
              Lava & Salitre se dirige a un público adulto, curioso y gastronómico, que entiende la visita al restaurante
              como una experiencia completa. Su cliente principal valora el producto canario, la técnica, el servicio, el
              entorno, el maridaje y la historia que conecta cada plato con el paisaje de Agaete y las islas.
            </Text>
            <Text>
              La propuesta combina cocina canaria vanguardista, productos del mar y de la tierra, kilómetro cero siempre que
              sea posible, y un formato de menú degustación pensado para celebraciones, escapadas gastronómicas, visitantes de
              otras islas, turistas gastronómicos, gourmets y clientes interesados en sostenibilidad.
            </Text>
          </div>
          <details className="group mt-8 rounded-md border border-border bg-background/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-serif text-xl text-foreground">
              Ver análisis completo del público objetivo
              <span className="text-sm text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="border-t border-border">

      <ContentSection title="Introducción al público objetivo">
        <Text>
          El restaurante Lava & Salitre se plantea como un proyecto gastronómico situado en el Puerto de las Nieves, en
          Agaete, Gran Canaria. Su concepto parte de una idea muy clara: representar la unión entre el mar y la tierra
          canaria a través de una cocina actual, creativa y cuidada. No se trata de abrir un restaurante más, sino de crear
          un espacio donde el cliente pueda vivir una experiencia ligada al paisaje, al producto local y a la identidad de
          las islas.
        </Text>
        <Text>
          El público objetivo no será una persona que busca simplemente comer fuera de casa. La propuesta estará pensada
          para clientes que valoran el producto, la presentación, el servicio, el ambiente y la historia que hay detrás de
          cada plato. Al ser un restaurante de cocina vanguardista y de menú degustación, se dirige a un perfil que entiende
          la gastronomía como una experiencia completa y no solo como una comida abundante.
        </Text>
        <Text>
          Lava & Salitre se apoyará en productos canarios de mar y tierra, priorizando el kilómetro cero siempre que sea
          posible. Esta idea permite conectar el restaurante con pescadores, agricultores, ganaderos, bodegas y pequeños
          productores del entorno. La cocina tendrá una base canaria, pero con una presentación más moderna, cercana al
          estilo de los restaurantes gastronómicos actuales.
        </Text>
      </ContentSection>

      <ContentSection title="Ubicación y enclave propuesto">
        <Text>
          Para el desarrollo del proyecto se elige una ubicación realista dentro de una calle real del Puerto de las Nieves.
          La localización escogida sería la zona de la Avenida de los Poetas, uno de los espacios más relacionados con el
          paseo marítimo, la restauración y el movimiento de visitantes en Agaete.
        </Text>
        <InfoList items={location} />
        <Text>
          Para ubicar el restaurante en el trabajo y en una búsqueda de referencia, se puede utilizar la dirección de Avenida
          de los Poetas, en el Puerto de las Nieves. Esta zona permite situar Lava & Salitre de manera clara dentro del
          municipio y facilita su localización en un mapa, ya que se trata de un entorno real y reconocible de Agaete.
        </Text>
        <Text>
          La elección de Agaete tiene mucho sentido para el concepto del restaurante. El Puerto de las Nieves mantiene una
          relación directa con el mar, la pesca, el salitre y la vida marinera. Al mismo tiempo, el municipio está rodeado de
          riscos, barrancos y paisaje volcánico, lo que refuerza la parte de “lava” y de producto de la tierra. Esta mezcla
          entre costa y paisaje volcánico encaja de forma natural con el nombre y la filosofía del restaurante.
        </Text>
        <Text>
          Además, la conexión marítima entre Agaete y Tenerife amplía el público potencial. Según Fred. Olsen Express, la
          ruta directa entre Gran Canaria y Tenerife tiene una duración aproximada de 80 minutos. Esto permite plantear el
          restaurante no solo para clientes de Gran Canaria, sino también para visitantes de Tenerife que buscan una escapada
          gastronómica diferente. También se puede tener en cuenta el potencial de otras islas como La Palma y El Hierro, por
          su cercanía dentro del contexto canario y por su fuerte relación con el producto volcánico, agrícola y marinero.
        </Text>
        <ImageGrid photos={locationPhotos} />
        <Text>
          Foto 1. Vista exterior de Lava & Salitre en el Puerto de las Nieves. La imagen exterior representa un edificio
          moderno, abierto al paisaje y conectado con el mar. La combinación de líneas limpias, tonos claros y piedra
          volcánica ayuda a reflejar la identidad del restaurante. La terraza y los grandes ventanales permitirían aprovechar
          la luz natural, las vistas al puerto y la sensación de calma que ofrece el entorno.
        </Text>
        <Text>
          Foto 2. Vista interior del comedor y zona de maridaje. El interior se plantea como un comedor elegante, cálido y
          tranquilo. La madera aporta cercanía, la piedra volcánica conecta con la tierra y los ventanales mantienen presente
          el mar durante toda la experiencia. La presencia de una zona de vinos refuerza la importancia del maridaje dentro
          de la propuesta gastronómica.
        </Text>
      </ContentSection>

      <ContentSection title="Contexto gastronómico de Canarias">
        <Text>
          Canarias vive un momento interesante dentro de la gastronomía. Cada vez hay más restaurantes reconocidos por guías
          como MICHELIN y Repsol, y esto demuestra que existe un público que busca experiencias distintas a la restauración
          tradicional. Este tipo de cliente no solo valora comer bien, sino también el concepto del restaurante, la creatividad
          del chef, la bodega, el servicio y la relación con el territorio.
        </Text>
        <Text>
          La Guía MICHELIN incluye actualmente una selección amplia de restaurantes en Canarias, con 54 establecimientos
          recogidos en su guía para las islas. Este dato refuerza la idea de que el archipiélago cuenta con una oferta
          gastronómica cada vez más visible y atractiva para el público que consulta guías especializadas.
        </Text>
        <Text>
          La Guía Repsol también refleja este crecimiento gastronómico. En su edición 2026 se mantiene un universo amplio de
          restaurantes con Soles y restaurantes recomendados, y Canarias aparece de forma destacada en distintas publicaciones
          de la guía, especialmente en zonas como Tenerife. Todo esto ayuda a crear un público más acostumbrado a buscar menús
          degustación, cocina de autor, producto local y propuestas con personalidad.
        </Text>
        <Text>
          Este contexto beneficia a un restaurante como Lava & Salitre. El proyecto se dirige precisamente a ese cliente que
          quiere descubrir una cocina canaria diferente, más actual y más cuidada, pero sin perder la esencia del territorio.
          La propuesta no pretende competir con la cocina tradicional de la zona, sino ofrecer otra lectura: más gastronómica,
          más visual y más enfocada a la experiencia.
        </Text>
      </ContentSection>

      <ContentSection title="Segmentos del público objetivo">
        <figure className="overflow-hidden rounded-md border border-border bg-background">
          <img
            src="/galeria/equipo.png"
            alt="Equipo de Lava & Salitre frente al restaurante"
            loading="lazy"
            className="h-[260px] w-full object-cover md:h-[360px]"
          />
          <figcaption className="px-5 py-4 text-sm italic leading-relaxed text-muted-foreground">
            Un equipo cercano, profesional y conectado con la identidad del restaurante.
          </figcaption>
        </figure>
        <div className="grid gap-6 md:grid-cols-2">
          {segments.map((segment) => (
            <article key={segment.title} className="rounded-md border border-border bg-background/70 p-6">
              <h3 className="font-serif text-2xl text-foreground">{segment.title}</h3>
              <div className="mt-4 space-y-4">
                {segment.paragraphs.map((paragraph) => (
                  <Text key={paragraph}>{paragraph}</Text>
                ))}
              </div>
            </article>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Importancia del maridaje">
        <Text>
          El maridaje será uno de los atractivos más importantes de Lava & Salitre. Al ofrecer menús degustación con opción
          de maridaje, el restaurante podrá captar mejor a clientes que buscan una experiencia completa. Muchos turistas
          gastronómicos y amantes de la alta cocina no solo quieren probar los platos, sino también descubrir vinos que
          acompañen y refuercen el recorrido del menú.
        </Text>
        <Text>
          El maridaje con vinos canarios permitirá dar protagonismo a bodegas de distintas islas y conectar cada plato con el
          territorio. Canarias cuenta con vinos muy diferentes por sus suelos volcánicos, microclimas y variedades de uva, por
          lo que el maridaje puede convertirse en una parte muy interesante de la experiencia.
        </Text>
        <Text>
          Además, ofrecer el menú con o sin maridaje permite adaptarse a distintos presupuestos. El cliente que quiera vivir
          la experiencia completa podrá elegir el maridaje, mientras que otro cliente podrá disfrutar únicamente del menú
          degustación. Esta flexibilidad hace que la propuesta sea más atractiva sin perder su carácter gastronómico.
        </Text>
      </ContentSection>

      <ContentSection title="Intolerancias y necesidades alimentarias">
        <Text>
          Lava & Salitre respetará a las personas con intolerancias alimentarias o necesidades concretas. El restaurante
          deberá informar correctamente sobre alérgenos y tratar este tema con seriedad. Siempre que sea posible, se intentará
          adaptar el menú si el cliente avisa con antelación.
        </Text>
        <Text>
          Aun así, es importante aclarar que el restaurante no estará pensado principalmente para este tipo de público. La
          cocina vanguardista y el formato de menú degustación pueden dificultar algunas adaptaciones completas, ya que muchas
          elaboraciones incluyen fondos, emulsiones, geles, fermentaciones, espumas, reducciones o técnicas donde varios
          ingredientes forman parte de una misma preparación.
        </Text>
        <Text>
          Por este motivo, las adaptaciones se realizarán de forma puntual y responsable, pero sin comprometer la coherencia
          del concepto gastronómico. El objetivo será respetar al cliente y sus necesidades, pero también mantener la identidad
          original del menú.
        </Text>
      </ContentSection>

      <ContentSection title="Perfil del cliente ideal">
        <Text>
          El cliente ideal de Lava & Salitre será una persona adulta, aproximadamente entre 30 y 60 años, con especial
          presencia entre los 35 y 55 años. Es un perfil con interés por la gastronomía, el producto local, las experiencias
          diferentes y los restaurantes con personalidad.
        </Text>
        <Text>
          No será un cliente que busca comer rápido o encontrar una opción económica. Será alguien que entiende que un menú
          degustación tiene un valor añadido por el producto, la técnica, el servicio, la presentación y el conjunto de la
          experiencia. Valora más la calidad que la cantidad.
        </Text>
        <Text>
          Este cliente puede ser residente en Gran Canaria, visitante de Tenerife, turista nacional, turista extranjero o una
          persona de otra isla que busca una experiencia concreta. Lo importante no es tanto su lugar de origen, sino su manera
          de entender la gastronomía.
        </Text>
        <div className="mt-8 overflow-hidden rounded-md border border-border">
          {idealClient.map((row) => (
            <div key={row.aspect} className="grid gap-3 border-b border-border bg-background p-5 last:border-b-0 md:grid-cols-[0.35fr_0.65fr]">
              <p className="font-serif text-lg text-foreground">{row.aspect}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{row.description}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Expectativas gastronómicas del cliente">
        <figure className="overflow-hidden rounded-md border border-border bg-background">
          <img
            src="/galeria/restaurante-clientes.png"
            alt="Clientes comiendo en el salón superior de Lava & Salitre"
            loading="lazy"
            className="h-[280px] w-full object-cover md:h-[460px]"
          />
          <figcaption className="px-5 py-4 text-sm italic leading-relaxed text-muted-foreground">
            Clientes comiendo en el salón superior del restaurante.
          </figcaption>
        </figure>
        <Text>
          El cliente que acuda a Lava & Salitre esperará una experiencia completa. No buscará una carta amplia ni platos muy
          abundantes, sino un menú trabajado, con varios pases y una historia común. Esperará que el nombre del restaurante se
          vea reflejado en la comida, en el ambiente, en la decoración y en la forma de presentar los platos.
        </Text>
        <InfoList items={expectations} />
        <Text>
          La experiencia deberá ser elegante, pero no distante. El cliente debe sentirse atendido y cómodo, sin que el
          restaurante pierda naturalidad. La alta cocina no tiene por qué ser fría; en Lava & Salitre debe sentirse cercana,
          canaria y con personalidad propia.
        </Text>
      </ContentSection>

      <ContentSection title="Conclusión">
        <Text>
          En conclusión, Lava & Salitre se dirigirá a un público adulto, con interés por la gastronomía, el producto local y
          las experiencias diferentes. Su cliente principal será una persona de nivel adquisitivo medio-alto, que valora la
          cocina canaria actual, los menús degustación y una propuesta con identidad.
        </Text>
        <Text>
          La ubicación en el Puerto de las Nieves, en Agaete, será una ventaja importante por su conexión con el mar, el
          paisaje volcánico y la ruta marítima con Tenerife. Este enclave permite ampliar el público potencial y reforzar la
          idea de un restaurante canario conectado con otras islas.
        </Text>
        <Text>
          El crecimiento de restaurantes canarios reconocidos en guías como MICHELIN y Repsol demuestra que existe un público
          que busca experiencias gastronómicas de más nivel. Lava & Salitre se apoyará en ese interés, ofreciendo una cocina
          vanguardista, producto de kilómetro cero, maridaje con vinos canarios y una experiencia cuidada desde la llegada al
          restaurante hasta el último pase del menú.
        </Text>
        <Text>
          Aunque el restaurante respetará las intolerancias y necesidades alimentarias, su propuesta principal estará pensada
          para clientes que puedan disfrutar del menú degustación en su formato original o con pequeñas adaptaciones avisadas
          previamente. De esta forma, se protege la coherencia del concepto sin dejar de actuar con responsabilidad hacia el
          cliente.
        </Text>
        <Text>
          Lava & Salitre no será solo un restaurante para comer. Será un espacio donde el cliente pueda descubrir Canarias
          desde una mirada más moderna, gastronómica y personal, uniendo el paisaje, el producto, el vino, el mar y la tierra
          en una misma experiencia.
        </Text>
      </ContentSection>

      <ContentSection title="Fuentes consultadas">
        <div className="grid gap-3">
          {sources.map((source) => (
            <a
              key={source.href}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="break-words rounded-md border border-border bg-background/70 p-4 text-sm leading-relaxed text-muted-foreground transition-colors hover:text-foreground"
            >
              {source.label}: {source.href}
            </a>
          ))}
        </div>
      </ContentSection>
            </div>
          </details>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Categoría</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">Tecnologías gastronómicas</h2>
          <div className="mt-6 space-y-5">
            <Text>
              Lava & Salitre combina tradición canaria con técnicas modernas, siempre desde el respeto por el producto. La
              tecnología no se plantea como un artificio, sino como una herramienta para mejorar texturas, presentación,
              lectura del plato y experiencia del cliente sin esconder el sabor original de los ingredientes.
            </Text>
            <Text>
              Deconstrucciones, espumas, gelificaciones y esferificaciones puntuales permiten mostrar la cocina canaria desde
              una visión más actual. El nitrógeno líquido se reserva para momentos concretos, especialmente en postres o
              pequeños bocados, y la experiencia de carta combina soporte físico elegante con información digital útil.
            </Text>
          </div>

          <details className="group mt-8 rounded-md border border-border bg-background/70">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-serif text-xl text-foreground">
              Ver tecnologías y aplicaciones
              <span className="text-sm text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <div className="space-y-8 border-t border-border p-5 md:p-8">
              <div>
                <h3 className="font-serif text-2xl text-foreground">Técnicas culinarias</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {culinaryTechnologies.map((technology) => (
                    <article key={technology.name} className="rounded-md border border-border bg-card/60 p-5">
                      <h4 className="font-serif text-xl text-foreground">{technology.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{technology.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-foreground">Tecnologías para la carta y la experiencia</h3>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {digitalTechnologies.map((technology) => (
                    <article key={technology.name} className="rounded-md border border-border bg-card/60 p-5">
                      <h4 className="font-serif text-xl text-foreground">{technology.name}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{technology.description}</p>
                    </article>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-foreground">Resumen de uso</h3>
                <div className="mt-5 overflow-hidden rounded-md border border-border">
                  {technologySummary.map((row) => (
                    <div
                      key={row.technology}
                      className="grid gap-3 border-b border-border bg-background p-5 last:border-b-0 md:grid-cols-[0.25fr_0.35fr_0.4fr]"
                    >
                      <p className="font-serif text-lg text-foreground">{row.technology}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{row.use}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">{row.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}

function ContentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
        <h2 className="font-serif text-3xl text-foreground md:text-4xl">{title}</h2>
        <div className="mt-7 space-y-5">{children}</div>
      </div>
    </section>
  );
}

function Text({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-[1.85] text-muted-foreground md:text-base">{children}</p>;
}

function CeoText({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-[1.7] text-muted-foreground">{children}</p>;
}

function InfoList({ items }: { items: readonly string[] }) {
  return (
    <ul className="grid gap-3 rounded-md border border-border bg-background/70 p-5">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ImageGrid({
  photos,
}: {
  photos: readonly { src: string; alt: string; title: string }[];
}) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {photos.map((photo) => (
        <figure key={photo.src} className="overflow-hidden rounded-md border border-border bg-background">
          <img src={photo.src} alt={photo.alt} loading="lazy" className="h-72 w-full object-cover" />
          <figcaption className="px-5 py-4 text-sm italic leading-relaxed text-muted-foreground">
            {photo.title}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
