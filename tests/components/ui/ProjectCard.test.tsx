import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { ProjectCard } from '@/components/ui/ProjectCard';
import type { Project } from '@/types/portfolio';

const project: Project = {
  slug: 'demo',
  name: 'Projet démo',
  category: { fr: 'Site vitrine', en: 'Showcase website' },
  stack: ['React', 'TypeScript'],
  cover: '/cover.webp',
};

describe('ProjectCard', () => {
  it('affiche toujours le nom, la catégorie et la stack (pas seulement au survol)', () => {
    render(<ProjectCard project={project} category="Site vitrine" openLabel="Voir le projet" />);

    expect(screen.getByRole('heading', { level: 3, name: 'Projet démo' })).toBeInTheDocument();
    expect(screen.getByRole('article')).toHaveTextContent(/Site vitrine\W+React\W+TypeScript/);
  });

  it('traite la couverture comme décorative (le titre porte le sens)', () => {
    const { container } = render(
      <ProjectCard project={project} category="Site vitrine" openLabel="Voir le projet" />,
    );

    const cover = container.querySelector('img');
    expect(cover).toHaveAttribute('alt', '');
    expect(cover).toHaveAttribute('loading', 'lazy');
  });

  it("n'est pas cliquable et n'affiche pas l'icône ↗ sans URL", () => {
    const { container } = render(
      <ProjectCard project={project} category="Site vitrine" openLabel="Voir le projet" />,
    );

    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(container.querySelectorAll('svg')).toHaveLength(0);
  });

  it("devient un lien nommé par le projet, avec l'icône ↗, quand une URL existe", () => {
    const { container } = render(
      <ProjectCard
        project={{ ...project, href: 'https://exemple.fr' }}
        category="Site vitrine"
        openLabel="Voir le projet"
      />,
    );

    const link = screen.getByRole('link', { name: 'Projet démo — Voir le projet' });
    expect(link).toHaveAttribute('href', 'https://exemple.fr');
    expect(container.querySelector('svg')?.closest('[aria-hidden="true"]')).not.toBeNull();
  });
});
