/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	/*

	n++    =     n = n + 1

----------------------------------------------------------------

	let n

	n = 0

	while(n < 11)
	{n++;
	alert(n);}

--------------------------------------------------------------------


	let i;
	let nuemrosImpares;
	let nuemrosPares;
	let sumaImpares;
	let sumaPares;
	let mayorImpares;
	let mayorNumero;

	i = 0
	nuemrosImpares = 0
	nuemrosPares = 0
	sumaImpares = 0
	sumaPares = 0
	mayorImpares = 1
	mayorNumero = 0

	while(i < 126){

		if(i % 2 !=0){
			nuemrosImpares = nuemrosImpares + 1
			sumaImpares = sumaImpares + i
			if( i > mayorImpares){
				mayorImpares = i
			}
			else{
				console.log("no funciona")
			}
		}
		else{
			nuemrosPares = nuemrosPares + 1
			sumaPares = sumaPares + i
		}

		i = i + 1;

		console.log(i);
	}

	if( i > mayorNumero){
		mayorNumero = i
	}
	else{
		console.log("no funciona")
	}

	console.log( "nuemrosImpares: " +nuemrosImpares);
	console.log( "nuemrosPares: " +nuemrosPares);
	console.log( "sumaImpares: " +sumaImpares);
	console.log( "sumaPares: " +sumaPares);
	console.log( "mayorImpares: " +mayorImpares);
	console.log( "mayorNumero: " +mayorNumero);

------------------------------------------------------------------------*/

let bandera;
	let numeroIngresado;
	let nombre;
	let numeroMaximo;
	let numeroMinimo;
	let nombreMaximo;
	let nombreMinimo;
	let respuesta;
	//iniciar variables
	
	bandera = true
	respuesta="si";
	numeroMaximo = -Infinity;
	numeroMinimo = Infinity;

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" ||respuesta == "sI"){
		numeroIngresado = parseInt(prompt("ingrese numero"));
		nombre = prompt("ingrese nombre");
		while(isNaN(numeroIngresado)  || numeroIngresado < 0 || numeroIngresado > 120){
			numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
		}
	
		if(bandera == true){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			nombreMaximo = nombre;
			nombreMinimo = nombre;
			bandera = false;
		}

		else if( numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
			nombreMaximo = nombre;
		}
	
		else if( numeroIngresado < numeroMinimo ){
			numeroMinimo= numeroIngresado;
			nombreMinimo = nombre;
		}
		
		respuesta = prompt("Desea continuar? (coloque Si)");
	
	}

	
	alert( nombreMaximo + " es el mas viejo porque tiene " +numeroMaximo  );
	alert(nombreMinimo + " es el mas joven porque tiene " + numeroMinimo);	


}//FIN DE LA FUNCIÓN