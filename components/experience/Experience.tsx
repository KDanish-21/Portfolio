import MountainSilhouette from "./MountainSilhouette";
import { PlusMark } from "@/components/technical/Marks";
import SectionHeader from "@/components/ui/SectionHeader";
import TechTag from "@/components/ui/TechTag";
import { experience, experienceAnnotation } from "@/lib/content";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-b border-hair">
      <div className="px-5 pt-8 md:px-gutter">
        <SectionHeader
          title="Experience"
          subtitle="A journey of building, learning and solving."
          actionLabel="View full timeline"
          actionHref="#certifications"
        />
      </div>

      <div className="relative mt-8 border-t border-hair">
        {/* decorative horizon — "bigger systems ahead" */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 right-0 hidden w-[320px] flex-col items-end justify-end pb-6 pr-8 xl:flex"
        >
          <PlusMark className="mb-2 h-2.5 w-2.5 text-copper" />
          <div className="text-right">
            {experienceAnnotation.map((line) => (
              <span key={line} className="mono-micro block leading-[1.5]">
                {line}
              </span>
            ))}
          </div>
          <MountainSilhouette className="mt-4 h-auto w-full text-ink opacity-30" />
        </div>

        {experience.map((role) => (
          <div
            key={role.role}
            data-reveal
            className="grid gap-6 px-5 py-9 md:px-gutter lg:grid-cols-[150px_minmax(0,1fr)] xl:pr-[340px]"
          >
            <div className="lg:border-r lg:border-hair lg:pr-6">
              <p className="font-display text-[13px] font-bold tracking-[0.06em] text-ink">
                {role.start}
              </p>
              <span aria-hidden="true" className="my-1.5 block h-px w-4 bg-copper" />
              <p className="font-display text-[13px] font-bold tracking-[0.06em] text-ink">
                {role.end}
              </p>
            </div>

            <div>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <h3 className="font-display text-lg font-extrabold tracking-display">
                    {role.role}
                  </h3>
                  <p className="mt-1 text-[12.5px] text-ink-2">
                    {role.company} <span className="text-olive">·</span> {role.type}
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 lg:max-w-[70ch]">
                {role.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-[12.5px] leading-[1.7] text-ink-2">
                    <span aria-hidden="true" className="mt-[7px] h-[3px] w-[3px] shrink-0 bg-copper" />
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-1.5">
                <span className="mono-micro mr-1.5">Tech Stack:</span>
                {role.stack.map((item) => (
                  <TechTag key={item}>{item}</TechTag>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
