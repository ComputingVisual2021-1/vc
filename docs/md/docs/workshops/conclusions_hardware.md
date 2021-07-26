# Conclusion Image and video processing using Hardware

P5.js es una librería de gran uso para el procesamiento y ceración de imagenes, es muy útil, intuitivo y fácil de utilizar. Gracias a esta librería se cargaron las diferentes imágenes y videos que se utilizaron a lo largo de este taller. en este caso se utilizó para realizar las transofrmaciones usando el hardware.

# Gray Scale
## Convert a image or video to gray scale using average
Convertir una imagen a escala de grises utilizando el promedio de los valores RGB, es una solución rápida para el  problema  y análisis de escala de grises de una imagen, sin embargo, se nota que la imagen no queda de la misma calidad y pareciera que esta pierde su resolución o enfoque, como se se ve con menos calidad. Además se noto el cambio en el performance en este taller usando el hardware, es más rápido el procesamiento. Lo mismo para el video.

## Convert a image or video to gray scale using Luminance
Convertir una imagen a escala de grises utilizando la formula LUMA es una solución rápida y de mejor calidad para el problema y análisis de escala de grises de una imagen que la solución por promedio de RGB. Además se noto el cambio en el performance en este taller usando el hardware, es más rápido el procesamiento. lo mismo para el video.

## Kernels on video/image
Usar hardware para aplicar máscaras de convolución es más eficiente que en software.

## PhotoMosaic
Usar hardware para aplicar convertir una imagen en un foto mosáico es más eficiente que en software, en el anterior taller nos vimos en la necesidad de realizar la conversión de forma offline sin subir el resultado, pero en esta ocasión no hubo problemas para ejecutarlo.

## AsciiArt
Así mismo, el ascii art, si bien no era tan pesado, al tener el mismo algoritmo que el fotomosaico, es bastante eficiente y nos permite cambiar la resolución del algoritmo en tiempo real de forma bastante rápida



> :ToCPrevNext  