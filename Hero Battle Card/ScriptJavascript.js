/*VARIABLES*/
	var deck = new Array(["01",15,15,"Barack Obama"],["02",20,20,"Vladimir Poutine"],["03",5,8,"Jacques Chirac"],["04",6,7,"Jean-Marie le Pen"],["05",9,12,"Angela merkel"],["06",3,7,"Emmanuel Macron"],["07",5,4,"Valérie Damidot"],["08",5,5,"François Hollande"],["09",2,5,"Jean Pierre Foucault"],["10",7,7,"Claude François"],["11",7,5,"Kim Jong Un"],["12",3,9,"Shy'm"],["13",6,6,"Bachar el Assad"],["14",1,4,"Yannick Noah"],["15",7,8,"Johny Hallyday"],["16",5,6,"Daft Punk"],["17",1,4,"Davud Guetta"],["18",2,4,"Adele"],["19",5,5,"Nicolas Sarlozy"],["20",5,6,"Marine le Pen"],["21",4,2,"Donald Trump"],["22",3,3,"Pitbull"],["23",2,3,"Marion Maréchal le Pen"],["24",6,6,"Benoit Hamon"],["25",6,2,"Matt Pokora"],["26",4,5,"Stromae"]);
	var main = new Array ();
	var carteJeu = new Array ();
	var deckEnnemi = new Array(["01",15,15,"Barack Obama"],["02",20,20,"Vladimir Poutine"],["03",5,8,"Jacques Chirac"],["04",6,7,"Jean-Marie le Pen"],["05",9,12,"Angela merkel"],["06",3,7,"Emmanuel Macron"],["07",5,4,"Valérie Damidot"],["08",5,5,"François Hollande"],["09",2,5,"Jean Pierre Foucault"],["10",7,7,"Claude François"],["11",7,5,"Kim Jong Un"],["12",3,9,"Shy'm"],["13",6,6,"Bachar el Assad"],["14",1,4,"Yannick Noah"],["15",7,8,"Johny Hallyday"],["16",5,6,"Daft Punk"],["17",1,4,"Davud Guetta"],["18",2,4,"Adele"],["19",5,5,"Nicolas Sarlozy"],["20",5,6,"Marine le Pen"],["21",4,2,"Donald Trump"],["22",3,3,"Pitbull"],["23",2,3,"Marion Maréchal le Pen"],["24",6,6,"Benoit Hamon"],["25",6,2,"Matt Pokora"],["26",4,5,"Stromae"]);
	var carteJeuEnnemi = new Array ();
	var cimetiere = new	Array ();
	var copieCarteJeu= new Array ();
	var copieCarteJeuEnnemi= new Array ();
	var PvHero=20;
	var PvEnnemi=20;
	var attaqueRestanteVersHero=0;
	var attaqueRestanteVersEnnemi=0;
	var texteAAfficher="";
	document.getElementById("ecran_win").style.display = 'none';
	document.getElementById("ecran_jeu").style.display = 'block';
	document.getElementById("ecran_over").style.display = 'none';

/*FONCTIONS*/
function Rejouer(){
	deck = [["01",15,15,"Barack Obama"],["02",20,20,"Vladimir Poutine"],["03",5,8,"Jacques Chirac"],["04",6,7,"Jean-Marie le Pen"],["05",9,12,"Angela merkel"],["06",3,7,"Emmanuel Macron"],["07",5,4,"Valérie Damidot"],["08",5,5,"François Hollande"],["09",2,5,"Jean Pierre Foucault"],["10",7,7,"Claude François"],["11",7,5,"Kim Jong Un"],["12",3,9,"Shy'm"],["13",6,6,"Bachar el Assad"],["14",1,4,"Yannick Noah"],["15",7,8,"Johny Hallyday"],["16",5,6,"Daft Punk"],["17",1,4,"Davud Guetta"],["18",2,4,"Adele"],["19",5,5,"Nicolas Sarlozy"],["20",5,6,"Marine le Pen"],["21",4,2,"Donald Trump"],["22",3,3,"Pitbull"],["23",2,3,"Marion Maréchal le Pen"],["24",6,6,"Benoit Hamon"],["25",6,2,"Matt Pokora"],["26",4,5,"Stromae"]];
	main = [];
	carteJeu = [];
	deckEnnemi = [["01",15,15,"Barack Obama"],["02",20,20,"Vladimir Poutine"],["03",5,8,"Jacques Chirac"],["04",6,7,"Jean-Marie le Pen"],["05",9,12,"Angela merkel"],["06",3,7,"Emmanuel Macron"],["07",5,4,"Valérie Damidot"],["08",5,5,"François Hollande"],["09",2,5,"Jean Pierre Foucault"],["10",7,7,"Claude François"],["11",7,5,"Kim Jong Un"],["12",3,9,"Shy'm"],["13",6,6,"Bachar el Assad"],["14",1,4,"Yannick Noah"],["15",7,8,"Johny Hallyday"],["16",5,6,"Daft Punk"],["17",1,4,"Davud Guetta"],["18",2,4,"Adele"],["19",5,5,"Nicolas Sarlozy"],["20",5,6,"Marine le Pen"],["21",4,2,"Donald Trump"],["22",3,3,"Pitbull"],["23",2,3,"Marion Maréchal le Pen"],["24",6,6,"Benoit Hamon"],["25",6,2,"Matt Pokora"],["26",4,5,"Stromae"]];
	carteJeuEnnemi = [];
	cimetiere = [];
	copieCarteJeu= [];
	copieCarteJeuEnnemi= [];
	PvHero=20;
	PvEnnemi=20;
	attaqueRestanteVersHero=0;
	attaqueRestanteVersEnnemi=0;
	texteAAfficher="";
	cimetiere=[];
	document.getElementById("ecran_win").style.display = 'none';
	document.getElementById("ecran_jeu").style.display = 'block';
	document.getElementById("ecran_over").style.display = 'none';
	Shuffle(deck);
	Distribuer(5); //distribuer contient la conction afficher main
	Shuffle(deckEnnemi);
	DistribuerEnnemi(1);
	EnvoiCombatEnnemi();
	AfficherCarteCombat();
	AfficherCarteCombatEnnemi();
	afficherPvHero();
	afficherPvEnnemi();
	AfficheMessage("");
	document.getElementById("cimetiere").innerHTML='cimetiere <img src="images/cimetiere.png" class="deckimg1 deck" >';}


/* gestionnaire de bouton*/

		document.getElementById('boutonRejouer1').onclick = function(){
 			Rejouer();
  		};


		document.getElementById('boutonRejouer2').onclick = function(){
 			Rejouer();
  		};

	function Shuffle(a) {
	    var j, x, i;
	    for (i = a.length - 1; i > 0; i--) {
	        j = Math.floor(Math.random() * (i + 1));
	        x = a[i];
	        a[i] = a[j];
	        a[j] = x;
	    }
	}

	function AfficherMain(){
		console.log('afficher main 5');
		for (var i=0; i<5;i++){ 
			var j=i+1;	
			if( i < main.length){
				var contenuHtml="";
				contenuHtml+='<img src="cartes/'+main[i][0]+'.png" onclick="EnvoiCombat('+i+')">';
				document.getElementById("carte_main_"+j).innerHTML=contenuHtml;
			}
			else{
				var contenuHtml="";
				document.getElementById("carte_main_"+j).innerHTML=contenuHtml;	
			}
		}

	}

	
	function Distribuer(n){
		console.log('distribuer');
		if (deck.length!=0 && main.length<5) {
			for (var i=0 ; i<n ; i++){	
				main.push(deck[0]);
				deck.shift();	
				AfficherMain();
			}
		}
	}

	function AfficherCarteCombat (){
		console.log('AfficherCarteCombat');
		var contenuHtml="";
		if (carteJeu.length!=0)	{
			contenuHtml+='<img src="cartes/'+carteJeu[0][0]+'.png" onclick="Combat()" >';
		}
			document.getElementById("carte_jeu").innerHTML=contenuHtml;
	}

	function EnvoiCombat(n) {
		console.log("EnvoiCombat");
		if (carteJeu.length==0 || !carteJeu[0]) { 
			console.log(carteJeu);
 //il m'est arrivé que la carte jeu ne soit plus là et que la longueur soit non nulle car élément undefined. Du coup 
 // carteJeu[0] renvoie faux et sa négation renvoi vrai. 
 // plus de carte mais une valeur undefined  permet d'envoyer une nouvelle carte au combat 
 			carteJeu=[];
 // on supprime le contenu s'il y a un élément Undifined
			carteJeu.push(main[n]);
			main.splice(n,1)
			AfficherMain();
			AfficherCarteCombat();
	
		}
	}

	function DistribuerEnnemi(n){
		console.log("distribuerEnnemi");
		if (deckEnnemi.length!=0 && carteJeuEnnemi==0) {
			carteJeuEnnemi.push(deckEnnemi[0]);
			deckEnnemi.shift();	
			AfficherCarteCombatEnnemi();
		}
	}

	function AfficherCarteCombatEnnemi (){console.log("AfficherCarteCombatEnnemi");
		var contenuHtml="";
		if (carteJeuEnnemi.length==0){
			DistribuerEnnemi(1);
		}
		contenuHtml+='<img src="cartes/'+carteJeuEnnemi[0][0]+'.png">';
		document.getElementById("carte_jeu_ennemi").innerHTML=contenuHtml;
	}

	function EnvoiCombatEnnemi() {console.log("EnvoiCombatEnnemi");
		if (carteJeuEnnemi.length==0) {
			carteJeuEnnemi.push(carteJeuEnnemi[0]);
			carteJeuEnnemi.splice(0,1)
			AfficherCarteCombatEnnemi();
		}
	}
	function seconde(){;}

	function AfficheMessage(texte){
		texteAAfficher+="<br>"+texte;
		document.getElementById("message").innerHTML=texteAAfficher;
		/*setTimeout(AfficheMessage, 1000);*/
		/*setTimeout(Combat, 1000);	*/
		}

	function ChangementEcranGagne(){
		document.getElementById("ecran_win").style.display = 'block';
		document.getElementById("ecran_jeu").style.display = 'none';
	}
	function ChangementEcranPerdu(){
		document.getElementById("ecran_over").style.display = 'block';
		document.getElementById("ecran_jeu").style.display = 'none';
	}


	function Combat(){
		console.log("debut combat");
		texteAAfficher="";
		if (carteJeu.length==1 && carteJeuEnnemi.length==1) {  //il y a bien un combattant de chaque côté

	//C'est au début qu'on fait une copie de la carte pas à chaque round	
			copieCarteJeu=carteJeu[0];
	//C'est au début qu'on fait une copie de la carte pas à chaque round		
			copieCarteJeuEnnemi=carteJeuEnnemi[0];
			console.log('Moi: '+ copieCarteJeu[3]);
			console.log("Lui: "+ copieCarteJeuEnnemi[3]);
//J'ai retiré les copies des carte pour les réaliser lors du déplacement de la carte.
//SON ATK[1] EST PLUS GRANDE QUE MES POINTS DE VIE[2]
			if (copieCarteJeu[2]<copieCarteJeuEnnemi[1]) {
				console.log(copieCarteJeuEnnemi[3]+" t'a tué!");
				cimetiere.splice(0,0,carteJeu[0]);
				AfficherCarteCimetiere();
				carteJeu.shift();				//à cet instant il n'y a plus de combatant joueur
				AfficheMessage(copieCarteJeuEnnemi[3]+" t'a tué!");
				setTimeout(seconde, 1000);
				attaqueRestanteVersHero=copieCarteJeuEnnemi[1]-copieCarteJeu[2];
				PvHero=PvHero-attaqueRestanteVersHero;
				console.log(PvHero);
				if (PvHero<=0) {
					PvHero=0;
					afficherPvHero();
					setTimeout(ChangementEcranPerdu, 2000);
				} 
				else {
					afficherPvHero();
				}			
			}

//MON ATK[1] EST PLUS GRANDE QUE SES POINTS DE VIE[2]
			if (copieCarteJeu[1]>copieCarteJeuEnnemi[2]) {
				console.log("Tu as tué  " + copieCarteJeuEnnemi[3] );
				carteJeuEnnemi.shift(carteJeuEnnemi[0]);
				console.log(carteJeuEnnemi)	;
				AfficheMessage("Tu as tué  " + copieCarteJeuEnnemi[3] );
				attaqueRestanteVersEnnemi=copieCarteJeu[1]-copieCarteJeuEnnemi[2];
				PvEnnemi=PvEnnemi-attaqueRestanteVersEnnemi;
				console.log(PvEnnemi);
				if (PvEnnemi<=0) {
					PvEnnemi=0;
					afficherPvEnnemi();
					setTimeout(ChangementEcranGagne, 2000);
				} 
				else {
					afficherPvEnnemi();
				}
			}

//SON ATK[1] EST PLUS PETITE QUE MES POINTS DE VIE[2]
			if (copieCarteJeuEnnemi[1]<copieCarteJeu[2]) {
				carteJeu[0][2]=carteJeu[0][2]-copieCarteJeuEnnemi[1]; 
				console.log("Tu es vivant! "+copieCarteJeu[3]+" n'a plus que "+carteJeu[0][2]+" PV");
				AfficheMessage("Tu es vivant! "+copieCarteJeu[3]+" n'a plus que "+carteJeu[0][2]+" PV");
				seconde();
			}

//MON ATK[1] EST PLUS PETITE QUE SES POINTS DE VIE[2]
			if (copieCarteJeu[1]<copieCarteJeuEnnemi[2]) {
				carteJeuEnnemi[0][2]=copieCarteJeuEnnemi[2]-copieCarteJeu[1];
				console.log("Oh il est vivant! "+copieCarteJeuEnnemi[3]+" n'a plus que "+carteJeuEnnemi[0][2]+" PV");
				AfficheMessage("Oh il est vivant! "+copieCarteJeuEnnemi[3]+" n'a plus que "+carteJeuEnnemi[0][2]+" PV");
			}

//SON ATK[1] = MES POINTS DE VIE[2]		
			if (copieCarteJeuEnnemi[1]==copieCarteJeu[2]) {
				console.log("Tu es mort XD. RIP "+ copieCarteJeu[3]);
				cimetiere.push(carteJeu[0]);
				carteJeu.shift();
				AfficheMessage("Tu es mort XD. RIP "+ copieCarteJeu[3]);
			}
	
//MON ATK[1] = SES POINTS DE VIE[2]		
			if (copieCarteJeu[1]==copieCarteJeuEnnemi[2]) {
				console.log("ouh la... tu as tué "+copieCarteJeuEnnemi[3]);
				carteJeuEnnemi.shift(carteJeuEnnemi[0]);
				DistribuerEnnemi(1);
				AfficheMessage("ouh la... tu as tué "+copieCarteJeuEnnemi[3]);
			};
			//alert("fin du round");	
			AfficherMain();
			DistribuerEnnemi(1); //ne se distribue que si l'ennemi a disparu
			AfficherCarteCombat();
			//AfficherCarteCombatEnnemi();
		}
	}

	function afficherPvEnnemi(){
	console.log('afficher_ennemi');
			document.getElementById("pv_ennemi").innerHTML=PvEnnemi;
	}
	function afficherPvHero(){
	console.log('afficher_pv_hero');
			document.getElementById("pv_hero").innerHTML=PvHero;
	}

	function AfficherCarteCimetiere(){
	var contenuHtml=""
	contenuHtml+='cimetière	<img class="deckimg1 deck"  src="cartes/'+cimetiere[0][0]+'.png">';
	document.getElementById("cimetiere").innerHTML=contenuHtml
	}



/*DEBUT CODE*/

	Shuffle(deck);
	Distribuer(5); //distribuer contient la conction afficher main
	Shuffle(deckEnnemi);
	DistribuerEnnemi(1);
	EnvoiCombatEnnemi();
	AfficherCarteCombatEnnemi();
	afficherPvHero();
	afficherPvEnnemi();
	
