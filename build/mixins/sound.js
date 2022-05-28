"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadMusic = loadMusic;
exports.loadSound = loadSound;
exports.playMusic = playMusic;
exports.playSound = playSound;
exports.stopMusic = stopMusic;
exports.stopSound = stopSound;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

window.AudioContext = window.AudioContext || window.webkitAudioContext; // TODO: use filename, not file

function loadSound(_x) {
  return _loadSound.apply(this, arguments);
}

function _loadSound() {
  _loadSound = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(file) {
    var volume,
        reader,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            volume = _args.length > 1 && _args[1] !== undefined ? _args[1] : 1;
            window.soundContext = new AudioContext();
            reader = new FileReader();

            reader.onload = function (evt) {
              var decoded = window.soundContext.decodeAudioData(evt.target.result);
              console.log(decoded);
            };

            reader.readAsText(new File(file));

          case 5:
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
  return;
}

function stopSound(sound) {
  return;
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