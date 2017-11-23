Installation
===

1. Installer les packages nécessaires
  - à la racine du projet : 'npm install'
2. Lancer le serveur de développement
  - à la racine du projet : 'npm start' ou 'yarn start'

Une fenêtre s'ouvre automatiquement après le lancement du serveur. Si ce n'est pas le cas, allez à 'http://localhost:3000'.

Fonctionnement
===

- Il faut saisir un nom d'utilisateur avant de pouvoir sélectionner un quiz sur la page d'accueil.
- Une fois un quiz terminé, l'utilisateur est amené sur la page de résultats de ce quiz. Il peut d'ici retourner à la page d'accueil, recommencer ce quiz ou bien voir le détail de ses bonnes et mauvaises réponses. Chaque résultat de quiz est enregistrer du côté back-end.
- Sur la page d'accueil, lorsque l'on saisi un utilisateur qui a déjà joué, un bouton "statistics" apparaît automatiquement à droite du bandeau blanc supérieur, permettant de consulter tout les anciens résultats de cet utilisateur, classés par quiz et par date.

TODO
===

- Implémenter des composants plus élaborés pour les chargements de pages (et pas simplement un texte 'Loading...')
- Mettre un timeout sur les requêtes serveur, et considérer les requêtes comme des échecs au-delà (implementer un composant d'erreur générique)
- Gérer l'accessibilité (claviers et e-readers, focus, etc...)
- Tester sur Edge et IE (actuellement testé uniquement sur Firefox, Chrome et Opera)