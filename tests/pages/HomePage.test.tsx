import { screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderApp } from '../utils/renderApp';

describe("Page d'accueil", () => {
  it('contient un seul titre de niveau 1', () => {
    renderApp();

    const h1s = screen.getAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent('Tammiat-folio');
  });

  it('expose chaque section prévue par la spécification, nommée par son titre', () => {
    renderApp();

    for (const name of ['Projets sélectionnés', 'À propos', 'Stack principale', 'Contact']) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument();
      expect(screen.getByRole('region', { name })).toBeInTheDocument();
    }
  });

  it('propose les deux CTA vers les sections Projets et À propos', () => {
    renderApp();

    expect(screen.getByRole('link', { name: 'Voir mes projets' })).toHaveAttribute(
      'href',
      '/#projets',
    );
    // « À propos » existe aussi dans la navigation : on cible le CTA du hero.
    const heroLinks = screen
      .getAllByRole('link', { name: 'À propos' })
      .filter((link) => !link.closest('nav'));
    expect(heroLinks).toHaveLength(1);
    expect(heroLinks[0]).toHaveAttribute('href', '/#apropos');
  });
});
