"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawImage = drawImage;
exports.getImageHeight = getImageHeight;
exports.getImageWidth = getImageWidth;
exports.loadImage = loadImage;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var xor = function xor(a, b) {
  return a || b && !(a && b);
}; // TODO: make work with filename not file, transparentColor


function loadImage(_x) {
  return _loadImage.apply(this, arguments);
}

function _loadImage() {
  _loadImage = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(file) {
    var transparentColor,
        rotate,
        scale,
        flipHorizontal,
        flipVertical,
        image,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            transparentColor = _args.length > 1 && _args[1] !== undefined ? _args[1] : null;
            rotate = _args.length > 2 && _args[2] !== undefined ? _args[2] : 0;
            scale = _args.length > 3 && _args[3] !== undefined ? _args[3] : 1;
            flipHorizontal = _args.length > 4 && _args[4] !== undefined ? _args[4] : false;
            flipVertical = _args.length > 5 && _args[5] !== undefined ? _args[5] : false;
            image = new Image();
            image.src = file;
            image.width *= scale;
            image.height *= scale;
            image.rotate = rotate;
            image.flipHorizontal = flipHorizontal;
            image.flipVertical = flipVertical;
            return _context.abrupt("return", new Promise(function (resolve, reject) {
              image.onload = function () {
                resolve(image);
              };
            }));

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadImage.apply(this, arguments);
}

function drawImage(image, x, y) {
  var rotate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var scale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 1;
  var flipHorizontal = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var flipVertical = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  var width = getImageWidth(image);
  var height = getImageHeight(image);

  window._graphics.ctx.save(); // scale


  window._graphics.ctx.scale(scale, scale); // rotate


  window._graphics.ctx.translate(width / 2 + x, height / 2 + y);

  window._graphics.ctx.rotate((image.rotate + rotate) * Math.PI / 180);

  window._graphics.ctx.translate(-(width / 2 + x), -(height / 2 + y)); // flip


  if (xor(flipHorizontal, image.flipHorizontal)) {
    console.log('flipHorizontal');

    window._graphics.ctx.translate(width, 0);

    window._graphics.ctx.scale(-1, 1);
  }

  if (xor(flipVertical, image.flipVertical)) {
    console.log('flipVertical');

    window._graphics.ctx.translate(0, height);

    window._graphics.ctx.scale(1, -1);
  }

  window._graphics.ctx.drawImage(image, x, y, width, height);

  window._graphics.ctx.restore();
}

function getImageWidth(image) {
  return image.width;
}

function getImageHeight(image) {
  return image.height;
}