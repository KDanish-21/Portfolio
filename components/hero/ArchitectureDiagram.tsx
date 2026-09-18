import { diagramFlow, diagramFooter, diagramPrinciples } from "@/lib/content";

/* Isometric geometry for the central platform ------------------------------ */
const CX = 320;
const HALF_W = 92;
const HALF_H = 46;
const DEPTH = 18;

/** Stop a connector short of its node so the line never runs into the icon. */
function endpoint(from: [number, number], to: [number, number], gap: number) {
  const dx = to[0] - from[0];
  const dy = to[1] - from[1];
  const length = Math.hypot(dx, dy) || 1;
  const t = (length - gap) / length;
  return `${(from[0] + dx * t).toFixed(1)} ${(from[1] + dy * t).toFixed(1)}`;
}

function slab(cy: number, key: string, fill: string) {
  const top = `${CX},${cy - HALF_H} ${CX + HALF_W},${cy} ${CX},${cy + HALF_H} ${CX - HALF_W},${cy}`;
  const left = `${CX - HALF_W},${cy} ${CX},${cy + HALF_H} ${CX},${cy + HALF_H + DEPTH} ${CX - HALF_W},${cy + DEPTH}`;
  const right = `${CX + HALF_W},${cy} ${CX},${cy + HALF_H} ${CX},${cy + HALF_H + DEPTH} ${CX + HALF_W},${cy + DEPTH}`;
  return (
    <g key={key}>
      <polygon points={left} fill="var(--color-paper-3)" stroke="currentColor" strokeWidth="0.75" />
      <polygon points={right} fill="var(--color-paper-2)" stroke="currentColor" strokeWidth="0.75" />
      <polygon points={top} fill={fill} stroke="currentColor" strokeWidth="0.75" />
    </g>
  );
}

/* Line-drawn node icons ---------------------------------------------------- */
const icons: Record<string, React.ReactNode> = {
  laptop: (
    <>
      <rect x="-14" y="-10" width="28" height="18" rx="1" />
      <path d="M-19 8h38l-3 4h-32z" />
    </>
  ),
  phone: (
    <>
      <rect x="-8" y="-13" width="16" height="26" rx="2" />
      <path d="M-3 -10h6" />
      <circle cx="0" cy="9.5" r="1.1" />
    </>
  ),
  people: (
    <>
      <circle cx="-7" cy="-6" r="4.5" />
      <path d="M-15 8c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <circle cx="8" cy="-4" r="3.6" />
      <path d="M2 8c0-3.4 2.7-6.2 6-6.2s6 2.8 6 6.2" />
    </>
  ),
  database: (
    <>
      <ellipse cx="0" cy="-9" rx="12" ry="4.5" />
      <path d="M-12 -9v18c0 2.5 5.4 4.5 12 4.5s12-2 12-4.5V-9" />
      <path d="M-12 0c0 2.5 5.4 4.5 12 4.5S12 2.5 12 0" />
    </>
  ),
  cloud: (
    <>
      <path d="M-13 7a6 6 0 0 1 1.2-11.9A9 9 0 0 1 6 -6.5a5.5 5.5 0 0 1 5.4 5.6A5.2 5.2 0 0 1 10 7z" />
    </>
  ),
  chart: (
    <>
      <path d="M-13 10h26" />
      <rect x="-11" y="-1" width="6" height="11" />
      <rect x="-2" y="-8" width="6" height="18" />
      <rect x="7" y="-13" width="6" height="23" />
    </>
  ),
  cube: (
    <>
      <path d="M0 -13 12 -6.5v13L0 13l-12-6.5v-13z" />
      <path d="M0 -13v13M0 0l12-6.5M0 0l-12-6.5" />
    </>
  ),
};

type Node = {
  id: string;
  icon: keyof typeof icons;
  x: number;
  y: number;
  label: string;
  sub?: string;
  anchor: "start" | "middle" | "end";
  labelDx: number;
  labelDy: number;
  /** Where the connector meets the central platform. */
  from: [number, number];
};

const nodes: Node[] = [
  {
    id: "web",
    icon: "laptop",
    x: 232,
    y: 62,
    label: "Web Apps",
    sub: "(React / Next.js)",
    anchor: "start",
    labelDx: 26,
    labelDy: -2,
    from: [286, 168],
  },
  {
    id: "mobile",
    icon: "phone",
    x: 436,
    y: 62,
    label: "Mobile Apps",
    sub: "(Flutter)",
    anchor: "start",
    labelDx: 20,
    labelDy: -2,
    from: [354, 168],
  },
  {
    id: "frontend",
    icon: "people",
    x: 92,
    y: 152,
    label: "Frontend",
    sub: "UI/UX",
    anchor: "middle",
    labelDx: 0,
    labelDy: 30,
    from: [236, 228],
  },
  {
    id: "api",
    icon: "database",
    x: 86,
    y: 266,
    label: "APIs",
    sub: "(FastAPI / DRF)",
    anchor: "middle",
    labelDx: 0,
    labelDy: 34,
    from: [234, 276],
  },
  {
    id: "integrations",
    icon: "cloud",
    x: 552,
    y: 152,
    label: "External",
    sub: "Integrations",
    anchor: "middle",
    labelDx: 0,
    labelDy: 30,
    from: [404, 228],
  },
  {
    id: "analytics",
    icon: "chart",
    x: 554,
    y: 266,
    label: "Analytics",
    sub: "(Power BI)",
    anchor: "middle",
    labelDx: 0,
    labelDy: 34,
    from: [406, 276],
  },
  {
    id: "db",
    icon: "database",
    x: 188,
    y: 390,
    label: "Database",
    sub: "(MySQL / PostgreSQL)",
    anchor: "middle",
    labelDx: 0,
    labelDy: 36,
    from: [276, 336],
  },
  {
    id: "deploy",
    icon: "cube",
    x: 454,
    y: 390,
    label: "Deployment",
    sub: "(Docker / AWS)",
    anchor: "middle",
    labelDx: 0,
    labelDy: 36,
    from: [364, 336],
  },
];

export default function ArchitectureDiagram() {
  return (
    <div className="w-full text-ink-2">
      <div className="relative">
      <svg
        viewBox="0 0 640 480"
        className="h-auto w-full"
        role="img"
        aria-label="System architecture diagram: an ERPNext and Frappe core connected to web apps, mobile apps, frontend, APIs, databases, deployment, external integrations and analytics."
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="7"
            markerHeight="7"
            refX="5.4"
            refY="2.6"
            orient="auto"
          >
            <path d="M0 0l5.2 2.6L0 5.2" fill="none" stroke="currentColor" strokeWidth="0.7" />
          </marker>
          <pattern id="diagram-grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M32 0H0v32" fill="none" stroke="var(--color-grid)" strokeWidth="0.5" />
          </pattern>
        </defs>

        <rect x="0" y="0" width="640" height="480" fill="url(#diagram-grid)" opacity="0.55" />

        {/* Construction boundary */}
        <rect
          x="14"
          y="14"
          width="612"
          height="452"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
          strokeDasharray="3 4"
          opacity="0.45"
        />

        {/* Corner crosshairs and edge coordinate ticks */}
        <g stroke="currentColor" strokeWidth="0.6" opacity="0.5">
          {[
            [14, 14],
            [626, 14],
            [14, 466],
            [626, 466],
          ].map(([cx, cy]) => (
            <g key={`${cx}-${cy}`}>
              <path d={`M${cx - 5} ${cy}h10M${cx} ${cy - 5}v10`} />
            </g>
          ))}
          {Array.from({ length: 13 }).map((_, i) => {
            const x = 14 + i * 51;
            return <path key={`t${i}`} d={`M${x} 14v${i % 4 === 0 ? 5 : 3}`} />;
          })}
          {Array.from({ length: 10 }).map((_, i) => {
            const y = 14 + i * 50;
            return <path key={`l${i}`} d={`M14 ${y}h${i % 4 === 0 ? 5 : 3}`} />;
          })}
        </g>

        {/* Overall dimension line */}
        <g stroke="currentColor" strokeWidth="0.6" opacity="0.55">
          <path d="M44 32h236M360 32h236" />
          <path d="M44 28v8M596 28v8" />
          <path d="M48 32l5-2.5v5zM592 32l-5-2.5v5z" fill="currentColor" stroke="none" />
        </g>
        <text
          x="320"
          y="35"
          textAnchor="middle"
          className="fill-olive font-mono"
          fontSize="7"
          letterSpacing="0.18em"
        >
          SYSTEM BOUNDARY
        </text>

        {/* Connectors */}
        <g opacity="0.75">
          {nodes.map((node, i) => (
            <path
              key={node.id}
              data-draw
              style={{ "--reveal-delay": `${260 + i * 70}ms` } as React.CSSProperties}
              d={`M${node.from[0]} ${node.from[1]} L${endpoint(node.from, [node.x, node.y], 24)}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              markerEnd="url(#arrowhead)"
            />
          ))}
        </g>

        {/* Central platform */}
        <g data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
          {slab(304, "s3", "var(--color-paper-3)")}
          {slab(272, "s2", "var(--color-paper-2)")}
          {slab(240, "s1", "var(--color-paper)")}

          <g transform={`translate(${CX} 186)`}>
            <rect
              x="-58"
              y="-32"
              width="116"
              height="64"
              fill="#ffffff"
              stroke="currentColor"
              strokeWidth="0.9"
            />
            <text
              textAnchor="middle"
              className="fill-ink font-display"
              fontSize="14"
              fontWeight="700"
              letterSpacing="-0.02em"
            >
              <tspan x="0" y="-12">
                ERPNext
              </tspan>
              <tspan x="0" y="5" fontSize="10" className="fill-olive">
                /
              </tspan>
              <tspan x="0" y="20">
                Frappe
              </tspan>
            </text>
          </g>
        </g>

        {/* Nodes */}
        <g>
          {nodes.map((node, i) => (
            <g
              key={node.id}
              data-reveal
              style={{ "--reveal-delay": `${420 + i * 70}ms` } as React.CSSProperties}
            >
              <text
                x={node.x}
                y={node.y - 21}
                textAnchor="middle"
                className="fill-olive font-mono"
                fontSize="7"
                letterSpacing="0.12em"
              >
                {String(i + 1).padStart(2, "0")}
              </text>

              <g
                transform={`translate(${node.x} ${node.y})`}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.9"
                strokeLinejoin="round"
              >
                {icons[node.icon]}
              </g>
              <text
                x={node.x + node.labelDx}
                y={node.y + node.labelDy}
                textAnchor={node.anchor}
                className="fill-ink font-mono"
                fontSize="8.5"
                letterSpacing="0.04em"
              >
                <tspan x={node.x + node.labelDx}>{node.label}</tspan>
                {node.sub && (
                  <tspan x={node.x + node.labelDx} dy="11" className="fill-olive" fontSize="7.5">
                    {node.sub}
                  </tspan>
                )}
              </text>
            </g>
          ))}
        </g>

        {/* Corner annotations */}
        <g className="fill-olive font-mono" fontSize="7.5" letterSpacing="0.14em">
          {diagramFlow.map((word, i) => (
            <text key={word} x="30" y={44 + i * 12}>
              {i === 0 ? "↑" : "→"} {word.toUpperCase()}
            </text>
          ))}
          {diagramPrinciples.map((word, i) => (
            <text key={word} x="610" y={44 + i * 12} textAnchor="end">
              {word}
            </text>
          ))}
        </g>
      </svg>

        {/* sits in the diagram's empty lower-right corner, clear of the rule */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-1 right-2 font-hand text-base leading-[1.15] text-ink-2 sm:text-lg lg:text-xl"
        >
          More
          <br />
          than just
          <br />
          code.
        </span>
      </div>

      {/* Drawing title block — the strongest signal that this is a document */}
      <div className="mt-3 border border-hair text-ink-2 md:grid md:grid-cols-[auto_1fr_auto] md:items-stretch">
        <div className="border-b border-hair px-3 py-2 md:border-b-0 md:border-r">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-olive">Fig. 01</p>
          <p className="mt-0.5 whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.14em] text-ink">
            System Architecture
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-0.5 border-b border-hair px-3 py-2 md:justify-center md:border-b-0">
          {diagramFooter.map((item) => (
            <span key={item} className="mono-micro">
              {item}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 md:border-l md:border-hair">
          <div className="border-r border-hair px-3 py-2">
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-olive">Scale</p>
            <p className="mt-0.5 whitespace-nowrap font-mono text-[9px] tracking-[0.14em] text-ink">
              1 : 1
            </p>
          </div>
          <div className="px-3 py-2">
            <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-olive">Rev</p>
            <p className="mt-0.5 font-mono text-[9px] tracking-[0.14em] text-ink">2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
