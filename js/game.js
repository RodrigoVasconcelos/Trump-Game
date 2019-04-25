'use strict';

var audioDoh = new Audio("audio/Doh.mp3");
var audioWrong = new Audio("audio/donald-trump-wrong-sound-effect.mp3");
var audioHeartIt = new Audio("audio/Nooo DJT.mp3");
var audioGoodJob = new Audio("audio/Good Job.mp3");
var audioDont = new Audio("audio/Dont hurt him.mp3");
var audioFake = new Audio("audio/donald-trump-fake-news-sound-effect.mp3");

 let niceTrumpSounds = () => {
  var randomNumber = Math.floor(Math.random()*100);

  if (randomNumber < 10) {
    audioGoodJob.play();
  } else if (randomNumber >= 30 && randomNumber < 40) {
      audioDont.play();
  } else if  (randomNumber >= 40 && randomNumber < 50) {
      audioFake.play();
  }
}

class Game {
  constructor (canvas) {
    this.trump = null;
    this.people = [];
    this.american = [];
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.gameOver = false;
    this.pressedKeys = [];
    this.frameCount = 0;
    this.placeholderImage = [];
    this.powerups = [];
  };

    //--------Level 01--------//

  level01() {
    if(Math.random() > 0.99) {
      const randomNumber = (Math.random() * this.canvas.height);
      
      this.people.push(new People(this.canvas, randomNumber));
    } 
  }

    //--------Level 02--------//
  level02() {
    if(Math.random() > 0.985) {
      const randomNumber = (Math.random() * this.canvas.height);
      
      this.people.push(new People(this.canvas, randomNumber));
    } 
  }

    //--------Level 03--------//
  level03() {
    if(Math.random() > 0.985) {
      const randomNumber = Math.random() * this.canvas.height;
      
      this.people.push(new People(this.canvas, randomNumber));
    }
    if(Math.random() > 0.997) {
      const randomNumber = Math.random() * this.canvas.height;
      
      this.american.push(new American(this.canvas, randomNumber));
    }
  } 

    //--------Level 04--------//
  level04 () {
    if(Math.random() > 0.98) {
      const randomNumber = Math.random() * this.canvas.height;

    this.people.push(new People(this.canvas, randomNumber));
    }
    if(Math.random() > 0.996) {
    const randomNumber = Math.random() * this.canvas.height;

    this.american.push(new American(this.canvas, randomNumber));
    }
  }

    //-----------StartLoop-----------//

  startLoop() {
    this.trump = new Trump(this.canvas);
  

    //-----------LOOP-----------//

    const loop = () => {

      const score = document.querySelector('.score-value');
      const lives = document.querySelector('.lives-value');
      this.frameCount++;
      this.frameCount < 600 ? this.level01() : null;
      this.frameCount > 600 && this.frameCount < 1500 ? this.level02() : null;
      this.frameCount > 1500 && this.frameCount < 2700 ? this.level03() : null;
      this.frameCount > 2700 && this.frameCount < 4200 ? this.level04() : null;
      if (Math.random() > 0.9995) {
        this.powerups.push(new Sombrero(this.canvas));
      }

      if (Math.random() > 0.9995) {
        this.powerups.push(new Lives(this.canvas));
      }


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

  //-----------END StartLoop-----------//



  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }

  updateCanvas() {
    this.trump.update();
    this.people.forEach((people) => {
      people.update();
    });
    this.american.forEach((american) => {
      american.update();
    });

    this.placeholderImage.forEach( (placeHolder) => {
      placeHolder.update(this.trump.x,this.trump.y);
    })
  }

  drawCanvas() {
    this.trump.draw();
    this.people.forEach(function(people) {
      people.draw();
    });

    this.american.forEach(function(american) {
      american.draw();
    });

    this.placeholderImage.forEach((placeHolder,index) => {
      placeHolder.draw();
      setTimeout(()=>{
        this.placeholderImage.splice(index,1)},1200);
    })

    this.powerups.forEach(function (powerup) {
      powerup.draw();
    })
  }

  escapeTrump() {
    this.people.forEach( (people,index) => { 

      if (people.y < this.canvas.height/2 - this.trump.size/2) {
        this.trump.setLives();

        let placeHolder = new PlaceholderImage (this.canvas, this.trump.x, this.trump.y, this.people.x, this.people.y);

        placeHolder.image(this.canvas, this.trump.x, this.trump.y, people.x, people.y);
        this.placeholderImage.push(placeHolder)

        this.people.splice(index, 1);

        var randomNumber = Math.floor(Math.random()*100);


        if (randomNumber <= 33) {
          audioDoh.play();      
        } else if (randomNumber > 33 && randomNumber <= 66) {
          audioWrong.play();
        } else {
          audioHeartIt.play();
        }
      }

      if (this.trump.lives === 0) {
        this.startMusic();
        this.gameOver = true;
        setTimeout( () =>{
          this.onGameOver();
        }, 2000);
      }    
    })
  }



  checkCollisions() {
    this.people.forEach((people,  index) => {
      const isCollidingPeople = this.trump.checkCollisionsWithPeople(people);
      
      if(isCollidingPeople) {
        niceTrumpSounds ();
        this.people.splice(index, 1);
        this.trump.setScore();
      }

      this.powerups.forEach((powerUp, index) => {
        if(this.trump.checkCollisionsWithPowerUp(powerUp) && powerUp.type === "sombrero"){
          this.powerups.splice(index,1);
          this.trumpWearingSombrero = true;
          setTimeout(()=>{this.trumpWearingSombrero = false}, 1000)
          }

        if(this.trumpWearingSombrero){
          this.trump.img.src = './img/trump-sombrero-14.png';
          this.trump.width = 1.33;
          this.trump.size = 120;
        } 
        else {
          this.trump.img.src = './img/T-02.png';
          this.trump.width = 1;
          this.trump.size = 90;
        }

        if(this.trump.checkCollisionsWithPowerUp(powerUp) && powerUp.type === "lives") {
          this.trump.lives++;
          this.powerups.splice(index,1);
        } 
      })
    });

    this.american.forEach((american, index) => {
      const isCollidingAmerican = this.trump.checkCollisionsWithAmerican(american);

      if (isCollidingAmerican) {
        let placeHolder = new PlaceholderImage (this.canvas, this.trump.x, this.trump.y, this.people.x, this.people.y);
        placeHolder.image(this.canvas, this.trump.x, this.trump.y);
        this.placeholderImage.push(placeHolder)
        this.american.splice(index, 1);
        this.trump.setLives();

        if (this.trump.lives === 0) {
          this.startMusic();
          this.gameOver = true;
          setTimeout( () =>{
          this.onGameOver();
          }, 2000);
        }
      }
    })
  };

  setGameOverCallback = function (buildGameOverScreen, startMusic, stopMusic) {
    this.onGameOver = buildGameOverScreen;
    this.startMusic = function() {startMusic()}
  }
}