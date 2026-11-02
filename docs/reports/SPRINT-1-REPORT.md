# Sprint 1 — Intégration de la maquette

Date : 2 novembre 2026 · Référence visuelle : [`docs/maquette/homepage.png`](../maquette/homepage.png) (1024 × 1536 px)

## 1. Résumé

La page d'accueil de la maquette est intégrée, fonctionnelle et responsive :

- **Header** : logo souligné de rouge, navigation (Accueil, Projets, À propos, Contact) avec défilement fluide et section active suivie au défilement, sélecteur **FR / EN fonctionnel** (traductions réelles, attribut `lang` du document mis à jour, choix mémorisé), menu mobile accessible.
- **Hero** : libellé, titre, description, deux CTA, illustration éditoriale positionnée comme dans la maquette (elle remonte derrière le header et rejoint le bord droit de l'écran).
- **Projets sélectionnés** : trois cartes (Racine Eyewear, Boxing Club de la Plaine, Tokyo Underground) avec couverture assombrie, titre et métadonnées blancs.
- **À propos** : photographie architecturale, titre « Entre le Sénégal et le Japon. » (mots clés en rouge), description, motif de vagues japonaises (seigaiha) en SVG.
- **Stack principale** : React, TypeScript, Tailwind CSS, Vite, GSAP, avec logos officiels et noms écrits.
- **Animations** Framer Motion : apparition progressive du hero, révélation des cartes, de l'À propos et de la stack au défilement, survols discrets des boutons, cartes et liens. `prefers-reduced-motion` respecté.

Boucle de contrôle visuel : **3 itérations** réalisées avec de vraies captures (Chrome headless), comparées côte à côte avec la maquette, puis vérification sur 5 résolutions.

## 2. Architecture

### Composants créés

| Fichier                                                                | Rôle                                                             |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `src/components/sections/HeroSection.tsx`                              | Hero (texte animé + illustration)                                |
| `src/components/sections/SelectedProjectsSection.tsx`                  | Titre de section + grille de 3 cartes                            |
| `src/components/sections/AboutSection.tsx`                             | Deux colonnes image / texte + motif seigaiha                     |
| `src/components/sections/MainStackSection.tsx`                         | Ligne des technologies                                           |
| `src/components/ui/AccentLabel.tsx`                                    | Libellé précédé du trait rouge (réutilisé 4 fois)                |
| `src/components/ui/ProjectCard.tsx`                                    | Carte projet ; devient un lien avec icône ↗ quand une URL existe |
| `src/components/ui/LanguageSwitcher.tsx`                               | Sélecteur FR / EN (`aria-pressed`)                               |
| `src/components/ui/TechLogo.tsx`                                       | Logo SVG d'une technologie (décoratif)                           |
| `src/components/ui/SeigaihaPattern.tsx`                                | Motif de vagues japonaises (SVG décoratif)                       |
| `src/i18n/` (`translations`, `LocaleProvider`, `useLocale`, `context`) | Langue courante, dictionnaires FR / EN typés                     |
| `src/hooks/useScrollSpy.ts`                                            | Section lue pendant le défilement                                |
| `src/lib/motion.ts`                                                    | Variantes d'animation partagées                                  |
| `src/data/projects.ts`, `src/data/stack.ts`, `src/types/portfolio.ts`  | Données séparées du JSX                                          |

### Fichiers importants modifiés

- `src/styles/globals.css` : palette alignée sur la maquette, unité de mise en page, échelle typographique.
- `src/components/layout/SiteHeader.tsx`, `SiteFooter.tsx`, `SkipLink.tsx`, `RootLayout.tsx` : maquette + traductions.
- `src/hooks/useActiveSection.ts` : défilement, puis ancre de l'URL.
- `src/app/App.tsx` : ajout du `LocaleProvider`.
- `src/pages/HomePage.tsx`, `NotFoundPage.tsx`.

### Assets ajoutés

| Fichier                                              | Poids  |
| ---------------------------------------------------- | ------ |
| `src/assets/illustrations/hero-modern-heritage.webp` | 100 ko |
| `src/assets/images/about-architecture.webp`          | 37 ko  |
| `src/assets/images/projects/*.webp` (3 couvertures)  | 27 ko  |

## 3. Intégration graphique

### Choix principaux

- **Unité « pixel de maquette »** : à partir de 768 px, `1` unité Tailwind = `1` px de la maquette, mis à l'échelle de l'écran (`--spacing: min(100vw, 1280px) / 1024`). On écrit donc directement les mesures relevées (`h-48`, `px-64`, `gap-16`…) et la composition garde les proportions exactes de la maquette de 768 à 1280 px, puis reste centrée au-delà. Sous 768 px, une mise en page mobile dédiée est utilisée.
- **Mesures relevées au pixel** sur la maquette (bords des cartes, boutons, bordures, couleurs) avec un script canvas dans Chrome headless.
- **Couleurs alignées sur la maquette**, qui diffère de la charte écrite : fond `#FCF6F1` (hero `#FBF4EC`) au lieu de `#F2EBDD`, rouge `#B11E1D` au lieu de `#B83232`, texte secondaire `#3A3431`. Contrastes mesurés : rouge sur fond 6,3:1, blanc sur rouge 6,6:1, texte secondaire 11:1 (AA respecté partout).
- **Polices** : Manrope pour les titres **et** le texte courant (autorisé par la charte, plus fidèle à la maquette). Inter a été retirée (dépendance devenue inutile).
- **Textes du hero** : la ligne de libellé de la maquette contient une coquille (« FRONTEN D ») : intégrée en « FRONTEND ».

### Différences volontaires avec la maquette

| Élément                                                                   | Raison                                                                                                                                                                                                                                                        |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Icônes ↗ des cartes, « Voir tous les projets », bouton « En savoir plus » | **Masqués tant qu'aucune URL n'existe** : la doc interdit les liens factices (`02_HOME_PAGE_SPEC.md`). Ils s'affichent automatiquement dès qu'on renseigne `href` dans `src/data/projects.ts` ou `allProjectsHref` / `aboutMoreHref` dans `src/data/site.ts`. |
| Logo GSAP vert (wordmark) au lieu de l'icône rouge empilée                | L'icône de la maquette n'est pas le logo de GSAP ; la charte demande les logos officiels.                                                                                                                                                                     |
| Logo Vite violet uni au lieu du dégradé                                   | Tracé officiel monochrome (simple-icons) ; le logo multicolore n'est pas disponible sans asset supplémentaire.                                                                                                                                                |
| FR / EN : langue active en gras et soulignée                              | Indicateur d'état non fondé sur la couleur seule (WCAG).                                                                                                                                                                                                      |
| Bouton « En savoir plus » : 44 px de haut min.                            | Cible tactile minimale (doc 03) au lieu de 38 px.                                                                                                                                                                                                             |
| Footer « Contact »                                                        | Absent de la maquette, mais nécessaire à l'ancre « Contact » de la navigation. Coordonnées « à venir » (aucune donnée inventée).                                                                                                                              |

## 4. Comparaison visuelle

Méthode : capture pleine page à **1024 px** de large (largeur de la maquette, pour une comparaison au pixel), après défilement réel de la page (pour déclencher les révélations), puis comparaison côte à côte et zone par zone avec la maquette.

> Note d'outillage : la toute première capture (mode « virtual time » de Chrome headless) n'avait pas déclenché les révélations au défilement. Après vérification (opacité 1 une fois la page parcourue, aucune erreur), il s'agissait d'une limite de l'outil, pas d'un bug. L'outil a été remplacé par un pilotage Chrome DevTools qui fait défiler la page ; la capture de l'itération 1 a été refaite **sans modification du code**.

### Itération 1 — `docs/screenshots/sprint-1-iteration-1.png`

Différences identifiées :

1. Le fond du header masquait le haut de l'illustration (branche de cerisier coupée).
2. Navigation décalée de ~11 px vers la droite.
3. Libellé du hero en police mono fine au lieu d'une sans-serif grasse.
4. Texte courant en Inter, moins géométrique que la maquette.
5. Bouton principal trop large (205 px au lieu de 192), bordure du bouton secondaire trop épaisse.
6. « Boxing Club de la Plaine » sur une ligne au lieu de deux.
7. Titre « Entre le Sénégal » trop resserré ; vagues trop basses.
8. Logos de la stack décalés de ~8 px vers la gauche.

### Itération 2 — `docs/screenshots/sprint-1-iteration-2.png`

Corrections : header transparent sur desktop et hero remonté dessous ; libellé en Manrope ExtraBold espacé ; Manrope pour le texte courant ; boutons redimensionnés ; titre des cartes limité en largeur (retour à la ligne équilibré) ; interlettrage du titre À propos ; motif recadré ; stack réalignée.

Résultat : illustration complète, libellé et stack conformes. Restait : navigation trop à gauche (sur-correction, 361 px au lieu de 372), texte courant trop fin (retours à la ligne différents dans l'À propos), titres de cartes et du À propos légèrement trop petits, métadonnées trop espacées.

### Itération 3 — `docs/screenshots/sprint-1-iteration-3.png`

Corrections : navigation repositionnée (Accueil / Projets / À propos / Contact à 372 / 464 / 556 / 659 px, contre 372 / 463 / 554 / 660 dans la maquette) ; texte courant en graisse 500 ; titres de cartes à 21 px ; titre À propos à 45,5 px ; séparateurs resserrés. Puis corrections responsive (voir § 5).

Résultat : composition, positions, tailles de titres et retours à la ligne identiques à la maquette à quelques pixels près. Les écarts restants sont ceux listés au § 3 (éléments liés à des URL absentes, logos officiels) et la qualité des images (§ 7).

## 5. Responsive

Captures dans `docs/screenshots/responsive/`, avec mesure automatique du scroll horizontal et des erreurs console.

| Résolution | Mise en page                                                                            | Scroll horizontal | Console |
| ---------- | --------------------------------------------------------------------------------------- | ----------------- | ------- |
| 1440 × 900 | Composition de la maquette à l'échelle 1,25, centrée ; illustration jusqu'au bord       | Aucun             | Propre  |
| 1280 × 800 | Composition de la maquette à l'échelle 1,25                                             | Aucun             | Propre  |
| 768 × 1024 | Composition de la maquette à l'échelle 0,75 ; textes jamais sous 16 px                  | Aucun             | Propre  |
| 390 × 844  | Mobile : hero texte puis illustration, cartes empilées, À propos empilé, stack en 3 + 2 | Aucun             | Propre  |
| 375 × 812  | Idem                                                                                    | Aucun             | Propre  |

Problèmes trouvés puis corrigés pendant cette passe :

- Stack en 5 colonnes serrées à 375 px (« TypeScript » collé à « Tailwind CSS ») → 3 colonnes sous 768 px.
- Vagues décoratives sous le texte À propos sur mobile → masquées sous 768 px.
- « Portfolio expérimental » coupé entre ses deux mots à 768 px → métadonnées insécables.
- Illustration coupée au bord du conteneur au-delà de 1280 px → elle rejoint le bord de l'écran.
- Débordements horizontaux introduits par ces corrections (syntaxe `calc` invalide, espacement de la stack appliqué au desktop) → détectés par la mesure automatique, corrigés et revérifiés.

Vérifié aussi : menu mobile ouvert (4 liens visibles, `aria-expanded="true"`) ; mode « réduire les animations » (défilement non animé, contenu visible ; seul message console : l'avertissement informatif de Framer Motion en développement, qui confirme la prise en compte de la préférence).

## 6. Tests

| Vérification              | Résultat                                                                             |
| ------------------------- | ------------------------------------------------------------------------------------ |
| TypeScript (`typecheck`)  | ✅ 0 erreur                                                                          |
| ESLint (`lint`)           | ✅ 0 erreur (une erreur `set-state-in-effect` corrigée dans le code, pas désactivée) |
| Prettier (`format:check`) | ✅                                                                                   |
| Vitest (`test`)           | ✅ **48 / 48** (10 fichiers)                                                         |
| Couverture                | Instructions 98,1 % · Branches 93,2 % · Fonctions 100 % · Lignes 99,3 %              |
| Build (`build`)           | ✅ JS 125,8 ko gzip · CSS 10,2 ko gzip · NotFound et animations en chunks séparés    |
| Build servi (`preview`)   | ✅ 5 images chargées, favicon et robots.txt en 200, aucune erreur console            |

Nouveaux tests : contenu des sections, cartes projet (avec et sans URL), sélecteur de langue (traduction réelle, `lang` du document, mémorisation, valeur invalide), section active au défilement, nom accessible des CTA avec flèche.

Les tests ont révélé et fait corriger un **défaut d'accessibilité réel** : le nom accessible du titre « Entre le Sénégal / et le Japon. » collait « Sénégalet » (le `<br>` ne produit pas d'espace pour les lecteurs d'écran) ; même problème sur le nom des liens de cartes.

## 7. Problèmes rencontrés

- **Assets originaux absents** : aucune illustration, photo ni capture de projet n'était fournie. Les visuels ont été **extraits de la maquette** (seule source disponible) :
  - illustration du hero : découpée, textes de la maquette effacés, fondu sur le bord gauche ;
  - couvertures de projets : titre et icône ↗ incrustés retirés par interpolation — de légères traces restent visibles sous le dégradé sombre ;
  - photo À propos : découpée.
- **Résolution limitée** : la maquette fait 1024 px de large ; les images sont agrandies d'environ 1,25× à partir de 1280 px et paraissent un peu douces. Un petit rectangle plus clair est visible en haut à droite de l'illustration à 1440 px (zone où le sélecteur FR/EN de la maquette a été effacé).
- **Couvertures de projets provisoires** : ce sont les images d'ambiance de la maquette, pas des captures des projets réels.
- **Aucune URL** pour les projets, la page « tous les projets » et la page « En savoir plus » : les éléments correspondants sont masqués (voir § 3).
- **Traduction anglaise** rédigée par l'agent : à relire par Tammiat.
- **Pas d'outil de navigateur intégré** : les captures ont été faites avec Chrome headless piloté par script (aucune dépendance ajoutée au projet).

## 8. État final

**Partiellement intégrée — fidèle sur la composition, en attente des assets et liens réels.**

La structure, les proportions, la typographie, les couleurs, les espacements et le responsive reproduisent fidèlement la maquette (écarts de quelques pixels à 1024 px). La page n'est pas finalisée pour la mise en ligne tant que :

1. les visuels haute définition (illustration, couvertures réelles des projets, photo) ne sont pas fournis ;
2. les URL des projets et des pages « Voir tous les projets » / « En savoir plus » ne sont pas connues (ce qui fera apparaître les icônes ↗ et les deux liens manquants) ;
3. les textes (intitulé, description, À propos, traduction anglaise) et les coordonnées de contact ne sont pas validés.

## 9. Screenshots

- Itérations (1024 px) :
  - `docs/screenshots/sprint-1-iteration-1.png`
  - `docs/screenshots/sprint-1-iteration-2.png`
  - `docs/screenshots/sprint-1-iteration-3.png` (finale)
- Responsive (finales) :
  - `docs/screenshots/responsive/sprint-1-1440x900.png`
  - `docs/screenshots/responsive/sprint-1-1280x800.png`
  - `docs/screenshots/responsive/sprint-1-768x1024.png`
  - `docs/screenshots/responsive/sprint-1-390x844.png`
  - `docs/screenshots/responsive/sprint-1-375x812.png`
