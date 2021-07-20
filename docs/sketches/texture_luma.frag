  
// texture.frag 
precision mediump float;

uniform sampler2D texture;

// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;

vec4 averageTextureColor;
float luminence;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;

void main() {
  
  averageTextureColor = texture2D(texture, vTexCoord);
  luminence = (averageTextureColor.r * 0.2126 + averageTextureColor.g * 0.7152 + averageTextureColor.b * 0.0722);
  averageTextureColor.r = luminence;
  averageTextureColor.g = luminence;
  averageTextureColor.b = luminence;
  averageTextureColor.a = 1.0;

  gl_FragColor = averageTextureColor * vVertexColor;  
}