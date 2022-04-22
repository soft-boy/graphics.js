"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.isKeyPressed = isKeyPressed;
exports.onAnyKeyPress = onAnyKeyPress;
exports.onAnyKeyRelease = onAnyKeyRelease;
exports.onKeyPress = onKeyPress;
exports.onKeyRelease = onKeyRelease;

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

var keyNameMap = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ' ': 'space',
  Enter: 'enter',
  Backspace: 'backspace',
  Shift: 'shift',
  Tab: 'tab',
  Alt: 'alt',
  Control: 'control',
  Meta: 'meta',
  CapsLock: 'capslock',
  Escape: 'escape'
};

var _default = function _default(superclass) {
  return /*#__PURE__*/function (_superclass) {
    _inherits(_class, _superclass);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      _classCallCheck(this, _class);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _super.call.apply(_super, [this].concat(args));
      _this.keysDown = {};
      _this.keyPressHandlers = {
        any: []
      };
      _this.keyReleaseHandler = {
        any: []
      };
      document.addEventListener('keydown', _this.keyDownHandler.bind(_assertThisInitialized(_this)), false);
      document.addEventListener('keyup', _this.keyUpHandler.bind(_assertThisInitialized(_this)), false);
      return _this;
    }

    _createClass(_class, [{
      key: "keyDownHandler",
      value: function keyDownHandler(e) {
        var _this$keyPressHandler;

        var key = keyNameMap[e.key] || e.key;
        if (this.keysDown[key]) return;
        this.keysDown[key] = true;
        this.keyPressHandlers['any'].forEach(function (func) {
          return func(window.world);
        });
        (_this$keyPressHandler = this.keyPressHandlers[key]) === null || _this$keyPressHandler === void 0 ? void 0 : _this$keyPressHandler.forEach(function (func) {
          return func(window.world, key);
        });
      }
    }, {
      key: "keyUpHandler",
      value: function keyUpHandler(e) {
        var _this$keyReleaseHandl;

        var key = keyNameMap[e.key] || e.key;
        this.keysDown[key] = false;
        this.keyReleaseHandler['any'].forEach(function (func) {
          return func(window.world);
        });
        (_this$keyReleaseHandl = this.keyReleaseHandler[key]) === null || _this$keyReleaseHandl === void 0 ? void 0 : _this$keyReleaseHandl.forEach(function (func) {
          return func(window.world, key);
        });
      }
    }]);

    return _class;
  }(superclass);
};

exports["default"] = _default;

function isKeyPressed(key) {
  if (!(key in window._graphics.keysDown)) {
    return false;
  }

  return window._graphics.keysDown[key];
}

function onKeyPress(listenerFunction, key) {
  if (window._graphics.keyPressHandlers[key]) {
    window._graphics.keyPressHandlers[key].push(listenerFunction);
  } else {
    window._graphics.keyPressHandlers[key] = [listenerFunction];
  }
}

function onAnyKeyPress(listenerFunction) {
  window._graphics.keyPressHandlers['any'].push(listenerFunction);
}

function onKeyRelease(listenerFunction, key) {
  if (window._graphics.keyReleaseHandler[key]) {
    window._graphics.keyReleaseHandler[key].push(listenerFunction);
  } else {
    window._graphics.keyReleaseHandler[key] = [listenerFunction];
  }
}

function onAnyKeyRelease(listenerFunction) {
  window._graphics.keyReleaseHandler['any'].push(listenerFunction);
}