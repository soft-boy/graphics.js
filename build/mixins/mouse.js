"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var _default = function _default(superclass) {
  return /*#__PURE__*/function (_superclass) {
    _inherits(_class, _superclass);

    var _super = _createSuper(_class);

    function _class(canvasElement) {
      var _this;

      _classCallCheck(this, _class);

      _this = _super.call(this, canvasElement);
      _this.mouseX = 0;
      _this.mouseY = 0;
      _this.mouseDown = false;
      _this.mousePressHandlers = [];
      _this.mouseReleaseHandlers = [];
      _this.mouseMoveHandlers = [];
      _this.wheelForwardHandlers = [];
      _this.wheelBackwardHandlers = [];
      canvasElement.addEventListener('mousemove', _this.mouseMoveHandler.bind(_assertThisInitialized(_this)), false);
      canvasElement.addEventListener('mousedown', _this.mouseDownHandler.bind(_assertThisInitialized(_this)), false);
      canvasElement.addEventListener('mouseup', _this.mouseUpHandler.bind(_assertThisInitialized(_this)), false);
      canvasElement.addEventListener('wheel', _this.mouseWheelHandler.bind(_assertThisInitialized(_this)), false);
      return _this;
    }

    _createClass(_class, [{
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
  return {
    x: window._graphics.mouseX,
    y: window._graphics.mouseY
  };
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