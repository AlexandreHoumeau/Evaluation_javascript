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
	elObj.id = 'svg';

	elBody.appendChild(elObj);

	// this.interactiveWorldMap(elObj);
};

WorldMap.prototype.interactiveWorldMap = function() {
	var svg = document.getElementById('svg');
	console.log(svg);
};

var worldMap = new WorldMap();
worldMap.render();
