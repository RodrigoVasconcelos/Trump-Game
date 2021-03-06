'use strict';

class People  {
  constructor (canvas, x) {
    this.speed = 3;
    this.size = 80;
    this.direction = -1;
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.y = this.canvas.height;
    this.x = x;
    this.randomNum = () =>{
      let americanImage = ['mexican-21.png', 'mexican-22.png', 'mexican-23.png', 'mexican-24.png'];
      var result = Math.floor(Math.random()*4);
      return `./img/${americanImage[result]}`;
      }
    this.img = new Image();
    this.img.src = this.randomNum();
    this.increase = Math.random() * 4;
  }


  draw() {
    this.ctx.drawImage(this.img, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
  };

  update () {
    this.y = this.y + this.direction * this.speed;
    if(Math.random() > 0.97){
      this.increase = Math.random() * 4;
    }
    this.x += this.increase;

  }
}