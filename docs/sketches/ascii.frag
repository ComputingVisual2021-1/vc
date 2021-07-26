precision highp float;
uniform sampler2D imagen;

uniform sampler2D aux1;
uniform sampler2D aux2;
uniform sampler2D aux3;
uniform sampler2D aux4;
uniform sampler2D aux5;
uniform sampler2D aux6;
uniform sampler2D aux7;
uniform sampler2D aux8;


uniform float resolution;

varying vec4 vVertexColor;
varying vec2 vTexCoord;

void main() {

    vec2 realCoord = vTexCoord * resolution;

    vec2 imageCoord = floor(realCoord);

    realCoord  = realCoord  - imageCoord;

    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);

    vec4 color = texture2D(imagen, imageCoord);

    float iluminacion = color.r*0.299 + color.g*0.587 + color.b*0.114;

    if(iluminacion < 0.125 && iluminacion >= 0.0){
         gl_FragColor = texture2D(aux1, realCoord );

    }else if(iluminacion < 0.25 && iluminacion >= 0.125){
         gl_FragColor = texture2D(aux2, realCoord );
        
    }else if(iluminacion  < 0.375 && iluminacion >= 0.25){
         gl_FragColor = texture2D(aux3, realCoord);
        
    }else if(iluminacion < 0.5 && iluminacion >= 0.375){
         gl_FragColor = texture2D(aux4, realCoord);
        
    }else if(iluminacion < 0.625 && iluminacion >= 0.5){
         gl_FragColor = texture2D(aux5, realCoord);
        
    }else if(iluminacion < 0.75 && iluminacion >= 0.625){
         gl_FragColor = texture2D(aux6, realCoord);
        
    }else if(iluminacion < 0.875 && iluminacion >= 0.75){
         gl_FragColor = texture2D(aux7, realCoord);
    }    
    else{
         gl_FragColor = texture2D(aux8, realCoord);
    }
}