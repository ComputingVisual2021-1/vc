let img; 
createCanvas(512, 512);
img = loadImage('/vc/docs/sketches/medieval.jpg'); // Cargar la imagen

function draw() {
    image(img, 0, 0, 512, 512);
}