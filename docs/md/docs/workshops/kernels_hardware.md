# Kernels

Se utilizaron kernels para el procesamiento de una imagen en dos formas, el filtro blur(volviendo la imagen borrosa) y el filtro sharp (acentuando los bordes de la imagen).

## Original Image
> :P5 sketch=/docs/sketches/image-canvas.js, width=720, height=560

## Blur kernel Image
> :Tabs
> > :Tab title= **Filtered**
> > 
> > > :P5 sketch=/docs/sketches/blur-hardware.js, width=720, height=560
>
> > :Tab title= **Código p5**
> > >
> > >```js
> > >const width = 720;
> > >const height = 560;
> > >var img; 
> > >let _shader;
> > >let v = 1.0 / 9.0;
> > >let kernel = [ v, v, v ,  v, v, v ,  v, v, v ]; 
> > >
> > >function preload(){
> > >    _shader = loadShader('/vc/docs/sketches/texture.vert','/vc/docs/sketches/kernel-texture.frag');
> > >    img = loadImage('/vc/docs/sketches/cat.png')  
> > >}
> > >
> > >
> > >function setup() {
> > >  createCanvas(width, height, WEBGL);  
> > >  textureMode(NORMAL);
> > >  shader(_shader);
> > >  _shader.setUniform('texture', img);
> > >  _shader.setUniform('texOff', [1/img.width, 1/img.height]);
> > >  _shader.setUniform('mask', kernel);
> > >}
> > >
> > >function draw() {
> > >  background(255);
> > >  beginShape();
> > >  vertex(-width/2, -height/2, 0, 0);
> > >  vertex( width/2, -height/2, 1, 0);
> > >  vertex( width/2,  height/2, 1, 1);
> > >  vertex(-width/2,  height/2, 0, 1);
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
> > >// interpolated texcoord (same name as in vertex shader)
> > >varying vec2 vTexCoord;
> > >
> > >uniform vec2 texOff;
> > >uniform float mask[9];
> > >
> > >vec2 tx[9];
> > >
> > >
> > >void main() {
> > >	//Get Coordinates for every neighbor pixel
> > >	tx[0] = vTexCoord.st + vec2(-texOff.s, -texOff.t); 
> > >	tx[1] = vTexCoord.st + vec2(0.0, -texOff.t); 
> > >	tx[2] = vTexCoord.st + vec2(texOff.s, -texOff.t); 
> > >	tx[3] = vTexCoord.st + vec2(-texOff.s, 0.0); 
> > >	tx[4] = vTexCoord.st + vec2(0.0, 0.0); 
> > >	tx[5] = vTexCoord.st + vec2(texOff.s, 0.0); 
> > >	tx[6] = vTexCoord.st + vec2(-texOff.s, texOff.t); 
> > >	tx[7] = vTexCoord.st + vec2(0.0, texOff.t); 
> > >	tx[8] = vTexCoord.st + vec2(texOff.s, texOff.t);
> > >
> > >	//Get RGBA color from the image in each pixel
> > >	vec4 rgba[9];
> > >	for(int i=0; i<9; i++){
> > >		rgba[i] = texture2D(texture, tx[i]);	
> > >	}
> > >
> > >	//Apply Convolutional Operation to the pixel
> > >	vec4 conv;
> > >	for(int i=0; i<9; i++){
> > >		conv += rgba[i] * mask[i];	
> > >	}
> > >	conv.a = 1.0;
> > >
> > >  	gl_FragColor = conv;
> > >}
> > > ```


## Edge kernel Image

La única diferencia real entre los dos filtros es el kernel utilizado, de resto el código es igual para ambos algoritmos

> :Tabs
> > :Tab title= **Filtered**
> > 
> > > :P5 sketch=/docs/sketches/edge-hardware.js, width=720, height=560
>
> > :Tab title= **Código p5**
> > >
> > >```js
> > >const width = 720;
> > >const height = 560;
> > >var img; 
> > >let _shader;
> > >let kernel = [ 0.0, -1.0, 0.0, -1.0, 5.0, -1.0, 0.0, -1.0, 0.0 ]; 
> > >
> > >function preload(){
> > >    _shader = loadShader('/vc/docs/sketches/texture.vert','/vc/docs/sketches/kernel-texture.frag');
> > >    img = loadImage('/vc/docs/sketches/cat.png')  
> > >}
> > >
> > >
> > >function setup() {
> > >  createCanvas(width, height, WEBGL);  
> > >  textureMode(NORMAL);
> > >  shader(_shader);
> > >  _shader.setUniform('texture', img);
> > >  _shader.setUniform('texOff', [1/img.width, 1/img.height]);
> > >  _shader.setUniform('mask', kernel);
> > >}
> > >
> > >function draw() {
> > >  background(255);
> > >  beginShape();
> > >  vertex(-width/2, -height/2, 0, 0);
> > >  vertex( width/2, -height/2, 1, 0);
> > >  vertex( width/2,  height/2, 1, 1);
> > >  vertex(-width/2,  height/2, 0, 1);
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
> > >// interpolated texcoord (same name as in vertex shader)
> > >varying vec2 vTexCoord;
> > >
> > >uniform vec2 texOff;
> > >uniform float mask[9];
> > >
> > >vec2 tx[9];
> > >
> > >
> > >void main() {
> > >	//Get Coordinates for every neighbor pixel
> > >	tx[0] = vTexCoord.st + vec2(-texOff.s, -texOff.t); 
> > >	tx[1] = vTexCoord.st + vec2(0.0, -texOff.t); 
> > >	tx[2] = vTexCoord.st + vec2(texOff.s, -texOff.t); 
> > >	tx[3] = vTexCoord.st + vec2(-texOff.s, 0.0); 
> > >	tx[4] = vTexCoord.st + vec2(0.0, 0.0); 
> > >	tx[5] = vTexCoord.st + vec2(texOff.s, 0.0); 
> > >	tx[6] = vTexCoord.st + vec2(-texOff.s, texOff.t); 
> > >	tx[7] = vTexCoord.st + vec2(0.0, texOff.t); 
> > >	tx[8] = vTexCoord.st + vec2(texOff.s, texOff.t);
> > >
> > >	//Get RGBA color from the image in each pixel
> > >	vec4 rgba[9];
> > >	for(int i=0; i<9; i++){
> > >		rgba[i] = texture2D(texture, tx[i]);	
> > >	}
> > >
> > >	//Apply Convolutional Operation to the pixel
> > >	vec4 conv;
> > >	for(int i=0; i<9; i++){
> > >		conv += rgba[i] * mask[i];	
> > >	}
> > >	conv.a = 1.0;
> > >
> > >  	gl_FragColor = conv;
> > >}
> > > ```

## Blur kernel Video
> :Tabs
> > :Tab title= **Filtered**
> > 
> > > :P5 sketch=/docs/sketches/blur-video-hardware.js, width=720, height=560
>
> > :Tab title= **Código p5**
> > >
> > >```js
> > >let _shader;
> > >let video;
> > >let width = 320;
> > >let height = 240;
> > >let v = 1.0 / 9.0;
> > >let kernel = [ v, v, v ,  v, v, v ,  v, v, v ]; 
> > >
> > >function preload(){
> > >    _shader = loadShader('/vc/docs/sketches/texture.vert','/vc/docs/sketches/kernel-texture.frag');
> > >      video = createVideo('/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm'); 
> > >}
> > >
> > >
> > >function setup() {
> > >    createCanvas(width, height, WEBGL);
> > >    video.loop();
> > >    video.volume(0);
> > >    noStroke();
> > >    shader(_shader);
> > >    textureMode(NORMAL);
> > >    shader(_shader);
> > >    _shader.setUniform('texture', video);
> > >    _shader.setUniform('texOff', [1/video.width, 1/video.height]);
> > >}
> > >
> > >function draw() {
> > >    background(255);
> > >    beginShape();
> > >    vertex(-width / 2, -height / 2, 0, 0);
> > >    vertex(width / 2, -height / 2, 1, 0);
> > >    vertex(width / 2, height / 2, 1, 1);
> > >    vertex(-width / 2, height / 2, 0, 1);
> > >    endShape(CLOSE);
> > >    _shader.setUniform("mask", kernel);
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
> > >// interpolated texcoord (same name as in vertex shader)
> > >varying vec2 vTexCoord;
> > >
> > >uniform vec2 texOff;
> > >uniform float mask[9];
> > >
> > >vec2 tx[9];
> > >
> > >
> > >void main() {
> > >	//Get Coordinates for every neighbor pixel
> > >	tx[0] = vTexCoord.st + vec2(-texOff.s, -texOff.t); 
> > >	tx[1] = vTexCoord.st + vec2(0.0, -texOff.t); 
> > >	tx[2] = vTexCoord.st + vec2(texOff.s, -texOff.t); 
> > >	tx[3] = vTexCoord.st + vec2(-texOff.s, 0.0); 
> > >	tx[4] = vTexCoord.st + vec2(0.0, 0.0); 
> > >	tx[5] = vTexCoord.st + vec2(texOff.s, 0.0); 
> > >	tx[6] = vTexCoord.st + vec2(-texOff.s, texOff.t); 
> > >	tx[7] = vTexCoord.st + vec2(0.0, texOff.t); 
> > >	tx[8] = vTexCoord.st + vec2(texOff.s, texOff.t);
> > >
> > >	//Get RGBA color from the image in each pixel
> > >	vec4 rgba[9];
> > >	for(int i=0; i<9; i++){
> > >		rgba[i] = texture2D(texture, tx[i]);	
> > >	}
> > >
> > >	//Apply Convolutional Operation to the pixel
> > >	vec4 conv;
> > >	for(int i=0; i<9; i++){
> > >		conv += rgba[i] * mask[i];	
> > >	}
> > >	conv.a = 1.0;
> > >
> > >  	gl_FragColor = conv;
> > >}
> > > ```


## Edge kernel Video

La única diferencia real entre los dos filtros es el kernel utilizado, de resto el código es igual para ambos algoritmos

> :Tabs
> > :Tab title= **Filtered**
> > 
> > > :P5 sketch=/docs/sketches/edge-video-hardware.js, width=720, height=560
>
> > :Tab title= **Código p5**
> > >
> > >```js
> > >let _shader;
> > >let video;
> > >let width = 320;
> > >let height = 240;
> > >let kernel = [ 0.0, -1.0, 0.0, -1.0, 5.0, -1.0, 0.0, -1.0, 0.0 ]; 
> > >
> > >function preload(){
> > >    _shader = loadShader('/vc/docs/sketches/texture.vert','/vc/docs/sketches/kernel-texture.frag');
> > >      video = createVideo('/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm'); 
> > >}
> > >
> > >
> > >function setup() {
> > >    createCanvas(width, height, WEBGL);
> > >    video.loop();
> > >    video.volume(0);
> > >    noStroke();
> > >    shader(_shader);
> > >    textureMode(NORMAL);
> > >    shader(_shader);
> > >    _shader.setUniform('texture', video);
> > >    _shader.setUniform('texOff', [1/video.width, 1/video.height]);
> > >}
> > >
> > >function draw() {
> > >    background(255);
> > >    beginShape();
> > >    vertex(-width / 2, -height / 2, 0, 0);
> > >    vertex(width / 2, -height / 2, 1, 0);
> > >    vertex(width / 2, height / 2, 1, 1);
> > >    vertex(-width / 2, height / 2, 0, 1);
> > >    endShape(CLOSE);
> > >    _shader.setUniform("mask", kernel);
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
> > >// interpolated texcoord (same name as in vertex shader)
> > >varying vec2 vTexCoord;
> > >
> > >uniform vec2 texOff;
> > >uniform float mask[9];
> > >
> > >vec2 tx[9];
> > >
> > >
> > >void main() {
> > >	//Get Coordinates for every neighbor pixel
> > >	tx[0] = vTexCoord.st + vec2(-texOff.s, -texOff.t); 
> > >	tx[1] = vTexCoord.st + vec2(0.0, -texOff.t); 
> > >	tx[2] = vTexCoord.st + vec2(texOff.s, -texOff.t); 
> > >	tx[3] = vTexCoord.st + vec2(-texOff.s, 0.0); 
> > >	tx[4] = vTexCoord.st + vec2(0.0, 0.0); 
> > >	tx[5] = vTexCoord.st + vec2(texOff.s, 0.0); 
> > >	tx[6] = vTexCoord.st + vec2(-texOff.s, texOff.t); 
> > >	tx[7] = vTexCoord.st + vec2(0.0, texOff.t); 
> > >	tx[8] = vTexCoord.st + vec2(texOff.s, texOff.t);
> > >
> > >	//Get RGBA color from the image in each pixel
> > >	vec4 rgba[9];
> > >	for(int i=0; i<9; i++){
> > >		rgba[i] = texture2D(texture, tx[i]);	
> > >	}
> > >
> > >	//Apply Convolutional Operation to the pixel
> > >	vec4 conv;
> > >	for(int i=0; i<9; i++){
> > >		conv += rgba[i] * mask[i];	
> > >	}
> > >	conv.a = 1.0;
> > >
> > >  	gl_FragColor = conv;
> > >}
> > > ```


> :ToCPrevNext
