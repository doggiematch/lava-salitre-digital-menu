import { technicalSheetList } from "./technicalSheets";

export type Dish = {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  ingredients: string[];
  technique: string;
  origin: string;
  inspiration: string;
  allergens: string[];
  price: number;
  technicalSheetId?: string;
};

export type Category = {
  id: string;
  name: string;
  dishes: Dish[];
};

export type MenuKey = "lava" | "salitre" | "lava-salitre";

export type Menu = {
  key: MenuKey;
  name: string;
  tagline: string;
  description: string;
  categories: Category[];
};

const allergensBySheet: Record<string, string[]> = {
  "perla-atlantica": ["Sin alérgenos principales declarados"],
  "bruma-agaete": ["Sin alérgenos principales declarables"],
  "cochino-negro": ["Gluten", "Lácteos", "Sulfitos"],
  "cabrito-cumbre": ["Gluten", "Lácteos", "Sulfitos"],
  "conejo-salmorejo": ["Lácteos", "Sulfitos"],
  "vaca-canaria": ["Lácteos", "Sulfitos", "Posibles trazas de gluten"],
  "ostra-canaria": ["Moluscos", "Soja"],
  "ceviche-cherne": ["Pescado", "Posibles trazas de gluten"],
  "vieja-sancochada": ["Pescado"],
  "sama-roquera": ["Pescado", "Lácteos"],
  "cabrilla-confitada": ["Pescado"],
  "atun-rojo": ["Pescado", "Soja opcional"],
  "ceniza-dulce": ["Lácteos", "Gluten", "Soja", "Huevo"],
  "bienmesabe-aereo": ["Frutos secos", "Huevo", "Sulfitos"],
  "bombon-volcanico": ["Gluten", "Soja", "Alcohol", "Posibles trazas de lácteos y frutos secos"],
  "palma-cacao": ["Lácteos", "Gluten", "Soja", "Frutos secos"],
  "pina-hierro": ["Lácteos", "Gluten", "Posibles trazas de frutos secos"],
  "toffee-aireado": ["Lácteos", "Posibles trazas"],
  "sorbete-lima": ["Sin alérgenos principales declarables"],
};

const priceBySheet: Record<string, number> = {
  "perla-atlantica": 1.2,
  "bruma-agaete": 1.8,
  "cochino-negro": 4.2,
  "cabrito-cumbre": 4.8,
  "conejo-salmorejo": 3.8,
  "vaca-canaria": 9.5,
  "ostra-canaria": 3.8,
  "ceviche-cherne": 3.5,
  "vieja-sancochada": 4,
  "sama-roquera": 4.5,
  "cabrilla-confitada": 5,
  "atun-rojo": 7.5,
  "ceniza-dulce": 4.5,
  "bienmesabe-aereo": 4.8,
  "bombon-volcanico": 2.5,
  "palma-cacao": 4.5,
  "pina-hierro": 4.5,
  "toffee-aireado": 2,
  "sorbete-lima": 0,
};

const categoryBySheet: Record<string, string> = {
  "perla-atlantica": "primeros",
  "bruma-agaete": "entrantes",
  "cochino-negro": "segundos",
  "cabrito-cumbre": "segundos",
  "conejo-salmorejo": "segundos",
  "vaca-canaria": "segundos",
  "ostra-canaria": "entrantes",
  "ceviche-cherne": "primeros",
  "vieja-sancochada": "segundos",
  "sama-roquera": "segundos",
  "cabrilla-confitada": "segundos",
  "atun-rojo": "segundos",
  "ceniza-dulce": "postres",
  "bienmesabe-aereo": "postres",
  "bombon-volcanico": "petit",
  "palma-cacao": "postres",
  "pina-hierro": "postres",
  "toffee-aireado": "petit",
  "sorbete-lima": "sorbete",
};

const categoryNames: Record<string, string> = {
  entrantes: "Entrantes",
  primeros: "Primeros platos",
  segundos: "Segundos platos",
  sorbete: "Sorbete",
  postres: "Postres",
  petit: "Dulce final",
};

const dishes: Dish[] = technicalSheetList.map((sheet) => {
  const ingredientNames = sheet.ingredients.slice(0, 4).map((row) => row.label);
  const description = sheet.plate.find((row) => row.label === "Descripción del plato")?.value ?? "";
  const technique = sheet.plate.find((row) => row.label === "Técnica culinaria aplicada")?.value ?? "";
  const inspiration = sheet.plate.find((row) => row.label === "Inspiración o historia")?.value ?? "";
  const origin = sheet.ingredient.find((row) => row.label === "Isla o zona de producción")?.value ?? "";

  return {
    id: sheet.id,
    name: sheet.name,
    description,
    longDescription: description,
    ingredients: ingredientNames,
    technique,
    origin,
    inspiration,
    allergens: allergensBySheet[sheet.id] ?? [],
    price: priceBySheet[sheet.id] ?? 0,
    technicalSheetId: sheet.id,
  };
});

function categoriesFor(sheetIds: string[]): Category[] {
  const selected = dishes.filter((dish) => sheetIds.includes(dish.id));
  const categoryOrder = ["entrantes", "primeros", "segundos", "sorbete", "postres", "petit"];

  return categoryOrder
    .map((categoryId) => ({
      id: categoryId,
      name: categoryNames[categoryId],
      dishes: selected.filter((dish) => categoryBySheet[dish.id] === categoryId),
    }))
    .filter((category) => category.dishes.length > 0);
}

const lavaSheetIds = [
  "bruma-agaete",
  "perla-atlantica",
  "cochino-negro",
  "cabrito-cumbre",
  "conejo-salmorejo",
  "vaca-canaria",
  "sorbete-lima",
  "ceniza-dulce",
  "bienmesabe-aereo",
];

const salitreSheetIds = [
  "ostra-canaria",
  "ceviche-cherne",
  "vieja-sancochada",
  "sama-roquera",
  "cabrilla-confitada",
  "atun-rojo",
  "sorbete-lima",
  "palma-cacao",
  "pina-hierro",
  "toffee-aireado",
];

const lavaSalitreSheetIds = [
  "bruma-agaete",
  "perla-atlantica",
  "ostra-canaria",
  "cochino-negro",
  "vieja-sancochada",
  "cabrito-cumbre",
  "conejo-salmorejo",
  "vaca-canaria",
  "sama-roquera",
  "cabrilla-confitada",
  "atun-rojo",
  "sorbete-lima",
  "bienmesabe-aereo",
  "pina-hierro",
  "toffee-aireado",
];

export const menus: Record<MenuKey, Menu> = {
  lava: {
    key: "lava",
    name: "Menú Lava",
    tagline: "El fuego de la tierra",
    description:
      "Un recorrido por carnes canarias, fondos intensos, cocciones largas y matices volcánicos.",
    categories: categoriesFor(lavaSheetIds),
  },
  salitre: {
    key: "salitre",
    name: "Menú Salitre",
    tagline: "El aliento del Atlántico",
    description:
      "Bocados frescos, salinos y vegetales inspirados en la costa de Agaete y el producto canario.",
    categories: categoriesFor(salitreSheetIds),
  },
  "lava-salitre": {
    key: "lava-salitre",
    name: "Menú Lava & Salitre",
    tagline: "Tierra y mar en diálogo",
    description:
      "Una propuesta completa donde el fuego de la tierra se encuentra con la mineralidad del Atlántico.",
    categories: categoriesFor(lavaSalitreSheetIds),
  },
};

export const menuList = Object.values(menus);

export const allDishes = menuList.flatMap((m) =>
  m.categories.flatMap((c) =>
    c.dishes.map((d) => ({ ...d, menuKey: m.key, menuName: m.name, categoryName: c.name })),
  ),
);
