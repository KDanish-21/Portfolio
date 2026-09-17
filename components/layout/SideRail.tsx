"use client";

import { useEffect, useState } from "react";
import { meta, nav } from "@/lib/content";

export default function SideRail() {
  const [active, setActive] = useState(nav[0].href.slice(1));

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    if (!sections.length || !("IntersectionObserver" in window)) return;

    // A thin band across the viewport middle decides which section is current.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const section of sections) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-rail flex-col border-r border-hair bg-paper lg:flex">
      <a
        href="#index"
        className="flex h-[74px] shrink-0 items-center justify-center bg-dark text-paper"
        aria-label="Danish Khan — top of page"
      >
        <span className="font-display text-lg font-extrabold tracking-[-0.04em]">DK</span>
      </a>

      <nav aria-label="Section index" className="relative flex-1 pt-9">
        <span
          aria-hidden="true"
          className="absolute bottom-6 left-[21px] top-12 w-px bg-hair"
        />
        <ul>
          {nav.map((item) => {
            const id = item.href.slice(1);
            const isActive = active === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className="group relative flex items-start gap-2.5 py-2.5 pl-3.5 pr-2"
                >
                  <span
                    aria-hidden="true"
                    className={`mt-[5px] h-[7px] w-[7px] shrink-0 rounded-full border transition-colors duration-500 ${
                      isActive
                        ? "border-copper bg-copper"
                        : "border-rule bg-paper group-hover:border-ink"
                    }`}
                  />
                  <span className="min-w-0">
                    <span
                      className={`block font-mono text-[9px] leading-none tracking-[0.1em] transition-colors duration-300 ${
                        isActive ? "text-copper" : "text-olive"
                      }`}
                    >
                      {item.index}
                    </span>
                    <span
                      className={`mt-1 block font-display text-[9.5px] font-bold uppercase leading-tight tracking-[0.04em] transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-ink-2 group-hover:text-ink"
                      }`}
                    >
                      {item.label}
                    </span>
                    <span className="mt-0.5 block font-mono text-[8.5px] leading-tight text-olive">
                      {item.sublabel}
                    </span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="shrink-0 pb-6 pl-[30px]">
        {meta.mantra.map((word) => (
          <p key={word} className="font-mono text-[8.5px] leading-[1.7] tracking-[0.16em] text-olive">
            {word}
          </p>
        ))}
        <span aria-hidden="true" className="mt-3 block h-px w-5 bg-copper" />
      </div>
    </aside>
  );
}
