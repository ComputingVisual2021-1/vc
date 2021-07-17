
let img; // Declarar variable 'img'.

function setup() {
  createCanvas(350, 150);
  img = loadImage('/vc/docs/sketches/zbs2.png'); // Cargar la imagen
}

function draw() {
  image(img, 0, 0, 350, 150);
}
