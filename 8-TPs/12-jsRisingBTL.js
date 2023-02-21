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
		
	


		
	document.getElementById("txtEdad").value = edad;
	document.getElementById("txtSexo").value = sexo;
	document.getElementById("txtEstadoCivil").value = estadoCivil;
	document.getElementById("txtSueldoBruto").value = sueldoBruto;
	document.getElementById("txtNumLegajo").value = numLegajo;
	document.getElementById("txtNacionalidad").value = nacionalidad;
	  

}
