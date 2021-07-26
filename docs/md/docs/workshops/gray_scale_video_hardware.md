# Gray Scale
## Convert a video to gray scale using RGB average - Hardware

Se utiliza el mismo shader que se usa para las imagenes. en este caso texture.frag
> :Tabs
> > :Tab title= **Original and Gray Scale**
> > 
> > > :P5 sketch=/docs/sketches/video-to-gray-scale-average-hardware.js, width=320, height=500
>
> > :Tab title= **Código p5**
> > >
> > >```js
> > >let _shader;
> > >let video;
> > >let width = 320;
> > >let height = 240;
> > >function preload() {
> > >  // load the shader
> > >  _shader = loadShader(
> > >    "/vc/docs/sketches/texture.vert",
> > >    "/vc/docs/sketches/texture.frag"
> > >  );
> > >  video = createVideo('/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm');
> > >}
> > >function setup() {
> > >  createCanvas(width, height, WEBGL);
> > >  video.loop();
> > >  video.volume(0);
> > >  noStroke();
> > >  shader(_shader);
> > >  textureMode(NORMAL);
> > >  shader(_shader);
> > >}
> > >function draw() {
> > >  background(255);
> > >  beginShape();
> > >  vertex(-width / 2, -height / 2, 0, 0);
> > >  vertex(width / 2, -height / 2, 1, 0);
> > >  vertex(width / 2, height / 2, 1, 1);
> > >  vertex(-width / 2, height / 2, 0, 1);
> > >  endShape(CLOSE);
> > >
> > >  _shader.setUniform("texture", video);
> > >  _shader.setUniform("textureWidth", width);
> > >  _shader.setUniform("textureHeight", height);
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
>

## Convert a video to gray scale using Luminance - Hardware

Se utiliza el mismo shader que se usa para las imagenes. en este caso texture_luma.frag
> :Tabs
> > :Tab title= **Original and Gray Scale**
> > 
> > > :P5 sketch=/docs/sketches/video-to-gray-scale-hsl-hardware.js, width=320, height=500
>
> > :Tab title= **Código p5**
> > >
> > >```js
> > >let _shader;
> > >let video;
> > >let width = 320;
> > >let height = 240;
> > >
> > >function preload() {
> > >  // load the shader
> > >  _shader = loadShader(
> > >    "/vc/docs/sketches/texture.vert",
> > >    "/vc/docs/sketches/texture_luma.frag"
> > >  );
> > >  video = createVideo('/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm');
> > >}
> > >function setup() {
> > >  createCanvas(width, height, WEBGL);
> > >  video.loop();
> > >  video.volume(0);
> > >  noStroke();
> > >  shader(_shader);
> > >  textureMode(NORMAL);
> > >  shader(_shader);
> > >}
> > >function draw() {
> > >  background(255);
> > >  beginShape();
> > >  vertex(-width / 2, -height / 2, 0, 0);
> > >  vertex(width / 2, -height / 2, 1, 0);
> > >  vertex(width / 2, height / 2, 1, 1);
> > >  vertex(-width / 2, height / 2, 0, 1);
> > >  endShape(CLOSE);
> > >  _shader.setUniform("texture", video);
> > >  _shader.setUniform("textureWidth", width);
> > >  _shader.setUniform("textureHeight", height);
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
>

> :ToCPrevNext