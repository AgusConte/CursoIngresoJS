
function mostrar()
{
	/*
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

	---------------------------------------------------------------------

	Recu 2020 1 bis: "Jugando al Doctor" 
	De 7 personas que ingresan al hospital se deben tomar y validar los siguientes datos:
	nombre, altura, peso y sexo.
	a)Informar la cantidad de personas de sexo femenino. 
	b)La altura promedio en total de pacientes.
	c)El nombre del hombre con menos peso(si lo hay).
	d)De la persona no binaria, el más flaco. */

	let nombre;
	let altura;
	let peso;
	let sexo;
	let contadorFemenino;
	let contador;
	let acumuladorAltura;
	let promedio;
	let bandraHombre;
	let nombreHombre = "";
	let banderaNB;
	let nombreNB = "";

	banderaNB = true;
	bandraHombre = true;
	acumuladorAltura = 0;
	contadorFemenino = 0;
	contador = 0;


	for(i = 0; i < 7; i++){

		nombre = prompt("ingrese su nombre")

		altura = parseFloat(prompt("ingrese su altura en cm."))
		while(isNaN(altura) || altura < 50 || altura > 250){
			altura = parseFloat(prompt("ERROR: no podes medir menos de medio metro ni mas de 2,5 mt."))
		}

		peso = parseFloat(prompt("ingrese su peso"))
		while(isNaN(peso) || peso < 30 || peso > 300){
			peso = parseFloat(prompt("ERROR: no podes pesar menos de 30 kg. ni mas de 300 kg."))
		}

		sexo = prompt("ingrese su sexo")
		while(sexo != "m" && sexo != "f" && sexo != "nb"){
			sexo = prompt("ERROR: su sexo puede ser m, f o nb")
		}

		acumuladorAltura = acumuladorAltura + altura;
		contador = contador + 1;

		switch(sexo){
			case "f":
				sexo = "femenino";
				contadorFemenino = contadorFemenino + 1;
			break;

			case "m":
				sexo = "masculino";

				if(bandraHombre || bandraHombre < peso){
					bandraHombre = peso;
					nombreHombre = nombre;
					bandraHombre = false;
				}
			break;

			case "nb":
				sexo = "no binario";

				if(banderaNB || banderaNB < peso){
					banderaNB = peso;
					nombreNB = nombre;
					banderaNB = false;
				}
			break;
			}
	}

	promedio = acumuladorAltura / contador;

	alert("la cantidad de personas de sexo femenino son: "+contadorFemenino);
	alert("La altura promedio en total de pacientes es : "+promedio);
	alert("El nombre del hombre con menos peso es: "+ nombreHombre);
	alert("el no binario mas flaco es: "+nombreNB)

}
