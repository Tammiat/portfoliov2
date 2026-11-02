# 02 — Spécification de la page d'accueil

## Objectif

Présenter rapidement Tammiat, donner accès à ses projets et permettre à un recruteur, client ou collaborateur de comprendre son profil en quelques secondes. La page doit rester aérée.

## 1. Header

Contenu :

- Logo texte : `Tammiat-folio`.
- Navigation : `Accueil`, `Projets`, `À propos`, `Contact`.
- Sélecteur `FR / EN` uniquement si la traduction anglaise est réellement disponible.

Comportement :

- Header simple, fond ivoire.
- Navigation clavier complète.
- Lien actif identifiable autrement que par la couleur seule (soulignement ou indicateur).
- Sur mobile, menu compact accessible si nécessaire : bouton nommé, `aria-expanded`, fermeture avec Escape et gestion du focus.
- Logo renvoyant en haut de page.

## 2. Hero

Disposition desktop : texte à gauche, illustration à droite, avec un grand espace négatif. L'illustration représente une femme noire dans une composition éditoriale avec soleil rouge et quelques références japonaises/sénégalaises.

Contenu proposé à valider :

- Label : `UI / UX DESIGNER & FRONTEND`
- H1 : `Designing useful & stylish experiences.`
- Description : `Je conçois des interfaces modernes, accessibles et centrées sur l’utilisateur.`
- CTA principal : `Voir mes projets`
- CTA secondaire : `À propos`

Ne pas considérer l'intitulé professionnel comme définitif avant validation par Tammiat.

Comportement :

- CTA principal vers `#projets`.
- CTA secondaire vers `#apropos`.
- Un seul H1 sur la page.
- Texte alternatif descriptif si l'illustration apporte une information ; `alt=""` si elle est purement décorative.

## 3. Projets sélectionnés

Titre : `Projets sélectionnés`.

Trois cartes maximum. Chaque carte comprend :

- Image de couverture.
- Nom du projet.
- Description courte.
- Stack ou catégorie confirmée.
- Lien vers une étude de cas ou un site réellement disponible.

Les projets visibles dans la maquette (Racine Eyewear, Boxing Club de la Plaine, Tokyo Underground) sont des exemples de mise en page : ne pas les attribuer à Tammiat sans confirmation.

Accessibilité :

- Carte cliquable avec structure HTML valide.
- Nom du projet inclus dans le texte du lien.
- Pas de flèche seule comme nom accessible.
- Ne pas révéler une information essentielle uniquement au survol.

## 4. À propos

Disposition en deux colonnes : visuel éditorial à gauche, texte à droite.

Proposition provisoire :

- Label : `À propos`
- Titre : `Entre le Sénégal et le Japon.`
- Texte : `Développeuse frontend passionnée par le design, la culture visuelle et les expériences numériques qui ont du sens.`
- CTA : `En savoir plus`, uniquement si une page ou section détaillée existe.

Réécrire le texte à partir du parcours réel de Tammiat avant publication.

## 5. Stack principale

Afficher uniquement les technologies réellement utilisées ou maîtrisées par Tammiat. La maquette suggère React, TypeScript, Tailwind CSS, Vite et GSAP : liste à confirmer.

Chaque icône doit être accompagnée du nom écrit. Sur mobile, utiliser une grille ou une liste souple.

## 6. Footer

Rester simple :

- `Tammiat-folio`.
- Email ou lien de contact validé.
- Liens sociaux uniquement si les URL sont fournies.
- Année de copyright dynamique.

## Responsive

- Desktop : hero deux colonnes, projets trois colonnes, about deux colonnes.
- Tablette : réduire les espacements sans rendre le texte trop étroit.
- Mobile : texte puis illustration, projets en une colonne, stack en grille/liste.
- Aucun scroll horizontal à 320px.
- CTA confortables au toucher.

## Hors périmètre initial

Blog, 3D, curseur personnalisé, préloader obligatoire, animations décoratives complexes et formulaire backend.
