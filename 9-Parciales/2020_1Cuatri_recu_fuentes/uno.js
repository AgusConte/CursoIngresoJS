
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let marca;
	let fabricante;
	let mayorCantidad;
	let mayorPrecio;
	let mayorFabricante;
	let acumuladorBarbijo;
	let acumuladorJabon;
	let acumuladorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let contadorAlcohol;
	let banderaJabon;
	let promedio;
	let cantidadBarbijos;

	banderaJabon = true;
	cantidad = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;

	for(i = 0; i < 2; i++){
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

		
		switch(tipo){
			case "jabon":
				acumuladorJabon = acumuladorJabon + cantidad;
				contadorJabon = contadorJabon + 1;
				if (banderaJabon == true ||  mayorPrecio < precio) {
					mayorPrecio = precio;
					mayorCantidad = cantidad;
					mayorFabricante = fabricante;
					banderaJabon = false;
				}
			break;

			case "barbijo":
				acumuladorBarbijo = acumuladorBarbijo + cantidad;
				contadorBarbijo = contadorBarbijo + 1;
			break;

			case "alcohol":
				acumuladorAlcohol = acumuladorAlcohol + cantidad;
				contadorAlcohol = contadorAlcohol + 1;
			break;
		}

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


	cantidadBarbijos = acumuladorBarbijo




	alert("el jabon mas caro salio: $"+mayorPrecio+", del fabricante: "+mayorFabricante+ ", y son "+mayorCantidad + " unidades");
	alert("el promedio del tipo de producto con mas unidades es: "+promedio);
	alert("la cantidad de jabones totales es: " + cantidadBarbijos);
}
