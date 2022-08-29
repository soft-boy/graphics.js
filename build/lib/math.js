"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertToAngle = convertToAngle;
exports.convertToComponents = convertToComponents;
exports.pointInPolygon = pointInPolygon;

var radToDeg = function radToDeg(rad) {
  return 360 * (rad / (2 * Math.PI));
};

var degToRad = function degToRad(deg) {
  return 2 * Math.PI * (deg / 360);
};

function convertToComponents(angle, length) {
  return [length * Math.cos(degToRad(angle)), length * Math.sin(degToRad(angle))];
}

function convertToAngle(x, y) {
  if (x === 0) {
    return y > 0 ? Math.PI / 2 : 3 * Math.PI / 2;
  }

  return radToDeg(Math.atan(y / x));
}

function pointInPolygon(x, y, polygon) {
  var inside = false;

  for (var i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    var xi = polygon[i].x,
        yi = polygon[i].y;
    var xj = polygon[j].x,
        yj = polygon[j].y;
    var intersect = yi > y != yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
}