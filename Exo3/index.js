'use strict';

/**
 * MyMorpionXO
 * @constructor
 * @param {} 
 * return tic tac toe game
*/
var MyMorpionXO = function MyMorpionXO(){
	window.addEventListener('load', function(){
		this.cases = document.querySelectorAll('.case');
	
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

	var player = ['X', 'O'];
	
	el.addEventListener('click', function() {
		
		if (el.innerHTML.length === 0){
			el.innerHTML = player[compt % 2];
			compt++;
		}
		else {
			console.log('La case est déja ocuppée !');
		}
	});
}


/**
 * checkWinner
 * @param{button}
 * @param{compt} number
 * @param{player} array
*/
MyMorpionXO.prototype.checkWinner = function(){
	
    if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[1].innerHTML && cases[1].innerHTML === cases[2].innerHTML) {
        this.showWinner(cases[0].innerHTML);

    } else if (cases[3].innerHTML !== '' && cases[3].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[5].innerHTML) {
        this.showWinner(cases[3].innerHTML);

    } else if (cases[6].innerHTML !== '' && cases[6].innerHTML === cases[7].innerHTML && cases[7].innerHTML === cases[8].innerHTML) {
        this.showWinner(cases[6].innerHTML);

    }
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[3].innerHTML && cases[3].innerHTML === cases[6].innerHTML) {
        this.showWinner(cases[0].innerHTML);

    } else if (cases[1].innerHTML !== '' && cases[1].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[7].innerHTML) {
        this.showWinner(cases[1].innerHTML);

    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[5].innerHTML && cases[5].innerHTML === cases[8].innerHTML) {
        this.showWinner(cases[2].innerHTML);
    }
    else if (cases[0].innerHTML !== '' && cases[0].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[8].innerHTML) {
        this.showWinner(cases[0].innerHTML);
    } else if (cases[2].innerHTML !== '' && cases[2].innerHTML === cases[4].innerHTML && cases[4].innerHTML === cases[6].innerHTML) {
        this.showWinner(cases[2].innerHTML);
    }
};

/**
 * showWinner
*/
MyMorpionXO.prototype.showWinner = function(){
	console.log('Bravo le joueur a gagné !')
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
			elBut.addEventListener('click', this.checkWinner);
			elDiv.appendChild(elBut);

			
			elBut.style.background = 'purple';
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



var compt = 0;
var myMorpionXO = new MyMorpionXO();
myMorpionXO.render();



