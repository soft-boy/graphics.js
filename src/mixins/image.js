const xor = (a, b) => (a || b && !(a && b))

// TODO: make work with filename not file, transparentColor
export function loadImage(file, transparentColor=null, rotate=0, scale=1, flipHorizontal=false, flipVertical=false) {
  let image = new Image();
  image.src = file
  image.width *= scale
  image.height *= scale
  image.rotate = rotate
  image.flipHorizontal = flipHorizontal
  image.flipVertical = flipVertical

  return image
}

export function drawImage(image, x, y, rotate=0, scale=1, flipHorizontal=false, flipVertical=false) {
  const width = getImageWidth(image)
  const height = getImageHeight(image)

  window._graphics.ctx.save()

  // scale
  window._graphics.ctx.scale(scale, scale);

  // rotate
  window._graphics.ctx.translate(width/2 + x, height/2 + y)
  window._graphics.ctx.rotate((image.rotate+rotate) * Math.PI / 180)
  window._graphics.ctx.translate(-(width/2 + x), -(height/2 + y))

  // flip
  if (xor(flipHorizontal, image.flipHorizontal)) {
    console.log('flipHorizontal')
    window._graphics.ctx.translate(width, 0);
    window._graphics.ctx.scale(-1, 1);
  }

  if (xor(flipVertical, image.flipVertical)) {
    console.log('flipVertical')
    window._graphics.ctx.translate(0, height);
    window._graphics.ctx.scale(1, -1);
  }

  window._graphics.ctx.drawImage(image, x, y, width, height)
  window._graphics.ctx.restore()
}

export function getImageWidth(image) {
  return image.width
}

export function getImageHeight(image) {
  return image.height
}
