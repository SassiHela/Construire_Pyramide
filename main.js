// Message de saisie
var nbEtages = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
 
var char2 = '*'; // chaine de caractères d'étoiles
var char1;		// chaine de caractères contenant des espaces 
if (nbEtages <= 25) { // Affichage de pyramide
	 
	for (let i = 1; i <= nbEtages ; i++) {  // Boucle pour parcourir les étages
	
		char1 = ' '; 					
		for (let j = nbEtages - i; j > 0 ; j--) { // Boucle pour la création d'une chaine d'espaces adéquate pour chaque étage.
			char1+= ' ';
		}
		console.log(char1+char2); 	//affichage d'un étage
		char2+='**'; 				// chaine d'étoiles de l'étage suivant
	}
	
}else{
	//Rien faire
}

	