
let img; // Declarar variable 'img'.

function setup() {
  createCanvas(603, 781);
  img = loadImage('/vc/docs/sketches/example_z_buffer.png'); // Cargar la imagen
}

function draw() {
  image(img, 0, 0, 603, 781);
}
