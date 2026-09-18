"use client";

import { useEffect, useState } from "react";
import { meta, nav } from "@/lib/content";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <div className="sticky top-0 z-50 flex h-14 items-center justify-between border-b border-hair bg-paper/95 backdrop-blur-sm px-5 lg:hidden">
        {/* the metadata bar below already carries the edition line */}
        <a href="#index" className="flex items-center gap-2.5" aria-label="Top of page">
          <span className="grid h-7 w-7 place-items-center bg-dark text-paper font-display text-[11px] font-extrabold">
            DK
          </span>
          <span className="font-display text-[11px] font-bold uppercase tracking-[0.06em]">
            {meta.name}
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-index"
          className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-2"
        >
          {open ? "Close" : "Index"}
          <span className="flex h-3 w-4 flex-col justify-between" aria-hidden="true">
            <span className={`h-px w-full bg-ink transition-transform duration-300 ${open ? "translate-y-[5.5px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-ink transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-full bg-ink transition-transform duration-300 ${open ? "-translate-y-[5.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      <div
        id="mobile-index"
        hidden={!open}
        className="fixed inset-0 top-14 z-40 bg-paper lg:hidden"
      >
        <nav aria-label="Section index" className="px-5 pt-4">
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-b border-hair">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="font-mono text-[10px] tracking-[0.1em] text-copper-ink">
                    {item.index}
                  </span>
                  <span className="font-display text-xl font-extrabold uppercase tracking-display">
                    {item.label}
                  </span>
                  <span className="ml-auto font-mono text-[10px] text-olive">
                    {item.sublabel}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex gap-4">
            {meta.mantra.map((word) => (
              <span key={word} className="mono-micro">
                {word}
              </span>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
