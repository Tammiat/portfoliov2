import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router';
import { describe, expect, it } from 'vitest';

import { ButtonLink } from '@/components/ui/ButtonLink';

function renderInRouter(ui: React.ReactNode) {
  const router = createMemoryRouter([{ path: '*', element: ui }], { initialEntries: ['/'] });
  render(<RouterProvider router={router} />);
  return router;
}

describe('ButtonLink', () => {
  it('rend un lien (et non un bouton) avec son libellé comme nom accessible', () => {
    renderInRouter(<ButtonLink to="/projets">Voir mes projets</ButtonLink>);

    const link = screen.getByRole('link', { name: 'Voir mes projets' });
    expect(link).toHaveAttribute('href', '/projets');
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('accepte une cible sous forme d’ancre', () => {
    renderInRouter(<ButtonLink to={{ hash: 'contact' }}>Contact</ButtonLink>);

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/#contact');
  });

  it('distingue visuellement les variantes primaire et secondaire', () => {
    renderInRouter(
      <>
        <ButtonLink to="/a">Primaire</ButtonLink>
        <ButtonLink to="/b" variant="secondary">
          Secondaire
        </ButtonLink>
      </>,
    );

    expect(screen.getByRole('link', { name: 'Primaire' })).toHaveClass(
      'bg-vermilion',
      'text-white',
    );
    expect(screen.getByRole('link', { name: 'Secondaire' })).toHaveClass('border-ink', 'text-ink');
  });

  it('garantit une cible tactile minimale de 44px', () => {
    renderInRouter(<ButtonLink to="/a">Cible</ButtonLink>);

    expect(screen.getByRole('link', { name: 'Cible' })).toHaveClass('min-h-touch');
  });
});
