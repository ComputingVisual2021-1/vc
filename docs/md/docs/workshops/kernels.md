# Kernels

Se utilizaron kernels para el procesamiento de una imagen en dos formas, el filtro blur(volviendo la imagen borrosa) y el filtro sharp (acentuando los bordes de la imagen).

## Blur kernel
> :P5 sketch=/docs/sketches/blur.js, width=1024, height=512
```md
let v = 1.0 / 9.0;
let kernel = [[ v, v, v ], [ v, v, v ], [ v, v, v ]]; 
function preload() {
  img = loadImage("/vc/docs/sketches/medieval.jpg"); 
}

function setup() {
  createCanvas(1024, 512);
  noLoop();
}

function draw() {
  blurImg = createImage(img.width, img.height);
  blurImg.loadPixels();
  for (let x = 1; x < img.width; x++) {
    for (let y = 1; y < img.height; y++) {
      let sum = 0; 
      // kx, ky variables for iterating over the kernel
      // kx, ky have three different values: -1, 0, 1
      for (let kx = -1; kx <= 1; kx++) {
        for (let ky = -1; ky <= 1; ky++) {
          let xpos = x + kx;
          let ypos = y + ky;
          let val = red(img.get(xpos, ypos));
          // accumulate the  kernel sum
          // kernel is a 3x3 matrix
          // kx and ky have values -1, 0, 1
          // if we add 1 to kx and ky, we get 0, 1, 2
          // with that we can use it to iterate over kernel
          // and calculate the accumulated sum
          sum += kernel[kx+1][ky+1] * val;
        }
      }
      blurImg.set(x, y, color(sum));
    }
  }
  blurImg.updatePixels();
  image(img,0,0);
  image(blurImg, img.width, 0);
}
```

## Edge kernel

La única diferencia real entre los dos filtros es el kernel utilizado, de resto el código es igual para ambos algor

> :P5 sketch=/docs/sketches/edge.js, width=1024, height=512
```md
let kernel = [[-1, -1, -1 ], [ -1,  9, -1 ], [-1, -1, -1 ]];

function preload() {
  img = loadImage("/vc/docs/sketches/medieval.jpg"); 
}

function setup() {
  createCanvas(1024, 512);
  noLoop();
}

function draw() {
  blurImg = createImage(img.width, img.height);
  blurImg.loadPixels();
  for (let x = 1; x < img.width-1; x++) {
    for (let y = 1; y < img.height-1; y++) {
      let sum = 0; 
      // kx, ky variables for iterating over the kernel
      // kx, ky have three different values: -1, 0, 1
      for (let kx = -1; kx <= 1; kx++) {
        for (let ky = -1; ky <= 1; ky++) {
          let xpos = x + kx;
          let ypos = y + ky;
          let val = red(img.get(xpos, ypos));
          // accumulate the  kernel sum
          // kernel is a 3x3 matrix
          // kx and ky have values -1, 0, 1
          // if we add 1 to kx and ky, we get 0, 1, 2
          // with that we can use it to iterate over kernel
          // and calculate the accumulated sum
          sum += kernel[kx+1][ky+1] * val;
        }
      }
      blurImg.set(x, y, color(sum));
    }
  }
  blurImg.updatePixels();
  image(img,0,0);
  image(blurImg, img.width, 0);
}
```

> :ToCPrevNext
