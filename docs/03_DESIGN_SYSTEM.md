# 03 — Design system

## Tokens CSS

```css
:root {
  --color-paper: #f2ebdd;
  --color-ink: #171717;
  --color-vermilion: #b83232;
  --color-clay: #c28a52;
  --color-white: #fffdf8;
  --color-muted: #6b655d;

  --font-heading: 'Manrope', Arial, sans-serif;
  --font-body: 'Inter', Arial, sans-serif;
  --font-label: 'IBM Plex Mono', monospace;

  --content-max: 1440px;
  --radius-card: 14px;
  --radius-button: 8px;
}
```

## Boutons

Primary :

- Fond rouge `--color-vermilion`, texte blanc doux.
- Hauteur minimale 44px.
- Hover discret.
- Focus très visible.

Secondary :

- Fond transparent ou blanc doux.
- Bordure et texte encre.

## Liens

- Encre par défaut.
- Rouge pour les accents et l'état actif, jamais comme seul indicateur.
- Soulignement visible au survol et au focus.
- Zone interactive confortable.

## Cartes projet

- Ratio image 4:3 ou 16:10 selon les médias.
- Rayon 14px, bordure subtile.
- Titre et résumé toujours visibles.
- Pas de contenu essentiel révélé uniquement au hover.

## Sections

Chaque section possède un titre clair, un espacement cohérent, une largeur de lecture maîtrisée et une structure sémantique (`section`, `header`, `h2`).

## Icônes

Utiliser une famille cohérente (Lucide, par exemple). Icônes décoratives masquées aux lecteurs d'écran. Toute icône interactive possède un nom accessible.

## États UI

Définir `default`, `hover`, `focus-visible`, `active` et `disabled` si nécessaire. Ne jamais supprimer l'outline sans remplacement visible.
