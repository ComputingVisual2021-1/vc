precision mediump float;

uniform sampler2D texture;

uniform sampler2D alpha0;
uniform sampler2D alpha1;
uniform sampler2D alpha2;
uniform sampler2D alpha3;
uniform sampler2D alpha4;
uniform sampler2D alpha5;
uniform sampler2D alpha6;

uniform float resolution;

// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;

void main() {

    vec2 symbolCoord = vTexCoord * resolution;

    vec2 imageCoord = floor(symbolCoord);

    symbolCoord = symbolCoord - imageCoord;

    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);

    // obtener nivel de gris
    vec4 pixelColor = texture2D(texture, imageCoord);

    float mean = (0.299*pixelColor.r + 0.587*pixelColor.g + 0.114*pixelColor.b)*255.0;


    if (mean < 68.0){
        gl_FragColor = texture2D(alpha0, symbolCoord);
    } else if (mean < 124.3){
        gl_FragColor = texture2D(alpha1, symbolCoord);
    } else if (mean < 139.1){
        gl_FragColor = texture2D(alpha2, symbolCoord);
    } else if (mean < 159.5){
        gl_FragColor = texture2D(alpha3, symbolCoord);
    } else if (mean < 172.3){
        gl_FragColor = texture2D(alpha4, symbolCoord);
    } else if (mean < 197.5){
        gl_FragColor = texture2D(alpha5, symbolCoord);
    } else {
        gl_FragColor = texture2D(alpha6, symbolCoord);
    }

}