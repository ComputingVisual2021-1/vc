# Image and video processing
# Load and show an image

Adapted from [here](https://p5js.org/es/examples/image-load-and-display-image.html).

> :P5 sketch=/docs/sketches/image-canvas.js, width=720, height=560

```md
> :P5 sketch=/docs/sketches/image-canvas.js, width=720, height=560
>
> let img; 
> function setup() {
>  createCanvas(720, 560);
>  img = loadImage('/vc/docs/sketches/cat.png'); // Cargar la imagen
> }
>
> function draw() {
>  image(img, 0, 0, 720, 560);
> }
```

# Negative of an image

El negativo es (r,g,b) -> (255-r, 255-g, 255 -b)

> :P5 sketch=/docs/sketches/negative-image.js, width=720, height=560

```md
> :P5 sketch=/docs/sketches/negative-image.js, width=720, height=560
>
>let img;
>
>function preload()
>{
>  img = loadImage('/vc/docs/sketches/cat.png'); // Cargar la imagen
>}
>
>function setup() {
>  createCanvas(720, 560);
>  noLoop();
>}
>
>function draw() {
>  image(img, 0, 0,720, 560);
>  let d = pixelDensity(); //sin argumentos retorna la densidad de pixeles actual del bosquejo.
>  let pixelsLength = 4 * (width * d) * (height * d);
>  loadPixels();
>  for (let i = 0; i < pixelsLength; i += 4) {
>    pixels[i] = 255 - pixels[i];
>   pixels[i + 1] = 255 - pixels[i + 1];
>    pixels[i + 2] = 255 - pixels[i + 2];
>  }
>  updatePixels();
>}

```
# Gray Scale
## Convert image to gray scale using average

Adapted from [here](https://codepen.io/duketeam/pen/ALEByA)
and [here](https://p5js.org/es/reference/#/p5/pixels).

> :P5 sketch=/docs/sketches/image-to-gray-scale-average.js, width=720, height=560

```md
> let img;
> 
> function preload() {
>     img = loadImage('/vc/docs/sketches/cat.png');
> }
> 
> function setup() {
>   createCanvas(720, 560);
>   noLoop();
> }
> 
> function draw() {
>   img.loadPixels();
>   for (let y=0; y<img.height; y++) {
>    for (let x=0; x<img.width; x++) {
>      let px = img.get(x, y);   // get pixel value
>      let r = px[0];      
>       let g = px[1];   
>       let b = px[2];  
>       let avg = (r+g+b)/3;          
>       img.set(x, y, color(avg));  // set pixel to this value
>     }
>   }
>   img.updatePixels();
>   image(img, 0,0, 720,560);
> }
```
## Convert video to gray scale using average

Se consiguieron las muestras de video en java, sin embargo, no se logr?? obtener una versi??n en p5.js para esta entrega.

El c??digo en java es el siguiente:
```md
import processing.video.*;
Movie myMovie;
PImage img;
float oldR, oldG, oldB, newR, newG, newB, newColor;
void setup() {
  myMovie = new Movie(this, "example.mp4");
  size(1280,720);
  myMovie.loop();
}
void draw(){
  if (myMovie.available()) {    
    myMovie.read();  
  }
 
  myMovie.loadPixels();
  int imgSize = myMovie.width * myMovie.height;
  for (int i = 0; i < imgSize; i++){
    color oldColor = myMovie.pixels[i];
    oldR = red(oldColor);
    oldG = green(oldColor);
    oldB = blue(oldColor);
    newColor = oldR/3 +oldG/3 +oldB/3;
    myMovie.pixels[i] = color(newColor, newColor, newColor);
  }
  image(myMovie, 0, 0, width, height);
}
```

## Convert image to gray scale using Luminance

Adapted from [here](https://p5js.org/es/reference/#/p5/pixels)
review model of [here](https://en.wikipedia.org/wiki/Luminance)
and [here](https://en.wikipedia.org/wiki/Luma_%28video%29)

> :P5 sketch=/docs/sketches/image-to-gray-scale-hsl.js, width=720, height=560

```md
> let img;
> 
> function preload() {
>     img = loadImage('/vc/docs/sketches/cat.png');
> }

> function setup() {
>   createCanvas(720, 560);
>   noLoop();
> }
> 
> function draw() {
>   img.loadPixels();
>   for (let y=0; y<img.height; y++) {
>     for (let x=0; x<img.width; x++) {
>       let px = img.get(x, y);   // get pixel value
>      let r = px[0];      
>       let g = px[1];   
>       let b = px[2];  
>       let luminence = r * 0.2126 + g * 0.7152 + b * 0.0722
>       img.set(x, y, color(luminence));  // set pixel to this value
>     }
>   }
>   img.updatePixels();
>   image(img, 0,0, 720,560);
> }
```
## Convert video to gray scale using average
Nuevamente no s?? logr?? una versi??n de p5.js para este ejercicio, pero se adjunta la versi??n funcional en java.

```md
import processing.video.*;
Movie myMovie;
float oldR, oldG, oldB, newR, newG, newB, gray;
void setup() {
  myMovie = new Movie(this, "example.mp4");
  size(1280,720);
  myMovie.loop();
}
void draw(){
  if (myMovie.available()) {    
    myMovie.read();  
  }
 
  myMovie.loadPixels();
  int imgSize = myMovie.width * myMovie.height;
  for (int i = 0; i < imgSize; i++){
    color oldColor = myMovie.pixels[i];
    oldR = red(oldColor);
    oldG = green(oldColor);
    oldB = blue(oldColor);
    gray = oldR *0.299 + oldG*0.587 + oldB*0.114;
    myMovie.pixels[i] = color(gray,gray,gray);
  }
  image(myMovie, 0, 0, width, height);
}
```
# Convert image to ASCII Art

Adapted from [here](https://www.mathiasbernhard.ch/ascii-art-with-p5js/).

> :P5 sketch=/docs/sketches/image-to-ascii.js, width=720, height=560

```md
>var img;
>var resdiv;
>var options = [' ','`','.',',-',"':",';_~','"','*|','!l',
>'+=','>','<L','\\i','/^','1?','Jv','r','()cx','7}','sz',
>'3u','2Ckty{','jn','4FVY','5P[]af','qw','Sde','Eo',
>'NOZ','9HXgh','GTU','$AIm','QW','KM','%8','#06@','bp',
>'D','&','R','B'];
>
>function preload()
>{
>  img = loadImage('/vc/docs/sketches/cat.png');
>}
>
>function setup() {
>  resdiv = createP('');
>  img.resize(720, 560);
>  calcImg(img);
>}
>
>function calcImg(pic) {
>  var res = '<pre>';
>  for (var i=0; i<60; i++) {
>    var line = '';
>    for (var j=0; j<140; j++) {
>      var x = pic.get(2+round(j*5.714),5+i*10);
>      var v = round((1-x[0]/255.0)*40);
>      var index = floor(random(options[v].length));
>      var chr = options[v][index];
>      if (chr==' ') chr='&nbsp;';
>      if (chr=='<') chr='&lt;';
>      if (chr=='>') chr='&gt;';
>      if (chr=='"') chr='&quot;';
>      line += chr;
>    }
>    res += line+'<br>';
>  }
>  res += '</pre>'
>  resdiv.html(res);
>}

```
# Convert Image to photo-mosaic

Adapted from [here](https://github.com/ITPNYU/Obamathon/blob/master/examples/Processing/ObamaMosaic/ObamaMosaic.pde).

<img src="https://i.ibb.co/hCXGrb6/perro.png" alt="perro" style="width: 380px;" />
<img src="https://i.ibb.co/kXx1B18/perro-mosaic.png" alt="perro_mosaic" style="width: 380px;"/> 

```md
>PImage imagen;
>PImage menor; //guarda el tama??o de cada imagen que compone el mosaico
>PImage imagenes[]; //array con todas las imagenres
>PImage brilloImagenes[]; //guarda el brillo de cada imagen
>float brillo[]; //intencidad de brillo
>
>int escala=4; //la escala de los mosaicos
>int w,h;
>
>void setup() {
>  size(768, 961);
>  imagen = loadImage("./foto/perro.jpg");
>  String path=sketchPath()+"/assets";
>  File[] archivos=listFiles(path);
>  
>  imagenes=new PImage[archivos.length];
>  brillo=new float[imagenes.length];
>  brilloImagenes=new PImage[256];
>  
>  for(int i=0; i<imagenes.length;i++){
>    String nombreArchivo=archivos[i].toString();
>    imagenes[i]=loadImage(nombreArchivo);
>    imagenes[i].loadPixels();
>    float avg=0;
>    for(int j=0;j < imagenes[i].pixels.length;j++){
>      float b=brightness(imagenes[i].pixels[j]);
>      avg+=b;
>    }
>    avg /= imagenes[i].pixels.length;
>    brillo[i]=avg;
>  }
>
>  for(int i=0; i<brilloImagenes.length;i++){
>    float r=256;
>    for(int j=0; j<brillo.length;j++){
>      float distancia=abs(i-brillo[j]);
>      if(distancia <r){
>        r=distancia;
>        brilloImagenes[i]=imagenes[j];
>      }
>    }
>  }
>  
>  w=imagen.width/escala;
>  h=imagen.height/escala;
>  menor=createImage(w,h,RGB);
>  menor.copy(imagen,0,0,imagen.width,imagen.height,0,0,w,h);
>  
>}
>
>void draw(){
>  menor.loadPixels();
>  for(int i=0;i<w;i++){
>    for(int j=0;j<h;j++){
>      int index=i+j*w; //busca cada pixel de la imagen
>      color c=menor.pixels[index];
>      //fill(brightness(c));
>      //noStroke();
>      //rect(i*escala,j*escala,escala,escala);
>      int imgIndex=int(brightness(c));
>      image(brilloImagenes[imgIndex],i*escala,j*escala,i,j);
>    }
>  }
>  noLoop();
>}
```

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

La ??nica diferencia real entre los dos filtros es el kernel utilizado, de resto el c??digo es igual para ambos algor

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