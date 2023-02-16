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
		//Definir variables para almacenar los datos ingresados
		var edadIngresada;
		var sexoIngresado;
		var estadoCivilIngresado;
		var sueldoBrutoIngresado;
		var numLegajoIngresado;
		var nacionalidadIngresada;
	  
		//Solicitar y validar la edad
		do {
		  edadIngresada = parseInt(prompt("Ingrese su edad (entre 18 y 90 años inclusive):"));
		} while (edadIngresada < 18 || edadIngresada > 90);
	  
		//Solicitar y validar el sexo
		do {
		  sexoIngresado = prompt("Ingrese su sexo (M para masculino o F para femenino):").toUpperCase();
		} while (sexoIngresado !== "M" && sexoIngresado !== "F");
	  
		//Solicitar y validar el estado civil
		do {
		  estadoCivilIngresado = parseInt(prompt("Ingrese su estado civil (1: soltero, 2: casado, 3: divorciado, 4: viudo):"));
		} while (estadoCivilIngresado < 1 || estadoCivilIngresado > 4);
	  
		//Solicitar y validar el sueldo bruto
		do {
		  sueldoBrutoIngresado = parseInt(prompt("Ingrese su sueldo bruto (no menor a 8000):"));
		} while (sueldoBrutoIngresado < 8000);
	  
		//Solicitar y validar el número de legajo
		do {
		  numLegajoIngresado = parseInt(prompt("Ingrese su número de legajo (numérico de 4 cifras, sin ceros a la izquierda):"));
		} while (numLegajoIngresado < 1000 || numLegajoIngresado > 9999 || numLegajoIngresado.toString().charAt(0) === "0");
	  
		//Solicitar y validar la nacionalidad
		do {
		  nacionalidadIngresada = prompt("Ingrese su nacionalidad (A para argentinos, E para extranjeros, N para nacionalizados):").toUpperCase();
		} while (nacionalidadIngresada !== "A" && nacionalidadIngresada !== "E" && nacionalidadIngresada !== "N");
	  
		//Asignar los datos ingresados a cuadros de texto
		document.getElementById("txtEdad").value = edadIngresada;
		document.getElementById("txtSexo").value = sexoIngresado;
		document.getElementById("txtEstadoCivil").value = estadoCivilIngresado;
		document.getElementById("txtSueldoBruto").value = sueldoBrutoIngresado;
		document.getElementById("txtNumLegajo").value = numLegajoIngresado;
		document.getElementById("txtNacionalidad").value = nacionalidadIngresada;
	  

}
