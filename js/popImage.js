'use strict';

function PlaceholderImage (canvas,trumpx, trumpy, peoplex, peopley) {
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.x;
  this.y;
  this.size = 50;
}

var popImgs = ["PopArt-05-05.png", "PopArt-05-06.png", "PopArt-05-07.png", "PopArt-05-08.png", "PopArt-05-09.png", "PopArt-05-10.png"]

PlaceholderImage.prototype.img = function (canvas,trumpx, trumpy, peoplex, peopley) {
  var randomNum = Math.floor(Math.random()*6);

  if (randomNum < 3) {
    this.img.scr = "Trump-Game/img/popART/$(popImgs[randomNum])";
    this.x = trump.x;
    this.y = trump.y;
  } else if (randomNum >= 3) {
    this.img.scr = "Trump-Game/img/popART/$(popImgs[randomNum])";
    this.x = people.x;
    this.y = people.y;
}
}

PlaceholderImage.prototype.draw = function (canvas,trumpx, trumpy, peoplex, peopley) {
  this.ctx.drawImage(this.img, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
};

PlaceholderImage.prototype.update = function () {

}