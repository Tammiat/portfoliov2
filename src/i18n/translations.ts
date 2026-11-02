/**
 * Textes de l'interface. Le français est la langue par défaut et la source de vérité :
 * la structure de l'anglais est vérifiée par TypeScript.
 * Contenus du hero, des projets et de l'à-propos : repris de la maquette, à valider par Tammiat.
 */
const fr = {
  meta: { lang: 'fr' },
  skipLink: 'Aller au contenu',
  nav: {
    label: 'Navigation principale',
    home: 'Accueil',
    projects: 'Projets',
    about: 'À propos',
    contact: 'Contact',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
  },
  language: {
    label: 'Langue du site',
    fr: 'Français',
    en: 'English',
  },
  hero: {
    eyebrow: 'UI / UX Designer & Frontend',
    titleLead: 'Designing useful & stylish experiences',
    description: 'Je conçois des interfaces modernes, accessibles et centrées sur l’utilisateur.',
    primaryCta: 'Voir mes projets',
    secondaryCta: 'À propos',
    illustrationAlt:
      'Illustration éditoriale : une femme noire coiffée d’un foulard à motifs, devant un soleil rouge, une branche de cerisier en fleurs, une pagode et un baobab.',
  },
  projects: {
    title: 'Projets sélectionnés',
    viewAll: 'Voir tous les projets',
    open: 'Voir le projet',
  },
  about: {
    label: 'À propos',
    titleBefore: 'Entre le ',
    titleFirst: 'Sénégal',
    titleMiddle: ' et le ',
    titleSecond: 'Japon.',
    description:
      'Développeuse frontend passionnée par le design, la culture visuelle et les expériences numériques qui ont du sens.',
    cta: 'En savoir plus',
    imageAlt:
      'Façade en terre ocre d’inspiration sénégalaise avec une fenêtre ajourée, un palmier et une bande de motifs géométriques noirs et blancs.',
  },
  stack: {
    title: 'Stack principale',
  },
  footer: {
    contactTitle: 'Contact',
    contactPending: 'Coordonnées à venir.',
  },
  notFound: {
    documentTitle: 'Page introuvable',
    code: 'Erreur 404',
    title: 'Page introuvable',
    description: 'La page demandée n’existe pas ou a été déplacée.',
    back: 'Retour à l’accueil',
  },
};

export type Dictionary = typeof fr;

const en: Dictionary = {
  meta: { lang: 'en' },
  skipLink: 'Skip to content',
  nav: {
    label: 'Main navigation',
    home: 'Home',
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  language: {
    label: 'Site language',
    fr: 'Français',
    en: 'English',
  },
  hero: {
    eyebrow: 'UI / UX Designer & Frontend',
    titleLead: 'Designing useful & stylish experiences',
    description: 'I design modern, accessible and user-centred interfaces.',
    primaryCta: 'See my projects',
    secondaryCta: 'About',
    illustrationAlt:
      'Editorial illustration: a Black woman wearing a patterned headscarf, in front of a red sun, a blossoming cherry branch, a pagoda and a baobab tree.',
  },
  projects: {
    title: 'Selected projects',
    viewAll: 'See all projects',
    open: 'View project',
  },
  about: {
    label: 'About',
    titleBefore: 'Between ',
    titleFirst: 'Senegal',
    titleMiddle: ' and ',
    titleSecond: 'Japan.',
    description:
      'Frontend developer passionate about design, visual culture and meaningful digital experiences.',
    cta: 'Learn more',
    imageAlt:
      'Ochre earthen façade inspired by Senegalese architecture, with a carved window, a palm tree and a band of black and white geometric patterns.',
  },
  stack: {
    title: 'Main stack',
  },
  footer: {
    contactTitle: 'Contact',
    contactPending: 'Contact details coming soon.',
  },
  notFound: {
    documentTitle: 'Page not found',
    code: 'Error 404',
    title: 'Page not found',
    description: 'The page you are looking for does not exist or has been moved.',
    back: 'Back to home',
  },
};

export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'fr';

export const translations: Record<Locale, Dictionary> = { fr, en };

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}
