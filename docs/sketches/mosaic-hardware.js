let image;
let mosaic;

function preload() {
    //Precargar imagen base y shaders
    image = loadImage('/vc/docs/sketches/main.jpg');
    mosaic = loadShader('/vc/docs/sketches/mosaic.vert', '/vc/docs/sketches/mosaic.frag');

    //Cargar imagenes de dataset para mosaico
    img1 = loadImage('/vc/docs/sketches/img1.jpg');
    img2 = loadImage('/vc/docs/sketches/img2.jpg');
    img3 = loadImage('/vc/docs/sketches/img3.jpg');
    img4 = loadImage('/vc/docs/sketches/img4.jpg');
    img5 = loadImage('/vc/docs/sketches/img5.jpg');
    img6 = loadImage('/vc/docs/sketches/img6.jpg');
    img7 = loadImage('/vc/docs/sketches/img7.jpg');
    img8 = loadImage('/vc/docs/sketches/img8.jpg');
    img9 = loadImage('/vc/docs/sketches/img9.jpg');
    img10 = loadImage('/vc/docs/sketches/img10.jpg');
    
    
}

function setup() {
    //Crear canvas
    createCanvas(700, 900, WEBGL);
    textureMode(NORMAL);
    noStroke();
    //definir los shaders a usar
    shader(mosaic);
    //Pasar imagenes a fragment shader
    mosaic.setUniform('img', image);
    mosaic.setUniform('img1', img1);
    mosaic.setUniform('img2', img2);
    mosaic.setUniform('img3', img3);
    mosaic.setUniform('img4', img4);
    mosaic.setUniform('img5', img5);
    mosaic.setUniform('img6', img6);
    mosaic.setUniform('img7', img7);
    mosaic.setUniform('img8', img8);
    mosaic.setUniform('img9', img9);
    mosaic.setUniform('img10', img10);

}

function draw() {
    let posSlider = 16
    mosaic.setUniform("resolution", parseInt(500 / posSlider));
    beginShape();
    vertex(-700 / 2, -900 / 2, 0, 0, 0);
    vertex(700 / 2, -900 / 2, 0, 1, 0);
    vertex(700 / 2, 900 / 2, 0, 1, 1);
    vertex(-700 / 2, 900 / 2, 0, 0, 1);
    endShape();
}
