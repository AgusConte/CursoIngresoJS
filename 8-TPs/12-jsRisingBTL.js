/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
	let edad;
	let sexo;
	let estadoCivil;
	let sueldoBruto;
	let numLegajo;
	let nacionalidad;
		
	edad = parseInt(prompt("ingrese su edad"))
	while(isNaN(edad) || edad < 18 || edad > 90){
		edad = parseInt(prompt("ERROR: ingrese una edad entre 18 y 90 años"))
	}
	
	sexo = prompt("ingrese su sexo: “M” para masculino y “F” para femenino")
	while(sexo != "f"&& sexo != "m"){
		sexo = (prompt("ERROR: ingrese f o m"))
	}

	estadoCivil = prompt("ingrese su estado civil: 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos")
	while(estadoCivil != "1" && estadoCivil != "2" && estadoCivil != "3" && estadoCivil != "4"){
		estadoCivil = (prompt("ERROR: ingrese 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"))
	}

	sueldoBruto = parseInt(prompt("ingrese su sueldo bruto"))
	while(isNaN(sueldoBruto) || sueldoBruto < 8000){
		sueldoBruto = parseInt(prompt("ERROR: su sueldo bruto tiene que se mayor a 8000"))
	}

	numLegajo = parseInt(prompt("ingrese su numero de legajo"))
	while(isNaN(numLegajo) || numLegajo < 1000 || numLegajo > 9999){
		numLegajo = parseInt(prompt("ERROR: su numero de legajo no puede ser menor a 1000"))
	}

	nacionalidad = prompt("ingrese su nacionalidad: “a” para argentinos, “e” para extranjeros, “n” para nacionalizados")
	while(nacionalidad != "a"&& nacionalidad != "e" && nacionalidad != "n"){
		nacionalidad = (prompt("ERROR: ingrese “a” para argentinos, “e” para extranjeros, “n” para nacionalizados"))
	}

	if(sexo == "f"){
		sexo = "femenino";
	}

	if(sexo == "m"){
		sexo = "Masculino";
	}

	if(estadoCivil == "1"){
		estadoCivil = "Soltero";
	}

	if(estadoCivil == "2"){
		estadoCivil = "Casado";
	}

	if(estadoCivil == "3"){
		estadoCivil = "Divorciado";
	}

	if(estadoCivil == "4"){
		estadoCivil = "Viudos";
	}

	if(nacionalidad == "a"){
		nacionalidad = "Argentino";
	}

	if(nacionalidad == "e"){
		nacionalidad = "Extranjeros";
	}

	if(nacionalidad == "n"){
		nacionalidad = "Nacionalizados";
	}

		
	document.getElementById("txtIdEdad").value = edad;
	document.getElementById("txtIdSexo").value = sexo;
	document.getElementById("txtIdEstadoCivil").value = estadoCivil;
	document.getElementById("txtIdSueldo").value = sueldoBruto;
	document.getElementById("txtIdLegajo").value = numLegajo;
	document.getElementById("txtIdNacionalidad").value = nacionalidad;
	  

}
