/*function TimeGame () {
  this.startTime = 0;
  this.currentTime;
}

TimeGame.prototype.start = function () {
  this.startTime = new Date();
}

TimeGame.prototype.timeFormat = function () {
  this.currentTime = new Date();

  const timePassed = this.currentTime - this.startTime;

  var minutes = timePassed.getMinutes().toString();
  var seconds = timePassed.getSeconds().toString();
  var milliseconds = timePassed.getMilliseconds().toString();

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  if (milliseconds.length < 2) {
    milliseconds = '0' + milliseconds;
  }

  return minutes + ' : ' + seconds + ' : ' + milliseconds;
}







/*
function TimerGame() {
  this.time = 0;
  this.offset;
  this.interval;
  this.isOn = false;
}
  
TimerGame.prototype.update = function () {
  if (this.isOn) {
    this.time += this.delta();
  }
}

TimerGame.prototype.delta = function () {
  var now = Date.now();
  var timePassed = now - this.offset;

  this.offset = now;

  return timePassed;
}

TimerGame.prototype.timeFormatter = function () {
    this.time = new Date();

    var minutes = this.time.getMinutes().toString();
    var seconds = this.time.getSeconds().toString();
    var milliseconds = this.time.getMilliseconds().toString();

    if (minutes.length < 2) {
      minutes = '0' + minutes;
    }

    if (seconds.length < 2) {
      seconds = '0' + seconds;
    }

    if (milliseconds.length < 2) {
      milliseconds = '0' + milliseconds;
    }

    return minutes + ' : ' + seconds + ' : ' + milliseconds;
  }

  TimerGame.prototype.start = function() {
    this.interval = setInterval(this.update.bind(this), 10);
    this.offset = Date.now();
    this.isOn = true;
  };

  TimerGame.prototype.stop = function() {
    clearInterval(interval);
    this.interval = null;
    this.isOn = false;
  };

  TimerGame.prototype.reset = function() {
    this.time = 0;
    this.update();
  };


*/
