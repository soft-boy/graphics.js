export function onTimer(listenerFunction, interval) {
  return setInterval(listenerFunction, interval)
}

export function getElapsedTime() {
  return (new Date()) - window._graphics.startTime
}

export function resetTime() {
  window._graphics.startTime = new Date()
}

export function setFrameRate(framerate) {
  window._graphics.targetFps = framerate
  window._graphics.deltas = []
}

export function displayFPS(interval) {
  window._graphics.displayFpsInterval = 1000 * interval
}

export function getActualFrameRate() {
  const arrAvg = arr => arr.reduce((a,b) => a + b, 0) / arr.length
  const avgDelta = arrAvg(window._graphics.deltas)
  return 1000 / avgDelta
}
