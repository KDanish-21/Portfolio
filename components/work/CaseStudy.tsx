import ProjectVisual from "./ProjectVisual";
import TechTag from "@/components/ui/TechTag";
import type { FeaturedProject } from "@/lib/content";

export default function CaseStudy({
  project,
  position,
}: {
  project: FeaturedProject;
  position: number;
}) {
  return (
    <article
      data-reveal
      style={{ "--reveal-delay": `${position * 110}ms` } as React.CSSProperties}
      className="group flex flex-col border-hair lg:border-l lg:first:border-l-0"
    >
      {/* fixed height keeps all three visual panels starting on the same line */}
      <div className="px-5 pt-6 md:px-7 lg:min-h-[248px] lg:px-6">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-2xl font-extrabold leading-none tracking-mega text-copper/85">
            {project.index}
          </span>
          <span className="mono-micro">• {project.category}</span>
        </div>

        <h3 className="mt-3.5 font-display text-display font-extrabold uppercase leading-[0.95] tracking-display">
          {project.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-snug text-ink-2">{project.subtitle}</p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TechTag key={tag}>{tag}</TechTag>
          ))}
        </div>

        <p className="mt-3.5 text-[12px] leading-[1.7] text-ink-2">
          {project.description}
          {project.highlight && (
            <>
              {" "}
              <span className="text-ink underline decoration-copper decoration-1 underline-offset-[3px]">
                {project.highlight}
              </span>
            </>
          )}
        </p>
      </div>

      <ProjectVisual
        slug={project.slug}
        title={project.title}
        annotation={project.annotation}
        image={project.image}
      />
    </article>
  );
}
