"use client";

import { useEffect } from "react";

const COUNT_DURATION = 1400;

/** Counts 0 → target, then writes the final string so the DOM ends up exact. */
function runCount(el: HTMLElement) {
  const target = Number(el.dataset.countTo);
  if (!Number.isFinite(target)) return;

  const suffix = el.dataset.countSuffix ?? "";
  const final = el.textContent ?? `${target}${suffix}`;
  const start = performance.now();

  const step = (now: number) => {
    const progress = Math.min((now - start) / COUNT_DURATION, 1);
    // ease-out so it decelerates into place rather than stopping dead
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = `${Math.round(target * eased)}${suffix}`;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = final;
  };

  el.textContent = `0${suffix}`;
  requestAnimationFrame(step);
}

/**
 * A single observer drives every reveal on the page, which lets all the
 * section components stay Server Components that only declare attributes.
 */
export default function RevealEngine() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nodes = Array.from(
      document.querySelectorAll<HTMLElement>(
        "[data-reveal],[data-reveal-line],[data-draw],[data-reveal-rule],[data-reveal-image],[data-count-to]",
      ),
    );

    // SVG strokes need their own length before they can be drawn on.
    for (const node of nodes) {
      if (typeof SVGGeometryElement !== "undefined" && node instanceof SVGGeometryElement) {
        node.style.setProperty("--draw-length", String(Math.ceil(node.getTotalLength())));
      }
    }

    const activate = (el: HTMLElement) => {
      el.classList.add("is-visible");
      if (!reduced && el.dataset.countTo) runCount(el);
    };

    if (!("IntersectionObserver" in window)) {
      for (const node of nodes) activate(node);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          activate(entry.target as HTMLElement);
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
