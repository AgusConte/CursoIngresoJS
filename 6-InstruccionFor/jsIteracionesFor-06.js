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
		if(i%2 == 0){
			console.log(i);
			contador ++;
		}
		
	}
	
	console.log("hay "+ contador +" numeros pares")



}//FIN DE LA FUNCIÓN