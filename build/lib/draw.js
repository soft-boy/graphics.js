"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawCircle = drawCircle;
exports.drawEllipse = drawEllipse;
exports.drawLine = drawLine;
exports.drawPixel = drawPixel;
exports.drawPolygon = drawPolygon;
exports.drawRectangle = drawRectangle;
exports.drawString = drawString;
exports.fillCircle = fillCircle;
exports.fillEllipse = fillEllipse;
exports.fillPolygon = fillPolygon;
exports.fillRectangle = fillRectangle;

var _colors = _interopRequireDefault(require("../lib/colors.js"));

function drawPixel(x, y) {
  var color = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "black";
  window._graphics.ctx.fillStyle = _colors["default"][color] || color;

  window._graphics.ctx.fillRect(x, y, 1, 1);
}

function drawLine(x1, y1, x2, y2) {
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  var thickness = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2;
  window._graphics.ctx.strokeStyle = _colors["default"][color] || color;
  window._graphics.ctx.lineWidth = thickness;

  window._graphics.ctx.beginPath();

  window._graphics.ctx.moveTo(x1, y1);

  window._graphics.ctx.lineTo(x2, y2);

  window._graphics.ctx.stroke();
}

function drawCircle(x, y, radius) {
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "black";
  var thickness = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 2;
  window._graphics.ctx.strokeStyle = _colors["default"][color] || color;
  window._graphics.ctx.lineWidth = thickness;

  window._graphics.ctx.beginPath();

  window._graphics.ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);

  window._graphics.ctx.stroke();
}

function fillCircle(x, y, radius) {
  var color = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "black";
  window._graphics.ctx.fillStyle = _colors["default"][color] || color;

  window._graphics.ctx.beginPath();

  window._graphics.ctx.ellipse(x, y, radius, radius, 0, 0, 2 * Math.PI);

  window._graphics.ctx.fill();
}

function drawEllipse(x, y, width, height) {
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  var thickness = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2;
  window._graphics.ctx.strokeStyle = _colors["default"][color] || color;
  window._graphics.ctx.lineWidth = thickness;

  window._graphics.ctx.beginPath();

  window._graphics.ctx.ellipse(x, y, width / 2, height / 2, 0, 0, 2 * Math.PI);

  window._graphics.ctx.stroke();
}

function fillEllipse(x, y, width, height) {
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  window._graphics.ctx.fillStyle = _colors["default"][color] || color;

  window._graphics.ctx.beginPath();

  window._graphics.ctx.ellipse(x, y, width / 2, height / 2, 0, 0, 2 * Math.PI);

  window._graphics.ctx.fill();
}

function drawRectangle(x, y, width, height) {
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  var thickness = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 2;
  window._graphics.ctx.strokeStyle = _colors["default"][color] || color;
  window._graphics.ctx.lineWidth = thickness;

  window._graphics.ctx.strokeRect(x, y, width, height);
}

function fillRectangle(x, y, width, height) {
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  window._graphics.ctx.fillStyle = _colors["default"][color] || color;

  window._graphics.ctx.fillRect(x, y, width, height);
}

function drawPolygon(pointlist) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "black";
  var thickness = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  window._graphics.ctx.strokeStyle = _colors["default"][color] || color;
  window._graphics.ctx.lineWidth = thickness;

  window._graphics.ctx.beginPath();

  window._graphics.ctx.moveTo(pointlist[0]['x'], pointlist[0]['y']);

  for (var i = 1; i < pointlist.length; i++) {
    window._graphics.ctx.lineTo(pointlist[i]['x'], pointlist[i]['y']);
  }

  window._graphics.ctx.stroke();
}

function fillPolygon(pointlist) {
  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "black";
  window._graphics.ctx.fillStyle = _colors["default"][color] || color;

  window._graphics.ctx.beginPath();

  window._graphics.ctx.moveTo(pointlist[0]['x'], pointlist[0]['y']);

  for (var i = 1; i < pointlist.length; i++) {
    window._graphics.ctx.lineTo(pointlist[i]['x'], pointlist[i]['y']);
  }

  window._graphics.ctx.fill();
}

function drawString(text, x, y) {
  var size = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 30;
  var color = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "black";
  var bold = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var italic = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  window._graphics.ctx.font = "".concat(bold ? 'bold' : '', " ").concat(italic ? 'italic' : '', " ").concat(size, "px serif");
  window._graphics.ctx.fillStyle = _colors["default"][color] || color;

  window._graphics.ctx.fillText(text, x, y);
}