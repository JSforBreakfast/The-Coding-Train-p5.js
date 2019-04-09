function setup() {
  createCanvas(400, 300);
  print("Hello Universe");
}

function draw() {
  background(100);

  rectMode(CENTER);

  //This is the blue square
  fill(0, 0, 255);
  stroke(0, 255, 0);
  //noStroke();
  strokeWeight(4);
  rect(250, 180, 120, 120);

  //Yellow ellipse
  fill(260, 250, 100, 150);
  stroke(0)
  ellipse(50, 50, 100, 75);

}
