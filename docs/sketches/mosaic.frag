//enviamos las imagenes
uniform sampler2D aux1;
uniform sampler2D aux2;
uniform sampler2D aux3;
uniform sampler2D aux4;
uniform sampler2D aux5;
uniform sampler2D aux6;
uniform sampler2D aux7;
uniform sampler2D aux8;

precision mediump float;

uniform sampler2D imagen;

uniform float resolution;

varying vec4 vVertexColor;
varying vec2 vTexCoord;

void main() {

    vec2 realCoord = vTexCoord * resolution;

    vec2 imageCoord = floor(realCoord);

    realCoord  = realCoord  - imageCoord;

    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);

    vec4 color = texture2D(imagen, imageCoord);

    float brillo = (0.299*pixelColor.r + 0.587*pixelColor.g + 0.114*pixelColor.b)*255.0;

    if(brillo < 28.3 && brillo >= 0.0){
         gl_FragColor = texture2D(aux1, realCoord );

    }else if(brillo < 56.6 && brillo >= 28.3){
         gl_FragColor = texture2D(aux2, realCoord );
        
    }else if(brillo < 84.9 && brillo >= 56.6){
         gl_FragColor = texture2D(aux3, realCoord);
        
    }else if(brillo < 113.23 && brillo >= 84.9){
         gl_FragColor = texture2D(aux4, realCoord);
        
    }else if(brillo < 141.6 && brillo >= 113.23){
         gl_FragColor = texture2D(aux5, realCoord);
        
    }else if(brillo < 169.9 && brillo >= 141.6){
         gl_FragColor = texture2D(aux6, realCoord);
        
    }else if(brillo < 198.3 && brillo >= 169.9{
         gl_FragColor = texture2D(aux7, realCoord);
        
    }else if(brillo < 226.2 && brillo >= 198.3){
         gl_FragColor = texture2D(aux8, realCoord);
        
    }else{
         gl_FragColor = texture2D(aux9, realCoord);
    }

}