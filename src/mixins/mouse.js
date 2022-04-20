export default (superclass) => class extends superclass {
  constructor(canvasElement) {
    super(canvasElement)

    this.mouseX = 0
    this.mouseY = 0
    this.mouseDown = false

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
  }

  mouseMoveHandler(e) {
    this.mouseX = e.offsetX
    this.mouseY = e.offsetY
  }

  mouseDownHandler() {
    this.mouseDown = true
  }

  mouseUpHandler() {
    this.mouseDown = false
  }
}
