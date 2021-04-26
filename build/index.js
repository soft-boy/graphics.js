function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const keyNameMap = {
  'ArrowUp': 'up',
  'ArrowDown': 'down',
  'ArrowLeft': 'left',
  'ArrowRight': 'right',
  ' ': 'space'
};
export default class SimpleWebGraphics {
  constructor(canvasElemId) {
    _defineProperty(this, "setup", () => {});

    _defineProperty(this, "update", () => {});

    _defineProperty(this, "draw", () => {});

    _defineProperty(this, "_keyDownHandler", e => {
      const key = keyNameMap[e.key] || e.key;
      this._keysDown[key] = true;
    });

    _defineProperty(this, "_keyUpHandler", e => {
      const key = keyNameMap[e.key] || e.key;
      this._keysDown[key] = false;
    });

    _defineProperty(this, "isKeyDown", key => {
      if (!(key in this._keysDown)) {
        return false;
      }

      return this._keysDown[key];
    });

    _defineProperty(this, "_mouseMoveHandler", () => {});

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

    const canvas = document.getElementById(canvasElemId);
    this._ctx = canvas.getContext("2d");
    this.canvasWidth = canvas.width;
    this.canvasHeight = canvas.height;
    this._keysDown = {};
    this.mouseX = 0;
    this.mouseY = 0;
    document.addEventListener("keydown", this._keyDownHandler, false);
    document.addEventListener("keyup", this._keyUpHandler, false);
    document.addEventListener("mousemove", this._mouseMoveHandler, false);
  } // user override methods


}