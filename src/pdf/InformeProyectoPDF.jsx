import { Document, Font, Image, Link as PdfLink, Page, Text, View } from "@react-pdf/renderer";
import {
  cartaFisicaImages,
  projectReportMeta,
  projectReportPhases,
  reportConclusion,
  reportIntroduction,
} from "@/data/projectReport";
import {
  phase1FullContent,
  phase2FullContent,
  phase3FullContent,
  phase4FullContent,
} from "@/data/projectReportFull";
import { allergenSheets } from "@/data/allergenSheets";
import { allDishes } from "@/data/menu";
import { technicalSheets } from "@/data/technicalSheets";
import { winePairings } from "@/data/winePairings";
import { styles } from "./pdfStyles";

const COVER_IMAGE_SRC = "/galeria/fachada-atardecer.png";
const HEADER_LOGO_SRC = "/galeria/logo-version-dorada-transparente.png";
const CEO_IMAGE_SRC = "/galeria/rudy-ceo.png";
const STUDENT_NAME = "Rudy Lindgreen García";
const PROJECT_ACCESS_URL = "https://lava-salitre-digital-menu.vercel.app/";
const PROJECT_ACCESS_PASSWORD = "lava2026";
const PROJECT_ACCESS_QR_SRC = "/proyecto/acceso-web-qr.png";
const COVER_INTRO_TEXT =
  "Una memoria gastronómica que traduce el paisaje canario en una experiencia de cocina de vanguardia: producto km 0, técnica contemporánea, sala cuidada e innovación culinaria al servicio del territorio.";
const RECIPE_CATEGORY_ORDER = [
  "Entrantes",
  "Primeros platos",
  "Segundos platos",
  "Sorbete",
  "Postres",
  "Petit four",
];
const KM0_INGREDIENTS_PER_PAGE = 10;

Font.registerHyphenationCallback((word) => [word]);

const INDEX_SECTIONS = [
  {
    number: "01",
    title: "Portada",
    subtitle: "Identidad visual y datos del proyecto",
    target: "cover",
  },
  {
    number: "02",
    title: "Índice",
    subtitle: "Navegación interna del informe",
    target: "index",
  },
  {
    number: "03",
    title: "Introducción del proyecto",
    subtitle: "Origen, alcance y propuesta gastronómica",
    target: "introduction",
  },
  ...projectReportPhases.map((phase, index) => ({
    number: String(index + 4).padStart(2, "0"),
    title: `${phase.phase}: ${phase.title}`,
    subtitle: phase.lead,
    target: phaseTargetId(phase.id),
  })),
  {
    number: "08",
    title: "Recetario técnico",
    subtitle: "Fichas horizontales por receta, QR, alérgenos y maridaje",
    target: "recipe-section",
  },
  {
    number: "09",
    title: "Conclusión final",
    subtitle: "Síntesis profesional y valor del proyecto",
    target: "conclusion",
  },
  {
    number: "10",
    title: "Acceso digital",
    subtitle: "QR, enlace y contraseña de la página",
    target: "digital-access",
  },
  {
    number: "11",
    title: "Cierre institucional",
    subtitle: "CEO del proyecto Lava & Salitre",
    target: "ceo-closing",
  },
];

function phaseTargetId(phaseId) {
  return `phase-${phaseId}`;
}

function assetSrc(src) {
  if (!src) return src;
  if (/^https?:\/\//i.test(src) || /^data:/i.test(src)) return src;

  const normalized = src.startsWith("/") ? src : `/${src}`;

  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}${normalized}`;
  }

  if (
    typeof process !== "undefined" &&
    process.versions?.node &&
    typeof process.cwd === "function"
  ) {
    return `file:///${encodeURI(`${process.cwd().replace(/\\/g, "/")}/public${normalized}`)}`;
  }

  return normalized;
}

function InteriorFooter() {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerTitle}>RUDY LINDGREEN GARCIA</Text>
      <Text
        style={styles.footerPageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}

function EditorialPageMarker({ dark = false }) {
  return (
    <View style={styles.pageIdentityMarker} fixed>
      <View style={[styles.pageIdentityRule, dark ? styles.pageIdentityRuleDark : undefined]} />
      <Text style={[styles.pageIdentityName, dark ? styles.pageIdentityTextDark : undefined]}>
        RUDY LINDGREEN GARCIA
      </Text>
      <Text
        style={[styles.pageIdentityNumber, dark ? styles.pageIdentityTextDark : undefined]}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}

function PageHeader() {
  return (
    <View style={styles.pageHeader} fixed>
      <Text style={styles.pageHeaderText}>LAVA & SALITRE</Text>
      <Image
        src={assetSrc(HEADER_LOGO_SRC)}
        alt="Logotipo de Lava & Salitre"
        style={styles.pageHeaderLogo}
      />
    </View>
  );
}

function ReportPage({ children, style, id, bookmark, showHeader = true, showFooter = true }) {
  return (
    <Page size="A4" id={id} bookmark={bookmark} style={[styles.page, style]}>
      {showHeader ? <PageHeader /> : null}
      {showHeader ? <View style={styles.pageAccent} fixed /> : null}
      {children}
      {showFooter ? (
        <>
          <InteriorFooter />
          <EditorialPageMarker />
        </>
      ) : null}
    </Page>
  );
}

function ImageFigure({ image, contain = false, wide = false, feature = false }) {
  if (!image?.src) return null;

  return (
    <View style={feature ? styles.figureFeature : styles.figure} wrap={false}>
      <Image
        src={assetSrc(image.src)}
        alt={image.alt}
        style={
          contain
            ? styles.imageContain
            : feature
              ? styles.featureImage
              : wide
                ? styles.wideImage
                : styles.heroImage
        }
      />
      {image.caption ? <Text style={styles.imageCaption}>{image.caption}</Text> : null}
    </View>
  );
}

function BulletList({ items }) {
  return (
    <View style={styles.highlightBlock}>
      {items.map((item) => (
        <View key={item} style={styles.bulletRow}>
          <Text style={styles.bulletDot}>•</Text>
          <Text style={styles.bulletText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function ImageGrid({ images, contain = false }) {
  return (
    <View style={styles.imageGrid}>
      {images.map((image, index) => (
        <View
          key={image.src}
          style={[
            styles.imageGridItem,
            (index + 1) % 2 === 0 ? styles.imageGridItemLast : undefined,
          ]}
          wrap={false}
        >
          <Image
            src={assetSrc(image.src)}
            alt={image.alt}
            style={contain ? styles.imageGridContain : styles.imageThumb}
          />
          <Text style={styles.imageCaption}>{image.caption}</Text>
        </View>
      ))}
    </View>
  );
}

function chunkItems(items, size) {
  const chunks = [];

  for (let index = 0; index < items.length; index += size) {
    chunks.push(items.slice(index, index + size));
  }

  return chunks;
}

function PhysicalMenuGalleryPages() {
  const pages = chunkItems(cartaFisicaImages, 2);

  return (
    <>
      {pages.map((pageImages, pageIndex) => (
        <ReportPage
          key={`carta-fisica-gallery-${pageIndex}`}
          bookmark={`Galería carta física ${pageIndex + 1}`}
        >
          <View style={styles.titleCluster}>
            <Text style={styles.topKicker}>Diseño de carta y maridaje</Text>
            <Text style={styles.h1}>
              {pageIndex === 0 ? "Galería de carta física" : "Carta física y maridaje"}
            </Text>
            <View style={styles.titleRule} />
          </View>
          <View style={styles.menuGalleryPage} wrap={false}>
            {pageImages.map((image) => (
              <View key={image.src} style={styles.menuGalleryItem}>
                <Image src={assetSrc(image.src)} alt={image.alt} style={styles.menuGalleryImage} />
                <Text style={styles.imageCaption}>{image.caption}</Text>
              </View>
            ))}
          </View>
        </ReportPage>
      ))}
    </>
  );
}

function DataTable({ headers, rows, widths, keepTogether = false }) {
  const columnWidths = widths ?? headers.map(() => `${100 / headers.length}%`);

  return (
    <View style={styles.table} wrap={keepTogether ? false : undefined}>
      <View style={styles.tableHeader} wrap={false} minPresenceAhead={42}>
        {headers.map((header, index) => (
          <Text
            key={header}
            style={[styles.tableCell, styles.tableHeadCell, { width: columnWidths[index] }]}
          >
            {header}
          </Text>
        ))}
      </View>
      {rows.map((row, rowIndex) => (
        <View key={`${row.join("-")}-${rowIndex}`} style={styles.tableRow} wrap={false}>
          {row.map((cell, index) => (
            <Text
              key={`${cell}-${index}`}
              style={[styles.tableCell, { width: columnWidths[index] }]}
            >
              {cell}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}

function ParagraphGroup({ paragraphs }) {
  return (
    <>
      {paragraphs.map((paragraph) => (
        <Text key={paragraph} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
    </>
  );
}

function EditorialSection({ kicker, title, lead, paragraphs, children }) {
  return (
    <View style={styles.fullSection} minPresenceAhead={90}>
      {kicker ? <Text style={styles.sectionKicker}>{kicker}</Text> : null}
      <Text style={styles.h2}>{title}</Text>
      {lead ? <Text style={styles.sectionLead}>{lead}</Text> : null}
      {paragraphs ? <ParagraphGroup paragraphs={paragraphs} /> : null}
      {children}
    </View>
  );
}

function CardGrid({ items, columns = 2, getTitle, getText, getMeta }) {
  return (
    <View style={styles.cardGrid}>
      {items.map((item, index) => {
        const title = getTitle(item, index);
        const text = getText(item, index);
        const meta = getMeta?.(item, index);

        return (
          <View
            key={`${title}-${index}`}
            wrap={false}
            style={[
              styles.editorialCard,
              columns === 3 ? styles.editorialCardThird : styles.editorialCardHalf,
              columns === 3
                ? (index + 1) % 3 === 0
                  ? styles.cardNoMargin
                  : undefined
                : (index + 1) % 2 === 0
                  ? styles.cardNoMargin
                  : undefined,
            ]}
          >
            {meta ? <Text style={styles.smallLabel}>{meta}</Text> : null}
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardText}>{text}</Text>
          </View>
        );
      })}
    </View>
  );
}

function NumberedListBlock({ items }) {
  return (
    <View style={styles.numberedList}>
      {items.map((item, index) => (
        <View key={`${item}-${index}`} style={styles.numberedRow}>
          <Text style={styles.numberedIndex}>{String(index + 1).padStart(2, "0")}</Text>
          <Text style={styles.numberedText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

function ImageTextFeature({ image, title, paragraphs }) {
  return (
    <View style={styles.imageTextFeature}>
      <Image src={assetSrc(image)} alt={title} style={styles.imageTextPhoto} />
      <View style={styles.imageTextBody}>
        <Text style={styles.h3}>{title}</Text>
        <ParagraphGroup paragraphs={paragraphs} />
      </View>
    </View>
  );
}

function LogoVersionGrid({ items }) {
  return (
    <View style={styles.logoVersionGrid}>
      {items.map((version, index) => (
        <View
          key={version.src}
          style={[
            styles.logoVersionCard,
            (index + 1) % 2 === 0 ? styles.logoVersionCardEven : undefined,
          ]}
        >
          <View style={styles.logoVersionFrame}>
            <Image
              src={assetSrc(version.src)}
              alt={version.title}
              style={styles.logoVersionImage}
            />
          </View>
          <Text style={styles.cardTitle}>{version.title}</Text>
          <Text style={styles.cardText}>{version.description}</Text>
        </View>
      ))}
    </View>
  );
}

function DetailCards({ rows, kind = "plate" }) {
  return (
    <View style={styles.detailCards}>
      {rows.map((row, index) => {
        const [id, name, category, ingredients, technique, narrative, visual] = row;

        return (
          <View
            key={id}
            style={[styles.detailCard, (index + 1) % 2 === 0 ? styles.cardNoMargin : undefined]}
            wrap={false}
          >
            <View style={styles.detailCardHeader}>
              <Text style={styles.detailIndex}>{String(index + 1).padStart(2, "0")}</Text>
              <View style={styles.detailTitleGroup}>
                <Text style={styles.smallLabel}>{category}</Text>
                <Text style={styles.detailTitle}>{name}</Text>
              </View>
            </View>
            <Text style={styles.detailLabel}>Ingredientes principales canarios</Text>
            <Text style={styles.cardText}>{ingredients}</Text>
            <Text style={styles.detailLabel}>Técnica innovadora aplicada</Text>
            <Text style={styles.cardText}>{technique}</Text>
            <Text style={styles.detailLabel}>{kind === "plate" ? "Relato" : "Narrativa"}</Text>
            <Text style={styles.cardText}>{narrative}</Text>
            <Text style={styles.detailLabel}>Presentación visual</Text>
            <Text style={styles.cardText}>{visual}</Text>
          </View>
        );
      })}
    </View>
  );
}

function NarrativeCards({ rows, includeIdea = true }) {
  return (
    <View style={styles.detailCards}>
      {rows.map((row, index) => {
        const [name, ideaOrStory, relationOrConnection, story, connection] = row;
        const hasIdea = includeIdea && story && connection;

        return (
          <View key={`${name}-${index}`} style={styles.narrativeCard} wrap={false}>
            <Text style={styles.smallLabel}>{String(index + 1).padStart(2, "0")}</Text>
            <Text style={styles.detailTitle}>{name}</Text>
            {hasIdea ? (
              <>
                <Text style={styles.detailLabel}>Idea principal</Text>
                <Text style={styles.cardText}>{ideaOrStory}</Text>
                <Text style={styles.detailLabel}>Relación con Canarias</Text>
                <Text style={styles.cardText}>{relationOrConnection}</Text>
                <Text style={styles.detailLabel}>Historia o inspiración</Text>
                <Text style={styles.cardText}>{story}</Text>
                <Text style={styles.detailLabel}>Conexión territorial</Text>
                <Text style={styles.cardText}>{connection}</Text>
              </>
            ) : (
              <>
                <Text style={styles.detailLabel}>Historia o inspiración</Text>
                <Text style={styles.cardText}>{ideaOrStory}</Text>
                <Text style={styles.detailLabel}>Relación con Canarias</Text>
                <Text style={styles.cardText}>{relationOrConnection}</Text>
              </>
            )}
          </View>
        );
      })}
    </View>
  );
}

function sheetRowValue(rows, label) {
  return rows.find((row) => row.label === label)?.value ?? "";
}

function recipeUrl(dish) {
  return `${PROJECT_ACCESS_URL}carta-digital/${dish.id}`;
}

function recipeQrSrc(dish) {
  return `/proyecto/qr/${dish.id}.png`;
}

function recipeImageSrc(sheet) {
  return sheet?.photoSrc ?? sheet?.sketchSrc;
}

function categoryFromSheet(sheet) {
  if (!sheet) return "Postres";
  if (/entrante/i.test(sheet.type)) return "Entrantes";
  if (/primer/i.test(sheet.type)) return "Primeros platos";
  if (/segundo/i.test(sheet.type)) return "Segundos platos";
  if (/sorbete/i.test(sheet.type)) return "Sorbete";
  if (/petit/i.test(sheet.type)) return "Petit four";
  return "Postres";
}

function recipeDishes() {
  const menuDishMap = new Map();

  allDishes.forEach((dish) => {
    const current = menuDishMap.get(dish.id);

    if (current) {
      if (!current.menuNames.includes(dish.menuName)) current.menuNames.push(dish.menuName);
      return;
    }

    menuDishMap.set(dish.id, {
      ...dish,
      menuNames: [dish.menuName],
    });
  });

  return [...phase2FullContent.plateRows, ...phase2FullContent.dessertRows]
    .map((row, sourceIndex) => {
      const [id, name, , ingredients, technique, inspiration] = row;
      const menuDish = menuDishMap.get(id);
      const sheet = technicalSheets[id];
      const sheetDescription = sheet ? sheetRowValue(sheet.plate, "Descripción del plato") : "";
      const sheetOrigin = sheet ? sheetRowValue(sheet.ingredient, "Isla o zona de producción") : "";

      return {
        id,
        name: menuDish?.name ?? sheet?.name ?? name,
        description: menuDish?.description ?? sheetDescription,
        longDescription: menuDish?.longDescription ?? sheetDescription,
        ingredients: menuDish?.ingredients ?? ingredients.split(",").map((item) => item.trim()),
        technique: menuDish?.technique ?? technique,
        origin: menuDish?.origin ?? sheetOrigin,
        inspiration: menuDish?.inspiration ?? inspiration,
        allergens: menuDish?.allergens ?? [],
        price: menuDish?.price ?? 0,
        technicalSheetId: id,
        menuNames: menuDish?.menuNames ??
          sheet?.menus
            ?.split("·")
            .map((item) => item.trim())
            .filter(Boolean) ?? ["Menú Lava & Salitre"],
        categoryName: menuDish?.categoryName ?? categoryFromSheet(sheet),
        sourceIndex,
      };
    })
    .sort((a, b) => {
      const categoryDelta =
        RECIPE_CATEGORY_ORDER.indexOf(a.categoryName) -
        RECIPE_CATEGORY_ORDER.indexOf(b.categoryName);

      return categoryDelta || a.sourceIndex - b.sourceIndex;
    });
}

function recipeCategoryGroups(dishes) {
  return RECIPE_CATEGORY_ORDER.map((category) => ({
    category,
    dishes: dishes.filter((dish) => dish.categoryName === category),
  })).filter((group) => group.dishes.length > 0);
}

function importantAllergenRows(allergenSheet) {
  if (!allergenSheet?.rows) return [];
  return allergenSheet.rows.filter((row) => row.status !== "No contiene");
}

function splitRows(rows) {
  const middle = Math.ceil(rows.length / 2);
  return [rows.slice(0, middle), rows.slice(middle)];
}

function RecipeHeader() {
  return (
    <View style={styles.recipePageHeader} fixed>
      <Text style={styles.recipePageHeaderText}>LAVA & SALITRE</Text>
      <Image
        src={assetSrc(HEADER_LOGO_SRC)}
        alt="Logotipo de Lava & Salitre"
        style={styles.recipePageHeaderLogo}
      />
    </View>
  );
}

function RecipeFooter() {
  return (
    <View style={styles.recipeFooter} fixed>
      <Text style={styles.footerTitle}>RUDY LINDGREEN GARCIA</Text>
      <Text
        style={styles.footerPageNumber}
        render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
      />
    </View>
  );
}

function RecipeSectionCover({ dishes }) {
  const groups = recipeCategoryGroups(dishes);

  return (
    <ReportPage id="recipe-section" bookmark="Recetario técnico">
      <View style={styles.titleCluster}>
        <Text style={styles.topKicker}>Fase 2 · Recetario</Text>
        <Text style={styles.h1}>Fichas de platos, postres y petit four</Text>
        <View style={styles.titleRule} />
      </View>

      <Text style={styles.lead}>
        A continuación se presenta el recetario técnico del proyecto: una ficha horizontal por
        elaboración, con fotografía en formato 16:9, menús de pertenencia, QR de consulta,
        alérgenos, maridaje y desarrollo culinario.
      </Text>

      <View style={styles.recipeCoverGrid}>
        {groups.map((group, index) => (
          <View
            key={group.category}
            style={[styles.recipeCoverCard, (index + 1) % 2 === 0 ? styles.cardNoMargin : null]}
          >
            <Text style={styles.recipeCoverNumber}>{String(index + 1).padStart(2, "0")}</Text>
            <Text style={styles.recipeCoverTitle}>{group.category}</Text>
            <Text style={styles.recipeCoverMeta}>{group.dishes.length} recetas</Text>
            <Text style={styles.cardText}>{group.dishes.map((dish) => dish.name).join(" · ")}</Text>
          </View>
        ))}
      </View>

      <View style={styles.infoBand} wrap={false}>
        <Text style={styles.h3}>Orden de lectura</Text>
        <Text style={styles.paragraph}>
          Primero se presentan los platos salados en este orden: entrantes, primeros platos y
          segundos platos. Después se incorpora el sorbete como transición y, finalmente, los
          postres y los petit four.
        </Text>
      </View>
    </ReportPage>
  );
}

function RecipeKeyValue({ label, value }) {
  if (!value) return null;

  return (
    <View style={styles.recipeKeyValue}>
      <Text style={styles.recipeLabel}>{label}</Text>
      <Text style={styles.recipeText}>{value}</Text>
    </View>
  );
}

function RecipeIngredients({ rows }) {
  const columns = splitRows(rows);

  return (
    <View style={styles.recipeIngredientColumns}>
      {columns.map((column, columnIndex) => (
        <View
          key={`ingredient-column-${columnIndex}`}
          style={[
            styles.recipeIngredientColumn,
            columnIndex === 1 ? styles.recipeIngredientColumnLast : null,
          ]}
        >
          {column.map((row) => (
            <View key={`${row.label}-${row.value}`} style={styles.recipeIngredientRow}>
              <Text style={styles.recipeIngredientName}>{row.label}</Text>
              <Text style={styles.recipeIngredientAmount}>{row.value}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}

function recipePairingFor(dish) {
  if (winePairings[dish.id]) return winePairings[dish.id];

  if (dish.id === "bombon-volcanico") {
    return {
      dishId: dish.id,
      dishName: dish.name,
      wine: "El Grifo Moscatel de Ana",
      wineryIsland: "Bodega El Grifo · Lanzarote",
      grape: "Moscatel de Alejandría",
      reason:
        "El bombón volcánico combina chocolate negro, ron canario y cacao. El Moscatel de Ana acompaña el relleno licoroso, recoge el lado tostado del cacao y aporta dulzor sin hacer pesado el cierre del menú.",
      summary:
        "Maridaje dulce, aromático y elegante para cerrar la experiencia con un bocado de chocolate, ron y memoria volcánica.",
    };
  }

  return undefined;
}

function RecipePairing({ pairing }) {
  if (!pairing) {
    return (
      <RecipeKeyValue
        label="Maridaje"
        value="Pendiente de asignación específica dentro de la propuesta de vinos canarios."
      />
    );
  }

  return (
    <>
      <RecipeKeyValue label="Vino elegido" value={pairing.wine} />
      <RecipeKeyValue label="Bodega / isla" value={pairing.wineryIsland} />
      <RecipeKeyValue label="Uva" value={pairing.grape} />
      <RecipeKeyValue label="Por qué marida" value={pairing.reason} />
      <RecipeKeyValue label="Resumen" value={pairing.summary} />
    </>
  );
}

function RecipeAllergens({ allergenSheet, dish }) {
  const importantRows = importantAllergenRows(allergenSheet);

  return (
    <>
      <RecipeKeyValue
        label="Resumen de alérgenos"
        value={allergenSheet?.containsSummary ?? dish.allergens.join(" · ")}
      />
      {importantRows.length ? (
        <RecipeKeyValue
          label="Contiene / puede contener"
          value={importantRows
            .map((row) => `${row.allergen}: ${row.status}. ${row.observation}`)
            .join(" ")}
        />
      ) : null}
      <RecipeKeyValue label="Trazas / observación" value={allergenSheet?.traceNote} />
    </>
  );
}

function RecipeLandscapePage({ dish, index, total }) {
  const sheet = technicalSheets[dish.technicalSheetId ?? dish.id];
  const pairing = recipePairingFor(dish);
  const allergenSheet = allergenSheets[dish.id];
  const photoSrc = recipeImageSrc(sheet);
  const digitalUrl = recipeUrl(dish);
  const price = sheet ? sheetRowValue(sheet.plate, "Precio estimado") : "";

  return (
    <Page
      size="A4"
      orientation="landscape"
      id={`recipe-${dish.id}`}
      bookmark={`Receta: ${dish.name}`}
      style={styles.recipePage}
    >
      <RecipeHeader />

      <View style={styles.recipeTopRow} wrap={false}>
        <View style={styles.recipePhotoBlock}>
          {photoSrc ? (
            <Image src={assetSrc(photoSrc)} alt={dish.name} style={styles.recipePhoto} />
          ) : null}
          <View style={styles.recipePhotoCaption}>
            <Text style={styles.recipePhotoCaptionText}>Fotografía gastronómica · ratio 16:9</Text>
          </View>
        </View>

        <View style={styles.recipeIntroBlockLandscape}>
          <Text style={styles.recipeKicker}>
            Receta {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} ·{" "}
            {dish.categoryName}
          </Text>
          <Text style={styles.recipeTitle}>{dish.name}</Text>
          <Text style={styles.recipeMenuText}>{dish.menuNames.join(" · ")}</Text>
          <Text style={styles.recipeLeadText}>{dish.description}</Text>

          <View style={styles.recipeQrRow}>
            <Image
              src={assetSrc(recipeQrSrc(dish))}
              alt={`QR de ${dish.name}`}
              style={styles.recipeQrImage}
            />
            <View style={styles.recipeQrText}>
              <Text style={styles.recipeLabel}>QR ficha digital</Text>
              <PdfLink src={digitalUrl} style={styles.recipeUrl}>
                {digitalUrl}
              </PdfLink>
              <Text style={styles.recipePassword}>Contraseña: {PROJECT_ACCESS_PASSWORD}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.recipeColumns} wrap={false}>
        <View style={styles.recipeColumnLarge}>
          <Text style={styles.recipeColumnTitle}>Desarrollo culinario</Text>
          <RecipeKeyValue
            label="Inspiración o historia"
            value={sheet ? sheetRowValue(sheet.plate, "Inspiración o historia") : dish.inspiration}
          />
          <RecipeKeyValue
            label="Técnica culinaria aplicada"
            value={
              sheet ? sheetRowValue(sheet.plate, "Técnica culinaria aplicada") : dish.technique
            }
          />
          <RecipeKeyValue
            label="Descripción del plato"
            value={sheet ? sheetRowValue(sheet.plate, "Descripción del plato") : dish.description}
          />
        </View>

        <View style={styles.recipeColumnLarge}>
          <Text style={styles.recipeColumnTitle}>Ingredientes</Text>
          {sheet ? <RecipeIngredients rows={sheet.ingredients} /> : null}
          <RecipeKeyValue
            label="Procedencia"
            value={
              sheet ? sheetRowValue(sheet.ingredient, "Isla o zona de producción") : dish.origin
            }
          />
          <RecipeKeyValue label="Precio estimado" value={price} />
        </View>

        <View style={styles.recipeColumn}>
          <Text style={styles.recipeColumnTitle}>Maridaje</Text>
          <RecipePairing pairing={pairing} />
        </View>

        <View style={styles.recipeColumnLast}>
          <Text style={styles.recipeColumnTitle}>Alérgenos y montaje</Text>
          <RecipeAllergens allergenSheet={allergenSheet} dish={dish} />
          {sheet ? (
            <>
              <RecipeKeyValue
                label="Elementos de emplatado"
                value={sheet.design.elements.join(" · ")}
              />
              <RecipeKeyValue label="Texturas" value={sheet.design.textures.join(" · ")} />
              <RecipeKeyValue label="Decoración" value={sheet.design.decoration} />
            </>
          ) : null}
        </View>
      </View>

      <RecipeFooter />
      <EditorialPageMarker />
    </Page>
  );
}

function TechnicalSheetCard({ sheet, index }) {
  const imageSrc = sheet.photoSrc ?? sheet.sketchSrc;

  return (
    <View style={styles.technicalCard} minPresenceAhead={120}>
      <View style={styles.technicalHeader}>
        <Text style={styles.detailIndex}>{String(index + 1).padStart(2, "0")}</Text>
        <View style={styles.detailTitleGroup}>
          <Text style={styles.smallLabel}>
            {sheet.type} | {sheet.menus}
          </Text>
          <Text style={styles.detailTitle}>{sheet.name}</Text>
        </View>
      </View>

      {imageSrc ? (
        <Image src={assetSrc(imageSrc)} alt={sheet.name} style={styles.technicalImage} />
      ) : null}

      <Text style={styles.detailLabel}>Inspiración o historia</Text>
      <Text style={styles.cardText}>{sheetRowValue(sheet.plate, "Inspiración o historia")}</Text>
      <Text style={styles.detailLabel}>Técnica culinaria aplicada</Text>
      <Text style={styles.cardText}>
        {sheetRowValue(sheet.plate, "Técnica culinaria aplicada")}
      </Text>
      <Text style={styles.detailLabel}>Descripción del plato</Text>
      <Text style={styles.cardText}>{sheetRowValue(sheet.plate, "Descripción del plato")}</Text>
      <Text style={styles.detailLabel}>Ingrediente principal y procedencia</Text>
      <DataTable
        headers={["Campo", "Detalle"]}
        rows={sheet.ingredient.map((row) => [row.label, row.value])}
        widths={["34%", "66%"]}
      />
      <Text style={styles.detailLabel}>Ingredientes y cantidades</Text>
      <DataTable
        headers={["Ingrediente", "Cantidad"]}
        rows={sheet.ingredients.map((row) => [row.label, row.value])}
        widths={["58%", "42%"]}
      />
      <Text style={styles.detailLabel}>Diseño del emplatado</Text>
      <DataTable
        headers={["Elementos", "Texturas"]}
        rows={[
          [sheet.design.elements.join("; "), sheet.design.textures.join("; ")],
          ["Decoración", sheet.design.decoration],
        ]}
        widths={["50%", "50%"]}
      />
    </View>
  );
}

function uniqueDishes(dishes) {
  const seen = new Set();

  return dishes.filter((dish) => {
    if (seen.has(dish.id)) return false;
    seen.add(dish.id);
    return true;
  });
}

function CoverPage() {
  return (
    <Page size="A4" id="cover" bookmark="Portada" style={styles.coverPage}>
      <Image
        src={assetSrc(COVER_IMAGE_SRC)}
        alt="Fachada del restaurante Lava & Salitre al atardecer"
        style={styles.coverHeroImage}
      />
      <View style={styles.coverImageOverlay} />
      <View style={styles.coverImageWash} />

      <View style={styles.coverTitleBlock}>
        <Text style={styles.coverEyebrow}>Memoria gastronómica profesional</Text>
        <Text style={styles.coverTitle}>LAVA & SALITRE | INFORME DE PROYECTO</Text>
        <Text style={styles.coverSubtitle}>{COVER_INTRO_TEXT}</Text>
      </View>

      <View style={styles.coverInfoPanel}>
        <View style={styles.coverInfoMain}>
          <Text style={styles.coverLabel}>Alumno</Text>
          <Text style={styles.coverStudentName}>{STUDENT_NAME}</Text>
          <Text style={styles.coverDate}>Junio 2026</Text>
        </View>
        <View style={styles.coverInfoGrid}>
          <View style={styles.coverInfoItem}>
            <Text style={styles.coverLabel}>Concepto</Text>
            <Text style={styles.coverMetaText}>{projectReportMeta.tagline}</Text>
          </View>
          <View style={styles.coverInfoItem}>
            <Text style={styles.coverLabel}>Formato</Text>
            <Text style={styles.coverMetaText}>{projectReportMeta.subtitle}</Text>
          </View>
          <View style={styles.coverInfoItem}>
            <Text style={styles.coverLabel}>Datos académicos</Text>
            <Text style={styles.coverMetaText}>
              Curso académico, módulo y centro no especificados en los datos disponibles.
            </Text>
          </View>
        </View>
      </View>
    </Page>
  );
}

function IndexPage() {
  return (
    <ReportPage
      id="index"
      bookmark="Índice"
      showHeader={false}
      showFooter={false}
      style={styles.indexPage}
    >
      <Text style={styles.topKicker}>Contenido</Text>
      <Text style={styles.h1}>Índice interactivo</Text>
      <Text style={styles.lead}>
        Navegación interna del informe: cada apartado enlaza directamente con su página dentro del
        PDF.
      </Text>
      <View style={styles.indexList}>
        {INDEX_SECTIONS.map((section, index) => (
          <View
            key={section.target}
            style={[styles.indexRow, (index + 1) % 2 === 0 ? styles.indexRowEven : undefined]}
            wrap={false}
          >
            <Text style={styles.indexNumber}>{section.number}</Text>
            <View style={styles.indexTextGroup}>
              <Text style={styles.indexTitle}>
                <PdfLink src={`#${section.target}`} style={styles.indexTitleLink}>
                  {section.title}
                </PdfLink>
              </Text>
              <Text style={styles.indexSubtitle}>{section.subtitle}</Text>
            </View>
            <PdfLink src={`#${section.target}`} style={styles.indexAction}>
              Ir
            </PdfLink>
          </View>
        ))}
      </View>
    </ReportPage>
  );
}

function IntroductionPage() {
  return (
    <ReportPage id="introduction" bookmark="Introducción del proyecto">
      <View style={styles.titleCluster}>
        <Text style={styles.topKicker}>Memoria del proyecto</Text>
        <Text style={styles.h1}>{reportIntroduction.title}</Text>
        <View style={styles.titleRule} />
      </View>
      <ImageFigure image={reportIntroduction.image} feature />

      <View style={styles.editorialColumns}>
        <View style={styles.editorialMainColumn}>
          {reportIntroduction.paragraphs.map((paragraph) => (
            <Text key={paragraph} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>
        <View style={styles.editorialAsideColumn}>
          <Text style={styles.h2}>Propósito</Text>
          <Text style={styles.paragraph}>
            La propuesta une producto local, paisaje volcánico, salitre atlántico y herramientas
            digitales para construir una experiencia gastronómica clara y defendible.
          </Text>
          <Text style={styles.h2}>Alcance</Text>
          <BulletList items={reportIntroduction.highlights} />
        </View>
      </View>
    </ReportPage>
  );
}

function PhaseChapterIntro({ phase }) {
  return (
    <>
      <View style={styles.phaseHeader}>
        <Text style={styles.phaseNumber}>{phase.phase}</Text>
        <View style={styles.phaseTitleRow}>
          <Text style={styles.phaseBadge}>{phase.number}</Text>
          <Text style={styles.phaseTitle}>{phase.title}</Text>
        </View>
      </View>
      <View style={styles.phaseIntroBlock}>
        <Text style={styles.lead}>{phase.intro}</Text>
      </View>
      <ImageFigure
        image={phase.image}
        contain={phase.id === "fase-2" || phase.id === "fase-3"}
        feature
      />
      <BulletList items={phase.highlights} />
    </>
  );
}

function ReinterpretationCards() {
  return (
    <View style={styles.imageCardGrid}>
      {phase1FullContent.reinterpretationExamples.map((example, index) => (
        <View
          key={example.title}
          style={[
            styles.imageEditorialCard,
            (index + 1) % 2 === 0 ? styles.cardNoMargin : undefined,
          ]}
        >
          <Image src={assetSrc(example.image)} alt={example.title} style={styles.imageCardPhoto} />
          <View style={styles.imageCardBody}>
            <Text style={styles.smallLabel}>Propuesta {index + 1}</Text>
            <Text style={styles.cardTitle}>{example.title}</Text>
            <Text style={styles.cardText}>{example.description}</Text>
            <Text style={styles.detailLabel}>Componentes</Text>
            <Text style={styles.cardText}>{example.components}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

function ReinterpretationPage({ example, index, total }) {
  return (
    <ReportPage
      bookmark={`Líneas creativas de postres canarios ${String(index + 1).padStart(2, "0")}`}
    >
      <View style={styles.reinterpretationPageHeader} wrap={false}>
        <Text style={styles.topKicker}>Líneas creativas de postres canarios</Text>
        <Text style={styles.reinterpretationCounter}>
          Boceto {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </Text>
      </View>
      <View style={styles.reinterpretationSpread} wrap={false}>
        <View style={styles.reinterpretationImagePanel}>
          <Image
            src={assetSrc(example.image)}
            alt={example.title}
            style={styles.reinterpretationFullImage}
          />
        </View>
        <View style={styles.reinterpretationInfoPanel}>
          <Text style={styles.sectionKicker}>Propuesta creativa</Text>
          <Text style={styles.reinterpretationTitle}>{example.title}</Text>
          <Text style={styles.paragraph}>{example.description}</Text>
          <View style={styles.reinterpretationComponentBlock} wrap={false}>
            <Text style={styles.reinterpretationComponentLabel}>Componentes</Text>
            <Text style={styles.paragraph}>{example.components}</Text>
          </View>
        </View>
      </View>
    </ReportPage>
  );
}

function ConceptFeature({ image, title, paragraphs }) {
  const [first, second, ...rest] = paragraphs;

  return (
    <View style={styles.conceptFeature}>
      <View style={styles.conceptTopRow} wrap={false}>
        <Image src={assetSrc(image)} alt={title} style={styles.conceptLogoImage} />
        <View style={styles.conceptTextColumn}>
          <Text style={styles.h3}>{title}</Text>
          {[first, second].filter(Boolean).map((paragraph) => (
            <Text key={paragraph} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>
      </View>
      {rest.map((paragraph) => (
        <Text key={paragraph} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
    </View>
  );
}

function Km0IngredientsChapter({ phase, phase1, hideIntro = false }) {
  const ingredientPages = chunkItems(phase1.km0Ingredients, KM0_INGREDIENTS_PER_PAGE);
  const headers = ["Ingrediente", "Isla", "Productor / procedencia", "Zona agrÃ­cola u origen"];
  const widths = ["18%", "17%", "32%", "33%"];

  return (
    <>
      <ReportPage
        id={hideIntro ? undefined : phaseTargetId(phase.id)}
        bookmark={
          hideIntro
            ? `${phase.phase}: ${phase.title} - ingredientes km 0`
            : `${phase.phase}: ${phase.title}`
        }
      >
        {hideIntro ? null : <PhaseChapterIntro phase={phase} />}
        <EditorialSection title="Ingredientes km 0" paragraphs={phase1.km0Intro}>
          <View style={styles.tableEditorialHeader} wrap={false}>
            <Text style={styles.h3}>Listado de 20 ingredientes producidos en Canarias</Text>
            <Text style={styles.tableContinuationLabel}>Parte 1 / {ingredientPages.length}</Text>
          </View>
          <DataTable headers={headers} rows={ingredientPages[0] ?? []} widths={widths} />
        </EditorialSection>
      </ReportPage>

      <ReportPage bookmark={`${phase.phase}: ${phase.title} - ingredientes km 0 continuaciÃ³n`}>
        <EditorialSection
          kicker="Ingredientes km 0"
          title="Listado de 20 ingredientes producidos en Canarias"
        >
          <View style={styles.tableEditorialHeader} wrap={false}>
            <Text style={styles.h3}>ContinuaciÃ³n de la tabla</Text>
            <Text style={styles.tableContinuationLabel}>Parte 2 / {ingredientPages.length}</Text>
          </View>
          <DataTable headers={headers} rows={ingredientPages[1] ?? []} widths={widths} />
          <View style={styles.subsectionBreak}>
            <Text style={styles.sectionKicker}>Lava y Salitre - Carta de postres</Text>
            <Text style={styles.h3}>SelecciÃ³n de 10 ingredientes principales</Text>
            <Text style={styles.paragraph}>{phase1.dessertIngredientIntro}</Text>
            <CardGrid
              items={phase1.dessertIngredientSelection}
              getTitle={(item) => item.ingredient}
              getText={(item) => `${item.recipe}. ${item.reason}`}
              getMeta={(_, index) => `Ingrediente ${index + 1}`}
            />
          </View>
          <View style={styles.infoBand}>
            <Text style={styles.h3}>ConclusiÃ³n</Text>
            <ParagraphGroup paragraphs={phase1.km0Conclusion} />
          </View>
        </EditorialSection>
      </ReportPage>
    </>
  );
}

function PhaseOneFull({ phase, only, hideIntro = false }) {
  if (!only) {
    return (
      <>
        <PhaseOneFull phase={phase} only="context" />
        <PhaseOneFull phase={phase} only="km0" hideIntro />
        <PhaseOneFull phase={phase} only="concept" hideIntro />
        <PhaseOneFull phase={phase} only="audience" hideIntro />
        <PhaseOneFull phase={phase} only="tech" hideIntro />
      </>
    );
  }

  const phase1 = phase1FullContent;
  const visibleSections = only ? new Set(only.split(",")) : null;
  const shouldRender = (section) => !visibleSections || visibleSections.has(section);

  if (only === "km0") {
    return <Km0IngredientsChapter phase={phase} phase1={phase1} hideIntro={hideIntro} />;
  }

  if (only === "context") {
    return (
      <>
        <ReportPage id={phaseTargetId(phase.id)} bookmark={`${phase.phase}: ${phase.title}`}>
          <PhaseChapterIntro phase={phase} />
          <EditorialSection title={phase1.context.title} paragraphs={phase1.context.paragraphs}>
            <Text style={styles.h3}>Postres tradicionales como punto de partida</Text>
            <CardGrid
              items={phase1.traditionalDesserts}
              getTitle={(item) => item.name}
              getText={(item) => item.description}
            />
            <View style={styles.subsectionBreak} wrap={false}>
              <Text style={styles.h3}>Reinterpretación con cocina de vanguardia</Text>
              <Text style={styles.paragraph}>
                Reinterpretar un plato o un postre no significa cambiarlo por completo. La clave
                está en mantener su sabor principal y presentarlo de una forma más actual, con más
                ligereza, mejor lectura visual y mayor contraste de texturas.
              </Text>
              <NumberedListBlock items={phase1.avantGardeResources} />
            </View>
            <View style={styles.infoBand} wrap={false}>
              <Text style={styles.h3}>Líneas creativas de postres canarios</Text>
              <Text style={styles.paragraph}>
                A continuación, cada boceto se desarrolla en una página individual: imagen completa
                a la izquierda e información técnica a la derecha.
              </Text>
            </View>
          </EditorialSection>
        </ReportPage>
        {phase1.reinterpretationExamples.map((example, index) => (
          <ReinterpretationPage
            key={example.title}
            example={example}
            index={index}
            total={phase1.reinterpretationExamples.length}
          />
        ))}
      </>
    );
  }

  return (
    <ReportPage
      id={hideIntro ? undefined : phaseTargetId(phase.id)}
      bookmark={
        hideIntro ? `${phase.phase}: ${phase.title} - ${only}` : `${phase.phase}: ${phase.title}`
      }
    >
      {hideIntro ? null : <PhaseChapterIntro phase={phase} />}

      {shouldRender("context") ? (
        <EditorialSection title={phase1.context.title} paragraphs={phase1.context.paragraphs}>
          <Text style={styles.h3}>Postres tradicionales como punto de partida</Text>
          <CardGrid
            items={phase1.traditionalDesserts}
            getTitle={(item) => item.name}
            getText={(item) => item.description}
          />
          <View style={styles.subsectionBreak}>
            <Text style={styles.h3}>Reinterpretación con cocina de vanguardia</Text>
            <Text style={styles.paragraph}>
              Reinterpretar un plato o un postre no significa cambiarlo por completo. La clave está
              en mantener su sabor principal y presentarlo de una forma más actual, con más
              ligereza, mejor lectura visual y mayor contraste de texturas.
            </Text>
            <NumberedListBlock items={phase1.avantGardeResources} />
          </View>
          <View style={styles.subsectionBreak}>
            <Text style={styles.h3}>Líneas creativas de postres canarios</Text>
            <Text style={styles.paragraph}>
              Estos bocetos muestran cómo un sabor tradicional puede transformarse en un pase más
              técnico, visual y adaptado a un menú degustación.
            </Text>
            <ReinterpretationCards />
          </View>
        </EditorialSection>
      ) : null}

      {shouldRender("km0") ? (
        <EditorialSection title="Ingredientes km 0" paragraphs={phase1.km0Intro}>
          <Text style={styles.h3}>Listado de 20 ingredientes producidos en Canarias</Text>
          <DataTable
            headers={["Ingrediente", "Isla", "Productor / procedencia", "Zona agrícola u origen"]}
            rows={phase1.km0Ingredients}
            widths={["18%", "17%", "32%", "33%"]}
          />
          <View style={styles.subsectionBreak}>
            <Text style={styles.sectionKicker}>Lava y Salitre - Carta de postres</Text>
            <Text style={styles.h3}>Selección de 10 ingredientes principales</Text>
            <Text style={styles.paragraph}>{phase1.dessertIngredientIntro}</Text>
            <CardGrid
              items={phase1.dessertIngredientSelection}
              getTitle={(item) => item.ingredient}
              getText={(item) => `${item.recipe}. ${item.reason}`}
              getMeta={(_, index) => `Ingrediente ${index + 1}`}
            />
          </View>
          <View style={styles.infoBand}>
            <Text style={styles.h3}>Conclusión</Text>
            <ParagraphGroup paragraphs={phase1.km0Conclusion} />
          </View>
        </EditorialSection>
      ) : null}

      {shouldRender("concept") ? (
        <EditorialSection title={phase1.concept.title}>
          <ConceptFeature
            image={phase1.concept.image}
            title="Lava volcánica, salitre atlántico y producto local"
            paragraphs={phase1.concept.paragraphs}
          />
          <View style={styles.subsectionBreak}>
            <Text style={styles.sectionKicker}>Identidad visual</Text>
            <Text style={styles.h3}>Logotipo de Lava & Salitre</Text>
            <ParagraphGroup paragraphs={phase1.visualIdentity.intro} />
            <CardGrid
              items={phase1.visualIdentity.elements.slice(0, 2)}
              getTitle={(item) => item.title}
              getText={(item) => item.text}
            />
          </View>
          <View break />
          <View style={styles.subsectionBreak}>
            <Text style={styles.h3}>Claim e imagotipo</Text>
            <CardGrid
              items={phase1.visualIdentity.elements.slice(2)}
              getTitle={(item) => item.title}
              getText={(item) => item.text}
            />
            <Text style={styles.paragraph}>{phase1.visualIdentity.logoVersionsIntro}</Text>
            <LogoVersionGrid items={phase1.visualIdentity.logoVersions} />
          </View>
          <View break />
          <View style={styles.subsectionBreak} wrap={false}>
            <Text style={styles.h3}>Representación de las ocho islas Canarias</Text>
            <Text style={styles.paragraph}>{phase1.islandConceptIntro}</Text>
            <DataTable
              headers={["Isla", "Productos utilizados", "Platos donde aparecen"]}
              rows={phase1.islandConceptProducts}
              widths={["22%", "39%", "39%"]}
            />
          </View>
          <View style={styles.infoBand}>
            <Text style={styles.h3}>Tradición canaria con mirada vanguardista</Text>
            <ParagraphGroup paragraphs={phase1.vanguardTradition} />
          </View>
        </EditorialSection>
      ) : null}

      {!visibleSections ? <View break /> : null}
      {shouldRender("audience") ? (
        <EditorialSection title="Público objetivo">
          <DataTable
            headers={["Variable", "Definición"]}
            rows={phase1.audience.facts}
            widths={["28%", "72%"]}
          />
          <Text style={styles.paragraph}>{phase1.audience.intro}</Text>
          <Text style={styles.h3}>Segmentación del público objetivo</Text>
          <CardGrid
            items={phase1.audience.segments}
            getTitle={(item) => item.title}
            getText={(item) => item.text}
          />
          <View style={styles.twoColumns}>
            <View style={styles.columnLeft}>
              <Text style={styles.h3}>Lo que valora este cliente</Text>
              <NumberedListBlock items={phase1.audience.values} />
            </View>
            <View style={styles.columnRight}>
              <Text style={styles.h3}>Necesidades principales</Text>
              <NumberedListBlock items={phase1.audience.needs} />
            </View>
          </View>
          <View style={styles.subsectionBreak}>
            <Text style={styles.h3}>Buyer persona: cliente ideal de Lava y Salitre</Text>
            <DataTable
              headers={["Dato", "Descripción"]}
              rows={phase1.audience.personaDetails}
              widths={["32%", "68%"]}
            />
            <CardGrid
              items={phase1.audience.personaCards.slice(0, 2)}
              getTitle={(item) => item.title}
              getText={(item) => item.text}
            />
            <View break />
            <CardGrid
              items={phase1.audience.personaCards.slice(2)}
              getTitle={(item) => item.title}
              getText={(item) => item.text}
            />
          </View>
          <View style={styles.infoBand}>
            <Text style={styles.h3}>Qué espera de Lava y Salitre</Text>
            <ParagraphGroup paragraphs={phase1.audience.expectations} />
          </View>
        </EditorialSection>
      ) : null}

      {!visibleSections ? <View break /> : null}
      {shouldRender("tech") ? (
        <EditorialSection title="Tecnologías gastronómicas" paragraphs={phase1.technologies.intro}>
          <Text style={styles.h3}>Tecnologías culinarias modernas</Text>
          <CardGrid
            items={phase1.technologies.culinary}
            getTitle={(item) => item.title}
            getText={(item) => `${item.description} Aplicación: ${item.use}`}
          />
          <View style={styles.subsectionBreak}>
            <Text style={styles.h3}>Tecnologías digitales para la carta</Text>
            <Text style={styles.paragraph}>{phase1.technologies.digitalIntro}</Text>
            <CardGrid
              items={phase1.technologies.digital}
              columns={3}
              getTitle={(item) => item.title}
              getText={(item) => `${item.description} Aplicación: ${item.use}`}
            />
          </View>
          <View style={styles.subsectionBreak}>
            <Text style={styles.h3}>Tecnologías elegidas y justificación</Text>
            <Text style={styles.paragraph}>{phase1.technologies.selectedIntro}</Text>
            <DataTable
              headers={["Tecnología", "Dónde se usaría", "Por qué se usaría"]}
              rows={phase1.technologies.selected}
              widths={["25%", "35%", "40%"]}
            />
          </View>
          <View style={styles.infoBand} wrap={false}>
            <Text style={styles.h3}>Conclusión</Text>
            <ParagraphGroup paragraphs={phase1.technologies.conclusion} />
          </View>
        </EditorialSection>
      ) : null}
    </ReportPage>
  );
}

function PhaseTwoFull({ phase, only, hideIntro = false }) {
  const phase2 = phase2FullContent;
  const recipes = recipeDishes();

  if (!only) {
    return (
      <>
        <PhaseTwoFull phase={phase} only="structure" />
        <PhysicalMenuGalleryPages />
        <PhaseTwoFull phase={phase} only="plates" hideIntro />
        <PhaseTwoFull phase={phase} only="desserts" hideIntro />
        <PhaseTwoFull phase={phase} only="narrative" hideIntro />
        <PhaseTwoFull phase={phase} only="visual" hideIntro />
        <RecipeSectionCover dishes={recipes} />
        {recipes.map((dish, index) => (
          <RecipeLandscapePage key={dish.id} dish={dish} index={index} total={recipes.length} />
        ))}
      </>
    );
  }

  return (
    <ReportPage
      id={hideIntro ? undefined : phaseTargetId(phase.id)}
      bookmark={
        hideIntro ? `${phase.phase}: ${phase.title} - ${only}` : `${phase.phase}: ${phase.title}`
      }
    >
      {hideIntro ? null : <PhaseChapterIntro phase={phase} />}

      {only === "structure" ? (
        <EditorialSection title="Estructura de la carta" lead={phase2.intro}>
          <DataTable
            headers={["Orden", "Sección", "Función en la carta", "Propuestas"]}
            rows={phase2.menuStructure.map((section, index) => [
              String(index + 1).padStart(2, "0"),
              section.title,
              section.description,
              String(section.count),
            ])}
            widths={["10%", "29%", "45%", "16%"]}
          />
          <View style={styles.subsectionBreak}>
            <Text style={styles.h3}>Esquema visual de la carta</Text>
            <CardGrid
              items={phase2.visualScheme}
              getTitle={(item) => item.title}
              getText={(item) => item.text}
              getMeta={(_, index) => `Bloque ${index + 1}`}
            />
          </View>
          <View style={styles.infoBand} wrap={false}>
            <Text style={styles.h2}>Carta física y códigos QR</Text>
            <Text style={styles.paragraph}>
              La carta física se presenta a continuación como galería completa: portada, interiores,
              apartados de QR, menús y carta de vinos con maridaje. Las imágenes se muestran dos por
              página para conservar la lectura visual de cada pieza.
            </Text>
          </View>
        </EditorialSection>
      ) : null}

      {only === "plates" ? (
        <EditorialSection title="Los platos" lead={phase2.plateIntro}>
          <DetailCards rows={phase2.plateRows} />
        </EditorialSection>
      ) : null}

      {only === "desserts" ? (
        <EditorialSection title="Los postres" lead={phase2.dessertIntro}>
          <DetailCards rows={phase2.dessertRows} kind="dessert" />
        </EditorialSection>
      ) : null}

      {only === "narrative" ? (
        <EditorialSection title="Narrativa gastronómica" paragraphs={phase2.narrativeIntro}>
          <NarrativeCards rows={phase2.plateNarratives} />
          <View style={styles.subsectionBreak}>
            <Text style={styles.h3}>Historia de los postres y petit four</Text>
            <NarrativeCards rows={phase2.dessertNarratives} includeIdea={false} />
          </View>
          <View style={styles.infoBand}>
            <Text style={styles.h3}>Conclusión</Text>
            <Text style={styles.paragraph}>{phase2.narrativeConclusion}</Text>
          </View>
        </EditorialSection>
      ) : null}

      {only === "visual" ? (
        <EditorialSection title="Diseño visual" lead={phase2.visualDesignIntro}>
          <DataTable
            headers={["Elaboración", "Presentación"]}
            rows={[...phase2.plateRows, ...phase2.dessertRows].map((row) => [row[1], row[6]])}
            widths={["34%", "66%"]}
          />
        </EditorialSection>
      ) : null}
    </ReportPage>
  );
}

function DishMediaGrid({ dishes }) {
  return (
    <View style={styles.mediaGrid}>
      {dishes.map((dish, index) => {
        const sheet = dish.technicalSheetId ? technicalSheets[dish.technicalSheetId] : undefined;
        const imageSrc = sheet?.photoSrc ?? sheet?.sketchSrc;

        return (
          <View
            key={dish.id}
            style={[styles.mediaCard, (index + 1) % 3 === 0 ? styles.cardNoMargin : undefined]}
          >
            {imageSrc ? (
              <Image src={assetSrc(imageSrc)} alt={dish.name} style={styles.mediaImage} />
            ) : null}
            <Text style={styles.smallLabel}>{dish.categoryName}</Text>
            <Text style={styles.mediaTitle}>{dish.name}</Text>
          </View>
        );
      })}
    </View>
  );
}

function RecipeQrGallery({ dishes }) {
  return (
    <View style={styles.qrRecipeGrid}>
      {dishes.map((dish, index) => (
        <View
          key={dish.id}
          style={[styles.qrRecipeCard, (index + 1) % 3 === 0 ? styles.cardNoMargin : undefined]}
          wrap={false}
        >
          <Image
            src={assetSrc(recipeQrSrc(dish))}
            alt={`QR de ${dish.name}`}
            style={styles.qrRecipeImage}
          />
          <View style={styles.qrRecipeText}>
            <Text style={styles.smallLabel}>{dish.categoryName}</Text>
            <Text style={styles.mediaTitle}>{dish.name}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}

function BudgetSimulation({ section }) {
  const totalRow = section.extraTable.rows[section.extraTable.rows.length - 1];
  const techRows = section.extraTable.rows.slice(0, -1);

  return (
    <View style={styles.budgetSheet}>
      <View style={styles.budgetHeader} wrap={false}>
        <View>
          <Text style={styles.budgetKicker}>Presupuesto simulado</Text>
          <Text style={styles.budgetTitle}>Lava & Salitre</Text>
          <Text style={styles.budgetSubtitle}>Menús degustación · carta digital · maridaje</Text>
        </View>
        <View style={styles.budgetMetaBox}>
          <Text style={styles.budgetMetaLabel}>Fecha</Text>
          <Text style={styles.budgetMetaValue}>Junio 2026</Text>
          <Text style={styles.budgetMetaLabel}>Proyecto</Text>
          <Text style={styles.budgetMetaValue}>Memoria académica</Text>
        </View>
      </View>

      <View style={styles.budgetColumns}>
        {section.groups.map((group, index) => (
          <View
            key={group.label}
            style={[styles.budgetNoteCard, (index + 1) % 2 === 0 ? styles.cardNoMargin : undefined]}
            wrap={false}
          >
            <Text style={styles.budgetNoteTitle}>{group.label}</Text>
            {group.items.map((item) => (
              <Text key={item} style={styles.budgetNoteText}>
                {item}
              </Text>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.budgetBlock} wrap={false}>
        <Text style={styles.budgetSectionTitle}>Importe estimado de menús</Text>
        <DataTable
          headers={section.table.headers}
          rows={section.table.rows}
          widths={["34%", "33%", "33%"]}
          keepTogether
        />
      </View>

      <View style={styles.budgetBlock} wrap={false}>
        <Text style={styles.budgetSectionTitle}>{section.extraTable.title}</Text>
        <DataTable
          headers={section.extraTable.headers}
          rows={techRows}
          widths={["64%", "36%"]}
          keepTogether
        />
        <View style={styles.budgetTotalRow}>
          <Text style={styles.budgetTotalLabel}>{totalRow[0]}</Text>
          <Text style={styles.budgetTotalValue}>{totalRow[1]}</Text>
        </View>
      </View>

      <View style={styles.budgetLegalNote} wrap={false}>
        <Text style={styles.budgetNoteTitle}>Observación</Text>
        <Text style={styles.paragraph}>{section.conclusion}</Text>
      </View>
    </View>
  );
}

function PhaseThreeFull({ phase }) {
  const dishes = recipeDishes();
  const plateImages = dishes.filter((dish) =>
    ["Entrantes", "Primeros platos", "Segundos platos"].includes(dish.categoryName),
  );
  const sorbetImages = dishes.filter((dish) => dish.categoryName === "Sorbete");
  const dessertImages = dishes.filter((dish) =>
    ["Postres", "Petit four"].includes(dish.categoryName),
  );

  return (
    <ReportPage id={phaseTargetId(phase.id)} bookmark={`${phase.phase}: ${phase.title}`}>
      <PhaseChapterIntro phase={phase} />

      <EditorialSection title="Plataforma digital" lead={phase3FullContent.platformIntro}>
        <DataTable
          headers={["Área", "Contenido", "Función para el restaurante"]}
          rows={phase3FullContent.platformRows}
          widths={["22%", "39%", "39%"]}
          keepTogether
        />
      </EditorialSection>

      <EditorialSection title="Códigos QR" lead={phase3FullContent.qrIntro}>
        <RecipeQrGallery dishes={dishes} />
      </EditorialSection>

      <EditorialSection title="Contenido multimedia" lead={phase3FullContent.multimediaIntro}>
        <Text style={styles.h3}>Platos</Text>
        <DishMediaGrid dishes={plateImages} />
        <Text style={styles.h3}>Sorbete</Text>
        <DishMediaGrid dishes={sorbetImages} />
        <Text style={styles.h3}>Postres y petit four</Text>
        <DishMediaGrid dishes={dessertImages} />
      </EditorialSection>

      <EditorialSection title="Realidad aumentada">
        <View style={styles.infoBand}>
          <Text style={styles.paragraph}>{phase3FullContent.augmentedReality}</Text>
        </View>
      </EditorialSection>
    </ReportPage>
  );
}

function PhaseFourFull({ phase }) {
  return (
    <ReportPage id={phaseTargetId(phase.id)} bookmark={`${phase.phase}: ${phase.title}`}>
      <PhaseChapterIntro phase={phase} />

      {phase4FullContent.map((section) => (
        <EditorialSection key={section.title} title={section.title} lead={section.text}>
          {section.title === "Presupuesto" ? <BudgetSimulation section={section} /> : null}

          {section.highlights ? <NumberedListBlock items={section.highlights} /> : null}

          {section.title !== "Presupuesto" && section.groups ? (
            <CardGrid
              items={section.groups}
              getTitle={(item) => item.label}
              getText={(item) => item.items.join(" ")}
            />
          ) : null}

          {section.title !== "Presupuesto" && section.table ? (
            <DataTable
              headers={section.table.headers}
              rows={section.table.rows}
              widths={section.table.headers.length === 3 ? ["34%", "33%", "33%"] : ["40%", "60%"]}
            />
          ) : null}

          {section.title !== "Presupuesto" && section.extraTable ? (
            <View style={styles.subsectionBreak}>
              <Text style={styles.h3}>{section.extraTable.title}</Text>
              <DataTable
                headers={section.extraTable.headers}
                rows={section.extraTable.rows}
                widths={["64%", "36%"]}
              />
            </View>
          ) : null}

          {section.title !== "Presupuesto" && section.conclusion ? (
            <View style={styles.infoBand}>
              <Text style={styles.h3}>Conclusión</Text>
              <Text style={styles.paragraph}>{section.conclusion}</Text>
            </View>
          ) : null}
        </EditorialSection>
      ))}
    </ReportPage>
  );
}

function FullPhasePage({ phase }) {
  if (phase.id === "fase-1") return <PhaseOneFull phase={phase} />;
  if (phase.id === "fase-2") return <PhaseTwoFull phase={phase} />;
  if (phase.id === "fase-3") return <PhaseThreeFull phase={phase} />;
  if (phase.id === "fase-4") return <PhaseFourFull phase={phase} />;

  return <PhasePage phase={phase} />;
}

function ConclusionPage() {
  return (
    <ReportPage id="conclusion" bookmark="Conclusión final">
      <View style={styles.titleCluster}>
        <Text style={styles.topKicker}>Cierre</Text>
        <Text style={styles.h1}>{reportConclusion.title}</Text>
        <View style={styles.titleRule} />
      </View>
      <ImageFigure image={reportConclusion.image} feature />
      <View style={styles.editorialColumns}>
        <View style={styles.editorialMainColumn}>
          {reportConclusion.paragraphs.map((paragraph) => (
            <Text key={paragraph} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>
        <View style={styles.editorialAsideColumn}>
          <View style={styles.infoBand}>
            <Text style={styles.h3}>Valor final del proyecto</Text>
            <Text style={styles.paragraph}>
              El informe muestra una propuesta independiente de la web, con formato A4 vertical,
              fondo blanco, márgenes amplios, jerarquía académica y acentos cromáticos inspirados en
              la identidad visual de Lava & Salitre.
            </Text>
          </View>
        </View>
      </View>
    </ReportPage>
  );
}

function ProjectAccessPage() {
  return (
    <ReportPage id="digital-access" bookmark="Acceso digital">
      <View style={styles.titleCluster}>
        <Text style={styles.topKicker}>Acceso digital</Text>
        <Text style={styles.h1}>QR de la página del proyecto</Text>
        <View style={styles.titleRule} />
      </View>
      <Text style={styles.lead}>
        Escanea este código QR para abrir la web de Lava & Salitre. Si el QR no se puede leer,
        utiliza el enlace directo y la contraseña indicada abajo.
      </Text>

      <View style={styles.qrAccessCard} wrap={false}>
        <Image
          src={assetSrc(PROJECT_ACCESS_QR_SRC)}
          alt="Código QR de acceso a Lava & Salitre"
          style={styles.projectQrImage}
        />
        <View style={styles.qrAccessText}>
          <Text style={styles.h2}>Datos de acceso</Text>
          <Text style={styles.qrLabel}>Enlace</Text>
          <PdfLink src={PROJECT_ACCESS_URL} style={styles.qrUrl}>
            {PROJECT_ACCESS_URL}
          </PdfLink>
          <Text style={styles.qrLabel}>Contraseña</Text>
          <Text style={styles.qrPassword}>{PROJECT_ACCESS_PASSWORD}</Text>
        </View>
      </View>
      <View style={styles.infoBand} wrap={false}>
        <Text style={styles.h3}>Continuidad digital</Text>
        <Text style={styles.paragraph}>
          El acceso digital mantiene conectada la memoria impresa con la web viva del proyecto:
          carta digital, contenidos ampliados, fotografías y consulta desde dispositivos móviles.
        </Text>
      </View>
    </ReportPage>
  );
}

function CeoClosingPage() {
  return (
    <Page id="ceo-closing" bookmark="Cierre institucional" size="A4" style={styles.ceoClosingPage}>
      <View style={styles.ceoClosingCenter}>
        <Image src={assetSrc(CEO_IMAGE_SRC)} alt="Rudy Lindgreen García" style={styles.ceoPhoto} />
        <Text style={styles.ceoCaption}>Rudy Lindgreen García - CEO</Text>
      </View>
      <View style={styles.ceoFooter} fixed>
        <Text style={styles.ceoFooterText}>RUDY LINDGREEN GARCIA</Text>
        <Text
          style={styles.ceoFooterText}
          render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`}
        />
      </View>
      <EditorialPageMarker dark />
    </Page>
  );
}

export function InformeProyectoPDF({ debugOnly } = {}) {
  if (debugOnly === "cover") {
    return (
      <Document>
        <CoverPage />
      </Document>
    );
  }

  if (debugOnly?.startsWith?.("fase-1:")) {
    const phase = projectReportPhases.find((item) => item.id === "fase-1");

    return (
      <Document>
        {phase ? <PhaseOneFull phase={phase} only={debugOnly.split(":")[1]} /> : null}
      </Document>
    );
  }

  if (debugOnly?.startsWith?.("fase-")) {
    const phase = projectReportPhases.find((item) => item.id === debugOnly);

    return <Document>{phase ? <FullPhasePage phase={phase} /> : null}</Document>;
  }

  return (
    <Document
      author="Lava & Salitre"
      title="Informe del proyecto Lava & Salitre"
      subject="Memoria académica y profesional del proyecto Lava & Salitre"
      creator="@react-pdf/renderer"
    >
      <CoverPage />
      <IndexPage />
      <IntroductionPage />
      {projectReportPhases.map((phase) => (
        <FullPhasePage key={phase.id} phase={phase} />
      ))}
      <ConclusionPage />
      <ProjectAccessPage />
      <CeoClosingPage />
    </Document>
  );
}

export default InformeProyectoPDF;
