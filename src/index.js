import KeyboardMixin from './mixins/keyboard'
import MouseMixin from './mixins/mouse'

window._graphics = null

class Base {}
class SimpleWebGraphics extends KeyboardMixin(MouseMixin(Base)) {
  constructor(canvasElement) {
    super(canvasElement)

    this.canvas = canvasElement
    this.ctx = canvasElement.getContext('2d')
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
  }
}

export function makeGraphicsWindow(canvasElement) {
  window._graphics = new SimpleWebGraphics(canvasElement)
}

export function runGraphics(startWorld, updateWorld, drawWorld) {
  let world = {}

  const iterateGraphics = () => {
    updateWorld(world)
    window._graphics.clearCanvas()
    drawWorld(world)
  }

  startWorld(world)
  setInterval(iterateGraphics, 10)
}

export { 
  drawPixel,
  drawLine,
  drawCircle,
  fillCircle,
  drawEllipse,
  fillEllipse,
  drawRectangle,
  fillRectangle,
  drawPolygon,
  fillPolygon,
  drawString
 } from './mixins/draw'

 export { isKeyPressed } from './mixins/keyboard'

 export { 
  getWindowWidth,
  getWindowHeight,
  getScreenSize,
 } from './mixins/misc'
