$('document').ready(function(e){
    console.log(partie);

    $(".cellule").click(function(e){        
        console.log('joueur', partie.joueur_courant);
        
        let ligne = $(this).closest(".ligne");
        let ligne_index = $( ".ligne" ).index( ligne );

        let cellules_in_line = ".ligne.ligne_" + ligne_index + " .cellule";
        let cellule_index = $(cellules_in_line).index( $(this) ); 
        console.log('Click Ligne', ligne_index);
        console.log('Click Colonne', cellule_index);
            
        // tester qu'il n'y a pas de pion sur cette case
        if(partie.grille[ligne_index][cellule_index] != null){
            alert("Il y a deja un pion sur cette case !")
        } else {
            // mettre Ã  jour la grille
           partie.grille[ligne_index][cellule_index] = partie.joueur_courant

            // Poser le pion et changer de joueur
            let joueur_suivant = 'cross';
            $(this).children(".forme.circle").css('display','block');                 

            $(".infos .tour .forme").toggle()

            // tester si la combinaison est gagnante
            for(let i=0;i<3;i++){
                if(partie.joueur_courant == partie.grille[i][0] &&  partie.joueur_courant == partie.grille[i][1] &&  partie.joueur_courant == partie.grille[i][2]){
                    partie.joueur_gagnant = partie.joueur_courant;
                    break;
                }

                if(partie.joueur_courant == partie.grille[0][i] &&  partie.joueur_courant == partie.grille[1][i] &&  partie.joueur_courant == partie.grille[2][i]){
                    partie.joueur_gagnant = partie.joueur_courant; 
                    break;
                }
            }

            if(partie.joueur_courant == partie.grille[0][0] &&  partie.joueur_courant == partie.grille[1][1] &&  partie.joueur_courant == partie.grille[2][2]){
                partie.joueur_gagnant = partie.joueur_courant;
            }

            if(  partie.joueur_courant == partie.grille[2][0] &&  partie.joueur_courant == partie.grille[1][1] &&  partie.joueur_courant == partie.grille[0][2]){
                partie.joueur_gagnant = partie.joueur_courant;
            }

            if(partie.joueur_gagnant != null){
                partie.finish();
                $(".cellule").unbind( "click" );
            } else {
                partie.joueur_courant = joueur_suivant;

                /**Ordinateur */
                function getRandomInt(max) {
                    return Math.floor(Math.random() * Math.floor(max));
                }
        
                /*Instanciation chiffre aléatoire */
                let X = getRandomInt(3);
                let Y = getRandomInt(3);
        
                /*Vérification que la cellule est vide avant de finalisé la position*/
                while (partie.grille[X][Y] != null) {
                    X = getRandomInt(3);
                    Y = getRandomInt(3);
                }
                console.log('joueur', partie.joueur_courant);
                

                /** On assigne les valeurs aléatoire aux variables */
                ligne_index = X;
                cellule_index = Y;
                console.log('Random Ligne', ligne_index);
                console.log('Random Colonne', cellule_index);
                console.log('---');               
                
                // mettre Ã  jour la grille
                partie.grille[ligne_index][cellule_index] = partie.joueur_courant;

                // Poser le pion et changer de joueur
                $('div#' + [ligne_index] + '_' + [cellule_index]).children(".forme.cross").css('display','block');
                /*
                console.log('this', $(this).children(".forme.cross"));
                console.log('test', $('div#' + [ligne_index] + '_' + [cellule_index]).children(".forme.cross"));
                */
                joueur_suivant = "circle";
                $(".infos .tour .forme").toggle();

                // tester si la combinaison est gagnante
                for(let i=0;i<3;i++){
                    if(partie.joueur_courant == partie.grille[i][0] &&  partie.joueur_courant == partie.grille[i][1] &&  partie.joueur_courant == partie.grille[i][2]){
                        partie.joueur_gagnant = partie.joueur_courant;
                        break;
                    }

                    if(partie.joueur_courant == partie.grille[0][i] &&  partie.joueur_courant == partie.grille[1][i] &&  partie.joueur_courant == partie.grille[2][i]){
                        partie.joueur_gagnant = partie.joueur_courant; 
                        break;
                    }
                }

                if(partie.joueur_courant == partie.grille[0][0] &&  partie.joueur_courant == partie.grille[1][1] &&  partie.joueur_courant == partie.grille[2][2]){
                    partie.joueur_gagnant = partie.joueur_courant;
                }

                if(  partie.joueur_courant == partie.grille[2][0] &&  partie.joueur_courant == partie.grille[1][1] &&  partie.joueur_courant == partie.grille[0][2]){
                    partie.joueur_gagnant = partie.joueur_courant;
                }

                if(partie.joueur_gagnant != null){
                    partie.finish();
                    $(".cellule").unbind( "click" );
                } else {
                    partie.joueur_courant = joueur_suivant;
                }


            }
        }
    })
});