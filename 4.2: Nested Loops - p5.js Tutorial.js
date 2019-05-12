
function draw() {
  background(0);
  strokeWeight(4);
  stroke(255);
  

  for (var x = 0; x < width; x += 50) {
    fill(random(255), 0, random(230));
  ellipse (x + offset, 300, 25, 25)
  }
  
  offset += 1;
}
