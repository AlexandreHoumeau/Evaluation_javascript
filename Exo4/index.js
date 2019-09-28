/**
 * world map
 *
*/
var WorldMap = function WorldMap(){
	
}

WorldMap.prototype.render = function() {
	this.renderWorldMap();
	this.interactiveWorldMap();
};

WorldMap.prototype.renderWorldMap = function() {
	var elBody = document.querySelector('body');
	var elObj = document.createElement('object');

	elObj.data = "World_map.svg";
	elObj.style.width = '100vw';
	elObj.style.height = '100vh';
<<<<<<< HEAD
	elObj.id = 'svg';
=======
	elObj.classList.add("world-map");
	elObj.id = "svg-object"
>>>>>>> 87bdd653ccf9c36b707be580e711dd12af569e65

	elBody.appendChild(elObj);

<<<<<<< HEAD
	// this.interactiveWorldMap(elObj);
};

WorldMap.prototype.interactiveWorldMap = function() {
	var svg = document.getElementById('svg');
	console.log(svg);
=======
	/*this.interactiveWorldMap(elObj);*/
};

WorldMap.prototype.interactiveWorldMap = function() {
	
	
	/*this.paths.forEach(function(paths) {
		path.addEventLIstener('mouseenter', function(e) {
			console.log('salut');
		})
	})*/
>>>>>>> 87bdd653ccf9c36b707be580e711dd12af569e65
};

var worldMap = new WorldMap();
worldMap.render();

window.addEventListener('load', function () {
	var object = document.getElementsByTagName('object').child();

	console.log(object);
	console.log(object.length);
	console.log(object[0]);

	

	
})