/** Identifiants des sections de la page d'accueil, utilisés comme ancres (#projets…). */
export type SectionId = 'accueil' | 'projets' | 'apropos' | 'stack' | 'contact';

export interface NavItem {
  /** Clé du libellé dans le dictionnaire `nav`. */
  labelKey: 'home' | 'projects' | 'about' | 'contact';
  sectionId: SectionId;
}
