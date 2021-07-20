let fingers;

function setup() {
  createCanvas(320, 240);
  // specify multiple formats for different browsers
  fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
  fingers.hide();
  fingers.loop();
  fingers.volume(0);
}

function draw() {
  background(255);
  image(fingers, 0,0, 320, 240); // draw the video frame to canvas
  // filter(GRAY);
  // image(fingers, 150, 150); // draw a second copy to canvas
}