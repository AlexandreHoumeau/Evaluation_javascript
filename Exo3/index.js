'use strict'
/**
 * MyMorpionXO
 * @constructor
 * @param {} 
 * return tic tac toe game
*/
var MyMorpionXO = function MyMorpionXO(){
	window.addEventListener('load', function(){
		this.cases = document.querySelectorAll('.case');
		this.container = document.querySelectorAll('#container');
		this.score = document.getElementsByTagName('div')[0];
		this.scoreX = score.querySelector('.X');
		this.score0 = score.querySelector('.O');
		this.compt = 0;
		this.player = ['X','O'];
		this.scores = [0 , 0];

	});	
}

/**
 * render
*/
MyMorpionXO.prototype.render = function(){
	this.buttonrender();
}

/**
 * game
 * @param{button}
*/
MyMorpionXO.prototype.game = function(el){

	el.addEventListener('click', function() {
		
		if (el.innerHTML.length === 0){
			el.innerHTML = player[compt % 2];
			compt++;
			this.checkWinner();
		}
		else {
			console.log('La case est déja ocuppée !');
		}
	}.bind(this));

}

/**
 * checkWinner
 * @param{button}
 * @param{compt} number
 * @param{player} array
*/
MyMorpionXO.prototype.checkWinner = function(){

	if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
		this.winner(scores[0], player[score[0]%2]);
	        
    } else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        alert('The player ' + cases[3].innerHTML + ' won !');
       	score.querySelector('.' + cases[3].innerHTML).innerHTML =+ 1;
        window.location.reload();

    } else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        alert('The player ' + cases[6].innerHTML + ' won !');
        score.querySelector('.' + cases[6].innerHTML).innerHTML =+ 1;
        window.location.reload();
    }
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        alert('The player ' + cases[0].innerHTML + ' won !');
        score.querySelector('.' + cases[0].innerHTML).innerHTML =+ 1;
        window.location.reload();

    } else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        alert('The player ' + cases[1].innerHTML + ' won !');
        score.querySelector('.' + cases[1].innerHTML).innerHTML =+ 1;
        window.location.reload();

    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        alert('The player ' + cases[2].innerHTML + ' won !');
        score.querySelector('.' + cases[2].innerHTML).innerHTML =+ 1;
        window.location.reload();
    }
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
        alert('The player ' + cases[0].innerHTML + ' won !');
        score.querySelector('.' + cases[0].innerHTML).innerHTML =+ 1;
        window.location.reload();

    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
        alert('The player ' + cases[2].innerHTML + ' won !');
        score.querySelector('.' + cases[2].innerHTML).innerHTML =+ 1;
        window.location.reload();

    } else if (compt === 9) {
    	alert('Match nul');
    	window.location.reload();
    } 
};

MyMorpionXO.prototype.winner = function(_scores, _player){
	
}

/**
 * buttonrender
*/
MyMorpionXO.prototype.buttonrender = function(){
	var elBody = document.querySelector('body');
	var elDiv = document.createElement('div');

	for (var i = 0; i < 3; i++){
		var elDiv = document.createElement('div');
		elDiv.setAttribute('id', 'container');
		for(var j = 0; j < 3; j++) {
			var elBut = document.createElement('div');
			this.game(elBut);
	
			elDiv.appendChild(elBut);

			elBut.style.background = 'grey';
			elBut.style.padding = '70px';
			elBut.style.borderRadius = '10px';
			elBut.style.cursor = 'pointer';

			elBut.setAttribute('class', 'case');
		}
		elBody.appendChild(elDiv);
		
		elDiv.style.display = 'flex';
		elDiv.style.justifyContent = 'center';
	}	
}

var myMorpionXO = new MyMorpionXO();
myMorpionXO.render();


