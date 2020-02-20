var nbLignes = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"); 
var char2 = '*'; 
if (nbLignes <= 25) {
	
	
	for (let i = 1; i <= nbLignes ; i++) {  // Boucle de lignes
		var char1 = ' '; 					//chaine contenant les espaces
		for (let j = nbLignes - i; j > 0 ; j--) {
			char1+= ' ';
		}
		console.log(char1+char2);
		char2+='**';
		
}
}else{
}

	