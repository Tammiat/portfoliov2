import type { NavItem } from '@/types/navigation';

/** Navigation principale (docs/02_HOME_PAGE_SPEC.md › Header). */
export const mainNavigation: readonly NavItem[] = [
  { labelKey: 'home', sectionId: 'accueil' },
  { labelKey: 'projects', sectionId: 'projets' },
  { labelKey: 'about', sectionId: 'apropos' },
  { labelKey: 'contact', sectionId: 'contact' },
];

/** Sections suivies pour l'état actif de la navigation, dans l'ordre de la page. */
export const trackedSections = ['accueil', 'projets', 'apropos', 'stack', 'contact'] as const;
