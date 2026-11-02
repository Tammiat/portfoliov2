import { ButtonLink } from '@/components/ui/ButtonLink';
import type { SectionId } from '@/types/navigation';

/**
 * Squelette sémantique de la page d'accueil (Sprint 0).
 * Les sections définitives (hero, projets, à propos, stack) seront développées au Sprint 1
 * à partir de contenus validés : aucun texte personnel n'est inventé ici.
 */
const upcomingSections: ReadonlyArray<{ id: SectionId; title: string }> = [
  { id: 'projets', title: 'Projets sélectionnés' },
  { id: 'apropos', title: 'À propos' },
  { id: 'stack', title: 'Stack principale' },
  { id: 'contact', title: 'Contact' },
];

export function HomePage() {
  return (
    <>
      <section
        id="accueil"
        aria-labelledby="accueil-titre"
        tabIndex={-1}
        className="container-content py-section"
      >
        <h1 id="accueil-titre" className="text-display lg:text-display-lg">
          Tammiat-folio
        </h1>
        <p className="mt-6 max-w-prose text-body text-muted">Portfolio en cours de construction.</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink to={{ hash: 'projets' }}>Voir mes projets</ButtonLink>
          <ButtonLink to={{ hash: 'apropos' }} variant="secondary">
            À propos
          </ButtonLink>
        </div>
      </section>

      {upcomingSections.map(({ id, title }) => (
        <section
          key={id}
          id={id}
          aria-labelledby={`${id}-titre`}
          tabIndex={-1}
          className="container-content py-section"
        >
          <h2 id={`${id}-titre`} className="text-h2">
            {title}
          </h2>
          <p className="mt-4 text-body text-muted">Contenu à venir.</p>
        </section>
      ))}
    </>
  );
}
