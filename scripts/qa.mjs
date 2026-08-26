import { readdir, readFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const forbiddenText = [
  ['example', 'com'].join('.'),
  ['local', 'host'].join(''),
  ['chrome-extension', '//'].join(':'),
];
const skip = new Set(['node_modules', '.git', '.astro', '.wrangler', 'scripts']);

async function walk(dir) {
  const out = [];
  for (const name of await readdir(dir)) {
    if (skip.has(name)) continue;
    const path = join(dir, name);
    const info = await stat(path);
    if (info.isDirectory()) out.push(...await walk(path));
    else out.push(path);
  }
  return out;
}

const files = await walk(root);
let failed = false;
for (const file of files) {
  if (/\.(png|jpg|jpeg|webp|gif|zip)$/i.test(file)) continue;
  const text = await readFile(file, 'utf8').catch(() => '');
  for (const token of forbiddenText) {
    if (text.toLowerCase().includes(token.toLowerCase())) {
      console.error(`Contenido no permitido en ${relative(root, file)}`);
      failed = true;
    }
  }
}

const workspace = join(root, 'pnpm-workspace.yaml');
if (existsSync(workspace)) {
  const text = await readFile(workspace, 'utf8');
  if (!/^packages:\s*\n\s*-\s*['\"]?\.['\"]?\s*$/m.test(text)) {
    console.error('pnpm-workspace.yaml existe pero no declara packages: [\'.\'].' );
    failed = true;
  }
}

const dist = join(root, 'dist');
if (existsSync(dist)) {
  const site = (process.env.SITE_URL || '').trim().replace(/\/$/, '');
  const sitemapIndex = join(dist, 'sitemap-index.xml');
  const sitemap = join(dist, 'sitemap-0.xml');
  const maps = [sitemapIndex, sitemap].filter(existsSync);
  if (!site && maps.length) {
    console.error('Se generó sitemap sin SITE_URL.');
    failed = true;
  }
  for (const map of maps) {
    const xml = await readFile(map, 'utf8');
    if (/<lastmod>/i.test(xml)) {
      console.error(`Sitemap contiene lastmod no solicitado: ${relative(root, map)}`);
      failed = true;
    }
    const locations = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
    if (site && locations.some((url) => !url.startsWith(site))) {
      console.error(`Sitemap contiene una URL fuera de SITE_URL: ${relative(root, map)}`);
      failed = true;
    }
  }
}

if (failed) process.exit(1);
console.log('QA estático: OK');
