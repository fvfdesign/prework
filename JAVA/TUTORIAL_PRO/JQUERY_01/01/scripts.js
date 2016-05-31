/*OPCION 01:
//$("p").hide();

/*OPCION 02:
document.ready function"
$(document).ready(function(){
	$("p").hide();

}) */
/* cuando el documento este´listo 
(cuando el DOM se haya dibujado entonces oculta)*/


/*OPCION 03:
Abreviación de "document.ready function"*/

/*$(function(){
  $("p").hide();
})*/


/*$('p')
	.addClass('info')
	.css('color','red'); 

	Se pueden agregar cuantos metodos queramos 
	sobre el objeto JQuery*/

	$('.dos')
		//.next() selecciona siguiente, tantas veces lo usemos
		//.prev() selecciona previo, tantas veces lo usemos
		.siblings() //selecciona todos que tengan el mismo nivel en el html, excepto el mismo (el dos).
		.andSelf()// selecciona a si mismo (el dos)
		.css('color','red');