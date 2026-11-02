import '@testing-library/jest-dom/vitest';

import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';

// Démonte les composants rendus et réinitialise le DOM après chaque test.
afterEach(() => {
  cleanup();
  document.title = '';
  document.documentElement.lang = 'fr';
  window.localStorage.clear();
});

// API navigateur absentes de jsdom.
if (!window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string): MediaQueryList => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(() => false),
    }),
  });
}

if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = function scrollIntoView() {};
}

// jsdom ne fournit pas IntersectionObserver : on considère chaque élément observé comme visible,
// ce qui déclenche immédiatement les révélations au défilement (whileInView).
if (!('IntersectionObserver' in window)) {
  class ImmediateIntersectionObserver {
    readonly root = null;
    readonly rootMargin = '0px';
    readonly thresholds = [0];
    constructor(private readonly callback: IntersectionObserverCallback) {}
    observe(target: Element) {
      const entry = {
        target,
        isIntersecting: true,
        intersectionRatio: 1,
      } as IntersectionObserverEntry;
      this.callback([entry], this as unknown as IntersectionObserver);
    }
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }
  Object.defineProperty(window, 'IntersectionObserver', {
    writable: true,
    value: ImmediateIntersectionObserver,
  });
}
