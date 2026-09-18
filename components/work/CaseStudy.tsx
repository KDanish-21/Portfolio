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
  // Each column starts after the one before it, then assembles top to bottom.
  const base = position * 110;
  const at = (step: number) =>
    ({ "--reveal-delay": `${base + step}ms` }) as React.CSSProperties;

  return (
    <article className="group flex flex-col border-hair lg:border-l lg:first:border-l-0">
      {/* fixed height keeps all three visual panels starting on the same line */}
      <div className="px-6 pt-7 md:px-7 lg:min-h-[248px] lg:px-8">
        <div className="flex items-baseline gap-3" data-reveal style={at(0)}>
          <span className="display-condensed text-index font-extrabold leading-none tracking-mega text-copper-ink">
            {project.index}
          </span>
          <span className="mono-micro">• {project.category}</span>
        </div>

        <h3
          data-reveal-line
          style={at(90)}
          className="mt-3.5 block overflow-hidden font-display text-display font-extrabold uppercase leading-[0.95] tracking-display"
        >
          <span>{project.title}</span>
        </h3>

        <p className="mt-1.5 text-[13px] leading-snug text-ink-2" data-reveal style={at(170)}>
          {project.subtitle}
        </p>

        <div className="mt-3.5 flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span key={tag} data-reveal style={at(230 + i * 60)}>
              <TechTag>{tag}</TechTag>
            </span>
          ))}
        </div>

        <p
          className="mt-3.5 text-[12px] leading-[1.7] text-ink-2"
          data-reveal
          style={at(300)}
        >
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

      <ProjectVisual project={project} revealDelay={base + 360} />
    </article>
  );
}
