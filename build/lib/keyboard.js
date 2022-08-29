"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.getKeyName = getKeyName;
exports.isKeyPressed = isKeyPressed;
exports.onAnyKeyPress = onAnyKeyPress;
exports.onAnyKeyRelease = onAnyKeyRelease;
exports.onKeyPress = onKeyPress;
exports.onKeyRelease = onKeyRelease;
exports.sameKeys = sameKeys;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

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
    (0, _inherits2["default"])(_class, _superclass);

    var _super = _createSuper(_class);

    function _class() {
      var _this;

      (0, _classCallCheck2["default"])(this, _class);

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
      document.addEventListener('keydown', _this.keyDownHandler.bind((0, _assertThisInitialized2["default"])(_this)), false);
      document.addEventListener('keyup', _this.keyUpHandler.bind((0, _assertThisInitialized2["default"])(_this)), false);
      return _this;
    }

    (0, _createClass2["default"])(_class, [{
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

function sameKeys(key1, key2) {
  return key1 === key2 || keyNameMap[key1] === key2 || key1 === keyNameMap[key2];
}

function getKeyName(key) {
  return keyNameMap[key] || key;
}