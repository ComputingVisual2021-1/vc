
let img; // Declarar variable 'img'.

function setup() {
  createCanvas(650, 560);
  img = loadImage('/vc/docs/sketches/example_z_buffer.png'); // Cargar la imagen
}

function draw() {
  image(img, 0, 0, 650, 560);
}
