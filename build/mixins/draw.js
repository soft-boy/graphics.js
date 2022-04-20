"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawCircle = drawCircle;
exports.drawEllipse = drawEllipse;
exports.drawRectangle = drawRectangle;
exports.fillCircle = fillCircle;
exports.fillEllipse = fillEllipse;
exports.fillRectangle = fillRectangle;

function drawCircle(x, y, radius) {
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "black";
  var thickness = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  window._graphics.ctx.strokeStyle = color;
  window._graphics.ctx.lineWidth = thickness;

  window._graphics.ctx.beginPath();

  window._graphics.ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);

  window._graphics.ctx.stroke();
}

function fillCircle(x, y, radius) {
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "black";
  window._graphics.ctx.fillStyle = color;

  window._graphics.ctx.beginPath();

  window._graphics.ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);

  window._graphics.ctx.fill();
}

function drawEllipse(x, y, width, height) {
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  var thickness = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  window._graphics.ctx.strokeStyle = color;
  window._graphics.ctx.lineWidth = thickness;

  window._graphics.ctx.beginPath();

  window._graphics.ctx.ellipse(x, y, width / 2, height / 2, 0, 0, 2 * Math.PI);

  window._graphics.ctx.stroke();
}

function fillEllipse(x, y, width, height) {
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  window._graphics.ctx.fillStyle = color;

  window._graphics.ctx.beginPath();

  window._graphics.ctx.ellipse(x, y, width / 2, height / 2, 0, 0, 2 * Math.PI);

  window._graphics.ctx.fill();
}

function drawRectangle(x, y, width, height) {
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  var thickness = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1;
  window._graphics.ctx.strokeStyle = color;
  window._graphics.ctx.lineWidth = thickness;
  console.log(color, thickness);

  window._graphics.ctx.strokeRect(x, y, width, height);
}

function fillRectangle(x, y, width, height) {
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  window._graphics.ctx.fillStyle = color;

  window._graphics.ctx.fillRect(x, y, width, height);
}