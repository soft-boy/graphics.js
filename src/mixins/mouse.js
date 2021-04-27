export const mouseMixin = {
  mouseX: 0,
  mouseY: 0,
  mouseDown: false,
  _mouseMoveHandler(e) {
    this.mouseX = e.offsetX
    this.mouseY = e.offsetY
  },
  _mouseDownHandler() {
    this.mouseDown = true
  },
  _mouseUpHandler() {
    this.mouseDown = false
  },
}
