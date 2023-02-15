function mostrar()
{
	/*let i;
	let contador;
	let acumulador;
	let promedio;
	let numeroIngresado;

	i = 0;
	contador=0;
	acumulador=0;
	numeroIngresado = 0;

	
	while(i < 5){
		i = i + 1;
		numeroIngresado = parseInt(prompt("ingresa un numero"));
		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
		}
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}

	promedio = acumulador / contador

	document.getElementById("txtIdSuma").value = acumulador
	document.getElementById("txtIdPromedio").value = promedio*/


	
	let contador;
	let acumulador;
	let promedio;
	let numeroIngresado;

	
	contador=0;
	acumulador=0;
	numeroIngresado = 0;

	
	for(let i = 0;   i < 5;  i++){
		
		numeroIngresado = parseInt(prompt("ingresa un numero"));
		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
		}
		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;
	}

	promedio = acumulador / contador

	document.getElementById("txtIdSuma").value = acumulador
	document.getElementById("txtIdPromedio").value = promedio



}//FIN DE LA FUNCIÓN