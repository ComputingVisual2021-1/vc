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

uniform float res;

varying vec4 vVertexColor;
varying vec2 vTexCoord;

void main() {

    vec2 gCoord = vTexCoord * re;

    vec2 imgCoord = floor(gCoord);

    gCoord = gCoord - imgCoord;

    imgCoord = imgCoord * vec2(1.0) / vec2(res);

    vec4 color = texture2D(img, imgCoord);

    float luminosity = color.r*0.299 + color.g*0.587 + color.b*0.114;

    if (luminosity < 0.1 && luminosity >= 0.0){
        gl_FragColor = texture2D(img1, gCoord);
    } else if (luminosity < 0.2 && luminosity >= 0.1){
        gl_FragColor = texture2D(img2, gCoord);
    } else if (luminosity < 0.3 && luminosity >= 0.2){
        gl_FragColor = texture2D(img3, gCoord);
    } else if (luminosity < 0.4 && luminosity >= 0.3){
        gl_FragColor = texture2D(img4, gCoord);
    } else if (luminosity < 0.5 && luminosity >= 0.4){
        gl_FragColor = texture2D(img5, gCoord);
    } else if (luminosity < 0.6 && luminosity >= 0.5){
        gl_FragColor = texture2D(img6, gCoord);
    } else if(luminosity < 0.7 && luminosity >= 0.6){
        gl_FragColor = texture2D(img7, gCoord);
    } else if(luminosity < 0.8 && luminosity >= 0.7){
        gl_FragColor = texture2D(img8, gCoord);
    } else if(luminosity < 0.9 && luminosity >= 0.8){
        gl_FragColor = texture2D(img9, gCoord);
    } else if(luminosity < 1.0 && luminosity >= 0.9){
        gl_FragColor = texture2D(img10, gCoord); 
    }
}