# Kernels

Se utilizaron kernels para el procesamiento de una imagen en dos formas, el filtro blur(volviendo la imagen borrosa) y el filtro sharp (acentuando los bordes de la imagen).

## Original
> :P5 sketch=/docs/sketches/image-canvas.js, width=720, height=560

## Blur kernel
> :P5 sketch=/docs/sketches/blur-hardware.js, width=720, height=560
```js
const width = 720;
const height = 560;
var img; 
let _shader;
let v = 1.0 / 9.0;
let kernel = [ v, v, v ,  v, v, v ,  v, v, v ]; 

function preload(){
    _shader = loadShader('/vc/docs/sketches/texture.vert','/vc/docs/sketches/kernel-texture.frag');
    img = loadImage('/vc/docs/sketches/cat.png')  
}


function setup() {
  createCanvas(width, height, WEBGL);  
  textureMode(NORMAL);
  shader(_shader);
  _shader.setUniform('texture', img);
  _shader.setUniform('texOff', [1/img.width, 1/img.height]);
  _shader.setUniform('mask', kernel);
}

function draw() {
  background(255);
  beginShape();
  vertex(-width/2, -height/2, 0, 0);
  vertex( width/2, -height/2, 1, 0);
  vertex( width/2,  height/2, 1, 1);
  vertex(-width/2,  height/2, 0, 1);
  endShape(CLOSE);
}
```

## Edge kernel

La única diferencia real entre los dos filtros es el kernel utilizado, de resto el código es igual para ambos algor

> :P5 sketch=/docs/sketches/edge-hardware.js, width=720, height=560
```js
const width = 720;
const height = 560;
var img; 
let _shader;
let v = 1.0 / 9.0;
let kernel = [ 0.0, -1.0, 0.0, -1.0, 5.0, -1.0, 0.0, -1.0, 0.0 ]; 

function preload(){
    _shader = loadShader('/vc/docs/sketches/texture.vert','/vc/docs/sketches/kernel-texture.frag');
    img = loadImage('/vc/docs/sketches/cat.png')  
}


function setup() {
  createCanvas(width, height, WEBGL);  
  textureMode(NORMAL);
  shader(_shader);
  _shader.setUniform('texture', img);
  _shader.setUniform('texOff', [1/img.width, 1/img.height]);
  _shader.setUniform('mask', kernel);
}

function draw() {
  background(255);
  beginShape();
  vertex(-width/2, -height/2, 0, 0);
  vertex( width/2, -height/2, 1, 0);
  vertex( width/2,  height/2, 1, 1);
  vertex(-width/2,  height/2, 0, 1);
  endShape(CLOSE);
}
```

> :ToCPrevNext
