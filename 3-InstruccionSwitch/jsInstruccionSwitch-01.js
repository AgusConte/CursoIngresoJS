function mostrar()
{
	//tomo el mes
	let mesDelAño =document.getElementById("txtIdMes").value;

	switch(mesDelAño){
		case "Enero":
			alert("Que comienzes bien el año!!!");
		break;

		case "Marzo":
			alert("A clases!!!");
		break;

		case "Julio":
			alert("Se vienen las vacaciones!!!");
		break;

		case "Diciembre":
			alert("Felices fiestas!!!");
		break;

		default:
			alert("mes comun");
		break;
	}



}//FIN DE LA FUNCIÓN