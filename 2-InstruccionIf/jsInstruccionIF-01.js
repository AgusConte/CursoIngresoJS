function mostrar()
{
	/*let edad;
	
	edad = parseInt(document.getElementById("txtIdEdad").value);

    if (edad == 15) 
	{alert("Hola niña bonita");} 
	else {alert("Hola");}
	
	-------------------------------------------------

	let  tiempoHoras = parseInt(prompt("Cuantas horas tardo?"));
	let distanciaRecorrida = parseInt(document.getElementById("txtIdEdad").value);
	let kmXHora = distanciaRecorrida / tiempoHoras;

	  
	if(kmXHora <= 60)
	{mensaje ="Demasiado lento"}

	else if(kmXHora <= 80)
	{mensaje ="Lento"}

	else if(kmXHora <= 100)
	{mensaje ="Rapido"}

	else if(kmXHora <= 120)
	{mensaje ="Ahi de la ley"}

	else{mensaje ="Eso no se hace."}


	alert(mensaje) */
	

	
	let nombre;
	let peso;
	let altura;
	let imc;
	let mensaje;

	nombre = (document.getElementById("txtIdEdad").value);
	peso = parseFloat(prompt("ingresar peso en kilos"));
	altura = parseFloat(prompt("ingresar altura en metros"));
	imc = peso / (altura * altura)


	if(imc < 18.5)
	{mensaje = nombre +" tiene bajo peso"}

	else if(imc >= 18.5 && imc <= 24.9)
	{mensaje = nombre +" tiene un peso normal"}

	else if(imc >= 25 && imc <= 26.9)
	{mensaje = nombre +" tiene Preobesidad"}

	else if(imc >= 27 && imc <= 29.9)
	{mensaje = nombre +" tiene Obesidad 1"}

	else if(imc >= 30 && imc <= 34.9)
	{mensaje = nombre +" tiene Obesidad 2"}

	else if(imc > 40)
	{mensaje = nombre +" tiene Obesidad 3"}

	alert(mensaje)

}