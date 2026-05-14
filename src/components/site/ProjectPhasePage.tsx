import type { ReactNode } from "react";

type ProjectPhasePageProps = {
  phase: string;
  title: string;
  intro?: string;
  children?: ReactNode;
};

export function ProjectPhasePage({ phase, title, intro, children }: ProjectPhasePageProps) {
  return (
    <div className="paper">
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-[10px] uppercase tracking-[0.35em] text-accent">{phase}</p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-6xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-7 max-w-3xl text-base leading-[1.8] text-muted-foreground md:text-lg">
            {intro}
          </p>
        )}
      </section>
      {children}
    </div>
  );
}
