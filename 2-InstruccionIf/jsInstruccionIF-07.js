function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;


	if(edad > -1){
		if (edad < 18 && estadoCivil != "Soltero")
		{alert("Es muy pequeño para NO ser soltero");}

		else{console.log("edad valida")}
	}
	else(alert("No es una edad valida"))
	


}//FIN DE LA FUNCIÓN