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

const keysDown = {}

export const keyboardMixin = {
  _keyDownHandler(e) {
    const key = keyNameMap[e.key] || e.key
    keysDown[key] = true
  },
  _keyUpHandler(e) {
    const key = keyNameMap[e.key] || e.key
    keysDown[key] = false
  },
  isKeyDown(key) {
    if (!(key in keysDown)) {
      return false
    }

    return keysDown[key]
  },
}
