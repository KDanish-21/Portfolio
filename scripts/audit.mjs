/** Quick structural / a11y audit against a running server. */
import { chromium } from "playwright";

const url = process.argv[2] ?? "http://localhost:3000";
const browser = await chromium.launch();
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();

const errors = [];
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));
page.on("pageerror", (e) => errors.push(e.message));

await page.goto(url, { waitUntil: "networkidle" });

const report = await page.evaluate(() => {
  const headings = [...document.querySelectorAll("h1,h2,h3,h4")].map((h) => ({
    level: +h.tagName[1],
    text: (h.textContent ?? "").trim().slice(0, 42),
  }));

  const imagesMissingAlt = [...document.querySelectorAll("img")].filter(
    (img) => !img.getAttribute("alt"),
  ).length;

  const namelessControls = [...document.querySelectorAll("a,button")].filter((el) => {
    const name =
      el.getAttribute("aria-label") ||
      el.getAttribute("title") ||
      (el.textContent ?? "").trim();
    return !name;
  }).length;

  const svgsUnlabelled = [...document.querySelectorAll("svg")].filter(
    (s) => !s.getAttribute("aria-hidden") && !s.getAttribute("role") && !s.getAttribute("aria-label"),
  ).length;

  const sections = [...document.querySelectorAll("section[id], footer[id]")].map((s) => s.id);

  return {
    h1Count: headings.filter((h) => h.level === 1).length,
    headings,
    imagesMissingAlt,
    namelessControls,
    svgsUnlabelled,
    sections,
    lang: document.documentElement.lang,
    title: document.title,
    description:
      document.querySelector('meta[name="description"]')?.getAttribute("content")?.slice(0, 60) ?? null,
  };
});

// keyboard: how many stops before reaching the footer links
const tabStops = [];
for (let i = 0; i < 14; i++) {
  await page.keyboard.press("Tab");
  tabStops.push(
    await page.evaluate(() => {
      const el = document.activeElement;
      if (!el) return "none";
      const label = (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 30);
      return `${el.tagName.toLowerCase()}: ${label}`;
    }),
  );
}

// reduced motion must still render content
const reduced = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: "reduce",
});
const rp = await reduced.newPage();
await rp.goto(url, { waitUntil: "networkidle" });
const hiddenUnderReducedMotion = await rp.evaluate(
  () =>
    [...document.querySelectorAll("[data-reveal]")].filter(
      (el) => getComputedStyle(el).opacity === "0",
    ).length,
);

// no-JS must still render content
const nojs = await browser.newContext({ javaScriptEnabled: false });
const np = await nojs.newPage();
await np.goto(url, { waitUntil: "domcontentloaded" });
const nojsText = (await np.locator("body").innerText()).length;

console.log(JSON.stringify({ ...report, errors, tabStops, hiddenUnderReducedMotion, nojsTextLength: nojsText }, null, 2));

await browser.close();
