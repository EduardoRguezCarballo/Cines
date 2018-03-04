var myJSON;
var pelicula;
var reserva;

$(document).ready(function () {
	
	if (localStorage.getItem('titulo') == null) {
		window.location.href = "../index.html";
	}
	
	$('.datos__usuario').hide();
	
	var inputs = $('.formulario__input');
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('keyup', function(){
			if(this.value.length >= 1){
				this.nextElementSibling.classList.add('fijar');
			}else{
				this.nextElementSibling.classList.remove('fijar');
			}
		});
	}
	
	cargar();
	
	$('#mostrarDatosPelicula').on('click',function(){
		$('.datos__pelicula').hide();
		$('.datos__usuario').show();
	})
	
	$('#volverIndex').on('click',function(){
		window.location.href = "../index.html";
	})
	
	$('#VolverDatosPelicula').on('click',function(){
		$('.datos__usuario').hide();
		$('.datos__pelicula').show();
	})
	
	$('#SeleccionarButacas').on('click', mostrarButacas);
});

function cargar() {
	var titulo = localStorage.getItem('titulo');
	var horarios = localStorage.getItem('horas').split('/');

	$('#titulo')[0].textContent = titulo;

	for (var i = 0; i < horarios.length; i++) {
		var opcion = `<option value="${horarios[i]}">${horarios[i]}</option>`;
		$('#Hora').append(opcion);
	}
	var fechaActual;
	var f = new Date();
	fechaActual = f.getDate() + "/" + (f.getMonth() + 1) + "/" + f.getFullYear();
	$('#fecha')[0].textContent = fechaActual;

}

function mostrarButacas(){
	reserva = {
		'fecha': $('#fecha')[0].textContent,
		'Titulo': $('#titulo')[0].textContent,
		'Horario': $('#Hora')[0].value,
		'Precio': $('#TipoEntrada')[0].value,
		'nombre': $('#nombre')[0].value,
		'apellidos': $('#apellidos')[0].value,
		'correo': $('#email')[0].value,
		'butacas': '3'
	};
	
	$('.formulario').hide();
}

function mensaje(cabecera, texto) {
	$.toast({
		heading: cabecera,
		text: texto,
		loader: true,
		loaderBg: 'red'
	});
}