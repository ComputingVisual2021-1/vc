let img; // Declarar variable 'img'.

function setup() {
  createCanvas(250, 400);
  img = loadImage("/vc/docs/sketches/perro.jpg"); // Cargar la imagen
}

function draw() {
  image(img, 0, 0, 250, 400);
}
