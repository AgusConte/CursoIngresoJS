/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	
	banderaDelPrimero = true
	respuesta="si";
	numeroMaximo = -Infinity;
	numeroMinimo = Infinity;

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" ||respuesta == "sI"){
		numeroIngresado = parseInt(prompt("ingrese numero"));
		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
		}
	
		if(banderaDelPrimero == true){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}

		else if( numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}
	
		else if( numeroIngresado < numeroMinimo ){
			numeroMinimo= numeroIngresado;
		}
		
		respuesta = prompt("Desea continuar? (coloque Si)");
	
	}

	
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}//FIN DE LA FUNCIÓN