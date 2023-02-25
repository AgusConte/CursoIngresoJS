function mostrar()
{
	let nombre;
	let edad;
	let sexo;
	let nacionalidad;
	let estadoCivil;
	let temperaturaCorporal;
	let mayorTemperatura;
	let nacinalidadMayorTemperatura;
	let banderaTemperatura;
	let contadorSolteros;
	let contadorMujeresSolteroViudo;
	let contadorAbuelosTemperaturaAlta; 
	let promedioEdad; 
	let acumuladorEdadMujeresSolteras; 
	let respuesta; 
	let contadorCasadas;

	contadorCasadas = 0;
	banderaTemperatura == true;
	mayorTemperatura = 0; 
	contadorAbuelosTemperaturaAlta = 0;
	contadorMujeresSolteroViudo = 0; 
	contadorSolteros = 0; 
	acumuladorEdadMujeresSolteras = 0; 
	contadorSolteros = 0; 
	respuesta = "si";

	while(respuesta == "si")
	{
		nombre = prompt("Ingrese su nombre");
		while(!isNaN(nombre))
		{
			nombre = prompt("ERROR Ingrese su nombre");
		}

		edad = parseInt(prompt("Ingrese su edad"))
		while(isNaN(edad) || edad < 1 || edad > 110)
		{
			edad = prompt("ERROR Ingrese su edad");
		}

		sexo = prompt("Ingrese f (femenino) o m (masculino)");
		while(!isNaN(sexo) && sexo != "f" && sexo != "F" && sexo != "m" && sexo != "M")
		{
			sexo = prompt("ERROR Ingrese f (femenino) o m (masculino)");
		}

		nacionalidad = prompt("ingrese su nacionalidad");

		estadoCivil = prompt("Ingrese su estado civil (soltero, casado o viudo)"); 
		while(!isNaN(estadoCivil) && estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "viudo" && estadoCivil != "Soltero" && estadoCivil != "Casado" && estadoCivil != "Viudo")
		{
			estadoCivil = prompt("ERROR Ingrese su estado civil (soltero, casado o viudo)"); 

		}

		temperaturaCorporal = parseFloat(prompt("Ingrese su temperatura"));
		while(isNaN(temperaturaCorporal) || temperaturaCorporal < 30 || temperaturaCorporal > 45)
		{
			temperaturaCorporal = parseFloat(prompt("ERROR Ingrese su temperatura"));

		}
		 

		if(sexo == "m" || sexo == "M")
		{
			sexo = "masculino"; 
			
		}else 
		{
			sexo = "femenino";
		}

		if(banderaTemperatura == true || mayorTemperatura < temperaturaCorporal)
		{
			mayorTemperatura = temperaturaCorporal; 
			nacinalidadMayorTemperatura = nacionalidad; 
			banderaTemperatura = false; 
		}

		switch(estadoCivil)
		{
			case "soltero":
				if(sexo == "F" || sexo == "f")
				{
					contadorMujeresSolteroViudo = contadorMujeresSolteroViudo + 1; 
					
				}
				if( edad > 17)
				{
					contadorSolteros = contadorSolteros + 1; 
				}
				break;
			case "casado":
				if(sexo == "f" || sexo == "F"){
					acumuladorEdadMujeresSolteras = acumuladorEdadMujeresSolteras + edad; 
					contadorCasadas = contadorCasadas + 1; 
				}
				break;

			case "viudo": 
				if(sexo == "f" || sexo == "F")
				{
					contadorMujeresSolteroViudo = contadorMujeresSolteroViudo + 1; 
				}
				
				break; 
		}

		if(edad > 60 && temperaturaCorporal > 38)
		{
			contadorAbuelosTemperaturaAlta = contadorAbuelosTemperaturaAlta + 1;
		}

		respuesta = prompt("¿Desea continuar? si / no");

	}

	promedioEdad = acumuladorEdadMujeresSolteras / contadorCasadas; 	


	console.log("la nacionalidad de la persona con mas temperatura es: " + nacinalidadMayorTemperatura);
	console.log(contadorSolteros + " es la cantidad de mayores de edad solteros"); 
	console.log("La cantidad de mujeres solteras o viudas es: " + contadorMujeresSolteroViudo);
	console.log(contadorAbuelosTemperaturaAlta + " es la cantidad de gente de la tercera edad con temperatura mayor a 38°");
	console.log("Promedio de edad entre las mujeres casadas es: " + promedioEdad); 
}

