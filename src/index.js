import { drawString } from './mixins/draw'
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

export async function runGraphics(startWorld, updateWorld, drawWorld) {
  window.world = {}

  const iterateGraphics = () => {
    if (window.end) {
      window._graphics.clearCanvas()
      return
    }

    window.requestAnimationFrame(iterateGraphics)

    const now = new Date()
    const delta = now - window._graphics.lastFrame
    const adjustedDelta = delta + window._graphics.deltaMargin
    const interval = 1000 / window._graphics.targetFps
    
    // time to update
    if (adjustedDelta > interval) {
      updateWorld(window.world)
      window._graphics.clearCanvas()
      drawWorld(window.world)
      
      window._graphics.deltas.push(delta)
      if (window._graphics.deltas.length > 50) window._graphics.deltas.unshift()
      window._graphics.deltaMargin = adjustedDelta - interval
      window._graphics.lastFrame = now
    }
    if (window._graphics.displayFpsInterval) {
      if ((now - window._graphics.lastDisplayFps) > window._graphics.displayFpsInterval) {
        window._graphics.displayFps = getActualFrameRate().toFixed(2)
        window._graphics.lastDisplayFps = now
      }

      drawString(`${window._graphics.displayFps} FPS`, 10, 40)
    }
  }

  const loadedWorld = await startWorld(window.world)
  if (loadedWorld) window.world = loadedWorld
  window._graphics.deltas = []
  window._graphics.startTime = new Date()
  window._graphics.lastFrame = new Date()
  window._graphics.deltaMargin = 0
  window._graphics.targetFps = 60
  window._graphics.lastDisplayFps = new Date()
  window._graphics.displayFpsInterval = 0
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
  loadImage,
  drawImage,
  getImageWidth,
  getImageHeight
} from './mixins/image'

export {
  loadSound,
  playSound,
  stopSound,
  loadMusic,
  playMusic,
  stopMusic
} from './mixins/sound'

export {
  getMousePosition,
  getMouseButton,
  onMousePress,
  onMouseRelease,
  onWheelForward,
  onWheelBackward,
  onMouseMotion,
  hideMouse,
  showMouse,
  moveMouse
} from './mixins/mouse'

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
  onTimer,
  getElapsedTime,
  resetTime,
  setFrameRate,
  displayFPS,
  getActualFrameRate,
} from './mixins/time'

export { 
  convertToComponents,
  convertToAngle,
  pointInPolygon,
} from './mixins/math'

export { 
  getWindowWidth,
  getWindowHeight,
  getScreenSize,
} from './mixins/misc'
