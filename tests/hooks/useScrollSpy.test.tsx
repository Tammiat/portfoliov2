import { act, screen, waitFor, within } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

import { renderApp } from '../utils/renderApp';

/** Simule la mise en page : position verticale (dans la fenêtre) de chaque section. */
function layoutSections(tops: Record<string, number>) {
  vi.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(function (this: Element) {
    const top = tops[this.id] ?? 0;
    return {
      top,
      bottom: top + 500,
      height: 500,
      left: 0,
      right: 0,
      width: 0,
      x: 0,
      y: top,
    } as DOMRect;
  });
}

const currentLink = () =>
  within(screen.getByRole('navigation', { name: 'Navigation principale' }))
    .getAllByRole('link')
    .find((link) => link.getAttribute('aria-current') === 'location')?.textContent;

describe('Section active au défilement', () => {
  afterEach(() => {
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 0,
    });
  });

  it('suit la section lue pendant le défilement', async () => {
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: 5000,
    });
    layoutSections({ accueil: 0, projets: 700, apropos: 1200, stack: 1800, contact: 2200 });
    renderApp();
    await waitFor(() => expect(currentLink()).toBe('Accueil'));

    // La section Projets passe au-dessus de la ligne d'activation (40 % de la hauteur).
    layoutSections({ accueil: -700, projets: 0, apropos: 500, stack: 1100, contact: 1500 });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    await waitFor(() => expect(currentLink()).toBe('Projets'));

    layoutSections({ accueil: -1300, projets: -600, apropos: 100, stack: 700, contact: 1100 });
    act(() => {
      window.dispatchEvent(new Event('scroll'));
    });
    await waitFor(() => expect(currentLink()).toBe('À propos'));
  });

  it('active « Contact » en bas de page même si la section est courte', async () => {
    // Page déjà défilée jusqu'en bas : innerHeight + scrollY >= scrollHeight.
    Object.defineProperty(document.documentElement, 'scrollHeight', {
      configurable: true,
      value: window.innerHeight,
    });
    layoutSections({ accueil: -2000, projets: -1300, apropos: -800, stack: 100, contact: 600 });
    renderApp();

    await waitFor(() => expect(currentLink()).toBe('Contact'));
  });
});
