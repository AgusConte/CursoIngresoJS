
function mostrar()
{
	/*let tipo;
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

	banderaAlcohol = true;
	banderaUnidades = true;
	cantidad = 0;
	acumuladorAlcohol = 0;
	acumuladorBarbijo = 0;
	acumuladorJabon = 0;
	contadorAlcohol = 0;
	contadorBarbijo = 0;
	contadorJabon = 0;

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


	cantidadJabones = acumuladorJabon




	alert("el a mas barato salio: $"+menorPrecio+", del fabricante: "+menorFabricante+ ", y son "+menorCantidad + " unidades");
	alert("el promedio del tipo de producto con mas unidades es: "+promedio);
	alert("la cantidad de jabones totales es: " + cantidadJabones);

	------------------------------------------------------------------------------------*/
	/*Parcial 1 2020 bis: /"Super chino" Se pide el ingreso de mercadería de un supermercado , 
	hasta que el usuario quiera,se pide :
	tipo(limpieza , comestible , otros)solo estos tres tipos
	nombre del producto
	importe del producto (no mayor a 1000 pesos)
	procedencia(importado, nacional, elaborado)
	Peso (no mayor a 30 kilos)

	informar SOLO SI HAY
	a) el NOMBRE del mas pesado de los comestibles
	b) el NOMBRE del mas caro de todos los productos
	c) el NOMBRE del mas barato de los elaborados
	d)el tipo de mercadería que mas aparece
	e)el porcentaje de productos elaborados por sobre el total
	f) el promedio de pesos por cada tipo ingresado*/

	let tipoIngresado;
	let nombreDelProducto;
	let importeDelProducto;
	let procedencia;
	let peso;
	let respuesta;


	respuesta = "si";



	while(respuesta == "si"){

		tipoIngresado = prompt("ingrese tipo de producto");
		while(tipoIngresado != "limpieza" && tipoIngresado != "comestible" && tipoIngresado != "otros"){
			tipoIngresado = prompt("ERROR: inrese si su tipo de producto es de : limpieza, comestible u otros")
		}

		importeDelProducto = parseInt(prompt("ingrese el importe del producto"));
		while(isNaN(importeDelProducto) || importeDelProducto < 0 || importeDelProducto > 1000){
			importeDelProducto =  parseInt(prompt("ERROR: el iporte no puede se menor a 0 y mayo a 1000"));
		}





		respuesta = prompt("¿Desea continuar?")
	}


}
