/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	/*
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


-----------------------------------------------------------------------------*/

let numeroIngresado;
let numeroMaximo;
let numeroMinimo;
let menorPar;
let mayorNegativo;
let respuesta;

maximo = -Infinity;
minimo = Infinity;
menorPar = Infinity;
mayorNegativo = -Infinity;
respuesta = "si"


while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" ||respuesta == "sI"){
	numeroIngresado = parseInt(prompt("ingrese numero"));
	while(isNaN(numeroIngresado)){
		numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
	}
	respuesta = prompt("¿Desea continuar ingresando números? (coloque si)");

	
	if( numeroIngresado > numeroMaximo){
		numeroMaximo = numeroIngresado;
	}

	else if( numeroIngresado < numeroMinimo ){
		numeroMinimo = numeroIngresado;
	}

}


document.getElementById("txtIdMaximo").value=numeroMaximo;
document.getElementById("txtIdMinimo").value=numeroMinimo;


alert("El menor de los pares es: " + menorPar);
alert("El mayor de los negativos es: " + mayorNegativo);


}//FIN DE LA FUNCIÓN