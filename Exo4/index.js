/**
 * world map
 *
*/
var WorldMap = function WorldMap(){

}

WorldMap.prototype.render = function() {
	this.renderWorldMap();
	//this.interactiveWorldMap();
};

WorldMap.prototype.renderWorldMap = function() {
	var elBody = document.querySelector('body');
	var elDiv = document.createElement('div');
	var elObj = document.createElement('object');

	elObj.data = "World_map.svg";
	elObj.style.width = '100vw';
	elObj.style.height = '100vh';
	elObj.classList.add("world-map");
	elObj.id = "world"

	elDiv.appendChild(elObj);
	elBody.appendChild(elDiv);

	this.interactiveWorldMap(elObj);
};

WorldMap.prototype.interactiveWorldMap = function(el) {
	
	console.log(el);
	var a = el.getElementsByTagName('path');
	console.log(a);
};

var worldMap = new WorldMap();
worldMap.render();
