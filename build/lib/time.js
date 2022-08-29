"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.displayFPS = displayFPS;
exports.getActualFrameRate = getActualFrameRate;
exports.getElapsedTime = getElapsedTime;
exports.onTimer = onTimer;
exports.resetTime = resetTime;
exports.setFrameRate = setFrameRate;

function onTimer(listenerFunction, interval) {
  return setInterval(listenerFunction, interval);
}

function getElapsedTime() {
  return new Date() - window._graphics.startTime;
}

function resetTime() {
  window._graphics.startTime = new Date();
}

function setFrameRate(framerate) {
  window._graphics.targetFps = framerate;
  window._graphics.deltas = [];
}

function displayFPS(interval) {
  window._graphics.displayFpsInterval = 1000 * interval;
}

function getActualFrameRate() {
  var arrAvg = function arrAvg(arr) {
    return arr.reduce(function (a, b) {
      return a + b;
    }, 0) / arr.length;
  };

  var avgDelta = arrAvg(window._graphics.deltas);
  return 1000 / avgDelta;
}