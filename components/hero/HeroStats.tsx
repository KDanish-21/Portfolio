import { stats } from "@/lib/content";

export default function HeroStats() {
  // Four across only once the column is wide enough for the longest label.
  return (
    <dl className="mt-10 grid grid-cols-2 border-t border-hair xl:grid-cols-4">
      {stats.map((stat, i) => (
        <div
          key={stat.label}
          data-reveal
          style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
          className="border-b border-hair py-4 pr-4 xl:border-b-0 xl:border-l xl:pl-5 xl:first:border-l-0 xl:first:pl-0"
        >
          <dt className="sr-only">{stat.label}</dt>
          <dd>
            <span className="block font-display text-stat font-extrabold leading-none tracking-display">
              {stat.value}
            </span>
            <span className="mono-micro mt-1.5 block">{stat.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
