'use strict';

function Chronometer () {
  this.start = 0;
  this.end = 0;
  this.difference = 0;
  this.timerID = 0;
}

Chronometer.prototype.chrono = function () {
  this.end = new Date();
  this.difference = this.end - this.start;
  this.difference = new Date(this.difference);

  var millsec = this.difference.getMilliseconds();
  var sec = this.difference.getSeconds();
  var min = this.difference.getMinutes();

  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (millsec < 10) {
    millsec = "0" + millsec;
  }

  document.getElementById('.chronotime').innerHTML = min + ":" + sec + ":" + millsec;
  this.timerID = setTimeout('chrono()', 10);
}

Chronometer.prototype.chronoStart = function () {
  this.start = new Date();
  this.chrono();
}

Chronometer.prototype.chronoReset = function () {
  this.start = new Date();
}

/*
function chronoStart(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()
	chrono()
}
function chronoContinue(){
	document.chronoForm.startstop.value = "stop!"
	document.chronoForm.startstop.onclick = chronoStop
	document.chronoForm.reset.onclick = chronoReset
	start = new Date()-diff
	start = new Date(start)
	chrono()
}
function chronoReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	start = new Date()
}
function chronoStopReset(){
	document.getElementById("chronotime").innerHTML = "0:00:00:000"
	document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
	document.chronoForm.startstop.value = "start!"
	document.chronoForm.startstop.onclick = chronoContinue
	document.chronoForm.reset.onclick = chronoStopReset
	clearTimeout(timerID)
}









var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono(){
	end = new Date()
	diff = end - start
	diff = new Date(diff)
	var msec = diff.getMilliseconds()
	var sec = diff.getSeconds()
	var min = diff.getMinutes()
	if (min < 10){
		min = "0" + min
	}
	if (sec < 10){
		sec = "0" + sec
	}
	if(msec < 10){
		msec = "00" +msec
	}
	else if(msec < 100){
		msec = "0" +msec
	}
	document.getElementById("chronotime").innerHTML = min + ":" + sec + ":" + msec
	timerID = setTimeout("chrono()", 10)
}*/