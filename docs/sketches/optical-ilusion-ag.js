var ROW_NUM = 15;
var rectSize = 500 / ROW_NUM;

function setup() {
  createCanvas(500, 500);
  strokeWeight(4);
  stroke(127);
}

function drawTileRow() {
  var negative = true;
  for (let x = -rectSize; x < width + rectSize; x += rectSize) {
    rect(x, 0, rectSize, rectSize);
    fill(negative ? 255 : 0);
    negative = !negative;
  }
}
function draw() {
  var steps = 4;
  for (let row = 0; row < 1 + 500/rectSize; row++) {
    drawTileRow();
    var step = rectSize / steps;
    if ((row / 2) % 2 == 0) {
      step = -step;
    }
    translate(step, rectSize);
  }
}
