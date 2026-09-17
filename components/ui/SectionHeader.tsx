import ActionLink from "./ActionLink";

type Props = {
  title: string;
  subtitle: string;
  note?: string[];
  actionLabel?: string;
  actionHref?: string;
};

export default function SectionHeader({
  title,
  subtitle,
  note,
  actionLabel,
  actionHref = "#",
}: Props) {
  return (
    <div className="border-t border-hair pt-5">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div data-reveal>
          <h2 className="font-display text-section font-extrabold uppercase tracking-display leading-none">
            {title}
            <span className="ml-1.5 text-copper">.</span>
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

        {actionLabel && (
          <div data-reveal style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
            <ActionLink href={actionHref} label={actionLabel} bracketed />
          </div>
        )}
      </div>
    </div>
  );
}
