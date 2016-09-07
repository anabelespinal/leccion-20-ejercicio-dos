***

#  EJERCICIO DOS-LECCIÓN 20:  
###   Tenemos el siguiente codigo:



####  Modificar el sprit para que muestre el resultado correcto el cual seria:

 #####   JS developers love its closures. 

![Sin titulo](http://i67.tinypic.com/xcsz93.jpg)

+ Para este ejercico se comete un error similar al ejercicio anterior. Se nombra una variable         	"feature" con un valor de 'closures'. de scope global.
+ Dentro de la function anonima y autoejecutable, se da una condición que pide un typeof (cuando       llamas a la palbra reservada 'typeof', este te devolvera el tipo de dato que es el valor de la 		variable) de feature y pide que sea igual a 'undefined'.
+ Pero dentro de esta condicional se crea una variable llamada "var feature = ' callbacks' ", y se   	 le llama con la consola y se pide que muestre un mensaje si la condicion se cumple	  			         (console.log('JS coders love its ' + feature )) y si no se cumple (console.log('JS developers love   its ' + feature ).
+ En este caso la condicion se cumplira, ya que feature tiene como valor 'undefined', este features 	es el que esta en scope local, dentro de la function anonima.
+ Es por eso quee mostara el mensaje : JS coders love its callbacks. El cual no es el mensaje que     debe mostrar.

***

#### Ahora debemos modificar el codigo para mostrar el resultado correcto:

###### Este seria el codigo correcto:

```javascript

(function (){
    var feature = "closures";
    if( typeof feature === "undefined"){
        var feature = "callbacks";
        console.log("JS coders love it's " + feature);
    } else {
        console.log("JS developers love it's " + feature);
    }
})();

```

+ Se cambio de posisción la variable feature (ahora está nombrada dentro de la function anonima) 		   para que en el momento que se dice typeof este sepa que se trata de la variable dentro de la         function y no la de la condicion.
+ Al hacer esto la condicion será falsa ya que feauture tiene como tipo de dato un string             "callbacks".

***
