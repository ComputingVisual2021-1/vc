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

    float mean = pixelColor.r*0.299 + pixelColor.g*0.587 + pixelColor.b*0.114;

    if (mean < 0.1 && mean >= 0.0){
        gl_FragColor = texture2D(img1, symbolCoord);
    } else if (mean < 0.2 && mean >= 0.1){
        gl_FragColor = texture2D(img2, symbolCoord);
    } else if (mean < 0.3 && mean >= 0.2){
        gl_FragColor = texture2D(img3, symbolCoord);
    } else if (mean < 0.4 && mean >= 0.3){
        gl_FragColor = texture2D(img4, symbolCoord);
    } else if (mean < 0.5 && mean >= 0.4){
        gl_FragColor = texture2D(img5, symbolCoord);
    } else if (mean < 0.6 && mean >= 0.5){
        gl_FragColor = texture2D(img6, symbolCoord);
    } else if(mean < 0.7 && mean >= 0.6){
        gl_FragColor = texture2D(img7, symbolCoord);
    } else if(mean < 0.8 && mean >= 0.7){
        gl_FragColor = texture2D(img8, symbolCoord);
    } else if(mean < 0.9 && mean >= 0.8){
        gl_FragColor = texture2D(img9, symbolCoord);
    } else if(mean < 1.0 && mean >= 0.9){
        gl_FragColor = texture2D(img10, symbolCoord); 
    }
}