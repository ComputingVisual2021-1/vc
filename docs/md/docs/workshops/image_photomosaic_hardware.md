# Convert Image to photo-mosaic - Hardware

Un fotomosaico es una imagen (usualmente una fotografía) que ha sido dividida en secciones rectangulares (usualmente del mismo tamaño), tal como es compuesto un mosaico tradicional, con la característica de que cada elemento del mosaico es reemplazado por otra fotografía con colores promedios apropiados al elemento de la imagen original.

## Procedimiento

Bajo el concepto anterior, primero escogemos la imagen original que se utilizara como base:

> :P5 sketch=/docs/sketches/perro.js, width=250, height=400

Posteriormente esocogemos las imagenes que usaremos para construir el mosaico. para mayor exactitud toodas las imagenes fueron redimensiondas a una misma escala:

<img src="https://i.ibb.co/JCRb77w/items.jpg" alt="items" style="width: 700px;" />

El enfoque utilizado es calcular la luminocidad para cada pixel y asignarle de acuerdo a este; el valor mas cercano del arreglo de imagenes (que previamente fue organizado de acuerdo a su brillo)

> :Tabs
> > :Tab title= **Imagen**
> > 
> > > :P5 sketch=/docs/sketches/mosaic-hardware.js, width=750, height=900
>
> > :Tab title= **Código**
> > ``` js
function preload() {
    //Precargar imagen base y shaders
    image = loadImage('/vc/docs/sketches/main.jpg');
    mosaic = loadShader('/vc/docs/sketches/mosaic.vert', '/vc/docs/sketches/mosaic.frag');
    //Cargar imagenes de dataset para mosaico
    img1 = loadImage('/vc/docs/sketches/img1.jpg'); //nivel de brillo mas bajo
    img2 = loadImage('/vc/docs/sketches/img2.jpg');
    img3 = loadImage('/vc/docs/sketches/img3.jpg');
    img4 = loadImage('/vc/docs/sketches/img4.jpg');
    img5 = loadImage('/vc/docs/sketches/img5.jpg');
    img6 = loadImage('/vc/docs/sketches/img6.jpg');
    img7 = loadImage('/vc/docs/sketches/img7.jpg');
    img8 = loadImage('/vc/docs/sketches/img8.jpg');
    img9 = loadImage('/vc/docs/sketches/img9.jpg');
    img10 = loadImage('/vc/docs/sketches/img10.jpg'); //nivel de brillo mas alto 
}
> > ```
> > ``` js
void main() {
    vec2 gCoord = vTexCoord * res;
    vec2 imgCoord = floor(gCoord);
    gCoord = gCoord - imgCoord;
    imgCoord = imgCoord * vec2(1.0) / vec2(res);
    vec4 color = texture2D(img, imgCoord);
    float luminosity = color.r*0.299 + color.g*0.587 + color.b*0.114;
    ...
> > ```



> :ToCPrevNext