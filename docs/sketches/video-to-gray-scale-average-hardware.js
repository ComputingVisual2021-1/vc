let _shader;
let video;
let width = 320;
let height = 240;

function preload() {
  // load the shader
  _shader = loadShader(
    "/vc/docs/sketches/texture.vert",
    "/vc/docs/sketches/texture.frag"
  );
  video = createVideo('/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm');
}
function setup() {
  createCanvas(width, height, WEBGL);
  video.loop();
  video.volume(0);
  noStroke();
  shader(_shader);
  textureMode(NORMAL);
  shader(_shader);
}
function draw() {
  background(255);
  beginShape();
  vertex(-width / 2, -height / 2, 0, 0);
  vertex(width / 2, -height / 2, 1, 0);
  vertex(width / 2, height / 2, 1, 1);
  vertex(-width / 2, height / 2, 0, 1);
  endShape(CLOSE);

  _shader.setUniform("texture", video);
  _shader.setUniform("textureWidth", width);
  _shader.setUniform("textureHeight", height);

}