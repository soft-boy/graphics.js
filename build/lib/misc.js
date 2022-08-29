"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAllScreenSizes = getAllScreenSizes;
exports.getColorsList = getColorsList;
exports.getFontList = getFontList;
exports.getScreenPixel = getScreenPixel;
exports.getScreenSize = getScreenSize;
exports.getWindowHeight = getWindowHeight;
exports.getWindowWidth = getWindowWidth;
exports.saveScreen = saveScreen;
exports.setBackground = setBackground;
exports.setWindowTitle = setWindowTitle;
exports.sizeString = sizeString;

var _colors = _interopRequireDefault(require("../lib/colors.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function getWindowWidth() {
  return window._graphics.canvas.width;
}

function getWindowHeight() {
  return window._graphics.canvas.height;
}

function getScreenSize() {
  return [window._graphics.canvas.width, window._graphics.canvas.height];
}

function getAllScreenSizes() {
  return [[document.body.clientWidth, document.body.clientHeight]];
} // todo support image


function setBackground(background) {
  if (typeof background === 'string') {
    window._graphics.canvas.style.backgroundColor = background;
  } else if (_typeof(background) === 'object') {
    window._graphics.canvas.style.backgroundColor = "rgb(".concat(background[0], ",").concat(background[1], ",").concat(background[2], ")");
  }
}

function setWindowTitle(title) {
  document.title = title;
}

function getColorsList() {
  return Object.keys(_colors["default"]);
}

function getFontList() {
  return [];
}

function sizeString(text, size, bold, italic, font) {
  window._graphics.ctx.font = "".concat(bold ? 'bold' : '', " ").concat(italic ? 'italic' : '', " ").concat(size, "px serif");

  var textSize = window._graphics.ctx.measureText(text);

  return [textSize.width, textSize.height];
}

function download(url, filename) {
  fetch(url).then(function (response) {
    return response.blob();
  }).then(function (blob) {
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  })["catch"](console.error);
}

function saveScreen(filename) {
  download(this.canvas.toDataURL(), filename);
}

function getScreenPixel(x, y) {
  window._graphics.ctx.getImageData(x, y, 1, 1).data;
}