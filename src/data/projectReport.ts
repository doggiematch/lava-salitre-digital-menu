export const PDF_FILE_NAME = "informe-proyecto-lava-salitre.pdf";

export const projectReportMeta = {
  title: "Informe del proyecto Lava & Salitre",
  subtitle: "Memoria académica y profesional",
  restaurant: "Lava & Salitre",
  tagline: "Cocina canaria de vanguardia",
  dateLabel: "Proyecto escolar",
  logo: {
    src: "/galeria/logo-version-dorada-transparente.png",
    alt: "Logotipo de Lava & Salitre",
  },
} as const;

export const projectReportPhases = [
  {
    id: "fase-1",
    number: "01",
    phase: "Fase 1",
    route: "/proyecto/fase-1-conceptualizacion-fundamentacion",
    title: "Conceptualización y fundamentación",
    intro:
      "Esta primera fase establece la base estratégica del proyecto: un restaurante que reinterpreta la tradición gastronómica canaria en platos y postres vanguardistas, creando una propuesta diferencial, viable y capaz de atraer tanto al cliente local como al visitante que busca una experiencia singular vinculada al territorio.",
    lead: "La fase inicial define el concepto, el público objetivo, la despensa de kilómetro cero y el lenguaje culinario que sostiene toda la propuesta.",
    image: {
      src: "/proyecto/fase-1/concepto-lava-salitre.jpg",
      alt: "Concepto visual de Lava & Salitre",
      caption: "Identidad conceptual basada en lava volcánica, salitre atlántico y producto local.",
    },
    highlights: [
      "Unión entre tierra volcánica y mar Atlántico como eje narrativo.",
      "Cocina canaria minimalista, actual y ligada a productos locales.",
      "Relectura de postres tradicionales mediante técnicas de vanguardia.",
      "Público interesado en experiencias gastronómicas singulares y con relato.",
    ],
    sections: [
      {
        title: "Fundamento gastronómico",
        text: "La propuesta parte de recetas, productos y memorias reconocibles de Canarias. No busca sustituir la tradición, sino traducirla a una experiencia más limpia, técnica y contemporánea.",
      },
      {
        title: "Producto local",
        text: "El proyecto trabaja con una despensa insular: pescados frescos, gofio, papas, miel de palma, almendra de Tejeda, frutas tropicales, leche de cabra, vinos volcánicos y sal marina.",
      },
      {
        title: "Identidad visual",
        text: "La imagen combina sobriedad, piedra volcánica, acentos dorados y referencias salinas para transmitir elegancia sin alejarse del territorio.",
      },
    ],
  },
  {
    id: "fase-2",
    number: "02",
    phase: "Fase 2",
    route: "/proyecto/fase-2-diseno-carta-contenido",
    title: "Diseño de la carta y contenido",
    intro:
      "Esta segunda fase convierte el concepto gastronómico en una oferta concreta y comercializable. La carta se basa en elaboraciones canarias de vanguardia con identidad propia, siempre con nombre creativo, ingredientes principales canarios y una técnica innovadora aplicada.",
    lead: "La carta organiza la experiencia en menús degustación, platos salados, postres de innovación y petit four, con fichas técnicas y narrativa propia.",
    image: {
      src: "/proyecto/fase-2/carta-fisica/portada-carta-menu.png",
      alt: "Portada de la carta física de Lava & Salitre",
      caption:
        "Carta física preparada para sala, conectada con contenidos digitales mediante códigos QR.",
    },
    highlights: [
      "Menús Lava, Salitre y Lava & Salitre como recorridos de tierra, mar y unión.",
      "Platos con nombre creativo, técnica aplicada, origen e inspiración.",
      "Postres y petit four con lectura volcánica, salina y tropical.",
      "Carta física apoyada por QR para ampliar información técnica y de alérgenos.",
    ],
    sections: [
      {
        title: "Estructura de carta",
        text: "La experiencia avanza desde bocados de apertura y platos de mar o cumbre hasta postres y petit four. Cada propuesta mantiene una raíz canaria y una presentación actual.",
      },
      {
        title: "Narrativa gastronómica",
        text: "La lava representa la tierra, el fuego, la ganadería y la cumbre. El salitre representa la costa, el pescado, la mineralidad marina y la frescura del Atlántico.",
      },
      {
        title: "Documentación técnica",
        text: "Las fichas de cada elaboración reúnen ingredientes, técnica, origen, inspiración y alérgenos para facilitar consulta, servicio y presentación académica.",
      },
    ],
  },
  {
    id: "fase-3",
    number: "03",
    phase: "Fase 3",
    route: "/proyecto/fase-3-desarrollo-tecnologico-implementacion",
    title: "Desarrollo tecnológico e implementación",
    intro:
      "Esta tercera fase transforma la carta en una experiencia digital accesible, informativa y alineada con el posicionamiento del restaurante. El objetivo es crear los elementos tecnológicos que acompañarán la propuesta gastronómica, aportando transparencia, interacción, valor de marca y nuevas oportunidades de comunicación con el cliente.",
    lead: "La implementación digital convierte la carta en un sistema consultable, ampliable y coherente con la experiencia de sala.",
    image: {
      src: "/proyecto/fase-2/carta-fisica/interior-3-carta-menu.png",
      alt: "Interior de carta con códigos QR",
      caption: "Ejemplo de carta física con códigos QR integrados para enlazar fichas digitales.",
    },
    highlights: [
      "Web como presentación del proyecto y soporte de carta digital.",
      "QR por elaboración para acceder a fichas rápidas desde la mesa.",
      "Galería multimedia con fotografías de platos, postres y recursos de marca.",
      "Realidad aumentada planteada como recurso puntual para reforzar relato y origen.",
    ],
    sections: [
      {
        title: "Plataforma digital",
        text: "La web resume el concepto del restaurante, muestra la carta digital, presenta elaboraciones con imágenes y permite consultar fichas informativas desde códigos QR.",
      },
      {
        title: "Códigos QR",
        text: "Los QR conectan la carta física con contenido actualizable: descripción, ingredientes, técnica, origen del producto e información de alérgenos.",
      },
      {
        title: "Contenido multimedia",
        text: "Las imágenes de platos y sala refuerzan el atractivo comercial, ayudan a explicar el estilo culinario y sirven como material de presentación.",
      },
    ],
  },
  {
    id: "fase-4",
    number: "04",
    phase: "Fase 4",
    route: "/proyecto/fase-4-documentacion-presentacion",
    title: "Documentación y presentación",
    intro:
      "Esta cuarta fase consolida el proyecto en una memoria completa capaz de comunicar su valor de forma clara y profesional. El objetivo es ordenar la información estratégica, económica, gastronómica y visual para demostrar la viabilidad de Lava y Salitre como restaurante especializado en cocina canaria de vanguardia.",
    lead: "La última fase convierte el trabajo en una memoria organizada, defendible y preparada para exposición.",
    image: {
      src: "/galeria/salon-vistas.png",
      alt: "Salón del restaurante Lava & Salitre",
      caption: "Imagen final de ambiente para reforzar la presentación profesional del proyecto.",
    },
    highlights: [
      "Memoria con introducción, DAFO, marketing, presupuesto y conclusión.",
      "Análisis de fortalezas y oportunidades centrado en producto local y turismo gastronómico.",
      "Plan de promoción con redes sociales, fotografías, vídeos y colaboraciones.",
      "Presupuesto inicial realista para menús degustación y soporte tecnológico.",
    ],
    sections: [
      {
        title: "Memoria del proyecto",
        text: "La documentación presenta Lava & Salitre como una propuesta coherente: concepto, carta, identidad visual, tecnología, marketing y viabilidad económica.",
      },
      {
        title: "Presentación académica",
        text: "La información se ordena para explicar decisiones, justificar el producto local y mostrar la evolución desde la idea inicial hasta una propuesta completa.",
      },
      {
        title: "Viabilidad",
        text: "El análisis combina costes de producción, precios orientativos, inversión digital inicial y oportunidades de comunicación.",
      },
    ],
  },
] as const;

export const projectIndexMenu = [
  {
    to: projectReportPhases[0].route,
    phase: projectReportPhases[0].phase,
    title: projectReportPhases[0].title,
  },
  {
    to: projectReportPhases[1].route,
    phase: projectReportPhases[1].phase,
    title: projectReportPhases[1].title,
  },
  {
    to: projectReportPhases[2].route,
    phase: projectReportPhases[2].phase,
    title: projectReportPhases[2].title,
  },
  {
    to: projectReportPhases[3].route,
    phase: projectReportPhases[3].phase,
    title: projectReportPhases[3].title,
  },
] as const;

export const reportIndexSections = [
  "Portada",
  "Índice",
  "Introducción del proyecto",
  "Fase 1: Conceptualización y fundamentación",
  "Fase 2: Diseño de la carta y contenido",
  "Fase 3: Desarrollo tecnológico e implementación",
  "Fase 4: Documentación y presentación",
  "Conclusión final",
] as const;

export const reportIntroduction = {
  title: "Introducción del proyecto",
  image: {
    src: "/galeria/fachada-atardecer.png",
    alt: "Fachada de Lava & Salitre al atardecer",
    caption:
      "Lava & Salitre se plantea como restaurante gastronómico canario con mirada contemporánea.",
  },
  paragraphs: [
    "Lava & Salitre es un proyecto de restaurante gastronómico situado conceptualmente en Canarias, inspirado en el contraste entre la fuerza de la tierra volcánica y la frescura del Atlántico. Su propuesta busca demostrar que el producto local puede formar parte de una cocina actual, precisa y elegante.",
    "La memoria recoge cuatro fases de desarrollo: conceptualización, diseño de carta, implementación tecnológica y documentación final. El resultado es una propuesta integral que une identidad territorial, técnica culinaria, comunicación digital y viabilidad profesional.",
  ],
  highlights: [
    "Producto canario como eje de valor.",
    "Menús degustación con relato de tierra y mar.",
    "Carta física conectada con fichas digitales.",
    "Presentación final clara, ordenada y académica.",
  ],
} as const;

export const reinterpretationImages = [
  {
    src: "/proyecto/fase-1/bienmesabe-texturas.jpg",
    alt: "Bienmesabe en texturas",
    caption: "Bienmesabe en texturas",
  },
  {
    src: "/proyecto/fase-1/principe-alberto-volcanico.jpg",
    alt: "Príncipe Alberto volcánico",
    caption: "Príncipe Alberto volcánico",
  },
  {
    src: "/proyecto/fase-1/quesillo-liquido-caramelo-salino.jpg",
    alt: "Quesillo líquido con caramelo salino",
    caption: "Quesillo líquido con caramelo salino",
  },
] as const;

export const cartaFisicaImages = [
  {
    src: "/proyecto/fase-2/carta-fisica/interior-1-carta-menu.png",
    alt: "Interior de carta física",
    caption: "Inicio de carta física",
  },
  {
    src: "/proyecto/fase-2/carta-fisica/interior-4-carta-menu.png",
    alt: "Interior de carta física con menú Lava y Salitre",
    caption: "Menús y QR integrados",
  },
] as const;

export const digitalImplementationRows = [
  {
    area: "Web del proyecto",
    content: "Presentación, carta digital, galería y fichas de elaboraciones.",
    value: "Centraliza la información y refuerza la identidad de marca.",
  },
  {
    area: "QR en sala",
    content: "Acceso directo a cada ficha desde carta física o material impreso.",
    value: "Amplía la información sin saturar la experiencia de mesa.",
  },
  {
    area: "Galeria multimedia",
    content: "Fotografias de platos, postres, sala, equipo y ambiente.",
    value: "Aporta claridad visual y material para redes o exposición.",
  },
  {
    area: "Actualizacion digital",
    content: "Contenido modificable según temporada, disponibilidad o cambios de carta.",
    value: "Reduce dependencia de reimpresiones y mejora trazabilidad.",
  },
] as const;

export const dafoSummary = [
  {
    label: "Fortalezas",
    items: [
      "Identidad canaria reconocible.",
      "Narrativa potente entre lava y salitre.",
      "Menús ordenados y diferenciados.",
    ],
  },
  {
    label: "Oportunidades",
    items: [
      "Turismo gastronómico en crecimiento.",
      "Interés por sostenibilidad y producto local.",
      "Colaboraciones con productores y bodegas.",
    ],
  },
  {
    label: "Debilidades",
    items: [
      "Coste superior del producto de proximidad.",
      "Mayor necesidad de personal cualificado.",
      "Elaboraciones con planificacion previa.",
    ],
  },
  {
    label: "Amenazas",
    items: [
      "Competencia gastronómica consolidada.",
      "Subida de materias primas.",
      "Estacionalidad turistica.",
    ],
  },
] as const;

export const budgetRows = [
  ["Menu Lava", "55 EUR - 70 EUR", "70 EUR - 90 EUR"],
  ["Menu Salitre", "60 EUR - 75 EUR", "75 EUR - 95 EUR"],
  ["Menu Lava y Salitre", "75 EUR - 95 EUR", "95 EUR - 120 EUR"],
] as const;

export const technologyBudgetRows = [
  ["Web basica", "600 EUR"],
  ["Dominio y alojamiento", "120 EUR"],
  ["QR y carta digital", "200 EUR"],
  ["Fotografias iniciales", "400 EUR"],
  ["Videos basicos para redes", "250 EUR"],
  ["Total tecnológico inicial estimado", "1.770 EUR"],
] as const;

export const reportConclusion = {
  title: "Conclusión final",
  image: {
    src: "/galeria/equipo.png",
    alt: "Equipo de Lava & Salitre",
    caption:
      "El proyecto se cierra como una propuesta gastronómica integral, comunicable y viable.",
  },
  paragraphs: [
    "Lava & Salitre demuestra que una idea gastronómica puede evolucionar hasta convertirse en un proyecto completo cuando se ordenan concepto, carta, técnica, imagen, tecnología y viabilidad. La identidad canaria no aparece como decoración, sino como estructura central del restaurante.",
    "El informe confirma la coherencia entre las cuatro fases: primero se define el sentido del proyecto, después se construye la carta, luego se implementa el soporte digital y finalmente se documenta todo para comunicarlo con claridad. El resultado es una propuesta académica, profesional y con personalidad propia.",
  ],
} as const;
