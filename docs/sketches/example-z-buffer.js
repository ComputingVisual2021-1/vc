
let img; // Declarar variable 'img'.

function setup() {
  createCanvas(781, 603);
  img = loadImage('/vc/docs/sketches/example_z_buffer.png'); // Cargar la imagen
}

function draw() {
  image(img, 0, 0, 781, 603);
}
