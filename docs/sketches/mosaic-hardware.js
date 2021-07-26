//variables
let mosaico;

function preload() {
  mosaico = loadShader('/vc/docs/sketches/mosaic.vert', '/vc/docs/sketches/mosaic.frag');
  imagen = loadImage('/vc/docs/sketches/main.jpg');

  //cargar las imagenes que van a componer el mosaico
  aux1 = loadImage('/vc/docs/sketches/img1.jpg');
  aux2 = loadImage('/vc/docs/sketches/img2.jpg');
  aux3 = loadImage('/vc/docs/sketches/img3.jpg');
  aux4 = loadImage('/vc/docs/sketches/img4.jpg');
  aux5 = loadImage('/vc/docs/sketches/img5.jpg');
  aux6 = loadImage('/vc/docs/sketches/img6.jpg');
  aux7 = loadImage('/vc/docs/sketches/img7.jpg');
  aux8 = loadImage('/vc/docs/sketches/img8.jpg');
  aux9 = loadImage('/vc/docs/sketches/img9.jpg');
}

function setup() {
  // put setup code here
  createCanvas(700, 900, WEBGL);
  textureMode(NORMAL);
  noStroke();
  shader(mosaico)

  mosaico.setUniform("imagen", imagen);
  mosaico.setUniform("aux1", aux1);
  mosaico.setUniform("aux2", aux2);
  mosaico.setUniform("aux3", aux3);
  mosaico.setUniform("aux4", aux4);
  mosaico.setUniform("aux5", aux5);
  mosaico.setUniform("aux6", aux6);
  mosaico.setUniform("aux7", aux7);
  mosaico.setUniform("aux8", aux8);
  mosaico.setUniform("aux9", aux9);
}

function draw() {
  // put drawing code here
  text("Mosaico construido con 9 imagenes",10, 50)
  beginShape();
  vertex(- 700 / 2, - 900 / 2, 0, 0, 0);
  vertex(700 / 2, - 900 / 2, 0, 1, 0);
  vertex(700 / 2, 900 / 2, 0, 1, 1);
  vertex(- 700 / 2, 900 / 2, 0, 0, 1);
  endShape();
}