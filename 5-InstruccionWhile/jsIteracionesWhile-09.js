/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	/*
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let respuesta;
	//iniciar variables
	
	banderaDelPrimero = true
	respuesta="si";
	numeroMaximo = -Infinity;
	numeroMinimo = Infinity;

	while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" ||respuesta == "sI"){
		numeroIngresado = parseInt(prompt("ingrese numero"));
		while(isNaN(numeroIngresado)){
			numeroIngresado = parseInt(prompt("ERROR : ingresa un numero"));
		}
	
		if(banderaDelPrimero == true){
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = false;
		}

		else if( numeroIngresado > numeroMaximo){
			numeroMaximo = numeroIngresado;
		}
	
		else if( numeroIngresado < numeroMinimo ){
			numeroMinimo= numeroIngresado;
		}
		
		respuesta = prompt("Desea continuar? (coloque Si)");
	
	}

	
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;


-----------------------------------------------------------------------------*/
	let banderaDelPrimero;
	let numeroIngresado;
	let numeroMaximo;
	let numeroMinimo;
	let menorPar;
	let mayorNegativos;
	let respuesta;
	let banderaMayorNegativos;
	let banderaPar;
	//iniciar variables
	
	banderaDelPrimero= true;
    banderaPar = true;
    banderaMayorNegativos = true; 
    respuesta='si';
    numeroMaximo = -Infinity; 
    numeroMinimo = Infinity; 
    menorPar = Infinity; 
    mayorNegativos = -Infinity;

    while(respuesta=="si")  //while principal 
    {
        numeroIngresado = parseInt(prompt("ingresa un numero"));

        while (isNaN(numeroIngresado)) 
        {
            numeroIngresado = parseInt(prompt("ERROR: ingresa un numero"));
        }
        if (banderaDelPrimero == true) 
        {
            numeroMaximo = numeroIngresado;
            numeroMinimo = numeroIngresado;
            banderaDelPrimero = false; 
        }
        else if(numeroIngresado > numeroMaximo) //numeroIngresado > numeroMaximo
        {
            numeroMaximo = numeroIngresado;
        }
        else if(numeroIngresado < numeroMinimo)
        {
            numeroMinimo = numeroIngresado; 
        }

        if(numeroIngresado % 2 == 0)
        {
            if(banderaPar == true || menorPar > numeroIngresado)
            {
                menorPar = numeroIngresado;
                banderaPar = false; 
            }

        }
        else if( numeroIngresado < 0){
            if(banderaMayorNegativos == true || numeroIngresado > mayorNegativos)
            {
                mayorNegativos = numeroIngresado; 
                banderaMayorNegativos = false; 
            }
        }
        respuesta=prompt("desea continuar? si/no");
    }

    alert("Su mayor negativo es " + mayorNegativos); 
    alert("Su menor par es " + menorPar);
    document.getElementById("txtIdMaximo").value = numeroMaximo
    document.getElementById("txtIdMinimo").value = numeroMinimo

}//FIN DE LA FUNCIÓN