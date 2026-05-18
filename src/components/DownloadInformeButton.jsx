import { useEffect, useState } from "react";
import { PDF_FILE_NAME } from "@/data/projectReport";

const buttonClassName =
  "inline-flex rounded-full border border-gold bg-gold/10 px-5 py-3 text-xs uppercase tracking-[0.24em] text-foreground transition-colors hover:bg-gold hover:text-accent-foreground";

export function DownloadInformeButton() {
  const [isClient, setIsClient] = useState(false);
  const [pdfModules, setPdfModules] = useState(null);

  useEffect(() => {
    let isMounted = true;

    setIsClient(true);

    Promise.all([import("@react-pdf/renderer"), import("@/pdf/InformeProyectoPDF")]).then(
      ([renderer, pdf]) => {
        if (isMounted) {
          setPdfModules({
            PDFDownloadLink: renderer.PDFDownloadLink,
            InformeProyectoPDF: pdf.InformeProyectoPDF,
          });
        }
      },
    );

    return () => {
      isMounted = false;
    };
  }, []);

  if (!isClient || !pdfModules) {
    return <span className={`${buttonClassName} opacity-70`}>Descargar informe PDF</span>;
  }

  const { PDFDownloadLink, InformeProyectoPDF } = pdfModules;

  return (
    <PDFDownloadLink
      document={<InformeProyectoPDF />}
      fileName={PDF_FILE_NAME}
      className={buttonClassName}
      aria-label="Descargar informe PDF"
    >
      Descargar informe PDF
    </PDFDownloadLink>
  );
}
