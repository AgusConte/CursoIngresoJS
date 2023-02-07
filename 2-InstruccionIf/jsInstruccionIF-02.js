function mostrar()
{
	let edad

	edad = parseInt(document.getElementById("txtIdEdad").value);

    if (edad >= 18) 
	{ alert("Informar"); } 
	else {console.log("no es mayor de edad"); };

}//FIN DE LA FUNCIÓN