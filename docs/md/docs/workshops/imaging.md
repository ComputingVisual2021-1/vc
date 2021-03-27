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

> :ToCPrevNext