let img; // Declarar variable 'img'.

function setup() {
  createCanvas(500, 300);
  img = loadImage("/vc/docs/sketches/item.JPG"); // Cargar la imagen
}

function draw() {
  image(img, 0, 0, 500, 300);
}
