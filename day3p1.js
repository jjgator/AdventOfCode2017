let n = 289326;
let i = 1;

while (i * i < n) {
  i += 2;
}

let layer = Math.ceil((i-1)/2);
let axis1 = i * i - layer;
let axis2 = axis1 - (layer * 2);
let axis3 = axis2 - (layer * 2);
let axis4 = axis3 - (layer * 2);
console.log('axis1:', axis1, 'axis2:', axis2, 'axis3:', axis3, 'axis4:', axis4, 'layer:', layer);

function findClosestAxis(n) {
  let min = Math.abs(axis1 - n);
  let closest = axis1;
  if (n === axis1 || n === axis2 || n === axis3 || n === axis4) {
    return n;
  } else {
    if (Math.abs(axis2 - n) < min) {
      min = axis2 - n;
      closest = axis2;
    }
    if (Math.abs(axis3 - n) < min) {
      min = axis3 - n;
      closest = axis3;
    }
    if (Math.abs(axis4 - n) < min) {
      min = axis4 - n;
      closest = axis4;
    }
    return closest;
  }
}

let distanceToAxis = Math.abs(n - findClosestAxis(n));

let steps = layer + distanceToAxis;

console.log('steps:', steps);
