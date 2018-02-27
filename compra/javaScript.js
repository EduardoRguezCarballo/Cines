var myJSON;
var pelicula;

$(document).ready(function () {
	cargar();	
});

function cargar(){
	var titulo = localStorage.getItem('titulo');
	var cartel = localStorage.getItem('cartel');
	var horarios = localStorage.getItem('horas').split('/');
	
	$('#cartel')[0].src="../img"+cartel;
	$('#titulo')[0].textContent = titulo;
	
	for(var i = 0; i<horarios.length; i++){
		var opcion = `<option value="${horarios[i]}">${horarios[i]}</option>`;
		$('#Hora').append(opcion);
	}
	var fechaActual;
	var f = new Date();
	fechaActual = f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear();
	$('#fecha')[0].textContent = fechaActual;	
	
}

function mensaje(cabecera, texto) {
	$.toast({
		heading: cabecera,
		text: texto,
		loader: true,
		loaderBg: 'red'
	});
}
