/*
Agustin Conte
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let resultado;
	let descuento;

	descuento = 10

	sueldo = parseInt(document.getElementById("txtIdSueldo").value);
	resultado = sueldo + (sueldo * descuento / 100);
	document.getElementById("txtIdResultado").value = resultado;


}
