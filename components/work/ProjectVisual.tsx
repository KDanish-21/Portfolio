import Image from "next/image";
import type { FeaturedProject } from "@/lib/content";

/**
 * Each device is a transparent cutout lifted from the supplied render, so it
 * sits directly on the paper rather than inside a dark plate. Sizes are tuned
 * so visual weight runs 01 > 03 > 02; the variation only applies from `lg` up,
 * since on mobile each device simply gets the column.
 */
const frames: Record<string, { bleed: string; annotation: string }> = {
  // Largest; leans past the right-hand column rule.
  shastriji: {
    bleed: "mx-auto w-[72%] lg:mr-0 lg:translate-x-6",
    annotation: "lg:bottom-14 lg:left-8 lg:text-left",
  },
  // Smallest; sits lower and stays fully contained.
  yojanaai: {
    bleed: "mx-auto w-[64%] lg:w-[61%] lg:translate-y-8",
    annotation: "lg:right-8 lg:top-0 lg:text-right",
  },
  // Landscape, so it needs the full column to outweigh 02.
  "icd-container": {
    bleed: "mx-auto w-full lg:mx-0 lg:translate-y-10",
    annotation: "lg:right-8 lg:top-0 lg:text-right",
  },
};

export default function ProjectVisual({
  project,
  revealDelay = 0,
}: {
  project: FeaturedProject;
  revealDelay?: number;
}) {
  const { slug, title, annotation, image, plate } = project;
  const frame = frames[slug] ?? frames.yojanaai;
  const [lead, ...rest] = annotation;
  const leadIsMetric = lead.includes("%");

  return (
    <div className="relative mt-6 flex flex-1 flex-col justify-end border-t border-hair px-6 pb-6 pt-10 lg:px-8">
      <div
        data-reveal
        style={{ "--reveal-delay": `${revealDelay + 220}ms` } as React.CSSProperties}
        className={`mb-5 lg:absolute lg:z-20 lg:mb-0 ${frame.annotation}`}
      >
        {leadIsMetric ? (
          <>
            <span className="display-condensed block text-2xl font-extrabold leading-none tracking-display text-copper-ink">
              {lead}
            </span>
            {rest.map((line) => (
              <span
                key={line}
                className="block font-mono text-[10px] uppercase leading-[1.9] tracking-[0.3em] text-ink-2"
              >
                {line}
              </span>
            ))}
          </>
        ) : (
          annotation.map((line) => (
            <span
              key={line}
              className="block font-mono text-[10px] uppercase leading-[1.9] tracking-[0.3em] text-ink-2"
            >
              {line}
            </span>
          ))
        )}
      </div>
      <div className={`relative ${frame.bleed}`}>
        <figure>
          {/* hover lift and the reveal clip live on separate elements so neither
              overwrites the positioning transform on the wrapper above */}
          {image && (
            <span
              data-hover-lift
              className="block drop-shadow-[0_10px_18px_rgba(23,26,26,0.16)]"
            >
              <Image
                data-reveal-image
                style={{ "--reveal-delay": `${revealDelay}ms` } as React.CSSProperties}
                src={image}
                alt={`${title} — product interface`}
                sizes="(max-width: 1024px) 70vw, 26vw"
                loading="lazy"
                className="h-auto w-full"
              />
            </span>
          )}

          {plate && (
            <figcaption className="mt-4 flex gap-2.5">
              <span
                aria-hidden="true"
                data-reveal-rule
                style={{ "--reveal-delay": `${revealDelay + 500}ms` } as React.CSSProperties}
                className="mt-[5px] h-px w-4 shrink-0 origin-left bg-copper"
              />
              <span>
                <span className="block font-mono text-[8px] uppercase leading-[1.6] tracking-[0.28em] text-ink-2">
                  {plate.index}
                </span>
                <span className="block font-mono text-[8px] uppercase leading-[1.6] tracking-[0.22em] text-olive">
                  {plate.label}
                </span>
              </span>
            </figcaption>
          )}
        </figure>
      </div>

    </div>
  );
}
