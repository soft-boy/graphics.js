const keyNameMap = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ' ': 'space',
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
