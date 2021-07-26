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

    float iluminacion = 0.299*color.r + 0.587*color.g + 0.114*color.b;

    if(iluminacion < 0.111 && iluminacion >= 0.0){
         gl_FragColor = texture2D(aux1, realCoord );

    }else if(iluminacion < 0.222 && iluminacion >= 0.111){
         gl_FragColor = texture2D(aux2, realCoord );
        
    }else if(iluminacion  < 0.333 && iluminacion >= 0.222){
         gl_FragColor = texture2D(aux3, realCoord);
        
    }else if(iluminacion < 0.444 && iluminacion >= 0.333){
         gl_FragColor = texture2D(aux4, realCoord);
        
    }else if(iluminacion < 0.555 && iluminacion >= 0.444){
         gl_FragColor = texture2D(aux5, realCoord);
        
    }else if(iluminacion < 0.777 && iluminacion >= 0.666){
         gl_FragColor = texture2D(aux6, realCoord);
        
    }else if(iluminacion < 0.888 && iluminacion >= 0.777){
         gl_FragColor = texture2D(aux7, realCoord);
        
    }else if(iluminacion < 0.950 && iluminacion >= 0.888){
         gl_FragColor = texture2D(aux8, realCoord);
        
    }else{
         gl_FragColor = texture2D(aux9, realCoord);
    }

}