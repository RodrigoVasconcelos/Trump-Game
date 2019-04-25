'use strict';

  var gameAudio = new Audio('audio/USANationalAnthemTechnoRemix.mp3');
  var audio32doh = new Audio("audio/32 Dohs from many episodes .mp3");


function main() {

  const mainElement = document.querySelector('main');

  function buildDom (html) {
    mainElement.innerHTML = html;
    return mainElement;
  }

  //-------BUILD SPLASH SCREEN-------//


  function buildSplashScreen() {
    const splashScreen = buildDom(`
    <section  class="start-window">
    <div>
    <img src="./img/game-logo-03.svg" alt="">
    <input  class="start-button" type="button" value="Start">
    </div>
    </section>
    `);



    

    const starButton = document.querySelector('.start-button');

    starButton.addEventListener('click',buildIntructuionScreen);

    window.onkeydown = function(event) {
      if(event.keyCode === 32) {
        event.preventDefault();
        document.querySelector('.start-button').click();
    }
    };  
  };


  //-------BUILD Instruction SCREEN-------//

    function buildIntructuionScreen() {
    const splashScreen = buildDom(`
    <section  class="start-window">
    
    <div class="instructions">
    <img src="./img/trump-slide.gif" class="trump">
    <h1>Instructions:</h1>
    <p>slide Trump left and right using the arrows to catch the emigrants!!</p>
    <p class="right">Be careful with the americans!!</p>
    <img class="arrow" src="./img/arrow.gif">
    </div>
    <div>
    <input  class="start-button" type="button" value="Start">
    </div>
    </section>
    `);



    

    const starButton = document.querySelector('.start-button');

    starButton.addEventListener('click',buildGameScreen);

    window.onkeydown = function(event) {
      if(event.keyCode === 32) {
        event.preventDefault();
        document.querySelector('.start-button').click();
    }
    };  
  };

  //-------BUILD GAME SCREEN-------//


  function buildGameScreen() {
    const gameScreen = buildDom(`
    <header class="header">
    <img class="logo" src="./img/game-logo-03." alt="Shall Not Pass">
    <div class="side-bar">
      <p>Lives:  <span class="lives-value">0</span></p>
      <p>Score: <span class="score-value">0000</span></p>
    </div>

</header>
    <section class="game-container">
    <canvas></canvas>
    </section>
    `);

    gameAudio.play();
    gameAudio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
    }, false);

    const gameContainerElement = document.querySelector('.game-container');

    const width = gameContainerElement.offsetWidth;
    const height = gameContainerElement.offsetHeight;

    const  canvasElement = document.querySelector('canvas');
    canvasElement.setAttribute('width', width);
    canvasElement.setAttribute('height', height); 


    const game = new Game(canvasElement);
    
    game.startLoop();    

    game.setGameOverCallback(buildGameOverScreen, startMusic, stopMusic);
    
    document.addEventListener('keydown', function (event) {


      if (event.keyCode === 37) {
        game.trump.setDirection(-1);
      } else if (event.keyCode === 39) {
        game.trump.setDirection(1);
      }
    })

    document.addEventListener('keyup', function () {

      if(event.keyCode === 37 || event.keyCode === 39) {
        game.trump.setDirection(0);
      }
    })


  };

  //-------BUILD GAME OVER-------//


  function buildGameOverScreen() {

    const gameOverScreen = buildDom(`
      <section class="gameover-window">
        <img src="./img/gameover.gif">
        <button class="restart-button">Restart</buttton>
      </section>
    `);

    //button restart
    const restartButton = document.querySelector('.restart-button');
    restartButton.addEventListener('click', function(){
      buildGameScreen();
      stopMusic();
      });

    //space key reset
    window.onkeydown = function(event) {
      if(event.keyCode === 32) {
        event.preventDefault();
        document.querySelector('.restart-button').click();
    }
    };  

  };

  buildSplashScreen();

  let stopMusic = () => {
    audio32doh.pause();
    audio32doh.currentTime = 0;
  }
   let startMusic = () => {
    audio32doh.play();
  }

}



window.addEventListener('load', main);
