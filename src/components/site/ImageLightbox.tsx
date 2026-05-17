import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

export type LightboxImage = {
  src: string;
  alt: string;
};

export function ImageLightbox({
  image,
  onClose,
}: {
  image: LightboxImage | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!image) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;

      const isCloseButton = target.closest("[data-image-lightbox-close]");
      const isImage = target.closest("[data-image-lightbox-media]");
      const isBackdrop = target === document.querySelector("[data-image-lightbox='true']");

      if (isImage || (!isCloseButton && !isBackdrop)) return;

      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      onClose();
    };

    document.addEventListener("pointerdown", handlePointerDown, true);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown, true);
    };
  }, [image, onClose]);

  function stopLightboxEvent(event: React.SyntheticEvent) {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  }

  function closeFromLightboxEvent(event: React.SyntheticEvent) {
    stopLightboxEvent(event);
    onClose();
  }

  useEffect(() => {
    if (!image) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [image, onClose]);

  if (!image || typeof document === "undefined") return null;

  return createPortal(
    <div
      data-image-lightbox="true"
      className="pointer-events-auto fixed inset-0 z-[100] flex items-center justify-center bg-black/88 p-4"
      style={{ pointerEvents: "auto" }}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onPointerDown={closeFromLightboxEvent}
      onClick={stopLightboxEvent}
    >
      <button
        type="button"
        data-image-lightbox-close="true"
        className="pointer-events-auto fixed right-4 top-4 z-[101] grid size-11 place-items-center rounded-md border border-border bg-background text-foreground shadow-lg transition-colors hover:bg-secondary lg:right-6 lg:top-6"
        style={{ pointerEvents: "auto" }}
        aria-label="Cerrar imagen"
        onPointerDown={closeFromLightboxEvent}
        onClick={stopLightboxEvent}
      >
        <X className="size-6" />
      </button>

      <div
        data-image-lightbox-media="true"
        className="pointer-events-auto flex w-fit max-w-[94vw] items-center justify-center"
        style={{ pointerEvents: "auto" }}
        onPointerDown={stopLightboxEvent}
        onClick={stopLightboxEvent}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="block max-h-[90vh] max-w-[94vw] object-contain shadow-2xl"
        />
      </div>
    </div>,
    document.body,
  );
}
