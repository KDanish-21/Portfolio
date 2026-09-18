import { archiveProjects } from "@/lib/content";

export default function ArchiveList() {
  return (
    <div className="border-t border-hair px-5 py-8 md:px-gutter">
      <p className="mono-micro mb-4">Archive / Additional Builds</p>

      <ul>
        {archiveProjects.map((project, i) => (
          <li
            key={project.title}
            data-reveal
            style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
          >
            <div className="group relative flex flex-wrap items-baseline gap-x-6 gap-y-1 border-b border-hair py-5">
              <span
                aria-hidden="true"
                className="absolute bottom-[-1px] left-0 h-px w-0 bg-copper transition-[width] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:w-full"
              />
              <span className="display-condensed w-[4.5rem] shrink-0 text-index font-extrabold leading-none tracking-mega text-copper-ink">
                {project.index}
              </span>
              <span className="display-condensed text-lg font-extrabold uppercase leading-none tracking-display">
                {project.title}
              </span>
              <span className="text-[12.5px] text-ink-2">{project.descriptor}</span>
              <span className="mono-micro ml-auto">{project.stack}</span>
            </div>
          </li>
        ))}

        <li>
          <div className="flex items-center gap-3 py-3.5">
            <span className="font-mono text-[10px] text-copper">+</span>
            <span className="mono-label">More on GitHub</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
