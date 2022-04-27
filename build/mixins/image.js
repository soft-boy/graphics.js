"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawImage = drawImage;
exports.getImageHeight = getImageHeight;
exports.getImageWidth = getImageWidth;
exports.loadImage = loadImage;

var xor = function xor(a, b) {
  return a || b && !(a && b);
}; // TODO: make work with filename not file, transparentColor


function loadImage(file) {
  var transparentColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var rotate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var scale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
  var flipHorizontal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var flipVertical = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var image = new Image();
  image.src = file;
  image.width *= scale;
  image.height *= scale;
  image.rotate = rotate;
  image.flipHorizontal = flipHorizontal;
  image.flipVertical = flipVertical;
  return image;
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