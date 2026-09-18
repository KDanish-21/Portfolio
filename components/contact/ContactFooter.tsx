import { contact, meta } from "@/lib/content";

const links = [
  { key: "email", label: contact.email, href: `mailto:${contact.email}`, glyph: "✉" },
  { key: "linkedin", label: contact.linkedin.label, href: contact.linkedin.href, glyph: "in" },
  { key: "github", label: contact.github.label, href: contact.github.href, glyph: "⌘" },
];

export default function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-16 bg-dark text-paper">
      <div className="grid gap-10 px-5 py-14 md:px-gutter lg:grid-cols-[210px_minmax(0,1fr)_auto] lg:gap-12 lg:py-16">
        {/* identity */}
        <div data-reveal>
          <span className="grid h-9 w-9 place-items-center bg-paper font-display text-sm font-extrabold text-dark">
            DK
          </span>
          <p className="mt-4 font-display text-sm font-bold uppercase tracking-[0.04em]">
            {meta.name}
          </p>
          <p className="mt-1 font-mono text-[10px] tracking-[0.1em] text-paper/50">
            {meta.shortTitle}
          </p>
        </div>

        {/* statement */}
        <div data-reveal style={{ "--reveal-delay": "100ms" } as React.CSSProperties}>
          <h2 className="font-display text-footer font-extrabold uppercase leading-[0.94] tracking-display">
            <span data-reveal-line className="block overflow-hidden">
              <span>{contact.headline[0]}</span>
            </span>
            <span
              data-reveal-line
              style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
              className="block overflow-hidden"
            >
              <span className="font-normal italic">
                That <span className="text-copper">Works.</span>
              </span>
            </span>
          </h2>

          <div className="mt-6 flex items-center gap-5">
            <p className="max-w-[34ch] font-mono text-[10px] leading-[1.7] tracking-[0.06em] text-paper/50">
              {contact.note}
            </p>
            <a
              href={`mailto:${contact.email}`}
              aria-label={`Email ${meta.name}`}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-hair-dark text-base transition-colors duration-300 hover:border-copper hover:text-copper"
            >
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* channels */}
        <ul
          data-reveal
          style={{ "--reveal-delay": "180ms" } as React.CSSProperties}
          className="space-y-3 lg:ml-auto lg:w-fit"
        >
          {links.map((link) => (
            <li key={link.key}>
              <a
                href={link.href}
                {...(link.key === "email"
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="group inline-flex items-center gap-3"
              >
                <span
                  aria-hidden="true"
                  className="grid h-6 w-6 shrink-0 place-items-center border border-hair-dark font-mono text-[9px] text-paper/60 transition-colors duration-300 group-hover:border-copper group-hover:text-copper"
                >
                  {link.glyph}
                </span>
                <span className="font-mono text-[11px] text-paper/75 transition-colors duration-300 group-hover:text-paper">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-3 border-t border-hair-dark px-5 py-5 md:flex-row md:items-center md:justify-between md:px-gutter">
        <p className="font-mono text-[9.5px] tracking-[0.12em] text-paper/45">{contact.rights}</p>
        <p className="font-mono text-[9.5px] tracking-[0.2em] text-paper/45">
          {contact.keywords.join("  /  ")}
        </p>
      </div>
    </footer>
  );
}
