//OPCION 01 (Capturar Clicks)
	$('p').click(function(){
	$(this).css('color','red');
}) // "this" regresa el selector "p"

//OPCION 02 MEJOR Y MAS NUEVA: (Capturar Clicks)
		$('p').on('click',function(){

		}) //"on" permite pasar mas de un evento, 
			// hacer delegación de eventos

// Ejercicios:
//ejercicio 01: (Capturar Clicks)
	var $p = $('p');/*esto es cachear selectores (meter en cache) 
	para mejorar el rendimiento de la aplicación*/

	$('button').on('click',function(){
		$p.css('color','red');
	}) //se coloca lo que va a ocurrir al hacer click en el button

//ejercicio 02 (Capturar overs del mouse: mouseenter and mouseleave):
	var $p = $('p');
		$('button').on('mouseenter',function(){
			$p.css('color','red');
			})
			.on('mouseleave',function(){
				$p.css('color','initial');
			})


// //ejercicio 03 (MANIPULAR EL DOM):
// Se crea archivo .css, se determina la calse (ejem."alerta" donde decimos el tipo de color)
// En JQuery se asigna la calse de css (con método addClass nombrando la clase creada en css)
	
	//OPCION01
	var $p = $('p')
		$('button').on('click',function(){
			$p.addClass('alerta'); 
		}) //aqui no se quita el rojo del texto al dar click
	
	//OPCION02 (toggleClass)
//Se usa .toggleClass ( dice: que si tiene la clase se la quita y si no la tiene se le aplica)
	var $p = $('p')
		$('button').on('click',function(){
			$p.toggleClass('alerta');
		})

	// //OPCION03 (removeClass):
	// Para quitar una clase si en algún momento no 
	// la necesitamos. (Quita la clase que hayamos marcado en el docu html)

	var $p = $('p')
		$('button').on('click',function(){
			$p.removeClass('alerta');
		})


// OPCION 04 hide:(Ocultar elementos)

	var $p = $('p')
		$('button').on('click',function(){
			$p.hide();
		}) //Oculta el parrafo


// // OPCION 05 show:(Mostrar elementos)
	var $p = $('p')
		$('button').on('click',function(){
			$p.show();
}) //Muestra parrafo oculto (oculto en a traves del .ccs)

// OPCION 05 toggle:(Mostrar u ocultar elementos según el caso)
	var $p = $('p')
		$('button').on('click',function(){
			$p.toggle();
		}) //Mostrar u ocultar según el caso (con cada click se oculta y se muestra)

// // OPCION 06 attr:
// // El método attr permite capturar o definir 
// atributos para un elemento

	var $p = $('p')
		$('button').on('click',function(){
			$p.attr('id','mensaje'); // se define un valor al atributo "id" (valor:"mensaje")
			})

// OPCION 07 attr: (sin declarar por JQuery / está declarado directamente en el html)

	var $p = $('p');

		$('button').on('click',function(){
			alert($p.attr('id')) 
			})
	// se extrae el id definido en html, 
	// ya que no se está definiendo su valor en jQ

//cuando haga Click que aparezca una 
// alerta con el "id" del atributo (attr)



// // OPCION 08 attr: (bloqueo y desbloqueo botón, por ejemplo)
	var $p = $('p');
		$('button').attr('disabled',true);
// 	//Es un booleano que desactiva el button

		$('button').attr('disabled',false);
// 	//Es un booleano que activa el button
// 	// en formularos: si una persona ha ingresado todos los campos


// OPCION 09 attr: (Capturar TEXTO)
var $p = $('p');

	$('button').on('click',function(){
	alert($p.text()) 
	}) // Aparece el texto del párrafo en la alerta.
	// // El método "text" de JQuery extrae el texto 
	// de un elemento, lo captura (cuando no se le pasa parámetro)

	$('button').on('click',function(){
	$p.text('Hola amigos') 
	}) // El método "text" de JQuery inserta el texto 
	// // cuando no se le pasan parámetros
	// Cuando se le pasan parametros asigna ese valor al elemento seleccionado
	// text no acepta etiquetas internas como si lo hace html


// OPCION 10 html: (Capturar TEXTO)
// //html Acepta etiquetas internas
// text no acepta etiquetas internas (las imprime: se vería:<strong>...)

var $p = $('p');

	$('button').on('click',function(){
	$p.html('<strong>Hola amigos</strong>')



// OPCION 11 append (Añadir y Quitar contenido al final de un elemnto):
// Permite meter contenido, elementos al DOM al final de un elemeto

var $p = $('p');

	$('button').on('click',function(){
	$p.append('<p>Muchas gracias</p>') 
	//Se añade al final del parrafo el texto "Muchas gracias"


// OPCION 12 prepend (Añadir y Quitar contenido al inicio de un elemnto):
var $p = $('p');

	$('button').on('click',function(){
	$p.prepend('<p>Muchas gracias</p>') 
	//Se añade al inicio del parrafo el texto "Muchas gracias"



