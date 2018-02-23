var dato = [];
var mostrar = [];
var select = 1;

$(document).ready(function () {
    
    var lector = $('.leer');
    for(var i=0; i<lector.length;i++){
        lector[i].setAttribute("tabindex",0);
    } 
    
    $('#cabeza').focus();
	montaJson();
    
	$('.dos, .tres').hide();

	$('.botonMotrar').on('click', function () {        
		rellenarInformacion(this);
        $('#tituloPelicula').focus().delay(800);
	});

	$('.BtnCerrar').on('click', function () {
		$('.informacion')[0].style.display = "none";
		$('#formulario').show();
		$('#charts')[0].style.display="none";
		$('.dos, .tres').hide();
		$('.uno').show();
		
		//limpio formulario
		$('#TbNombre').val("");
		$('#TbTelefono').val("");
		$('#TbEmail').val("");
		$('#TbPuntos').val("");
		$('#tituloPelicula').val("");
		$('#TbLocalidad').val("");
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
    
    $('#eleccion').on('change',function(){
        select = $(this).val();
    });

	google.charts.load('current', {
		packages: ['corechart']
	});
})

function montaJson() {
	dato = [
		{
			'titulo': 'Dando La Nota',
			'imagen': 'dando-la-nota-3.jpg',
			'trailer': 'img/video1.PNG',
			'director': 'Trish Sie.',
			'Reparto': 'Anna Kendrick, Rebel Wilson, Hailee Steinfeld, Brittany Snow, Anna Camp.',
			'Genero': 'Comedia, musical.',
			'duracion': '93min.',
			'estreno': '29/12/17.',
			'sinopsis': 'Tras ganar el Campeonato del Mundo, las Bellas se separan para seguir con sus vidas hasta que se dan cuenta de que la música a capella no tiene muchas salidas laborales. Pero cuando surge la oportunidad de organizar una gira por el extranjero, el destino reunirá por última vez a estas peculiares y únicas estrellas para componer y plantearse una serie de decisiones que no podrán tomar a la ligera.'
		},
		{
			'titulo': 'Insidious La última llave',
			'imagen': 'insidious-la-ultima-llave.jpg',
			'trailer': 'img/video2.png',
			'director': 'Adam Robitel.',
			'Reparto': 'Spencer Locke, Javier Botet, Josh Stewart, Lin Shaye, Kirk Acevedo.',
			'Genero': 'Terror, thriller.',
			'duracion': '103 min.',
			'estreno': '05/01/18.',
			'sinopsis': 'En esta nueva película de terror original, en la que veremos de nuevo a Lin Shaye como la Doctora Elise Rainier, la brillante parapsicóloga se enfrenta a su más personal y aterradora caza hasta la fecha, que sucede en su antigua casa familiar.'
		},
		{
			'titulo': 'Jumanji',
			'imagen': 'jumanji.jpg',
			'trailer': 'img/video3.PNG',
			'director': 'Jake Kasdan.',
			'Reparto': 'Dwayne Johnson, Karen Gillan, Kevin Hart, Jack Black, Nick Jonas.',
			'Genero': 'Acción, aventuras, comedia, fantasía',
			'duracion': '119 min.',
			'estreno': '22/12/17.',
			'sinopsis': 'Cuatro compañeros de instituto descubren un vieja videoconsola con un juego del que nunca han oído hablar, Jumanji, y se sienten inmediatamente atraídos por la ambientación selvática del juego, para entonces verse transformados en los avatares que han elegido: el jugón Spencer se convierte en un musculoso aventurero (Dwayne Johnson), la estrella de fútbol americano Fridge pierde (en palabras propias) "los 60 cm superiores de su cuerpo" y se convierte en un genio (Kevin Hart), la chica popular Bethany se convierte en un profesor de mediana edad (Jack Black) y la tímida y apocada Martha se convierte en una aguerrida luchadora (Karen Gillan). Por si eso fuera poco, descubren que no solo están jugando a Jumanji, sino que también tendrán que sobrevivir en él. Para superar el juego y regresar al mundo real, deberán embarcarse en la aventura más peligrosa de sus vidas, descubrir qué fue lo que dejó Alan Parrish 20 años antes y cambiar la forma que tienen de verse a sí mismos, o quedarán atrapados en el juego para siempre...'
		},
		{
			'titulo': "Molly's Game",
			'imagen': 'mollys-game.jpg',
			'trailer': 'img/video4.PNG',
			'director': 'Aaron Sorkin.',
			'Reparto': 'Jessica Chastain, Idris Elba, Michael Cera, Kevin Costner, Jeremy Strong.',
			'Genero': 'BIografía, drama.',
			'duracion': '140 min.',
			'estreno': '05/01/18.',
			'sinopsis': "Molly's Game' es la historia real de una mujer muy especial, Molly Bloom, quien durante una década se convirtió en la princesa de las partidas de póker clandestinas más cotizadas de Estados Unidos. Por sus partidas pasaron las más grandes estrellas de Hollywood y numerosas personalidades del mundo del deporte, los negocios e incluso de la mafia. Pero su castillo de naipes se derrumbó cuando el FBI la convirtió en su objetivo."
		},
		{
			'titulo': "El gran showman",
			'imagen': 'the-greatest-showman.jpg',
			'trailer': 'img/video5.PNG',
			'director': 'Michael Gracey.',
			'Reparto': 'Hugh Jackman, Zac Efron, Michelle Williams, Zendaya, Rebecca Ferguson.',
			'Genero': 'Biografía, drama, musical.',
			'duracion': '105 min.',
			'estreno': '29/12/17.',
			'sinopsis': "El Gran Showman es un audaz y original musical que celebra el nacimiento de la industria del espectáculo y la sensación de asombro que nos domina cuando los sueños se hacen realidad. Inspirado en la ambición y la imaginación de P.T. Barnum, 'El Gran Showman' narra la historia de un visionario que salió de la nada para crear un fascinante espectáculo que se convirtió en una sensación mundial."
		},
		{
			'titulo': "Mazinger Z Infinity",
			'imagen': 'mazinger-z-infinity.jpg',
			'trailer': 'img/video6.PNG',
			'director': 'Junji Shimizu.',
			'Reparto': '(ANIMACIÓN).',
			'Genero': 'Animación.',
			'duracion': '90 min.',
			'estreno': '19/01/18.',
			'sinopsis': "La humanidad se encuentra una vez más en peligro de caer en las garras del Imperio Subterráneo, que en el pasado fue liderado por el científico malvado Dr. Infierno. Entonces, Koji Kabuto pilotó al súper robot Mazinger Z y, con la ayuda de sus amigos del Instituto de Investigaciones Fotónicas, frustró las malvadas ambiciones del Dr. Infierno y devolvió la paz al mundo. Han transcurrido 10 años desde entonces... Ahora que ya no es piloto, Koji Kabuto ha seguido el camino de su padre y su abuelo iniciando su carrera como científico. Y ahora encuentra una gigantesca estructura enterrada en las profundidades del Monte Fuji, junto con una misteriosa indicación de la vida... Nuevos encuentros, nuevas amenazas y un nuevo destino aguardan a la humanidad. El antiguo héroe Koji Kabuto debe tomar una decisión sobre el futuro: ser un dios o un demonio..."
		},
		{
			'titulo': "Perfectos desconocidos",
			'imagen': 'perfectos-desconocidos.jpg',
			'trailer': 'img/video7.PNG',
			'director': 'Álex De La Iglesia.',
			'Reparto': 'Belén Rueda, Eduardo Noriega, Dafne Fernández, Juana Acosta, Ernesto Alterio.',
			'Genero': 'Comedia, drama.',
			'duracion': '96 min.',
			'estreno': '01/12/17.',
			'sinopsis': "Una extraña inquietud parece haberse apoderado de la ciudad. El tráfico se colapsa, las urgencias de los hospitales están a rebosar, los perros aúllan intuyendo el peligro que se aproxima: es el eclipse de luna. Su poderoso influjo afecta también a los protagonistas de esta historia. Los anfitriones discuten alterados. Sus amigos están a punto de llegar y la cena no está preparada todavía. Alfonso y Eva: los dueños de la casa, profesionales bien situados, preocupados por su hija adolescente y por lo monótona que se ha vuelto su vida. Eduardo y Blanca: ella se quiere casar, él no; ella quiere tener un hijo, él ni se lo plantea. Antonio y Ana: con dos niños, a punto del divorcio, algo que descubrirán esa misma noche. Pepe: profesor en paro, su novia está enferma y les dice que por eso no ha podido venir ¿o es tan sólo una excusa? Una reunión de amigos como tantas otras, hasta que, de pronto, surge la idea. ¿Por qué no hacer algo distinto? Vamos a jugar a un juego. ¿Qué pasaría si dejásemos nuestros móviles encima de la mesa, al alcance de todos? Llamadas, SMS, Whatsapps, notificaciones de Instagram o Facebook, nuestra vida entera compartida al instante por todo el mundo."
		},
		{
			'titulo': "Coco",
			'imagen': 'coco.jpg',
			'trailer': 'img/video8.PNG',
			'director': 'Lee Unkrich, Adrian Molina.',
			'Reparto': 'Benjamin Bratt, Anthony Gonzalez, Gael García Bernal, Renée Victor, Ana Ofelia Murguía.',
			'Genero': 'Animación, Aventuras, Comedia.',
			'duracion': '109 min.',
			'estreno': '01/12/17.',
			'sinopsis': "A pesar de las desconcertantes tradiciones de su familia entre las que se encuentra la vieja prohibición de estar en contacto con la música, Miguel (voz de Anthony Gonzalez) sueña convertirse en un consumado éxito como su ídolo, Ernesto de la Cruz (voz de Benjamín Bratt). Desesperado por demostrar su talento, Miguel se encuentra en la impresionante y colorida Tierra de los Muertos siguiendo una misteriosa cadena de eventos. A lo largo del camino, conocerá al encantador y tramposo Héctor (voz de Gael García Bernal), y juntos emprenderán un viaje extraordinario para desvelar la verdad que hay detrás de la historia familiar de Miguel."
		},
		{
			'titulo': "Star Wars",
			'imagen': 'star-wars.jpg',
			'trailer': 'img/video10.PNG',
			'director': 'Rian Johnson.',
			'Reparto': 'Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega.',
			'Genero': 'Acción, aventuras, ciencia-ficción, fantasía',
			'duracion': '152 min.',
			'estreno': '15/12/17.',
			'sinopsis': "En 'Star Wars: Los últimos Jedi', la saga de Skywalker continúa mientras los héroes de 'El despertar de la fuerza' se unen a las leyendas galácticas en una aventura épica que desbloqueará viejos misterios de la Fuerza y sorprendentes revelaciones del pasado."
		},
		{
			'titulo': "El extranjero",
			'imagen': 'el-extranjero.jpg',
			'trailer': 'img/video9.png',
			'director': 'Martin Campbell.',
			'Reparto': 'Jackie Chan, Pierce Brosnan, Charlie Murphy, Katie Leung, Simon Kunz.',
			'Genero': 'Acción, drama, thriller.',
			'duracion': '114 min.',
			'estreno': '12/01/18.',
			'sinopsis': 'El Extranjero" cuenta la historia de Quan (Jackie Chan), un humilde dueño de un restaurante londinense cuyo pasado, ya enterrado, emerge cargado de venganza al perder a su hija, la única familia que le queda, en un acto terrorista con motivaciones políticas. Mientras busca a los responsables, recurre a la ayuda del Viceministro irlandés, Liam Hennessy (Pierce Brosnan), un funcionario del gobierno a quien afecta su propio pasado turbio de vinculación con el grupo terrorista IRA. Así comienza un juego del gato y el ratón con tinte político entre Quan y Hennessy, quienes deben confrontar su pasado mientras intentan identificar a los escurridizos asesinos.'
		}
	];
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
            $('.informacion #tituloPelicula')[0].setAttribute('tabindex',0);
			$('.acordeon #cartel')[0].src = "img/" + dato[i].imagen;
			$('.acordeon #CuadroImg')[0].src = dato[i].trailer;
			$('#CuadroDirector').text(dato[i].director);
			$('.acordeon #CuadroReparto').text(dato[i].Reparto);
			$('.acordeon #CuadroGenero').text(dato[i].Genero);
			$('.acordeon #CuadroDuracion').text(dato[i].duracion);
			$('.acordeon #CuadroEstreno').text(dato[i].estreno);
			$('.acordeon #CuadroSinopsis').text(dato[i].sinopsis);
		}
	}
}

function guardarLocalStorage() {
	var nombre = $('#TbNombre').val();
	var telefono = $('#TbTelefono').val();
	var email = $('#TbEmail').val();
	var puntos = parseInt($('#TbPuntos').val());
	var Npelicula = $('#tituloPelicula').text();
    
	//compruebo los datos
	if (puntos > 0 && puntos < 11) {
		if (localStorage.getItem('Votacionpelicula') != null) {
            localStorage.setItem('Votacionpelicula',localStorage.getItem('Votacionpelicula')+Npelicula +";"+nombre+";"+telefono+";"+email+";"+puntos+"/");
		} else {            
			localStorage.setItem('Votacionpelicula',Npelicula +";"+nombre+";"+telefono+";"+email+";"+puntos+"/");
		}
		google.charts.setOnLoadCallback(dibujar);
	} else {
		alert("Datos mal introducidos \n Puntos de: 1-10");
	}
}

function dibujar() {
	var data = new google.visualization.DataTable();	
	compruebaInfo();
    var select = $('#eleccion')[0];
    
	$('#formulario').hide();
	$('#charts')[0].style.display="block";
    $('#charts').focus();   
	
	data.addColumn('string', 'Películas');
	data.addColumn('number', 'Puntuación');
	
	var opciones = {
		'title':'Puntuaciones:',
		'width': '600',
		'height': '300'
	};
    
    for(var a=0; a<mostrar.length; a++){
        if(mostrar[a][2]!=0){
            var totalVotos = mostrar[a][2];
            var nombre = mostrar[a][0]+" VTotal:"+totalVotos;
            var media = Math.round(mostrar[a][1] / mostrar[a][2]);
            
            data.addRows([[nombre, media]]);
        }        
    }
	
	var chart;
    
    if(select==1){
        chart= new google.visualization.AreaChart(document.getElementById('charts'));
    }else{
        chart= new google.visualization.PieChart(document.getElementById('charts'));
    }
    
    chart.draw(data, opciones);
    
    var a = $('#charts').find('div');
    
    for(var i=0; i<a.length;i++){
        a[i].setAttribute("tabindex",0);
    }
}

function compruebaInfo(){

    var pelicula1 = ["Dando La Nota",0,0];
    var pelicula2 = ["Insidious La última llave",0,0];
    var pelicula3 = ["Jumanji",0,0];
    var pelicula4 = ["Molly's Game",0,0];
    var pelicula5 = ["El gran showman",0,0];
    var pelicula6 = ["Mazinger Z Infinity",0,0];
    var pelicula7 = ["Perfectos desconocidos",0,0];
    var pelicula8 = ["Coco",0,0];
    var pelicula9 = ["Star Wars",0,0];
    var pelicula10 = ["El extranjero",0,0];
    
    var datos_guardados = localStorage.getItem('Votacionpelicula');
    datos_guardados = datos_guardados.split('/');
    
    for(var Nfila=0;Nfila<datos_guardados.length-1;Nfila++){
        
        switch(datos_guardados[Nfila].split(';')[0]){
            case 'Dando La Nota':
                    pelicula1[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
                    pelicula1[2] += 1;
                break
                
                case 'Insidious La última llave':
                    pelicula2[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
                    pelicula2[2] += 1;
                break
                
                case 'Jumanji':
                    pelicula3[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
                    pelicula3[2] += 1;
                break
                
                 case "Molly's Game":
                    pelicula4[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
                    pelicula4[2] += 1;
                break
                
                case 'El gran showman':
                    pelicula5[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
                    pelicula5[2] += 1;
                break
                
                case 'Mazinger Z Infinity':
                    pelicula6[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
                    pelicula6[2] += 1;
                break
                
                case 'Perfectos desconocidos':
                    pelicula7[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
                    pelicula7[2] += 1;
                break
                
                case 'Coco':
                    pelicula8[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
                    pelicula8[2] += 1;
                break
                
                case 'Star Wars':
                    pelicula9[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
                    pelicula9[2] += 1;
                break
                
                case 'El extranjero':
                    pelicula10[1] += parseInt(datos_guardados[Nfila].split(';')[4]);
                    pelicula10[2] += 1;
                break
        }
    }
    
    mostrar[0]=pelicula1;
    mostrar[1]=pelicula2;
    mostrar[2]=pelicula3;
    mostrar[3]=pelicula4;
    mostrar[4]=pelicula5;
    mostrar[5]=pelicula6;
    mostrar[6]=pelicula7;
    mostrar[7]=pelicula8;
    mostrar[8]=pelicula9;
    mostrar[9]=pelicula10;
}