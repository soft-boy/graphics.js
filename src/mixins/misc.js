import colors from '../lib/colors'

export function getWindowWidth() {
  return window._graphics.canvas.width
}

export function getWindowHeight() {
  return window._graphics.canvas.height
}

export function getScreenSize() {
  return { width: window._graphics.canvas.width, height: window._graphics.canvas.height }
}

export function getAllScreenSizes() {
  return [[document.body.clientWidth, document.body.clientHeight]]
}

// todo support image
export function setBackground(background) {
  if (typeof(background) === 'string') {
    window._graphics.canvas.style.backgroundColor = background
  }
  else if (typeof(background) === 'object') {
    window._graphics.canvas.style.backgroundColor = `rgb(${background[0]},${background[1]},${background[2]})`
  }
}

export function setWindowTitle(title) {
  document.title = title
}

export function getColorsList() {
  return Object.keys(colors)
}

export function getFontList() {
  return []
}

export function sizeString(text, size, bold, italic, font) {
  window._graphics.ctx.font = `${bold ? 'bold' : ''} ${italic ? 'italic' : ''} ${size}px serif`;
  const textSize = window._graphics.ctx.measureText(text)

  return [textSize.width, textSize.height]
}

function download(url, filename) {
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
  })
  .catch(console.error);
}

export function saveScreen(filename) {
  download(this.canvas.toDataURL(), filename)
}

export function getScreenPixel(x, y) {
  window._graphics.ctx.getImageData(x, y, 1, 1).data
}