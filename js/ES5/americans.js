'use strict';

function American (canvas, x) {
  this.speed = 2;
  this.size = 80;
  this.direction = 1;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.y = 0;
  this.x = x;
  this.randomNum = function(){
    let americanImage = ['american-19.png', 'american-20.png'];
     var result = Math.floor(Math.random()*2)
    return `./img/${americanImage[result]}`;
  }
  this.img = new Image();
  this.img.src = this.randomNum();
  this.increase = Math.random() * 4;
}

let americanImage = ['american-19.png', 'american-20.png'];

var randomNum = function () {
  var result = Math.floor(Math.random()*2)
  return result;
};


American.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
};

American.prototype.update = function () {
  this.y = this.y + this.direction * this.speed;
  if(Math.random() > 0.97){
    this.increase = Math.random() * 4;
  }
  this.x += this.increase;
}