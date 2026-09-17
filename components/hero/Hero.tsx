import ArchitectureDiagram from "./ArchitectureDiagram";
import HeroStats from "./HeroStats";
import { Crosshair } from "@/components/technical/Marks";
import { heroAnnotation, meta } from "@/lib/content";

export default function Hero() {
  return (
    <section id="index" className="scroll-mt-16 border-b border-hair">
      <div className="grid lg:grid-cols-[minmax(0,46fr)_minmax(0,54fr)]">
        {/* ---- Left: the name lockup ------------------------------------ */}
        <div className="px-5 pb-10 pt-10 md:px-gutter lg:border-r lg:border-hair lg:pb-12 lg:pt-12">
          <div className="flex items-center gap-2">
            <span className="mono-label text-ink-2" aria-hidden="true">
              [
            </span>
            <span className="mono-label">Hello, I&rsquo;m</span>
          </div>

          <div className="mt-4 flex items-end gap-5">
            <h1 className="font-display text-mega font-extrabold uppercase leading-[0.84] tracking-mega">
              <span data-reveal-line className="block overflow-hidden">
                <span>Danish</span>
              </span>
              <span
                data-reveal-line
                className="block overflow-hidden"
                style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
              >
                <span>Khan</span>
              </span>
            </h1>

            <span
              aria-hidden="true"
              data-reveal
              style={{ "--reveal-delay": "560ms" } as React.CSSProperties}
              className="mb-2 hidden shrink-0 font-hand text-xl leading-[1.15] text-ink-2 sm:block lg:text-2xl"
            >
              {heroAnnotation.map((word) => (
                <span key={word} className="block">
                  {word}
                </span>
              ))}
            </span>
          </div>

          <div className="mt-7 border-t border-hair pt-5" data-reveal>
            <p className="font-display text-[11px] font-bold uppercase tracking-[0.01em] text-ink lg:text-[11.5px]">
              {meta.title}
            </p>
            <p className="mt-4 max-w-[52ch] text-[12.5px] leading-[1.8] text-ink-2">
              {meta.bio}
            </p>
          </div>

          <div
            className="mt-8 flex flex-wrap items-center gap-6"
            data-reveal
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-dark px-7 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-paper transition-colors duration-300 hover:bg-ink"
            >
              View My Work
              <span className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true">
                →
              </span>
            </a>

            <button
              type="button"
              className="group inline-flex items-center gap-3 text-left"
              aria-label="Watch intro video, 1 minute 12 seconds"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-hair transition-colors duration-300 group-hover:border-ink">
                <span className="ml-0.5 border-y-[5px] border-l-[8px] border-y-transparent border-l-ink" aria-hidden="true" />
              </span>
              <span>
                <span className="mono-label block text-ink">Watch Intro</span>
                <span className="mono-micro mt-0.5 block">( 01:12 )</span>
              </span>
            </button>
          </div>

          <HeroStats />
        </div>

        {/* ---- Right: the system diagram -------------------------------- */}
        <div className="relative flex flex-col justify-center px-5 pb-12 pt-6 md:px-8 lg:pt-10">
          <Crosshair className="absolute right-5 top-5 hidden h-3 w-3 text-rule lg:block" />
          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}
