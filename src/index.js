import { keyboardMixin } from './mixins/keyboard'
import { mouseMixin } from './mixins/mouse'
export default class SimpleWebGraphics {
  constructor(canvasElement) {
    this._ctx = canvasElement.getContext('2d')
    this.canvasWidth = canvasElement.width
    this.canvasHeight = canvasElement.height

    Object.assign(this, keyboardMixin)
    document.addEventListener('keydown', this._keyDownHandler, false)
    document.addEventListener('keyup', this._keyUpHandler, false)

    Object.assign(this, mouseMixin)
    document.addEventListener('mousemove', this._mouseMoveHandler, false)
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
