import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { beforeAll, describe, expect, it } from 'vitest';

// Vérifie le document HTML réellement servi (index.html), qui n'est pas chargé par jsdom.
describe('index.html', () => {
  let doc: Document;

  beforeAll(() => {
    const html = readFileSync(resolve(__dirname, '../../index.html'), 'utf-8');
    doc = new DOMParser().parseFromString(html, 'text/html');
  });

  it('déclare le français comme langue du document', () => {
    expect(doc.documentElement.lang).toBe('fr');
  });

  it('définit le titre, la meta description et le viewport', () => {
    expect(doc.title).toBe('Tammiat-folio — Portfolio');
    expect(doc.querySelector('meta[name="description"]')?.getAttribute('content')).toBeTruthy();
    expect(doc.querySelector('meta[name="viewport"]')?.getAttribute('content')).toContain(
      'width=device-width',
    );
  });

  it('prépare les balises Open Graph et le favicon', () => {
    expect(doc.querySelector('meta[property="og:locale"]')?.getAttribute('content')).toBe('fr_FR');
    expect(doc.querySelector('meta[property="og:title"]')).not.toBeNull();
    expect(doc.querySelector('link[rel="icon"]')?.getAttribute('href')).toBe(
      '/favicon/favicon.svg',
    );
  });

  it("n'empêche pas le zoom (WCAG 1.4.4)", () => {
    const viewport = doc.querySelector('meta[name="viewport"]')?.getAttribute('content') ?? '';
    expect(viewport).not.toMatch(/user-scalable\s*=\s*no|maximum-scale\s*=\s*1(\.0)?\b/);
  });
});
