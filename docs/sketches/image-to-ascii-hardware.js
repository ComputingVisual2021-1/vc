//variables
let ascii;

function preload() {
  ascii = loadShader('/vc/docs/sketches/ascii.vert', '/vc/docs/sketches/ascii.frag');
  imagen = loadImage('/vc/docs/sketches/medieval.jpg');

  //cargar las imagenes que van a componer el mosaico
  aux1 = loadImage('/vc/docs/sketches/ascii0.jpg');
  aux2 = loadImage('/vc/docs/sketches/ascii1.jpg');
  aux3 = loadImage('/vc/docs/sketches/ascii2.jpg');
  aux4 = loadImage('/vc/docs/sketches/ascii3.jpg');
  aux5 = loadImage('/vc/docs/sketches/ascii4.jpg');
  aux6 = loadImage('/vc/docs/sketches/ascii5.jpg');
  aux7 = loadImage('/vc/docs/sketches/ascii6.jpg');
  aux8 = loadImage('/vc/docs/sketches/ascii7.jpg');
}

function setup() {
  // put setup code here
  createCanvas(512, 512, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(ascii)

  ascii.setUniform("imagen", imagen);
  ascii.setUniform("aux1", aux1);
  ascii.setUniform("aux2", aux2);
  ascii.setUniform("aux3", aux3);
  ascii.setUniform("aux4", aux4);
  ascii.setUniform("aux5", aux5);
  ascii.setUniform("aux6", aux6);
  ascii.setUniform("aux7", aux7);
  ascii.setUniform("aux8", aux8);
}

function draw() {
  // put drawing code here
  text("ASCII art con 8 símbolos")
  beginShape();
  vertex(-512 / 2, -512 / 2, 0, 0, 0);
  vertex(512 / 2, -512 / 2, 0, 1, 0);
  vertex(512 / 2, 512 / 2, 0, 1, 1);
  vertex(-512 / 2, 512 / 2, 0, 0, 1);
  endShape();
}