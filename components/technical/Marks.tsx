/**
 * Blueprint furniture. These are meant to sit just at the edge of
 * perception — the reader notices them only on a second pass.
 */

export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
    >
      <circle cx="8" cy="8" r="3.25" />
      <path d="M8 0v4.75M8 11.25V16M0 8h4.75M11.25 8H16" />
    </svg>
  );
}

export function PlusMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 12 12"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
    >
      <path d="M6 0v12M0 6h12" />
    </svg>
  );
}

export function CornerMarks({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 ${className}`}>
      <span className="absolute left-0 top-0 h-2 w-2 border-l border-t border-hair" />
      <span className="absolute right-0 top-0 h-2 w-2 border-r border-t border-hair" />
      <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-hair" />
      <span className="absolute bottom-0 right-0 h-2 w-2 border-b border-r border-hair" />
    </div>
  );
}

/** Ruler ticks — used along section edges to reinforce the drawing metaphor. */
export function TickRule({ className = "", count = 40 }: { className?: string; count?: number }) {
  return (
    <div aria-hidden="true" className={`flex items-end gap-0 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="flex-1 bg-hair"
          style={{ height: i % 5 === 0 ? "6px" : "3px" }}
        />
      ))}
    </div>
  );
}

export function ArrowGlyph({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 8"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.75"
    >
      <path d="M0 4h22M18 1l4 3-4 3" />
    </svg>
  );
}
