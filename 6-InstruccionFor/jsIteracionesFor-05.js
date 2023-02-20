function mostrar()
{
/*	let entrada;
	let i;
	
	
	for (;;) {
		entrada = parseInt( prompt("Ingrese un numero (escriba 9 para salir): "));
		while(isNaN(entrada)){
            entrada = parseInt(prompt("ERROR : ingresa un numero"));
        }
		if (entrada == "9") {
		  break;
		}
		console.log(entrada);
	  }
	 
	  ---------------------------------------------------------------------*/

	let nota;
	let sexo;
	let promedio;
	let varones;
	let desaprobados;
	let acumulador;
	let bandera;
	let menorNota;
	let sexoBajo;


	bandera = true;
	desaprobados = 0
	varones = 0
	acumulador = 0
	for(i=0; i < 2; i++){

		nota = parseInt(prompt("ingrese nota"));
		while(isNaN(nota) || nota > 10 || nota < 0 ){
			nota = parseInt(prompt("ERROR : ingresa un numero"));
		}
		sexo = prompt("ingrese sexo");
		while(sexo != "m" && sexo != "f" && sexo != "b"){
			sexo = (prompt("ERROR : ingrese f, m o b"));
		}

		acumulador = acumulador + nota

		if(sexo == "f"){
			sexo = "femenino";
		}

		if(sexo == "m"){
			sexo = "masculino";
		}

		if(sexo == "b"){
			sexo = "binario";
		}

		if(nota >= 6 && sexo == "masculino"){
			varones = varones + 1;
		}

		if(nota < 4){
			desaprobados = desaprobados + 1;
		}

		if(bandera == true){
			menorNota = nota;
			sexoBajo = sexo;
			bandera = false;
		}
		else if(nota < menorNota){
			nota = menorNota;
			sexo = sexoBajo;
		}
	}
	promedio = acumulador / i
	console.log("El promedio de las notas es: "+promedio);
	console.log("La cantidad de varones con nota 6 o mayor son: " +varones);
	console.log("La cantidad de desaprobados son: " +desaprobados);
	console.log("La menor nota fue: " +menorNota+ " del sexo " +sexoBajo);
}//FIN DE LA FUNCIÓN