$('document').ready(function(e){

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
            /** Alors ici j'ai remplacer la var joueur courant car il n'y a plus de switch case. Je commence toujours par le cercle car si c'est
             * le tour du joueur et qu'il gagne, je ne vérifie pas à ce moment si c'est le cas donc je le met en priorité lors de la vérification.
             * Ensuite je colorie la combinaison gagante en vert.
             */
            for(let i=0;i<3;i++){
                if('circle' == partie.grille[i][0] &&  'circle' == partie.grille[i][1] &&  'circle' == partie.grille[i][2]){  
                    $('div#' + [i] + '_' + [0]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [1]).children(".forme.circle").css('display','none');
                    $('div#' + [i] + '_' + [2]).children(".forme.circle").css('display','none');

                    $('div#' + [i] + '_' + [0]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [1]).children(".forme.circleV").css('display','block');
                    $('div#' + [i] + '_' + [2]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle';
                    break;
                }

                if('circle' == partie.grille[0][i] &&  'circle' == partie.grille[1][i] &&  'circle' == partie.grille[2][i]){
                    $('div#' + [0] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [1] + '_' + [i]).children(".forme.circle").css('display','none');
                    $('div#' + [2] + '_' + [i]).children(".forme.circle").css('display','none');

                    $('div#' + [0] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [1] + '_' + [i]).children(".forme.circleV").css('display','block');
                    $('div#' + [2] + '_' + [i]).children(".forme.circleV").css('display','block');
                    partie.joueur_gagnant = 'circle'; 
                    break;
                }

                if('cross' == partie.grille[i][0] &&  'cross' == partie.grille[i][1] &&  'cross' == partie.grille[i][2]){
                    $('div#' + [i] + '_' + [0]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [1]).children(".forme.cross").css('display','none');
                    $('div#' + [i] + '_' + [2]).children(".forme.cross").css('display','none');

                    $('div#' + [i] + '_' + [0]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [1]).children(".forme.crossV").css('display','block');
                    $('div#' + [i] + '_' + [2]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross';
                    break;
                }

                if('cross' == partie.grille[0][i] &&  'cross' == partie.grille[1][i] &&  'cross' == partie.grille[2][i]){
                    $('div#' + [0] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [1] + '_' + [i]).children(".forme.cross").css('display','none');
                    $('div#' + [2] + '_' + [i]).children(".forme.cross").css('display','none');

                    $('div#' + [0] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [1] + '_' + [i]).children(".forme.crossV").css('display','block');
                    $('div#' + [2] + '_' + [i]).children(".forme.crossV").css('display','block');
                    partie.joueur_gagnant = 'cross'; 
                    break;
                }
            }

            if('circle' == partie.grille[0][0] &&  'circle' == partie.grille[1][1] &&  'circle' == partie.grille[2][2]){
                $('div#' + [0] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [1] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [2] + '_' + [2]).children(".forme.circle").css('display','none');

                $('div#' + [0] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [1] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [2] + '_' + [2]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('circle' == partie.grille[2][0] &&  'circle' == partie.grille[1][1] &&  'circle' == partie.grille[0][2]){
                $('div#' + [2] + '_' + [0]).children(".forme.circle").css('display','none');
                $('div#' + [1] + '_' + [1]).children(".forme.circle").css('display','none');
                $('div#' + [0] + '_' + [2]).children(".forme.circle").css('display','none');

                $('div#' + [2] + '_' + [0]).children(".forme.circleV").css('display','block');
                $('div#' + [1] + '_' + [1]).children(".forme.circleV").css('display','block');
                $('div#' + [0] + '_' + [2]).children(".forme.circleV").css('display','block');
                partie.joueur_gagnant = 'circle';
            }

            if('cross' == partie.grille[0][0] &&  'cross' == partie.grille[1][1] &&  'cross' == partie.grille[2][2]){
                $('div#' + [0] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [1] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [2] + '_' + [2]).children(".forme.cross").css('display','none');

                $('div#' + [0] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [1] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [2] + '_' + [2]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
            }

            if('cross' == partie.grille[2][0] &&  'cross' == partie.grille[1][1] &&  'cross' == partie.grille[0][2]){
                $('div#' + [2] + '_' + [0]).children(".forme.cross").css('display','none');
                $('div#' + [1] + '_' + [1]).children(".forme.cross").css('display','none');
                $('div#' + [0] + '_' + [2]).children(".forme.cross").css('display','none');

                $('div#' + [2] + '_' + [0]).children(".forme.crossV").css('display','block');
                $('div#' + [1] + '_' + [1]).children(".forme.crossV").css('display','block');
                $('div#' + [0] + '_' + [2]).children(".forme.crossV").css('display','block');
                partie.joueur_gagnant = 'cross';
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