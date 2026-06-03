// Bakes the React app's HTML into dist/index.html so JS-blind crawlers
// (Retell AI knowledge base, etc.) and no-JS visitors get real content.
// Run after `vite build` (client) and `vite build --ssr` (server entry).
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = resolve(__dirname, 'dist/index.html');

const { render } = await import('./dist-ssr/entry-server.js');
const appHtml = render();

const template = readFileSync(indexPath, 'utf-8');
if (!template.includes('<div id="root"></div>')) {
  throw new Error('prerender: could not find empty <div id="root"></div> in dist/index.html');
}

const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
writeFileSync(indexPath, html);
console.log(`✓ Pre-rendered ${appHtml.length.toLocaleString()} chars of content into dist/index.html`);
