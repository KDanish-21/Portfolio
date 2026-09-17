/**
 * Capture individual sections at readable scale, for design review.
 * Usage: node scripts/crop.mjs <width> <height> <section-id...>
 */
import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const [, , w, h, ...ids] = process.argv;
const url = process.env.URL ?? "http://localhost:3000";

await mkdir("shots", { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: +w, height: +h },
  deviceScaleFactor: 2,
});
const page = await context.newPage();

await page.goto(url, { waitUntil: "networkidle" });
await page.addStyleTag({ content: "nextjs-portal{display:none!important}" });
await page.evaluate(async () => {
  const step = window.innerHeight * 0.7;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 100));
  }
});
await page.waitForTimeout(1200);

for (const id of ids) {
  const el = await page.$(`#${id}`);
  if (!el) {
    console.log("missing:", id);
    continue;
  }
  await el.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await el.screenshot({ path: `shots/${w}-${id}.png` });
  console.log("captured", `${w}-${id}`);
}

await browser.close();
