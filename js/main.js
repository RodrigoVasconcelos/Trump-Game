'use strict';

    var gameAudio = new Audio('./audio/USA National Anthem Techno Remix.mp3');


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

    starButton.addEventListener('click', buildGameScreen);

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
    <div class="side-bar">
      <p>Time</p>
      <p class="chronotime">00:00:00</p>
    </div>
    <img class="logo" src="./img/game-logo-03.svg" alt="Shall Not Pass">
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

    game.setGameOverCallback(buildGameOverScreen);
    
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
        <h1>GAME OVER</h1>
        <button class="restart-button">Restart</buttton>
      </section>
    `);

    //button restart
    const restartButton = document.querySelector('.restart-button');
    restartButton.addEventListener('click', buildGameScreen);

    //space key reset
    window.onkeydown = function(event) {
      if(event.keyCode === 32) {
        event.preventDefault();
        document.querySelector('.restart-button').click();
    }
    };  

  };

  buildSplashScreen();

  

}



window.addEventListener('load', main);
