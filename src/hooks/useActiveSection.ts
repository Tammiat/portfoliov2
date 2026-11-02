import { useLocation } from 'react-router';

import { trackedSections } from '@/data/navigation';

import { useScrollSpy } from './useScrollSpy';

/**
 * Section courante de la page d'accueil : d'abord la position de défilement,
 * puis l'ancre de l'URL, sinon « accueil ». Null sur les autres pages.
 */
export function useActiveSection(): string | null {
  const { pathname, hash } = useLocation();
  const isHome = pathname === '/';
  const spied = useScrollSpy(trackedSections, isHome);

  if (!isHome) return null;
  return spied ?? (hash ? decodeURIComponent(hash.slice(1)) : 'accueil');
}
