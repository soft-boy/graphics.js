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

    document.addEventListener('keydown', (e) => this.keyDownHandler(e), false)
    document.addEventListener('keyup', (e) => this.keyUpHandler(e), false)
  }

  keyDownHandler(e) {
    const key = keyNameMap[e.key] || e.key
    this.keysDown[key] = true
  }

  keyUpHandler(e) {
    const key = keyNameMap[e.key] || e.key
    this.keysDown[key] = false
  }
}

export function isKeyPressed(key) {
  if (!(key in window._graphics.keysDown)) {
    return false
  }

  return window._graphics.keysDown[key]
}
