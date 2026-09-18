import { mkdir } from "node:fs/promises";
import { chromium } from "playwright";

const VIEWPORTS = [
  [1920, 1080],
  [1600, 900],
  [1440, 900],
  [1280, 800],
  [1024, 768],
  [768, 1024],
  [430, 932],
  [390, 844],
];

const url = process.argv[2] ?? "http://localhost:3000";
const only = process.argv[3] ? Number(process.argv[3]) : null;
const targets = only ? VIEWPORTS.filter(([w]) => w === only) : VIEWPORTS;

await mkdir("shots", { recursive: true });

const browser = await chromium.launch();
const messages = [];

for (const [width, height] of targets) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  page.on("console", (msg) => {
    if (msg.type() === "error") messages.push(`[${width}] ${msg.text()}`);
  });
  page.on("pageerror", (err) => messages.push(`[${width}] ${err.message}`));

  await page.goto(url, { waitUntil: "networkidle" });
  await page.addStyleTag({ content: "nextjs-portal{display:none!important}" });

  // Reveals are IntersectionObserver-driven, so anything below the fold stays
  // at opacity:0 in a full-page screenshot unless we scroll it into view first.
  await page.evaluate(async () => {
    const step = window.innerHeight * 0.75;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 120));
    }
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(1400);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(500);

  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
  );
  if (overflow) messages.push(`[${width}] HORIZONTAL OVERFLOW`);

  await page.screenshot({ path: `shots/${width}x${height}.png`, fullPage: true });
  console.log(`captured ${width}x${height}${overflow ? "  <-- OVERFLOW" : ""}`);
  await context.close();
}

await browser.close();

if (messages.length) {
  console.log("\n--- issues ---");
  for (const m of messages) console.log(m);
} else {
  console.log("\nno console errors, no overflow");
}
