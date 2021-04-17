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

> :ToCPrevNext