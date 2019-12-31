$('document').ready(function(e){
    console.log(partie);

    $(".cellule").click(function(e){ 
        /* Fonction chiffre al�atoire*/
        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
        }

        /*Instanciation chiffre al�atoire */
        let X = getRandomInt(3);
        let Y = getRandomInt(3);

        /*V�rification que la cellule est vide avant de finalis� la position*/
        while (partie.grille[X][Y] != null) {
            X = getRandomInt(3);
            Y = getRandomInt(3);
        }
        console.log('joueur', partie.joueur_courant);
        console.log('Random Ligne', X);
        console.log('Random Colonne', Y);
        
        let ligne = $(this).closest(".ligne");
        let ligne_index = $( ".ligne" ).index( ligne );

        let cellules_in_line = ".ligne.ligne_" + ligne_index + " .cellule";
        let cellule_index = $(cellules_in_line).index( $(this) ); 
        console.log('Click Ligne', ligne_index);
        console.log('Click Colonne', cellule_index);
        console.log('---'); 
        
        /** Si le joueur est "croix" alors les valeurs du click sont remplacer par celle de l'al�atoire */
        if(partie.joueur_courant == 'cross'){
            ligne_index = X;
            cellule_index = Y;
        }       
            
        // tester qu'il n'y a pas de pion sur cette case
        if(partie.grille[ligne_index][cellule_index] != null){
            alert("Il y a deja un pion sur cette case !")
        } else {
            // mettre à jour la grille
           partie.grille[ligne_index][cellule_index] = partie.joueur_courant

            // Poser le pion et changer de joueur
            let joueur_suivant = ''
            switch(partie.joueur_courant){
                case "circle":
                    $(this).children(".forme.circle").css('display','block');
                    joueur_suivant = "cross"                    
                    break;
                case "cross":
                    $(this).children(".forme.cross").css('display','block');
                    joueur_suivant = "circle"
                    break;
            }

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
            }
        }
    })
});