# Tammiat-folio

Portfolio de Tammiat — direction artistique **Nippon × Teranga — Modern Heritage**.

> Statut : Sprint 0 (fondation technique). L'interface graphique et les contenus validés arrivent au Sprint 1.

## Prérequis

- Node.js ≥ 22.12 (version de référence : 24, voir `.nvmrc`)
- npm ≥ 10

## Démarrage

```bash
npm install
cp .env.example .env.local   # optionnel
npm run dev
```

## Scripts

| Commande                | Rôle                                          |
| ----------------------- | --------------------------------------------- |
| `npm run dev`           | Serveur de développement                      |
| `npm run build`         | Vérification TypeScript + build de production |
| `npm run preview`       | Prévisualisation du build                     |
| `npm run test`          | Tests (Vitest, une exécution)                 |
| `npm run test:watch`    | Tests en mode watch                           |
| `npm run test:coverage` | Rapport de couverture (`coverage/`)           |
| `npm run lint`          | ESLint (dont règles d'accessibilité JSX)      |
| `npm run typecheck`     | Vérification TypeScript                       |
| `npm run format`        | Formatage Prettier                            |
| `npm run format:check`  | Vérification du formatage                     |

## Stack

React 19 · Vite 8 · TypeScript 6 (strict) · Tailwind CSS 4 · React Router 8 · Framer Motion · Lucide React · Vitest 5 + Testing Library.

## Structure

```text
src/
  app/          Racine de l'application (App.tsx) et routes (router.tsx)
  components/
    layout/     Header, footer, lien d'évitement, layout racine
    sections/   Sections de page (Sprint 1)
    ui/         Composants d'interface réutilisables
  pages/        Pages routées
  data/         Données séparées du JSX (navigation, métadonnées…)
  hooks/        Hooks React
  lib/          Utilitaires sans React
  styles/       globals.css : tokens du design system + styles de base
  types/        Types partagés
  assets/       Images, illustrations, icônes importées par le code
public/         Fichiers servis tels quels (favicon, robots.txt, images)
tests/          Tests (setup/, utils/, puis miroir de src/)
docs/           Spécifications du projet (source de vérité) et maquette
```

L'alias `@/` pointe vers `src/`.

## Design system

Les tokens (couleurs, typographies, espacements, rayons, breakpoints, transitions) sont définis dans [`src/styles/globals.css`](src/styles/globals.css) via `@theme` de Tailwind 4. Ils sont disponibles à la fois :

- en classes Tailwind : `bg-paper`, `text-ink`, `font-heading`, `rounded-card`, `max-w-content`…
- en variables CSS : `var(--color-vermilion)`, `var(--radius-button)`…

La palette Tailwind par défaut est désactivée : seules les couleurs de la charte existent.

⚠️ La couleur **Terre** (`clay`, #C28A52) a un contraste de 2.51:1 sur l'ivoire : usage décoratif uniquement.

## Documentation

- Spécifications : [`docs/`](docs/README.md)
- Décisions techniques : [`docs/DECISIONS.md`](docs/DECISIONS.md)
