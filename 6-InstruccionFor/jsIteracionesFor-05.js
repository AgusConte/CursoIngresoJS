function mostrar()
{
	let numeroIngresado;
	let terminar;

	numeroIngresado = parseInt(prompt("cuantas veces quiere repetir?"))

	for(i = numeroIngresado; i > -1; i--){
		terminar = (prompt("quiere terminar? coloque 9 si es asi"))
		if(i == 9){
			break;
		}
		console.log(i);
	}

}//FIN DE LA FUNCIÓN