# 05 — Guidelines techniques

## Stack recommandée

- React.
- Vite.
- TypeScript strict.
- Tailwind CSS.
- Framer Motion uniquement pour les animations utiles.
- Lucide React pour les icônes.
- Vitest + Testing Library pour les tests.

Ne pas ajouter GSAP, Three.js ou une autre bibliothèque dans la première itération sans besoin démontré.

## Architecture indicative

```text
src/
  app/
    App.tsx
  components/
    layout/
      SiteHeader.tsx
      SiteFooter.tsx
      SkipLink.tsx
    sections/
      HeroSection.tsx
      SelectedProjectsSection.tsx
      AboutSection.tsx
      MainStackSection.tsx
    ui/
      Button.tsx
      SectionHeading.tsx
      ProjectCard.tsx
  data/
    projects.ts
    skills.ts
  assets/
    images/
    illustrations/
  styles/
    globals.css
  types/
    portfolio.ts
```

Adapter cette structure au dépôt existant. Ne pas réorganiser massivement un projet fonctionnel sans raison.

## Conventions

- Composants fonctionnels petits et lisibles.
- TypeScript strict ; éviter `any`.
- Données projets/compétences séparées du JSX.
- Réutiliser les composants quand cela simplifie réellement le code.
- Noms de composants en PascalCase.
- Pas de styles inline répétitifs.
- Pas d'images distantes non validées en production.

## Animations

- Entrées discrètes, non nécessaires à la compréhension.
- Pas d'animation de chaque élément à chaque scroll.
- Préférer opacity/transform.
- Respecter `prefers-reduced-motion`.
- Pas de scroll hijacking ni de curseur personnalisé.

## Performance

- Images AVIF ou WebP, dimensions adaptées.
- Définir `width`/`height` ou `aspect-ratio` pour limiter le CLS.
- Lazy-load sous la ligne de flottaison.
- Ne pas lazy-loader l'image principale du hero si elle est l'élément LCP.
- Limiter les polices et graisses.
- Éviter les dépendances lourdes sans justification.

## SEO

- Titre : `Tammiat-folio — Portfolio`.
- Meta description fondée sur son vrai profil.
- Un seul H1.
- Open Graph à ajouter quand les contenus définitifs sont disponibles.
- Favicon et image de partage après validation de l'identité.

## Tests

- Tests des composants interactifs.
- Tests des liens et ancres.
- Lint, typecheck et build avant livraison.

## Plan d'implémentation

1. Inspecter le dépôt et ses conventions.
2. Configurer uniquement les dépendances manquantes.
3. Créer les tokens CSS et styles globaux.
4. Construire header et sections avec contenu temporaire.
5. Intégrer les visuels validés et appliquer la charte.
6. Vérifier responsive et accessibilité.
7. Exécuter tests, lint, typecheck et build.

## Règle pour l'agent

Avant toute modification, inspecter le projet et produire un court état des lieux. Préserver les outils existants. Ne pas remplacer le contenu réel par les exemples de la maquette.
