import { useEffect } from 'react';
import { useLocation } from 'react-router';

/**
 * Après une navigation vers une ancre (/#projets), fait défiler jusqu'à la section
 * et lui donne le focus, pour que clavier et lecteurs d'écran suivent le déplacement.
 * Le défilement doux est géré en CSS et désactivé si prefers-reduced-motion: reduce.
 */
export function useScrollToHash(): void {
  const { hash, key } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;

    target.scrollIntoView({ block: 'start' });
    target.focus({ preventScroll: true });
  }, [hash, key]);
}
