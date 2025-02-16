

# Termometro digital Arduino-Node

La aplicacion muestra un termometro digital,
calendario y reloj digital. El termometro utiliza el sensor de temperatura LM-35.<br> 

La comunicación de datos del termometro es recogida desde el puerto serial(USB) y que es enviada dede arduino Uno.<br>

La desconexión del puerto USB ó la no conexión del arduino bloqueará la aplicación y tendrá que reestablecer de nuevo la aplicación.<br>

La aplicación es lanzada desde el terminal con el siguiente comando:<br>
<em><b>"npm start"</b></em> (ver el archivo package.json).<br><br>


La pantalla de inicio o de entrada, es dependiente de la temperatura y está dividida en cuatro frajas de temperatura que son las siguientes:<br><br>

- temperatura < 15 grados Celsius
- temperatura < 25 grados Celsius y > de 15 grados Celsius.
- termeratura < 30 grados Celsius y > de 25 grados Celsius.
- temperatura > 30 grados Celsius.<br><br>

## vista pantalla < 15 grados Celsius:<br>

![alt text](public/imagenes/pantalla-frio.PNG)

## vista pantalla temperatura < 25 grados Celsius y > de 15 grados Celsius.<br>

![alt text](public/imagenes/pantalla-bueno.PNG)

## vista pantalla termeratura < 30 grados Celsius y > de 25 grados Celsius.<br>

![alt text](public/imagenes/pantalla-calor.PNG)
 
## vista pantalla temperatura > 30 grados Celsius.<br>

![alt text](public/imagenes/pantalla-sudor.PNG)

## vista pantalla desconexión USB arduino<br>

![alt text](public/imagenes/error-puerto.PNG)

despues de ver esta pantalla tendra que reiniciar la aplicacion de nuevo.