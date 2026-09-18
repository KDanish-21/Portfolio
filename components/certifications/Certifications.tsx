import SectionHeader from "@/components/ui/SectionHeader";
import { certifications, certificationsQuote } from "@/lib/content";

const wordmarks: Record<string, string> = {
  cisco: "CISCO",
  powerbi: "POWER BI",
  microsoft: "MICROSOFT",
};

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-16 border-b border-hair">
      <div className="px-5 pt-8 md:px-gutter">
        <SectionHeader
          index="Section / 05 — Credentials"
          status="Location / India"
          title="Certifications"
          subtitle="Learning never stops."
          actionLabel="View all certifications"
          actionHref="#contact"
        />
      </div>

      <div className="mt-8 border-t border-hair px-5 py-8 md:px-gutter">
        <p className="mono-micro mb-4 xl:hidden">Scroll for more →</p>

        <ul className="hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-1 xl:grid xl:grid-cols-6 xl:overflow-visible">
          {certifications.map((cert, i) => (
            <li
              key={cert.title}
              data-reveal
              style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              className="group relative w-[228px] shrink-0 snap-start border-l border-t border-hair p-4 xl:w-auto"
            >
              {/* rule expansion instead of a card hover — matches the archive list */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-[-1px] h-px w-0 bg-copper transition-[width] duration-500 ease-[cubic-bezier(0.22,0.61,0.36,1)] group-hover:w-full"
              />

              <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-olive">
                Cert / {String(i + 1).padStart(2, "0")}
              </p>

              <h3 className="display-condensed mt-2.5 text-[14px] font-extrabold uppercase leading-tight tracking-[-0.01em]">
                {cert.title}
              </h3>
              <p className="mono-micro mt-1.5">{cert.issuer}</p>
              <p className="mt-3 text-[11.5px] leading-[1.6] text-ink-2">{cert.description}</p>

              <div className="mt-5 flex items-center justify-between border-t border-hair pt-3">
                <span className="font-mono text-[8px] tracking-[0.2em] text-olive">
                  {wordmarks[cert.logo] ?? cert.logo.toUpperCase()}
                </span>
                {cert.href && (
                  <a
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-ink-2 transition-colors duration-300 hover:text-copper"
                  >
                    Verify →
                  </a>
                )}
              </div>
            </li>
          ))}

          <li
            data-reveal
            style={{ "--reveal-delay": "380ms" } as React.CSSProperties}
            className="flex w-[200px] shrink-0 snap-start flex-col justify-center border-l border-t border-hair p-4 xl:w-auto"
          >
            {certificationsQuote.map((line) => (
              <span
                key={line}
                className="font-mono text-[10px] uppercase leading-[1.7] tracking-[0.18em] text-ink-2"
              >
                {line}
              </span>
            ))}
            <span aria-hidden="true" className="mt-3 block h-px w-8 bg-copper" />
          </li>
        </ul>
      </div>
    </section>
  );
}
