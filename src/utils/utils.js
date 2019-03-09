export function randInt(from, to) {
  return Math.floor(Math.random() * (to - from)) + from;
}

export function randomRgb() {
  return `rgb(${randInt(100, 255)}, ${randInt(100, 255)}, ${randInt(100, 255)})`;
}

export function getDocHeight() {
  var D = document;
  return Math.max(
      D.body.scrollHeight, D.documentElement.scrollHeight,
      D.body.offsetHeight, D.documentElement.offsetHeight,
      D.body.clientHeight, D.documentElement.clientHeight
  );
}
