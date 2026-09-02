import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync } from 'node:fs';
const out = process.argv[2] ?? 'screenshots';
mkdirSync(out, { recursive: true });
const srv = spawn('pnpm', ['exec', 'vite', 'preview', '--port', '4173', '--strictPort'], { cwd: '/Users/adityakrx/liquid-stake', stdio: 'ignore' });
await new Promise((r) => setTimeout(r, 2500));
const browser = await chromium.launch();
const shots = [
  ['landing-desktop', '/', 1440, 900, true],
  ['landing-mobile', '/', 390, 844, true],
  ['app-stake', '/app', 1440, 900, false],
  ['app-stake-mobile', '/app', 390, 844, true],
  ['app-vaults', '/app/vaults', 1440, 900, false],
  ['app-portfolio', '/app/portfolio', 1440, 900, false],
];
const errors = [];
for (const [name, path, w, h, full] of shots) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  page.on('pageerror', (e) => errors.push(`${name}: ${e.message}`));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(`${name} console: ${m.text()}`); });
  await page.goto(`http://localhost:4173${path}`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(1200);
  if (path.startsWith('/app') && name === 'app-stake') {
    await page.getByRole('button', { name: 'Connect wallet' }).first().click();
    await page.getByRole('button', { name: 'Use a demo account' }).click();
    await page.waitForTimeout(800);
    await page.getByRole('textbox', { name: 'You stake' }).fill('250');
    await page.waitForTimeout(300);
  }
  await page.screenshot({ path: `${out}/${name}.png`, fullPage: full });
  await ctx.close();
  console.log('shot', name);
}
await browser.close();
srv.kill();
console.log(errors.length ? 'ERRORS:\n' + errors.join('\n') : 'no page errors');
