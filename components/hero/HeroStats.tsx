import { stats } from "@/lib/content";

/** Splits "500+" into { value: 500, suffix: "+" }; "∞" has no numeric part. */
function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return null;
  return { target: match[1], suffix: match[2] };
}

export default function HeroStats() {
  // Four across only once the column is wide enough for the longest label.
  return (
    <dl className="mt-10 grid grid-cols-2 border-t border-hair xl:grid-cols-4">
      {stats.map((stat, i) => {
        const numeric = parseStat(stat.value);
        return (
          <div
            key={stat.label}
            data-reveal
            style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
            className="border-b border-hair py-4 pr-4 xl:border-b-0 xl:border-l xl:pl-5 xl:first:border-l-0 xl:first:pl-0"
          >
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span
                {...(numeric
                  ? { "data-count-to": numeric.target, "data-count-suffix": numeric.suffix }
                  : {})}
                className="block font-display text-stat font-extrabold leading-none tracking-display tabular-nums"
              >
                {stat.value}
              </span>
              <span className="mono-micro mt-1.5 block">{stat.label}</span>
            </dd>
          </div>
        );
      })}
    </dl>
  );
}
