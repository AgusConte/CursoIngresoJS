/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1;
	let numero2;
	let suma;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	suma = numero1 + numero2

	mensaje = suma

	alert(mensaje);	
}

function restar()
{
	let numero1;
	let numero2;
	let resta;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	resta = numero1 - numero2

	mensaje = resta

	alert(mensaje);
}

function multiplicar()
{ 
	let numero1;
	let numero2;
	let multiplicar;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	multiplicar = numero1 * numero2

	mensaje = multiplicar

	alert(mensaje);
}

function dividir()
{
	let numero1;
	let numero2;
	let dividir;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	numero2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	dividir = numero1 / numero2

	mensaje = dividir

	alert(mensaje);
}

