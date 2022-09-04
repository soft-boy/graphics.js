const radToDeg = (rad) => 360*(rad/(2*Math.PI))
const degToRad = (deg) => 2*Math.PI*(deg/360)

export function convertToComponents(angle, length) {
  return [
    length*Math.cos(degToRad(angle)),
    length*Math.sin(degToRad(angle))
  ]
}

export function convertToAngle(x, y) {
  if (x === 0) {
    return y > 0 ? (Math.PI/2) : (3*Math.PI/2)
  }

  return radToDeg(Math.atan(y / x))
}

export function pointInPolygon(x, y, polygon) {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    let xi = polygon[i][0], yi = polygon[i][1];
    let xj = polygon[j][0], yj = polygon[j][1];
    
    let intersect = ((yi > y) != (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
    if (intersect) inside = !inside;
  }
  
  return inside;
}