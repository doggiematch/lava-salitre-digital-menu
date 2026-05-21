import fs from "node:fs";
import path from "node:path";
import pptxgen from "pptxgenjs";

const OUTPUT_FILE_NAME = "presentacion-lava-salitre.pptx";
const PROJECT_ACCESS_URL = "https://lava-salitre-digital-menu.vercel.app/";
const PROJECT_ACCESS_PASSWORD = "lava2026";

const root = process.cwd();
const publicPath = (...parts) => path.join(root, "public", ...parts);
const outputPath = publicPath("proyecto", OUTPUT_FILE_NAME);

const pptx = new pptxgen();
pptx.layout = "LAYOUT_WIDE";
pptx.author = "Rudy Lindgreen García";
pptx.company = "Lava & Salitre";
pptx.subject = "Presentación del proyecto Lava & Salitre";
pptx.title = "Lava & Salitre - Presentación";
pptx.lang = "es-ES";
pptx.theme = {
  headFontFace: "Georgia",
  bodyFontFace: "Aptos",
  lang: "es-ES",
};
pptx.defineLayout({ name: "LAYOUT_WIDE", width: 13.333, height: 7.5 });

const SLIDE_W = 13.333;
const SLIDE_H = 7.5;
const colors = {
  bg: "F8F5EE",
  paper: "FFFFFF",
  ink: "24302D",
  muted: "52615D",
  gold: "B8812C",
  sand: "EFE6D8",
  dark: "24302D",
  white: "FFFFFF",
};

const logoPath = publicPath("galeria", "logo-version-dorada-transparente.png");
const isotipoPath = publicPath("galeria", "isotipo.png");
const coverPath = publicPath("galeria", "fachada-atardecer.png");
const equipoPath = publicPath("galeria", "equipo.png");
const cartaPath = publicPath("proyecto", "fase-2", "carta-fisica", "portada-carta-menu.png");
const cartaQrPath = publicPath("proyecto", "fase-2", "carta-fisica", "interior-3-carta-menu.png");
const qrPath = publicPath("proyecto", "acceso-web-qr.png");
const ceoPath = publicPath("galeria", "rudy-ceo.png");

const dishExamples = [
  {
    group: "Entrante",
    name: "Ostra canaria",
    image: publicPath("fotos-platos", "ostra-canaria.png"),
    origin: "Ostra canaria, agua de mar filtrada, pepino y limón",
    technique: "Aire marino y granizado",
    recipe:
      "Se abre la ostra con cuidado y se conserva su agua natural. Se prepara un aire marino con agua de mar filtrada y lecitina, y se acompaña con granizado salino de pepino.",
    pairing:
      "Los Bermejos Malvasía Seco. Su frescura, mineralidad y toque salino acompañan el sabor marino de la ostra.",
    pairingWine: "Los Bermejos Malvasía Seco",
    text: "Un pase marino, fresco y salino que abre la experiencia con una lectura directa del Atlántico.",
  },
  {
    group: "Primero",
    name: "Ceviche de cherne",
    image: publicPath("fotos-platos", "ceviche-cherne.png"),
    origin: "Cherne fresco, cítricos, leche de tigre y cilantro",
    technique: "Maceración y clarificación",
    recipe:
      "El cherne se corta en dados y se marina con cítricos. Se termina con leche de tigre clarificada y aceite de cilantro para una lectura limpia, fresca y elegante.",
    pairing:
      "Tajinaste Blanco Seco. Su acidez y frescura acompañan el ceviche y respetan el protagonismo del pescado.",
    pairingWine: "Tajinaste Blanco Seco",
    text: "Un plato ácido, limpio y elegante que mantiene la frescura del pescado como protagonista.",
  },
  {
    group: "Segundo",
    name: "Conejo en salmorejo invertido",
    image: publicPath("fotos-platos", "conejo-salmorejo.png"),
    origin: "Conejo canario, ajo, pimentón, vino blanco, tomillo y especias",
    technique: "Marinado y cocción lenta",
    recipe:
      "El conejo se marina con ajo, pimentón, vino blanco, tomillo y especias. Después se cocina lentamente y el salmorejo se presenta con espuma y geles.",
    pairing:
      "Monje Tradicional Tinto. Sus notas afrutadas y especiadas combinan con el salmorejo y la carne de conejo.",
    pairingWine: "Monje Tradicional Tinto",
    text: "Reinterpreta una receta tradicional canaria desde una presentación contemporánea.",
  },
  {
    group: "Petit four",
    name: "Toffee crujiente aireado",
    image: publicPath("fotos-platos", "toffee-aireado.png"),
    origin: "Azúcar, nata, mantequilla y sal marina",
    technique: "Caramelización y aireado",
    recipe:
      "Se elabora un toffee con azúcar, nata y mantequilla. Después se airea y se enfría para lograr una textura ligera, porosa y crujiente.",
    pairing:
      "El Grifo Moscatel de Ana. Sus notas dulces de miel, fruta madura y caramelo acompañan el toffee.",
    pairingWine: "El Grifo Moscatel de Ana",
    text: "Un cierre dulce, salino y ligero que funciona como pequeño final de menú.",
  },
];

const presentationTechniques = [
  {
    title: "Esferificación",
    description:
      "Convierte líquidos en pequeñas esferas con capa fina exterior e interior líquido que explota en boca.",
    application: "Mojos, caldos, jugos marinos o tuno indio.",
  },
  {
    title: "Nitrógeno líquido",
    description:
      "Congela rápido y permite crear helados al momento, contrastes de frío y efectos visuales puntuales.",
    application: "Postres, prepostres o bocados concretos.",
  },
  {
    title: "Deconstrucción",
    description:
      "Separa los elementos de un plato tradicional y los presenta de otra manera manteniendo su sabor.",
    application: "Papas arrugadas, mojos o salmorejos reinterpretados.",
  },
  {
    title: "Espumas",
    description:
      "Transforman cremas, salsas o líquidos en texturas ligeras y aireadas mediante sifón.",
    application: "Gofio, queso canario, marisco o mojo suave.",
  },
  {
    title: "Gelificaciones",
    description:
      "Convierten líquidos en geles con agar-agar, gelatina o pectina para dar forma y textura.",
    application: "Puntos cítricos, frutales o marinos.",
  },
];

function addSlideBase(slide, { dark = false, footer = true } = {}) {
  slide.background = { color: dark ? colors.dark : colors.bg };
  if (!dark) {
    slide.addShape(pptx.ShapeType.rect, {
      x: 0,
      y: 0,
      w: SLIDE_W,
      h: SLIDE_H,
      fill: { color: colors.bg },
      line: { color: colors.bg },
    });
  }

  if (footer) {
    slide.addText("LAVA & SALITRE", {
      x: 9.25,
      y: 0.28,
      w: 2.15,
      h: 0.24,
      fontFace: "Aptos",
      fontSize: 8,
      bold: true,
      charSpace: 2,
      color: dark ? colors.white : colors.ink,
      margin: 0,
    });
    addImageIfExists(slide, logoPath, { x: 11.5, y: 0.18, w: 0.52, h: 0.32, sizing: "contain" });
  }
}

function addImageIfExists(slide, imagePath, { x, y, w, h, sizing = "cover", transparency = 0 }) {
  if (!fs.existsSync(imagePath)) return;
  slide.addImage({
    path: imagePath,
    x,
    y,
    w,
    h,
    transparency,
    sizing: { type: sizing, w, h },
  });
}

function addTitle(slide, eyebrow, title, subtitle, opts = {}) {
  const x = opts.x ?? 0.62;
  const y = opts.y ?? 0.65;
  const w = opts.w ?? 6.6;
  const dark = opts.dark ?? false;
  slide.addText(eyebrow, {
    x,
    y,
    w,
    h: 0.22,
    fontFace: "Aptos",
    fontSize: 8,
    bold: true,
    charSpace: 2.2,
    color: colors.gold,
    margin: 0,
  });
  slide.addText(title, {
    x,
    y: y + 0.35,
    w,
    h: opts.titleH ?? 0.86,
    fontFace: "Georgia",
    fontSize: opts.fontSize ?? 32,
    bold: true,
    color: dark ? colors.white : colors.ink,
    breakLine: false,
    fit: "shrink",
    margin: 0,
  });
  slide.addShape(pptx.ShapeType.line, {
    x,
    y: y + (opts.ruleY ?? 1.18),
    w: 0.92,
    h: 0,
    line: { color: colors.gold, width: 1.2 },
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x,
      y: y + (opts.subtitleY ?? 1.42),
      w,
      h: opts.subtitleH ?? 0.56,
      fontFace: "Aptos",
      fontSize: 12,
      color: dark ? "EFE6D8" : colors.muted,
      fit: "shrink",
      margin: 0,
      breakLine: false,
    });
  }
}

function addCard(slide, { x, y, w, h, title, text, kicker, fill = colors.paper }) {
  slide.addShape(pptx.ShapeType.rect, {
    x,
    y,
    w,
    h,
    rectRadius: 0.04,
    fill: { color: fill, transparency: 6 },
    line: { color: "D9CEC0", transparency: 10 },
  });
  if (kicker) {
    slide.addText(kicker, {
      x: x + 0.18,
      y: y + 0.16,
      w: w - 0.36,
      h: 0.18,
      fontFace: "Aptos",
      fontSize: 7,
      bold: true,
      charSpace: 1.6,
      color: colors.gold,
      margin: 0,
    });
  }
  slide.addText(title, {
    x: x + 0.18,
    y: y + (kicker ? 0.44 : 0.18),
    w: w - 0.36,
    h: 0.36,
    fontFace: "Georgia",
    fontSize: 16,
    bold: true,
    color: colors.ink,
    fit: "shrink",
    margin: 0,
  });
  slide.addText(text, {
    x: x + 0.18,
    y: y + (kicker ? 0.88 : 0.62),
    w: w - 0.36,
    h: h - (kicker ? 1.02 : 0.76),
    fontFace: "Aptos",
    fontSize: 9.2,
    color: colors.muted,
    breakLine: false,
    fit: "shrink",
    margin: 0,
  });
}

function addBulletList(slide, items, { x, y, w, h, fontSize = 13, color = colors.muted }) {
  slide.addText(items.map((item) => `• ${item}`).join("\n"), {
    x,
    y,
    w,
    h,
    fontFace: "Aptos",
    fontSize,
    color,
    breakLine: false,
    fit: "shrink",
    margin: 0,
    paraSpaceAfterPt: 7,
  });
}

function addCoverSlide() {
  const slide = pptx.addSlide();
  slide.background = { color: colors.dark };
  addImageIfExists(slide, coverPath, { x: 0, y: 0, w: SLIDE_W, h: SLIDE_H, sizing: "cover" });
  slide.addShape(pptx.ShapeType.rect, {
    x: 0,
    y: 0,
    w: SLIDE_W,
    h: SLIDE_H,
    fill: { color: "000000", transparency: 30 },
    line: { color: "000000", transparency: 100 },
  });
  addTitle(slide, "EXPOSICIÓN DEL PROYECTO", "Lava & Salitre", "Cocina canaria de vanguardia", {
    x: 0.75,
    y: 4.3,
    w: 6.8,
    dark: true,
    fontSize: 42,
    titleH: 0.95,
  });
  slide.addText("Rudy Lindgreen García", {
    x: 0.76,
    y: 6.18,
    w: 4,
    h: 0.3,
    fontFace: "Aptos",
    fontSize: 12,
    bold: true,
    color: colors.white,
    margin: 0,
  });
}

function addIdentitySlide() {
  const slide = pptx.addSlide();
  addSlideBase(slide);
  addTitle(
    slide,
    "1. PRESENTACIÓN DEL RESTAURANTE",
    "Nombre, logotipo y eslogan",
    "La marca resume la unión entre la tierra volcánica y el Atlántico.",
  );
  addImageIfExists(slide, logoPath, { x: 7.8, y: 1.45, w: 3.8, h: 2.05, sizing: "contain" });
  addCard(slide, {
    x: 0.75,
    y: 2.85,
    w: 3.65,
    h: 1.6,
    title: "Lava",
    text: "Representa la tierra volcánica, el fuego, la memoria insular y la fuerza del paisaje canario.",
  });
  addCard(slide, {
    x: 4.65,
    y: 2.85,
    w: 3.65,
    h: 1.6,
    title: "Salitre",
    text: "Representa el Atlántico, la sal marina, el producto de costa y la frescura del restaurante.",
  });
  addCard(slide, {
    x: 8.55,
    y: 4.2,
    w: 3.55,
    h: 1.35,
    title: "Tierra y Mar",
    text: "Claim directo que une producto local, paisaje y experiencia gastronómica.",
  });
}

function addConceptSlide() {
  const slide = pptx.addSlide();
  addSlideBase(slide);
  addTitle(
    slide,
    "2. CONCEPTO DEL RESTAURANTE",
    "Tradición canaria con mirada actual",
    "Producto local, técnica de vanguardia y relato territorial.",
  );
  addCard(slide, {
    x: 0.75,
    y: 2.3,
    w: 3.55,
    h: 2.05,
    title: "Producto km 0",
    text: "Pescados frescos, gofio, papas, miel de palma, almendra de Tejeda, frutas tropicales, leche de cabra, vinos volcánicos y sal marina.",
  });
  addCard(slide, {
    x: 4.55,
    y: 2.3,
    w: 3.55,
    h: 2.05,
    title: "Vanguardia",
    text: "La técnica se usa para mejorar textura, temperatura, lectura del plato y experiencia, sin ocultar el sabor canario.",
  });
  addCard(slide, {
    x: 8.35,
    y: 2.3,
    w: 3.55,
    h: 2.05,
    title: "Relato",
    text: "Cada pase conecta con una isla, un producto, una técnica o una memoria gastronómica de Canarias.",
  });
  addBulletList(
    slide,
    [
      "Cocina canaria minimalista y actual.",
      "Menú degustación con recorrido por mar, cumbre, fuego y memoria.",
      "Diseño sobrio, premium y coherente con la identidad visual.",
    ],
    { x: 1.05, y: 5.05, w: 10.8, h: 1.05, fontSize: 13 },
  );
}

function addAudienceSlide() {
  const slide = pptx.addSlide();
  addSlideBase(slide);
  addTitle(
    slide,
    "3. PÚBLICO OBJETIVO",
    "Clientes que buscan una experiencia especial",
    "No es una propuesta para comer rápido: es una experiencia gastronómica con pausa.",
  );
  const items = [
    ["Edad", "Público adulto de 30 a 60 años, con especial peso entre 35 y 55."],
    [
      "Perfil",
      "Cliente local y turista gastronómico que busca producto canario, relato y experiencia cuidada.",
    ],
    [
      "Motivación",
      "Parejas, pequeños grupos, gourmets y personas interesadas en sostenibilidad y cocina de autor.",
    ],
    [
      "Necesidad",
      "Buena comida, buen servicio, ambiente tranquilo, producto canario y presentación cuidada.",
    ],
  ];
  items.forEach(([title, text], i) => {
    addCard(slide, {
      x: 0.75 + (i % 2) * 5.95,
      y: 2.05 + Math.floor(i / 2) * 1.82,
      w: 5.45,
      h: 1.35,
      title,
      text,
    });
  });
}

function addExperienceSlide() {
  const slide = pptx.addSlide();
  addSlideBase(slide);
  addTitle(
    slide,
    "4. EXPERIENCIA GASTRONÓMICA",
    "El cliente vive tierra, mar y memoria",
    "La sala, el paisaje y la carta trabajan juntos para contar Canarias.",
  );
  addImageIfExists(slide, coverPath, { x: 7.35, y: 1.35, w: 4.7, h: 3.7, sizing: "cover" });
  addCard(slide, {
    x: 0.75,
    y: 2.05,
    w: 2.85,
    h: 1.75,
    title: "Ambiente",
    text: "Tranquilo, elegante y vinculado al paisaje de Agaete, con piedra volcánica, mar y luz natural.",
  });
  addCard(slide, {
    x: 3.85,
    y: 2.05,
    w: 2.85,
    h: 1.75,
    title: "Sensaciones",
    text: "Frescura atlántica, fuerza de la tierra, producto de temporada y sabores reconocibles.",
  });
  addCard(slide, {
    x: 0.75,
    y: 4.05,
    w: 5.95,
    h: 1.55,
    title: "Experiencia",
    text: "El cliente recorre Canarias a través de bocados de mar, cumbre, fuego y memoria insular.",
  });
}

function addMenuSlide() {
  const slide = pptx.addSlide();
  addSlideBase(slide);
  addTitle(
    slide,
    "5. LA CARTA GASTRONÓMICA",
    "19 elaboraciones organizadas en 3 menús",
    "Menú Lava, Menú Salitre y Menú Lava & Salitre.",
  );
  const cards = [
    ["Entrantes", "2 recetas", "Bruma de Agaete y Ostra canaria."],
    ["Primeros platos", "2 recetas", "Perla Atlántica y Ceviche de cherne."],
    ["Segundos platos", "8 recetas", "Carnes, pescados y producto local como eje principal."],
    ["Sorbete", "1 receta", "Transición cítrica, salina y limpia."],
    ["Postres", "4 recetas", "Fruta canaria, chocolate, almendra y paisaje volcánico."],
    ["Petit four", "2 recetas", "Cierre dulce en bocado pequeño."],
  ];
  cards.forEach(([title, kicker, text], i) => {
    addCard(slide, {
      x: 0.75 + (i % 3) * 3.9,
      y: 1.95 + Math.floor(i / 3) * 1.8,
      w: 3.45,
      h: 1.38,
      kicker,
      title,
      text,
    });
  });
}

function addRecipeIntroSlide() {
  const slide = pptx.addSlide();
  addSlideBase(slide);
  addTitle(
    slide,
    "6. SELECCIÓN DE RECETAS",
    "Cuatro elaboraciones para presentar",
    "Fotografía, técnica culinaria, elaboración y maridaje en una slide por receta.",
  );
  dishExamples.forEach((dish, i) => {
    const x = 0.75 + (i % 4) * 3.05;
    addImageIfExists(slide, dish.image, { x, y: 2.15, w: 2.65, h: 1.55, sizing: "cover" });
    addCard(slide, {
      x,
      y: 3.9,
      w: 2.65,
      h: 1.75,
      kicker: dish.group,
      title: dish.name,
      text: dish.technique,
    });
  });
}

function addRecipeSlide(dish, index) {
  const slide = pptx.addSlide();
  addSlideBase(slide);
  addTitle(slide, `6.${index + 1}. ${dish.group.toUpperCase()}`, dish.name, dish.text, {
    x: 0.65,
    y: 0.78,
    w: 6.05,
    fontSize: 27,
  });
  addImageIfExists(slide, dish.image, { x: 0.78, y: 2.25, w: 5.55, h: 3.12, sizing: "cover" });
  addCard(slide, {
    x: 6.75,
    y: 1.35,
    w: 5.05,
    h: 1.1,
    title: "Técnica culinaria",
    text: dish.technique,
  });
  addCard(slide, {
    x: 6.75,
    y: 2.68,
    w: 5.05,
    h: 1.28,
    title: "Elaboración",
    text: dish.recipe,
  });
  addCard(slide, {
    x: 6.75,
    y: 4.18,
    w: 5.05,
    h: 1.1,
    title: "Maridaje elegido",
    text: dish.pairingWine,
  });
  addCard(slide, {
    x: 6.75,
    y: 5.5,
    w: 5.05,
    h: 1.0,
    title: "Por qué funciona",
    text: dish.pairing,
  });
}

function addTechniquesSlide() {
  const slide = pptx.addSlide();
  addSlideBase(slide);
  addTitle(
    slide,
    "7. TÉCNICAS CULINARIAS UTILIZADAS",
    "Vanguardia al servicio del producto",
    "Deconstrucción, esferificación, espumas, gelificaciones y frío aplicado con sentido.",
    { w: 7.4 },
  );
  presentationTechniques.forEach((technique, i) => {
    addCard(slide, {
      x: 0.75 + (i % 3) * 3.9,
      y: 2.0 + Math.floor(i / 3) * 1.82,
      w: i === 4 ? 7.35 : 3.45,
      h: 1.38,
      kicker: "Técnica de la web",
      title: technique.title,
      text: `${technique.description} Aplicación: ${technique.application}`,
    });
  });
}

function addDesignSlide() {
  const slide = pptx.addSlide();
  addSlideBase(slide);
  addTitle(
    slide,
    "8. DISEÑO DE LA CARTA",
    "Carta física elegante y conectada",
    "La identidad visual se mantiene entre papel, web, QR y fichas técnicas.",
  );
  addImageIfExists(slide, cartaPath, { x: 7.6, y: 1.22, w: 3.7, h: 4.95, sizing: "contain" });
  addCard(slide, {
    x: 0.75,
    y: 2.0,
    w: 5.85,
    h: 1.25,
    title: "Colores",
    text: "Negro volcánico, dorado, crema, blanco roto y acentos de salitre.",
  });
  addCard(slide, {
    x: 0.75,
    y: 3.45,
    w: 5.85,
    h: 1.25,
    title: "Tipografía",
    text: "Serif elegante para marca y titulares; sans clara para lectura digital.",
  });
  addCard(slide, {
    x: 0.75,
    y: 4.9,
    w: 5.85,
    h: 1.25,
    title: "Estilo",
    text: "Minimalista, sobrio, premium y ligado a la textura de la carta física.",
  });
}

function addInnovationSlide() {
  const slide = pptx.addSlide();
  addSlideBase(slide);
  addTitle(
    slide,
    "9. ELEMENTO MÁS INNOVADOR",
    "QR por elaboración y carta digital ampliada",
    "La tecnología amplía información sin recargar la carta ni sustituir el servicio.",
  );
  addImageIfExists(slide, cartaQrPath, { x: 7.15, y: 1.38, w: 4.6, h: 4.4, sizing: "cover" });
  addCard(slide, {
    x: 0.75,
    y: 2.05,
    w: 5.6,
    h: 1.3,
    title: "Qué lo hace único",
    text: "Cada elaboración puede abrir descripción, ingredientes, técnica, origen, alérgenos, imagen y maridaje.",
  });
  addCard(slide, {
    x: 0.75,
    y: 3.6,
    w: 5.6,
    h: 1.3,
    title: "Por qué aporta valor",
    text: "La carta impresa no se satura, el cliente entiende mejor el plato y el contenido puede actualizarse por temporada.",
  });
}

function addClosingSlide() {
  const slide = pptx.addSlide();
  addSlideBase(slide);
  addTitle(
    slide,
    "10. CIERRE DE LA EXPOSICIÓN",
    "Una propuesta completa, coherente y defendible",
    "Concepto, carta, técnica, diseño, web y documentación unidos en un mismo proyecto.",
    { w: 7.6 },
  );
  addImageIfExists(slide, equipoPath, { x: 7.3, y: 1.45, w: 4.4, h: 3.6, sizing: "cover" });
  addCard(slide, {
    x: 0.75,
    y: 2.3,
    w: 5.65,
    h: 1.25,
    title: "Conclusión",
    text: "Lava & Salitre ofrece una experiencia gastronómica canaria de vanguardia basada en producto local, técnica contemporánea e identidad visual coherente.",
  });
  addCard(slide, {
    x: 0.75,
    y: 3.78,
    w: 5.65,
    h: 1.25,
    title: "Resultado final",
    text: "Una propuesta gastronómica premium, comunicable, defendible y conectada con el territorio.",
  });
}

function addFinalAccessSlide() {
  const slide = pptx.addSlide();
  addSlideBase(slide, { dark: true, footer: false });
  slide.addText("MUCHAS GRACIAS", {
    x: 0.72,
    y: 0.42,
    w: 3.8,
    h: 0.2,
    fontFace: "Aptos",
    fontSize: 8,
    bold: true,
    charSpace: 2.4,
    color: colors.gold,
    margin: 0,
  });
  slide.addText("Acceso al proyecto", {
    x: 0.72,
    y: 0.78,
    w: 5.4,
    h: 0.58,
    fontFace: "Georgia",
    fontSize: 30,
    bold: true,
    color: colors.white,
    margin: 0,
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: 0.82,
    y: 1.65,
    w: 5.45,
    h: 4.75,
    fill: { color: "FFFFFF", transparency: 7 },
    line: { color: colors.gold, transparency: 18, width: 1 },
  });
  addImageIfExists(slide, qrPath, { x: 2.05, y: 1.95, w: 3.0, h: 3.0, sizing: "contain" });
  slide.addText(PROJECT_ACCESS_URL, {
    x: 1.05,
    y: 5.12,
    w: 5.0,
    h: 0.28,
    fontFace: "Georgia",
    fontSize: 13.2,
    color: colors.white,
    align: "center",
    hyperlink: { url: PROJECT_ACCESS_URL },
    fit: "shrink",
    margin: 0,
  });
  slide.addText(`Contraseña: ${PROJECT_ACCESS_PASSWORD}`, {
    x: 1.05,
    y: 5.58,
    w: 5,
    h: 0.22,
    fontFace: "Aptos",
    fontSize: 9,
    bold: true,
    color: "EFE6D8",
    align: "center",
    charSpace: 1.3,
    margin: 0,
  });

  slide.addShape(pptx.ShapeType.rect, {
    x: 7.35,
    y: 1.28,
    w: 3.85,
    h: 4.75,
    fill: { color: colors.dark, transparency: 100 },
    line: { color: colors.gold, width: 1.2 },
  });
  addImageIfExists(slide, ceoPath, { x: 7.62, y: 1.55, w: 3.3, h: 4.15, sizing: "contain" });
  slide.addText("Rudy Lindgreen García", {
    x: 6.9,
    y: 6.22,
    w: 4.8,
    h: 0.35,
    fontFace: "Georgia",
    fontSize: 19,
    bold: true,
    color: colors.white,
    align: "center",
    margin: 0,
  });
  slide.addText("CEO", {
    x: 7.9,
    y: 6.62,
    w: 2.8,
    h: 0.18,
    fontFace: "Aptos",
    fontSize: 8,
    bold: true,
    charSpace: 2,
    color: colors.gold,
    align: "center",
    margin: 0,
  });
}

addCoverSlide();
addIdentitySlide();
addConceptSlide();
addAudienceSlide();
addExperienceSlide();
addMenuSlide();
addRecipeIntroSlide();
dishExamples.forEach(addRecipeSlide);
addTechniquesSlide();
addDesignSlide();
addInnovationSlide();
addClosingSlide();
addFinalAccessSlide();

fs.mkdirSync(path.dirname(outputPath), { recursive: true });
await pptx.writeFile({ fileName: outputPath });
console.log(`PPTX_WRITTEN=${outputPath}`);
