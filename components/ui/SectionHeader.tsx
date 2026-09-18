import ActionLink from "./ActionLink";

type Props = {
  index?: string;
  title: string;
  subtitle: string;
  note?: string[];
  status?: string;
  actionLabel?: string;
  actionHref?: string;
};

export default function SectionHeader({
  index,
  title,
  subtitle,
  note,
  status,
  actionLabel,
  actionHref = "#",
}: Props) {
  return (
    <div className="pt-5">
      {/* the rule draws itself open as the section arrives */}
      <span data-reveal-rule className="block h-px w-full origin-left bg-hair" />

      <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div data-reveal>
          {index && (
            <p className="mb-2 font-mono text-[9px] uppercase tracking-[0.24em] text-olive">
              {index}
            </p>
          )}
          <h2
            data-reveal-line
            style={{ "--reveal-delay": "60ms" } as React.CSSProperties}
            className="block overflow-hidden font-display text-section font-extrabold uppercase leading-none tracking-display"
          >
            <span>
              {title}
              <span className="ml-1.5 text-copper">.</span>
            </span>
          </h2>
          <p className="mono-label mt-2">{subtitle}</p>
        </div>

        {note && (
          <div
            data-reveal
            style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
            className="hidden max-w-[30rem] border-l border-hair pl-4 lg:block"
          >
            {note.map((line) => (
              <p
                key={line}
                className="font-mono text-[10px] uppercase leading-[1.75] tracking-[0.15em] text-olive"
              >
                {line}
              </p>
            ))}
          </div>
        )}

        <div
          data-reveal
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
          className="flex flex-col items-start gap-2 md:items-end"
        >
          {actionLabel && <ActionLink href={actionHref} label={actionLabel} bracketed />}
          {status && (
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-olive">
              {status}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
