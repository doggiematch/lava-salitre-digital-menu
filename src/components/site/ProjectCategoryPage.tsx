import { Link } from "@tanstack/react-router";
import { SectionTitle } from "@/components/site/SectionTitle";
import { ProjectSections, type ProjectSectionId } from "@/routes/conocenos";

type ProjectCategoryPageProps = {
  activeSection: ProjectSectionId;
  title: string;
  subtitle: string;
};

export function ProjectCategoryPage({ activeSection, title, subtitle }: ProjectCategoryPageProps) {
  return (
    <div className="paper">
      <section className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <Link
          to="/proyecto"
          className="text-[10px] uppercase tracking-[0.35em] text-accent transition-colors hover:text-foreground"
        >
          Proyecto
        </Link>
        <div className="mt-6">
          <SectionTitle eyebrow="Proyecto" title={title} subtitle={subtitle} />
        </div>
      </section>
      <ProjectSections activeSection={activeSection} />
    </div>
  );
}
