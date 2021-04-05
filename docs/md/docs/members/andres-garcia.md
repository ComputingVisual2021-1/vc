# ALVARO ANDRES GARCIA PERDOMO

> :P5 sketch=/docs/sketches/andres-garcia.js, width=250, height=250

## Bio

Nací en Bogotá en 1998, soy estudiante de Ingeniería de Sistemas y Computación desde el año 2015 en la Universidad Nacional de Colombia. Me gusta decir que la ingeniería es mi profesión y la música mi pasión, pero no de una manera despectiva hacia la ingeniería, si no como disciplinas que disfruto, pero que uso con distintos fines, la ingeniería como medio de subsistencia y la música como escape y relajación. Además me considero un devorador de conocimiento, me gusta tener algo de dominio en cada tema que llame mi atención aunque esto a veces dificulta que me concentre en una sola cosa.

Por el lado de la ingeniería me interesa el desarrollo de software principalmente, me considero un aprendedor visual, por esa misma razón me gusta trabajar sobre cosas visuales y tangibles al menos para los ojos, por lo tanto mi area de interés es el front-end y la interacción del usuario con las aplicaciones, el aspecto psicológico del proceso tambien me cautiva.

Por el lado de la música me gusta cantar y tocar el piano, llevo poco tiempo aprendiéndolo a tocar, y le dedico menos horas de las que me gustaría pero lo disfruto mucho.

Como otras aficiones me gusta jugar videojuegos, el voleibol, el ciclismo y recientemente desperté interés en el ajedrez.

## Interests

Desarrollo de software, UX, música, psicología, historia.

## Contributions

Actualmente no tengo contribuciones.

## Hobbies

Videojuegos, voleibol, ciclismo, ajedrez.

### The Cafe Wall illusion

La ilusión de la Pared del Café (vista en los azulejos de un café local) es una Figura de tablero de ajedrez de Münsterberg, pero con líneas horizontales paralelas que pueden tener cualquier luminancia que separe las filas de cuadrados desplazados. Estas líneas de 'concreto' presentan una marcada distorsión en cuña que se ve especialmente afectada por: el contraste de los cuadrados ('baldosas'; el ancho de las líneas de 'conctreo', y su luminancia que no debe ser significativamente mayor que la de los cuadrados claros ni menor que el de los cuadrados oscuros para que se produzca la distorsión.

> :P5 sketch=/docs/sketches/optical-ilusion-ag.js, width=500, height=500

```md
> var ROW_NUM = 15;
var rectSize = 500 / ROW_NUM;

function setup() {
  createCanvas(500, 500);
  strokeWeight(4);
  stroke(127);
}

function drawTileRow() {
  var negative = true;
  for (let x = -rectSize; x < width + rectSize; x += rectSize) {
    rect(x, 0, rectSize, rectSize);
    fill(negative ? 255 : 0);
    negative = !negative;
  }
}
function draw() {
  var steps = 4;
  for (let row = 0; row < 1 + 500/rectSize; row++) {
    drawTileRow();
    var step = rectSize / steps;
    if ((row / 2) % 2 == 0) {
      step = -step;
    }
    translate(step, rectSize);
  }
}

```

### Bibliografía

[Border locking and the Café Wall illusion](http://www.richardgregory.org/papers/cafe_wall/cafe-wall.pdf) [1]

> :ToCPrevNext
