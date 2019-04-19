class PowerUp {
  constructor  (canvas) {
    this.size = 80;
    this.x = Math.random()*canvas.width;
    this.y = canvas.height;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
  }
}

class Sombrero extends PowerUp {
  constructor (canvas) {
    super(canvas);
    this.img = new Image();
    this.img.src = './img/power-up/sombrero-16.png';
    this.type = 'sombrero';
  }

  draw = () => {
    this.ctx.drawImage(this.img, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
    this.y -=2;
  }
}

class Lives extends PowerUp {
  constructor (canvas) {
    super(canvas);
    this.y = 0;
    this.img = new Image();
    this.img.src = './img/power-up/life-17.png';
    this.type = 'lives';
  }

  draw = () => {
    this.ctx.drawImage(this.img, this.x - this.size/2, this.y - this.size/2, this.size, this.size);
    this.y += 2;
  }
}