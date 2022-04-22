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
  window.world = {}

  const iterateGraphics = () => {
    if (window.end) {
      window._graphics.clearCanvas()
      return
    }
    updateWorld(window.world)
    window._graphics.clearCanvas()
    drawWorld(window.world)

    window.requestAnimationFrame(iterateGraphics)
  }

  window.world = startWorld(window.world)
  iterateGraphics()
}

export function endGraphics() {
  window.end = true
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

export {
  isKeyPressed,
  onKeyPress,
  onAnyKeyPress,
  onKeyRelease,
  onAnyKeyRelease,
  sameKeys,
  getKeyName
} from './mixins/keyboard'

export { 
  getWindowWidth,
  getWindowHeight,
  getScreenSize,
} from './mixins/misc'
