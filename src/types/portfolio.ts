import type { Locale } from '@/i18n/translations';

export interface Project {
  slug: string;
  name: string;
  /** Catégorie traduite (ex. « Site vitrine »). */
  category: Record<Locale, string>;
  /** Technologies affichées après la catégorie. */
  stack: readonly string[];
  cover: string;
  /** Étude de cas ou site en ligne. Sans URL, la carte n'est pas cliquable. */
  href?: string;
}

export interface Technology {
  name: string;
  /** Couleur officielle de la marque. */
  color: string;
  /** Tracé SVG du logo (viewBox 0 0 24 24). */
  path: string;
}
