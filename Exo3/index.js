'use strict'
/**
 * MyMorpionXO
 * @constructor
 * @param {} 
 * return tic tac toe game
*/
var MyMorpionXO = function MyMorpionXO(){
	//wait for the morpion to load
	window.addEventListener('load', function(){
		this.cases = document.querySelectorAll('.case');
		this.container = document.getElementById('container');
		this.score = document.getElementsByTagName('div')[0];
		this.scoreX = score.querySelector('.X');
		this.score0 = score.querySelector('.O');
		this.compt = 0;
		this.player = ['X','O'];
		this.countX = 0; 
		this.count0 = 0; 

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
			//modulo 2 of compt return 0 or 1 ->  this way it altern between X and O
			el.innerHTML = player[compt % 2];
			compt++;
			this.checkWinner();
		}
		else {
			alert('La case est déja ocuppée !');
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
	//if any of this condition is true the function call the function this.winner() with the apropriate argument
	if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
		this.winner(cases[0]);
		
    } else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        this.winner(cases[3]);

    } else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        this.winner(cases[6]);
    }
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        this.winner(cases[0]);

    } else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        this.winner(cases[1]);

    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        this.winner(cases[2]);
    }
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
		this.winner(cases[0]);

    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
        this.winner(cases[2]);
	// if none of those arguments are valide and the game compt equal 9 its the end of the game
	} else if (compt === 9) {
    	alert('Match nul');
    	this.reloadGame();
    } 
};


MyMorpionXO.prototype.winner = function(_scores){
	if(_scores.innerHTML === 'X'){
		countX++;
		scoreX.innerHTML = countX;
		if(countX === 3){
			alert('Le joueur X a gagné !');
			window.location.reload();
		}
	}
	else{
		count0++;
		score0.innerHTML = count0;
		if(count0 === 3) {
			alert('Le joueur O a gagné !')
			window.location.reload();
		}
	}
	this.reloadGame();
}

MyMorpionXO.prototype.reloadGame = function(){
	//reload the game by deleting every inner.HTML value in each cells 
	cases.forEach(function(cell) {
		cell.innerHTML = '';
	  });
	compt = 0;
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
