"use client";

import { useEffect } from "react";

/**
 * A single observer drives every reveal on the page, which lets all the
 * section components stay Server Components that only declare `data-reveal`.
 */
export default function RevealEngine() {
  useEffect(() => {
    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal],[data-reveal-line],[data-draw]",
      ),
    );

    // SVG strokes need their own length before they can be drawn on.
    for (const node of nodes) {
      if (typeof SVGGeometryElement !== "undefined" && node instanceof SVGGeometryElement) {
        node.style.setProperty("--draw-length", String(Math.ceil(node.getTotalLength())));
      }
    }

    if (!("IntersectionObserver" in window)) {
      for (const node of nodes) node.classList.add("is-visible");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0 },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return null;
}
