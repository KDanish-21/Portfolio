/**
 * Abstract technical marks rather than brand logos — keeps the section
 * monochrome and consistent instead of scattering vendor colours across it.
 */
const shapes: Record<string, React.ReactNode> = {
  square: <rect x="2.5" y="2.5" width="9" height="9" />,
  circle: <circle cx="7" cy="7" r="4.6" />,
  triangle: <path d="M7 2.2l5 9.6H2z" />,
  diamond: <path d="M7 2l5 5-5 5-5-5z" />,
  hexagon: <path d="M7 2l4.3 2.5v5L7 12 2.7 9.5v-5z" />,
  ring: (
    <>
      <circle cx="7" cy="7" r="4.6" />
      <circle cx="7" cy="7" r="1.6" />
    </>
  ),
  bars: (
    <>
      <path d="M3 11V6M7 11V3M11 11V7.5" />
    </>
  ),
  cross: <path d="M7 2v10M2 7h10" />,
  layers: (
    <>
      <path d="M7 2.4l4.6 2.6L7 7.6 2.4 5z" />
      <path d="M2.4 8.6L7 11.2l4.6-2.6" />
    </>
  ),
  arrowed: <path d="M2.5 7h9M8.5 4l3 3-3 3" />,
};

const assignment: Record<string, keyof typeof shapes> = {
  python: "ring",
  javascript: "square",
  typescript: "diamond",
  cpp: "cross",
  django: "hexagon",
  drf: "arrowed",
  fastapi: "triangle",
  frappe: "layers",
  flask: "circle",
  react: "ring",
  nextjs: "triangle",
  flutter: "diamond",
  html: "square",
  tailwind: "arrowed",
  mysql: "layers",
  postgres: "circle",
  mariadb: "layers",
  sqlite: "square",
  git: "cross",
  docker: "layers",
  aws: "hexagon",
  powerbi: "bars",
  dax: "bars",
  agile: "arrowed",
  jira: "diamond",
  linux: "circle",
  figma: "hexagon",
};

export default function SkillGlyph({ icon }: { icon: string }) {
  const shape = shapes[assignment[icon] ?? "square"];
  return (
    <svg
      viewBox="0 0 14 14"
      aria-hidden="true"
      className="h-[13px] w-[13px] shrink-0 text-olive"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    >
      {shape}
    </svg>
  );
}
