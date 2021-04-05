# CAMILO ANDRES CARRANZA

> :P5 sketch=/docs/sketches/camilo-carranza.js, width=250, height=250

## Bio
Estudiante de Ingeniería de Sistemas y Computación de la Universidad Nacional de Colombia.  Me gusta el futbol y los videojuegos. me considero  una persona muy calmada y tambien alegre. Con respecto a mi carrera siempre me ha llamado la atención el desarrollo de software y considero que esta materia, en particular, me puede enseñar nuevos conceptos que puedo aplicar en los nuevos trabajos personales o laborales que pueda emprender. 

## Interests

Desarrollo de software (en particular web), desarrollo de videojuegos y machine learning

## Contributions

Actualmente no tengo contribuciones.

## Hobbies

Futbol, Videojuegos, Viajar ...

### Sine Wave illusion

<a href="https://ibb.co/ZmJMzjc"><img src="https://i.ibb.co/pyPLj74/waves.gif" alt="waves" border="0"></a>

```md
int espacio_x = 20;
int w;           

float theta = 0.0;
float amplitud = 75.0;
float periodo = 500.0;
float dx;
float[] valores_y;

void setup() {
  size(640, 360);
  w = width+16;
  dx = (TWO_PI / periodo) * espacio_x;
  valores_y = new float[w/espacio_x];
}

void draw() {
  background(0);
  calcWave();
  renderWave();
}

void calcWave() {
  theta += 0.02;
  float x = theta;
  for (int i = 0; i < valores_y.length; i++) {
    valores_y[i] = sin(x)*amplitud;
    x+=dx;
  }
}

void renderWave() {
  noStroke();
  fill(255);
  for (int x = 0; x < valores_y.length; x++) {
    ellipse(x*espacio_x, height/2+valores_y[x], 16, 16);
  }
}

```
### Bibliografía
[Wave illusion](https://processing.org/examples/sinewave.html) [1]

> :ToCPrevNext
