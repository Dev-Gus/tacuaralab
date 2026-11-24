import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import http from 'node:http';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';

// Run after npm ci and npm run build. Playwright is a development-only tool.
const root = fileURLToPath(new URL('../', import.meta.url));
const loadDependency = createRequire(new URL('../package.json', import.meta.url));
const sharp = loadDependency('sharp');
async function loadPlaywright() {
  if (process.env.PLAYWRIGHT_MODULE) return import(pathToFileURL(process.env.PLAYWRIGHT_MODULE));
  try { return await import('playwright'); } catch {}
  const cache = process.env.npm_config_cache || (process.platform === 'win32'
    ? path.join(process.env.LOCALAPPDATA, 'npm-cache') : path.join(os.homedir(), '.npm'));
  for (const entry of await fs.readdir(path.join(cache, '_npx')).catch(() => [])) {
    const module = path.join(cache, '_npx', entry, 'node_modules/playwright/index.mjs');
    try { await fs.access(module); return await import(pathToFileURL(module)); } catch {}
  }
  throw new Error('Prepare Playwright with: npm exec --yes --package=playwright -- playwright --version');
}
const { chromium } = await loadPlaywright();
const dist = path.join(root, 'dist');
await fs.access(path.join(dist, 'es/index.html'));
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.png': 'image/png', '.svg': 'image/svg+xml' };
const server = http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    let filename = path.resolve(dist, '.' + pathname);
    if (!filename.startsWith(dist + path.sep)) throw new Error('Invalid path');
    if ((await fs.stat(filename)).isDirectory()) filename = path.join(filename, 'index.html');
    const body = await fs.readFile(filename);
    response.writeHead(200, { 'Content-Type': mime[path.extname(filename)] || 'application/octet-stream' });
    response.end(body);
  } catch { response.writeHead(404); response.end(); }
});
await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
const base = `http://127.0.0.1:${server.address().port}`;
let browser;
const assets = path.join(root, 'src/assets/tacuara-lab');
const covers = path.join(root, 'src/assets/project-covers');
async function saveWebp(input, filename, limit) {
  for (const quality of [84, 80, 76, 72, 68, 64]) {
    const buffer = await input.clone().webp({ quality, effort: 6 }).toBuffer();
    if (buffer.length < limit) {
      await fs.writeFile(filename, buffer);
      console.log(`${path.relative(root, filename)}: ${buffer.length} bytes`);
      return;
    }
  }
  throw new Error(`Image exceeds ${limit} bytes: ${filename}`);
}
try {
  browser = await chromium.launch(process.env.CHROME_PATH
    ? { executablePath: process.env.CHROME_PATH, headless: true }
    : { channel: 'chrome', headless: true });
  await fs.mkdir(assets, { recursive: true });
  await fs.mkdir(covers, { recursive: true });
  for (const lang of ['es', 'en']) {
    const context = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true, hasTouch: true, locale: lang === 'es' ? 'es-UY' : 'en-US', reducedMotion: 'reduce' });
    try {
      const page = await context.newPage();
      for (const [name, route] of [['home', `/${lang}/`], ['services', lang === 'es' ? '/es/servicios/' : '/en/services/']]) {
        const response = await page.goto(base + route, { waitUntil: 'networkidle' });
        if (response.status() !== 200) throw new Error(`HTTP ${response.status()}: ${route}`);
        await page.evaluate(() => document.fonts.ready);
        await page.evaluate(() => window.scrollTo(0, 0));
        const png = await page.screenshot({ type: 'png', fullPage: false, animations: 'disabled' });
        await saveWebp(sharp(png), path.join(assets, `tacuara-lab-${name}-${lang}.webp`), 80000);
      }
      await saveWebp(sharp(path.join(assets, `tacuara-lab-home-${lang}.webp`)).extract({ left: 16, top: 350, width: 748, height: 421 }).resize(800, 450, { fit: 'cover' }), path.join(covers, `tacuara-lab-${lang}.webp`), 60000);
    } finally { await context.close(); }
  }
  await saveWebp(sharp(path.join(root, 'src/assets/cero-yuyo/cero-yuyo-desktop.png')).extract({ left: 1334, top: 390, width: 920, height: 518 }).resize(800, 450, { fit: 'cover' }), path.join(covers, 'cero-yuyo.webp'), 60000);
} finally {
  if (browser) await browser.close();
  await new Promise(resolve => server.close(resolve));
}
