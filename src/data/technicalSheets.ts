export type TechnicalRow = {
  label: string;
  value: string;
};

export type TechnicalSheet = {
  id: string;
  name: string;
  type: string;
  menus: string;
  sketchSrc?: string;
  photoSrc?: string;
  ingredient: TechnicalRow[];
  plate: TechnicalRow[];
  ingredients: TechnicalRow[];
  design: {
    rows: TechnicalRow[];
    elements: string[];
    textures: string[];
    decoration: string;
  };
};

export const technicalSheets: Record<string, TechnicalSheet> = {
  "perla-atlantica": {
    id: "perla-atlantica",
    name: "Perla Atlántica",
    type: "Primer plato",
    menus: "Menú Lava · Menú Lava & Salitre",
    sketchSrc: "/bocetos/perla-atlantica.jpg",
    photoSrc: "/fotos-platos/perla-atlantica.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Agua de mar canaria" },
      {
        label: "Isla o zona de producción",
        value: "Costa de Canarias / agua marina filtrada apta para uso gastronómico.",
      },
      { label: "Tipo de producto", value: "Producto marino / mineral." },
      {
        label: "Temporada",
        value: "Todo el año, siempre que sea agua tratada y apta para consumo alimentario.",
      },
      {
        label: "Usos gastronómicos",
        value:
          "Aporta salinidad natural, mineralidad y sabor atlántico. Puede usarse en esferificaciones, caldos marinos, geles salinos o aliños cítricos.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Base líquida para una esfera salina y cítrica tipo perla, combinada con limón canario, microbrotes y una presentación sobre sal y piedra volcánica.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Perla Atlántica" },
      {
        label: "Inspiración o historia",
        value:
          "La Perla Atlántica nace del encuentro entre el océano y la tierra volcánica de Canarias. La esfera, pequeña y brillante, recuerda a una perla formada por el mar; al romperse en boca libera salinidad, frescor cítrico y mineralidad.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Esferificación inversa. Se prepara un baño de alginato y una base con agua de mar, limón y calcio. La mezcla se introduce en el baño durante 1 minuto y 30 segundos, se lava en agua limpia y se monta en cuchara de servicio.",
      },
      {
        label: "Descripción del plato",
        value:
          "Primer plato de un solo bocado formado por una esfera fina con interior líquido. Al romperse en boca aporta una sensación fresca, salina y cítrica. La base de sal y piedra volcánica refuerza la identidad visual del plato.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 0,80 € - 1,20 € aprox." },
    ],
    ingredients: [
      { label: "Agua de mar", value: "20 ml" },
      { label: "Zumo de limón canario", value: "1,5 ml" },
      { label: "Gluconolactato cálcico", value: "0,4 g" },
      { label: "Agua para el baño", value: "50 ml" },
      { label: "Alginato", value: "0,25 g" },
      { label: "Sal gruesa para montaje", value: "15 g" },
      { label: "Piedra volcánica negra para presentación", value: "2 g" },
      { label: "Aceite de hierbas", value: "1 ml" },
      { label: "Microbrotes", value: "1 unidad" },
      { label: "Flor comestible", value: "1 unidad" },
      { label: "Ralladura de limón", value: "cantidad mínima para aroma" },
      { label: "Peso final del bocado", value: "20-22 g aprox." },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Perla Atlántica" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Esfera salina de agua de mar y limón",
        "Cuchara de servicio",
        "Base de sal gruesa",
        "Piedra volcánica negra",
        "Microbrote local",
        "Flor comestible",
        "Ralladura fina de limón",
        "Gotas de aceite de hierbas",
      ],
      textures: [
        "Exterior fino y delicado",
        "Interior líquido",
        "Base mineral y rugosa solo para presentación",
        "Toque herbal fresco de los microbrotes",
      ],
      decoration:
        "Decoración minimalista con microbrote, flor comestible, ralladura de limón y una gota pequeña de aceite de hierbas para dar brillo.",
    },
  },
  "bruma-agaete": {
    id: "bruma-agaete",
    name: "Bruma de Agaete",
    type: "Entrante",
    menus: "Menú Lava · Menú Lava & Salitre",
    sketchSrc: "/bocetos/bruma-agaete.png",
    photoSrc: "/fotos-platos/bruma-agaete.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Miel de palma" },
      {
        label: "Isla o zona de producción",
        value: "La Gomera, especialmente zonas palmeras tradicionales.",
      },
      {
        label: "Tipo de producto",
        value:
          "Producto dulce vegetal / sirope natural obtenido de la savia de la palmera canaria.",
      },
      {
        label: "Temporada",
        value: "Todo el año, aunque depende de la producción y disponibilidad del guarapo.",
      },
      {
        label: "Usos gastronómicos",
        value:
          "Se usa para aportar dulzor, brillo y un toque tostado. Es habitual en postres, helados, yogures, quesos, frutas y salsas dulces.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "En este entrante funciona como punto dulce y canario dentro de un criogranizado fresco de pepino y hierbahuerto.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Bruma de Agaete" },
      {
        label: "Inspiración o historia",
        value:
          "La Bruma de Agaete evoca la frescura vegetal que llega a la costa y la dulzura profunda de la miel de palma. El pepino, el hierbahuerto y el frío del criogranizado construyen un bocado limpio, ligero y de identidad canaria.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Extracción vegetal del pepino, infusión controlada del hierbahuerto a 60 °C y criogranizado con nitrógeno líquido a -196 °C.",
      },
      {
        label: "Descripción del plato",
        value:
          "Entrante frío servido en un cuenco pequeño de loza canaria. Tiene textura de nieve suelta, aireada y muy fina, con sabor fresco, vegetal y ligeramente dulce.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 1,20 € - 1,80 €." },
    ],
    ingredients: [
      { label: "Pepino", value: "60 g" },
      { label: "Agua", value: "20 ml" },
      { label: "Miel de palma", value: "4 g" },
      { label: "Azúcar", value: "2 g" },
      { label: "Hierbahuerto fresco", value: "4 g" },
      { label: "Nitrógeno líquido", value: "c/s (-196 °C)" },
      { label: "Pepino en brunoise", value: "corte previo" },
      { label: "Hierbahuerto en chiffonade", value: "corte previo" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Bruma de Agaete" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Criogranizado de pepino, hierbahuerto y miel de palma",
        "Microhoja de hierbahuerto",
        "Microdados de pepino",
        "Cuenco pequeño de loza canaria",
      ],
      textures: [
        "Nieve fina y aireada",
        "Sensación fría y ligera",
        "Pequeño crujiente vegetal",
        "Toque fluido al fundirse en boca",
      ],
      decoration:
        "Decoración muy sencilla: una microhoja de hierbahuerto en la parte superior y pocos microdados de pepino.",
    },
  },
  "cochino-negro": {
    id: "cochino-negro",
    name: "Cochino negro encapsulado",
    type: "Segundo plato",
    menus: "Menú Lava · Menú Lava & Salitre",
    sketchSrc: "/bocetos/cochino-negro.png",
    photoSrc: "/fotos-platos/cochino-negro.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Cochino negro canario" },
      {
        label: "Isla o zona de producción",
        value:
          "Canarias. Raza porcina autóctona criada en distintas islas, especialmente en explotaciones ganaderas locales.",
      },
      { label: "Tipo de producto", value: "Producto cárnico / raza porcina autóctona." },
      {
        label: "Temporada",
        value: "Todo el año, según disponibilidad del productor y ritmo de cría.",
      },
      {
        label: "Usos gastronómicos",
        value:
          "Se utiliza en guisos, asados, fondos, carnes melosas, embutidos y elaboraciones tradicionales.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Se aplica como jugo concentrado y encapsulado, acompañado por una tierra de gofio tostado.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Cochino negro encapsulado" },
      {
        label: "Inspiración o historia",
        value:
          "El plato condensa la memoria del guiso canario en una esfera líquida. El cochino negro aporta profundidad y la tierra de gofio recuerda el tostado del cereal y el paisaje volcánico.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Cocción sous-vide a 68 °C durante 12 horas, fondo oscuro, reducción del jugo, esferificación inversa y tierra gastronómica de gofio tostado.",
      },
      {
        label: "Descripción del plato",
        value:
          "Bocado de carne concentrada servido sobre una base fina de tierra de gofio tostado. La esfera tiene exterior delicado e interior líquido.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 2,80 € - 4,20 €." },
    ],
    ingredients: [
      { label: "Carrillera o panceta de cochino negro", value: "80 g" },
      { label: "Sal", value: "1,5 g" },
      { label: "Pimienta", value: "0,3 g" },
      { label: "Ajo", value: "1 g" },
      { label: "Aceite de oliva", value: "5 ml" },
      { label: "Fondo oscuro reducido", value: "120 ml" },
      { label: "Vino tinto", value: "20 ml" },
      { label: "Miel de palma", value: "3 g" },
      { label: "Jugo final", value: "40 ml" },
      { label: "Lactato cálcico", value: "1 g" },
      { label: "Agua para baño", value: "250 ml" },
      { label: "Alginato", value: "2 g" },
      { label: "Gofio", value: "10 g" },
      { label: "Mantequilla", value: "5 g" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Cochino negro encapsulado" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Esfera inversa de jugo de cochino negro",
        "Tierra de gofio tostado",
        "Microgota de jugo",
        "Plato pequeño de cerámica canaria o volcánica",
      ],
      textures: [
        "Exterior gelificado y delicado",
        "Interior líquido e intenso",
        "Tierra seca y tostada",
        "Contraste entre jugo meloso y base granulada",
      ],
      decoration:
        "Decoración muy minimalista, con la esfera central como protagonista y una base fina de gofio.",
    },
  },
  "cabrito-cumbre": {
    id: "cabrito-cumbre",
    name: "Cabrito de cumbre en ceniza volcánica",
    type: "Segundo plato",
    menus: "Menú Lava · Menú Lava & Salitre",
    sketchSrc: "/bocetos/cabrito-cumbre.png",
    photoSrc: "/fotos-platos/cabrito-cumbre.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Cabrito canario de cumbre" },
      {
        label: "Isla o zona de producción",
        value:
          "Zonas ganaderas de medianías y cumbre de Canarias, especialmente explotaciones locales de cabra y cabrito lechal.",
      },
      { label: "Tipo de producto", value: "Producto cárnico / ganadería caprina." },
      { label: "Temporada", value: "Todo el año, según disponibilidad del productor." },
      {
        label: "Usos gastronómicos",
        value:
          "Se utiliza en guisos, asados, calderetas, carnes glaseadas y elaboraciones tradicionales de cocina canaria.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Formato de lingote meloso glaseado con vino canario y acompañado de crema de batata.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Cabrito de cumbre en ceniza volcánica" },
      {
        label: "Inspiración o historia",
        value:
          "Inspirado en la ganadería de cumbre, el cabrito se presenta como un bocado meloso y brillante. La batata aporta dulzor suave y la ceniza de aceituna recuerda la tierra volcánica.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Cocción sous-vide a 66 °C durante 10 horas, prensado en frío, reducción de vino canario con miel de palma, marcado fuerte y glaseado constante.",
      },
      {
        label: "Descripción del plato",
        value:
          "Lingote pequeño, meloso y brillante sobre crema de batata, terminado con ceniza ligera de aceituna negra y pan tostado.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 3,20 € - 4,80 €." },
    ],
    ingredients: [
      { label: "Cabrito lechal", value: "80 g" },
      { label: "Sal", value: "1,5 g" },
      { label: "Pimienta", value: "0,3 g" },
      { label: "Aceite de oliva", value: "5 ml" },
      { label: "Vino tinto canario Listán Negro", value: "80 ml" },
      { label: "Miel de palma", value: "3 g" },
      { label: "Vinagre suave", value: "2 ml" },
      { label: "Mantequilla", value: "5 g" },
      { label: "Batata", value: "60 g" },
      { label: "Nata", value: "10 ml" },
      { label: "Aceituna negra deshidratada", value: "6 g" },
      { label: "Pan tostado oscuro", value: "2 g" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Cabrito de cumbre en ceniza volcánica" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Lingote de cabrito glaseado",
        "Reducción de vino canario Listán Negro",
        "Crema fina de batata",
        "Ceniza volcánica de aceituna negra y pan tostado",
        "Microflor blanca o brote pequeño",
      ],
      textures: [
        "Carne melosa y compacta",
        "Glaseado brillante",
        "Crema sedosa de batata",
        "Ceniza seca y fina",
        "Contraste jugoso, cremoso y arenoso",
      ],
      decoration:
        "Decoración contenida y elegante, usando muy poca ceniza y una microflor o brote pequeño si se desea.",
    },
  },
  "conejo-salmorejo": {
    id: "conejo-salmorejo",
    name: "Conejo en salmorejo invertido",
    type: "Segundo plato",
    menus: "Menú Lava · Menú Lava & Salitre",
    sketchSrc: "/bocetos/conejo-salmorejo.png",
    photoSrc: "/fotos-platos/conejo-salmorejo.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Conejo canario" },
      {
        label: "Isla o zona de producción",
        value:
          "Producción local en Canarias, especialmente en zonas rurales y explotaciones ganaderas de las islas.",
      },
      { label: "Tipo de producto", value: "Producto cárnico / ganadería menor." },
      {
        label: "Temporada",
        value: "Disponible durante todo el año, según proveedor y producción local.",
      },
      {
        label: "Usos gastronómicos",
        value:
          "Se utiliza en conejo en salmorejo, guisos, escabeches, arroces, fondos y platos de carne de sabor intenso.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Bocado técnico con conejo marinado a baja temperatura, salmorejo en espuma y tomate en gel.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Conejo en salmorejo invertido" },
      {
        label: "Inspiración o historia",
        value:
          "Parte del conejo en salmorejo tradicional y reorganiza sus elementos principales en texturas limpias: carne desmigada, tomate en gel y salsa en espuma templada.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Marinado durante 2 horas, cocción sous-vide a 75 °C durante 4 horas, desmigado, gelificación con agar y espuma templada en sifón a 55-60 °C.",
      },
      {
        label: "Descripción del plato",
        value:
          "Bocado de conejo desmigado con sabor a salmorejo, acompañado de gel de tomate y espuma templada.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 2,50 € - 3,80 €." },
    ],
    ingredients: [
      { label: "Conejo deshuesado", value: "80 g" },
      { label: "Ajo muy picado", value: "1 g" },
      { label: "Pimentón", value: "0,5 g" },
      { label: "Tomillo", value: "0,3 g" },
      { label: "Vino blanco", value: "15 ml" },
      { label: "Aceite de oliva", value: "5 ml" },
      { label: "Sal", value: "1 g" },
      { label: "Zumo de tomate colado", value: "50 ml" },
      { label: "Agar", value: "0,7 g" },
      { label: "Azúcar", value: "1 g" },
      { label: "Jugo del conejo", value: "40 ml" },
      { label: "Nata", value: "15 ml" },
      { label: "Gelatina", value: "0,5 g" },
      { label: "Sifón", value: "1 sifón + 1 carga" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Conejo en salmorejo invertido" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Conejo desmigado y marinado",
        "Gel de tomate",
        "Espuma templada de salmorejo",
        "Gota de aceite de oliva",
        "Microhierba opcional",
      ],
      textures: [
        "Carne jugosa y desmigada",
        "Gel de tomate cremoso",
        "Espuma ligera y templada",
        "Contraste entre carne, gel y aire",
      ],
      decoration:
        "Decoración mínima, con microhierba pequeña o gota de aceite de oliva para dar brillo.",
    },
  },
  "vaca-canaria": {
    id: "vaca-canaria",
    name: "Vaca canaria madurada",
    type: "Segundo plato",
    menus: "Menú Lava",
    sketchSrc: "/bocetos/vaca-canaria.png",
    photoSrc: "/fotos-platos/vaca-canaria.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Vaca canaria madurada" },
      {
        label: "Isla o zona de producción",
        value: "Ganadería local de Canarias, especialmente explotaciones bovinas de las islas.",
      },
      { label: "Tipo de producto", value: "Producto cárnico / ganadería bovina." },
      {
        label: "Temporada",
        value:
          "Disponible durante todo el año, según proveedor, maduración de la pieza y disponibilidad de ganadería local.",
      },
      {
        label: "Usos gastronómicos",
        value:
          "Cortes nobles a la plancha o brasa, fondos, jugos reducidos, guisos y piezas de cierre en menús degustación.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Plato principal con lomo bajo marcado, jugo intenso, emulsión de papa bonita y crujiente de piel.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Vaca canaria madurada" },
      {
        label: "Inspiración o historia",
        value:
          "Cierre de carnes del menú Lava, basado en ganadería canaria y aprovechamiento elegante: corte noble marcado, jugo con huesos y recortes, piel crujiente y papa bonita.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Asado de huesos a 200 °C, jugo reducido durante 4 horas, emulsión de papa bonita, deshidratación de piel a 70 °C durante 5-6 horas, fritura a 190 °C y marcado fuerte de la carne.",
      },
      {
        label: "Descripción del plato",
        value:
          "Plato de carne intenso y elegante con pieza marcada y rosada, emulsión sedosa de papa bonita, jugo reducido brillante y crujientes de piel.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 6,50 € - 9,50 €." },
    ],
    ingredients: [
      { label: "Lomo bajo de vaca canaria madurada", value: "120 g" },
      { label: "Sal fina", value: "1,2 g" },
      { label: "Pimienta negra", value: "0,2 g" },
      { label: "Aceite de oliva suave", value: "2 ml" },
      { label: "Mantequilla", value: "4 g" },
      { label: "Tomillo fresco", value: "1 ramita pequeña" },
      { label: "Ajo chafado", value: "1/5 diente aprox." },
      { label: "Huesos y recortes de vaca", value: "150 g" },
      { label: "Vino tinto canario", value: "40 ml" },
      { label: "Agua", value: "200 ml" },
      { label: "Papa bonita", value: "70 g" },
      { label: "Leche entera caliente", value: "12 ml" },
      { label: "Piel de vaca limpia", value: "30 g" },
      { label: "Carne servida", value: "70-80 g" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Vaca canaria madurada" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Lomo bajo de vaca canaria madurada",
        "Jugo intenso reducido",
        "Emulsión de papa bonita",
        "Crujiente de piel",
        "Microhoja de tomillo o brote pequeño opcional",
      ],
      textures: [
        "Carne jugosa y marcada",
        "Costra exterior intensa",
        "Emulsión lisa y sedosa",
        "Jugo brillante",
        "Crujiente seco de piel",
      ],
      decoration:
        "Decoración mínima: plato oscuro, línea corta de jugo, trazo de emulsión y 2 o 3 crujientes colocados con intención.",
    },
  },
  "ostra-canaria": {
    id: "ostra-canaria",
    name: "Ostra canaria, aire marino y granizado salino",
    type: "Entrante",
    menus: "Menú Salitre",
    sketchSrc: "/bocetos/ostra-canaria.png",
    photoSrc: "/fotos-platos/ostra-canaria.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Ostra canaria" },
      {
        label: "Isla o zona de producción",
        value:
          "Producto marino de Canarias, vinculado a zonas costeras limpias y aguas atlánticas. Representa especialmente El Hierro por la idea de mar puro, frescor y limpieza de sabor.",
      },
      { label: "Tipo de producto", value: "Producto marino / molusco bivalvo." },
      {
        label: "Temporada",
        value:
          "Disponible según proveedor, cultivo, extracción autorizada y condiciones sanitarias. Trabajar siempre fresca y con trazabilidad.",
      },
      {
        label: "Usos gastronómicos",
        value:
          "Se utiliza principalmente en crudo, abierta al momento, acompañada de elementos salinos, cítricos suaves, vegetales frescos, espumas, granizados o aceites aromáticos.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Entrante frío de apertura: ostra fresca en su concha, granizado salino de pepino y aire marino de agua de mar.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Ostra canaria, aire marino y granizado salino" },
      {
        label: "Inspiración o historia",
        value:
          "Este snack nace como un bocado de mar puro. La inspiración principal es El Hierro y su relación con el Atlántico: agua limpia, salinidad, frescor y una sensación directa de costa.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Granizado de pepino mediante triturado, congelación y rascado con tenedor. Aire marino con agua de mar filtrada y lecitina de soja. Apertura de ostra en crudo, manteniendo su agua natural.",
      },
      {
        label: "Descripción del plato",
        value:
          "Bocado frío, limpio y muy marino. La ostra se sirve en su concha con granizado de pepino y aire marino añadido justo antes del servicio.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 2,20 € - 3,80 €." },
    ],
    ingredients: [
      { label: "Ostra fresca", value: "1 ud" },
      { label: "Pepino", value: "10 g" },
      { label: "Zumo de limón", value: "0,5 ml" },
      { label: "Sal", value: "0,1 g" },
      { label: "Agua de mar filtrada", value: "10 ml" },
      { label: "Lecitina de soja", value: "0,1 g" },
      { label: "Granizado salino de pepino", value: "5 g aprox." },
      { label: "Aire marino", value: "1 cucharada ligera" },
      { label: "Agua natural de la ostra", value: "conservar c/s" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Ostra canaria, aire marino y granizado salino" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Ostra fresca en su concha",
        "Agua natural de la ostra",
        "Granizado salino de pepino",
        "Aire marino de agua de mar y lecitina",
        "Toque mínimo de limón",
      ],
      textures: [
        "Carne cruda y carnosa",
        "Granizado frío y suelto",
        "Aire ligero y espumoso",
        "Contraste entre yodo, hielo fino y sensación aérea",
      ],
      decoration:
        "Decoración muy mínima. La propia concha funciona como soporte natural; el aire se coloca justo antes de servir.",
    },
  },
  "ceviche-cherne": {
    id: "ceviche-cherne",
    name: "Ceviche de cherne, leche de tigre clarificada y aceite de cilantro",
    type: "Entrante",
    menus: "Menú Salitre",
    sketchSrc: "/bocetos/ceviche-cherne.png",
    photoSrc: "/fotos-platos/ceviche-cherne.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Cherne fresco" },
      {
        label: "Isla o zona de producción",
        value:
          "Pescado blanco del Atlántico asociado a la pesca local canaria. Representa Gran Canaria, su costa y cocina fresca vinculada al pescado de cercanía.",
      },
      { label: "Tipo de producto", value: "Producto marino / pescado blanco." },
      {
        label: "Temporada",
        value:
          "Disponible según temporada, capturas, lonja y proveedor. Debe emplearse muy fresco y con buena trazabilidad.",
      },
      {
        label: "Usos gastronómicos",
        value:
          "Se utiliza en ceviches, tartares, marinados cortos, cocciones suaves, guisos marineros, fondos y elaboraciones frías.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Mini pase frío con cherne fresco en dados, leche de tigre clarificada, aceite de cilantro, cebolla morada y crujiente opcional de maíz tostado.",
      },
    ],
    plate: [
      {
        label: "Nombre del plato",
        value: "Ceviche de cherne, leche de tigre clarificada y aceite de cilantro",
      },
      {
        label: "Inspiración o historia",
        value:
          "El plato se inspira en la costa de Gran Canaria y en la pesca local. La leche de tigre se clarifica para lograr un sabor transparente y elegante, mientras el aceite de cilantro aporta brillo, color y aroma vegetal.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Corte preciso del pescado. Leche de tigre con lima, fumet, jengibre, ajo, cilantro y sal, clarificada mediante congelación y descongelación lenta. Aceite de cilantro a 60 °C durante 10 minutos.",
      },
      {
        label: "Descripción del plato",
        value:
          "Mini pase frío, fresco y limpio: cherne en dados pequeños, gotas de leche de tigre clarificada, puntos de aceite de cilantro, cebolla morada y maíz tostado opcional.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 2,00 € - 3,50 €." },
    ],
    ingredients: [
      { label: "Cherne fresco", value: "20 g" },
      { label: "Sal", value: "0,2 g" },
      { label: "Zumo de lima", value: "4 ml" },
      { label: "Fumet suave", value: "6 ml" },
      { label: "Jengibre", value: "0,5 g" },
      { label: "Ajo", value: "0,2 g" },
      { label: "Cilantro", value: "1 g + 3 g" },
      { label: "Aceite de girasol", value: "10 ml" },
      { label: "Cebolla morada muy fina", value: "3 g" },
      { label: "Maíz tostado opcional", value: "2 g" },
      { label: "Leche de tigre clarificada", value: "5 ml aprox." },
      { label: "Aceite de cilantro", value: "3-4 puntos" },
    ],
    design: {
      rows: [
        {
          label: "Nombre del plato",
          value: "Ceviche de cherne, leche de tigre clarificada y aceite de cilantro",
        },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Dados pequeños de cherne fresco",
        "Leche de tigre clarificada",
        "Aceite de cilantro",
        "Cebolla morada muy fina",
        "Maíz tostado opcional",
      ],
      textures: [
        "Pescado crudo y firme",
        "Líquido limpio y ligero",
        "Aceite untuoso en puntos",
        "Cebolla fina crujiente",
        "Maíz tostado opcional",
      ],
      decoration:
        "Decoración mínima: cherne central, gotas de leche de tigre sin encharcar y puntos de aceite de cilantro.",
    },
  },
  "vieja-sancochada": {
    id: "vieja-sancochada",
    name: "Vieja sancochada, caldo limpio y aceite de algas",
    type: "Segundo plato",
    menus: "Menú Salitre",
    sketchSrc: "/bocetos/vieja-sancochada.png",
    photoSrc: "/fotos-platos/vieja-sancochada.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Vieja canaria" },
      {
        label: "Isla o zona de producción",
        value:
          "Pescado tradicional de Canarias, ligado a la cocina marinera. Representa Tenerife y la idea de llevar el pescado sancochado a una presentación fina y actual.",
      },
      { label: "Tipo de producto", value: "Producto marino / pescado blanco canario." },
      { label: "Temporada", value: "Disponible según capturas, temporada, lonja y proveedor." },
      {
        label: "Usos gastronómicos",
        value:
          "Sancochos, pescados hervidos o al vapor, caldos ligeros, guisos marineros y preparaciones con papa.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Producto canario principal dentro del menú salado, acompañado con papa negra, caldo claro y aceite de algas.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Vieja sancochada, caldo limpio y aceite de algas" },
      {
        label: "Inspiración o historia",
        value:
          "El plato parte de la vieja sancochada tradicional canaria y la presenta de forma limpia. La papa negra recuerda la guarnición clásica, el caldo concentra el sabor marino y el aceite de algas refuerza el mar.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Caldo claro con espinas, agua y verduras cocido 30 minutos. Aceite de algas a 60 °C durante 10 minutos. Papa negra cocida y triturada. Vieja a 52-55 °C durante 8-10 minutos.",
      },
      {
        label: "Descripción del plato",
        value:
          "Pase pequeño y delicado: base fina de puré de papa negra, lomo de vieja cocinado a baja temperatura y caldo limpio alrededor.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 2,50 € - 4,00 €." },
    ],
    ingredients: [
      { label: "Vieja, lomos limpios", value: "60 g" },
      { label: "Sal", value: "0,6 g" },
      { label: "Espinas de vieja", value: "50 g" },
      { label: "Agua", value: "100 ml" },
      { label: "Cebolla", value: "10 g" },
      { label: "Apio", value: "5 g" },
      { label: "Zanahoria", value: "5 g" },
      { label: "Alga seca", value: "1 g" },
      { label: "Aceite de girasol", value: "10 ml" },
      { label: "Papa negra canaria", value: "30 g" },
      { label: "Puré de papa negra", value: "15 g" },
      { label: "Caldo limpio", value: "30 ml" },
      { label: "Aceite de algas", value: "3-4 gotas" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Vieja sancochada, caldo limpio y aceite de algas" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Lomo de vieja canaria",
        "Puré fino de papa negra",
        "Caldo limpio de espinas y verduras",
        "Aceite de algas",
        "Microalga opcional",
      ],
      textures: [
        "Pescado jugoso y laminado",
        "Puré sedoso y fino",
        "Caldo ligero y transparente",
        "Aceite untuoso en gotas pequeñas",
      ],
      decoration:
        "Decoración limpia: puré fino como base, lomo de vieja encima, caldo alrededor y 3 o 4 gotas de aceite de algas.",
    },
  },
  "sama-roquera": {
    id: "sama-roquera",
    name: "Sama roquera glaseada, fondo reducido y mojo verde elegante",
    type: "Segundo plato",
    menus: "Menú Salitre",
    sketchSrc: "/bocetos/sama-roquera.png",
    photoSrc: "/fotos-platos/sama-roquera.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Sama roquera canaria" },
      {
        label: "Isla o zona de producción",
        value:
          "Pescado de roca utilizado en cocina marinera canaria. Representa La Gomera, uniendo pesca local con presentación técnica, limpia y elegante.",
      },
      {
        label: "Tipo de producto",
        value: "Producto marino / pescado blanco de roca de pesca local.",
      },
      { label: "Temporada", value: "Disponible según capturas, lonja y proveedor." },
      {
        label: "Usos gastronómicos",
        value:
          "Guisos marineros, sancochos, pescados al horno, elaboraciones con mojo, caldos, fondos y platos de pescado.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Producto canario principal dentro del menú salado, trabajado con fondos reducidos, mojo verde refinado y glaseado.",
      },
    ],
    plate: [
      {
        label: "Nombre del plato",
        value: "Sama roquera glaseada, fondo reducido y mojo verde elegante",
      },
      {
        label: "Inspiración o historia",
        value:
          "Inspirado en el pescado con mojo verde, el plato lleva la tradición a una versión fina: sama marcada y terminada al horno, fondo reducido con profundidad y mojo verde liso.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Fondo con espinas tostadas, agua, cebolla y ajo, cocido 40 minutos y reducido. Mojo verde refinado colado fino. Sama marcada, terminada a 180 °C durante 5-6 minutos y napada con fondo y mantequilla.",
      },
      {
        label: "Descripción del plato",
        value:
          "Pase pequeño de pescado intenso y limpio. La sama queda jugosa y nacarada con glaseado brillante, poco fondo y mojo verde en puntos o línea fina.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 3,00 € - 4,50 €." },
    ],
    ingredients: [
      { label: "Sama roquera, lomo limpio", value: "80 g" },
      { label: "Espinas de pescado", value: "100 g" },
      { label: "Agua", value: "150 ml" },
      { label: "Cebolla", value: "15 g" },
      { label: "Ajo", value: "1,5 g" },
      { label: "Cilantro", value: "4 g" },
      { label: "Aceite de oliva suave", value: "12 ml" },
      { label: "Vinagre suave", value: "1 ml" },
      { label: "Sal", value: "1,1 g" },
      { label: "Fondo reducido", value: "10 ml" },
      { label: "Mantequilla", value: "3 g" },
      { label: "Hoja mínima de cilantro", value: "opcional" },
    ],
    design: {
      rows: [
        {
          label: "Nombre del plato",
          value: "Sama roquera glaseada, fondo reducido y mojo verde elegante",
        },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Lomo de sama roquera canaria",
        "Fondo reducido de espinas",
        "Mojo verde refinado de cilantro",
        "Mantequilla para el glaseado",
        "Hoja mínima de cilantro opcional",
      ],
      textures: [
        "Pescado jugoso y nacarado",
        "Glaseado brillante y fino",
        "Salsa ligera y profunda",
        "Mojo verde liso y untuoso",
      ],
      decoration:
        "Decoración sobria: pescado centrado, glaseado fino, poco fondo alrededor y mojo verde en puntos pequeños o línea fina.",
    },
  },
  "cabrilla-confitada": {
    id: "cabrilla-confitada",
    name: "Cabrilla confitada, caldo clarificado de azafrán e hinojo",
    type: "Segundo plato",
    menus: "Menú Salitre",
    sketchSrc: "/bocetos/cabrilla-confitada.png",
    photoSrc: "/fotos-platos/cabrilla-confitada.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Cabrilla canaria" },
      {
        label: "Isla o zona de producción",
        value:
          "Pescado de roca presente en aguas canarias. Representa Lanzarote por su relación con la mineralidad, el mar y una cocina limpia de producto local.",
      },
      { label: "Tipo de producto", value: "Producto marino / pescado de roca." },
      { label: "Temporada", value: "Disponible según capturas, lonja y proveedor." },
      {
        label: "Usos gastronómicos",
        value:
          "Caldos de pescado, guisos marineros, frituras, sancochos, platos al horno y elaboraciones de sabor de mar profundo.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Producto canario principal trabajado con confitado, caldos clarificados y aceites aromáticos.",
      },
    ],
    plate: [
      {
        label: "Nombre del plato",
        value: "Cabrilla confitada, caldo clarificado de azafrán e hinojo",
      },
      {
        label: "Inspiración o historia",
        value:
          "El plato se inspira en el pescado de roca canario y la mineralidad de Lanzarote. La cocción suave conserva una textura jugosa y el caldo transparente de azafrán e hinojo aporta limpieza y aroma.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Confitado a 52 °C durante 12 minutos. Caldo con espinas, agua, cebolla e hinojo cocido 30 minutos y clarificado por congelación/descongelación. Aceite de hinojo a 60 °C durante 10 minutos.",
      },
      {
        label: "Descripción del plato",
        value:
          "Pase pequeño, elegante y marino. La cabrilla queda jugosa y laminada, con caldo clarificado alrededor, aceite de hinojo y punto crujiente fresco.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 3,50 € - 5,00 €." },
    ],
    ingredients: [
      { label: "Cabrilla, lomo limpio", value: "70 g" },
      { label: "Sal", value: "0,7 g" },
      { label: "Aceite suave para confitar", value: "30 ml" },
      { label: "Espinas de pescado", value: "80 g" },
      { label: "Agua", value: "120 ml" },
      { label: "Cebolla", value: "10 g" },
      { label: "Hinojo", value: "8 g + 5 g" },
      { label: "Azafrán", value: "0,03 g" },
      { label: "Aceite de girasol", value: "12 ml" },
      { label: "Hinojo crudo en brunoise", value: "5 g" },
      { label: "Caldo clarificado", value: "30 ml" },
      { label: "Aceite de hinojo", value: "4-5 gotas" },
    ],
    design: {
      rows: [
        {
          label: "Nombre del plato",
          value: "Cabrilla confitada, caldo clarificado de azafrán e hinojo",
        },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Lomo de cabrilla canaria",
        "Caldo clarificado de espinas, hinojo y azafrán",
        "Aceite aromático de hinojo",
        "Brunoise fina de hinojo crudo",
        "Microbrote opcional",
      ],
      textures: [
        "Pescado muy jugoso y mantecoso",
        "Caldo ligero y transparente",
        "Aceite aromático con textura grasa fina",
        "Hinojo crudo crujiente",
      ],
      decoration:
        "Decoración minimalista: cabrilla centrada, pizca de hinojo fresco encima, caldo alrededor y pocas gotas de aceite.",
    },
  },
  "atun-rojo": {
    id: "atun-rojo",
    name: "Atún rojo, brasa suave, jugo marino y toque graso",
    type: "Segundo plato",
    menus: "Menú Salitre",
    sketchSrc: "/bocetos/atun-rojo.png",
    photoSrc: "/fotos-platos/atun-rojo.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Atún rojo" },
      {
        label: "Isla o zona de producción",
        value:
          "Producto marino de gran calidad, asociado al mar abierto. Representa Fuerteventura por su relación con el mar, la intensidad y una cocina directa de producto.",
      },
      { label: "Tipo de producto", value: "Producto marino / pescado azul." },
      {
        label: "Temporada",
        value: "Disponible según campaña, proveedor autorizado y disponibilidad en lonja.",
      },
      {
        label: "Usos gastronómicos",
        value:
          "Tataki, brasa suave, tartares, marinados, escabeches ligeros, guisos marineros y elaboraciones donde destaque su sabor intenso.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Producto principal del menú salado, trabajado con brasa, jugo marino, emulsión grasa y frescor vegetal.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Atún rojo, brasa suave, jugo marino y toque graso" },
      {
        label: "Inspiración o historia",
        value:
          "El plato se inspira en el mar abierto y en la fuerza del atún rojo. La pieza se marca intensamente por fuera y se mantiene roja en el interior, con jugo marino, emulsión grasa y pepino fresco.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Marcado fuerte en brasa o sartén. Jugo marino con espinas tostadas, agua, cebolla y alga, cocido 40 minutos y reducido. Emulsión con aceite de oliva suave y lecitina opcional.",
      },
      {
        label: "Descripción del plato",
        value:
          "Plato pequeño pero potente: atún con exterior tostado e interior rojo, jugo marino alrededor, emulsión grasa y pepino en brunoise fina.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "Precio estimado por ración: 5,00 € - 7,50 €." },
    ],
    ingredients: [
      { label: "Atún rojo, lomo limpio", value: "80 g" },
      { label: "Sal", value: "0,8 g" },
      { label: "Espinas de pescado", value: "100 g" },
      { label: "Agua", value: "150 ml" },
      { label: "Alga seca", value: "1 g" },
      { label: "Cebolla", value: "10 g" },
      { label: "Jugo marino reducido", value: "10 ml" },
      { label: "Aceite de oliva suave", value: "6 ml" },
      { label: "Lecitina opcional", value: "0,1 g" },
      { label: "Pepino en brunoise fina", value: "10 g" },
      { label: "Atún rojo marcado", value: "80 g aprox." },
      { label: "Jugo marino", value: "15 ml" },
      { label: "Emulsión grasa", value: "1 cucharada pequeña" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Atún rojo, brasa suave, jugo marino y toque graso" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Lomo de atún rojo marcado tipo tataki",
        "Jugo marino reducido con espinas y alga",
        "Emulsión grasa de jugo y aceite de oliva",
        "Brunoise fina de pepino",
        "Microalga opcional",
      ],
      textures: [
        "Exterior tostado",
        "Interior crudo, rojo y jugoso",
        "Jugo marino ligero y concentrado",
        "Emulsión sedosa y brillante",
        "Pepino fresco y crujiente",
      ],
      decoration:
        "Decoración sobria: atún centrado con el corte visible, jugo alrededor, trazo corto de emulsión y pizca mínima de pepino.",
    },
  },
  "ceniza-dulce": {
    id: "ceniza-dulce",
    name: "Ceniza dulce de chocolate volcánico",
    type: "Postre",
    menus: "Menú Lava",
    sketchSrc: "/bocetos/ceniza-dulce.jpg",
    photoSrc: "/fotos-platos/ceniza-dulce.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Leche de cabra" },
      { label: "Isla o zona de producción", value: "Fuerteventura" },
      { label: "Tipo de producto", value: "Lácteo" },
      {
        label: "Temporada",
        value: "Disponible durante todo el año, aunque puede variar según la producción ganadera.",
      },
      {
        label: "Usos gastronómicos",
        value:
          "Se utiliza en quesos, cremas, salsas, postres, helados, espumas y elaboraciones con toque lácteo.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Aire de leche de cabra ahumada que aporta ligereza y un fondo lácteo suave en contraste con el chocolate.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Ceniza dulce de chocolate volcánico" },
      {
        label: "Inspiración o historia",
        value:
          "Inspirado en el paisaje volcánico de Canarias. La ganache representa lava solidificada, la ceniza dulce recuerda a la tierra volcánica y el aire de leche de cabra aporta un contrapunto lácteo y ahumado.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Ganache corta de chocolate, triturado de bizcocho seco para conseguir una ceniza dulce y aireado de leche de cabra con lecitina.",
      },
      {
        label: "Descripción del plato",
        value:
          "Postre pequeño de uno o dos bocados con quenelle mini de ganache de chocolate negro, ceniza dulce y aire de leche de cabra ahumada.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "4,50 € por ración individual" },
    ],
    ingredients: [
      { label: "Ganache de chocolate negro", value: "15 g" },
      { label: "Ceniza dulce de cacao y bizcocho seco", value: "5 g" },
      { label: "Aire de leche de cabra ahumada", value: "1 cucharada ligera" },
      { label: "Microflor o cristal fino", value: "opcional" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Ceniza dulce de chocolate volcánico" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Quenelle mini de ganache de chocolate",
        "Ceniza dulce de cacao y bizcocho seco",
        "Aire de leche de cabra ahumada",
        "Decoración opcional",
      ],
      textures: [
        "Cremosa: ganache de chocolate",
        "Seca y arenosa: ceniza dulce",
        "Ligera y aireada: aire de leche de cabra",
      ],
      decoration:
        "Decoración sencilla, elegante y volcánica, con plato limpio y minimalista para destacar el chocolate, la ceniza y el efecto de lava solidificada.",
    },
  },
  "sorbete-lima": {
    id: "sorbete-lima",
    name: "Sorbete de lima, sal marina y aceite de oliva suave",
    type: "Sorbete",
    menus: "Menú Lava · Menú Salitre · Menú Lava & Salitre",
    sketchSrc: "/bocetos/sorbete-lima.png",
    photoSrc: "/fotos-platos/sorbete-lima.jpg",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Lima canaria" },
      { label: "Isla o zona de producción", value: "Canarias / producción local de cítricos." },
      { label: "Tipo de producto", value: "Fruta cítrica." },
      { label: "Temporada", value: "Disponible gran parte del año según cosecha local." },
      {
        label: "Usos gastronómicos",
        value:
          "Aporta acidez, frescor y aroma. Se usa para limpiar el paladar, equilibrar grasas y preparar el siguiente pase.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Sorbete cítrico ligero, servido antes del postre para abrir sabor y retirar la persistencia de platos de carne o pescado.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Sorbete de lima, sal marina y aceite de oliva suave" },
      {
        label: "Inspiración o historia",
        value:
          "Pase fresco inspirado en la lima canaria y la sal marina. Su función es resetear el paladar entre los segundos platos y el postre.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Almíbar ligero de agua y azúcar, mezcla con zumo de lima, congelación y rascado periódico hasta lograr textura fina de sorbete.",
      },
      {
        label: "Descripción del plato",
        value:
          "Bocado frío de sorbete de lima con micro pizca de sal marina, ralladura fina y unas gotas de aceite de oliva suave.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
    ],
    ingredients: [
      { label: "Zumo de lima", value: "100 ml" },
      { label: "Agua", value: "150 ml" },
      { label: "Azúcar", value: "60 g" },
      { label: "Sal marina", value: "2 g" },
      { label: "Aceite de oliva suave", value: "30 ml" },
      { label: "Ralladura fina de lima", value: "c/s" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Sorbete de lima, sal marina y aceite de oliva suave" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Quenelle de sorbete de lima",
        "Micro pizca de sal marina",
        "Ralladura fina de lima",
        "Gotas de aceite de oliva suave",
        "Microbrotes o zarcillos de lima",
      ],
      textures: ["Frío y fino", "Cítrico y ligero", "Salino puntual", "Aceite suave y brillante"],
      decoration:
        "Montaje limpio sobre plato de textura volcánica: quenelle centrada, sal en micro puntos, ralladura fina y 2 o 3 gotas de aceite de oliva suave.",
    },
  },
  "bienmesabe-aereo": {
    id: "bienmesabe-aereo",
    name: "Bienmesabe aéreo con almendra de Tejeda",
    type: "Postre",
    menus: "Menú Lava",
    sketchSrc: "/bocetos/bienmesabe-aereo.png",
    photoSrc: "/fotos-platos/bienmesabe-aereo.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Almendra de Tejeda" },
      { label: "Isla o zona de producción", value: "Tejeda, Gran Canaria" },
      { label: "Tipo de producto", value: "Fruto seco" },
      { label: "Temporada", value: "Finales de verano y otoño, según la cosecha." },
      {
        label: "Usos gastronómicos",
        value:
          "Bienmesabe, repostería canaria, cremas, helados, crujientes, pralinés y decoraciones.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Base del bienmesabe aéreo y crujiente, aportando sabor canario, textura y un punto tostado.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Bienmesabe aéreo con almendra de Tejeda" },
      {
        label: "Inspiración o historia",
        value:
          "Parte del bienmesabe canario, presentado de forma más ligera y actual. La almendra de Tejeda mantiene la identidad tradicional, mientras la espuma, el granizado cítrico y el crujiente aportan frescor.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Base de bienmesabe, colado fino, espuma en sifón, granizado cítrico raspado y almendra caramelizada crujiente.",
      },
      {
        label: "Descripción del plato",
        value:
          "Postre pequeño de un bocado con base fría de granizado cítrico, espuma ligera de bienmesabe y crujiente de almendra.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "4,80 € por ración individual" },
    ],
    ingredients: [
      { label: "Granizado cítrico", value: "10 g" },
      { label: "Espuma de bienmesabe", value: "15 g" },
      { label: "Crujiente de almendra", value: "1-2 piezas" },
      { label: "Ralladura de limón o naranja", value: "opcional" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Bienmesabe aéreo con almendra de Tejeda" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Granizado cítrico",
        "Espuma de bienmesabe",
        "Crujiente de almendra",
        "Ralladura cítrica opcional",
      ],
      textures: [
        "Aireada: espuma de bienmesabe",
        "Fría y granulada: granizado cítrico",
        "Crujiente y seca: almendra caramelizada",
      ],
      decoration:
        "Decoración limpia y sencilla. El plato debe verse ligero, fresco y elegante, sin recargarlo.",
    },
  },
  "bombon-volcanico": {
    id: "bombon-volcanico",
    name: "Petit four: bombón volcánico",
    type: "Petit four",
    menus: "Menú Lava",
    photoSrc: "/fotos-platos/bombon-volcanico.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Ron canario" },
      { label: "Isla o zona de producción", value: "Canarias" },
      { label: "Tipo de producto", value: "Bebida alcohólica / destilado" },
      { label: "Temporada", value: "Disponible durante todo el año." },
      {
        label: "Usos gastronómicos",
        value:
          "Repostería, almíbares, bombones, cremas, bizcochos, caramelizados y postres con toque aromático.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Relleno líquido dentro del bombón volcánico, aportando aroma y una pequeña explosión dulce al morder.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Petit four: bombón volcánico" },
      {
        label: "Inspiración o historia",
        value:
          "Inspirado en las rocas volcánicas de Canarias. La cobertura de chocolate negro representa la piedra oscura y el rebozado de cacao con bizcocho seco aporta el efecto de ceniza.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Bombón con cobertura fina de chocolate, relleno líquido aromatizado con ron canario y acabado exterior con cacao y bizcocho seco triturado.",
      },
      {
        label: "Descripción del plato",
        value:
          "Petit four de chocolate negro con apariencia de pequeña roca volcánica, exterior duro y seco e interior líquido de ron canario.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "2,50 € por unidad" },
    ],
    ingredients: [
      { label: "Chocolate negro", value: "15 g por unidad" },
      { label: "Relleno líquido de ron canario", value: "4,5 ml aprox. por unidad" },
      { label: "Cacao en polvo", value: "1 g por unidad" },
      { label: "Bizcocho seco triturado", value: "1 g por unidad" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Petit four: bombón volcánico" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Bombón de chocolate negro",
        "Relleno líquido de ron canario",
        "Rebozado volcánico de cacao y bizcocho seco",
        "Soporte pequeño, oscuro o pétreo",
      ],
      textures: [
        "Dura: cobertura de chocolate negro",
        "Líquida: relleno dulce de ron canario",
        "Seca y terrosa: acabado exterior de cacao y bizcocho triturado",
      ],
      decoration:
        "Decoración mínima, buscando un aspecto natural de piedra volcánica, oscuro, irregular y mate.",
    },
  },
  "palma-cacao": {
    id: "palma-cacao",
    name: "La Palma bajo cacao",
    type: "Postre",
    menus: "Menú Salitre",
    sketchSrc: "/bocetos/palma-cacao.png",
    photoSrc: "/fotos-platos/palma-cacao.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Plátano canario" },
      {
        label: "Isla o zona de producción",
        value: "Canarias, con producción destacada en La Palma, Tenerife y Gran Canaria.",
      },
      { label: "Tipo de producto", value: "Fruta tropical" },
      { label: "Temporada", value: "Disponible durante todo el año." },
      {
        label: "Usos gastronómicos",
        value:
          "Postres, helados, cremas, bizcochos, mermeladas, caramelizados, guarniciones dulces y elaboraciones de cocina creativa.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Esfera líquida mediante esferificación inversa, creando un interior dulce que recuerda a una lava de plátano.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "La Palma bajo cacao" },
      {
        label: "Inspiración o historia",
        value:
          "Inspirado en el paisaje volcánico canario y en el contraste entre tierra oscura, cacao y dulzor del plátano. La esfera representa una lava dulce encerrada bajo una base de chocolate intenso.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Ganache emulsionada, esferificación inversa de plátano, tierra texturizada de cacao y galleta, y aire de cacao elaborado con lecitina.",
      },
      {
        label: "Descripción del plato",
        value:
          "Postre pequeño y vanguardista con ganache de chocolate, esfera líquida de plátano canario, tierra volcánica y aire ligero de cacao.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "4,50 € por ración individual" },
    ],
    ingredients: [
      { label: "Ganache de chocolate negro", value: "15 g por ración" },
      { label: "Esfera líquida de plátano canario", value: "10 g por ración" },
      { label: "Tierra volcánica de cacao y galleta", value: "4 g por ración" },
      { label: "Aire de cacao", value: "1 cucharada ligera por ración" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "La Palma bajo cacao" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Base de ganache de chocolate negro",
        "Esfera líquida de plátano canario",
        "Tierra volcánica de cacao y galleta",
        "Aire de cacao",
      ],
      textures: [
        "Cremosa: ganache de chocolate",
        "Líquida: interior de la esfera de plátano",
        "Seca y arenosa: tierra volcánica",
        "Ligera y aireada: aire de cacao",
      ],
      decoration:
        "Decoración mínima y elegante, con tierra de cacao alrededor y aire colocado a un lado para mantener un aspecto volcánico y limpio.",
    },
  },
  "pina-hierro": {
    id: "pina-hierro",
    name: "Piña de El Hierro a la brasa, vainilla y texturas",
    type: "Postre",
    menus: "Menú Salitre",
    sketchSrc: "/bocetos/pina-hierro.png",
    photoSrc: "/fotos-platos/pina-hierro.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Piña de El Hierro" },
      { label: "Isla o zona de producción", value: "El Hierro" },
      { label: "Tipo de producto", value: "Fruta tropical" },
      {
        label: "Temporada",
        value: "Disponible durante buena parte del año, según producción y maduración.",
      },
      {
        label: "Usos gastronómicos",
        value:
          "Fresca, asada, caramelizada, en postres, sorbetes, geles, chutneys, tartas y elaboraciones de cocina creativa.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Trabajada a la brasa para potenciar su aroma tostado y dulzor natural, combinada con vainilla, gel cítrico y crujiente.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Piña de El Hierro a la brasa, vainilla y texturas" },
      {
        label: "Inspiración o historia",
        value:
          "Inspirado en el producto tropical canario y en llevar una fruta sencilla a una presentación más elegante. La piña se marca a la brasa para resaltar dulzor y punto tostado.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Caramelizado y marcado fuerte de la piña a la brasa o plancha, infusión de vainilla para espuma, gelificación con agar y crujiente seco.",
      },
      {
        label: "Descripción del plato",
        value:
          "Postre templado y ligero con piña caramelizada a la brasa, gel cítrico, espuma de vainilla y crujiente seco.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "4,50 € por ración individual" },
    ],
    ingredients: [
      { label: "Piña de El Hierro a la brasa", value: "1 pieza pequeña por ración" },
      { label: "Azúcar para caramelizar", value: "4 g por ración" },
      { label: "Mantequilla", value: "2 g por ración" },
      { label: "Espuma de vainilla", value: "1 cucharada ligera por ración" },
      { label: "Gel cítrico de lima", value: "8 g por ración" },
      { label: "Crujiente de galleta o coco seco", value: "5 g por ración" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Piña de El Hierro a la brasa, vainilla y texturas" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Piña de El Hierro a la brasa",
        "Gel cítrico de lima",
        "Espuma templada de vainilla",
        "Crujiente de galleta o coco seco",
        "Microhoja opcional",
      ],
      textures: [
        "Jugosa y templada: piña caramelizada",
        "Ligera y aireada: espuma de vainilla",
        "Fina y brillante: gel cítrico",
        "Seca y crujiente: galleta o coco seco",
      ],
      decoration:
        "Decoración sencilla y natural, dejando que la piña sea protagonista, con crujiente y microhoja pequeña si se desea.",
    },
  },
  "toffee-aireado": {
    id: "toffee-aireado",
    name: "Toffee crujiente aireado",
    type: "Petit four",
    menus: "Menú Salitre",
    sketchSrc: "/bocetos/toffee-aireado.png",
    photoSrc: "/fotos-platos/toffee-aireado.png",
    ingredient: [
      { label: "Nombre del ingrediente", value: "Sal marina" },
      { label: "Isla o zona de producción", value: "Canarias / salinas tradicionales" },
      { label: "Tipo de producto", value: "Mineral / condimento" },
      { label: "Temporada", value: "Disponible durante todo el año." },
      {
        label: "Usos gastronómicos",
        value:
          "Potencia sabores, equilibra dulces, termina elaboraciones de chocolate, caramelo y petits fours, y da contraste en postres.",
      },
      {
        label: "Posible aplicación en un postre",
        value:
          "Micro pizca final para equilibrar el dulzor del toffee y reforzar el contraste entre caramelo, mantequilla y sal.",
      },
    ],
    plate: [
      { label: "Nombre del plato", value: "Toffee crujiente aireado" },
      {
        label: "Inspiración o historia",
        value:
          "Inspirado en una versión ligera y moderna del toffee clásico: una pieza aireada, crujiente y porosa, con acabado delicado de sal marina.",
      },
      {
        label: "Técnica culinaria aplicada",
        value:
          "Caramelo con nata y mantequilla para formar el toffee base, aireado con bicarbonato y enfriado en bandeja para conseguir estructura porosa y crujiente.",
      },
      {
        label: "Descripción del plato",
        value:
          "Petit four pequeño y ligero tipo honeycomb, crujiente por fuera y poroso en el interior, con sabor a caramelo, mantequilla y sal marina.",
      },
      { label: "Alérgenos", value: "Consulta aquí la carta de alérgenos" },
      { label: "Precio estimado", value: "2,00 € por pieza individual" },
    ],
    ingredients: [
      { label: "Toffee aireado", value: "1 pieza de 2-3 cm" },
      { label: "Azúcar", value: "10 g" },
      { label: "Nata", value: "8 ml" },
      { label: "Mantequilla", value: "3 g" },
    ],
    design: {
      rows: [
        { label: "Nombre del plato", value: "Toffee crujiente aireado" },
        { label: "Boceto o dibujo del emplatado", value: "Accede aquí al boceto del emplatado" },
      ],
      elements: [
        "Pieza de toffee aireado",
        "Micro pizca de sal marina",
        "Soporte tipo piedra volcánica o bandeja limpia",
        "Decoración mínima",
      ],
      textures: [
        "Crujiente: exterior del toffee",
        "Aireada y porosa: interior del toffee",
        "Ligera: pieza pequeña de petit four",
      ],
      decoration:
        "Decoración muy sencilla y limpia. La pieza debe parecer una pequeña roca dulce y aireada, sin recargar la presentación.",
    },
  },
};

export const technicalSheetList = Object.values(technicalSheets);
