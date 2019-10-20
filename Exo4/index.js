/**
 * world map
 *
*/
var WorldMap = function WorldMap(){
	this.country = document.getElementById('country');
}
WorldMap.prototype.render = function() {
	this.renderWorldMap();
};

WorldMap.prototype.renderWorldMap = function() {
	// var elBody = document.querySelector('body');
	// var elObj = document.createElement('object');

	// elObj.data = "World_map.svg";
	// elObj.style.width = '100vw';
	// elObj.style.height = '100vh';

	// elBody.appendChild(elObj);

	// this.interactiveWorldMap();
};

WorldMap.prototype.interactiveWorldMap = function() {
	window.addEventListener('load', function(){
		var svg = document.getElementById('svg2');
		var paths = svg.querySelectorAll('path');

		paths.forEach(function(path){
			path.addEventListener('mouseenter', function(){
				country.innerHTML = path.id;
				path.style.fill = 'blue';
			});
			path.addEventListener('mouseleave', function(){
				country.innerHTML = "";
				path.style.fill = 'black';
			});
			path.addEventListener('click', function(){
				console.log(path.id);
				path.style.fill = 'red';
			})
		});
	});
};

var worldMap = new WorldMap();
worldMap.render();


