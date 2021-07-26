
// images are sent by the sketch
uniform sampler2D img0;
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
uniform sampler2D img11;
uniform sampler2D img12;
uniform sampler2D img13;
uniform sampler2D img14;

precision mediump float;

// img (image or video) is sent by the sketch
uniform sampler2D img;
// om is sent by the sketch
uniform sampler2D om;

// toggles om display
uniform bool om_on;
// target horizontal & vertical resolution
uniform float resolution;

// interpolated color (same name and type as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;

void main() {
  // remap omCoord to [0.0, resolution] ∈ R
  vec2 omCoord = vTexCoord * resolution;
  // remap texCoord to [0.0, resolution] ∈ Z
  vec2 texCoord = floor(omCoord);
  // remap omCoord to [0.0, 1.0] ∈ R
  omCoord = omCoord - texCoord;
  // remap texCoord to [0.0, 1.0] ∈ R
  texCoord = texCoord * vec2(1.0) / vec2(resolution);
  // get vec4 image texel (may be used as color hash index by some apps)
  vec4 imgTexel = texture2D(img, texCoord);
  
  //Calcular luma del texel
  float luma = imgTexel.r *0.299 + imgTexel.g * 0.587 +  imgTexel.b*0.114;
  //Si está activada la casilla de Mosaico 
  if(om_on) {
    
    vec4 omTexel;
   //Según el valor del luma calculado, se renderiza la imagen correspondiente
    if(luma < 0.066 && luma >= 0.0){
         gl_FragColor = texture2D(img0, omCoord);

    }else if(luma < 0.132 && luma >= 0.066){
         gl_FragColor = texture2D(img1, omCoord);
        
    }else if(luma < 0.198 && luma >= 0.132){
         gl_FragColor = texture2D(img2, omCoord);
        
    }else if(luma < 0.264 && luma >= 0.198){
         gl_FragColor = texture2D(img3, omCoord);
        
    }else if(luma < 0.33 && luma >= 0.264){
         gl_FragColor = texture2D(img4, omCoord);
        
    }else if(luma < 0.396 && luma >= 0.33){
         gl_FragColor = texture2D(img5, omCoord);
        
    }else if(luma < 0.462 && luma >= 0.396){
         gl_FragColor = texture2D(img6, omCoord);
        
    }else if(luma < 0.528 && luma >= 0.462){
         gl_FragColor = texture2D(img7, omCoord);
        
    }else if(luma < 0.594 && luma >= 0.528){
         gl_FragColor = texture2D(img8, omCoord);
        
    }else if(luma < 0.66 && luma >= 0.594){
         gl_FragColor = texture2D(img9, omCoord);
        
    }else if(luma < 0.726 && luma >= 0.66){
         gl_FragColor = texture2D(img10, omCoord);
        
    }else if(luma < 0.792 && luma >= 0.726){
         gl_FragColor = texture2D(img11, omCoord);
         
    }else if(luma < 0.858 && luma >= 0.792){
         gl_FragColor = texture2D(img11, omCoord);
         
    }else if(luma < 0.924 && luma >= 0.858){
         gl_FragColor = texture2D(img12, omCoord); 
      
    }else if(luma <= 1.0 && luma >= 0.924){
         gl_FragColor = texture2D(img12, omCoord);
        
    }else{
    gl_FragColor = texture2D(om, omCoord);
    }
     
  }else {
  //Si no esta acitava la casilla de mosaico, se muestra la imagen original
    gl_FragColor = imgTexel;
  }
}