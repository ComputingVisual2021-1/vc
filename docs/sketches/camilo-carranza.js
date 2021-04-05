let img; // Declarar variable 'img'.

function setup() {
  createCanvas(250, 350);
  img = loadImage("/vc/docs/sketches/camilo-carranza.png"); // Cargar la imagen
}

function draw() {
  image(img, 0, 0, 250, 350);
}
