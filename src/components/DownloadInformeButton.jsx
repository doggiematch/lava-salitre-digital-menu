import { PDF_FILE_NAME } from "@/data/projectReport";

const buttonClassName =
  "inline-flex rounded-full border border-gold bg-gold/10 px-5 py-3 text-xs uppercase tracking-[0.24em] text-foreground transition-colors hover:bg-gold hover:text-accent-foreground";
const PDF_PUBLIC_PATH = `/proyecto/${PDF_FILE_NAME}`;

export function DownloadInformeButton() {
  return (
    <a
      href={PDF_PUBLIC_PATH}
      download={PDF_FILE_NAME}
      className={buttonClassName}
      aria-label="Descargar informe PDF"
    >
      Descargar informe PDF
    </a>
  );
}
