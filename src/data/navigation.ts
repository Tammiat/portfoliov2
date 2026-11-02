import type { NavItem } from '@/types/navigation';

/** Navigation principale (docs/02_HOME_PAGE_SPEC.md › Header). */
export const mainNavigation: readonly NavItem[] = [
  { label: 'Accueil', sectionId: 'accueil' },
  { label: 'Projets', sectionId: 'projets' },
  { label: 'À propos', sectionId: 'apropos' },
  { label: 'Contact', sectionId: 'contact' },
];
