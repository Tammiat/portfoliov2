import { screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { renderApp } from '../../utils/renderApp';

const getNav = () => screen.getByRole('navigation', { name: 'Navigation principale' });

describe('Navigation principale', () => {
  it('liste Accueil, Projets, À propos et Contact dans cet ordre', () => {
    renderApp();

    const labels = within(getNav())
      .getAllByRole('link')
      .map((link) => link.textContent);
    expect(labels).toEqual(['Accueil', 'Projets', 'À propos', 'Contact']);
  });

  it('pointe chaque lien vers une ancre qui existe sur la page', () => {
    renderApp();

    for (const link of within(getNav()).getAllByRole('link')) {
      const href = link.getAttribute('href') ?? '';
      expect(href).toMatch(/^\/#[a-z]+$/);
      expect(document.getElementById(href.slice(2))).not.toBeNull();
    }
  });

  it('renvoie en haut de page via le logo', () => {
    renderApp();

    const logo = within(screen.getByRole('banner')).getByRole('link', { name: 'Tammiat-folio' });
    expect(logo).toHaveAttribute('href', '/#accueil');
    expect(document.getElementById('accueil')).toContainElement(
      screen.getByRole('heading', { level: 1 }),
    );
  });

  it("indique « Accueil » comme section courante à l'arrivée, sans dépendre de la couleur", () => {
    renderApp();

    const nav = getNav();
    expect(within(nav).getByRole('link', { name: 'Accueil' })).toHaveAttribute(
      'aria-current',
      'location',
    );
    expect(within(nav).getByRole('link', { name: 'Projets' })).not.toHaveAttribute('aria-current');
  });

  it('défile vers la section choisie, lui donne le focus et la marque comme courante', async () => {
    const scrollIntoView = vi.spyOn(Element.prototype, 'scrollIntoView');
    const { user, router } = renderApp();

    await user.click(within(getNav()).getByRole('link', { name: 'Projets' }));

    const section = screen.getByRole('region', { name: 'Projets sélectionnés' });
    expect(router.state.location.hash).toBe('#projets');
    expect(section).toHaveFocus();
    expect(scrollIntoView.mock.contexts).toContain(section);
    expect(within(getNav()).getByRole('link', { name: 'Projets' })).toHaveAttribute(
      'aria-current',
      'location',
    );
    expect(within(getNav()).getByRole('link', { name: 'Accueil' })).not.toHaveAttribute(
      'aria-current',
    );
  });

  it("n'indique aucune section courante hors de la page d'accueil", async () => {
    renderApp('/inconnue');

    await screen.findByRole('heading', { name: 'Page introuvable' });
    for (const link of within(getNav()).getAllByRole('link')) {
      expect(link).not.toHaveAttribute('aria-current');
    }
  });

  it('est entièrement utilisable au clavier', async () => {
    const { user, router } = renderApp();

    within(getNav()).getByRole('link', { name: 'Contact' }).focus();
    await user.keyboard('{Enter}');

    expect(router.state.location.hash).toBe('#contact');
    expect(screen.getByRole('region', { name: 'Contact' })).toHaveFocus();
  });
});

describe('Menu mobile', () => {
  const getToggle = (name: RegExp = /menu/i) => screen.getByRole('button', { name });

  it('est fermé par défaut et relié à la liste de liens', () => {
    renderApp();

    const toggle = getToggle(/ouvrir le menu/i);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    const list = document.getElementById(toggle.getAttribute('aria-controls') ?? '');
    expect(list).toBeInstanceOf(HTMLUListElement);
    expect(within(getNav()).getByRole('list')).toBe(list);
  });

  it("s'ouvre et se ferme avec le bouton, dont le nom accessible suit l'état", async () => {
    const { user } = renderApp();

    await user.click(getToggle(/ouvrir le menu/i));
    expect(getToggle(/fermer le menu/i)).toHaveAttribute('aria-expanded', 'true');

    await user.click(getToggle(/fermer le menu/i));
    expect(getToggle(/ouvrir le menu/i)).toHaveAttribute('aria-expanded', 'false');
  });

  it('se ferme avec Escape et rend le focus au bouton déclencheur', async () => {
    const { user } = renderApp();

    await user.click(getToggle());
    await user.tab();
    expect(within(getNav()).getByRole('link', { name: 'Accueil' })).toHaveFocus();

    await user.keyboard('{Escape}');

    const toggle = getToggle(/ouvrir le menu/i);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();
  });

  it('se ferme après le choix d’un lien', async () => {
    const { user } = renderApp();

    await user.click(getToggle());
    await user.click(within(getNav()).getByRole('link', { name: 'À propos' }));

    expect(getToggle()).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('region', { name: 'À propos' })).toHaveFocus();
  });
});
