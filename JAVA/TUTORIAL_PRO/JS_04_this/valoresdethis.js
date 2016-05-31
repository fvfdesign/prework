/*
	THIS es una palabra que apunta a un objeto.
	Y devolverá valores diferentes según las circunstancias.
*/

/*
	CASO 01: THIS DENTRO DE UNA FUNCION

Si no se usa "use strict" devuleve el objeto global (window), 
si se usa "use  strict" devuelve undefined (undifined xk no hay ningún objeto.

*/

(function test(){
	console.log(this)
})();


(function test(){
	"use strict";
	console.log(this)
})();


/* 
	CASO 02: THIS DENTRO DE UN MÉTODO.
	(Método es: una función dentro de un objeto)
	En este caso "this" se refiere AL OBJETO
*/

var persona = {
	nombre: "carmen",
	edad: 25,
	saludar: function(){
		return "Hola, me llamo" + this.nombre + "y tengo" + this.edad + "años.";
	}
};


/* 
	CASO 3: THIS DENTRO DE UN EVENT HANDLER.

	en este caso, "this" referencia al elemento HTML
	que disparó el evento.
*/

var boton = document.getElementById("boton"); //obtener un elemento por su id

// Ahora hay que añadir un "Event Listener":
/*Es un metodo que escucha los eventos y cuando el evento se ejecuta
se dispara un "Event Handler"(que es una función que se ejecuta al 
dispararse un evento)*/

boton.addEventListener("click",function() {
alert(this.textContent);
});
//function" será el "EVENT HANDLER"


/* 
CASO 4: THIS DENTRO DE UN CONSTRUCTOR.
Un "constructor" es una función que permite construir una 
especie de clase (especie de plantilla para otros objetos.

Un "constructor" es una función que define la estructura de un objeto
y a partir de la cual se crean otros objetos 
(se instancian, "instanciar significa: crear un objeto a partir de otro")
*/