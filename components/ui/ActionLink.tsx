type Props = {
  href: string;
  label: string;
  bracketed?: boolean;
  external?: boolean;
};

export default function ActionLink({ href, label, bracketed, external }: Props) {
  return (
    <a
      href={href}
      className="action-link"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {bracketed && <span aria-hidden="true">[</span>}
      <span>{label}</span>
      <span className="arrow" aria-hidden="true">
        →
      </span>
      {bracketed && <span aria-hidden="true">]</span>}
    </a>
  );
}
