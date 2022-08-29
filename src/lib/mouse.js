export default (superclass) => class extends superclass {
  constructor(canvasElement) {
    super(canvasElement)

    this.mouseX = 0
    this.mouseY = 0
    this.mouseDown = false
    this.mousePressHandlers = []
    this.mouseReleaseHandlers = []
    this.mouseMoveHandlers = []
    this.wheelForwardHandlers = []
    this.wheelBackwardHandlers = []

    canvasElement.addEventListener(
      'mousemove',
      this.mouseMoveHandler.bind(this),
      false
    )
    canvasElement.addEventListener(
      'mousedown',
      this.mouseDownHandler.bind(this),
      false
    )
    canvasElement.addEventListener(
      'mouseup',
      this.mouseUpHandler.bind(this),
      false
    )
    canvasElement.addEventListener(
      'wheel',
      this.mouseWheelHandler.bind(this),
      false
    )
  }

  mouseMoveHandler(e) {
    this.mouseX = e.offsetX
    this.mouseY = e.offsetY

    // TODO: mouse buttons
    this.mouseMoveHandlers.forEach(func => func(window.world, this.mouseX, this.mouseY, e.movementX, e.movementY, this.mouseDown, false, false))
  }

  mouseDownHandler() {
    this.mouseDown = true

    this.mousePressHandlers.forEach(func => func(window.world, this.mouseX, this.mouseY, 1))
  }

  mouseUpHandler() {
    this.mouseDown = false

    this.mouseReleaseHandlers.forEach(func => func(window.world, this.mouseX, this.mouseY, 1))
  }

  mouseWheelHandler(e) {
    if (e.deltaY > 0) { //up
      this.wheelForwardHandlers.forEach(func => func(window.world, this.mouseX, this.mouseY))
    }
    else { // down
      this.wheelBackwardHandlers.forEach(func => func(window.world, this.mouseX, this.mouseY))
    }
  }
}

export function getMousePosition() {
  return [
    window._graphics.mouseX,
    window._graphics.mouseY
  ]
}

// TODO: buttons for multi button mouse
export function getMouseButton(button) {
  return window._graphics.mouseDown
}

export function onMousePress(listenerFunction) {
  window._graphics.mousePressHandlers.push(listenerFunction)
}

export function onMouseRelease(listenerFunction) {
  window._graphics.mouseReleaseHandlers.push(listenerFunction)
}

export function onWheelForward(listenerFunction) {
  window._graphics.wheelForwardHandlers.push(listenerFunction)
}

export function onWheelBackward(listenerFunction) {
  window._graphics.wheelBackwardHandlers.push(listenerFunction)
}

export function onMouseMotion(listenerFunction) {
  window._graphics.mouseMoveHandlers.push(listenerFunction)
}

export function hideMouse() {
  window._graphics.canvas.style.cursor = 'none'
}

export function showMouse() {
  window._graphics.canvas.style.cursor = 'unset'
}

export function moveMouse(x, y) {
  console.log('moveMouse is not possible in JS 😢')
}
