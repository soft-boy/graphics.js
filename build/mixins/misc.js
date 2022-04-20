"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getScreenSize = getScreenSize;
exports.getWindowHeight = getWindowHeight;
exports.getWindowWidth = getWindowWidth;

function getWindowWidth() {
  return window._graphics.canvas.width;
}

function getWindowHeight() {
  return window._graphics.canvas.height;
}

function getScreenSize() {
  return {
    width: window._graphics.canvas.width,
    height: window._graphics.canvas.height
  };
}