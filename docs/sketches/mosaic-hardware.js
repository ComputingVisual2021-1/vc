let W;
let H;

let slider;

let myShader;


function preload() {
    img = loadImage('/vc/docs/sketches/main.jpg');

    alpha0 = loadImage('/vc/docs/sketches/img1.jpg')
    alpha1 = loadImage('/vc/docs/sketches/img2.jpg')
    alpha2 = loadImage('/vc/docs/sketches/img3.jpg')
    alpha3 = loadImage('/vc/docs/sketches/img4.jpg')
    alpha4 = loadImage('/vc/docs/sketches/img5.jpg')
    alpha5 = loadImage('/vc/docs/sketches/img6.jpg')
    alpha6 = loadImage('/vc/docs/sketches/img6.jpg')

    myShader = loadShader("/vc/docs/sketches/moasic.vert", "/vc/docs/sketches/mosaic.frag")
}

function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    noStroke();
    shader(myShader);
    myShader.setUniform("texture", img);
    myShader.setUniform("alpha", alpha);
    myShader.setUniform("alpha0", alpha0);
    myShader.setUniform("alpha1", alpha1);
    myShader.setUniform("alpha2", alpha2);
    myShader.setUniform("alpha3", alpha3);
    myShader.setUniform("alpha4", alpha4);
    myShader.setUniform("alpha5", alpha5);
    myShader.setUniform("alpha6", alpha6);

    slider = createSlider(2, 16, 40);
    slider.position(10, 10);
}

function draw() {

    let posSlider = slider.value();
    myShader.setUniform("resolution", parseInt(500 / posSlider));

    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}