# Convert Image to photo-mosaic

Adapted from [here](https://github.com/ITPNYU/Obamathon/blob/master/examples/Processing/ObamaMosaic/ObamaMosaic.pde).

<img src="https://i.ibb.co/hCXGrb6/perro.png" alt="perro" style="width: 380px;" />
<img src="https://i.ibb.co/kXx1B18/perro-mosaic.png" alt="perro_mosaic" style="width: 380px;"/> 

```md
>PImage imagen;
>PImage menor; //guarda el tamaño de cada imagen que compone el mosaico
>PImage imagenes[]; //array con todas las imagenres
>PImage brilloImagenes[]; //guarda el brillo de cada imagen
>float brillo[]; //intencidad de brillo
>
>int escala=4; //la escala de los mosaicos
>int w,h;
>
>void setup() {
>  size(768, 961);
>  imagen = loadImage("./foto/perro.jpg");
>  String path=sketchPath()+"/assets";
>  File[] archivos=listFiles(path);
>  
>  imagenes=new PImage[archivos.length];
>  brillo=new float[imagenes.length];
>  brilloImagenes=new PImage[256];
>  
>  for(int i=0; i<imagenes.length;i++){
>    String nombreArchivo=archivos[i].toString();
>    imagenes[i]=loadImage(nombreArchivo);
>    imagenes[i].loadPixels();
>    float avg=0;
>    for(int j=0;j < imagenes[i].pixels.length;j++){
>      float b=brightness(imagenes[i].pixels[j]);
>      avg+=b;
>    }
>    avg /= imagenes[i].pixels.length;
>    brillo[i]=avg;
>  }
>
>  for(int i=0; i<brilloImagenes.length;i++){
>    float r=256;
>    for(int j=0; j<brillo.length;j++){
>      float distancia=abs(i-brillo[j]);
>      if(distancia <r){
>        r=distancia;
>        brilloImagenes[i]=imagenes[j];
>      }
>    }
>  }
>  
>  w=imagen.width/escala;
>  h=imagen.height/escala;
>  menor=createImage(w,h,RGB);
>  menor.copy(imagen,0,0,imagen.width,imagen.height,0,0,w,h);
>  
>}
>
>void draw(){
>  menor.loadPixels();
>  for(int i=0;i<w;i++){
>    for(int j=0;j<h;j++){
>      int index=i+j*w; //busca cada pixel de la imagen
>      color c=menor.pixels[index];
>      //fill(brightness(c));
>      //noStroke();
>      //rect(i*escala,j*escala,escala,escala);
>      int imgIndex=int(brightness(c));
>      image(brilloImagenes[imgIndex],i*escala,j*escala,i,j);
>    }
>  }
>  noLoop();
>}
```

> :ToCPrevNext