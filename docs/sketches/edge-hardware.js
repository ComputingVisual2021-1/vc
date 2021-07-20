const width = 720;
const height = 560;
var img; 
let _shader;
let kernel = [ 0.0, -1.0, 0.0, -1.0, 5.0, -1.0, 0.0, -1.0, 0.0 ]; 

function preload(){
    _shader = loadShader('/vc/docs/sketches/texture.vert','/vc/docs/sketches/kernel-texture.frag');
    img = loadImage('/vc/docs/sketches/cat.png')  
}


function setup() {
  createCanvas(width, height, WEBGL);  
  textureMode(NORMAL);
  shader(_shader);
  _shader.setUniform('texture', img);
  _shader.setUniform('texOff', [1/img.width, 1/img.height]);
  _shader.setUniform('mask', kernel);
}

function draw() {
  background(255);
  beginShape();
  vertex(-width/2, -height/2, 0, 0);
  vertex( width/2, -height/2, 1, 0);
  vertex( width/2,  height/2, 1, 1);
  vertex(-width/2,  height/2, 0, 1);
  endShape(CLOSE);
}