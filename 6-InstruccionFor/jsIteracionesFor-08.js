function mostrar() {
	let numeroIngresado;
	let esPrimo;
  
	esPrimo = true;
	numeroIngresado = parseInt(prompt("Ingrese un número: "));
  
	while (isNaN(numeroIngresado)) {
	  numeroIngresado = parseInt(prompt("ERROR: Ingresa un número"));
	}
  
	for (let i = 2; i <= numeroIngresado / 2; i++) {
	  if (numeroIngresado % i === 0) {
		esPrimo = false;
		break;
	  }
	}
  
	if (esPrimo) {
	  console.log(numeroIngresado + " es primo");
	} else {
	  console.log(numeroIngresado + " no es primo");
	}
  }