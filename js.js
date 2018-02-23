var dato = [];
var mostrar = [];
var select = 1;

$(document).ready(function () {

	var lector = $('.leer');
	for (var i = 0; i < lector.length; i++) {
		lector[i].setAttribute("tabindex", 0);
	}

	$('#cabeza').focus();
	montaJson();
	mostrarDatos();

	$('.dos, .tres').hide();

	$('.botonMotrar').on('click', function () {
		rellenarInformacion(this);
		$('#tituloPelicula').focus().delay(800);
	});

	$('.BtnCerrar').on('click', function () {
		$('.informacion')[0].style.display = "none";
		$('#formulario').show();
		$('#charts')[0].style.display = "none";
		$('.dos, .tres').hide();
		$('.uno').show();

		//limpio formulario
		$('#TbNombre').val("");
		$('#TbTelefono').val("");
		$('#TbEmail').val("");
		$('#TbPuntos').val("");
		$('#tituloPelicula').val("");
		$('#TbLocalidad').val("");
		$('#TbNombre').removeAttr("Style");
		$('#TbTelefono').removeAttr("Style");
		$('#TbEmail').removeAttr("Style");
		$('#TbPuntos').removeAttr("Style");
	});

	$('.titulo1').on('click', function () {
		$('.uno').slideToggle();
		$('.dos').slideUp(400);
		$('.tres').slideUp(400);
	});

	$('.titulo2').on('click', function () {
		$('.dos').slideToggle();
		$('.uno').slideUp(400);
		$('.tres').slideUp(400);
	});

	$('.titulo3').on('click', function () {
		$('.tres').slideToggle();
		$('.dos').slideUp(400);
		$('.uno').slideUp(400);
	});

	$('#BtnGuardar').on('click', function () {
		guardarLocalStorage();
	});

	$('#eleccion').on('change', function () {
		select = $(this).val();
	});
	
	$('#redireccion').on('click', function(){
		localStorage.setItem('bloque',$('.uno'));
	});

	google.charts.load('current', {
		packages: ['corechart']
	});
})

function montaJson() {
	dato = [
		{
			'titulo': 'The Shape Of Water',
			'imagen': 'the-shape-of-water.jpg',
			'trailer': '<iframe src="https://www.youtube.com/embed/qnOQqRPGBoY" frameborder="0" encrypted-media" allowfullscreen></iframe>',
			'director': 'Guillermo Del Toro',
			'Reparto': 'Sally Hawkins, Octavia Spencer, Michael Stuhlbarg, Richard Jenkins, Michael Shannon',
			'Genero': 'drama, fantasy',
			'duracion': '123 min',
			'estreno': '16/02/18',
			'sinopsis': 'En un inquietante laboratorio de alta seguridad, durante la Guerra Fría, se produce una conexión insólita entre dos mundos, aparentemente alejados. La vida de la solitaria Elisa, trabajadora del laboratorio, cambia por completo cuando descubre un experimento clasificado como secreto.',
			'horario': '<ul><li>19:30</li><li>21:40</li><li>23:50</li></ul>'
		},
		{
			'titulo': 'Black Panther',
			'imagen': 'black-panther.jpg',
			'trailer': '<iframe src="https://www.youtube.com/embed/JK-wAfAvJ0g" frameborder="0" encrypted-media" allowfullscreen></iframe>',
			'director': 'Ryan Coogler',
			'Reparto': 'Chadwick Boseman, Michael B. Jordan, Lupita Nyong\'O, Danai Gurira, Martin Freeman',
			'Genero': 'Acción, aventuras, ciencia-ficción',
			'duracion': '134 min',
			'estreno': '16/02/18',
			'sinopsis': '\'Black Panther\' cuenta la historia de T\'Challa quien, después de los acontecimientos de \'Capitán América: Civil War\', vuelve a casa, a la nación de Wakanda, aislada y muy avanzada tecnológicamente, para ser proclamado Rey. Pero la reaparición de un viejo enemigo pone a prueba el temple de T\'Challa como Rey y Black Panther ya que se ve arrastrado a un conflicto que pone en peligro todo el destino de Wakanda y del mundo.',
			'horario': '<ul><li>15:30</li><li>18:40</li><li>23:30</li></ul>'
		},
		{
			'titulo': 'Yo, Tonya',
			'imagen': 'yo-tonya.jpg',
			'trailer': '<iframe src="https://www.youtube.com/embed/XuyQGywGtm8" frameborder="0" encrypted-media" allowfullscreen></iframe>',
			'director': 'Craig Gillespie',
			'Reparto': 'Margot Robbie, Sebastian Stan, Allison Janney, Julianne Nicholson, Bobby Cannavale',
			'Genero': 'Biografía, comedia, drama',
			'duracion': '119 min.',
			'estreno': '23/02/18',
			'sinopsis': 'Tonya Harding (Margot Robbie) dominó el hielo con un estilo de patinaje totalmente único. También dominó los titulares por algo completamente diferente. "YO, TONYA" es, por momentos, un absurdo, trágico e hilarante retrato de la mujer en el centro del mayor escándalo en la historia del Deporte.',
			'horario': '<ul>				<li>19:30</li>				<li>21:45</li>				<li>00:00</li>			</ul>'
		},
		{
			'titulo': "Deber cumplido",
			'imagen': 'deber-cumplido.jpg',
			'trailer': '<iframe src="https://www.youtube.com/embed/rztPZyvIyCM" frameborder="0" encrypted-media" allowfullscreen></iframe>',
			'director': 'Jason Hall',
			'Reparto': 'Miles Teller, Beulah Koale, Joe Cole, Scott Haze, Haley Bennett, Amy Schumer',
			'Genero': 'Bélica, biografía, drama',
			'duracion': '108 min',
			'estreno': '16/02/18',
			'sinopsis': "La película cuenta la historia de Adam Schumann (Miles Teller), un militar que regresa a casa tras cumplir con su servicio en el ejército norteamericano en Irak. Con su llegada, las cosas no serán fáciles ni para él ni para su familia ya que no logra encontrar la paz debido al trastorno de estrés post traumático que padece. Esto hará que integrarse a la sociedad se convierta en un camino muy difícil de alcanzar y, al mismo tiempo, estará obligado a afrontar los horribles recuerdos que le dejó la guerra.",
			'horario': '<ul>	<li>15:30</li>				</ul>'
		},
		{
			'titulo': "El cuaderno de Sara",
			'imagen': 'el-cuaderno-de-sara.jpg',
			'trailer': '<iframe src="https://www.youtube.com/embed/brjhVjts4SA" frameborder="0" encrypted-media" allowfullscreen></iframe>',
			'director': 'Norberto López Amado',
			'Reparto': 'Belén Rueda, Manolo Cardona, Enrico Lo Verso, Marian Álvarez, Florin Opritescu',
			'Genero': 'Drama, thriller',
			'duracion': '115 min.',
			'estreno': '02/02/18',
			'sinopsis': "Desde hace años Laura busca a su hermana Sara, desaparecida en medio de la selva del Congo. Ni la ONG para la que trabaja, ni la embajada tienen noticias de su paradero hasta que aparece una foto de Sara en un poblado minero del este del Congo. Laura decide viajar a Kampala para desde allí iniciar un peligroso viaje al corazón del África, un territorio dominado los señores de la guerra. Una aventura que la llevará hasta la más sucia, violenta y oculta trastienda de los poderes occidentales.",
			'horario': '<ul><li>15:30</li></ul>'
		},
		{
			'titulo': "C'est la vie!",
			'imagen': 'cest-la-vie.jpg',
			'trailer': '<iframe src="https://www.youtube.com/embed/gzsBBdtOif0" frameborder="0" encrypted-media" allowfullscreen></iframe>',
			'director': 'Eric Toledano, Olivier Nakache',
			'Reparto': 'Suzanne Clément, Gilles Lellouche, Jean-Paul Rouve, Judith Chemla, Jean-Pierre Bacri',
			'Genero': 'Comedia',
			'duracion': '117 min.',
			'estreno': '09/02/18',
			'sinopsis': "Max ha organizado cientos de bodas durante años y ahora prepara una boda de lujo en un château francés del siglo XVIII. Ha coordinado todo para que la celebración sea un éxito: camareros, orquesta, menú, disc jockey, decoración floral... Pero el resultado pende de un hilo y cada momento de felicidad y emoción puede convertirse en desastre o caos. ¿A quién confiarías la fiesta más importante de tu vida?",
			'horario': '<ul><li>21:55</li></ul>'
		},
		{
			'titulo': "Cavernícola",
			'imagen': 'cavernicola.jpg',
			'trailer': '<iframe  src="https://www.youtube.com/embed/tGR9bmp0_0Q" frameborder="0" encrypted-media" allowfullscreen></iframe>',
			'director': 'Nick Park',
			'Reparto': '(ANIMACIÓN)',
			'Genero': 'Animación, aventuras, comedia',
			'duracion': '89 min',
			'estreno': '02/02/18',
			'sinopsis': "Dug, humano y Hognob, jabalí, son los protagonistas de esta nueva aventura de Aardman en la que dos civilizaciones, la de la Edad de Piedra y la de Bronce, compiten por hacerse hueco en la historia (mientras que por casualidad inventan el fútbol). Dug y Hognob tendrán que ayudar a su tribu, sorteando con gracia y astucia múltiples peligros y derrotando al malvado Lord Nooth para no perder su hogar.",
			'horario': '<ul><li>12:30</li></ul>'
		},
		{
			'titulo': "Cincuenta sombras liberadas",
			'imagen': 'cincuenta-sombras-liberadas.jpg',
			'trailer': '<iframe src="https://www.youtube.com/embed/68nrtEKqMb8" frameborder="0" encrypted-media" allowfullscreen></iframe>',
			'director': 'James Foley',
			'Reparto': 'Dakota Johnson, Jamie Dornan, Eric Johnson, Eloise Mumford, Rita Ora',
			'Genero': 'Drama, romance, thriller',
			'duracion': '101 min',
			'estreno': '09/02/18',
			'sinopsis': "Tercera entrega de la romántica, sensual, erótica y totalmente adictiva historia de la apasionada relación entre una estudiante universitaria y un joven multimillonario. En esta ocasión Anastasia y Christian se casan, pero Jack Hyde (Eric Johnson) continúa amenazando su relación.",
			'horario': '<ul><li>15:30</li></ul>'
		},
		{
			'titulo': "Coco",
			'imagen': 'coco.jpg',
			'trailer': '<iframe src="https://www.youtube.com/embed/htwlR51npL4" frameborder="0" encrypted-media" allowfullscreen></iframe>',
			'director': 'Lee Unkrich, Adrian Molina ',
			'Reparto': 'Benjamin Bratt, Anthony Gonzalez, Gael García Bernal, Renée Victor, Ana Ofelia Murguía',
			'Genero': 'Animación, Aventuras, Comedia',
			'duracion': '109 min',
			'estreno': '12/01/18.',
			'sinopsis': 'A pesar de las desconcertantes tradiciones de su familia entre las que se encuentra la vieja prohibición de estar en contacto con la música, Miguel (voz de Anthony Gonzalez) sueña convertirse en un consumado éxito como su ídolo, Ernesto de la Cruz (voz de Benjamín Bratt). Desesperado por demostrar su talento, Miguel se encuentra en la impresionante y colorida Tierra de los Muertos siguiendo una misteriosa cadena de eventos. A lo largo del camino, conocerá al encantador y tramposo Héctor (voz de Gael García Bernal), y juntos emprenderán un viaje extraordinario para desvelar la verdad que hay detrás de la historia familiar de Miguel.',
			'horario': '<ul><li>Sábado, domingo y festivos 12:30</li></ul>'
		},
		{
			'titulo': "El corredor del laberinto: La cura mortal",
			'imagen': 'el-corredor-del-laberinto-la-cura-mortal.jpg',
			'trailer': '<iframe src="https://www.youtube.com/embed/ZqlvJSNGfYA" frameborder="0" encrypted-media" allowfullscreen></iframe>',
			'director': 'Wes Ball',
			'Reparto': 'Kaya Scodelario, Dylan O\'Brien, Nathalie Emmanuel, Katherine McNamara, Walton Goggins',
			'Genero': 'Acción, ciencia-ficción, thriller',
			'duracion': '142 min',
			'estreno': '26/01/18',
			'sinopsis': 'En este final épico de la saga Maze Runner, Thomas lidera su grupo de Gladers escapados de la última y difícil misión. Para salvar a sus amigos, deben entrar en la legendaria Last City, un laberinto controlado por WCKD que puede llegar a ser el laberinto más mortífero de todos. Cualquier persona que lo consiga pasar con vida obtendrá respuestas a las preguntas que los Gladers se han estado haciendo desde que llegaron por primera vez al laberinto.',
			'horario': '<ul><li>15:15</li><li>17:30</li>		<li>20:15</li>	<li>22:30</li>			</ul>'
		}
	];
}

function mostrarDatos() {
	for (var i = 0; i < dato.length; i++) {
		var elemento = `<div class="cartel sombra">
			<img src="img/${dato[i].imagen}" alt="${dato[i].titulo}">
			<h3 tabindex="0">${dato[i].titulo}</h3>
			<h4>Horários Disponibles</h4>
			${dato[i].horario}
			<input id="${dato[i].titulo}" class="botonMotrar" type="submit" value="Ver mas Datos" tabindex="0">
		</div>`;
		$('.cartelera').append(elemento)
	}
}

function rellenarInformacion(elementoElegido) {
	//muevo el foco a la ventana sacada
	var focalizar = $('.titulo').position().top;
	$('html,body').animate({
		scrollTop: focalizar
	}, 500);

	//muestro el cuadro
	$('.informacion')[0].style.display = "block";

	for (var i = 0; i < dato.length; i++) {
		if (dato[i].titulo == elementoElegido.id) {
			$('.informacion #tituloPelicula').text(dato[i].titulo);
			$('.informacion #tituloPelicula')[0].setAttribute('tabindex', 0);
			$('.acordeon #imagenCartel')[0].src = "img/" + dato[i].imagen;
			$('.acordeon #CuadroImg')[0].innerHTML = dato[i].trailer;
			$('#CuadroDirector').text(dato[i].director);
			$('.acordeon #CuadroReparto').text(dato[i].Reparto);
			$('.acordeon #CuadroGenero').text(dato[i].Genero);
			$('.acordeon #CuadroDuracion').text(dato[i].duracion);
			$('.acordeon #CuadroEstreno').text(dato[i].estreno);
			$('.acordeon #CuadroSinopsis').text(dato[i].sinopsis);
			$('#MostrarHorarios')[0].innerHTML = '<h3>Horarios Disponibles: </h3>'+dato[i].horario;
		}
	}
}

function guardarLocalStorage() {
	var validar = true;
	var nombre = $('#TbNombre').val();
	var telefono = $('#TbTelefono').val();
	var email = $('#TbEmail').val();
	var puntos = parseInt($('#TbPuntos').val());
	var Npelicula = $('#tituloPelicula').text();

	$('#TbNombre').removeAttr("Style");
	$('#TbTelefono').removeAttr("Style");
	$('#TbEmail').removeAttr("Style");
	$('#TbPuntos').removeAttr("Style");

	if (nombre == "") {
		mensaje("Nombre erroneo", "Resvisa el campo nombre");
		$('#TbNombre').attr('Style', 'background-Color: rgba(255,0,0,0.7); border: 2px solid red')
		$('#TbNombre').focus();
		validar = false;
	}

	if (telefono == "" || telefono.length < 9) {
		mensaje("Telefono incorrecto", "Resvisa el campo Telefono");
		$('#TbTelefono').attr('Style', 'background-Color: rgba(255,0,0,0.7); border: 2px solid red')
		$('#TbTelefono').focus();
		validar = false;
	}

	if (email.indexOf('@') == -1) {
		mensaje("Email incorrecto", "Resvisa el campo Email");
		$('#TbEmail').attr('Style', 'background-Color: rgba(255,0,0,0.7); border: 2px solid red')
		$('#TbEmail').focus();
		validar = false;
	}

	if (puntos < 1 || puntos > 10) {		
		mensaje("Puntos incorrectos del 1 al 10", "Resvisa la puntuación");
		$('#TbPuntos').attr('Style', 'background-Color: rgba(255,0,0,0.7); border: 2px solid red')
		$('#TbPuntos').focus();
		validar = false;
	}

	//c	ompruebo los datos
	if (validar) {
		if (localStorage.getItem('Votacionpelicula') != null) {
			localStorage.setItem('Votacionpelicula', localStorage.getItem('Votacionpelicula') + Npelicula + ";" + nombre + ";" + telefono + ";" + email + ";" + puntos + "/");
		} else {
			localStorage.setItem('Votacionpelicula', Npelicula + ";" + nombre + ";" + telefono + ";" + email + ";" + puntos + "/");
		}
		google.charts.setOnLoadCallback(dibujar);
	}
}

function dibujar() {
	var data = new google.visualization.DataTable();
	compruebaInfo();
	var select = $('#eleccion')[0];

	$('#formulario').hide();
	$('#charts')[0].style.display = "block";
	$('#charts').focus();

	data.addColumn('string', 'Películas');
	data.addColumn('number', 'Puntuación');

	var opciones = {
		'title': 'Puntuaciones:',
		'width': '600',
		'height': '300'
	};

	for (var a = 0; a < mostrar.length; a++) {
		if (mostrar[a][2] != 0) {
			var totalVotos = mostrar[a][2];
			var nombre = mostrar[a][0] + " VTotal:" + totalVotos;
			var media = Math.round(mostrar[a][1] / mostrar[a][2]);

			data.addRows([[nombre, media]]);
		}
	}

	var chart;

	if (select == 1) {
		chart = new google.visualization.AreaChart(document.getElementById('charts'));
	} else {
		chart = new google.visualization.PieChart(document.getElementById('charts'));
	}

	chart.draw(data, opciones);

	var a = $('#charts').find('div');

	for (var i = 0; i < a.length; i++) {
		a[i].setAttribute("tabindex", 0);
	}
}

function compruebaInfo() {

	var pelicula1 = ["The Shape Of Water", 0, 0];
	var pelicula2 = ["Black Panther", 0, 0];
	var pelicula3 = ["Yo, Tonya", 0, 0];
	var pelicula4 = ["Deber cumplido", 0, 0];
	var pelicula5 = ["El cuaderno de Sara", 0, 0];
	var pelicula6 = ["C'est la vie!", 0, 0];
	var pelicula7 = ["Cavernícola", 0, 0];
	var pelicula8 = ["Cincuenta sombras liberadas", 0, 0];
	var pelicula9 = ["Coco", 0, 0];
	var pelicula10 = ["El corredor del laberinto: La cura mortal", 0, 0];

	var datos_guardados = localStorage.getItem('Votacionpelicula');
	datos_guardados = datos_guardados.split('/');

	for (var Nfila = 0; Nfila < datos_guardados.length - 1; Nfila++) {

		switch (datos_guardados[Nfila].split(';')[0]) {
			case 'The Shape Of Water':
				pelicula1[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
				pelicula1[2] += 1;
				break

			case 'Black Panther':
				pelicula2[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
				pelicula2[2] += 1;
				break

			case 'Yo, Tonya':
				pelicula3[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
				pelicula3[2] += 1;
				break

			case "Deber cumplido":
				pelicula4[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
				pelicula4[2] += 1;
				break

			case 'El cuaderno de Sara':
				pelicula5[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
				pelicula5[2] += 1;
				break

			case "C'est la vie!":
				pelicula6[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
				pelicula6[2] += 1;
				break

			case 'Cavernícola':
				pelicula7[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
				pelicula7[2] += 1;
				break

			case 'Cincuenta sombras liberadas':
				pelicula8[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
				pelicula8[2] += 1;
				break

			case 'Coco':
				pelicula9[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
				pelicula9[2] += 1;
				break

			case 'El corredor del laberinto: La cura mortal':
				pelicula10[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
				pelicula10[2] += 1;
				break
		}
	}

	mostrar[0] = pelicula1;
	mostrar[1] = pelicula2;
	mostrar[2] = pelicula3;
	mostrar[3] = pelicula4;
	mostrar[4] = pelicula5;
	mostrar[5] = pelicula6;
	mostrar[6] = pelicula7;
	mostrar[7] = pelicula8;
	mostrar[8] = pelicula9;
	mostrar[9] = pelicula10;
}

function mensaje(cabecera, texto) {
	$.toast({
		heading: cabecera,
		text: texto,
		loader: true,
		loaderBg: 'red'
	});
}
