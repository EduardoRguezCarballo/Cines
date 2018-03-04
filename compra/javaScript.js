var myJSON;
var pelicula;
var reserva;
var sillasLocal;
var recogerDato;

$(document).ready(function () {

	var inputs = $('.formulario__input');
	for (var i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('keyup', function () {
			if (this.value.length >= 1) {
				this.nextElementSibling.classList.add('fijar');
			} else {
				this.nextElementSibling.classList.remove('fijar');
			}
		});
	}

	if (localStorage.getItem('titulo') == null) {
		window.location.href = "../index.html";
	}

	cargar();
	cargar_butacas();

	$('.datos__usuario').hide();
	$('#MostrarSala').hide();
	$('#reservar').hide();
	$('.factura').hide();

	$('#mostrarDatosPelicula').on('click', function () {
		$('.datos__pelicula').hide();
		$('.datos__usuario').show();		
	})

	$('#volverIndex').on('click', function () {
		window.location.href = "../index.html";
	})

	$('#VolverDatosPelicula').on('click', function () {
		$('.datos__usuario').hide();
		$('.datos__pelicula').show();
	})

	$('#SeleccionarButacas').on('click', function(){	
		var listo = true;
		
		if($('#nombre').text == ""){
			mensaje('Nombre mal Introducido','Necesitamos tu nombre para la factura');
			listo=false;
		}
		
		if($('#apellidos').text == ""){
			mensaje('Apellido mal Introducido','Necesitamos tus Apellidos para la factura');
			listo=false;
		}
		
		if($('#email').text == ""){
			mensaje('Email mal Introducido','Necesitamos tu email para la factura');
			listo=false;
		}
		
		if(listo){
			$('.formulario').hide();
			$('#MostrarSala').show();
			$('#reservar').show();
		}
	});	
	
	$('#reservar').on('click', guardar_reserva);
	
	$('#comprar').on('click', function(){		
		mensaje('Compra Correcta','Ya tienes tus entradas listas');
		$('#comprar').hide();
		$('#volver').show();
	});
	
	$('#volver').on('click', function(){	
		window.location.href = "../index.html";
	});
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

function cargar_butacas() {

	if (localStorage.getItem('estadoSala') == null) {
		var estdSala = "";

		for (var i = 0; i < 35; i++) {
			dato = ['', 'nodisponible', 'disponible'];
			var random = Math.round(Math.random() * (3 - 1) + 1);

			if (random == 0 || random == 3) {
				random = 1;
			}

			estdSala += dato[random] + "/";
		}
		localStorage.setItem('estadoSala', estdSala);
	}

	recogerDato = localStorage.getItem('estadoSala').split('/');
	sillasLocal = $('.sillas').find('img');

	for (var i = 0; i < sillasLocal.length - 1; i++) {
		sillasLocal[i].setAttribute('class', recogerDato[i]);
	}
}

function mensaje(cabecera, texto) {
	$.toast({
		heading: cabecera,
		text: texto,
		loader: true,
		loaderBg: 'red'
	});
}

function comprueba(elemento){
	var clase = elemento.getAttribute('class');
	
	switch(clase){
		case 'disponible':
			mensaje('Listo','Esta butaca la tienes reservada.')
			elemento.setAttribute('class','reservado');			
			break;
			
		case 'nodisponible':
			mensaje('Cuidado','Esta butaca no esta disponible.')
			break;
			
		case 'reservado':
			mensaje('Cuidado','As desmarcado esa butaca.');
			elemento.setAttribute('class','disponible');
			break;
	}
}

function guardar_reserva(){
	var estado = $('.sillas').find('img');
	var numButacas = 0;
	var lista = "";
	
	for(var i = 0; i<estado.length;i++){
		var atributo = estado[i].getAttribute('class');
		
		if(atributo=='reservado'){
			numButacas++;
			atributo = 'nodisponible';
		}
		
		lista += atributo + "/";
	}
	
	localStorage.setItem('estadoSala',lista);
	
	reserva = {
		'Titulo': $('#titulo')[0].textContent,
		'Horario': $('#Hora')[0].value,
		'fecha': $('#fecha')[0].textContent,
		'Precio': $('#TipoEntrada')[0].value,
		'nombre': $('#nombre')[0].value,
		'apellidos': $('#apellidos')[0].value,
		'correo': $('#email')[0].value,
		'butacas': numButacas
	};
	
	$('#TiDato').text(reserva.Titulo);
	$('#HDato').text(reserva.Horario);
	$('#FDato').text(reserva.fecha);
	$('#PDato').text(reserva.Precio+" €");
	$('#NDato').text(reserva.nombre);
	$('#ADato').text(reserva.apellidos);
	$('#CDato').text(reserva.correo);
	$('#TDato').text(reserva.butacas);
	$('#PFDato').text(reserva.butacas*reserva.Precio +" €");
	$('#reservar').hide();
	$('.factura').show();	
	$('#MostrarSala').hide();	
	$('#volver').hide();
}
