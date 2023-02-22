
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let menorCantidad;
	let menorPrecio;
	let menorFabricante;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let banderaAlcohol;
	let banderaUnidades;
	let promedio;
	let cantidadJabones;
	let x;
	

	banderaAlcohol = true;
	banderaUnidades = true;
	cantidad = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;

	for(i = 0; i < 5; i++){
		tipo = prompt("ingrese si su producto es un barbijo, jabon o alcohol");
		while(tipo != "barbijo" && tipo != "jabon" && tipo != "alcohol"){
			tipo = prompt("ERROR: ingrese si su producto es un barbijo, jabon o alcohol")
		}

		precio = parseInt(prompt("ingrese el precio"));
		while(isNaN(precio) || precio < 100 || precio > 300){
			precio = parseInt(prompt("ERROR: el precio debe ser entre 100 y 300"));
		}

		cantidad = parseInt(prompt("ingrese el cantidad"));
		while(isNaN(cantidad) || cantidad < 0 || cantidad > 1000){
			cantidad = parseInt(prompt("ERROR: el cantidad debe ser mayor a 0 y menor de 1000"));
		}

		marca = prompt("ingrese la marca del producto");

		fabricante = prompt("Ingrese el fabricante del producto");

		
		if (tipo == "alcohol") {
			if (banderaAlcohol == true) {
				menorPrecio = precio;
				menorCantidad = cantidad;
				menorFabricante = fabricante;
				banderaAlcohol = false;
			}
			else if (tipo == "alcohol" && menorPrecio > precio) {
				menorPrecio = precio;
				menorCantidad = cantidad;
				menorFabricante = fabricante;
			}

		}

		if(tipo == "alcohol"){
			acumuladorAlcohol = acumuladorAlcohol + cantidad;
			contadorAlcohol = contadorAlcohol + 1;
		}

		if(tipo == "barbijo"){
			acumuladorBarbijo = acumuladorBarbijo + cantidad;
			contadorBarbijo = contadorBarbijo + 1;
		}

		if(tipo == "jabon"){
			acumuladorJabon = acumuladorJabon + cantidad;
			contadorJabon = contadorJabon + 1;
		}

		if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon){
			promedio = acumuladorAlcohol / contadorAlcohol
		}
		else if(acumuladorBarbijo > acumuladorAlcohol && acumuladorBarbijo > acumuladorJabon){
			promedio = acumuladorBarbijo / contadorBarbijo
		}
		else if(acumuladorJabon > acumuladorAlcohol && acumuladorJabon > acumuladorBarbijo){
			promedio = acumuladorJabon / contadorJabon
		}



	}

	cantidadJabones = acumuladorJabon




	alert("el a mas barato salio: $"+menorPrecio+", del fabricante: "+menorFabricante+ ", y son "+menorCantidad + " unidades");
	alert("el promedio del tipo de producto con mas unidades es: "+promedio);
	alert("la cantidad de jabones totales es: " + cantidadJabones);


}
