export default function MountainSilhouette({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 220 120"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="0.9"
      strokeLinejoin="round"
    >
      <path d="M0 104l38-52 22 28 26-40 30 46 24-30 34 48z" />
      <path d="M86 40l-9 13 9 12 10-12z" />
      <path d="M140 46l-7 9 7 9 7-9z" />
      {/* contour lines */}
      <path d="M12 92h36M56 80h40M104 88h52M150 76h34" strokeDasharray="2 4" opacity="0.55" />
      <path d="M0 104h220" />
      {/* survey marks */}
      <path d="M38 52v-8M38 44h6" opacity="0.7" />
      <circle cx="116" cy="6" r="2.2" opacity="0.7" />
    </svg>
  );
}
