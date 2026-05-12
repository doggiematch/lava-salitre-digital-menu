export type AllergenStatus = "Sí contiene" | "No contiene" | "Puede contener";

export type AllergenRow = {
  allergen: string;
  status: AllergenStatus;
  observation: string;
};

export type AllergenSheet = {
  id: string;
  title: string;
  subtitle: string;
  represents: string;
  originNote: string;
  sourceImageSrc?: string;
  ingredients: string[];
  containsSummary: string;
  traceNote: string;
  rows: AllergenRow[];
};

const allergenNames = [
  "Gluten",
  "Crustáceos",
  "Huevos",
  "Pescado",
  "Cacahuetes",
  "Soja",
  "Lácteos",
  "Frutos de cáscara",
  "Apio",
  "Mostaza",
  "Granos de sésamo",
  "Dióxido de azufre y sulfitos",
  "Altramuces",
  "Moluscos",
] as const;

const defaultObservations: Record<(typeof allergenNames)[number], string> = {
  Gluten: "No aparece en los ingredientes.",
  Crustáceos: "No aparecen crustáceos.",
  Huevos: "No lleva huevo.",
  Pescado: "No contiene pescado.",
  Cacahuetes: "No aparecen cacahuetes.",
  Soja: "No aparece soja.",
  Lácteos: "No lleva leche ni derivados.",
  "Frutos de cáscara": "No aparecen frutos secos.",
  Apio: "No aparece apio.",
  Mostaza: "No aparece mostaza.",
  "Granos de sésamo": "No aparece sésamo.",
  "Dióxido de azufre y sulfitos": "No indicados en la receta.",
  Altramuces: "No aparecen altramuces.",
  Moluscos: "No aparecen moluscos.",
};

function rows(
  overrides: Partial<
    Record<(typeof allergenNames)[number], Pick<AllergenRow, "status" | "observation">>
  >,
) {
  return allergenNames.map((allergen) => ({
    allergen,
    status: overrides[allergen]?.status ?? "No contiene",
    observation: overrides[allergen]?.observation ?? defaultObservations[allergen],
  }));
}

export const allergenSheets: Record<string, AllergenSheet> = {
  "perla-atlantica": {
    id: "perla-atlantica",
    title: "Perla Atlántica",
    subtitle: "Esfera de mar canario, limón y hierbas locales.",
    represents: "Canarias",
    originNote: "Producto km 0, mar canario y hierbas locales.",
    ingredients: [
      "Agua de mar canaria",
      "Limón canario",
      "Hierbas locales",
      "Sal volcánica",
      "Aceite de hierbas opcional",
    ],
    containsSummary: "No contiene alérgenos principales declarados.",
    traceNote: "El agua de mar puede contener trazas naturales de pescado y moluscos.",
    rows: rows({
      Pescado: {
        status: "Puede contener",
        observation: "El agua de mar puede contener trazas naturales de pescado.",
      },
      Moluscos: {
        status: "Puede contener",
        observation: "El agua de mar puede contener trazas naturales de moluscos.",
      },
    }),
  },
  "ostra-canaria": {
    id: "ostra-canaria",
    title: "Ostra canaria, aire marino y granizado salino",
    subtitle: "Ostra fresca, pepino, limÃ³n, agua de mar y lecitina de soja.",
    represents: "El Hierro",
    originNote: "Entrada frÃ­a, salina y marina con ostra fresca.",
    sourceImageSrc: "/alergenos/ostra-canaria.png",
    ingredients: [
      "Ostras frescas",
      "Pepino",
      "Zumo de limÃ³n",
      "Sal",
      "Agua de mar filtrada",
      "Lecitina de soja",
    ],
    containsSummary: "Soja y moluscos.",
    traceNote:
      "No contiene segÃºn receta: gluten, crustÃ¡ceos, huevos, pescado, cacahuetes, lÃ¡cteos, frutos de cÃ¡scara, apio, mostaza, sÃ©samo, sulfitos y altramuces.",
    rows: rows({
      Soja: { status: "SÃ­ contiene", observation: "Por la lecitina de soja." },
      Moluscos: { status: "SÃ­ contiene", observation: "Por la ostra fresca." },
    }),
  },
  "ceviche-cherne": {
    id: "ceviche-cherne",
    title: "Ceviche de cherne, leche de tigre clarificada y aceite de cilantro",
    subtitle: "Cherne fresco, lima, fumet suave, jengibre, ajo, cilantro y cebolla morada.",
    represents: "Gran Canaria",
    originNote: "Entrada fresca, Ã¡cida y limpia basada en pescado canario.",
    sourceImageSrc: "/alergenos/ceviche-cherne.png",
    ingredients: [
      "Cherne fresco",
      "Zumo de lima",
      "Fumet suave",
      "Jengibre",
      "Ajo",
      "Cilantro",
      "Aceite de girasol",
      "Cebolla morada",
      "MaÃ­z tostado opcional",
    ],
    containsSummary: "Pescado.",
    traceNote:
      "No contiene segÃºn receta: gluten, crustÃ¡ceos, huevos, cacahuetes, soja, lÃ¡cteos, frutos de cÃ¡scara, apio, mostaza, sÃ©samo, sulfitos, altramuces y moluscos.",
    rows: rows({
      Pescado: { status: "SÃ­ contiene", observation: "Por el cherne fresco y el fumet." },
    }),
  },
  "vieja-sancochada": {
    id: "vieja-sancochada",
    title: "Vieja sancochada, caldo limpio y aceite de algas",
    subtitle: "Pescado canario, técnica fina y sabor puro.",
    represents: "Tenerife",
    originNote: "Tradición llevada a alta cocina.",
    ingredients: [
      "Vieja canaria",
      "Papa negra canaria",
      "Algas",
      "Cebolla",
      "Apio",
      "Zanahoria",
      "Aceite de girasol",
      "Sal",
      "Agua",
    ],
    containsSummary: "Pescado y apio.",
    traceNote:
      "Este plato puede contener trazas de otros alérgenos debido a la manipulación en cocina.",
    rows: rows({
      Pescado: {
        status: "Sí contiene",
        observation: "Contiene pescado, vieja canaria y sus espinas en el caldo.",
      },
      Apio: { status: "Sí contiene", observation: "Contiene apio en el caldo." },
    }),
  },
  "cabrilla-confitada": {
    id: "cabrilla-confitada",
    title: "Cabrilla confitada",
    subtitle: "Pescado canario, confitado, sabor puro y delicado.",
    represents: "Fuerteventura",
    originNote: "Tradición marinera llevada a la alta cocina.",
    ingredients: ["Cabrilla", "Ajo", "Aceite de oliva virgen extra", "Tomillo", "Sal", "Limón"],
    containsSummary: "Pescado, cabrilla.",
    traceNote:
      "Este plato puede contener trazas de otros alérgenos debido a la manipulación en cocina.",
    rows: rows({
      Pescado: { status: "Sí contiene", observation: "Contiene pescado, cabrilla." },
    }),
  },
  "sama-roquera": {
    id: "sama-roquera",
    title: "Sama roquera, denso marino y aceite de hierbas",
    subtitle: "Producto km 0 con esencia de mar profundo.",
    represents: "La Gomera",
    originNote: "Mar profundo y esencia marina.",
    ingredients: [
      "Sama roquera",
      "Algas",
      "Cítricos",
      "Hierbas frescas",
      "Aceite de oliva virgen extra",
      "Sal marina",
    ],
    containsSummary: "Pescado.",
    traceNote:
      "Este plato puede contener trazas de otros alérgenos debido a la manipulación en cocina.",
    rows: rows({
      Pescado: { status: "Sí contiene", observation: "Contiene pescado, sama roquera." },
    }),
  },
  "atun-rojo": {
    id: "atun-rojo",
    title: "Atún rojo marinado, ponzu de cítricos y aceite de wasabi",
    subtitle: "Fresco, umami, elegante y profundo.",
    represents: "La Palma",
    originNote: "Esencia atlántica llevada a la alta cocina.",
    ingredients: [
      "Atún rojo",
      "Ponzu con soja",
      "Cítricos",
      "Wasabi",
      "Aceite de oliva virgen extra",
      "Sal",
      "Sésamo tostado",
    ],
    containsSummary: "Pescado, soja y sésamo.",
    traceNote:
      "Este plato puede contener trazas de otros alérgenos debido a la manipulación en cocina.",
    rows: rows({
      Pescado: { status: "Sí contiene", observation: "Contiene pescado, atún rojo." },
      Soja: { status: "Sí contiene", observation: "Presente en el ponzu con soja." },
      "Granos de sésamo": {
        status: "Sí contiene",
        observation: "Presente en el topping de sésamo tostado.",
      },
    }),
  },
  "conejo-salmorejo": {
    id: "conejo-salmorejo",
    title: "Conejo en salmorejo",
    subtitle: "Tradición canaria con técnica y sabor.",
    represents: "Canarias",
    originNote: "Receta tradicional llevada a la alta cocina.",
    ingredients: [
      "Conejo",
      "Tomate",
      "Pan",
      "Aceite de oliva virgen extra",
      "Ajo",
      "Vinagre",
      "Sal",
    ],
    containsSummary: "Gluten por el pan y sésamo si se usa como topping.",
    traceNote:
      "Este plato puede contener trazas de otros alérgenos debido a la manipulación en cocina.",
    rows: rows({
      Gluten: { status: "Sí contiene", observation: "Por el pan del salmorejo." },
      "Granos de sésamo": {
        status: "Sí contiene",
        observation: "Puede aparecer en topping o acabado.",
      },
    }),
  },
  "cochino-negro": {
    id: "cochino-negro",
    title: "Cochino negro canario",
    subtitle: "Meloso, profundo y elegante.",
    represents: "La Palma",
    originNote: "Producto km 0, cochino negro canario.",
    ingredients: [
      "Cochino negro",
      "Vino tinto",
      "Miel de palma",
      "Papas",
      "Ajo",
      "Hierbas",
      "Aceite de oliva virgen extra",
      "Especias naturales",
    ],
    containsSummary: "Gluten, apio, sésamo y sulfitos.",
    traceNote:
      "Este plato puede contener trazas de otros alérgenos debido a la manipulación en cocina.",
    rows: rows({
      Gluten: { status: "Sí contiene", observation: "Puede contener trazas por salsas o fondos." },
      Apio: { status: "Sí contiene", observation: "Puede contener apio en el fondo o guarnición." },
      "Granos de sésamo": {
        status: "Sí contiene",
        observation: "Puede contener por sésamo o topping.",
      },
      "Dióxido de azufre y sulfitos": {
        status: "Sí contiene",
        observation: "Presente en el vino tinto.",
      },
    }),
  },
  "cabrito-cumbre": {
    id: "cabrito-cumbre",
    title: "Cabrito canario",
    subtitle: "Tradición de altura, sabor puro y profundo.",
    represents: "El Hierro",
    originNote: "Producto km 0, cabrito canario.",
    ingredients: [
      "Cabrito",
      "Ajo",
      "Romero",
      "Tomillo",
      "Vino blanco",
      "Aceite de oliva virgen extra",
      "Sal",
      "Hierbas aromáticas",
    ],
    containsSummary: "Gluten, lácteos, apio, sésamo y sulfitos.",
    traceNote:
      "Este plato puede contener trazas de otros alérgenos debido a la manipulación en cocina.",
    rows: rows({
      Gluten: {
        status: "Sí contiene",
        observation: "Puede contener trazas por fondos, salsas o guarniciones.",
      },
      Lácteos: {
        status: "Sí contiene",
        observation: "Puede contener lácteos en purés o salsas, como mantequilla o nata.",
      },
      Apio: { status: "Sí contiene", observation: "Puede contener apio en fondos o guarniciones." },
      "Granos de sésamo": {
        status: "Sí contiene",
        observation: "Puede contener por sésamo o topping.",
      },
      "Dióxido de azufre y sulfitos": {
        status: "Sí contiene",
        observation: "Presente en el vino blanco y posibles reducciones.",
      },
    }),
  },
  "vaca-canaria": {
    id: "vaca-canaria",
    title: "Vaca canaria, cocción lenta, pimientos asados y jugo ligero",
    subtitle: "Tradición canaria con técnica y pureza.",
    represents: "La Palma",
    originNote: "Producto km 0, vaca canaria.",
    ingredients: [
      "Vaca canaria",
      "Pimiento asado",
      "Cebolla",
      "Ajo",
      "Vino tinto canario",
      "Aceite de oliva virgen extra",
      "Sal",
      "Hierbas aromáticas",
    ],
    containsSummary: "Gluten, lácteos, apio, sésamo y sulfitos.",
    traceNote:
      "Este plato puede contener trazas de otros alérgenos debido a la manipulación en cocina.",
    rows: rows({
      Gluten: {
        status: "Sí contiene",
        observation: "Puede contener trazas por fondos o guarniciones.",
      },
      Lácteos: {
        status: "Sí contiene",
        observation: "Puede contener lácteos en puré o acabado, como mantequilla o nata.",
      },
      Apio: { status: "Sí contiene", observation: "Puede contener apio en fondos o guarniciones." },
      "Granos de sésamo": {
        status: "Sí contiene",
        observation: "Puede contener sésamo en topping o aceite aromatizado.",
      },
      "Dióxido de azufre y sulfitos": {
        status: "Sí contiene",
        observation: "Presente en el vino tinto canario y reducciones.",
      },
    }),
  },
  "sorbete-lima": {
    id: "sorbete-lima",
    title: "Sorbete de lima canaria",
    subtitle: "Fresco, cítrico y ligero. Final perfecto.",
    represents: "Canarias",
    originNote: "Producto km 0, lima canaria.",
    ingredients: [
      "Zumo de lima canaria",
      "Ralladura de lima",
      "Agua",
      "Azúcar",
      "Dextrosa opcional",
      "Estabilizante natural opcional",
    ],
    containsSummary: "Fruta, lima, y azúcar. Apto para veganos.",
    traceNote:
      "Este plato puede contener trazas de otros alérgenos debido a la manipulación en cocina.",
    rows: rows({}),
  },
  "bienmesabe-aereo": {
    id: "bienmesabe-aereo",
    title: "Bienmesabe canario",
    subtitle: "Tradición dulce, textura sedosa y almendra tostada.",
    represents: "La Palma",
    originNote: "Producto km 0, almendra canaria.",
    ingredients: [
      "Almendra molida",
      "Azúcar",
      "Yemas de huevo",
      "Miel",
      "Vino dulce",
      "Limón",
      "Canela",
      "Clara de huevo opcional",
    ],
    containsSummary: "Almendra, huevo, gluten y sulfitos.",
    traceNote: "Puede contener trazas de sésamo y otros alérgenos por manipulación en cocina.",
    rows: rows({
      Gluten: {
        status: "Sí contiene",
        observation: "Puede contener trazas por proceso o acompañamientos.",
      },
      Huevos: {
        status: "Sí contiene",
        observation: "Incluye yema de huevo y opcionalmente clara.",
      },
      "Frutos de cáscara": {
        status: "Sí contiene",
        observation: "Contiene almendra, fruto de cáscara.",
      },
      "Granos de sésamo": {
        status: "Puede contener",
        observation: "Puede contener trazas de sésamo.",
      },
      "Dióxido de azufre y sulfitos": {
        status: "Sí contiene",
        observation: "Contiene vino dulce con sulfitos.",
      },
    }),
  },
  "pina-hierro": {
    id: "pina-hierro",
    title: "Piña del Hierro, texturas",
    subtitle: "Tradición tropical, frescura y acidez perfecta.",
    represents: "El Hierro",
    originNote: "Producto km 0, piña de El Hierro.",
    ingredients: [
      "Piña de El Hierro",
      "Lima",
      "Miel de palma",
      "Agua de piña",
      "Hierbabuena",
      "Aceite de oliva virgen extra opcional",
    ],
    containsSummary: "Lácteos si incluye helado o espuma.",
    traceNote:
      "Este plato puede contener trazas por contaminación cruzada en procesos y superficies.",
    rows: rows({
      Gluten: {
        status: "Puede contener",
        observation: "Puede contener trazas por contaminación cruzada, procesos o superficies.",
      },
      Lácteos: {
        status: "Sí contiene",
        observation: "Puede contener lácteos en helado o espuma, según elaboración.",
      },
    }),
  },
  "toffee-aireado": {
    id: "toffee-aireado",
    title: "Petit toffee canario",
    subtitle: "Textura cremosa, dulce profundo y toque salino.",
    represents: "Canarias",
    originNote: "Producto km 0, dulce canario.",
    ingredients: [
      "Leche",
      "Nata",
      "Azúcar",
      "Mantequilla",
      "Sal marina",
      "Galleta",
      "Vainilla",
      "Cacao opcional",
    ],
    containsSummary: "Gluten, huevos y lácteos.",
    traceNote:
      "Puede contener trazas de frutos de cáscara y sésamo debido a la manipulación en cocina.",
    rows: rows({
      Gluten: {
        status: "Sí contiene",
        observation: "Puede contener gluten por la galleta utilizada en la base.",
      },
      Huevos: {
        status: "Sí contiene",
        observation: "Puede contener yema de huevo en la elaboración.",
      },
      Lácteos: { status: "Sí contiene", observation: "Contiene leche, nata y mantequilla." },
      "Frutos de cáscara": {
        status: "Puede contener",
        observation: "Puede contener trazas de frutos de cáscara por contaminación cruzada.",
      },
      "Granos de sésamo": {
        status: "Puede contener",
        observation: "Puede contener trazas de sésamo en la galleta.",
      },
    }),
  },
};

export const allergenSheetList = Object.values(allergenSheets);
