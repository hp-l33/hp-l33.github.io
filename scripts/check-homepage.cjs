// Run against Jekyll's built output: NODE_PATH=<playwright install> node scripts/check-homepage.cjs
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require('playwright');

const root = path.resolve('_site');
const output = path.resolve(process.env.VISUAL_OUTPUT || 'homepage-check');
const mime = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
  '.woff': 'font/woff', '.woff2': 'font/woff2' };
const server = http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, 'http://localhost');
    let file = path.resolve(root, '.' + decodeURIComponent(url.pathname));
    if (file !== root && !file.startsWith(root + path.sep)) throw new Error('Invalid path');
    if ((await fs.stat(file)).isDirectory()) file = path.join(file, 'index.html');
    response.writeHead(200, { 'Content-Type': mime[path.extname(file)] || 'application/octet-stream' });
    response.end(await fs.readFile(file));
  } catch {
    response.writeHead(404).end();
  }
});

const expectedNav = ['About Me', 'Projects', 'Publications', 'Awards'];
const report = [];
let browser;

(async () => {
  await fs.mkdir(output, { recursive: true });
  const source = await fs.readFile('_pages/about.md', 'utf8');
  const expectedTitles = [...source.matchAll(/<h3>(.*?)<\/h3>/g)].map(match => match[1]);
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${server.address().port}`;
  browser = await chromium.launch();

  for (const width of [1440, 1024, 768, 390, 320]) {
    const context = await browser.newContext({ viewport: { width, height: 1000 }, colorScheme: 'light' });
    const page = await context.newPage();
    const result = { width, failures: [] };
    report.push(result);
    try {
      await page.goto(origin, { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const nav = page.locator('.greedy-nav--static .visible-links > li > a');
      assert.deepEqual(await nav.allTextContents(), expectedNav);
      assert.deepEqual(await page.locator('.paper-box-text h3').allTextContents(), expectedTitles);
      assert.equal(await page.locator('.project-card').count(), 2);

      const metrics = await page.evaluate(() => {
        const box = element => {
          const { x, y, width, height, bottom } = element.getBoundingClientRect();
          return { x, y, width, height, bottom };
        };
        const intro = document.querySelector('.home-hero');
        return {
          overflow: document.documentElement.scrollWidth - innerWidth,
          nav: [...document.querySelectorAll('.greedy-nav .visible-links > li')].map(box),
          intro: box(intro),
          paragraph: box(intro.querySelector('p')),
          avatar: box(document.querySelector('.profile_box > .author__avatar')),
          brokenImages: [...document.images].filter(img => img.currentSrc.startsWith(location.origin) && !img.naturalWidth).map(img => img.src),
          papers: [...document.querySelectorAll('.paper-box')].map(paper => ({
            title: box(paper.querySelector('h3')),
            authors: box(paper.querySelector('.authors')),
            venue: box(paper.querySelector('.venue')),
            link: box(paper.querySelector('.btn-accent')),
            imageBorder: getComputedStyle(paper.querySelector('img')).borderLeftWidth,
          })),
        };
      });
      result.metrics = metrics;
      assert.ok(metrics.overflow <= 1, `Horizontal overflow: ${metrics.overflow}px`);
      assert.deepEqual(metrics.brokenImages, []);
      assert.ok(metrics.paragraph.y >= metrics.intro.y, 'About text clipped at top');
      assert.ok(metrics.paragraph.bottom <= metrics.intro.bottom + 1, 'About text clipped at bottom');
      if (width >= 925) {
        assert.ok(Math.abs(metrics.avatar.y - metrics.intro.y) < 1, 'About/profile top alignment');
        assert.ok(Math.abs(metrics.avatar.height - metrics.intro.height) < 1, 'About/profile height alignment');
      }
      for (const paper of metrics.papers) {
        assert.ok(Math.abs(paper.venue.height - paper.link.height) < 0.5, 'Publication control heights');
        for (const item of [paper.authors, paper.venue, paper.link]) {
          assert.ok(Math.abs(item.x - paper.title.x) < 0.5, 'Publication left alignment');
        }
        assert.ok(parseFloat(paper.imageBorder) >= 1, 'Publication cover border');
      }

      // Sample throughout hover, not just the animation's final frame.
      for (let index = 0; index < expectedNav.length; index++) {
        await nav.nth(index).hover();
        for (const delay of [0, 80, 220]) {
          await page.waitForTimeout(delay);
          const current = await page.locator('.greedy-nav .visible-links > li').evaluateAll(items =>
            items.map(item => ({ x: item.getBoundingClientRect().x, width: item.getBoundingClientRect().width })));
          current.forEach((item, i) => {
            assert.ok(Math.abs(item.x - metrics.nav[i].x) < 0.1, 'Navigation moved on hover');
            assert.ok(Math.abs(item.width - metrics.nav[i].width) < 0.1, 'Navigation resized on hover');
          });
        }
      }
      for (let index = 0; index < expectedNav.length; index++) {
        const link = nav.nth(index);
        assert.equal(await link.getAttribute('target'), '_self');
        await page.evaluate(() => { window.homepageNavigationCheck = true; });
        await link.click();
        await page.waitForTimeout(500);
        assert.equal(new URL(page.url()).hash, await link.getAttribute('href'));
        assert.equal(context.pages().length, 1, 'Navigation opened another tab');
        assert.equal(await page.evaluate(() => window.homepageNavigationCheck), true, 'Navigation reloaded the document');
      }
    } catch (error) {
      result.failures.push(error.stack);
    } finally {
      await page.evaluate(() => window.scrollTo({ top: 0, behavior: 'instant' }));
      await page.mouse.move(0, 0);
      await page.screenshot({ path: path.join(output, `homepage-${width}.png`), fullPage: true });
      if (width === 1440) {
        await page.locator('.paper-box').first().hover();
        await page.waitForTimeout(220);
        await page.locator('.paper-box').first().screenshot({ path: path.join(output, 'publication-hover.png') });
      }
      await context.close();
    }
  }
  await fs.writeFile(path.join(output, 'report.json'), JSON.stringify(report, null, 2));
  for (const result of report) console.log(`${result.width}px: ${result.failures.length ? result.failures.join('\n') : 'PASS'}`);
  assert.ok(report.every(result => !result.failures.length), 'Homepage checks failed; inspect the screenshot artifact.');
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
}).finally(async () => {
  if (browser) await browser.close();
  server.close();
});
