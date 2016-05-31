// OPCION 13 .appendTo (Agregar imagen antes de elemento)
/*Método= .appendTo*/

$('img').appendTo('p') 
/* inserta elementos dentro del elemento principal
(como hijos)*/


// Agregan antes y después, siempre dentro del elemnto
$('p').append('<p>yo estoy fuera</p>')
//El texto queda dentro del elemento

$('p').prepend('<p>yo estoy fuera</p>')


//OPCION 14 .after y .before (Para agregar elementos: 

// (After agrega antes y después por fuera del elemento)
$('p').after('<p>yo estoy fuera</p>')
// El texto queda por fuera del elemento

$('p').before('<p>yo estoy fuera</p>')



//OPCION 15 Insert y/o Mover after y before
/*Método= insertAfter & inserBefore*/

// Se usa para: Mover el flujo sin tocar "html"
// Para insertar elementos antes y después, por fuera del elemento principal: 


$('img').insertAfter('p'); 
// Inserta después del elemento (No dentro, ej: después del párrafo)


//OPCION 16 Elementos que envuelven a otros.

$('img').wrap('<a href="http://escueladigital.pe"><a/>'); 
// //La imagen queda rodeada por un enlace.
// Al dar click en la imagen redirige al enlace
//Es como si estuvieramos poniendo en el htl un <a href=...etc</a> 

$('p').wrapInner('<strong></strong>')
//Dentro del párrafo hará todo en bold
//Mete la etiqueta en el párrafo

//si se usa sólo .wrap:

$('p').wrap('<strong></strong>')
//Hace el efecto bold, pero rodeando al párrafo 
// y no como etiqueta dentro del parrafo






