import SkillGlyph from "./SkillGlyph";
import { ArrowGlyph } from "@/components/technical/Marks";
import SectionHeader from "@/components/ui/SectionHeader";
import { learning, skillGroups } from "@/lib/content";

function LearningPanel() {
  return (
    <aside
      data-reveal
      style={{ "--reveal-delay": "240ms" } as React.CSSProperties}
      className="flex flex-col justify-between border-hair px-5 py-7 lg:w-[186px] lg:shrink-0 lg:border-l"
    >
      <div>
        {learning.heading.map((line, i) => (
          <p
            key={line}
            className={
              i === 0
                ? "font-mono text-[10px] tracking-[0.16em] text-olive"
                : "font-mono text-[10px] tracking-[0.16em] text-ink"
            }
          >
            {line}
          </p>
        ))}

        <ul className="mt-4 space-y-1.5">
          {learning.items.map((item) => (
            <li key={item} className="flex gap-1.5 font-mono text-[10px] text-ink-2">
              <span className="text-copper">&gt;</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="mt-6 h-10 w-10 text-rule"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      >
        <circle cx="24" cy="24" r="17" />
        <ellipse cx="24" cy="24" rx="7.5" ry="17" />
        <path d="M7 24h34M10.5 15h27M10.5 33h27" />
      </svg>
    </aside>
  );
}

export default function Systems() {
  return (
    <section id="systems" className="scroll-mt-16 border-b border-hair">
      <div className="px-5 pt-8 md:px-gutter">
        <SectionHeader
          title="Systems & Skills"
          subtitle="The tools behind the solutions."
          note={["A modern tech stack for modern problems."]}
          actionLabel="Explore details"
          actionHref="#experience"
        />
      </div>

      <div className="mt-8 flex flex-col border-t border-hair lg:flex-row">
        <div className="grid flex-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {skillGroups.map((group, i) => (
            <div
              key={group.label}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="relative border-b border-l border-hair px-4 pb-6 pt-7 first:border-l-0 sm:border-b-0 lg:border-b-0"
            >
              {/* tab header breaking the top edge */}
              <span className="absolute -top-[6px] left-4 bg-paper px-1.5 font-mono text-[8.5px] uppercase tracking-[0.16em] text-ink">
                · {group.label} ·
              </span>

              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-2">
                    <SkillGlyph icon={item.icon} />
                    <span className="text-[12px] leading-tight text-ink-2">{item.name}</span>
                  </li>
                ))}
              </ul>

              {i < skillGroups.length - 1 && (
                <ArrowGlyph className="absolute -right-[11px] top-1/2 hidden h-2 w-5 -translate-y-1/2 bg-paper px-0.5 text-rule lg:block" />
              )}
            </div>
          ))}
        </div>

        <LearningPanel />
      </div>
    </section>
  );
}
