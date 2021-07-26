let _shader;
let img;
let width = 720;
let height = 560;
var t0, t1;

function preload(){
  t0 = performance.now()



    _shader = loadShader('/vc/docs/sketches/texture.vert','/vc/docs/sketches/texture.frag');
  img = loadImage('/vc/docs/sketches/cat.png');
}
function setup() {
  createCanvas(width, height, WEBGL);
  textureMode(NORMAL);
  shader(_shader);
  _shader.setUniform("texture", img);
}
function draw() {
  background(255);
  beginShape();
  vertex(-width/2, -height/2, 0, 0); // bl
  vertex(width/2, -height/2, 1, 0); // br
  vertex(width/2, height/2, 1, 1); // hr
  vertex(-width/2, height/2, 0, 1); // hl
  endShape(CLOSE);
  t1 = performance.now()
  console.log("Call to doSomething took " + (t1 - t0) + " milliseconds.")
}