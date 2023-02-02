/*
Agustin Conte
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/

function mostrar()
{
	/*
	let nombreIngresado;
	let mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value;

	mensaje = "su nombre es: "+ nombreIngresado;

	alert(mensaje);
*/

let numeroIngresado;
let descripcion;
let valorAumento;


numeroIngresado = parseInt(document.getElementById("txtIdNombre").value);
descripcion = prompt("Descripción de producto");

valorAumento = numeroIngresado + (numeroIngresado * 0.30);




alert(descripcion + " " + "$" + valorAumento);
}


