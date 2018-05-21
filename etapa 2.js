function setup() {
  createCanvas(400, 400);
  x=50;
  y=50;
}

function draw() {
  fill(255);
  rect(0, 0, 400, 400);

  fill(200, 200, 200);
  rect(x - 40, y - 40, 80, 80);
}
function keyPressed() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  } else if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }
  if(keyIsDown(UP_ARROW)){
    y -= 5;
  } else if (keyIsDown(DOWN_ARROW)){
    y += 5;
  }
}
