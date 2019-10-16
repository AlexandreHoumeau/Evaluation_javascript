var squareSize = 50;
var ship1 = 0;
var gameBoardContainer = document.getElementById("gameboard");
var ship = document.getElementById('ships');
var ships = [0,2,3,4,5,5]
var array = ['A','B','C','D','E','F','G','H','I','J','K','L'];

// make the grid columns and rows
for (i = 0; i < 12; i++) {
	for (j = 0; j < 12; j++) {
		
		// create a new div HTML element for each grid square and make it the right size
		var square = document.createElement("div");
		gameBoardContainer.appendChild(square);

    // give each div element a unique id based on its row and column, like "s00"
        square.id = array[i] + j;		
		
		// set each grid square's coordinates: multiples of the current row or column number
		var topPosition = j * squareSize;
		var leftPosition = i * squareSize;			
		
		// use CSS absolute positioning to place each grid square on the page
		square.style.top = topPosition + 'px';
		square.style.left = leftPosition + 'px';						
	}
}
var hitCount = 0;

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

gameBoardContainer.addEventListener("click", fireTorpedo, false);

function fireTorpedo(e) {
    // if item clicked (e.target) is not the parent element on which the event listener was set (e.currentTarget)
	if (e.target !== e.currentTarget) {
        // extract row and column # from the HTML element's id
		var row = parseInt(e.target.id.substring(1,3));
        var col = e.target.id.charCodeAt(0)-65;

        //alert("Clicked on row " + row + ", col " + col);
				
		// if player clicks a square with no ship, change the color and change square's value
		if (gameBoard[row][col] === 0) {
			e.target.style.background = 'blue';
			// set this square's value to 3 to indicate that they fired and missed
			gameBoard[row][col] = 0;
			
		// if player clicks a square with a ship, change the color and change square's value
		} else if (gameBoard[row][col] != 0) {
			e.target.style.background = 'red';
            // set this square's value to 2 to indicate the ship has been hit
            checkGame(gameBoard[row][col]);
            gameBoard[row][col] = 2;
			
			// increment hitCount each time a ship is hit
           
            hitCount++;
			// this definitely shouldn't be hard-coded, but here it is anyway. lazy, simple solution:
			if (hitCount == 17) {
				alert("All enemy battleships have been defeated! You win!");
			}
			
		// if player clicks a square that's been previously hit, let them know
		} else if (gameBoard[row][col] > 1) {
			alert("Stop wasting your torpedos! You already fired at this location.");
		}		
    }
    e.stopPropagation();
}

function checkGame(e) {
    console.log(e)
    

    if(e === 1){
        ship1++; 
        if(ship1 === 2){
            var torpilleur = document.querySelector('#torpilleur').style.color = 'red';
        }
    }   
}


