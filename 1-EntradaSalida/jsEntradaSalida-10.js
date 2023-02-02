/*
Agustin Conte
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	/*
	let sueldo;
	let resultado;

	sueldo = parseInt(document.getElementById("txtIdImporte").value);
	resultado = sueldo - (sueldo * 0.25);
	document.getElementById("txtIdResultado").value = resultado;
	*/

	let importe;
    let descuento;
    let cuanto

    importe = parseInt(document.getElementById("txtIdImporte").value);

    cuanto = prompt("¿Cuanto descuento quiere? (sin el simbolo %)");



    document.getElementById("txtIdResultado").value = importe - (importe * (cuanto / 100)) + "%";
}
