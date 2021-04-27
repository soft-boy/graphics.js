import { keyboardMixin } from './mixins/keyboard'
import { mouseMixin } from './mixins/mouse'
export default class SimpleWebGraphics {
  constructor(canvasElement) {
    this._ctx = canvasElement.getContext('2d')
    this.canvasWidth = canvasElement.width
    this.canvasHeight = canvasElement.height

    Object.assign(this, keyboardMixin)
    canvasElement.addEventListener('keydown', this._keyDownHandler, false)
    canvasElement.addEventListener('keyup', this._keyUpHandler, false)

    Object.assign(this, mouseMixin)
    canvasElement.addEventListener(
      'mousemove',
      this._mouseMoveHandler.bind(this),
      false
    )
    canvasElement.addEventListener(
      'mousedown',
      this._mouseDownHandler.bind(this),
      false
    )
    canvasElement.addEventListener(
      'mouseup',
      this._mouseUpHandler.bind(this),
      false
    )
  }

  // user override methods
  setup = () => {}
  update = () => {}
  draw = () => {}

  fillRect = (x, y, width, height) => {
    this._ctx.fillRect(x, y, width, height)
  }

  _clearCanvas = () => {
    this._ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
  }

  _iterateGraphics = () => {
    this.update()
    this._clearCanvas()
    this.draw()
  }

  runGraphics = () => {
    this.setup()
    setInterval(this._iterateGraphics, 10)
  }
}
