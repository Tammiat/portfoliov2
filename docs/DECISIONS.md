# Décisions techniques

## Sprint 0 — 2 novembre 2026

### Versions

- **TypeScript 6.0** et non 7 : `typescript-eslint` ne supporte pas encore TypeScript ≥ 6.1.
- **ESLint 9** et non 10 : `eslint-plugin-jsx-a11y` (règles d'accessibilité) ne supporte pas encore ESLint 10.
- **Tailwind CSS 4** : configuration dans le CSS (`@theme`), plus de `tailwind.config.js`.

### Design system

- Tokens définis une seule fois dans `src/styles/globals.css` (`@theme static`), exposés en classes Tailwind et en variables CSS.
- Palette Tailwind par défaut désactivée (`--color-*: initial`) pour empêcher l'usage de couleurs hors charte.
- Contrastes mesurés : tous les couples texte utilisés passent AA. **Terre (#C28A52) < 3:1 → décoratif uniquement.**
- Focus : anneau encre de 3 px, décalé de 3 px, sur tous les éléments (`:focus-visible`).
- Polices auto-hébergées via Fontsource (pas de requête vers Google Fonts). **Noto Sans JP n'est pas installée** : son CSS ajoute ~100 ko bloquants ; elle sera ajoutée quand un texte japonais sera validé.

### Navigation

- Les sections de l'accueil sont des ancres (`/#projets`). Les liens passent par React Router ; le hook `useScrollToHash` fait défiler jusqu'à la section **et lui donne le focus** (utile au clavier et aux lecteurs d'écran).
- Le défilement doux est appliqué en CSS, uniquement si `prefers-reduced-motion: no-preference`.
- Section courante signalée par `aria-current="location"` + soulignement (pas seulement la couleur). Elle suit l'URL ; le suivi au défilement (scroll-spy) est prévu au Sprint 1.
- Menu mobile : un seul `<ul>` pour mobile et desktop, bouton nommé avec `aria-expanded` / `aria-controls`, fermeture avec Escape et retour du focus au bouton.
- Lien d'évitement : déplace le focus explicitement sur `<main tabindex="-1">` (fiable sur tous les navigateurs, sans entrée d'historique).

### Performance

- Accueil chargé immédiatement ; pages secondaires (404) en chunks à la demande (`lazy` du routeur).
- Framer Motion : `LazyMotion strict` (fonctionnalités chargées à la demande, composants `m` imposés) et `MotionConfig reducedMotion="user"` (respect global de `prefers-reduced-motion`).

### Tests

- Vitest configuré dans `vite.config.ts` (jsdom, alias `@/`, CSS ignoré, couverture v8).
- Les tests rendent l'application complète avec les vraies routes (`tests/utils/renderApp.tsx`) et interrogent le DOM comme un utilisateur (rôles, noms accessibles, clavier).

### Points ouverts

- `npm audit` signale une vulnérabilité modérée de `minimatch` dans l'outillage ESLint (développement uniquement, non livrée). Le correctif automatique casserait `eslint-config-prettier` : à réévaluer lors d'une mise à jour d'ESLint.
- Meta description, Open Graph (`og:url`, `og:image`) et favicon sont provisoires, en attente de l'identité et des contenus validés.
