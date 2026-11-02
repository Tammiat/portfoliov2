import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { SkipLink } from '@/components/layout/SkipLink';

import { renderApp } from '../../utils/renderApp';

describe("Lien d'évitement", () => {
  it('est le premier élément atteint au clavier', async () => {
    const { user } = renderApp();

    await user.tab();

    const skipLink = screen.getByRole('link', { name: 'Aller au contenu' });
    expect(skipLink).toHaveFocus();
    expect(skipLink).toHaveAttribute('href', '#contenu');
  });

  it('déplace le focus sur le contenu principal à l’activation', async () => {
    const { user } = renderApp();

    await user.tab();
    await user.keyboard('{Enter}');

    expect(screen.getByRole('main')).toHaveFocus();
  });

  it('permet ensuite de continuer la navigation clavier dans le contenu', async () => {
    const { user } = renderApp();

    await user.tab();
    await user.keyboard('{Enter}');
    await user.tab();

    // Après le contenu principal, on arrive au premier élément focusable du main (CTA du hero),
    // et non dans la navigation : le header est bien évité.
    expect(screen.getByRole('link', { name: 'Voir mes projets' })).toHaveFocus();
  });

  it('conserve le comportement natif si la cible est absente', async () => {
    const user = userEvent.setup();
    render(<SkipLink targetId="absent" label="Aller à la cible" />);

    const link = screen.getByRole('link', { name: 'Aller à la cible' });
    await user.click(link);

    expect(link).toHaveAttribute('href', '#absent');
  });
});
