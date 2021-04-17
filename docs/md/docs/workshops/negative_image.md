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

> :ToCPrevNext