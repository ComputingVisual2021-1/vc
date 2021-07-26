precision mediump float;

uniform sampler2D img;

uniform sampler2D img1;
uniform sampler2D img2;
uniform sampler2D img3;
uniform sampler2D img4;
uniform sampler2D img5;
uniform sampler2D img6;
uniform sampler2D img7;
uniform sampler2D img8;
uniform sampler2D img9;
uniform sampler2D img10;

uniform float resolution;

varying vec4 vVertexColor;
varying vec2 vTexCoord;

void main() {

    vec2 symbolCoord = vTexCoord * resolution;

    vec2 imageCoord = floor(symbolCoord);

    symbolCoord = symbolCoord - imageCoord;

    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);

    vec4 pixelColor = texture2D(img, imageCoord);

    float mean = (pixelColor.r*0.299 + pixelColor.g*0.587 + pixelColor.b*0.114)*255.0;

    if (mean < 25.5){
        gl_FragColor = texture2D(img1, symbolCoord);
    } else if (mean < 51.0){
        gl_FragColor = texture2D(img2, symbolCoord);
    } else if (mean < 76.5){
        gl_FragColor = texture2D(img3, symbolCoord);
    } else if (mean < 102){
        gl_FragColor = texture2D(img4, symbolCoord);
    } else if (mean < 127.5){
        gl_FragColor = texture2D(img5, symbolCoord);
    } else if (mean < 153){
        gl_FragColor = texture2D(img6, symbolCoord);
    } else if(mean < 178.5){
        gl_FragColor = texture2D(img7, symbolCoord);
    } else if(mean < 204){
        gl_FragColor = texture2D(img8, symbolCoord);
    } else if(mean < 229.5){
        gl_FragColor = texture2D(img9, symbolCoord);
    } else {
        gl_FragColor = texture2D(img10, symbolCoord); 
    }
}