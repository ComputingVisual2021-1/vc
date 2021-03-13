
let img; // Declarar variable 'img'.

function setup() {
  createCanvas(250, 250);
  img = loadImage('/vc/docs/sketches/andres-aldana.JPG'); // Cargar la imagen
}

function draw() {
  image(img, 0, 0, 250, 250);
}
