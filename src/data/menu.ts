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

const lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget tellus a eros vehicula tincidunt. Suspendisse potenti.";
const loremLong =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at ultricies neque. Cras vitae mi quis lectus pulvinar interdum vitae nec sapien. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.";

const allergensPool = ["Gluten", "Lácteos", "Frutos secos", "Pescado", "Marisco", "Sulfitos", "Huevo", "Soja"];

const makeDish = (id: string, name: string, allergens: string[] = ["Gluten"], price = 18): Dish => ({
  id,
  name,
  description: lorem,
  longDescription: loremLong + " " + loremLong,
  ingredients: ["Producto km 0", "Aceite de oliva virgen", "Sal marina de Janubio", "Hierbas locales"],
  technique: "Cocción a baja temperatura sobre piedra volcánica",
  origin: "Pequeños productores de Gran Canaria",
  inspiration: "Inspirado en el paisaje volcánico de Timanfaya y la brisa del Atlántico.",
  allergens,
  price,
});

const baseCategories = (prefix: string): Category[] => [
  {
    id: "aperitivos",
    name: "Aperitivos",
    dishes: [
      makeDish(`${prefix}-ap-1`, "Bienmesabe Lunar", ["Frutos secos", "Huevo"], 14),
      makeDish(`${prefix}-ap-2`, "Mango de Salitre", ["Sulfitos"], 16),
      makeDish(`${prefix}-ap-3`, "Gofio en Nube", ["Gluten", "Lácteos"], 12),
    ],
  },
  {
    id: "primeros",
    name: "Primeros platos",
    dishes: [
      makeDish(`${prefix}-pr-1`, "Frangollo Volcánico", ["Lácteos", "Gluten"], 22),
      makeDish(`${prefix}-pr-2`, "Plátano en Bruma", ["Lácteos"], 21),
    ],
  },
  {
    id: "segundos",
    name: "Segundos platos",
    dishes: [
      makeDish(`${prefix}-sg-1`, "Quesillo Atlántico", ["Pescado", "Lácteos"], 28),
      makeDish(`${prefix}-sg-2`, "Almendra de Tejeda", ["Frutos secos"], 30),
    ],
  },
  {
    id: "postres",
    name: "Postres",
    dishes: [
      makeDish(`${prefix}-po-1`, "Miel de Palma Ahumada", ["Lácteos"], 12),
      makeDish(`${prefix}-po-2`, "Bienmesabe de Tirajana", ["Frutos secos", "Huevo"], 11),
    ],
  },
  {
    id: "petit",
    name: "Petit four",
    dishes: [
      makeDish(`${prefix}-pf-1`, "Trufa de Gofio", ["Gluten", "Lácteos"], 6),
      makeDish(`${prefix}-pf-2`, "Caramelo Salitre", ["Sulfitos"], 5),
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas / maridaje",
    dishes: [
      makeDish(`${prefix}-bb-1`, "Maridaje Lava", ["Sulfitos"], 35),
      makeDish(`${prefix}-bb-2`, "Vermut de Mar", ["Sulfitos"], 9),
    ],
  },
];

export const menus: Record<MenuKey, Menu> = {
  lava: {
    key: "lava",
    name: "Menú Lava",
    tagline: "El fuego de la tierra",
    description:
      "Un viaje cálido por sabores ahumados, brasas suaves y productos forjados sobre piedra volcánica.",
    categories: baseCategories("lava"),
  },
  salitre: {
    key: "salitre",
    name: "Menú Salitre",
    tagline: "El aliento del Atlántico",
    description:
      "Pescados de lonja, algas, brumas y vegetales del litoral. Un menú salino, fresco y mineral.",
    categories: baseCategories("salitre"),
  },
  "lava-salitre": {
    key: "lava-salitre",
    name: "Menú Lava & Salitre",
    tagline: "Tierra y mar en diálogo",
    description:
      "Nuestra propuesta degustación: el encuentro entre la brasa volcánica y la mineralidad oceánica.",
    categories: baseCategories("ls"),
  },
};

export const menuList = Object.values(menus);

export const allDishes = menuList.flatMap((m) =>
  m.categories.flatMap((c) => c.dishes.map((d) => ({ ...d, menuKey: m.key, menuName: m.name, categoryName: c.name })))
);
