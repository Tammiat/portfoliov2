import { describe, expect, it } from 'vitest';

import { normalizeUrl } from '@/lib/env';

describe('normalizeUrl', () => {
  it('retire les espaces et les slashs finaux', () => {
    expect(normalizeUrl('  https://exemple.fr/// ')).toBe('https://exemple.fr');
  });

  it('renvoie undefined pour une valeur absente ou vide', () => {
    expect(normalizeUrl(undefined)).toBeUndefined();
    expect(normalizeUrl('   ')).toBeUndefined();
  });
});
