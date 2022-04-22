const keyNameMap = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ' ': 'space',
  Enter: 'enter',
  Backspace: 'backspace',
  Shift: 'shift',
  Tab: 'tab',
  Alt: 'alt',
  Control: 'control',
  Meta: 'meta',
  CapsLock: 'capslock',
  Escape: 'escape',
}

export default (superclass) => class extends superclass {
  constructor(...args) {
    super(...args)

    this.keysDown = {}
    this.keyPressHandlers = { any: [] }
    this.keyReleaseHandler = { any: [] }

    document.addEventListener('keydown', this.keyDownHandler.bind(this), false)
    document.addEventListener('keyup', this.keyUpHandler.bind(this), false)
  }

  keyDownHandler(e) {
    const key = keyNameMap[e.key] || e.key
    if (this.keysDown[key]) return
    this.keysDown[key] = true

    this.keyPressHandlers['any'].forEach(func => func(window.world))
    this.keyPressHandlers[key]?.forEach(func => func(window.world, key))
  }

  keyUpHandler(e) {
    const key = keyNameMap[e.key] || e.key
    this.keysDown[key] = false

    this.keyReleaseHandler['any'].forEach(func => func(window.world))
    this.keyReleaseHandler[key]?.forEach(func => func(window.world, key))
  }
}

export function isKeyPressed(key) {
  if (!(key in window._graphics.keysDown)) {
    return false
  }

  return window._graphics.keysDown[key]
}

export function onKeyPress(listenerFunction, key) {
  if (window._graphics.keyPressHandlers[key]) {
    window._graphics.keyPressHandlers[key].push(listenerFunction)
  }
  else {
    window._graphics.keyPressHandlers[key] = [listenerFunction]
  }
}

export function onAnyKeyPress(listenerFunction) {
  window._graphics.keyPressHandlers['any'].push(listenerFunction)
}

export function onKeyRelease(listenerFunction, key) {
  if (window._graphics.keyReleaseHandler[key]) {
    window._graphics.keyReleaseHandler[key].push(listenerFunction)
  }
  else {
    window._graphics.keyReleaseHandler[key] = [listenerFunction]
  }
}

export function onAnyKeyRelease(listenerFunction) {
  window._graphics.keyReleaseHandler['any'].push(listenerFunction)
}

export function sameKeys(key1, key2) {
  return key1 === key2 || keyNameMap[key1] === key2 || key1 === keyNameMap[key2]
}

export function getKeyName(key) {
  return keyNameMap[key] || key
}
