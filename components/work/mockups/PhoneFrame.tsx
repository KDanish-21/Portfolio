export default function PhoneFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[9/17.5] w-full max-w-[206px] overflow-hidden rounded-[16px] border border-ink/30 bg-white shadow-[0_3px_18px_rgba(23,26,26,0.12)] ${className}`}
    >
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 z-10 h-[11px] w-[52px] -translate-x-1/2 rounded-b-[7px] bg-ink"
      />
      <div className="h-full w-full overflow-hidden">{children}</div>
    </div>
  );
}
