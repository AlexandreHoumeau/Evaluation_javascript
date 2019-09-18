'use strict';

/**
 * MyMorpionXO
 * @constructor
 * @param {} 
 * return tic tac toe game
*/
var MyMorpionXO = function MyMorpionXO(){
	this.compt = compt;
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

	var player = ['X', 'O'];
	
	el.addEventListener('click', function() {
		
		console.log(compt);

		if (el.innerHTML.length === 0){
			el.innerHTML = player[compt % 2];
			
			return compt++;
		}
		else {
			alert('La case est déja ocuppée !');
		}
	});	
}


/**
 * checkWinner
 * @param{button}
 * @param{compt} number
 * @param{player} array
*/
MyMorpionXO.prototype.checkWinner = function(compt){
	console.log('compt');
};


/**
 * buttonrender
*/
MyMorpionXO.prototype.buttonrender = function(){
	var elBody = document.querySelector('body');

	for (var i = 0; i < 3; i++){
		var elDiv = document.createElement('div');

		for(var j = 0; j < 3; j++) {
			var elBut = document.createElement('button');
			this.game(elBut);
			elDiv.appendChild(elBut);
			
			elBut.style.background = 'purple';
			elBut.style.padding = '70px';
			//elBut.style.margin = '4px 2px';
			elBut.style.borderRadius = '10px';
			elBut.style.cursor = 'pointer';


		}
		elBody.appendChild(elDiv);
		
		elDiv.style.display = 'flex';
		elDiv.style.justifyContent = 'center';
	}	
}




var compt = 0;
var myMorpionXO = new MyMorpionXO();
myMorpionXO.render();
