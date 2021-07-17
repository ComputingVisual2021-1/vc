# Rendering

# Problem Stament
Se debe realizar una indagación teórica de algún algoritmo de visibilidad o algún método de iluminación global.

Para la solución de este taller se realizó la indagación sobre el algoritmo Z-buffer.

## Z-buffer
Un buffer profundo, también conocido como Z-buffer, es un tipo de buffer de datos usado en computación gráfica para representar información de profundidad de objetos en el espacio 3D desde una perspectiva particular. Son una ayuda para renderizar una escena para garantizar que los polígonos correctos ocluyan (obstruir) correctamente otros polígonos.

> :P5 sketch=/docs/sketches/example-z-buffer.js, width=650, height=560

Fue inicialmente descrito por Wolfgang Straßer en su tesis de doctorado sobre algoritmos rápidos para renderizar objetos ocluídos.

### Explicación
Cuando un objeto es dibujado en un plano 3-d, la profundidad del pixel generado (en el eje z, coordenada z) se almacena en un bufer de datos (el z-buffer). Este búfer se suele distribuir como un array de 2 dimensiones (x,y) con un elemento por cada pixel de la pantalla. Si algún otro objeto de la escena se tiene que renderizar en el mismo pixl, la tarjeta gráfica compara las dos profudidades y elige el más cercano al observador. Esta profundidad elegida, es entonces salbada en el z-buffer, reemplazando a la antigua. Al final, el z-buffer permitirá a la tarjeta gráfica reproducir correctamente la percepción de la profundidad normal: los objetos cercanos ocultan a los más lekanos. Este efecto se denomina Z-culling.

La granuralidad de un z-buffer tiene una gran influencia en la calidad de la escena: un z-buffer de 16 bits puede producir un artefacto (llamado "z-fighting") cuando dos objetos están muy próximos. Un z-buffer de 24 bits o 32bits se comporta mucho mejor. Un z-buffer de 8 bits no se utiliza casi nunca ya que tiene muy poca precisión.

### Usos
Es una tecnología usada en casi todas las computadoras, portátiles y teléfonos móviles contemporáneos para realizar gráficos de computadora en 3d. El uso principal ahora es para videojuegos, que requieren un procesamiento rápido y preciso de escenas en 3d. El z-buffer se implementa en hardware dentro de las tarjetas gráficas de consumo. También, se utiliza implementado como software para producir efectos especiales generados por computadora para películas.
Además, los datos del búfer Z obtenidos de la representación de una superficie desde el punto de vista de una luz permiten la creación de sombras mediante la técnica de mapeo de sombras.

### Desarrollo
Incluso con una granularidad lo suficientemente pequeña, pueden surgir problemas de calidad cuando la precisión en los valores de distancia del búfer z no se distribuye uniformemente a lo largo de la distancia. Los valores más cercanos son mucho más precisos ( y por lo tant pueden mostrar mejor los objetos más cercanos) que los valores que están más lejos. Generalmente, esto es deseable, pero a veces hará que aparezcan artefactos a medida que los objetos se vuelven más distantes. Una variación del almacenamiento en búfer Z queda como resultado una precisión distribuida de manera más uniforme se denomina almacenamiento en búfer w.

Al comienzo de una nueva escena, el búfer z debe limpiarse a un valor definido, generalmente 1.0, porque este valor es el límite superior (en una escala de 0 a 1) de profundidad, lo que significa que no hay ningún objeto presente en este punto a través del punto de visualización.

En las tarjetas gráficas de PC más recientes (1999-2005), la administración del búfer z utiliza una parte significativa del ancho de banda de memoria disponible. Se han empleado varios métodos para reducir el costo de rendimiento del almacenamiento en búfer z, como la compresión sin pérdidas (los recursos informáticos para comprimir / descomprimir son más baratos que el ancho de banda) y el hardware ultrarrápido z-clear que hace obsoleto el "un cuadro positivo, un cuadro truco negativo "(omitir el borrado entre fotogramas por completo utilizando números con signo para comprobar inteligentemente las profundidades).

### Z-Culling
En el renderizado, z-culling es la eliminación temprana de píxeles basada en la profundidad, un método que proporciona un aumento en el rendimiento cuando el renderizado de superficies ocultas es costoso. Es una consecuencia directa del almacenamiento en búfer z, donde la profundidad de cada píxel candidato se compara con la profundidad de la geometría existente detrás de la cual podría estar oculto.

Cuando se usa un búfer z, un píxel se puede eliminar (descartar) tan pronto como se conozca su profundidad, lo que permite omitir todo el proceso de iluminación y texturizado de un píxel que de todos modos no sería visible. Además, los sombreadores de píxeles que consumen mucho tiempo generalmente no se ejecutarán para los píxeles seleccionados. Esto hace que z-culling sea un buen candidato de optimización en situaciones en las que la velocidad de relleno, la iluminación, la textura o los sombreadores de píxeles son los principales obstáculos.

Si bien el almacenamiento en búfer z permite desordenar la geometría, la clasificación de polígonos aumentando la profundidad (por lo tanto, utilizando un algoritmo de pintor inverso) permite que cada píxel de la pantalla se renderice menos veces. Esto puede aumentar el rendimiento en escenas con velocidad de relleno limitada con grandes cantidades de sobregiro, pero si no se combina con el almacenamiento en búfer z, sufre problemas graves como:

los polígonos pueden ocluirse entre sí en un ciclo (por ejemplo: el triángulo A ocluye B, B ocluye C, C ocluye A), y
no hay un punto "más cercano" canónico en un triángulo (por ejemplo: no importa si se clasifican los triángulos por su centroide o el punto más cercano o el punto más alejado, siempre se pueden encontrar dos triángulos A y B de manera que A esté "más cerca" pero en realidad B debe dibujarse primero).
Como tal, el algoritmo de un pintor inverso no se puede utilizar como una alternativa a la eliminación en Z (sin una reingeniería enérgica), excepto como una optimización para la eliminación en Z. Por ejemplo, una optimización podría ser mantener los polígonos ordenados según la ubicación x / y y la profundidad z para proporcionar límites, en un esfuerzo por determinar rápidamente si dos polígonos podrían tener una interacción de oclusión.

### Matemáticas
El rango de valores de profundidad en el espacio de la cámara que se va a renderizar a menudo se define entre un valor cercano y lejano de z.

Después de una transformación de perspectiva, el nuevo valor de z o z' se define mediante:

> :P5 sketch=/docs/sketches/zbs1.js, width=350, height=150

Después de una proyección ortográfica el nuevo valor de z o z' se define mediante:

> :P5 sketch=/docs/sketches/zbs2.js, width=350, height=150

donde z es el valor viejo de z en el espacio de la camara y algunas veces llamado w o w'.
Los valores resultantes de z' son normalizados entre -1 y 1, donde el plano cercano es -1 y el lejano es 1. Los valores fuera de este rango corresponden a puntos los cuales no estan en la perspectiva de vista y no deben ser renderizados.

### W-buffer
Para implementar un w-buffer, los valores antiguos de z en el espacio de la cámara, o w, se almacenan en el buffer, generalmente en formato de coma flotante. Sin embargo, estos valores no se pueden interpolar linealmente en el espacio de la cámara desde los vértices ya que normalmente deben invertirse, interpolarse e invertirse de nuevo. Los valores resultantes de w son los opuestos de z' que están equiespaciados entre near y far. Hay implementaciones del W-buffer que evitan la inversión.

Dependiendo de la aplicación se obtendrán mejores resultados con un z-buffer que con un w-buffer y viceversa.


### Algoritmo en pseudocódigo

```md
> // First of all, initialize the depth of each pixel.
> d(i, j) = infinite // Max length
> 
> // Initialize the color value for each pixel to the background color
> c(i, j) = background color
> 
> // For each polygon, do the following steps :
> for (each pixel in polygon's projection)
> {
>     // Find depth i.e, z of polygon
>     //   at (x, y) corresponding to pixel (i, j)   
>     if (z < d(i, j))
>     {
>         d(i, j) = z;
>         c(i, j) = color;
>     }
> }
```

## Conclusiones
Como se pudo ver el z-buffer es un algoritmo altamente usando en los videojuegos y esto ayuda a que se puedan visualizar d euna manera óptima.

## Trabajo futuro
Indagar más sobre este algoritmo y realizar su implementación.


### Bibliografía
[Z-buffering](https://en.wikipedia.org/wiki/Z-buffering) [1]



> :ToCPrevNext