# Gray Scale
## Convert image to gray scale using RGB average - Hardware


> :Tabs
> > :Tab title= **Original**
> > 
> > > :P5 sketch=/docs/sketches/image-canvas.js, width=720, height=560
>
> > :Tab title= **Gray Scale**
> > 
> > > :P5 sketch=/docs/sketches/image-to-gray-scale-average-hardware.js, width=720, height=560
>
> > :Tab title= **Código p5**
> > >
> > >```js
> > >let _shader;
> > >let img;
> > >let width = 720;
> > >let height = 560;
> > >function preload(){
> > >    _shader = loadShader('/vc/docs/sketches/texture.vert','/vc/docs/sketches/texture.frag');
> > >  img = loadImage('/vc/docs/sketches/cat.png');
> > >}
> > >function setup() {
> > >  createCanvas(width, height, WEBGL);
> > >  textureMode(NORMAL);
> > >  shader(_shader);
> > >  _shader.setUniform("texture", img);
> > >}
> > >function draw() {
> > >  background(255);
> > >  beginShape();
> > >  vertex(-width/2, -height/2, 0, 0); // bl
> > >  vertex(width/2, -height/2, 1, 0); // br
> > >  vertex(width/2, height/2, 1, 1); // hr
> > >  vertex(-width/2, height/2, 0, 1); // hl
> > >  endShape(CLOSE);
> > >}
> > > ```
>
> > :Tab title= **Fragment shader**
> > > ```
> > >precision mediump float;
> > >
> > >uniform sampler2D texture;
> > >
> > >// interpolated color (same name as in vertex shader)
> > >varying vec4 vVertexColor;
> > >
> > >vec4 averageTextureColor;
> > >float average;
> > >// interpolated texcoord (same name as in vertex shader)
> > >varying vec2 vTexCoord;
> > >
> > >void main() {
> > >  
> > >  averageTextureColor = texture2D(texture, vTexCoord);
> > >  average = (averageTextureColor.r + averageTextureColor.g + averageTextureColor.b)/3.0;
> > >  averageTextureColor.r = average;
> > >  averageTextureColor.g = average;
> > >  averageTextureColor.b = average;
> > >  averageTextureColor.a = 1.0;
> > >
> > >  gl_FragColor = averageTextureColor * vVertexColor;  
> > >}
> > > ```


## Convert image to gray scale using Luminance - Hardware

> :Tabs
> > :Tab title= **Original**
> > 
> > > :P5 sketch=/docs/sketches/image-canvas.js, width=720, height=560
>
> > :Tab title= **Gray Scale**
> > 
> > > :P5 sketch=/docs/sketches/image-to-gray-scale-hsl-hardware.js, width=720, height=560
>
> > :Tab title= **Código p5**
> > >
> > >```js
> > >let _shader;
> > >let img;
> > >let width = 720;
> > >let height = 560;
> > >function preload(){
> > >    _shader = loadShader('/vc/docs/sketches/texture.vert','/vc/docs/sketches/texture_luma.frag');
> > >  img = loadImage('/vc/docs/sketches/cat.png');
> > >}
> > >function setup() {
> > >  createCanvas(width, height, WEBGL);
> > >  textureMode(NORMAL);
> > >  shader(_shader);
> > >  _shader.setUniform("texture", img);
> > >}
> > >function draw() {
> > >  background(255);
> > >  beginShape();
> > >  vertex(-width/2, -height/2, 0, 0); // bl
> > >  vertex(width/2, -height/2, 1, 0); // br
> > >  vertex(width/2, height/2, 1, 1); // hr
> > >  vertex(-width/2, height/2, 0, 1); // hl
> > >  endShape(CLOSE);
> > >}
> > > ```
>
> > :Tab title= **Fragment shader**
> > > ```
> > >precision mediump float;
> > >
> > >uniform sampler2D texture;
> > >
> > >// interpolated color (same name as in vertex shader)
> > >varying vec4 vVertexColor;
> > >
> > >vec4 averageTextureColor;
> > >float luminence;
> > >// interpolated texcoord (same name as in vertex shader)
> > >varying vec2 vTexCoord;
> > >
> > >void main() {
> > >  
> > >  averageTextureColor = texture2D(texture, vTexCoord);
> > >  luminence = (averageTextureColor.r * 0.2126 + averageTextureColor.g * 0.7152 + averageTextureColor.b * 0.0722);
> > >  averageTextureColor.r = luminence;
> > >  averageTextureColor.g = luminence;
> > >  averageTextureColor.b = luminence;
> > >  averageTextureColor.a = 1.0;
> > >
> > >  gl_FragColor = averageTextureColor * vVertexColor;  
> > >}
> > > ```

> :ToCPrevNext