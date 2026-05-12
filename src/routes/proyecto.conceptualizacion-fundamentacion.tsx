import { createFileRoute } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";

export const Route = createFileRoute("/proyecto/conceptualizacion-fundamentacion")({
  component: ConceptualizacionFundamentacion,
  head: () => ({
    meta: [
      { title: "Conceptualización y fundamentación - Lava & Salitre" },
      {
        name: "description",
        content:
          "Conceptualización y fundamentación del restaurante Lava & Salitre a partir del contexto gastronómico canario.",
      },
    ],
  }),
});

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
  "Bienmesabe en texturas",
  "Príncipe Alberto volcánico",
  "Quesillo líquido con caramelo salino",
  "Frangollo cremoso con aire de canela",
  "Trucha de batata deconstruida",
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
    description:
      "Dorada sobre fondo oscuro, pensada para soportes elegantes, presencia digital y piezas de mayor impacto.",
  },
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo dorado de Lava & Salitre con fondo transparente",
    title: "Versión dorada adaptable",
    description:
      "Útil para aplicaciones sobre fotografía, materiales corporativos y fondos neutros donde el oro mantiene protagonismo.",
  },
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo blanco de Lava & Salitre sobre fondo negro",
    title: "Versión blanca",
    description:
      "Funciona en fondos oscuros cuando se busca máxima limpieza, contraste y lectura inmediata.",
  },
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo dorado y negro de Lava & Salitre sobre fondo blanco",
    title: "Versión clara premium",
    description:
      "Adecuada para papelería, cartas, presentaciones y soportes impresos con fondo claro.",
  },
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo negro de Lava & Salitre sobre fondo blanco",
    title: "Versión monocroma",
    description:
      "Pensada para usos sobrios, documentación, sellos, grabados o aplicaciones donde el color no sea posible.",
  },
  {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo de Lava & Salitre con claim Tierra y Mar centrado",
    title: "Versión con claim centrado",
    description:
      "Refuerza el mensaje Tierra y Mar en piezas donde la identidad conceptual debe quedar especialmente clara.",
  },
] as const;

function ConceptualizacionFundamentacion() {
  return (
    <div className="paper">
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <SectionTitle
          eyebrow="Proyecto"
          title="Conceptualización y fundamentación"
          subtitle="Definición del concepto gastronómico de Lava & Salitre como restaurante de postres y platos vanguardistas basado en ingredientes de kilómetro cero de Canarias."
        />
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Informe conceptual</p>
          <div className="mt-7 space-y-5">
            <p className="text-sm leading-[1.85] text-muted-foreground md:text-base">
              Este apartado presenta la base conceptual del restaurante desde una mirada clara para
              el cliente: partir de la tradición gastronómica canaria, reconocer sus sabores más
              característicos y transformarlos en una experiencia contemporánea, cuidada y coherente
              con el territorio.
            </p>
            <p className="text-sm leading-[1.85] text-muted-foreground md:text-base">
              La propuesta no busca sustituir la cocina tradicional, sino darle una lectura más
              actual. Lava & Salitre toma como punto de partida productos, recetas y memorias
              reconocibles de Canarias para construir platos y postres con técnica, ligereza,
              contraste de texturas y presentación de alta cocina.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Subapartado</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
            Contexto gastronómico canario: platos y postres
          </h2>
          <div className="mt-6 space-y-5">
            <p className="text-sm leading-[1.85] text-muted-foreground md:text-base">
              La repostería canaria forma parte de la memoria gastronómica de las islas. Sus postres
              se apoyan en ingredientes sencillos, sabores reconocibles y elaboraciones ligadas al
              hogar, a la celebración y al producto local. Para un restaurante como Lava & Salitre,
              este contexto es valioso porque permite construir una cocina moderna sin perder una
              raíz comprensible para el cliente.
            </p>
            <p className="text-sm leading-[1.85] text-muted-foreground md:text-base">
              En la carta, esta tradición puede convivir con platos salinos, marinos y volcánicos.
              El objetivo es que cada pase mantenga una conexión con Canarias, ya sea por el
              ingrediente, por la técnica reinterpretada o por la memoria del sabor que el cliente
              reconoce en una forma nueva.
            </p>
          </div>

          <div className="mt-10 rounded-md border border-border bg-background/70 p-6">
            <h3 className="font-serif text-2xl text-foreground">
              Postres tradicionales como punto de partida
            </h3>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {traditionalDesserts.map((dessert) => (
                <article
                  key={dessert.name}
                  className="rounded-md border border-border bg-card/60 p-5"
                >
                  <h4 className="font-serif text-xl text-foreground">{dessert.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {dessert.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-md border border-border bg-background/70 p-6">
            <h3 className="font-serif text-2xl text-foreground">
              Reinterpretación con cocina de vanguardia
            </h3>
            <p className="mt-4 text-sm leading-[1.85] text-muted-foreground md:text-base">
              Reinterpretar un plato o un postre no significa cambiarlo por completo. La clave está
              en mantener su sabor principal y presentarlo de una forma más actual, con más
              ligereza, mejor lectura visual y mayor contraste de texturas. Esta línea permite que
              la tradición y la innovación convivan en una misma experiencia.
            </p>
            <ul className="mt-5 grid gap-3 md:grid-cols-2">
              {avantGardeResources.map((resource) => (
                <li
                  key={resource}
                  className="rounded-md border border-border bg-card/60 p-4 text-sm leading-relaxed text-muted-foreground"
                >
                  {resource}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 rounded-md border border-border bg-background/70 p-6">
            <h3 className="font-serif text-2xl text-foreground">Posibles líneas creativas</h3>
            <p className="mt-4 text-sm leading-[1.85] text-muted-foreground md:text-base">
              Como ejemplo de dirección gastronómica, el restaurante puede trabajar postres
              reconocibles desde una lectura más contemporánea. Estas ideas muestran cómo un sabor
              tradicional puede transformarse en un pase más técnico, visual y adaptado a un menú
              degustación.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {reinterpretationExamples.map((example) => (
                <span
                  key={example}
                  className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-muted-foreground"
                >
                  {example}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Subapartado</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
            Ingredientes km 0
          </h2>
          <div className="mt-6 space-y-5">
            <Text>
              En Lava & Salitre, la carta nace de una investigación sobre ingredientes canarios
              capaces de contar el paisaje desde el plato. La selección combina producto fresco,
              elaboraciones tradicionales, frutas de temporada, lácteos, frutos secos y productos
              de apoyo repostero vinculados a distintas islas.
            </Text>
            <Text>
              Esta mirada permite que cada elaboración tenga una raíz concreta: una zona de
              cultivo, una tradición local, un productor cercano o un sabor reconocible de
              Canarias. Para el cliente, esto se traduce en postres y platos con identidad,
              pensados para disfrutar el territorio sin perder elegancia ni técnica.
            </Text>
          </div>

          <div className="mt-10 rounded-md border border-border bg-background/70 p-6">
            <h3 className="font-serif text-2xl text-foreground">
              Base dulce de la carta de postres
            </h3>
            <p className="mt-3 text-sm leading-[1.85] text-muted-foreground md:text-base">
              Estos diez ingredientes principales forman la base de nuestra carta de postres. Cada
              uno aporta una función: dulzor, acidez, untuosidad, aroma, textura o memoria canaria.
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {dessertIngredients.map((ingredient) => (
                <article
                  key={ingredient.name}
                  className="rounded-md border border-border bg-card/60 p-5"
                >
                  <h4 className="font-serif text-xl text-foreground">{ingredient.name}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {ingredient.role}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-md border border-border bg-background/70">
            <h3 className="px-5 py-4 font-serif text-xl text-foreground">
              Selección completa de ingredientes canarios
            </h3>
            <div className="grid gap-px border-t border-border bg-border md:grid-cols-2">
              {km0Ingredients.map((ingredient) => (
                <div key={ingredient.name} className="bg-background p-5">
                  <p className="font-serif text-lg text-foreground">{ingredient.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {ingredient.origin}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="text-[10px] uppercase tracking-[0.35em] text-accent">Subapartado</p>
          <h2 className="mt-4 font-serif text-3xl text-foreground md:text-4xl">
            Concepto gastronómico
          </h2>
          <div className="mt-6 rounded-md border border-border bg-background/70 p-6">
            <p className="text-[10px] uppercase tracking-[0.28em] text-accent">
              Definición del concepto
            </p>
            <h3 className="mt-3 font-serif text-2xl text-foreground">
              Lava & Salitre: tierra volcánica y Atlántico
            </h3>
            <div className="mt-5 space-y-5">
              <Text>
                Lava & Salitre es un restaurante inspirado en dos elementos muy presentes en
                Canarias: la lava volcánica y el salitre del Atlántico. El nombre representa la
                unión entre la tierra y el mar, dos partes fundamentales de la identidad canaria.
              </Text>
              <Text>
                El estilo del restaurante se define como una cocina canaria minimalista y de
                vanguardia, con platos de mar y tierra elaborados con productos locales, de
                temporada y, siempre que sea posible, de kilómetro cero.
              </Text>
              <Text>
                Su filosofía se basa en respetar el producto canario y presentarlo de una forma más
                actual, limpia y elegante, sin perder la esencia tradicional. Cada plato busca contar
                una parte del paisaje de las islas: el sabor salino del mar, la fuerza volcánica de
                la tierra y la riqueza de sus productos.
              </Text>
            </div>
          </div>

          <div className="mt-8 space-y-5">
            <Text>
              Lava & Salitre nace de dos fuerzas esenciales del paisaje canario: la lava volcánica y
              el salitre del Atlántico. La tierra y el mar se encuentran en una propuesta de cocina
              canaria minimalista, actual y elegante, donde cada plato busca expresar una parte de
              las islas.
            </Text>
            <Text>
              La filosofía del restaurante es respetar el producto local y presentarlo con una
              mirada más limpia y contemporánea. Pescados, algas, sal marina, gofio, papas, miel de
              palma, almendra, piña, plátano, leche de cabra, vino canario y carnes locales ayudan a
              construir un recorrido que representa a Canarias desde el sabor.
            </Text>
          </div>

          <div className="mt-8 rounded-md border border-border bg-background/70">
            <h3 className="px-5 py-4 font-serif text-xl text-foreground">
              Productos e islas representadas
            </h3>
            <div className="space-y-6 border-t border-border p-5 md:p-8">
              <div className="grid gap-5 md:grid-cols-2">
                {islandProducts.map((item) => (
                  <article
                    key={item.island}
                    className="rounded-md border border-border bg-card/60 p-5"
                  >
                    <h3 className="font-serif text-2xl text-foreground">{item.island}</h3>
                    <p className="mt-3 text-[10px] uppercase tracking-[0.28em] text-accent">
                      Productos
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.products}
                    </p>
                    <p className="mt-4 text-[10px] uppercase tracking-[0.28em] text-accent">
                      Platos
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.dishes}
                    </p>
                  </article>
                ))}
              </div>
              <Text>
                El menú funciona como un mapa gastronómico: cada isla aporta ingredientes, memoria y
                carácter. La intención no es copiar la cocina tradicional, sino mantener su esencia
                y llevarla a un lenguaje visual más cuidado, técnico y contemporáneo.
              </Text>

              <div className="space-y-5 border-t border-border/60 pt-7">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-accent">
                    Tradición e innovación
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-foreground">
                    Cocina canaria transformada con mirada vanguardista
                  </h3>
                </div>
                <Text>
                  En Lava & Salitre, la tradición canaria se transforma en una propuesta
                  vanguardista, minimalista y con vocación de alta cocina. El restaurante se inspira
                  en la fuerza de la lava y en el carácter marino del salitre, uniendo tierra y mar
                  en cada plato.
                </Text>
                <Text>
                  La cocina trabaja productos locales como pescado fresco, gofio, papas antiguas,
                  quesos canarios, miel de palma y frutas de las islas, aplicando técnicas actuales
                  como espumas, geles, aires, texturas crujientes, cocciones precisas y emplatados
                  limpios.
                </Text>
                <Text>
                  La idea es respetar el sabor de Canarias, pero presentarlo de una forma más
                  elegante, creativa y sorprendente, propia de una experiencia gastronómica cuidada
                  de principio a fin.
                </Text>
              </div>

              <div className="space-y-6 border-t border-border/60 pt-7">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-accent">
                    Identidad visual
                  </p>
                  <h3 className="mt-3 font-serif text-2xl text-foreground">
                    Logotipo de Lava & Salitre
                  </h3>
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
                      La identidad visual de Lava & Salitre resume el mismo concepto que sostiene la
                      cocina del restaurante: la fuerza de la tierra volcánica y la presencia
                      constante del mar. El símbolo superior representa una montaña o formación
                      volcánica atravesada por un recorrido orgánico que puede leerse como lava,
                      camino, costa o corriente marina.
                    </Text>
                    <Text>
                      El dorado aporta calidez, valor gastronómico y una sensación premium sin
                      alejarse de la naturaleza del proyecto. El negro conecta con la piedra
                      volcánica y la elegancia de la sala; el blanco permite versiones más limpias y
                      luminosas para soportes claros.
                    </Text>
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="rounded-md border border-border bg-card/60 p-5">
                    <h4 className="font-serif text-xl text-foreground">Isotipo</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Es la parte simbólica: la montaña volcánica, el trazo sinuoso y los puntos que
                      evocan salitre, arena, espuma o mineralidad. Puede funcionar como recurso
                      gráfico, aunque al ser una marca nueva conviene acompañarlo del nombre para que
                      el cliente lo asocie rápidamente con el restaurante.
                    </p>
                  </div>
                  <div className="rounded-md border border-border bg-card/60 p-5">
                    <h4 className="font-serif text-xl text-foreground">Logotipo</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Es la composición tipográfica de Lava & Salitre, acompañada por la palabra
                      Restaurante. La elección de una tipografía serif transmite oficio, pausa y una
                      experiencia gastronómica cuidada, más cercana a una casa de autor que a una
                      marca informal.
                    </p>
                  </div>
                  <div className="rounded-md border border-border bg-card/60 p-5">
                    <h4 className="font-serif text-xl text-foreground">Claim</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Tierra y Mar funciona como eslogan o claim porque condensa la promesa del
                      restaurante en una idea breve, clara y memorable. Explica la dualidad de la
                      carta: producto terrestre, paisaje volcánico, pescado, sal marina y Atlántico.
                    </p>
                  </div>
                  <div className="rounded-md border border-border bg-card/60 p-5">
                    <h4 className="font-serif text-xl text-foreground">Imagotipo</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      La marca se entiende como un imagotipo porque combina un símbolo reconocible
                      con un texto legible, y ambos pueden separarse en ciertos usos. Para una
                      empresa joven es más recomendable utilizar el conjunto completo, ya que un
                      isotipo aislado suele funcionar mejor cuando la marca lleva años en el mercado
                      y el público ya la reconoce sin necesidad de leer el nombre.
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-serif text-xl text-foreground">Versiones del logotipo</h4>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    Las distintas versiones permiten mantener una identidad coherente en sala,
                    carta, web, redes sociales, papelería, señalética y materiales promocionales,
                    adaptándose a fondos oscuros, claros, fotográficos o monocromos sin perder
                    reconocimiento.
                  </p>
                  <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {logoVersions.map((version) => (
                      <figure
                        key={version.src}
                        className="overflow-hidden rounded-md border border-border bg-background"
                      >
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
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {version.description}
                          </p>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Text({ children }: { children: React.ReactNode }) {
  return <p className="text-sm leading-[1.85] text-muted-foreground md:text-base">{children}</p>;
}
