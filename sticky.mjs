import { chromium } from "playwright";
const outDir = "/tmp/claude-1000/-home-dell-Projects-Docstician/cb081a75-ea8e-4235-8eb3-64e28fdacbab/scratchpad";
const browser = await chromium.launch({ args: ["--no-sandbox"] });
const page = await browser.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await page.goto("http://localhost:5188/", { waitUntil: "networkidle" });
await page.waitForTimeout(2500);

const positions = [0, 800, 2000, 4000];
for (const y of positions) {
  await page.evaluate((yy) => window.scrollTo(0, yy), y);
  await page.waitForTimeout(500);
  const info = await page.evaluate(() => {
    const h = document.querySelector("header");
    const r = h.getBoundingClientRect();
    return { top: Math.round(r.top), pos: getComputedStyle(h).position, transform: getComputedStyle(h).transform };
  });
  console.log(`scrollY=${y} -> header top=${info.top}, position=${info.pos}, transform=${info.transform}`);
  await page.screenshot({ path: `${outDir}/sticky-${y}.png`, clip: { x: 0, y: 0, width: 390, height: 80 } });
}
await browser.close();
console.log("done");
