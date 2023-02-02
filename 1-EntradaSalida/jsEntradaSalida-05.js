/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	/*
	let nombreIngresado;
	let edadIngresada;
	let mensaje;

	nombreIngresado = document.getElementById("txtIdNombre").value;
	edadIngresada = document.getElementById("txtIdEdad").value;

	mensaje = "Usted se llama "+ nombreIngresado +" y tiene "+ edadIngresada +" años";

	alert(mensaje);
	*/

	let nombre;
    let edad;
    let mensaje;
    let apellido


    apellido = prompt("Ingrese su apellido");
    nombre = document.getElementById("txtIdNombre").value;
    edad = document.getElementById("txtIdEdad").value;
    mensaje = apellido + ", usted se llama " + nombre + " y tiene " + edad + " años";

    alert(mensaje);

}

