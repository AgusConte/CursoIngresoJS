function mostrar()
{
	let numeroIngresado;
	let contador;

	contador = 0

	numeroIngresado = parseInt(prompt("ingrese numero"));
	while(isNaN(numeroIngresado)){
		numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
	}
	for(i = 1; i <= numeroIngresado; i++ ){
		if(numeroIngresado % i == 0){
			console.log(i);
			contador ++;
		}
		
	}
	
	console.log("hay "+ contador +" divisores")

}//FIN DE LA FUNCIÓN