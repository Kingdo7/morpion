let partie = {

    joueur_courant:"circle",
    joueur_gagnant:null,

    grille:[
        [null,null,null],
        [null,null,null],
        [null,null,null],
    ],

    combinaisons_gagnantes:[
        [[0,0],[0,1],[0,2]], // ligne 1
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,0],[2,0]], // colonne 1
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,1],[2,2]], // diagonales
        [[0,2],[1,1],[2,0]],
    ],

    finish: function(){
        alert('Fin de partie, ' + partie.joueur_gagnant + ' a gagne !')
    }
}