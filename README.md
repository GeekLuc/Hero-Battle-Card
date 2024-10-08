# Hero-Battle-Card
An html game made with Javascript made in 2017 for an open day at my school.  

HTML/Javascript part made by me, Luca Rougefort

Bootstrap/CSS part done by another student

https://geekluc.itch.io/ukulele-hero-battle-card

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

# Réinitialisation des Decks 
Les tableaux deck et deckEnnemi sont réinitialisés avec les mêmes cartes.

# Réinitialisation des Mains et des Cartes en Jeu
Les tableaux main, carteJeu, carteJeuEnnemi, cimetiere, copieCarteJeu, et copieCarteJeuEnnemi sont vidés.

# Réinitialisation des Points de Vie et des Attaques 
Les points de vie (PvHero et PvEnnemi) et les attaques restantes (attaqueRestanteVersHero et attaqueRestanteVersEnnemi) sont réinitialisés.

# Réinitialisation de l'Interface Utilisateur 
Les éléments HTML sont mis à jour pour afficher l'écran de jeu et masquer les écrans de victoire et de défaite.

# Mélange et Distribution des Cartes 
La fonction Shuffle est appelée pour mélanger les decks du joueur et de l'ennemi.
La fonction Distribuer est appelée pour distribuer 5 cartes au joueur.
La fonction DistribuerEnnemi est appelée pour distribuer 1 carte à l'ennemi.


# Mise à Jour de l'État du Jeu
La fonction EnvoiCombatEnnemi est appelée pour gérer l'envoi des cartes de l'ennemi en combat.
Les fonctions AfficherCarteCombat et AfficherCarteCombatEnnemi sont appelées pour afficher les cartes en combat pour le joueur et l'ennemi.
La fonction afficherPvHero est appelée pour afficher les points de vie du héros.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

#Variables Globales
deck : An array containing cards. Each card is represented by an array with an ID, two numeric values (health points AND attack points), and a name.

main : An array representing the player’s hand.

carteJeu : An array representing the cards currently in play for the player.

deckEnnemi : An array similar to deck, but for the enemy.

carteJeuEnnemi : An array representing the cards currently in play for the enemy.

cimetiere : An array to store the cards that have been used or eliminated.

copieCarteJeu et copieCarteJeuEnnemi : Copies of the cards in play for the player and the enemy, respectively.

PvHero et PvEnnemi : The health points of the hero and the enemy, initialized to 20.

attaqueRestanteVersHero et attaqueRestanteVersEnnemi : Variables to track the remaining attacks on the hero and the enemy.

texteAAfficher : A string to display messages on the screen.

Initialisation de l'Interface Utilisateur
The HTML elements with the IDs ecran_win, ecran_jeu, and ecran_over are manipulated to show or hide different sections of the user interface.

# Fonction Rejouer
This function resets the game by resetting all global variables and redisplaying the user interface. Here are the detailed steps:

# Réinitialisation des Decks
The arrays deck and deckEnnemi are reset with the same cards.

# Réinitialisation des Mains et des Cartes en Jeu
The arrays main, carteJeu, carteJeuEnnemi, cimetiere, copieCarteJeu, and copieCarteJeuEnnemi are emptied.

# Réinitialisation des Points de Vie et des Attaques
The health points (PvHero and PvEnnemi) and the remaining attacks (attaqueRestanteVersHero and attaqueRestanteVersEnnemi) are reset.

# Réinitialisation de l'Interface Utilisateur
The HTML elements are updated to show the game screen and hide the win and loss screens.

# Mélange et Distribution des Cartes
The function Shuffle is called to shuffle the player’s and enemy’s decks. The function Distribuer is called to deal 5 cards to the player. The function DistribuerEnnemi is called to deal 1 card to the enemy.

# Mise à Jour de l'État du Jeu
The function EnvoiCombatEnnemi is called to handle sending the enemy’s cards into combat. The functions AfficherCarteCombat and AfficherCarteCombatEnnemi are called to display the cards in combat for the player and the enemy. The function afficherPvHero is called to display the hero’s health points.
