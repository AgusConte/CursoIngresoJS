/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	
	respuesta="si";
	numeroMaximo = -Infinity;
	numeroMinimo = Infinity;

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" ||respuesta == "sI"){
		numeroIngresado = parseInt(prompt("ingrese numero"));
	
		if( numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}
		else{
			console.log("no funciona")
		}
	
		if( numeroIngresado < numeroMinimo ){
			numeroMinimo= numeroIngresado;
		}
		else{
			console.log("no funciona")
		}
	
		respuesta = prompt("Desea continuar? (coloque Si)");
	
	}

	
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN