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

## Sprint 1 — 2 novembre 2026

### Fidélité à la maquette

- **Unité de mise en page** : `--spacing` vaut 1 px sur mobile et `min(100vw, 1280px) / 1024` à partir de 768 px. Une classe comme `px-64` correspond donc à 64 px de la maquette (1024 px de large), mis à l'échelle de l'écran. Les tailles de texte courant ne descendent jamais sous leur valeur en `rem`.
- **Palette alignée sur la maquette** (référence visuelle absolue du sprint) : fond `#FCF6F1`, fond du hero `#FBF4EC`, rouge `#B11E1D`, texte secondaire `#3A3431`, plus des teintes décoratives (`clay-soft`, `line`, `line-soft`). Contrastes remesurés : AA partout pour le texte.
- **Polices** : Manrope pour les titres et le texte courant (charte : « Inter ou Manrope ») ; Inter retirée. IBM Plex Mono conservée pour le copyright.

### Contenus et liens

- Les éléments qui exigent une destination (icône ↗ et lien des cartes, « Voir tous les projets », « En savoir plus ») ne s'affichent que si l'URL est renseignée (`src/data/projects.ts`, `src/data/site.ts`) : pas de lien factice.
- Logos de la stack : tracés officiels de simple-icons (CC0) copiés dans `src/data/stack.ts`, sans dépendance.
- Assets provisoires extraits de la maquette (`src/assets/`), à remplacer par les originaux haute définition.

### Langue

- FR / EN via `LocaleProvider` : dictionnaires typés (`src/i18n/translations.ts`, le français fait référence), `document.documentElement.lang` synchronisé, choix mémorisé dans `localStorage` (lecture et écriture protégées).
- Le titre du hero, en anglais dans les deux versions, porte `lang="en"`.

### Navigation

- Section active : position de défilement (`useScrollSpy`, ligne d'activation à 40 % de la hauteur, dernière section en bas de page), puis ancre de l'URL.
- Le footer porte l'ancre `#contact`.

### Animations

- Variantes partagées dans `src/lib/motion.ts` (opacity/transform uniquement). L'illustration du hero n'est jamais masquée (léger zoom seulement) pour ne pas retarder le LCP.
