export function getWindowWidth() {
  return window._graphics.canvas.width
}

export function getWindowHeight() {
  return window._graphics.canvas.height
}

export function getScreenSize() {
  return { width: window._graphics.canvas.width, height: window._graphics.canvas.height }
}