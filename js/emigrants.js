'use strict';

function People (canvas, x) {
  this.speed = 3;
  this.size = 80;
  this.direction = -1;
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.y = this.canvas.height;
  this.x = x;
  this.img = new Image();
  this.img.src = './img/people-03.png';
  this.increase = Math.random() * 4;
}

People.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
};

People.prototype.update = function () {
  this.y = this.y + this.direction * this.speed;
  if(Math.random() > 0.97){
    this.increase = Math.random() * 4;
  }
  this.x += this.increase;

}
