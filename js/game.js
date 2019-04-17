'use strict';

function Game(canvas) {
  this.trump = null;
  this.people = [];
  this.american = [];
  this.canvas = canvas;
  this.ctx = this.canvas.getContext('2d');
  this.gameOver = false;
  this.survivers = [];
  this.pressedKeys = [];
  this.frameCount = 0;
}

var popImages = ["one", "two", "three"];


//--------Level 01--------//

Game.prototype.level01 = function () {
  if(Math.random() > 0.99) {
    const randomNumber = (Math.random() * this.canvas.height);
    
    this.people.push(new People(this.canvas, randomNumber));
  } 
  console.log('01');
}

//--------Level 02--------//
Game.prototype.level02 = function () {
  if(Math.random() > 0.98) {
    const randomNumber = (Math.random() * this.canvas.height);
    
    this.people.push(new People(this.canvas, randomNumber));
  } 
  console.log('02');
}

//--------Level 03--------//
Game.prototype.level03 = function () {
  if(Math.random() > 0.98) {
    const randomNumber = Math.random() * this.canvas.height;
    
    this.people.push(new People(this.canvas, randomNumber));
  }
  if(Math.random() > 0.995) {
    const randomNumber = Math.random() * this.canvas.height;
    
    this.american.push(new American(this.canvas, randomNumber));
  }
  console.log('03');
} 

//--------Level 03--------//
Game.prototype.level04 =  function () {
  if(Math.random() > 0.985) {
    const randomNumber = Math.random() * this.canvas.height;

  this.people.push(new People(this.canvas, randomNumber));
  }
  if(Math.random() > 0.992) {
  const randomNumber = Math.random() * this.canvas.height;

  this.american.push(new American(this.canvas, randomNumber));
  }
  console.log('04');
}


Game.prototype.startLoop = function () {

  this.trump = new Trump(this.canvas);
  

//-----------LOOP-----------//

  const loop = () => {

    const score = document.querySelector('.score-value');
    const lives = document.querySelector('.lives-value');
    this.frameCount++;
    console.log(this.frameCount);
    this.frameCount < 100 ? this.level01() : null;
    this.frameCount > 100 && this.frameCount < 1000 ? this.level02() : null;
    this.frameCount > 1000 && this.frameCount < 6000 ? this.level02() : null;
    this.frameCount > 6000 && this.frameCount < 10000 ? this.level02() : null;
    /*function level01 (canvas, people) {



    setTimeout(level01(this.canvas, this.people),0);

    //--------Level 02--------//

    setTimeout(() => {
      if(Math.random() > 0.99) {
        const randomNumber = (Math.random() * this.canvas.height);

        this.people.push(new People(this.canvas, randomNumber));
    };
    clearTimeout(level01())
    console.log('02')
    }, 3000);*/

    

    this.clearCanvas();
    this.updateCanvas();
    this.drawCanvas();
    this.escapeTrump();
    this.checkCollisions();

    if (this.trump.score < 10) {
      score.innerHTML = "00" +this.trump.score;
    } else if (this.trump.score < 100) {
      score.innerHTML = "0" +this.trump.score;
    }
    lives.innerHTML = this.trump.lives;


    if (this.gameOver === false) {

      window.requestAnimationFrame(loop);
    }
  }
  
  window.requestAnimationFrame(loop)
}


Game.prototype.clearCanvas = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
}

Game.prototype.updateCanvas = function () {
  this.trump.update();
  this.people.forEach(function(people) {
    people.update();
  });
  this.american.forEach(function(american) {
    american.update();
  });
}

Game.prototype.drawCanvas = function () {
  this.trump.draw();
  this.people.forEach(function(people) {
    people.draw();
  });
  this.american.forEach(function(american) {
    american.draw();
  });
}

Game.prototype.escapeTrump = function () {

  this.people.forEach( (people,index) => { 

    if (people.y < this.canvas.height/2 - this.trump.size/2) {
      this.trump.setLives();
      ///////////////////////////////////
      // let placeholderImage = new PlaceHolder(canvas,people.x,people.y)
      this.people.splice(index, 1);
      this.survivers.push(people);
    }

    if (this.trump.lives === 0) {
      this.gameOver = true;
      this.onGameOver();
    }    
  })
}

Game.prototype.checkCollisions = function () {
  this.people.forEach((people,  index) => {
    const isCollidingPeople = this.trump.checkCollisionsWithPeople(people);
    
    if(isCollidingPeople) {
      
      this.people.splice(index, 1);
      this.trump.setScore();
    }
  });
  this.american.forEach((american, index) => {
    const isCollidingAmerican = this.trump.checkCollisionsWithAmerican(american);

    if (isCollidingAmerican) {
      this.american.splice(index, 1);
      this.trump.setLives();
    }
  }) 
}


Game.prototype.setGameOverCallback = function (buildGameOverScreen) {
  this.onGameOver = buildGameOverScreen;
}