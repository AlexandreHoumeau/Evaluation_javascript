'use strict';

/**
 * DrawBarre
 * @construtor
 * @param {Object} el
 */
var DrawBarre = function DrawBarre(el) {
  this.el = document.querySelector(el);
  this.elSegment = document.createElement('div');
}

/**
 * render
 */
DrawBarre.prototype.render = function () {
  this.el.appendChild(this.renderBarre(function() {
    this.loading();
  }.bind(this)));
}

/**
 * loading
*/
DrawBarre.prototype.loading = function() {
  setInterval(function() {
    this.elSegment.style.width = this.elSegment.dataset.progress + '%'; 
    this.elSegment.dataset.progress = parseInt(this.elSegment.dataset.progress) + 1;

    if (this.elSegment.dataset.progress > 100) {
      clearInterval(this.interval);
    }
  }.bind(this),100);

}

/**
 * render bar
 *@param {callback} callback 
 *@return barre
*/
DrawBarre.prototype.renderBarre = function (callback) {
  var barre = document.createElement('div');
  
  barre.style.background = 'red';
  barre.style.height = '30px';
  barre.style.width = '100%';

  this.elSegment.style.background = 'green';
  this.elSegment.style.height = '30px';
  this.elSegment.style.width = '0%';
  this.elSegment.setAttribute('data-progress', '0');

  barre.appendChild(this.elSegment);

  callback();

  return barre;
}

var drawBarre = new DrawBarre('.toto');

drawBarre.render();

