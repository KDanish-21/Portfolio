import { meta } from "@/lib/content";

export default function MetaBar() {
  return (
    <div className="flex h-11 items-center justify-between gap-4 border-b border-hair px-5 md:px-gutter">
      <span className="mono-micro shrink-0">{meta.edition}</span>

      <span className="mono-micro hidden truncate text-center md:block">{meta.tagline}</span>

      <div className="flex shrink-0 items-center gap-4">
        {/* only shown where it fits without squeezing the tagline */}
        <span className="mono-micro hidden 2xl:block">{meta.document}</span>
        <span className="mono-micro hidden lg:block">{meta.coordinates}</span>
        <span
          aria-hidden="true"
          className="grid h-5 w-5 place-items-center rounded-full border border-hair text-[9px] text-ink-2"
        >
          ✕
        </span>
      </div>
    </div>
  );
}
