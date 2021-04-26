import { keyNameMap } from './constants'
export default class SimpleWebGraphics {
  constructor(canvasElement) {
    this._ctx = canvasElement.getContext('2d')
    this.canvasWidth = canvasElement.width
    this.canvasHeight = canvasElement.height

    this._keysDown = {}

    this.mouseX = 0
    this.mouseY = 0

    document.addEventListener('keydown', this._keyDownHandler, false)
    document.addEventListener('keyup', this._keyUpHandler, false)
    document.addEventListener('mousemove', this._mouseMoveHandler, false)
  }

  // user override methods
  setup = () => {}
  update = () => {}
  draw = () => {}

  _keyDownHandler = (e) => {
    const key = keyNameMap[e.key] || e.key
    this._keysDown[key] = true
  }

  _keyUpHandler = (e) => {
    const key = keyNameMap[e.key] || e.key
    this._keysDown[key] = false
  }

  isKeyDown = (key) => {
    if (!(key in this._keysDown)) {
      return false
    }

    return this._keysDown[key]
  }

  _mouseMoveHandler = () => {}

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
