let image;
let ascii;

function preload() {
    //Precargar imagen base y shaders
    image = loadImage('/vc/docs/sketches/medieval.jpg');
    ascii = loadShader('/vc/docs/sketches/ascii.vert', '/vc/docs/sketches/ascii.frag');

    //Cargar imagenes de dataset para ascii
    img1 = loadImage('/vc/docs/sketches/ascii0.jpg'); //nivel de brillo mas bajo
    img2 = loadImage('/vc/docs/sketches/ascii0.jpg');
    img3 = loadImage('/vc/docs/sketches/ascii3.jpg');
    img4 = loadImage('/vc/docs/sketches/ascii4.jpg');
    img5 = loadImage('/vc/docs/sketches/ascii5.jpg');
    img6 = loadImage('/vc/docs/sketches/ascii6.jpg');
    img7 = loadImage('/vc/docs/sketches/ascii7.jpg');
    img8 = loadImage('/vc/docs/sketches/ascii7.jpg');
    img9 = loadImage('/vc/docs/sketches/ascii7.jpg');
    img10 = loadImage('/vc/docs/sketches/ascii7.jpg'); //nivel de brillo mas alto    
}

function setup() {
    //Crear canvas
    createCanvas(512, 512, WEBGL);
    textureMode(NORMAL);
    noStroke();
    //definir los shaders a usar
    shader(ascii);
    //Pasar imagenes a fragment shader
    ascii.setUniform('img', image);
    ascii.setUniform('img1', img1);
    ascii.setUniform('img2', img2);
    ascii.setUniform('img3', img3);
    ascii.setUniform('img4', img4);
    ascii.setUniform('img5', img5);
    ascii.setUniform('img6', img6);
    ascii.setUniform('img7', img7);
    ascii.setUniform('img8', img8);
    ascii.setUniform('img9', img9);
    ascii.setUniform('img10', img10);

}

function draw() {
    let posSlider = 8
    ascii.setUniform("res", parseInt(500 / posSlider));
    beginShape();
    vertex(-700 / 2, -900 / 2, 0, 0, 0);
    vertex(700 / 2, -900 / 2, 0, 1, 0);
    vertex(700 / 2, 900 / 2, 0, 1, 1);
    vertex(-700 / 2, 900 / 2, 0, 0, 1);
    endShape();
}
