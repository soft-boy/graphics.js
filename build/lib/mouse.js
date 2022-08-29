"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getMouseButton = getMouseButton;
exports.getMousePosition = getMousePosition;
exports.hideMouse = hideMouse;
exports.moveMouse = moveMouse;
exports.onMouseMotion = onMouseMotion;
exports.onMousePress = onMousePress;
exports.onMouseRelease = onMouseRelease;
exports.onWheelBackward = onWheelBackward;
exports.onWheelForward = onWheelForward;
exports.showMouse = showMouse;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var _default = function _default(superclass) {
  return /*#__PURE__*/function (_superclass) {
    (0, _inherits2["default"])(_class, _superclass);

    var _super = _createSuper(_class);

    function _class(canvasElement) {
      var _this;

      (0, _classCallCheck2["default"])(this, _class);
      _this = _super.call(this, canvasElement);
      _this.mouseX = 0;
      _this.mouseY = 0;
      _this.mouseDown = false;
      _this.mousePressHandlers = [];
      _this.mouseReleaseHandlers = [];
      _this.mouseMoveHandlers = [];
      _this.wheelForwardHandlers = [];
      _this.wheelBackwardHandlers = [];
      canvasElement.addEventListener('mousemove', _this.mouseMoveHandler.bind((0, _assertThisInitialized2["default"])(_this)), false);
      canvasElement.addEventListener('mousedown', _this.mouseDownHandler.bind((0, _assertThisInitialized2["default"])(_this)), false);
      canvasElement.addEventListener('mouseup', _this.mouseUpHandler.bind((0, _assertThisInitialized2["default"])(_this)), false);
      canvasElement.addEventListener('wheel', _this.mouseWheelHandler.bind((0, _assertThisInitialized2["default"])(_this)), false);
      return _this;
    }

    (0, _createClass2["default"])(_class, [{
      key: "mouseMoveHandler",
      value: function mouseMoveHandler(e) {
        var _this2 = this;

        this.mouseX = e.offsetX;
        this.mouseY = e.offsetY; // TODO: mouse buttons

        this.mouseMoveHandlers.forEach(function (func) {
          return func(window.world, _this2.mouseX, _this2.mouseY, e.movementX, e.movementY, _this2.mouseDown, false, false);
        });
      }
    }, {
      key: "mouseDownHandler",
      value: function mouseDownHandler() {
        var _this3 = this;

        this.mouseDown = true;
        this.mousePressHandlers.forEach(function (func) {
          return func(window.world, _this3.mouseX, _this3.mouseY, 1);
        });
      }
    }, {
      key: "mouseUpHandler",
      value: function mouseUpHandler() {
        var _this4 = this;

        this.mouseDown = false;
        this.mouseReleaseHandlers.forEach(function (func) {
          return func(window.world, _this4.mouseX, _this4.mouseY, 1);
        });
      }
    }, {
      key: "mouseWheelHandler",
      value: function mouseWheelHandler(e) {
        var _this5 = this;

        if (e.deltaY > 0) {
          //up
          this.wheelForwardHandlers.forEach(function (func) {
            return func(window.world, _this5.mouseX, _this5.mouseY);
          });
        } else {
          // down
          this.wheelBackwardHandlers.forEach(function (func) {
            return func(window.world, _this5.mouseX, _this5.mouseY);
          });
        }
      }
    }]);
    return _class;
  }(superclass);
};

exports["default"] = _default;

function getMousePosition() {
  return [window._graphics.mouseX, window._graphics.mouseY];
} // TODO: buttons for multi button mouse


function getMouseButton(button) {
  return window._graphics.mouseDown;
}

function onMousePress(listenerFunction) {
  window._graphics.mousePressHandlers.push(listenerFunction);
}

function onMouseRelease(listenerFunction) {
  window._graphics.mouseReleaseHandlers.push(listenerFunction);
}

function onWheelForward(listenerFunction) {
  window._graphics.wheelForwardHandlers.push(listenerFunction);
}

function onWheelBackward(listenerFunction) {
  window._graphics.wheelBackwardHandlers.push(listenerFunction);
}

function onMouseMotion(listenerFunction) {
  window._graphics.mouseMoveHandlers.push(listenerFunction);
}

function hideMouse() {
  window._graphics.canvas.style.cursor = 'none';
}

function showMouse() {
  window._graphics.canvas.style.cursor = 'unset';
}

function moveMouse(x, y) {
  console.log('moveMouse is not possible in JS 😢');
}