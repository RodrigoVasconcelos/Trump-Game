'use strict';

function Trump (canvas) {
  this.lives = 3;
  this.canvas = canvas;
  this.x = this.canvas.width/2;
  this.y = this.canvas.height/2 - 10;
  this.size = 90;
  this.ctx = this.canvas.getContext('2d');
  this.speed = 10;
  this.direction = 0;
  this.img = new Image();
  this.img.src = './img/T-02.png';
  this.score = 0;
}

Trump.prototype.draw = function () {
  this.ctx.drawImage(this.img, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
}

Trump.prototype.update = function () {
  if (this.x - this.size/2 > 0  && this.x + this.size/2 < this.canvas.width) {
    this.x = this.x + this.direction * this.speed;
  } else if (this.x > this.canvas.width - this.size) {
    this.x--
  } else {
    this.x++;
  }
}

Trump.prototype.setDirection = function (newDirection) {
  this.direction = newDirection;
}

Trump.prototype.setScore = function () {
  this.score ++;
}

Trump.prototype.setLives = function () {
  this.lives --;
}

Trump.prototype.checkCollisionsWithPeople = function (people) {
  const collisionsRightPeople = this.x + this.size/2 > people.x - people.size/2;
  const collisionsLeftPeople = this.x - this.size/2 < people.x + people.size/2;
  const collisionsTopPeople = this.y - this.size/4 < people.y + people.size/2;
  const collisionsBottomPeople = this.y + this.size/4 > people.y - people.size/2;

  return collisionsRightPeople && collisionsLeftPeople && collisionsTopPeople && collisionsBottomPeople;
};

Trump.prototype.checkCollisionsWithAmerican = function (american) {

  const collisionsRightAmerican = this.x + this.size/2 > american.x - american.size/2;
  const collisionsLeftAmerican = this.x - this.size/2 < american.x + american.size/2;
  const collisionsTopAmerican = this.y - this.size/2 < american.y + american.size/2;
  const collisionsBottomAmerican = this.y + this.size/2 > american.y - american.size/2;

  return collisionsRightAmerican && collisionsLeftAmerican && collisionsTopAmerican && collisionsBottomAmerican;
};