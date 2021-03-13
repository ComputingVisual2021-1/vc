
let img; // Declarar variable 'img'.

function setup() {
  createCanvas(720, 560);
  img = loadImage('/vc/docs/sketches/cat.png'); // Cargar la imagen
}

function draw() {
  // Muestra la imagen en su tamaño original en la posición (0,0)
  image(img, 0, 0, 720, 560);
  filter(INVERT);
}
