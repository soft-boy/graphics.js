"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadMusic = loadMusic;
exports.loadSound = loadSound;
exports.playMusic = playMusic;
exports.playSound = playSound;
exports.stopMusic = stopMusic;
exports.stopSound = stopSound;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

window.AudioContext = window.AudioContext || window.webkitAudioContext; // TODO: use filename, not file

function loadSound(_x) {
  return _loadSound.apply(this, arguments);
}

function _loadSound() {
  _loadSound = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(file) {
    var volume,
        sound,
        buffer,
        _args = arguments;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            volume = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
            window.soundContext = new AudioContext();
            _context.next = 4;
            return fetch(file);

          case 4:
            sound = _context.sent;
            _context.next = 7;
            return sound.arrayBuffer();

          case 7:
            sound = _context.sent;
            _context.next = 10;
            return window.soundContext.decodeAudioData(sound);

          case 10:
            buffer = _context.sent;
            return _context.abrupt("return", {
              buffer: buffer,
              sources: []
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadSound.apply(this, arguments);
}

function playSound(sound) {
  var repeat = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var source = window.soundContext.createBufferSource();
  source.buffer = sound.buffer;
  source.loop = repeat;
  source.connect(window.soundContext.destination);
  source.start(0);
  sound.sources.push(source);
}

function stopSound(sound) {
  sound.sources.forEach(function (src) {
    return src.stop(0);
  });
}

function loadMusic(file) {
  var volume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  window._graphics.audioElement = document.createElement('audio');

  window._graphics.audioElement.setAttribute('src', file);

  window._graphics.musicContext = new AudioContext(); // vol

  var gainNode = window._graphics.musicContext.createGain();

  gainNode.gain.value = volume;

  var track = window._graphics.musicContext.createMediaElementSource(window._graphics.audioElement);

  track.connect(gainNode).connect(window._graphics.musicContext.destination);
}

function playMusic() {
  var repeat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

  window._graphics.musicContext.resume();

  window._graphics.audioElement.loop = repeat;

  window._graphics.audioElement.play();
}

function stopMusic() {
  window._graphics.audioElement.load();
}