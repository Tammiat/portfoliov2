import { screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderApp } from '../utils/renderApp';

describe('Application', () => {
  it('rend la structure sémantique : header, navigation, main et footer', () => {
    renderApp();

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'Navigation principale' })).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('expose la zone Contact dans le footer, avec une année de copyright dynamique', () => {
    renderApp();

    const footer = screen.getByRole('contentinfo');
    expect(footer).toHaveAttribute('id', 'contact');
    expect(within(footer).getByRole('heading', { level: 2, name: 'Contact' })).toBeInTheDocument();
    expect(
      within(footer).getByText(`© ${new Date().getFullYear()} Tammiat-folio`),
    ).toBeInTheDocument();
  });

  it('affiche une page 404 chargée à la demande pour une URL inconnue', async () => {
    renderApp('/page-inexistante');

    expect(
      await screen.findByRole('heading', { level: 1, name: 'Page introuvable' }),
    ).toBeInTheDocument();
    expect(document.title).toBe('Page introuvable — Tammiat-folio');
    expect(screen.getByRole('link', { name: 'Retour à l’accueil' })).toHaveAttribute('href', '/');
  });

  it("revient à l'accueil depuis la page 404", async () => {
    const { user } = renderApp('/page-inexistante');

    await user.click(await screen.findByRole('link', { name: 'Retour à l’accueil' }));

    expect(
      screen.getByRole('heading', { level: 1, name: 'Designing useful & stylish experiences.' }),
    ).toBeInTheDocument();
  });
});
