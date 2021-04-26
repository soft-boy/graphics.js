const keyNameMap = {
  ArrowUp: 'up',
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ' ': 'space'
};
export default keyboardMixin = {
  _keysDown: {},

  _keyDownHandler(e) {
    const key = keyNameMap[e.key] || e.key;
    this._keysDown[key] = true;
  },

  _keyUpHandler(e) {
    const key = keyNameMap[e.key] || e.key;
    this._keysDown[key] = false;
  },

  isKeyDown(key) {
    if (!(key in this._keysDown)) {
      return false;
    }

    return this._keysDown[key];
  }

};