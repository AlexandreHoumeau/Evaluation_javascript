/** 
 * checkShip
 * 
*/
var MyBattleships = function(){
    this.squareSize = 50;
    //set varaibles for every ship
    this.ship1 = 0; 
    this.ship2 = 0; 
    this.ship3 = 0; 
    this.ship4 = 0; 
    this.ship5 = 0; 
    //count for the number of ships which are destroyed
    this.count = 0; 

    this.array = ['A','B','C','D','E','F','G','H','I','J','K','L'];
    this.gameBoardContainer = document.getElementById('gameboard');
    this.ships = document.getElementById('ships');   
}

/** 
 * render
*/
MyBattleships.prototype.render = function() {
    this.renderGrid();
    this.gameBoardContainer.addEventListener('click', this.fireTorpedo.bind(this), false);
}

/** 
 * renderGrid
*/
MyBattleships.prototype.renderGrid = function() {
    //two loop that make 12 by 12 cases 
    for (i = 0; i < 12; i++) {
        for (j = 0; j < 12; j++) {
            var square = document.createElement("div");
            this.gameBoardContainer.appendChild(square);
            //every cases id is made with a letter 'array[i]' and a number 'j'
            square.id = this.array[i] + j;		
        
            var topPosition = j * this.squareSize;
            var leftPosition = i * this.squareSize;			
            
            square.style.top = topPosition + 'px';
            square.style.left = leftPosition + 'px';		
            
        }
    }
}

/** 
 * fireTorpedo
*/
MyBattleships.prototype.fireTorpedo = function(e) {

    if (e.target !== e.currentTarget) {
        //Convert the row and the col into numbers. The col is made with a Letter so you have to convert it in ASSII
        var row = parseInt(e.target.id.substring(1,3));
        var col = e.target.id.charCodeAt(0)-65;
				
		if (gameBoard[row][col] === 0) {
			e.target.style.background = 'blue';

            gameBoard[row][col] = 0;
			
		} else if (gameBoard[row][col] != 0) {
			e.target.style.background = 'red';
            //if the player hit a ship we call the function checkShip
            this.checkShip(gameBoard[row][col]);
         
            gameBoard[row][col] = 8;
			           
			if (this.count === 5) {
                alert("vous avez gagné !");
                window.location.reload();
			}
			
		}
    }
    e.stopPropagation();
}

/** 
 * checkShip
*/
MyBattleships.prototype.checkShip = function(e) {
    //e is the value of the ship which has been shot 
    if(e === 1){
        this.ship1++; 
        if(this.ship1 === 2){
            //the class .sank in the css cross the name of the ship which has been destroyed 
            var torpilleur = document.querySelector('#torpilleur').classList.add('sank');
            this.count++;
        }
    }

    if(e === 2){
        this.ship2++; 
        if(this.ship2 === 3){
            var torpilleur = document.querySelector('#Contre-Torpilleur').classList.add('sank');
            this.count++;
        }
    }

    if(e === 3){
        this.ship3++; 
        if(this.ship3 === 4){
            var torpilleur = document.querySelector('#Croiseur').classList.add('sank');
            this.count++;
        }
    }

    if(e === 4){
        this.ship4++; 
        if(this.ship4 === 5){
            var torpilleur = document.querySelector('#Porte-Avion1').classList.add('sank');
            this.count++;
        }
    }

    if(e === 5){
        this.ship5++; 
        if(this.ship5 === 5){
            var torpilleur = document.querySelector('#Porte-Avion2').classList.add('sank');
            this.count++;
        }
    }   
}

var myBattleships = new MyBattleships();
myBattleships.render();

var gameBoard = [
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

