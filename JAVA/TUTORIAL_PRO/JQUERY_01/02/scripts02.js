var $div = $('div');
$div
	.children()/*busca a los hijos directos en el mismo nivel, 
	pero no a los de nivel mas interno.*/
	//.children('p') //*de todos los hijos aplica solo al 'p'
	/*.find('ul') para buscar niveles mas profundos, busca elementos 
	a cualquier nivel dentro de un selector*/
	.css('border','1px solid red');