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
	console.log(cases);
	cases.forEach(cell => {
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
