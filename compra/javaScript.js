var myJSON;

$(document).ready(function () {

	$('.Gboton').on('click', guardar);

	cargarJson();
	
	if(localStorage.getItem('patron')!=null){
		mostrarButacas();
	}else{
		mostrarButacasJson();
	}
});

function cargarJson() {

	var text = '{"butacas":[' +
		'{"x":"15","href":"sym01","y":"0","estado":"libre","id":"f1c1"},' +
		'{"x":"160","href":"sym01","y":"0","estado":"libre","id":"f1c2" },' +
		'{"x":"300","href":"sym01","y":"0","estado":"libre","id":"f1c3" },' +
		'{"x":"15","href":"sym01","y":"150","estado":"ocupado","id":"f2c1" },' +
		'{"x":"160","href":"sym01","y":"150","estado":"ocupado","id":"f2c2" },' +
		'{"x":"300","href":"sym01","y":"150","estado":"ocupado","id":"f2c3" },' +		
		'{"x":"15","href":"sym01","y":"300","estado":"libre","id":"f3c1" },' +		
		'{"x":"160","href":"sym01","y":"300","estado":"libre","id":"f3c2" },'+
		'{"x":"300","href":"sym01","y":"300","estado":"libre","id":"f3c3" }]}';
	
	if(localStorage.getItem('patron')!=null){
		myJSON = JSON.parse(localStorage.getItem('patron'));
	}else{
		myJSON = JSON.parse(text);
	}
}

function mostrarButacasJson() {

	var svgns = "http://www.w3.org/2000/svg";
	var xlinkns = "http://www.w3.org/1999/xlink";
	var g = document.getElementById("mapa");

	for (let i = 0; i < 9; i++) {

		var use = document.createElementNS(svgns, "use");
		use.setAttributeNS(xlinkns, "href", "#sym01");
		use.setAttribute("y", myJSON.butacas[i].y);
		use.setAttribute("x", myJSON.butacas[i].x);
		use.setAttribute("height", "200");
		use.setAttribute("width", "200");
		use.setAttribute("class", myJSON.butacas[i].estado);
		use.setAttribute("onclick", "color(this)");
		use.setAttribute("title", "butaca");
		use.setAttribute("id",myJSON.butacas[i].id)
		g.appendChild(use);

	}
}

function mostrarButacas() {

	var svgns = "http://www.w3.org/2000/svg";
	var xlinkns = "http://www.w3.org/1999/xlink";
	var g = document.getElementById("mapa");

	for (let i = 0; i < 9; i++) {

		var use = document.createElementNS(svgns, "use");
		use.setAttributeNS(xlinkns, "href", "#sym01");
		use.setAttribute("y", myJSON[i].y);
		use.setAttribute("x", myJSON[i].x);
		use.setAttribute("height", "200");
		use.setAttribute("width", "200");
		use.setAttribute("class", myJSON[i].estado);
		use.setAttribute("onclick", "color(this)");
		use.setAttribute("title", "butaca");
		use.setAttribute("id",myJSON[i].id)
		g.appendChild(use);

	}
}

function guardar() {
	
	if($('.reservado').length==0){
		mensaje('Cuidado', 'Necestio que al menos selecciones una butaca');
	}else{
		
		if(localStorage.getItem('reserva')!=null){
			localStorage.setItem('reserva') = JSON.stringify(myJSON);
		}else{
			obtenerButacas();
		}
		
		mensaje('Dato Guardado', 'Se ha guardado el registro correctamente en localStorage');
	}	
}

function obtenerButacas(){
	var Lista = [];
	var Nuse = $('use');
	
	for(var i = 1; i<Nuse.length; i++){
		var patron = {
			"x":Nuse[i].getAttribute('x'),					  
			"href":Nuse[i].getAttribute('href'),
			"y":Nuse[i].getAttribute('y'),
			"estado":Nuse[i].getAttribute('class'),
			"id":Nuse[i].getAttribute('id')
		}
	
		Lista.push(patron);
	}	
	
	localStorage.setItem('patron',JSON.stringify(Lista))
}

function color(objeto) {
	var opcion = objeto.getAttribute("class");

	switch (opcion) {
		case "libre":
			objeto.setAttribute("class","reservado")
			mensaje("Reservada la butaca " + objeto.id,"<strong>Añadida</strong> una butaca en reserva. <br>Pulsa <strong>Guardar</strong> para corroborar tu elección.");
			
			console.log(objeto.id)
			break;
		
		case "reservado":
			objeto.setAttribute("class","libre")
			mensaje("Aviso","Has <strong>desmarcado</strong> una butaca de tu reserva");
			break;
			
		case "ocupado":
			objeto.setAttribute("class","ocupado")
			mensaje("Lo Sentimo","Esa butaca ya esta <strong>Cogída</strong> puedes elegir otra opción");
			break;			
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
