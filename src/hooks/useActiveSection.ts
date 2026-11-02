import { useLocation } from 'react-router';

/**
 * Identifiant de la section courante d'après l'URL ; « accueil » sans ancre sur la page d'accueil,
 * null sur les autres pages. Le suivi au défilement (scroll-spy) pourra s'appuyer dessus au Sprint 1.
 */
export function useActiveSection(): string | null {
  const { pathname, hash } = useLocation();

  if (pathname !== '/') return null;
  return hash ? decodeURIComponent(hash.slice(1)) : 'accueil';
}
