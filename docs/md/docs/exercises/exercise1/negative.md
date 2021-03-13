# P5 inline code

Adapted from [here](https://p5js.org/es/reference/#/p5/filter).

> :P5 sketch=/docs/sketches/negative-image.js, width=720, height=560

```md
> :P5 sketch=/docs/sketches/negative-image.js, width=720, height=560
>
> let img; // Declarar variable 'img'.
> function setup() {
>  createCanvas(720, 560);
>  img = loadImage('/vc/docs/sketches/cat.png'); // Cargar la imagen
> }
>
> function draw() {
>  image(img, 0, 0, 720, 560);
>  filter(INVERT);
> }
```

> :ToCPrevNext