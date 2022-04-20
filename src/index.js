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

export function drawCircle(x, y, radius, color="black", thickness=1) {
  window._graphics.ctx.strokeStyle = color
  window._graphics.ctx.lineWidth = thickness
  window._graphics.ctx.beginPath();
  window._graphics.ctx.ellipse(x, y, radius, radius, 0, 0, 2*Math.PI);
  window._graphics.ctx.stroke();
}

export function fillCircle(x, y, radius, color="black") {
  window._graphics.ctx.fillStyle = color
  window._graphics.ctx.beginPath();
  window._graphics.ctx.ellipse(x, y, radius, radius, 0, 0, 2*Math.PI);
  window._graphics.ctx.fill();
}

export function drawEllipse(x, y, width, height, color="black", thickness=1) {
  window._graphics.ctx.strokeStyle = color
  window._graphics.ctx.lineWidth = thickness
  window._graphics.ctx.beginPath();
  window._graphics.ctx.ellipse(x, y, width/2, height/2, 0, 0, 2*Math.PI);
  window._graphics.ctx.stroke();
}

export function fillEllipse(x, y, width, height, color="black") {
  window._graphics.ctx.fillStyle = color
  window._graphics.ctx.beginPath();
  window._graphics.ctx.ellipse(x, y, width/2, height/2, 0, 0, 2*Math.PI);
  window._graphics.ctx.fill();
}

export function drawRectangle(x, y, width, height, color="black", thickness=1) {
  window._graphics.ctx.strokeStyle = color;
  window._graphics.ctx.lineWidth = thickness;
  console.log(color, thickness)
  window._graphics.ctx.strokeRect(x, y, width, height)
}

export function fillRectangle(x, y, width, height, color="black") {
  window._graphics.ctx.fillStyle = color;
  window._graphics.ctx.fillRect(x, y, width, height)
}

export { isKeyPressed } from './mixins/keyboard'

