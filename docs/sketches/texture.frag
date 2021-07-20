  
// texture.frag 
precision mediump float;

uniform sampler2D texture;

// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;

vec4 averageTextureColor;
float average;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;

void main() {
  
  averageTextureColor = texture2D(texture, vTexCoord);
  average = (averageTextureColor.r + averageTextureColor.g + averageTextureColor.b)/3.0;
  averageTextureColor.r = average;
  averageTextureColor.g = average;
  averageTextureColor.b = average;
  averageTextureColor.a = 1.0;

  gl_FragColor = averageTextureColor * vVertexColor;  
}