'use strict';

function PlaceholderImage (canvas,trumpx, trumpy, peoplex, peopley) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x;
  this.y;
  this.size = 50;
  this.img = new Image();
}

var popImgs = ["PopArt-05-05.png", "PopArt-05-06.png", "PopArt-05-07.png", "PopArt-05-08.png", "PopArt-05-09.png", "PopArt-05-10.png"]

PlaceholderImage.prototype.image = function (canvas,trumpx, trumpy, peoplex, peopley) {
  var randomNum = Math.floor(Math.random()*6);

  if (randomNum < 3) {
    this.img.src = `./img/popART/${popImgs[randomNum]}`;
    this.x = trumpx;
    this.y = trumpy;
  } else if (randomNum >= 3) {
    this.img.src = `./img/popART/${popImgs[randomNum]}`;
    this.x = peoplex;
    this.y = peopley;
}
}

PlaceholderImage.prototype.draw = function () {
  console.log(this)
  this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
};