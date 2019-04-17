# Trump | shall not pass | Game

## Description
The Trump | shall not pass | Game is a game where the objective is to move the trump icon left and right between the border of the USA and Mexico, not allowing the emigrants to get in and letting in/forbidden the americans to leave the coutry (still deciding).  As the game goes along the level increases.


## MVP (DOM - CANVAS)
*CANVAS*, The mvp is a game where the player can move from left to right


## Backlog
- Add elements to interect, like shots or a sombrero to be bigger
- Random people from USA or Mexico 
- Increase level, likehillary clinton



## Data structure
### game.js
```
Game(){
  this.canvas;
  this.ctx;
}

Game.prototype.startLoop() {
  loop()
}

Game.prototype.clearCanvas() {
}

Game.prototype.updateCanvas() {
}

Game.prototype.redrawCanvas() {
}

Game.prototype.setTime() {
}

Game.prototype.checkCollisons() {
}

Game.prototype.nextLevel() {
}
```

### character.js
```
Trump(){
  this.lives;
  this.x;
  this.y;
  this.size;
  this.canvas;
  this.ctx;
  this.speed;
}



Trump.prototype.draw(){
}

Trump.prototype.update(){
}

Trump.prototype.setLives(){
}

Trump.prototype.setDirection(){
}

Trump.prototype.checkCollision(){
}

Trump.prototype.gameOver(){
}

Trump.prototype.win(){
}
```

### people.js
```
People(){
  this.x;
  this.y;
  this.size;
  this.speed;
  this.canvas;
  this.ctx;
}

People.prototype.update(){
};

People.prototype.draw(){
};
```


## States y States Transitions
```
- splashScreen()
  - buildSplashScreen()
  - button.addEventListener(startGameScreen)
  
  
- GameScreen()
  - startLoop()
  - clearCanvas()
  - updateCanvas()
  - redrawCanvas()
  - checkColisions()
  
  
- gameOver()
  - button.addEventListener(restartGame) 
```

## Task
- Main - buildDom
- Main - buildSplash
- Main - addEventListener
- Main - startGame
- Main - gameOver
- Game - starLoop (loop)
- Game - canvas (clear,update,redraw )
- Game - checkColisions
- Game - nextLevel
- Game - setTimer
- Trump - speed
- Trump - setDirections
- Trump - canvas (clear,update,redraw )
- Trump - colisions
- Trump - setLives
- People - canvas (clear,update,redraw )
- Peolple - mexican
- People - American
