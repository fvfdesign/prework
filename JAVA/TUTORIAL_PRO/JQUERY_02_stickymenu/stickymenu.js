/* CAPTURAR EL SCROLL */
	// // EL SELECTOR ES: window
	// // .on es para Capturar, obtener eventos

// $(window).on('scroll',function(){
// 	$('body').css('background','red');
// })
	//En el evento scroll digo que el body sea rojo al hacer scroll



/* METODO: scrollTop (también hay METODO: scrollleft (desplazamiento horizontal*/
	// CAPTURAR CUANTO HE BAJADO EN EL SCROLL
	// se puede saber cuántos pixels se baja al hacer el scroll


	// var $scrollTop = $(window).scrollTop(); 
	//Se guarda en la variable el metodo scrollTop del window
	/*Hay que meterlo dentro del evento para que 
	se actualice dinamicamente al hacer scroll, 
	si lodejamos antes se queda en cero (0)*/


	
// 	$(window).on('scroll',function(){
// 		var $scrollTop = $(window).scrollTop();
// 		$('nav').text("el scroll es" + $scrollTop + 'px');
// })







	var $nav = $('nav');//Cachear el nav
	var $navTop = $nav.offset().top; 	
	/*Donde capturo el offsetTop (el valor desde la parte 
	superior de la ventana hasta que comience el nav.)*/

	/*Ahora necesitamos saber si el scroll es igual o mayor al navTop, 
	y según eso aplicar la clase sticky*/
	/*HACER FUNCIÓN Y METERLA DENTRO DE UNA VARIABLE:*/

	var pegarNav = function(){
		var $scrollTop = $(window).scrollTop();//CAPTURAR EL SCROLL
		if($scrollTop >= $navTop){
			$nav.addClass('sticky')
		}else{
			$nav.removeClass ('sticky')
		}
	} // Ahora hay que ejecutar la funcion cuando ocurra el evento "scroll"

	$(window).on('scroll',pegarNav);



// capturar el <nav>, 
// pasarle el metodo"text" para q escriba texto dentro del nav
// Se le pasa la variable "scrollTop" que es la que tiene el valor del scroll
// Se le pone "px" para que de el valor en pixels