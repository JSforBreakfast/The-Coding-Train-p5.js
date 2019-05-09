let x = 200;
let y = 200;
let extraCanvas;

function setup() {
  createCanvas(400, 400);
  extraCanvas = createGraphics(400, 400);
  extraCanvas.background(255, 0, 0);
  
  background(0);
}

function draw() {
  image(extraCanvas, 0, 0);
  //No trails
  
  background(0);
  x += random(-5, 5);
  y += random(-5, 5);
  fill(255, 200);
  stroke(255);
  rectMode(CENTER);
  rect(x, y, 20, 20);
}

// trails

if (mouseIsPressed) {
  fill(255, 150);
  noStroke();
}
