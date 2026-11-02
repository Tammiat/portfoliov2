# 04 — Accessibilité (objectif WCAG 2.2 AA)

L'accessibilité est une exigence de conception et de développement, pas une passe de finition.

## Contraste

- Texte courant : ratio minimum 4.5:1.
- Grand texte : ratio minimum 3:1.
- Composants UI et éléments graphiques nécessaires : minimum 3:1.
- Vérifier toutes les combinaisons réellement utilisées, notamment rouge sur ivoire et gris secondaire.
- Ne pas supposer qu'une combinaison est accessible sans mesure.

## Structure sémantique

- Un seul `h1`.
- Hiérarchie de titres logique.
- Utiliser `header`, `nav`, `main`, `section`, `footer`.
- Ajouter un lien d'évitement `Aller au contenu`.
- Les boutons déclenchent une action ; les liens naviguent.
- Éviter les éléments interactifs imbriqués.

## Clavier

- Tous les contrôles utilisables au clavier.
- Ordre de tabulation logique.
- Focus visible et non masqué par un header sticky.
- Aucun piège clavier.
- Menus fermables avec Escape ; focus rendu au déclencheur.
- Ne pas supprimer `outline` sans alternative.

## Images

- Alt utile pour les images informatives.
- `alt=""` pour les images décoratives.
- Ne pas placer de texte important uniquement dans une image.
- Ne pas présenter un projet uniquement par une capture sans description textuelle.

## Mouvement

- Respecter `prefers-reduced-motion: reduce`.
- Aucune animation indispensable à la compréhension.
- Éviter clignotements, mouvements continus et parallaxes agressives.
- Transitions courtes et discrètes.
- Pas de vidéo automatique avec son.

## Cibles tactiles et formulaires

- Cible recommandée : au moins 44 × 44 CSS px.
- Espacer les zones cliquables.
- Associer explicitement les labels aux champs si un formulaire est ajouté.

## Langue

- `<html lang="fr">` par défaut.
- Pour l'anglais, changer aussi la langue du document (`lang="en"`) et traduire réellement le contenu.
- Ne pas afficher de sélecteur FR/EN factice.

## Zoom et responsive

- Contenu utilisable à 200 % de zoom.
- Pas de perte de contenu à 320 CSS px.
- Pas de scroll horizontal injustifié.
- Pas de troncature qui fait perdre le sens.

## Tests

- Navigation clavier seule.
- VoiceOver ou NVDA sur les sections principales.
- Zoom 200 %.
- Largeurs 320, 375, 768, 1024 et 1440px.
- Préférence de réduction des animations.
- Contrastes des textes, liens, boutons et focus.
- Lighthouse et axe DevTools comme aides, sans les considérer comme preuve suffisante.

## Definition of Done

Une section est terminée si sa sémantique est correcte, ses contrôles sont utilisables au clavier, le focus est visible, les images ont des alt appropriés, les contrastes sont vérifiés et le rendu reste utilisable sur mobile et avec zoom.
