# Hero-Battle-Card
An html game made with Javascript made in 2017 for an open day at my school.  

HTML/Javascript part made by me, Luca Rougefort

Bootstrap/CSS part done by another student

# Variables Globales
deck : Un tableau contenant des cartes. Chaque carte est représentée par un tableau avec un identifiant, deux valeurs numériques (des points de vie ET des points d'attaque), et un nom.

main : Un tableau représentant la main du joueur.

carteJeu : Un tableau représentant les cartes actuellement en jeu pour le joueur.

deckEnnemi : Un tableau similaire à deck, mais pour l'ennemi.

carteJeuEnnemi : Un tableau représentant les cartes actuellement en jeu pour l'ennemi.

cimetiere : Un tableau pour stocker les cartes qui ont été utilisées ou éliminées.

copieCarteJeu et copieCarteJeuEnnemi : Des copies des cartes en jeu pour le joueur et l'ennemi, respectivement.

PvHero et PvEnnemi : Les points de vie du héros et de l'ennemi, initialisés à 20.

attaqueRestanteVersHero et attaqueRestanteVersEnnemi : Variables pour suivre les attaques restantes vers le héros et l'ennemi.

texteAAfficher : Une chaîne de caractères pour afficher des messages à l'écran.

Initialisation de l'Interface Utilisateur

Les éléments HTML avec les identifiants ecran_win, ecran_jeu, et ecran_over sont manipulés pour afficher ou masquer différentes sections de l'interface utilisateur.

# Fonction Rejouer
Cette fonction réinitialise le jeu en réinitialisant toutes les variables globales et en réaffichant l'interface utilisateur. Voici les étapes détaillées :


# Réinitialisation des Decks : 
Les tableaux deck et deckEnnemi sont réinitialisés avec les mêmes cartes.


# Réinitialisation des Mains et des Cartes en Jeu : 
Les tableaux main, carteJeu, carteJeuEnnemi, cimetiere, copieCarteJeu, et copieCarteJeuEnnemi sont vidés.


# Réinitialisation des Points de Vie et des Attaques : Les points de vie (PvHero et PvEnnemi) et les attaques restantes (attaqueRestanteVersHero et attaqueRestanteVersEnnemi) sont réinitialisés.
Réinitialisation de l'Interface Utilisateur : Les éléments HTML sont mis à jour pour afficher l'écran de jeu et masquer les écrans de victoire et de défaite.
Mélange et Distribution des Cartes :
La fonction Shuffle est appelée pour mélanger les decks du joueur et de l'ennemi.
La fonction Distribuer est appelée pour distribuer 5 cartes au joueur.
La fonction DistribuerEnnemi est appelée pour distribuer 1 carte à l'ennemi.
Mise à Jour de l'État du Jeu :
La fonction EnvoiCombatEnnemi est appelée pour gérer l'envoi des cartes de l'ennemi en combat.
Les fonctions AfficherCarteCombat et AfficherCarteCombatEnnemi sont appelées pour afficher les cartes en combat pour le joueur et l'ennemi.
La fonction afficherPvHero est appelée pour afficher les points de vie du héros.
Conclusion
Ce script initialise et réinitialise un jeu de cartes, gère les états des cartes et des points de vie, et met à jour l'interface utilisateur en conséquence. Les fonctions Shuffle, Distribuer, DistribuerEnnemi, EnvoiCombatEnnemi, AfficherCarteCombat, AfficherCarteCombatEnnemi, et afficherPvHero ne sont pas définies dans l'extrait fourni, mais elles jouent un rôle crucial dans la logique du jeu.
