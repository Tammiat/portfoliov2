import { screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { LOCALE_STORAGE_KEY } from '@/i18n/context';

import { renderApp } from '../../utils/renderApp';

const getSwitcher = () => screen.getByRole('group', { name: /langue du site|site language/i });

describe('Sélecteur de langue FR / EN', () => {
  it('affiche le français par défaut, signalé par aria-pressed', () => {
    renderApp();

    expect(document.documentElement).toHaveAttribute('lang', 'fr');
    expect(within(getSwitcher()).getByRole('button', { name: 'Français' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
    expect(within(getSwitcher()).getByRole('button', { name: 'English' })).toHaveAttribute(
      'aria-pressed',
      'false',
    );
  });

  it('traduit réellement le contenu et met à jour la langue du document', async () => {
    const { user } = renderApp();

    await user.click(within(getSwitcher()).getByRole('button', { name: 'English' }));

    expect(document.documentElement).toHaveAttribute('lang', 'en');
    const nav = screen.getByRole('navigation', { name: 'Main navigation' });
    expect(
      within(nav)
        .getAllByRole('link')
        .map((link) => link.textContent),
    ).toEqual(['Home', 'Projects', 'About', 'Contact']);
    expect(screen.getByRole('region', { name: 'Selected projects' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Between Senegal and Japan.' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'See my projects' })).toBeInTheDocument();
    expect(screen.getByRole('region', { name: 'Selected projects' })).toHaveTextContent(
      /Showcase website\W+React\W+TypeScript/,
    );
    expect(within(getSwitcher()).getByRole('button', { name: 'English' })).toHaveAttribute(
      'aria-pressed',
      'true',
    );
  });

  it('mémorise le choix pour la visite suivante', async () => {
    const { user, unmount } = renderApp();
    await user.click(within(getSwitcher()).getByRole('button', { name: 'English' }));
    expect(window.localStorage.getItem(LOCALE_STORAGE_KEY)).toBe('en');
    unmount();

    renderApp();

    expect(document.documentElement).toHaveAttribute('lang', 'en');
    expect(screen.getByRole('link', { name: 'Skip to content' })).toBeInTheDocument();
  });

  it('ignore une valeur mémorisée invalide', () => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, 'de');

    renderApp();

    expect(document.documentElement).toHaveAttribute('lang', 'fr');
  });
});
