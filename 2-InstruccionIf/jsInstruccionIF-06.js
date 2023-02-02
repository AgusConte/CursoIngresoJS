function mostrar()
{
	let edad

	edad = document.getElementById("txtIdEdad").value;

    if (edad >17) 
	{ alert("Es adulto"); } 
	else if (edad >= 13 && edad <=17)
	{alert("Es adolescente"); }
	else {alert("Es niño")};

}//FIN DE LA FUNCIÓN