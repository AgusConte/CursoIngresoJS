function mostrar()
{
	let edad;
	let estadoCivil;

	edad = parseInt(document.getElementById("txtIdEdad").value);
	estadoCivil = document.getElementById("estadoCivil").value;


	if(edad > -1){
		if (edad >= 18 && estadoCivil == "Soltero")
		{alert("Es soltero y no es menor");}

		else{console.log("x")}
	}
	else(alert("No es una edad valida"))
	

}//FIN DE LA FUNCIÓN