let point = {
  x: 100,
  y: 50
};

let col = {
  r: 255,
  g: 0,
  b: 0
};

function setup() {
  createCanvas(600, 400);
  background(0);
}

function draw() {
  col.r = random(0, 255);
  col.g = random(0, 255);
  col.b = random(0, 255);
  point.x = random(0, width);
  point.y = random(0, height)
  noStroke();
  fill(col.r, col.g, col.b, 100);
  ellipse(point.x, point.y, 24, 24);
}
