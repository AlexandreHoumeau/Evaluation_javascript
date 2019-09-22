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
	var elDiv = document.createElement('div');
	var elObj = document.createElement('object');

	elObj.data = "World_map.svg";
	elObj.style.width = '100vw';
	elObj.style.height = '100vh';
	elObj.classList.add("world-map");
	elObj.id = "svg-object"

	elDiv.appendChild(elObj);
	elBody.appendChild(elDiv);

	/*this.interactiveWorldMap(elObj);*/
};

WorldMap.prototype.interactiveWorldMap = function() {
	
	
	/*this.paths.forEach(function(paths) {
		path.addEventLIstener('mouseenter', function(e) {
			console.log('salut');
		})
	})*/
};

var worldMap = new WorldMap();
worldMap.render();

window.addEventListener('load', function () {
	var object = document.getElementsByTagName('object').child();

	console.log(object);
	console.log(object.length);
	console.log(object[0]);

	

	
})