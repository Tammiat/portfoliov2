import { ButtonLink } from '@/components/ui/ButtonLink';
import { site } from '@/data/site';

export function NotFoundPage() {
  return (
    <section aria-labelledby="introuvable-titre" className="container-content py-section">
      <title>{`Page introuvable — ${site.name}`}</title>
      <p className="font-label text-label text-muted uppercase">Erreur 404</p>
      <h1 id="introuvable-titre" className="mt-2 text-h2">
        Page introuvable
      </h1>
      <p className="mt-4 max-w-prose text-body text-muted">
        La page demandée n'existe pas ou a été déplacée.
      </p>
      <div className="mt-8">
        <ButtonLink to="/">Retour à l'accueil</ButtonLink>
      </div>
    </section>
  );
}

// Permet le chargement différé via la propriété `lazy` du routeur.
export { NotFoundPage as Component };
