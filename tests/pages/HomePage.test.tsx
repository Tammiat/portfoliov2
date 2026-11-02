import { screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { renderApp } from '../utils/renderApp';

describe("Page d'accueil", () => {
  it('contient un seul titre de niveau 1, en anglais et déclaré comme tel', () => {
    renderApp();

    const h1s = screen.getAllByRole('heading', { level: 1 });
    expect(h1s).toHaveLength(1);
    expect(h1s[0]).toHaveTextContent('Designing useful & stylish experiences.');
    expect(h1s[0]).toHaveAttribute('lang', 'en');
  });

  it('présente le hero : libellé, description et illustration décrite', () => {
    renderApp();

    const hero = screen.getByRole('region', { name: 'Designing useful & stylish experiences.' });
    expect(within(hero).getByText('UI / UX Designer & Frontend')).toBeInTheDocument();
    expect(
      within(hero).getByText(
        'Je conçois des interfaces modernes, accessibles et centrées sur l’utilisateur.',
      ),
    ).toBeInTheDocument();

    const illustration = within(hero).getByRole('img');
    expect(illustration).toHaveAccessibleName(/femme noire/i);
    // Dimensions réservées pour éviter les décalages de mise en page (CLS).
    expect(illustration).toHaveAttribute('width');
    expect(illustration).toHaveAttribute('height');
    expect(illustration).not.toHaveAttribute('loading', 'lazy');
  });

  it('propose les deux CTA du hero vers les sections Projets et À propos', () => {
    renderApp();

    const hero = screen.getByRole('region', { name: 'Designing useful & stylish experiences.' });
    expect(within(hero).getByRole('link', { name: 'Voir mes projets' })).toHaveAttribute(
      'href',
      '/#projets',
    );
    expect(within(hero).getByRole('link', { name: 'À propos' })).toHaveAttribute(
      'href',
      '/#apropos',
    );
  });

  it('enchaîne les sections Projets sélectionnés, À propos et Stack principale', () => {
    renderApp();

    expect(screen.getByRole('region', { name: 'Projets sélectionnés' })).toHaveAttribute(
      'id',
      'projets',
    );
    expect(screen.getByRole('region', { name: 'Entre le Sénégal et le Japon.' })).toHaveAttribute(
      'id',
      'apropos',
    );
    expect(screen.getByRole('region', { name: 'Stack principale' })).toHaveAttribute('id', 'stack');
  });

  it('affiche trois projets avec leur catégorie et leur stack', () => {
    renderApp();

    const section = screen.getByRole('region', { name: 'Projets sélectionnés' });
    const cards = within(section).getAllByRole('article');
    expect(cards).toHaveLength(3);
    expect(
      cards.map((card) => within(card).getByRole('heading', { level: 3 }).textContent),
    ).toEqual(['Racine Eyewear', 'Boxing Club de la Plaine', 'Tokyo Underground']);
    expect(cards[0]).toHaveTextContent(/Site vitrine\W+React\W+TypeScript/);
    expect(cards[1]).toHaveTextContent(/Refonte de site\W+React\W+GSAP/);
    expect(cards[2]).toHaveTextContent(/Portfolio expérimental\W+Phaser\W+TS/);
  });

  it("n'affiche pas de lien sans destination réelle (projets, « Voir tous », « En savoir plus »)", () => {
    renderApp();

    const projects = screen.getByRole('region', { name: 'Projets sélectionnés' });
    expect(within(projects).queryByRole('link')).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /voir tous les projets/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /en savoir plus/i })).not.toBeInTheDocument();
  });

  it('présente la section À propos avec sa photographie décrite', () => {
    renderApp();

    const about = screen.getByRole('region', { name: 'Entre le Sénégal et le Japon.' });
    expect(within(about).getByText('À propos')).toBeInTheDocument();
    expect(within(about).getByRole('img')).toHaveAccessibleName(/façade en terre ocre/i);
    expect(within(about).getByText(/Développeuse frontend passionnée/)).toBeInTheDocument();
  });

  it('liste les technologies de la stack, chacune nommée en toutes lettres', () => {
    renderApp();

    const stack = screen.getByRole('region', { name: 'Stack principale' });
    const items = within(stack).getAllByRole('listitem');
    expect(items.map((item) => item.textContent)).toEqual([
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Vite',
      'GSAP',
    ]);
    // Les logos sont décoratifs : le nom écrit suffit aux technologies d'assistance.
    for (const item of items) {
      expect(item.querySelector('svg')).toHaveAttribute('aria-hidden', 'true');
    }
  });
});
