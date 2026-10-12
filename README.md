# SkillUp — MVP de micro-apprentissage

Prototype PWA en français pour salariés et personnes en reconversion. Aucun compte, paiement ou appel d'API IA n'est requis dans cette première version.

## Fonctionnalités incluses
- Accueil avec défi du jour et tableau de bord
- Parcours « Maîtriser l'IA au travail » : 5 leçons textuelles et quiz
- Corrections immédiates et explications
- XP, niveaux, série de jours et progression
- Sauvegarde locale via `localStorage`
- Interface responsive mobile/ordinateur
- Manifest PWA et cache hors ligne via service worker

## Lancer le prototype
Pour un simple aperçu, ouvre `index.html` dans un navigateur récent. Pour tester l'installation PWA et le mode hors ligne, il faut servir les fichiers via HTTPS ou un serveur local, car les service workers ne fonctionnent pas depuis `file://`.

## Limites connues de cette première version
- Les parcours « Emploi & évolution » et « Gestion de projet » sont des cartes de présentation, pas encore des cours.
- La progression est stockée sur l'appareil : elle ne se synchronise pas entre appareils.
- Aucun compte, backend, paiement, analytique ou tuteur IA en direct.
- L'icône PWA personnalisée reste à ajouter.
- Le contenu pédagogique doit être relu et validé avant toute utilisation commerciale.

## Modèle de données proposé pour la prochaine version
### users
- id (uuid, PK)
- display_name (text)
- created_at (timestamp)

### learning_paths
- id (text, PK)
- title (text)
- description (text)
- category (text)
- level (text)
- published (boolean)

### lessons
- id (text, PK)
- path_id (FK learning_paths.id)
- position (integer)
- title (text)
- intro (text)
- body (jsonb)
- takeaway (text)
- estimated_minutes (integer)
- status (text: draft/review/published)

### quiz_questions
- id (text, PK)
- lesson_id (FK lessons.id)
- question (text)
- options (jsonb)
- correct_option (integer)
- explanation (text)

### user_progress
- id (uuid, PK)
- user_id (FK users.id)
- lesson_id (FK lessons.id)
- completed_at (timestamp)
- quiz_passed (boolean)
- xp_earned (integer)

### daily_activity
- id (uuid, PK)
- user_id (FK users.id)
- activity_date (date)
- xp_earned (integer)

## Plan de travail adapté à 5 h/semaine
1. Semaine 1 : faire tester le prototype à 5 personnes et noter les incompréhensions.
2. Semaine 2 : améliorer la première leçon et la navigation mobile.
3. Semaine 3 : préparer 10 à 15 leçons supplémentaires et les relire.
4. Semaine 4 : décider si les utilisateurs justifient l'ajout de comptes et d'une base de données.
5. Ensuite : tester une offre Premium seulement après des retours d'usage réels.
