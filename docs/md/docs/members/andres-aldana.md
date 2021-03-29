# ANDRÉS GIOVANNY ALDANA WILCHES

> :P5 sketch=/docs/sketches/andres-aldana.js, width=250, height=250


## Bio
Estudiante de la Facultad de Ingeniería de la Universidad Nacional de Colombia. Me gusta el Ciclismo, soy un ciclista amateur, pero que le gusta la competencia y me considero un buen escalador, o como se dice hoy en día, un buen escarabajo. He participado en competencias para ciclistas amateur y mi mejor presentación fue top 30 en el Gran Fondo de Boyacá Mundial. Como equipo quedamos de 3ros. Ruedo con el WorkApps MCT Team. Puedes contactarme al correo agaldanaw@unal.edu.co.

## Interests
Desarrollo de software, arquitectura de software y machine learning.

## Contributions

Actualmente no tengo contribuciones.

## Hobbies
Me gusta el ciclismo, leer, cocinar, tocar guitarra, caminar sin rumbo fijo, conocer nuevos lugares, viajar...

## Ilusión óptica
Como dice el artículo [1] "...Aristóteles notó que si mirabas una cascada y luego enfocabas tu vista en las rocas, estáticas, las rocas parecían moverse en el sentido opuesto al flujo del agua. Este efecto, hoy conocido como “secuela de movimiento” o ilusión de la cascada, hizo señalar a Aristóteles que “podemos confiar en nuestros sentidos, pero ellos pueden ser engañados con facilidad”.". 

Podemos crear imágenes estáticas, pero que aparentemente están en movimiento. O, por otro lado, "...nuestro sentido del tamaño y de la perspectiva puede verse confundido por el contexto, porque nuestra mente está preparada para relacionar ciertos hechos visuales con conceptos de distancia y profundidad; por ejemplo, las líneas diagonales nos hacen crear la ilusión de perspectiva porque así es como nuestro cerebro se orienta en el espacio tridimensional...".

### Scintillating Grid Illusion 

Una ilusión de cuadricula es una cuadrícula que engaña la percepción de lo que ve una persona. Hay dos tipos, son la ilusión de cuadrícula de Hermann y la ilusión de cuadrícula centelleante. La priemra es una ilusión óptica, descubierta por E. y B. Lingelbach y M. Schrauf en 1994. A menudo se considera una variación de la ilusión de rejilla de Hermann, pero posee diferentes propiedades. Se construye superponiendo discos blancos en las intersecciones. de barras ortogonales grises sobre fondo negro. Los puntos oscuros parecen aparecer y desaparecer rápidamente en intersecciones aleatorias, de ahí la etiqueta "centelleante". Cuando una persona mantiene sus ojos directamente en una única intersección, el punto oscuro no aparece. Los puntos oscuros desaparecen si uno está demasiado cerca o demasiado lejos de la imagen.

> :P5 sketch=/docs/sketches/optical-ilusion-aa.js, width=720, height=560

```md
> function setup() {
>    createCanvas(720, 560);
>  }
> 
>  function draw() {
>    background(0);
>  
>    for (let i = 50; i < height; i += 50) {
>      for (let j = 50; j < width; j += 50) { 
>        stroke(150)
>        strokeWeight(10)
>        line(0, i, width, i)
>        line(j, 0, j, height)
>      }
>   }
>  
>   
>    for (let i = 50; i < width; i += 50) {
>      for (let j = 50; j < height; j += 50) {
>        noStroke()
>        fill(255)
>        ellipse(i, j, 18, 18)
>      }
>    }
>  }
```

### Bibliografía
[Ilusiones ópticas](https://leioavision.com/ilusiones-opticas-magia-o-ciencia/) [1]
[Grid Illusion](https://psychology.wikia.org/wiki/Grid_illusion#:~:text=The%20Scintillating%20grid%20illusion%20is,the%20dot%20does%20not%20appear.) [2]

> :ToCPrevNext
