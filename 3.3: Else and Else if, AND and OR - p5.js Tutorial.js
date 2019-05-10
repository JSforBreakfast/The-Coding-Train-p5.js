function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  if (mouseX > 300 && mouseX < 400) {
    fill (255, 0, 200); 
}
  rect(300, 200, 100, 100);
  
  /* else if (mouseX > 150) {
  rect(300, 200, 100, 100);
} else if (mouseX > 50) {
  line(0,0,width, height);
} else {
point (300, 200);
}*/
} 
