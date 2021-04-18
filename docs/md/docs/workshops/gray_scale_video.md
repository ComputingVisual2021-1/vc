# Gray Scale
## Convert video to gray scale using average

Se consiguieron las muestras de video en java, sin embargo, no se logró obtener una versión en p5.js para esta entrega.

El código en java es el siguiente:
```md
import processing.video.*;
Movie myMovie;
PImage img;
float oldR, oldG, oldB, newR, newG, newB, newColor;
void setup() {
  myMovie = new Movie(this, "example.mp4");
  size(1280,720);
  myMovie.loop();
}
void draw(){
  if (myMovie.available()) {    
    myMovie.read();  
  }
 
  myMovie.loadPixels();
  int imgSize = myMovie.width * myMovie.height;
  for (int i = 0; i < imgSize; i++){
    color oldColor = myMovie.pixels[i];
    oldR = red(oldColor);
    oldG = green(oldColor);
    oldB = blue(oldColor);
    newColor = oldR/3 +oldG/3 +oldB/3;
    myMovie.pixels[i] = color(newColor, newColor, newColor);
  }
  image(myMovie, 0, 0, width, height);
}
```

## Convert video to gray scale using Liminance
Nuevamente no sé logró una versión de p5.js para este ejercicio, pero se adjunta la versión funcional en java.

```md
import processing.video.*;
Movie myMovie;
float oldR, oldG, oldB, newR, newG, newB, gray;
void setup() {
  myMovie = new Movie(this, "example.mp4");
  size(1280,720);
  myMovie.loop();
}
void draw(){
  if (myMovie.available()) {    
    myMovie.read();  
  }
 
  myMovie.loadPixels();
  int imgSize = myMovie.width * myMovie.height;
  for (int i = 0; i < imgSize; i++){
    color oldColor = myMovie.pixels[i];
    oldR = red(oldColor);
    oldG = green(oldColor);
    oldB = blue(oldColor);
    gray = oldR *0.299 + oldG*0.587 + oldB*0.114;
    myMovie.pixels[i] = color(gray,gray,gray);
  }
  image(myMovie, 0, 0, width, height);
}
```
> :ToCPrevNext
