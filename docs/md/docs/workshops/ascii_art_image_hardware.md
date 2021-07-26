# Convert Image to ASCII art - Hardware

El Arte ASCII es un medio artístico que utiliza recursos computarizados fundamentados en los caracteres de impresión del Código Estándar Estadounidense de Intercambio de Información. 

## Procedimiento
Para la realización de este código se divide la imagen en secciones que dependen del slider, se tomaron los valores de luminosidad de las secciones y se reemplazaron por imágenes prerenderizadas de los símbolos del código ascii elegidos.


> :P5 sketch=/docs/sketches/ascii-pre.js, width=512, height=512

> :Tabs
> > :Tab title= **Imagen**
> > 
> > > :P5 sketch=/docs/sketches/image-to-ascii-hardware.js, width=800, height=600
>
> > :Tab title= **Código p5**
> > >
> > > ```
> > > let image;
> > > let ascii;
> > > function preload() {
> > > //Precargar imagen base y shaders
> > > image = loadImage('/vc/docs/sketches/medieval.jpg');
> > > ascii = loadShader('/vc/docs/sketches/ascii.vert', '/vc/docs/sketches/ascii.frag');
> > > //Cargar imagenes de dataset para ascii
> > >     img1 = loadImage('/vc/docs/sketches/99.jpg'); //nivel de brillo mas bajo
> > >     img2 = loadImage('/vc/docs/sketches/88.jpg');
> > >     img3 = loadImage('/vc/docs/sketches/77.jpg');
> > >     img4 = loadImage('/vc/docs/sketches/66.jpg');
> > >     img5 = loadImage('/vc/docs/sketches/55.jpg');
> > >     img6 = loadImage('/vc/docs/sketches/44.jpg');
> > >     img7 = loadImage('/vc/docs/sketches/33.jpg');
> > >     img8 = loadImage('/vc/docs/sketches/22.jpg');
> > >     img9 = loadImage('/vc/docs/sketches/11.jpg');
> > >     img10 = loadImage('/vc/docs/sketches/00.jpg'); //nivel de brillo mas alto    
> > > }
> > > 
> > > function setup() {
> > >     //Crear canvas
> > >     createCanvas(800, 600, WEBGL);
> > >     textureMode(NORMAL);
> > >     noStroke();
> > >     //definir los shaders a usar
> > >     shader(ascii);
> > >     //Pasar imagenes a fragment shader
> > >     ascii.setUniform('img', image);
> > >     ascii.setUniform('img1', img1);
> > >     ascii.setUniform('img2', img2);
> > >     ascii.setUniform('img3', img3);
> > >     ascii.setUniform('img4', img4);
> > >     ascii.setUniform('img5', img5);
> > >     ascii.setUniform('img6', img6);
> > >     ascii.setUniform('img7', img7);
> > >     ascii.setUniform('img8', img8);
> > >     ascii.setUniform('img9', img9);
> > >     ascii.setUniform('img10', img10);
> > >     //seteado
> > >     slider = createSlider(1, 20, 10, 2);
> > >     slider.position(10, 10);
> > >     slider.style('width', '80px');
> > > }
> > > 
> > > function draw() {    
> > >     ascii.setUniform("res", parseInt(800/slider.value()));
> > >     beginShape();
> > >     vertex(-800 / 2, -600 / 2, 0, 0, 0);
> > >     vertex(800 / 2, -600 / 2, 0, 1, 0);
> > >     vertex(800 / 2, 600 / 2, 0, 1, 1);
> > >     vertex(-800 / 2, 600 / 2, 0, 0, 1);
> > >     endShape();
> > > }
> > >
> > > ```

> > :Tab title= **Fragment shader**

> > > ```
> > > precision mediump float;
> > > 
> > > uniform sampler2D img;
> > > 
> > > uniform sampler2D img1;
> > > uniform sampler2D img2;
> > > uniform sampler2D img3;
> > > uniform sampler2D img4;
> > > uniform sampler2D img5;
> > > uniform sampler2D img6;
> > > uniform sampler2D img7;
> > > uniform sampler2D img8;
> > > uniform sampler2D img9;
> > > uniform sampler2D img10;
> > > 
> > > uniform float res;
> > > 
> > > varying vec4 vVertexColor;
> > > varying vec2 vTexCoord;
> > > 
> > > void main() {
> > > 
> > >     vec2 gCoord = vTexCoord * res;
> > > 
> > >     vec2 imgCoord = floor(gCoord);
> > > 
> > >     gCoord = gCoord - imgCoord;
> > > 
> > >     imgCoord = imgCoord * vec2(1.0) / vec2(res);
> > > 
> > >     vec4 color = texture2D(img, imgCoord);
> > > 
> > >     float luminosity = color.r*0.299 + color.g*0.587 + color.b*0.114;
> > > 
> > >     if (luminosity < 0.1 && luminosity >= 0.0){
> > >         gl_FragColor = texture2D(img1, gCoord);
> > >     } else if (luminosity < 0.2 && luminosity >= 0.1){
> > >         gl_FragColor = texture2D(img2, gCoord);
> > >     } else if (luminosity < 0.3 && luminosity >= 0.2){
> > >         gl_FragColor = texture2D(img3, gCoord);
> > >     } else if (luminosity < 0.4 && luminosity >= 0.3){
> > >         gl_FragColor = texture2D(img4, gCoord);
> > >     } else if (luminosity < 0.5 && luminosity >= 0.4){
> > >         gl_FragColor = texture2D(img5, gCoord);
> > >     } else if (luminosity < 0.6 && luminosity >= 0.5){
> > >         gl_FragColor = texture2D(img6, gCoord);
> > >     } else if(luminosity < 0.7 && luminosity >= 0.6){
> > >         gl_FragColor = texture2D(img7, gCoord);
> > >     } else if(luminosity < 0.8 && luminosity >= 0.7){
> > >         gl_FragColor = texture2D(img8, gCoord);
> > >     } else if(luminosity < 0.9 && luminosity >= 0.8){
> > >         gl_FragColor = texture2D(img9, gCoord);
> > >     } else if(luminosity < 1.0 && luminosity >= 0.9){
> > >         gl_FragColor = texture2D(img10, gCoord); 
> > >     }
> > > }
> > > ```
> > > :ToCPrevNext