let kernel = [[-1, -1, -1 ], [ -1,  9, -1 ], [-1, -1, -1 ]];

function preload() {
  img = loadImage("/vc/docs/sketches/medieval.jpg"); 
}

function setup() {
  createCanvas(1024, 512);
  noLoop();
}

function draw() {
  edgeImg = createImage(img.width, img.height);
  edgeImg.loadPixels();
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
      edgeImg.set(x, y, color(sum));
    }
  }
  edgeImg.updatePixels();
  image(img,0,0);
  image(edgeImg, img.width, 0);
}