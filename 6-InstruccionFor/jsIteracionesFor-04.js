function mostrar()
{
	let terminar;

	for(i = 1; i > 0; i++){
		terminar = (prompt("quiere terminar? coloque break si es asi"))
		if(terminar == "break"){
			break;
		}
		console.log(i);
	}

}//FIN DE LA FUNCIÓN