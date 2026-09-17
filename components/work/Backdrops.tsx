/**
 * Line-drawn context silhouettes that sit behind each project's device.
 * They stand in for photography, and stay in the paper palette so the
 * section never breaks the monochrome discipline.
 */

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinejoin: "round" as const,
};

export function TempleBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className={className} preserveAspectRatio="xMidYMax slice">
      <g {...common}>
        {/* stepped shikhara */}
        <path d="M160 18l14 26h-28z" />
        <path d="M146 44h28l8 20h-44z" />
        <path d="M138 64h44l9 22h-62z" />
        <path d="M129 86h62l10 26h-82z" />
        <path d="M119 112h82v66h-82z" />
        <path d="M150 140h20v38h-20z" />
        <path d="M160 6v12M154 12h12" />
        {/* flanking towers */}
        <path d="M74 96l10 18H64z" />
        <path d="M64 114h40v64H64z" />
        <path d="M236 96l10 18h-20z" />
        <path d="M226 114h40v64h-40z" />
        {/* base platform */}
        <path d="M40 178h240M28 188h264" />
        {/* pillars */}
        <path d="M128 126v52M192 126v52" />
      </g>
    </svg>
  );
}

export function IndiaBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className={className} preserveAspectRatio="xMidYMid slice">
      <g {...common} strokeWidth={1.6}>
        <path d="M128 24l16 8 18-4 12 10 16 2 6 12-8 12 10 10-4 14 8 10-6 12-14 4-6 14-10 18-8 22-10 16-8-20-12-14-14-18-16-16-10-18 4-14-8-12 6-12 14-6 8-14 16-6z" />
        {/* latitude / longitude construction lines */}
        <path d="M60 70h200M60 110h200M60 150h200" strokeDasharray="2 5" opacity="0.5" />
        <path d="M110 20v170M160 20v170M210 20v170" strokeDasharray="2 5" opacity="0.5" />
      </g>
    </svg>
  );
}

export function ContainerBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 200" aria-hidden="true" className={className} preserveAspectRatio="xMidYMax slice">
      <g {...common}>
        {/* stacked containers */}
        <path d="M20 150h76v30H20zM20 120h76v30H20zM20 90h76v30H20z" />
        <path d="M110 150h76v30h-76zM110 120h76v30h-76z" />
        <path d="M200 150h76v30h-76zM200 120h76v30h-76zM200 90h76v30h-76zM200 60h76v30h-76z" />
        {/* corrugation */}
        <path
          d="M30 92v26M42 92v26M54 92v26M66 92v26M78 92v26M120 122v26M132 122v26M144 122v26M156 122v26M210 62v26M222 62v26M234 62v26M246 62v26"
          opacity="0.5"
        />
        {/* gantry crane */}
        <path d="M18 40h284M40 40v140M280 40v140M150 40v-22h60v22" />
        <path d="M180 18v-8" />
        <path d="M0 182h320" />
      </g>
    </svg>
  );
}
