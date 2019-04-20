/*var r = 0;
var g = 0;
var b = 255;*/

var col = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(mouseX/2);
  fill(250,118, 222)
  ellipse (mouseX, 200, 64, 64);
}
