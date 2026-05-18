import { Document, Image, Page, Text, View } from "@react-pdf/renderer";
import {
  budgetRows,
  cartaFisicaImages,
  dafoSummary,
  digitalImplementationRows,
  projectReportMeta,
  projectReportPhases,
  reinterpretationImages,
  reportConclusion,
  reportIndexSections,
  reportIntroduction,
  technologyBudgetRows,
} from "@/data/projectReport";
import { reportDishHighlights, reportMenuOverview } from "@/data/projectReportMenu";
import { styles } from "./pdfStyles";

function assetSrc(src) {
  if (!src) return src;
  if (/^https?:\/\//i.test(src) || /^data:/i.test(src)) return src;

  const normalized = src.startsWith("/") ? src : `/${src}`;

  if (typeof window !== "undefined" && window.location?.origin) {
    return `${window.location.origin}${normalized}`;
  }

  return normalized;
}

function Footer() {
  return (
    <View style={styles.footer} fixed>
      <Text style={styles.footerTitle}>Lava & Salitre | Informe de proyecto</Text>
      <Text render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} />
    </View>
  );
}

function ReportPage({ children, style }) {
  return (
    <Page size="A4" style={[styles.page, style]}>
      {children}
      <Footer />
    </Page>
  );
}

function ImageFigure({ image, contain = false, wide = false }) {
  if (!image?.src) return null;

  return (
    <View wrap={false}>
      <Image
        src={assetSrc(image.src)}
        alt={image.alt}
        style={contain ? styles.imageContain : wide ? styles.wideImage : styles.heroImage}
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

function SectionBlock({ title, text }) {
  return (
    <View style={styles.subsection} wrap={false}>
      <Text style={styles.h3}>{title}</Text>
      <Text style={styles.paragraph}>{text}</Text>
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
            (index + 1) % 3 === 0 ? styles.imageGridItemLast : undefined,
          ]}
          wrap={false}
        >
          <Image
            src={assetSrc(image.src)}
            alt={image.alt}
            style={contain ? styles.imageContain : styles.imageThumb}
          />
          <Text style={styles.imageCaption}>{image.caption}</Text>
        </View>
      ))}
    </View>
  );
}

function DataTable({ headers, rows, widths }) {
  const columnWidths = widths ?? headers.map(() => `${100 / headers.length}%`);

  return (
    <View style={styles.table} wrap={false}>
      <View style={styles.tableHeader}>
        {headers.map((header, index) => (
          <Text
            key={header}
            style={[styles.tableCell, styles.tableHeadCell, { width: columnWidths[index] }]}
          >
            {header}
          </Text>
        ))}
      </View>
      {rows.map((row) => (
        <View key={row.join("-")} style={styles.tableRow}>
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

function CoverPage() {
  return (
    <Page size="A4" style={styles.coverPage}>
      <Image
        src={assetSrc(projectReportMeta.logo.src)}
        alt={projectReportMeta.logo.alt}
        style={styles.coverLogo}
      />
      <View style={styles.coverRule} />
      <Text style={styles.coverEyebrow}>{projectReportMeta.subtitle}</Text>
      <Text style={styles.coverTitle}>{projectReportMeta.title}</Text>
      <Text style={styles.coverSubtitle}>
        Memoria independiente de carácter académico y profesional basada en las cuatro fases del
        proyecto, con diseño propio para PDF y acentos visuales de la identidad Lava & Salitre.
      </Text>
      <View style={styles.coverMeta}>
        <Text style={styles.coverMetaText}>{projectReportMeta.restaurant}</Text>
        <Text style={styles.coverMetaText}>{projectReportMeta.tagline}</Text>
        <Text style={styles.coverMetaText}>{projectReportMeta.dateLabel}</Text>
      </View>
      <Footer />
    </Page>
  );
}

function IndexPage() {
  return (
    <ReportPage>
      <Text style={styles.topKicker}>Contenido</Text>
      <Text style={styles.h1}>Índice</Text>
      <Text style={styles.lead}>
        Estructura del informe con portada, introducción, desarrollo por fases y conclusión final.
      </Text>
      <View style={styles.section}>
        {reportIndexSections.map((section, index) => (
          <View key={section} style={styles.indexRow}>
            <Text style={styles.indexNumber}>{String(index + 1).padStart(2, "0")}</Text>
            <Text style={styles.indexTitle}>{section}</Text>
          </View>
        ))}
      </View>
      <View style={styles.infoBand} wrap={false}>
        <Text style={styles.paragraph}>
          Cada fase comienza en una página nueva y se presenta como bloque de memoria, no como
          reproducción visual de la web.
        </Text>
      </View>
    </ReportPage>
  );
}

function IntroductionPage() {
  return (
    <ReportPage>
      <Text style={styles.topKicker}>Memoria del proyecto</Text>
      <Text style={styles.h1}>{reportIntroduction.title}</Text>
      {reportIntroduction.paragraphs.map((paragraph) => (
        <Text key={paragraph} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
      <ImageFigure image={reportIntroduction.image} />
      <View style={styles.twoColumns}>
        <View style={styles.columnLeft}>
          <Text style={styles.h2}>Proposito</Text>
          <Text style={styles.paragraph}>
            La propuesta une producto local, paisaje volcánico, salitre atlántico y herramientas
            digitales para construir una experiencia gastronómica clara y defendible.
          </Text>
        </View>
        <View style={styles.columnRight}>
          <Text style={styles.h2}>Alcance</Text>
          <BulletList items={reportIntroduction.highlights} />
        </View>
      </View>
    </ReportPage>
  );
}

function MenuOverview() {
  return (
    <View style={styles.section}>
      <Text style={styles.h2}>Menús de la propuesta</Text>
      {reportMenuOverview.map((menu) => (
        <View key={menu.name} style={styles.menuBlock} wrap={false}>
          <Text style={styles.menuMeta}>
            {menu.count} elaboraciones | {menu.tagline}
          </Text>
          <Text style={styles.menuTitle}>{menu.name}</Text>
          <Text style={styles.paragraph}>{menu.description}</Text>
        </View>
      ))}
    </View>
  );
}

function DishHighlights() {
  return (
    <View style={styles.section}>
      <Text style={styles.h2}>Selección visual de elaboraciones</Text>
      <View style={styles.imageGrid}>
        {reportDishHighlights.map((dish, index) => (
          <View
            key={dish.id}
            style={[styles.dishBlock, (index + 1) % 2 === 0 ? styles.dishBlockEven : undefined]}
            wrap={false}
          >
            {dish.image.src ? (
              <Image src={assetSrc(dish.image.src)} alt={dish.image.alt} style={styles.dishImage} />
            ) : null}
            <Text style={styles.dishMeta}>
              {dish.category} | {dish.menu}
            </Text>
            <Text style={styles.dishName}>{dish.name}</Text>
            <Text style={styles.dishText}>{dish.description}</Text>
            <Text style={[styles.dishText, { marginTop: 5 }]}>Técnica: {dish.technique}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function DigitalImplementation() {
  const rows = digitalImplementationRows.map((row) => [row.area, row.content, row.value]);

  return (
    <View style={styles.section}>
      <Text style={styles.h2}>Sistema tecnológico</Text>
      <DataTable
        headers={["Area", "Contenido", "Valor para el restaurante"]}
        rows={rows}
        widths={["24%", "37%", "39%"]}
      />
    </View>
  );
}

function DafoSummary() {
  return (
    <View style={styles.section}>
      <Text style={styles.h2}>Sintesis DAFO</Text>
      <View style={styles.dafoGrid}>
        {dafoSummary.map((block, index) => (
          <View
            key={block.label}
            style={[styles.dafoItem, (index + 1) % 2 === 0 ? styles.dafoItemEven : undefined]}
            wrap={false}
          >
            <Text style={styles.h3}>{block.label}</Text>
            <BulletList items={block.items} />
          </View>
        ))}
      </View>
    </View>
  );
}

function BudgetSummary() {
  return (
    <View style={styles.section}>
      <Text style={styles.h2}>Resumen económico</Text>
      <DataTable
        headers={["Menu", "Precio sin maridaje", "Precio con maridaje"]}
        rows={budgetRows}
        widths={["34%", "33%", "33%"]}
      />
      <View style={{ marginTop: 16 }}>
        <Text style={styles.h3}>Inversión tecnológica inicial recomendada</Text>
        <DataTable
          headers={["Concepto", "Coste estimado"]}
          rows={technologyBudgetRows}
          widths={["66%", "34%"]}
        />
      </View>
    </View>
  );
}

function PhasePage({ phase }) {
  return (
    <ReportPage>
      <View style={styles.phaseHeader}>
        <Text style={styles.phaseNumber}>{phase.phase}</Text>
        <View style={styles.phaseTitleRow}>
          <Text style={styles.phaseBadge}>{phase.number}</Text>
          <Text style={styles.phaseTitle}>{phase.title}</Text>
        </View>
      </View>
      <Text style={styles.lead}>{phase.intro}</Text>
      <ImageFigure image={phase.image} contain={phase.id === "fase-2" || phase.id === "fase-3"} />
      <BulletList items={phase.highlights} />

      <View style={styles.twoColumns}>
        <View style={styles.columnLeft}>
          {phase.sections.slice(0, 2).map((section) => (
            <SectionBlock key={section.title} title={section.title} text={section.text} />
          ))}
        </View>
        <View style={styles.columnRight}>
          {phase.sections.slice(2).map((section) => (
            <SectionBlock key={section.title} title={section.title} text={section.text} />
          ))}
          <View style={styles.infoBand} wrap={false}>
            <Text style={styles.paragraph}>{phase.lead}</Text>
          </View>
        </View>
      </View>

      {phase.id === "fase-1" ? (
        <View style={styles.section}>
          <Text style={styles.h2}>Bocetos de reinterpretacion</Text>
          <ImageGrid images={reinterpretationImages} />
        </View>
      ) : null}

      {phase.id === "fase-2" ? (
        <>
          <MenuOverview />
          <View style={styles.section}>
            <Text style={styles.h2}>Carta física y códigos QR</Text>
            <ImageGrid images={cartaFisicaImages} contain />
          </View>
          <DishHighlights />
        </>
      ) : null}

      {phase.id === "fase-3" ? <DigitalImplementation /> : null}

      {phase.id === "fase-4" ? (
        <>
          <DafoSummary />
          <BudgetSummary />
        </>
      ) : null}
    </ReportPage>
  );
}

function ConclusionPage() {
  return (
    <ReportPage>
      <Text style={styles.topKicker}>Cierre</Text>
      <Text style={styles.h1}>{reportConclusion.title}</Text>
      {reportConclusion.paragraphs.map((paragraph) => (
        <Text key={paragraph} style={styles.paragraph}>
          {paragraph}
        </Text>
      ))}
      <ImageFigure image={reportConclusion.image} />
      <View style={styles.infoBand}>
        <Text style={styles.h3}>Valor final del proyecto</Text>
        <Text style={styles.paragraph}>
          El informe muestra una propuesta independiente de la web, con formato A4 vertical, fondo
          blanco, márgenes amplios, jerarquía académica y acentos cromáticos inspirados en la
          identidad visual de Lava & Salitre.
        </Text>
      </View>
    </ReportPage>
  );
}

export function InformeProyectoPDF() {
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
        <PhasePage key={phase.id} phase={phase} />
      ))}
      <ConclusionPage />
    </Document>
  );
}

export default InformeProyectoPDF;
