function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { keyboardMixin } from './mixins/keyboard';
import { mouseMixin } from './mixins/mouse';
export default class SimpleWebGraphics {
  constructor(canvasElement) {
    _defineProperty(this, "setup", () => {});

    _defineProperty(this, "update", () => {});

    _defineProperty(this, "draw", () => {});

    _defineProperty(this, "fillRect", (x, y, width, height) => {
      this._ctx.fillRect(x, y, width, height);
    });

    _defineProperty(this, "_clearCanvas", () => {
      this._ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    });

    _defineProperty(this, "_iterateGraphics", () => {
      this.update();

      this._clearCanvas();

      this.draw();
    });

    _defineProperty(this, "runGraphics", () => {
      this.setup();
      setInterval(this._iterateGraphics, 10);
    });

    this._ctx = canvasElement.getContext('2d');
    this.canvasWidth = canvasElement.width;
    this.canvasHeight = canvasElement.height;
    Object.assign(this, keyboardMixin);
    document.addEventListener('keydown', this._keyDownHandler, false);
    document.addEventListener('keyup', this._keyUpHandler, false);
    Object.assign(this, mouseMixin);
    canvasElement.addEventListener('mousemove', this._mouseMoveHandler.bind(this), false);
    canvasElement.addEventListener('mousedown', this._mouseDownHandler.bind(this), false);
    canvasElement.addEventListener('mouseup', this._mouseUpHandler.bind(this), false);
  } // user override methods


}