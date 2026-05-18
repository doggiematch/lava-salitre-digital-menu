import { allDishes, menuList } from "@/data/menu";
import { technicalSheets } from "@/data/technicalSheets";

const reportDishIds = [
  "perla-atlantica",
  "bruma-agaete",
  "ostra-canaria",
  "ceviche-cherne",
  "bienmesabe-aereo",
  "pina-hierro",
] as const;

function isDefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

export const reportDishHighlights = reportDishIds
  .map((id) => {
    const dish = allDishes.find((item) => item.id === id);
    const sheet = technicalSheets[id];

    if (!dish) {
      return undefined;
    }

    return {
      id,
      name: dish.name,
      category: dish.categoryName,
      menu: dish.menuName,
      description: dish.description,
      technique: dish.technique,
      origin: dish.origin,
      ingredients: dish.ingredients.slice(0, 4),
      image: {
        src: sheet.photoSrc ?? sheet.sketchSrc ?? "",
        alt: dish.name,
      },
    };
  })
  .filter(isDefined);

export const reportMenuOverview = menuList.map((menu) => {
  const dishIds = new Set(
    menu.categories.flatMap((category) => category.dishes.map((dish) => dish.id)),
  );

  return {
    name: menu.name,
    tagline: menu.tagline,
    description: menu.description,
    count: dishIds.size,
  };
});
