# 01 — Direction artistique

## Identité

**Tammiat-folio**  
**Nippon × Teranga — Modern Heritage**

Une rencontre contemporaine entre la sobriété graphique japonaise et la chaleur des matières, motifs et paysages sénégalais. Le résultat doit être élégant, humain et créatif, sans clichés touristiques ni accumulation de symboles culturels.

## Intention visuelle

- Minimalisme éditorial et généreux.
- Fond ivoire chaud, aspect papier.
- Typographie noire, contrastée et lisible.
- Rouge vermillon / terre cuite en accent.
- Illustration éditoriale d'une femme noire comme point focal du hero.
- Motifs japonais et sénégalais utilisés avec retenue.
- Cartes projets sobres, visuelles et faciles à parcourir.

## Palette officielle

| Token             | Couleur      | Hex       | Usage                       |
| ----------------- | ------------ | --------- | --------------------------- |
| `color-paper`     | Ivoire chaud | `#F2EBDD` | Fond principal              |
| `color-ink`       | Encre        | `#171717` | Texte principal, navigation |
| `color-vermilion` | Rouge        | `#B83232` | Accent, CTA, lien actif     |
| `color-clay`      | Terre        | `#C28A52` | Accent secondaire, motifs   |
| `color-white`     | Blanc doux   | `#FFFDF8` | Surfaces et cartes          |
| `color-muted`     | Gris chaud   | `#6B655D` | Texte secondaire            |

Ne pas ajouter de couleurs saturées sans validation. Les logos technologiques peuvent conserver leurs couleurs officielles, mais doivent toujours être accompagnés d'un libellé.

## Typographie

- Titres : Manrope ou Satoshi (si disponible et licence confirmée), graisse 700–800.
- Texte courant : Inter ou Manrope, graisse 400–500.
- Labels : IBM Plex Mono, graisse 500.
- Japonais éventuel : Noto Sans JP.
- Prévoir des fallbacks système.

## Échelle typographique indicative

- H1 desktop : `clamp(2.8rem, 5.5vw, 5rem)`, line-height proche de 1.
- H1 mobile : `clamp(2.4rem, 11vw, 3.4rem)`.
- H2 : `clamp(2rem, 3.5vw, 3rem)`.
- H3 : 1.25–1.5rem.
- Texte courant : 1–1.125rem, line-height 1.5–1.7.
- Labels : 0.75–0.875rem ; ne pas descendre sous 12px pour une information utile.

## Composition

- Largeur maximale indicative : 1440px.
- Gouttières : 48–64px desktop, 32px tablette, 20–24px mobile.
- Sections espacées généreusement.
- Trois colonnes projets sur grand écran, deux sur tablette si confortable, une sur mobile.
- Angles arrondis modérés, bordures fines, pas d'ombres lourdes.

## Motifs et références culturelles

Éléments possibles : soleil rouge abstrait, branches de sakura, motifs géométriques inspirés des textiles sénégalais, silhouettes architecturales, vagues ou lignes répétées.

Règles :

- Ne pas accumuler les motifs dans une même zone.
- Ne pas utiliser de symboles religieux ou sacrés comme décoration.
- Les éléments décoratifs ne doivent pas gêner la lecture.
- Masquer les décorations non informatives aux technologies d'assistance (`aria-hidden="true"`).

## Ton

Créatif, précis, accueillant et professionnel. Éviter le jargon inutile et les slogans génériques.
