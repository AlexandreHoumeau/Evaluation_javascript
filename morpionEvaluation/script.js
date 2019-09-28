// creation du jeu avec DOM
var elBody = document.querySelector('body');
var elBox = document.createElement('div');
elBody.appendChild(elBox);
elBox.setAttribute('class', 'box');
elBox.style.display = 'flex';
elBox.style.justifyContent = 'center';
elBox.style.alignItems = 'center';
elBox.style.minHeight = '100vh';
elBox.style.fontFamily = 'monospace';
elBox.style.fontSize = '36px';
elBox.border = '5px solid #BADA55';



var elMorpion = document.createElement('div');
elBox.appendChild(elMorpion);
elMorpion.setAttribute('class', 'morpion');
elMorpion.style.display = 'flex';
elMorpion.style.flexWrap = 'center';
elMorpion.style.minWidth = '50vh';
elMorpion.style.height = '50vh';
elMorpion.style.border = '5px solid #B000B5';


for (var i = 0; i < 9; i++) {
    var elCase = document.createElement('div');
    elMorpion.appendChild(elCase);
    elCase.setAttribute('class', 'case');
    elCase.style.height = 'calc(1/3 * 100%)';
    elCase.style.width = 'calc(1/3 * 100%)';
    elCase.style.border = '5px solid #FB1';
    elCase.style.display = 'flex';
    elCase.style.justifyContent = 'center';
    elCase.style.alignItems = 'center';

}

// Programme Jeu

//Variable
var i = 0;
var scoreX = 0;
var scoreO = 0;
//Selectionne toute les cases
var cases = document.querySelectorAll('.case');

// a qui le tour de jouer grace au compteur i si c'est pair c'est au tour de O sinon c'est au tour de Y
function tour() {
    i++;
    return i % 2 === 0 ? 'O' : 'X';
}

function score3() {
    if (scoreO == 3) {
       alert('O a gagner la partie'); 
    } else if (scoreX == 3) {
        alert('X a gagner la partie');
    }
}

//Afficher le gagnant (le signe X ou O) avec son score et effacer toute les cases
function afficherGagnant(gagnant) {
    if (gagnant == 'X') {
        scoreX++;
        alert(gagnant + ' a gagner avec comme score: ' + scoreX);
        cases.forEach(el => el.innerHTML = '');
    } else {
        scoreO++;
        alert(gagnant + ' a gagner avec comme score: ' + scoreO);
        cases.forEach(el => el.innerHTML = '');
    }
    
    score3();
}

// Toute les combinaison pour gagner le jeu
function isGagner() {
    // 3 lignes
    if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
        //Afiiche le gagnant avec le signe contenu dans la case
        afficherGagnant(cases[0].innerHTML);

    } else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        afficherGagnant(cases[3].innerHTML);

    } else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[6].innerHTML);

    }
    // 3 Colonnes
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        afficherGagnant(cases[0].innerHTML);

    } else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        afficherGagnant(cases[1].innerHTML);

    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[2].innerHTML);
    }
    // 2 diagonales
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
        afficherGagnant(cases[0].innerHTML);
    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
        afficherGagnant(cases[2].innerHTML);
    }
}

//Afficher X et/ou O dans une case ou on clique
function jouer() {
    //Si la case est vide alors tu ecris ce qui ya dans la fonction tour (X ou O)
    if (!this.innerHtml) this.innerHTML = tour();
    isGagner();
}

// Choisir chaque case
cases.forEach(el => el.addEventListener('click', jouer));
