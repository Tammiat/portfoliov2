/** Identifiants des sections de la page d'accueil, utilisés comme ancres (#projets…). */
export type SectionId = 'accueil' | 'projets' | 'apropos' | 'stack' | 'contact';

export interface NavItem {
  label: string;
  sectionId: SectionId;
}
