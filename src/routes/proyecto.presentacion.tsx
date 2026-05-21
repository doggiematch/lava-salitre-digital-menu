import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChefHat,
  FileText,
  Gem,
  Pause,
  Palette,
  Play,
  QrCode,
  Sparkles,
  Utensils,
  Waves,
  type LucideIcon,
} from "lucide-react";
import { allDishes } from "@/data/menu";
import { projectReportMeta } from "@/data/projectReport";

export const Route = createFileRoute("/proyecto/presentacion")({
  component: ExposicionDeck,
  head: () => ({
    meta: [
      { title: "Exposición - Lava & Salitre" },
      {
        name: "description",
        content: "Presentación interactiva de 16 slides para exponer el proyecto Lava & Salitre.",
      },
    ],
  }),
});

type Slide = {
  tab: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  content: ReactNode;
};

const dishExamples = [
  {
    group: "Entrante",
    name: "Ostra canaria",
    image: "/fotos-platos/ostra-canaria.png",
    origin: "Ostra canaria, agua de mar filtrada, pepino y limón",
    technique: "Aire marino y granizado",
    recipe:
      "Se abre la ostra con cuidado y se conserva su agua natural para mantener todo su sabor marino. Se prepara un aire marino con agua de mar filtrada y lecitina, que aporta una textura ligera y fresca. Se acompaña con granizado salino de pepino para reforzar la sensación de mar y dar un contraste refrescante.",
    pairing:
      "Los Bermejos Malvasía Seco, de Lanzarote, elaborado con uva Malvasía Volcánica. Su frescura, mineralidad y toque salino acompañan muy bien el sabor marino de la ostra.",
    pairingWine: "Los Bermejos Malvasía Seco",
    text: "Un pase marino, fresco y salino que abre la experiencia con una lectura directa del Atlántico.",
  },
  {
    group: "Primero",
    name: "Ceviche de cherne",
    image: "/fotos-platos/ceviche-cherne.png",
    origin: "Cherne fresco, cítricos, leche de tigre y cilantro",
    technique: "Maceración y clarificación",
    recipe:
      "El cherne se corta en dados pequeños y se marina con cítricos para que la acidez cocine ligeramente el pescado. Se termina con leche de tigre clarificada, que aporta un sabor limpio, fresco y elegante. El aceite de cilantro se añade al final para dar aroma, color y un toque vegetal al plato.",
    pairing:
      "Tajinaste Blanco Seco, de Tenerife, elaborado con uva Listán Blanco. Su acidez y frescura acompañan muy bien el ceviche.",
    pairingWine: "Tajinaste Blanco Seco",
    text: "Un plato ácido, limpio y elegante que mantiene la frescura del pescado como protagonista.",
  },
  {
    group: "Segundo",
    name: "Conejo en salmorejo invertido",
    image: "/fotos-platos/conejo-salmorejo.png",
    origin: "Conejo canario, ajo, pimentón, vino blanco, tomillo y especias",
    technique: "Marinado y cocción lenta",
    recipe:
      "El conejo se marina con ajo, pimentón, vino blanco, tomillo y especias para que absorba bien el sabor del salmorejo canario. Después se cocina lentamente hasta quedar tierno y jugoso. El salmorejo se presenta de forma moderna mediante espuma y geles, manteniendo el sabor tradicional pero con una presentación más actual.",
    pairing:
      "Monje Tradicional Tinto, de Tenerife, elaborado con uva Listán Negro. Sus notas afrutadas y especiadas combinan muy bien con el salmorejo y la carne de conejo.",
    pairingWine: "Monje Tradicional Tinto",
    text: "Reinterpreta una receta tradicional canaria desde una presentación contemporánea.",
  },
  {
    group: "Petit four",
    name: "Toffee crujiente aireado",
    image: "/fotos-platos/toffee-aireado.png",
    origin: "Azúcar, nata, mantequilla y sal marina",
    technique: "Caramelización y aireado",
    recipe:
      "Se elabora un toffee con azúcar, nata y mantequilla hasta conseguir un caramelo tostado y cremoso. Después se airea y se enfría para lograr una textura ligera, porosa y crujiente. Se sirve en pequeños bocados con un toque de sal marina, que equilibra el dulzor y potencia el sabor del caramelo.",
    pairing:
      "El Grifo Moscatel de Ana, de Lanzarote, elaborado con uva Moscatel de Alejandría. Sus notas dulces de miel, fruta madura y caramelo acompañan muy bien el toffee.",
    pairingWine: "El Grifo Moscatel de Ana",
    text: "Un cierre dulce, salino y ligero que funciona como pequeño final de menú.",
  },
] as const;

const targetAudience = [
  "Público adulto de 30 a 60 años, con especial peso entre 35 y 55.",
  "Cliente local y turista gastronómico que busca producto canario, relato y una experiencia cuidada.",
  "Parejas, pequeños grupos, gourmets y personas interesadas en sostenibilidad y cocina de autor.",
] as const;

const experiencePoints = [
  {
    title: "Ambiente",
    text: "Tranquilo, elegante y vinculado al paisaje de Agaete, con presencia de piedra volcánica, mar y luz natural.",
  },
  {
    title: "Sensaciones",
    text: "Frescura atlántica, fuerza de la tierra, producto de temporada y una lectura actual de sabores reconocibles.",
  },
  {
    title: "Experiencia",
    text: "Menú degustación con relato: el cliente recorre Canarias a través de bocados de mar, cumbre, fuego y memoria insular.",
  },
] as const;

const visualDesign = [
  {
    label: "Colores",
    value: "Negro volcánico, dorado, crema, blanco roto y acentos de salitre.",
  },
  {
    label: "Tipografía",
    value: "Serif elegante para la marca y titulares; sans clara para lectura digital.",
  },
  {
    label: "Estilo",
    value: "Minimalista, sobrio, premium y ligado a la textura de la carta física.",
  },
] as const;

const presentationTechniques = [
  {
    title: "Esferificación",
    description:
      "Convierte líquidos en pequeñas esferas con una capa fina exterior y un interior líquido que explota en boca.",
    application:
      "Aplicable a mojos, caldos, jugos marinos o tuno indio para presentar sabores canarios de forma moderna.",
  },
  {
    title: "Nitrógeno líquido",
    description:
      "Congela muy rápido y permite crear helados al momento, contrastes de frío y pequeños efectos visuales.",
    application:
      "Reservado para postres o bocados concretos, como un helado rápido de plátano canario o un prepostre frío.",
  },
  {
    title: "Deconstrucción",
    description:
      "Separa los elementos de un plato tradicional y los presenta de otra manera manteniendo su sabor original.",
    application:
      "Permite reinterpretar papas arrugadas, mojos o salmorejos desde una lectura limpia y contemporánea.",
  },
  {
    title: "Espumas",
    description:
      "Transforman cremas, salsas o líquidos en texturas ligeras y aireadas mediante sifón.",
    application:
      "Aportan ligereza a gofio, queso canario, marisco o mojo suave sin ocultar el producto principal.",
  },
  {
    title: "Gelificaciones",
    description:
      "Convierten líquidos en geles con agar-agar, gelatina o pectina para dar forma, color y textura.",
    application:
      "Sirven para puntos cítricos, frutales o marinos que equilibran pescados, mariscos y postres.",
  },
] as const;

const TIMER_DURATION_MS = 10 * 60 * 1000;
const TIMER_STORAGE_KEY = "lava-salitre-presentation-timer";
const PROJECT_ACCESS_URL = "https://lava-salitre-digital-menu.vercel.app/";
const PROJECT_ACCESS_PASSWORD = "lava2026";

type TimerState = {
  elapsedMs: number;
  running: boolean;
  startedAt: number | null;
};

const initialTimerState: TimerState = {
  elapsedMs: 0,
  running: false,
  startedAt: null,
};

function ExposicionDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timer, setTimer] = useState<TimerState>(initialTimerState);
  const [, setTimerTick] = useState(0);
  const totalDishes = useMemo(() => uniqueDishes(allDishes).length, []);

  const slides = useMemo<Slide[]>(
    () => [
      {
        tab: "Portada",
        eyebrow: "Exposición del proyecto",
        title: "Lava & Salitre",
        subtitle: "Cocina canaria de vanguardia",
        content: <CoverSlide />,
      },
      {
        tab: "Identidad",
        eyebrow: "1. Presentación del restaurante",
        title: "Nombre, logotipo y eslogan",
        subtitle: "La marca resume la unión entre la tierra volcánica y el Atlántico.",
        content: <IdentitySlide />,
      },
      {
        tab: "Concepto",
        eyebrow: "2. Concepto del restaurante",
        title: "Tradición canaria con mirada actual",
        subtitle: "Producto local, técnica de vanguardia y relato territorial.",
        content: <ConceptSlide />,
      },
      {
        tab: "Público",
        eyebrow: "3. Público objetivo",
        title: "Clientes que buscan una experiencia especial",
        subtitle:
          "No es una propuesta para comer rápido: es una experiencia gastronómica con pausa.",
        content: <AudienceSlide />,
      },
      {
        tab: "Experiencia",
        eyebrow: "4. Experiencia gastronómica",
        title: "El cliente vive tierra, mar y memoria",
        subtitle: "La sala, el paisaje y la carta trabajan juntos para contar Canarias.",
        content: <ExperienceSlide />,
      },
      {
        tab: "Carta",
        eyebrow: "5. La carta gastronómica",
        title: `${totalDishes} elaboraciones organizadas en 3 menús`,
        subtitle: "Menú Lava, Menú Salitre y Menú Lava & Salitre.",
        content: <MenuSlide totalDishes={totalDishes} />,
      },
      {
        tab: "4 platos",
        eyebrow: "6. Selección de recetas",
        title: "Cuatro elaboraciones para presentar",
        subtitle:
          "Cada receta se desarrolla en una slide propia con fotografía, elaboración, técnica y maridaje.",
        content: <RecipeIntroSlide />,
      },
      ...dishExamples.map((dish, index) => ({
        tab: `Receta ${index + 1}`,
        eyebrow: `6.${index + 1}. ${dish.group}`,
        title: dish.name,
        subtitle: dish.text,
        content: <RecipeDetailSlide dish={dish} index={index} />,
      })),
      {
        tab: "Técnicas",
        eyebrow: "7. Técnicas culinarias utilizadas",
        title: "Vanguardia al servicio del producto",
        subtitle:
          "Deconstrucción, esferificación, espumas, gelificaciones y frío aplicado con sentido.",
        content: <TechniquesSlide />,
      },
      {
        tab: "Diseño",
        eyebrow: "8. Diseño de la carta",
        title: "Una carta física elegante conectada con contenido digital",
        subtitle: "La identidad visual se mantiene entre papel, web, QR y fichas técnicas.",
        content: <DesignSlide />,
      },
      {
        tab: "Innovación",
        eyebrow: "9. Elemento más innovador",
        title: "QR por elaboración y carta digital ampliada",
        subtitle:
          "La tecnología no sustituye la sala: amplía la información sin recargar la carta.",
        content: <InnovationSlide />,
      },
      {
        tab: "Cierre",
        eyebrow: "10. Cierre de la exposición",
        title: "Una propuesta completa, coherente y defendible",
        subtitle:
          "Concepto, carta, técnica, diseño, web y documentación unidos en un mismo proyecto.",
        content: <ClosingSlide />,
      },
      {
        tab: "Acceso",
        eyebrow: "Fin de la exposición",
        title: "Acceso al proyecto",
        subtitle: "QR, dirección web y cierre institucional.",
        content: <FinalAccessSlide />,
      },
    ],
    [totalDishes],
  );

  const activeSlide = slides[activeIndex] ?? slides[0];
  const progress = ((activeIndex + 1) / slides.length) * 100;
  const elapsedMs = getCurrentElapsedMs(timer);
  const remainingMs = Math.max(0, TIMER_DURATION_MS - elapsedMs);
  const timerHasFinished = remainingMs === 0;

  useEffect(() => {
    const savedTimer = readSavedTimer();
    setTimer(savedTimer);
  }, []);

  useEffect(() => {
    if (!timer.running) return;

    const intervalId = window.setInterval(() => {
      setTimerTick((tick) => tick + 1);
    }, 500);

    return () => window.clearInterval(intervalId);
  }, [timer.running]);

  useEffect(() => {
    if (!timer.running || !timer.startedAt) return;

    if (elapsedMs >= TIMER_DURATION_MS) {
      const finishedTimer: TimerState = {
        elapsedMs: TIMER_DURATION_MS,
        running: false,
        startedAt: null,
      };
      setTimer(finishedTimer);
      saveTimer(finishedTimer);
    }
  }, [elapsedMs, timer.running, timer.startedAt]);

  function toggleTimer() {
    const currentElapsedMs = getCurrentElapsedMs(timer);

    if (currentElapsedMs >= TIMER_DURATION_MS) return;

    if (timer.running) {
      const pausedTimer: TimerState = {
        elapsedMs: currentElapsedMs,
        running: false,
        startedAt: null,
      };
      setTimer(pausedTimer);
      saveTimer(pausedTimer);
      return;
    }

    const runningTimer: TimerState = {
      elapsedMs: currentElapsedMs,
      running: true,
      startedAt: Date.now(),
    };
    setTimer(runningTimer);
    saveTimer(runningTimer);
  }

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousDocumentOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => Math.min(index + 1, slides.length - 1));
      }

      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => Math.max(index - 1, 0));
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousDocumentOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [slides.length]);

  return (
    <div className="fixed inset-0 z-[100] flex h-dvh flex-col overflow-hidden bg-[#f8f5ee] text-[#24302d]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,_rgba(248,245,238,0.98)_0%,_rgba(232,244,242,0.95)_48%,_rgba(255,248,237,0.98)_100%)]" />

      <header className="relative z-10 shrink-0 border-b border-[#24302d]/10 bg-white/65 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 lg:px-8">
          <Link
            to="/proyecto"
            className="flex shrink-0 items-center gap-3 rounded-md px-2 py-1 transition-colors hover:bg-white/70"
            aria-label="Volver al proyecto"
          >
            <img src="/galeria/isotipo.png" alt="" className="size-10 object-contain" aria-hidden />
            <span className="hidden font-serif text-lg text-[#24302d] [letter-spacing:0] lg:block">
              Lava <span className="text-[#b8812c]">&</span> Salitre
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTimer}
              disabled={timerHasFinished}
              className={`inline-flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                timer.running
                  ? "border-[#c98a4b] bg-[#fff9ed] text-[#24302d] hover:bg-[#f4ead7]"
                  : "border-[#24302d]/20 bg-white/70 text-[#24302d] hover:border-[#24302d]"
              } disabled:cursor-not-allowed disabled:opacity-60`}
              aria-label={timer.running ? "Pausar cronómetro" : "Iniciar cronómetro"}
            >
              {timer.running ? <Pause className="size-4" /> : <Play className="size-4" />}
              <span>{timer.running ? "Pausar" : elapsedMs > 0 ? "Reanudar" : "Iniciar"}</span>
            </button>
            <div className="min-w-[5.6rem] rounded-md border border-[#24302d]/12 bg-white/70 px-3 py-2 text-center font-serif text-2xl leading-none text-[#24302d] [letter-spacing:0]">
              {formatRemainingTime(remainingMs)}
            </div>
            <div className="hidden min-w-16 text-right text-xs font-semibold text-[#52615d] lg:block">
              {activeIndex + 1} / {slides.length}
            </div>
          </div>
        </div>
        <div className="h-1 bg-[#24302d]/10">
          <div
            className="h-full bg-[#c98a4b] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <main className="relative z-10 min-h-0 flex-1 overflow-hidden px-4 lg:px-8">
        <div className="mx-auto h-full max-w-7xl overflow-hidden py-3 lg:py-4">
          <section
            key={activeSlide.tab}
            className="grid min-h-full items-center animate-fade-up"
            aria-labelledby="slide-title"
          >
            <div className="mb-3 max-w-4xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-[#b8812c]">
                {activeSlide.eyebrow}
              </p>
              <h1
                id="slide-title"
                className="mt-2 font-serif text-3xl leading-[1.04] text-[#24302d] [letter-spacing:0] lg:text-[2.75rem]"
              >
                {activeSlide.title}
              </h1>
              {activeSlide.subtitle ? (
                <p className="mt-1.5 max-w-3xl text-sm leading-6 text-[#52615d] lg:text-base">
                  {activeSlide.subtitle}
                </p>
              ) : null}
            </div>
            {activeSlide.content}
          </section>
        </div>
      </main>

      <footer className="relative z-10 shrink-0 border-t border-[#24302d]/10 bg-white/55 px-4 py-2.5 backdrop-blur-xl lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => setActiveIndex((index) => Math.max(index - 1, 0))}
            disabled={activeIndex === 0}
            className="inline-flex items-center gap-2 rounded-md border border-[#24302d]/20 bg-white/60 px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#24302d] transition-colors hover:border-[#24302d] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ArrowLeft className="size-4" />
            <span className="hidden lg:inline">Anterior</span>
          </button>

          <nav className="flex min-w-0 flex-1 flex-wrap justify-center gap-1" aria-label="Slides">
            {slides.map((slide, index) => (
              <button
                key={slide.tab}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`rounded-md border px-2.5 py-1.5 text-[9px] font-semibold uppercase leading-none tracking-[0.1em] transition-colors lg:text-[10px] ${
                  activeIndex === index
                    ? "border-[#24302d] bg-[#24302d] text-white"
                    : "border-[#24302d]/15 bg-white/50 text-[#52615d] hover:border-[#24302d]/45 hover:text-[#24302d]"
                }`}
              >
                {slide.tab}
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setActiveIndex((index) => Math.min(index + 1, slides.length - 1))}
            disabled={activeIndex === slides.length - 1}
            className="inline-flex items-center gap-2 rounded-md border border-[#24302d]/20 bg-[#24302d] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-[#3a4844] disabled:cursor-not-allowed disabled:opacity-40"
          >
            <span className="hidden lg:inline">Siguiente</span>
            <ArrowRight className="size-4" />
          </button>
        </div>
      </footer>
    </div>
  );
}

function getCurrentElapsedMs(timer: TimerState) {
  if (!timer.running || !timer.startedAt) {
    return Math.min(timer.elapsedMs, TIMER_DURATION_MS);
  }

  return Math.min(timer.elapsedMs + Date.now() - timer.startedAt, TIMER_DURATION_MS);
}

function readSavedTimer(): TimerState {
  if (typeof window === "undefined") return initialTimerState;

  try {
    const rawTimer = window.localStorage.getItem(TIMER_STORAGE_KEY);
    if (!rawTimer) return initialTimerState;

    const savedTimer = JSON.parse(rawTimer) as Partial<TimerState>;
    const normalizedTimer: TimerState = {
      elapsedMs: Number(savedTimer.elapsedMs) || 0,
      running: Boolean(savedTimer.running),
      startedAt: typeof savedTimer.startedAt === "number" ? savedTimer.startedAt : null,
    };
    const elapsedMs = getCurrentElapsedMs(normalizedTimer);

    if (elapsedMs >= TIMER_DURATION_MS) {
      return {
        elapsedMs: TIMER_DURATION_MS,
        running: false,
        startedAt: null,
      };
    }

    return {
      elapsedMs,
      running: normalizedTimer.running,
      startedAt: normalizedTimer.running ? Date.now() : null,
    };
  } catch {
    return initialTimerState;
  }
}

function saveTimer(timer: TimerState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(TIMER_STORAGE_KEY, JSON.stringify(timer));
}

function formatRemainingTime(milliseconds: number) {
  const totalSeconds = Math.ceil(milliseconds / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function CoverSlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
      <div className="rounded-md border border-[#24302d]/12 bg-white/65 p-5">
        <img
          src={projectReportMeta.logo.src}
          alt={projectReportMeta.logo.alt}
          className="h-20 w-auto object-contain"
        />
        <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#b8812c]">
          Proyecto escolar
        </p>
        <h2 className="mt-3 font-serif text-5xl leading-none text-[#24302d] [letter-spacing:0] lg:text-7xl">
          Lava <span className="text-[#b8812c]">&</span> Salitre
        </h2>
        <p className="mt-4 max-w-xl text-base leading-7 text-[#52615d] lg:text-lg">
          Restaurante gastronómico canario inspirado en la fuerza volcánica de la tierra y la
          frescura del Atlántico.
        </p>
        <div className="mt-6 grid gap-3 lg:grid-cols-3">
          <MiniStat value="Tierra" label="Lava" />
          <MiniStat value="Mar" label="Salitre" />
          <MiniStat value="Vanguardia" label="Cocina" />
        </div>
      </div>
      <HeroImage src="/galeria/imagen-hero.png" alt="Plato de Lava & Salitre frente a Agaete" />
    </div>
  );
}

function IdentitySlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.92fr] lg:items-center">
      <div className="grid gap-4">
        <InfoPanel icon={Utensils} title="Nombre del restaurante">
          Se llama Lava & Salitre porque une dos elementos esenciales de Canarias: la tierra
          volcánica y el salitre del Atlántico.
        </InfoPanel>
        <InfoPanel icon={Gem} title="Logotipo">
          El símbolo representa una formación volcánica atravesada por un trazo orgánico que puede
          leerse como lava, camino, costa o corriente marina.
        </InfoPanel>
        <InfoPanel icon={Palette} title="Colores y eslogan">
          El dorado transmite valor gastronómico; el negro conecta con la piedra volcánica. El claim
          es "Tierra y Mar" y el subtítulo de marca es "Cocina canaria de vanguardia".
        </InfoPanel>
      </div>

      <figure className="rounded-md border border-[#24302d]/12 bg-[#171a18] p-8 text-center">
        <img
          src="/galeria/logo-version-dorada-negro.png"
          alt="Logotipo Lava & Salitre"
          className="mx-auto max-h-72 w-full object-contain"
        />
        <figcaption className="mt-4 text-[10px] uppercase tracking-[0.26em] text-[#e4c688]">
          Imagotipo · símbolo + texto
        </figcaption>
      </figure>
    </div>
  );
}

function ConceptSlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
      <HeroImage src="/proyecto/fase-1/concepto-lava-salitre.jpg" alt="Concepto Lava & Salitre" />
      <div className="grid gap-4">
        <Statement>
          El restaurante ofrece cocina canaria minimalista y de vanguardia, con platos de mar y
          tierra elaborados con producto local, de temporada y kilómetro cero.
        </Statement>
        <div className="grid gap-3 lg:grid-cols-2">
          <SmallCard title="Tipo de cocina" text="Cocina canaria actual, precisa y elegante." />
          <SmallCard
            title="Estilo gastronómico"
            text="Menú degustación con raíz local y técnica moderna."
          />
          <SmallCard
            title="Idea principal"
            text="Contar Canarias desde la lava, el salitre y el producto insular."
          />
          <SmallCard
            title="Diferenciación"
            text="No copia recetas tradicionales: las reinterpreta con una lectura contemporánea."
          />
        </div>
      </div>
    </div>
  );
}

function AudienceSlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.92fr] lg:items-center">
      <div className="grid gap-4">
        {targetAudience.map((item) => (
          <div
            key={item}
            className="flex gap-3 rounded-md border border-[#24302d]/12 bg-white/65 p-4"
          >
            <CheckCircle2 className="mt-1 size-5 shrink-0 text-[#3f7f66]" />
            <p className="text-base leading-7 text-[#52615d]">{item}</p>
          </div>
        ))}
        <div className="rounded-md border border-[#c98a4b]/35 bg-[#fff9ed]/80 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b8812c]">
            Qué buscan
          </p>
          <p className="mt-3 font-serif text-2xl leading-snug text-[#24302d] [letter-spacing:0]">
            Buena comida, buen servicio, ambiente tranquilo, producto canario y una presentación con
            sentido.
          </p>
        </div>
      </div>
      <HeroImage src="/galeria/restaurante-clientes.png" alt="Clientes en Lava & Salitre" />
    </div>
  );
}

function ExperienceSlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
      <HeroImage src="/galeria/terraza-atardecer.png" alt="Terraza frente al Atlántico" />
      <div className="grid gap-4">
        {experiencePoints.map((point) => (
          <InfoPanel key={point.title} icon={Waves} title={point.title}>
            {point.text}
          </InfoPanel>
        ))}
        <Statement>
          Se busca que el cliente sienta que cada plato forma parte de un recorrido: costa, cumbre,
          agricultura, ganadería, fuego y Atlántico.
        </Statement>
      </div>
    </div>
  );
}

function MenuSlide({ totalDishes }: { totalDishes: number }) {
  return (
    <div className="grid gap-5">
      <div className="grid gap-3 lg:grid-cols-4">
        <MiniStat value={`${totalDishes}`} label="Elaboraciones" />
        <MiniStat value="10" label="Pases Menú Lava" />
        <MiniStat value="10" label="Pases Menú Salitre" />
        <MiniStat value="15" label="Pases Lava & Salitre" />
      </div>
      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
        <Statement>
          La carta se defiende a través de una selección breve de cuatro elaboraciones completas:
          entrante, primero, segundo y petit four.
        </Statement>
        <div className="rounded-md border border-[#24302d]/12 bg-white/65 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b8812c]">
            Desarrollo en la exposición
          </p>
          <p className="mt-3 text-sm leading-7 text-[#52615d]">
            A continuación, cada plato aparece en una slide independiente con fotografía,
            elaboración, técnica culinaria y maridaje, siguiendo el contenido del documento de
            recetas y maridajes.
          </p>
        </div>
      </div>
    </div>
  );
}

function RecipeIntroSlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
      <div className="rounded-md border border-[#24302d]/12 bg-white/65 p-5">
        <ChefHat className="size-9 text-[#b8812c]" />
        <h2 className="mt-5 font-serif text-4xl leading-tight text-[#24302d] [letter-spacing:0]">
          Selección equilibrada para explicar el proyecto
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#52615d]">
          Las cuatro recetas muestran el recorrido gastronómico de Lava & Salitre: mar, pescado,
          tradición canaria reinterpretada y cierre dulce con maridaje.
        </p>
        <div className="mt-6 grid gap-3">
          <Badge>1 entrante · 1 primero · 1 segundo · 1 petit four</Badge>
          <Badge>Fotografía, receta, técnica culinaria y maridaje en cada slide</Badge>
        </div>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {dishExamples.map((dish) => (
          <DishCard key={dish.name} dish={dish} />
        ))}
      </div>
    </div>
  );
}

function RecipeDetailSlide({
  dish,
  index,
}: {
  dish: (typeof dishExamples)[number];
  index: number;
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
      <figure className="overflow-hidden rounded-md border border-[#24302d]/12 bg-white/65 shadow-[0_18px_70px_-42px_rgba(36,48,45,0.55)]">
        <img src={dish.image} alt={dish.name} className="h-[470px] w-full object-cover" />
      </figure>

      <div className="grid min-h-full gap-3">
        <div className="rounded-md border border-[#24302d]/12 bg-white/70 p-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b8812c]">
            Receta {index + 1} · {dish.group}
          </p>
          <h2 className="mt-2 font-serif text-4xl leading-tight text-[#24302d] [letter-spacing:0]">
            {dish.name}
          </h2>
          <p className="mt-3 text-sm leading-6 text-[#52615d]">{dish.origin}</p>
        </div>

        <div className="grid gap-3 lg:grid-cols-2">
          <RecipeInfoBlock title="Técnica culinaria">{dish.technique}</RecipeInfoBlock>
          <RecipeInfoBlock title="Maridaje elegido">{dish.pairingWine}</RecipeInfoBlock>
        </div>

        <RecipeInfoBlock title="Elaboración">{dish.recipe}</RecipeInfoBlock>
        <RecipeInfoBlock title="Maridaje">{dish.pairing}</RecipeInfoBlock>
      </div>
    </div>
  );
}

function RecipeInfoBlock({ title, children }: { title: string; children: ReactNode }) {
  return (
    <article className="rounded-md border border-[#24302d]/12 bg-white/70 p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b8812c]">
        {title}
      </p>
      <p className="mt-2 text-sm leading-6 text-[#52615d]">{children}</p>
    </article>
  );
}

function TechniquesSlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
      <div className="grid gap-4">
        <div className="rounded-md border border-[#24302d]/12 bg-white/65 p-5">
          <ChefHat className="size-8 text-[#b8812c]" />
          <h2 className="mt-4 font-serif text-3xl text-[#24302d] [letter-spacing:0]">
            Técnicas elegidas con sentido
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#52615d]">
            La técnica no funciona como decoración. Se utiliza para aligerar, concentrar sabor,
            controlar temperatura, crear contraste y hacer más clara la presentación.
          </p>
        </div>
        <div className="rounded-md border border-[#24302d]/12 bg-white/65 p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b8812c]">
            Aplicación en recetas
          </p>
          <div className="mt-3 grid gap-2">
            {dishExamples.map((dish) => (
              <div
                key={dish.name}
                className="flex items-center justify-between gap-3 border-b border-[#24302d]/10 pb-2 last:border-b-0 last:pb-0"
              >
                <span className="font-serif text-sm text-[#24302d] [letter-spacing:0]">
                  {dish.name}
                </span>
                <span className="text-right text-[11px] font-medium text-[#52615d]">
                  {dish.technique}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid gap-3 lg:grid-cols-2">
        {presentationTechniques.map((technique) => (
          <CulinaryTechniqueCard key={technique.title} technique={technique} />
        ))}
      </div>
    </div>
  );
}

function CulinaryTechniqueCard({
  technique,
}: {
  technique: (typeof presentationTechniques)[number];
}) {
  return (
    <article className="rounded-md border border-[#24302d]/12 bg-white/65 p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b8812c]">
        Técnica de la web
      </p>
      <h3 className="mt-2 font-serif text-2xl leading-tight text-[#24302d] [letter-spacing:0]">
        {technique.title}
      </h3>
      <p className="mt-2 text-xs leading-5 text-[#52615d]">{technique.description}</p>
      <p className="mt-2 border-t border-[#24302d]/10 pt-2 text-xs leading-5 text-[#52615d]">
        <span className="font-semibold text-[#24302d]">Aplicación:</span> {technique.application}
      </p>
    </article>
  );
}

function DesignSlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
      <div className="grid gap-4">
        {visualDesign.map((item) => (
          <div key={item.label} className="rounded-md border border-[#24302d]/12 bg-white/65 p-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b8812c]">
              {item.label}
            </p>
            <p className="mt-3 font-serif text-2xl leading-snug text-[#24302d] [letter-spacing:0]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
      <div className="grid gap-4">
        <HeroImage
          src="/proyecto/fase-2/carta-fisica/portada-carta-menu.png"
          alt="Portada de la carta física"
        />
        <div className="rounded-md border border-[#24302d]/12 bg-white/65 p-4 text-sm leading-7 text-[#52615d]">
          La carta se plantea como soporte de sala: limpia, visual, con nombres de platos y QR para
          ampliar origen, alérgenos y ficha técnica.
        </div>
      </div>
    </div>
  );
}

function InnovationSlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="grid gap-4">
        <Statement>
          El elemento más innovador es unir carta física, carta digital y QR individual por plato.
        </Statement>
        <InfoPanel icon={QrCode} title="Qué lo hace único">
          Cada elaboración puede abrir una ficha con descripción, ingredientes, técnica, origen del
          producto, alérgenos, imagen y maridaje.
        </InfoPanel>
        <InfoPanel icon={FileText} title="Por qué aporta valor">
          La carta impresa no se satura, el cliente entiende mejor el plato y el contenido puede
          actualizarse por temporada.
        </InfoPanel>
      </div>
      <div className="rounded-md border border-[#24302d]/12 bg-white/65 p-5">
        <img
          src="/proyecto/fase-2/carta-fisica/interior-3-carta-menu.png"
          alt="Interior de carta con códigos QR"
          className="h-[315px] w-full rounded-md object-cover object-top"
        />
        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          <MiniStat value="QR" label="Carta física" />
          <MiniStat value="Web" label="Fichas" />
          <MiniStat value="Sala" label="Relato" />
        </div>
      </div>
    </div>
  );
}

function ClosingSlide() {
  return (
    <div className="grid gap-5 lg:grid-cols-[1fr_0.92fr] lg:items-center">
      <div className="grid gap-4">
        <InfoPanel icon={Sparkles} title="Conclusión">
          Lava & Salitre ofrece una experiencia gastronómica canaria de vanguardia basada en
          producto local, técnica contemporánea y una identidad visual coherente.
        </InfoPanel>
        <InfoPanel icon={Utensils} title="Qué busca el proyecto">
          Sorprender al cliente mostrando que los productos de las islas pueden formar parte de una
          cocina moderna, elegante y con relato.
        </InfoPanel>
        <InfoPanel icon={BookOpen} title="Resultado final">
          El proyecto une concepto, público objetivo, carta, técnicas, diseño, soporte digital,
          documentación y presentación académica.
        </InfoPanel>
      </div>
      <HeroImage src="/galeria/equipo.png" alt="Equipo de Lava & Salitre" />
    </div>
  );
}

function FinalAccessSlide() {
  return (
    <div className="grid min-h-[54vh] gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
      <section className="rounded-md border border-[#24302d]/12 bg-white/70 p-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b8812c]">
          Web del proyecto
        </p>
        <div className="mt-5 grid place-items-center">
          <img
            src="/proyecto/acceso-web-qr.png"
            alt="QR de acceso a la página del proyecto"
            className="h-72 w-72 rounded-md bg-white object-contain p-4 shadow-[0_18px_60px_-42px_rgba(36,48,45,0.55)]"
          />
        </div>
        <a
          href={PROJECT_ACCESS_URL}
          className="mt-5 block break-all text-center font-serif text-2xl leading-snug text-[#24302d] [letter-spacing:0]"
        >
          {PROJECT_ACCESS_URL}
        </a>
        <p className="mt-3 text-center text-xs uppercase tracking-[0.2em] text-[#52615d]">
          Contraseña: {PROJECT_ACCESS_PASSWORD}
        </p>
      </section>

      <section className="grid place-items-center rounded-md border border-[#24302d]/12 bg-[#24302d] p-6 text-center text-white">
        <div>
          <div className="mx-auto w-[21rem] border border-[#b8812c] p-4">
            <img
              src="/galeria/rudy-ceo.png"
              alt="Rudy Lindgreen García"
              className="h-[22rem] w-full object-contain"
            />
          </div>
          <p className="mt-6 font-serif text-3xl leading-tight text-white [letter-spacing:0]">
            Rudy Lindgreen García
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.26em] text-[#d8b26b]">CEO</p>
        </div>
      </section>
    </div>
  );
}

function HeroImage({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="overflow-hidden rounded-md border border-[#24302d]/12 bg-white/65 shadow-[0_18px_70px_-42px_rgba(36,48,45,0.55)]">
      <img src={src} alt={alt} className="h-[350px] w-full object-cover" />
    </figure>
  );
}

function InfoPanel({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="rounded-md border border-[#24302d]/12 bg-white/65 p-3">
      <div className="flex items-center gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-md bg-[#24302d] text-white">
          <Icon className="size-5" />
        </span>
        <h2 className="font-serif text-2xl text-[#24302d] [letter-spacing:0]">{title}</h2>
      </div>
      <p className="mt-2 text-sm leading-6 text-[#52615d]">{children}</p>
    </article>
  );
}

function Statement({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-md border border-[#c98a4b]/35 bg-[#fff9ed]/80 p-3.5">
      <p className="font-serif text-xl leading-snug text-[#24302d] [letter-spacing:0] lg:text-2xl">
        {children}
      </p>
    </div>
  );
}

function SmallCard({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-md border border-[#24302d]/12 bg-white/65 p-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b8812c]">
        {title}
      </p>
      <p className="mt-3 text-sm leading-6 text-[#52615d]">{text}</p>
    </article>
  );
}

function MiniStat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-md border border-[#24302d]/12 bg-white/65 p-3.5">
      <p className="font-serif text-2xl text-[#24302d] [letter-spacing:0] lg:text-3xl">{value}</p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#52615d]">
        {label}
      </p>
    </div>
  );
}

function DishCard({ dish }: { dish: (typeof dishExamples)[number] }) {
  return (
    <article className="overflow-hidden rounded-md border border-[#24302d]/12 bg-white/65">
      <img src={dish.image} alt={dish.name} className="h-36 w-full object-cover" />
      <div className="p-4">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#b8812c]">
          {dish.group}
        </p>
        <h2 className="mt-2 font-serif text-2xl leading-tight text-[#24302d] [letter-spacing:0]">
          {dish.name}
        </h2>
        <p className="mt-3 text-xs leading-5 text-[#52615d]">{dish.text}</p>
        <div className="mt-4 grid gap-2">
          <Badge>{dish.origin}</Badge>
          <Badge>{dish.technique}</Badge>
        </div>
      </div>
    </article>
  );
}

function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex min-h-8 items-center rounded-md border border-[#24302d]/10 bg-white/70 px-2.5 py-1 text-xs leading-4 text-[#52615d]">
      {children}
    </span>
  );
}

function uniqueDishes(dishes: typeof allDishes) {
  const seen = new Set<string>();

  return dishes.filter((dish) => {
    if (seen.has(dish.id)) return false;
    seen.add(dish.id);
    return true;
  });
}
