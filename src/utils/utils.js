export function randInt(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

export function randomRgb() {
  return `rgb(${randInt(100, 255)}, ${randInt(100, 255)}, ${randInt(100, 255)})`;
}

