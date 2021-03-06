'use strict';

class PlaceholderImage {
  constructor (canvas,trumpx, trumpy, peoplex, peopley) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.x;
    this.y;
    this.size = 120;
    this.img = new Image();
    this.isTrump = false;
  }

  image(canvas, trumpx, trumpy, peoplex, peopley) {
    var popImgs = ["PopArt-05-05.svg", "PopArt-05-06.svg", "PopArt-05-07.svg", "PopArt-05-11.svg", "PopArt-05-12.svg", "PopArt-05-13.svg", "PopArt-05-08.svg", "PopArt-05-09.svg", "PopArt-05-10.svg"];
    var randomNum = Math.floor(Math.random()*9);

    if (randomNum < 6) {
      if (trumpx + this.size > this.canvas.width) {
        this.img.src = `./img/popART/${popImgs[randomNum]}`;
        this.x = trumpx - this.size;
        this.y = trumpy;
        } else {
      this.img.src = `./img/popART/${popImgs[randomNum]}`;
      this.x = trumpx;
      this.y = trumpy;
      this.isTrump = true;
      }
    } else if (randomNum >= 6) {
      this.img.src = `./img/popART/${popImgs[randomNum]}`;
      this.x = peoplex;
      this.y = peopley;
    }
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.size, this.size);
  };

  update(trumpx, trumpy) {
    if(this.isTrump) {
    this.x = trumpx;
    this.y = trumpy;
    }
  }
}