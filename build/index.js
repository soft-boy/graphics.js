"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "convertToAngle", {
  enumerable: true,
  get: function get() {
    return _math.convertToAngle;
  }
});
Object.defineProperty(exports, "convertToComponents", {
  enumerable: true,
  get: function get() {
    return _math.convertToComponents;
  }
});
Object.defineProperty(exports, "displayFPS", {
  enumerable: true,
  get: function get() {
    return _time.displayFPS;
  }
});
Object.defineProperty(exports, "drawCircle", {
  enumerable: true,
  get: function get() {
    return _draw.drawCircle;
  }
});
Object.defineProperty(exports, "drawEllipse", {
  enumerable: true,
  get: function get() {
    return _draw.drawEllipse;
  }
});
Object.defineProperty(exports, "drawImage", {
  enumerable: true,
  get: function get() {
    return _image.drawImage;
  }
});
Object.defineProperty(exports, "drawLine", {
  enumerable: true,
  get: function get() {
    return _draw.drawLine;
  }
});
Object.defineProperty(exports, "drawPixel", {
  enumerable: true,
  get: function get() {
    return _draw.drawPixel;
  }
});
Object.defineProperty(exports, "drawPolygon", {
  enumerable: true,
  get: function get() {
    return _draw.drawPolygon;
  }
});
Object.defineProperty(exports, "drawRectangle", {
  enumerable: true,
  get: function get() {
    return _draw.drawRectangle;
  }
});
Object.defineProperty(exports, "drawString", {
  enumerable: true,
  get: function get() {
    return _draw.drawString;
  }
});
exports.endGraphics = endGraphics;
Object.defineProperty(exports, "fillCircle", {
  enumerable: true,
  get: function get() {
    return _draw.fillCircle;
  }
});
Object.defineProperty(exports, "fillEllipse", {
  enumerable: true,
  get: function get() {
    return _draw.fillEllipse;
  }
});
Object.defineProperty(exports, "fillPolygon", {
  enumerable: true,
  get: function get() {
    return _draw.fillPolygon;
  }
});
Object.defineProperty(exports, "fillRectangle", {
  enumerable: true,
  get: function get() {
    return _draw.fillRectangle;
  }
});
Object.defineProperty(exports, "getActualFrameRate", {
  enumerable: true,
  get: function get() {
    return _time.getActualFrameRate;
  }
});
Object.defineProperty(exports, "getAllScreenSizes", {
  enumerable: true,
  get: function get() {
    return _misc.getAllScreenSizes;
  }
});
Object.defineProperty(exports, "getColorsList", {
  enumerable: true,
  get: function get() {
    return _misc.getColorsList;
  }
});
Object.defineProperty(exports, "getElapsedTime", {
  enumerable: true,
  get: function get() {
    return _time.getElapsedTime;
  }
});
Object.defineProperty(exports, "getFontList", {
  enumerable: true,
  get: function get() {
    return _misc.getFontList;
  }
});
Object.defineProperty(exports, "getImageHeight", {
  enumerable: true,
  get: function get() {
    return _image.getImageHeight;
  }
});
Object.defineProperty(exports, "getImageWidth", {
  enumerable: true,
  get: function get() {
    return _image.getImageWidth;
  }
});
Object.defineProperty(exports, "getKeyName", {
  enumerable: true,
  get: function get() {
    return _keyboard.getKeyName;
  }
});
Object.defineProperty(exports, "getMouseButton", {
  enumerable: true,
  get: function get() {
    return _mouse.getMouseButton;
  }
});
Object.defineProperty(exports, "getMousePosition", {
  enumerable: true,
  get: function get() {
    return _mouse.getMousePosition;
  }
});
Object.defineProperty(exports, "getScreenPixel", {
  enumerable: true,
  get: function get() {
    return _misc.getScreenPixel;
  }
});
Object.defineProperty(exports, "getScreenSize", {
  enumerable: true,
  get: function get() {
    return _misc.getScreenSize;
  }
});
Object.defineProperty(exports, "getWindowHeight", {
  enumerable: true,
  get: function get() {
    return _misc.getWindowHeight;
  }
});
Object.defineProperty(exports, "getWindowWidth", {
  enumerable: true,
  get: function get() {
    return _misc.getWindowWidth;
  }
});
Object.defineProperty(exports, "hideMouse", {
  enumerable: true,
  get: function get() {
    return _mouse.hideMouse;
  }
});
Object.defineProperty(exports, "isKeyPressed", {
  enumerable: true,
  get: function get() {
    return _keyboard.isKeyPressed;
  }
});
Object.defineProperty(exports, "loadImage", {
  enumerable: true,
  get: function get() {
    return _image.loadImage;
  }
});
Object.defineProperty(exports, "loadMusic", {
  enumerable: true,
  get: function get() {
    return _sound.loadMusic;
  }
});
Object.defineProperty(exports, "loadSound", {
  enumerable: true,
  get: function get() {
    return _sound.loadSound;
  }
});
exports.makeGraphicsWindow = makeGraphicsWindow;
Object.defineProperty(exports, "moveMouse", {
  enumerable: true,
  get: function get() {
    return _mouse.moveMouse;
  }
});
Object.defineProperty(exports, "onAnyKeyPress", {
  enumerable: true,
  get: function get() {
    return _keyboard.onAnyKeyPress;
  }
});
Object.defineProperty(exports, "onAnyKeyRelease", {
  enumerable: true,
  get: function get() {
    return _keyboard.onAnyKeyRelease;
  }
});
Object.defineProperty(exports, "onKeyPress", {
  enumerable: true,
  get: function get() {
    return _keyboard.onKeyPress;
  }
});
Object.defineProperty(exports, "onKeyRelease", {
  enumerable: true,
  get: function get() {
    return _keyboard.onKeyRelease;
  }
});
Object.defineProperty(exports, "onMouseMotion", {
  enumerable: true,
  get: function get() {
    return _mouse.onMouseMotion;
  }
});
Object.defineProperty(exports, "onMousePress", {
  enumerable: true,
  get: function get() {
    return _mouse.onMousePress;
  }
});
Object.defineProperty(exports, "onMouseRelease", {
  enumerable: true,
  get: function get() {
    return _mouse.onMouseRelease;
  }
});
Object.defineProperty(exports, "onTimer", {
  enumerable: true,
  get: function get() {
    return _time.onTimer;
  }
});
Object.defineProperty(exports, "onWheelBackward", {
  enumerable: true,
  get: function get() {
    return _mouse.onWheelBackward;
  }
});
Object.defineProperty(exports, "onWheelForward", {
  enumerable: true,
  get: function get() {
    return _mouse.onWheelForward;
  }
});
Object.defineProperty(exports, "playMusic", {
  enumerable: true,
  get: function get() {
    return _sound.playMusic;
  }
});
Object.defineProperty(exports, "playSound", {
  enumerable: true,
  get: function get() {
    return _sound.playSound;
  }
});
Object.defineProperty(exports, "pointInPolygon", {
  enumerable: true,
  get: function get() {
    return _math.pointInPolygon;
  }
});
Object.defineProperty(exports, "resetTime", {
  enumerable: true,
  get: function get() {
    return _time.resetTime;
  }
});
exports.runGraphics = runGraphics;
Object.defineProperty(exports, "sameKeys", {
  enumerable: true,
  get: function get() {
    return _keyboard.sameKeys;
  }
});
Object.defineProperty(exports, "saveScreen", {
  enumerable: true,
  get: function get() {
    return _misc.saveScreen;
  }
});
Object.defineProperty(exports, "setBackground", {
  enumerable: true,
  get: function get() {
    return _misc.setBackground;
  }
});
Object.defineProperty(exports, "setFrameRate", {
  enumerable: true,
  get: function get() {
    return _time.setFrameRate;
  }
});
Object.defineProperty(exports, "setWindowTitle", {
  enumerable: true,
  get: function get() {
    return _misc.setWindowTitle;
  }
});
Object.defineProperty(exports, "showMouse", {
  enumerable: true,
  get: function get() {
    return _mouse.showMouse;
  }
});
Object.defineProperty(exports, "sizeString", {
  enumerable: true,
  get: function get() {
    return _misc.sizeString;
  }
});
Object.defineProperty(exports, "stopMusic", {
  enumerable: true,
  get: function get() {
    return _sound.stopMusic;
  }
});
Object.defineProperty(exports, "stopSound", {
  enumerable: true,
  get: function get() {
    return _sound.stopSound;
  }
});

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _draw = require("./lib/draw.js");

var _keyboard = _interopRequireWildcard(require("./lib/keyboard.js"));

var _mouse = _interopRequireWildcard(require("./lib/mouse.js"));

var _image = require("./lib/image.js");

var _sound = require("./lib/sound.js");

var _time = require("./lib/time.js");

var _math = require("./lib/math.js");

var _misc = require("./lib/misc.js");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

window._graphics = null;
var Base = /*#__PURE__*/(0, _createClass2["default"])(function Base() {
  (0, _classCallCheck2["default"])(this, Base);
});

var SimpleWebGraphics = /*#__PURE__*/function (_KeyboardMixin) {
  (0, _inherits2["default"])(SimpleWebGraphics, _KeyboardMixin);

  var _super = _createSuper(SimpleWebGraphics);

  function SimpleWebGraphics(canvasElement) {
    var _this;

    (0, _classCallCheck2["default"])(this, SimpleWebGraphics);
    _this = _super.call(this, canvasElement);
    _this.canvas = canvasElement;
    _this.ctx = canvasElement.getContext('2d');
    return _this;
  }

  (0, _createClass2["default"])(SimpleWebGraphics, [{
    key: "clearCanvas",
    value: function clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }]);
  return SimpleWebGraphics;
}((0, _keyboard["default"])((0, _mouse["default"])(Base)));

function makeGraphicsWindow(width, height, canvasElement) {
  canvasElement.width = width;
  canvasElement.height = height;
  window._graphics = new SimpleWebGraphics(canvasElement);
}

function runGraphics(_x, _x2, _x3) {
  return _runGraphics.apply(this, arguments);
}

function _runGraphics() {
  _runGraphics = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(startWorld, updateWorld, drawWorld) {
    var iterateGraphics, loadedWorld;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            window.world = {};

            iterateGraphics = function iterateGraphics() {
              if (window.end) {
                window._graphics.clearCanvas();

                return;
              }

              window.requestAnimationFrame(iterateGraphics);
              var now = new Date();
              var delta = now - window._graphics.lastFrame;
              var adjustedDelta = delta + window._graphics.deltaMargin;
              var interval = 1000 / window._graphics.targetFps; // time to update

              if (adjustedDelta > interval) {
                updateWorld(window.world);

                window._graphics.clearCanvas();

                drawWorld(window.world);

                window._graphics.deltas.push(delta);

                if (window._graphics.deltas.length > 50) window._graphics.deltas.unshift();
                window._graphics.deltaMargin = adjustedDelta - interval;
                window._graphics.lastFrame = now;
              }

              if (window._graphics.displayFpsInterval) {
                if (now - window._graphics.lastDisplayFps > window._graphics.displayFpsInterval) {
                  window._graphics.displayFps = getActualFrameRate().toFixed(2);
                  window._graphics.lastDisplayFps = now;
                }

                (0, _draw.drawString)("".concat(window._graphics.displayFps, " FPS"), 10, 40);
              }
            };

            _context.next = 4;
            return startWorld(window.world);

          case 4:
            loadedWorld = _context.sent;
            if (loadedWorld) window.world = loadedWorld;
            window._graphics.deltas = [];
            window._graphics.startTime = new Date();
            window._graphics.lastFrame = new Date();
            window._graphics.deltaMargin = 0;
            window._graphics.targetFps = 60;
            window._graphics.lastDisplayFps = new Date();
            window._graphics.displayFpsInterval = 0;
            iterateGraphics();

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _runGraphics.apply(this, arguments);
}

function endGraphics() {
  window.end = true;
}