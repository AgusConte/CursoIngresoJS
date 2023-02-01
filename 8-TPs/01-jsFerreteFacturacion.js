/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let numero1;
	let numero2;
    let numero3;
	let suma;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);
	suma = numero1 + numero2 + numero3;

	mensaje = "El resultado es "+ suma;

	alert(mensaje)
}
function Promedio () 
{
	
	let numero1;
	let numero2;
    let numero3;
	let promedio;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    promedio = (numero1 + numero2 + numero3)/3;

	mensaje = "El resultado es "+ promedio;

	alert(mensaje)
}
function PrecioFinal () 
{
	let numero1;
	let numero2;
    let numero3;
    let precio;
	let precioFinal;
	let mensaje;

	numero1 = parseInt(document.getElementById("txtIdPrecioUno").value);
	numero2 = parseInt(document.getElementById("txtIdPrecioDos").value);
    numero3 = parseInt(document.getElementById("txtIdPrecioTres").value);
    precio = (numero1 + numero2 + numero3);
    precioFinal = precio + (precio * 0.21)

	mensaje = "El resultado es "+ precioFinal;

	alert(mensaje)
}