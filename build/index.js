"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawCircle = drawCircle;
exports.drawEllipse = drawEllipse;
exports.drawRectangle = drawRectangle;
exports.fillCircle = fillCircle;
exports.fillEllipse = fillEllipse;
exports.fillRectangle = fillRectangle;
Object.defineProperty(exports, "isKeyPressed", {
  enumerable: true,
  get: function get() {
    return _keyboard.isKeyPressed;
  }
});
exports.makeGraphicsWindow = makeGraphicsWindow;
exports.runGraphics = runGraphics;

var _keyboard = _interopRequireWildcard(require("./mixins/keyboard"));

var _mouse = _interopRequireDefault(require("./mixins/mouse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

window._graphics = null;

var Base = /*#__PURE__*/_createClass(function Base() {
  _classCallCheck(this, Base);
});

var SimpleWebGraphics = /*#__PURE__*/function (_KeyboardMixin) {
  _inherits(SimpleWebGraphics, _KeyboardMixin);

  var _super = _createSuper(SimpleWebGraphics);

  function SimpleWebGraphics(canvasElement) {
    var _this;

    _classCallCheck(this, SimpleWebGraphics);

    _this = _super.call(this, canvasElement);
    _this.canvas = canvasElement;
    _this.ctx = canvasElement.getContext('2d');
    return _this;
  }

  _createClass(SimpleWebGraphics, [{
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }]);

  return SimpleWebGraphics;
}((0, _keyboard["default"])((0, _mouse["default"])(Base)));

function makeGraphicsWindow(canvasElement) {
  window._graphics = new SimpleWebGraphics(canvasElement);
}

function runGraphics(startWorld, updateWorld, drawWorld) {
  var world = {};

  var iterateGraphics = function iterateGraphics() {
    updateWorld(world);

    window._graphics.clearCanvas();

    drawWorld(world);
  };

  startWorld(world);
  setInterval(iterateGraphics, 10);
}

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