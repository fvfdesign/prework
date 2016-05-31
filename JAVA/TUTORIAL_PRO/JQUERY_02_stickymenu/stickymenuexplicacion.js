// VIEO 02 (Escuela Digital)

// PROYECTO jQuery Nº1 STICKY MENU

/* 
Metodos:
scroll: 
offset:Devuelve las coordenadas de un elemento en la ventana
scrollTop: 
*/

	/* OFFSET(offset): 
	1) Devuelve o recupera las coordenadas de un elemento en la ventana
	2) También define coordenadas.*/


	// DEFINIR COORDENADAS
$('nav').offset({top:50,left:200})



	// OBTENER COORDENADAS

$('nav').offset() 
	/* devuelve un objeto con coordenadas, 
	cuenta desde la parte superior izquierda (top:x, left:x)*/



// Para obtener un valor unico de top o left:

$('nav').offset().top 
	/*Se obtiene el espacio vertical, de donde coienzza 
	a donde termina el elemento*/

$('nav').offset().left



