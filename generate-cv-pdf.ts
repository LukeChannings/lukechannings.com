import puppeteer from "https://deno.land/x/puppeteer@9.0.1/mod.ts"

const browser = await puppeteer.launch()
const page = await browser.newPage()
await page.goto("http://localhost:8000", {
  waitUntil: "networkidle2",
})

await page.emulateMediaFeatures([
  { name: "prefers-color-scheme", value: "dark" },
])

const boundingBox = await (await page.$("html"))?.boundingBox()

await page.pdf({
  printBackground: true,
  width: `${boundingBox?.width}px`,
  height: `${boundingBox?.height}px`,
  path: `static/cv.pdf`,
})

await browser.close()
