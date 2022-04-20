export function drawPixel(x, y, color="black") {
  window._graphics.ctx.fillStyle = color;
  window._graphics.ctx.fillRect(x, y, 1, 1)
}

export function drawLine(x1, y1, x2, y2, color="black", thickness=1) {
  window._graphics.ctx.strokeStyle = color
  window._graphics.ctx.lineWidth = thickness
  window._graphics.ctx.beginPath()
  window._graphics.ctx.moveTo(x1, y1)
  window._graphics.ctx.lineTo(x2, y2)
  window._graphics.ctx.stroke();  
}

export function drawCircle(x, y, radius, color="black", thickness=1) {
  window._graphics.ctx.strokeStyle = color
  window._graphics.ctx.lineWidth = thickness
  window._graphics.ctx.beginPath();
  window._graphics.ctx.ellipse(x, y, radius, radius, 0, 0, 2*Math.PI);
  window._graphics.ctx.stroke();
}

export function fillCircle(x, y, radius, color="black") {
  window._graphics.ctx.fillStyle = color
  window._graphics.ctx.beginPath();
  window._graphics.ctx.ellipse(x, y, radius, radius, 0, 0, 2*Math.PI);
  window._graphics.ctx.fill();
}

export function drawEllipse(x, y, width, height, color="black", thickness=1) {
  window._graphics.ctx.strokeStyle = color
  window._graphics.ctx.lineWidth = thickness
  window._graphics.ctx.beginPath();
  window._graphics.ctx.ellipse(x, y, width/2, height/2, 0, 0, 2*Math.PI);
  window._graphics.ctx.stroke();
}

export function fillEllipse(x, y, width, height, color="black") {
  window._graphics.ctx.fillStyle = color
  window._graphics.ctx.beginPath();
  window._graphics.ctx.ellipse(x, y, width/2, height/2, 0, 0, 2*Math.PI);
  window._graphics.ctx.fill();
}

export function drawRectangle(x, y, width, height, color="black", thickness=1) {
  window._graphics.ctx.strokeStyle = color;
  window._graphics.ctx.lineWidth = thickness;
  console.log(color, thickness)
  window._graphics.ctx.strokeRect(x, y, width, height)
}

export function fillRectangle(x, y, width, height, color="black") {
  window._graphics.ctx.fillStyle = color;
  window._graphics.ctx.fillRect(x, y, width, height)
}

export function drawPolygon(pointlist, color="black", thickness=1) {
  window._graphics.ctx.strokeStyle = color
  window._graphics.ctx.lineWidth = thickness
  window._graphics.ctx.beginPath()
  window._graphics.ctx.moveTo(pointlist[0]['x'], pointlist[0]['y'])
  
  for (let i=1; i < pointlist.length; i++) {
    window._graphics.ctx.lineTo(x2, y2)
  }

  window._graphics.ctx.stroke(); 
}

export function fillPolygon(pointlist, color="black") {
  window._graphics.ctx.fillStyle = color
  window._graphics.ctx.beginPath()
  window._graphics.ctx.moveTo(pointlist[0]['x'], pointlist[0]['y'])
  
  for (let i=1; i < pointlist.length; i++) {
    window._graphics.ctx.lineTo(x2, y2)
  }

  window._graphics.ctx.fill(); 
}

export function drawString(text, x, y, size=30, color="black", bold=false, italic=false) { // TODO: color and italic
  window._graphics.ctx.font = `${bold ? 'bold' : null} ${size}px serif`;
  window._graphics.ctx.strokeText(text, x, y);
}