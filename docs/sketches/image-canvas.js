
let img; // Declarar variable 'img'.

function setup() {
  createCanvas(720, 560);
  img = loadImage('/vc/docs/sketches/cat.png'); // Cargar la imagen
}

function draw() {
  image(img, 0, 0,720,560);
}
