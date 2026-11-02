import boxingClubCover from '@/assets/images/projects/boxing-club-de-la-plaine.webp';
import racineEyewearCover from '@/assets/images/projects/racine-eyewear.webp';
import tokyoUndergroundCover from '@/assets/images/projects/tokyo-underground.webp';
import type { Project } from '@/types/portfolio';

/**
 * Projets sélectionnés (Sprint 1, d'après la maquette et le brief).
 * Couvertures provisoires extraites de la maquette : à remplacer par les visuels réels.
 * Ajouter `href` dès qu'une étude de cas ou un site en ligne est disponible.
 */
export const selectedProjects: readonly Project[] = [
  {
    slug: 'racine-eyewear',
    name: 'Racine Eyewear',
    category: { fr: 'Site vitrine', en: 'Showcase website' },
    stack: ['React', 'TypeScript'],
    cover: racineEyewearCover,
  },
  {
    slug: 'boxing-club-de-la-plaine',
    name: 'Boxing Club de la Plaine',
    category: { fr: 'Refonte de site', en: 'Website redesign' },
    stack: ['React', 'GSAP'],
    cover: boxingClubCover,
  },
  {
    slug: 'tokyo-underground',
    name: 'Tokyo Underground',
    category: { fr: 'Portfolio expérimental', en: 'Experimental portfolio' },
    stack: ['Phaser', 'TS'],
    cover: tokyoUndergroundCover,
  },
];
