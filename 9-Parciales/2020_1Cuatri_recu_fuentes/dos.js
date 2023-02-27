/*Recuperatorio de Parcial 2020: Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
          Tipo validad("arena";"cal";"cemento")
          Cantidad de bolsas(0-300),
          Precio por bolsa (más de cero y menor a 10000 ),
          al terminar la compra el cliente accede a un descuento segun las bolsas en total
            Si compro más de 15 bolsas en total tenes 10% de descuento sobre el total a pagar.
            Si compro más de 45 bolsas en total tenes 30% de descuento sobre el total a pagar.
                a)
                El importe total a pagar , bruto sin descuento y...
                b)
                el importe total a pagar con descuento(solo si corresponde)
                d)
                Informar la bolsa mas cara de Cal y la mas barata de Cemento.
                e)
                Cuantas bolsas de arena se compraron en total, y el promedio por compra.*/ 

function mostrar()
{/*
  let tipo;
  let cantidad;
  let precio;
  let mayorPrecio;
  let menorPrecio;
  let respuesta;
  let descuento;
  let banderaCal;
  let banderaCemento;
  let acumuladorCantidadArena;
  let contadorArena;
  let precioBruto;
  let precioDescuento;
  let promedio;

  respuesta = "si";
  menorPrecio = "0";
  mayorPrecio = "0";
  promedio = "0";
  acumuladorCantidadArena = 0;
  banderaCal = true;
  banderaCemento = true;
  precioBruto = 0;
  precioDescuento = 0;
  contadorArena = 0;



  while(respuesta == "si" || respuesta == "Si"){
    tipo = prompt("ingrese tipo de producto : arena, cal y cemento");
    while(tipo != "arena" && tipo != "cal" && tipo != "cemento"){
      tipo = prompt("ERROR: ingrese tipo de producto : arena, cal y cemento");
    }

    cantidad = parseInt(prompt("ingrese cantidad de bolsas"));
    while(isNaN(cantidad) || cantidad < 0 || cantidad > 1000){
      cantidad = parseInt(prompt("ERROR: ingrese cantidad de bolsas"));
    }

    precio = parseFloat(prompt("ingrese Precio por bolsas"));
    while(isNaN(precio) || precio < 0){
      precio = parseFloat(prompt("ERROR: ingrese Precio por bolsas"));
    } 

    precioBruto = precioBruto + (cantidad * precio);

    if(cantidad > 29){
      descuento = 0.25;
      precioDescuento = precioBruto - (precioBruto * descuento);
    }
    else if(cantidad > 9){
      descuento = 0.15;
      precioDescuento = precioBruto - (precioBruto * descuento);
    }
    else{
      descuento = 0;
      precioDescuento = precioBruto - (precioBruto * descuento);
    }

    switch(tipo){
      case "arena":
        acumuladorCantidadArena = acumuladorCantidadArena + cantidad;
        contadorArena = contadorArena + 1;
      break;

      case "cal":
        if (banderaCal == true ||  mayorPrecio < precio) {
					mayorPrecio = precio;
					banderaCal = false;
        }
      break;

      case "cemento":
        if (banderaCemento == true ||  menorPrecio > precio) {
					menorPrecio = precio;
					banderaCal = false;
        }
      break;
    }

  respuesta = prompt("¿Desea continuar? Ingrese si/no")
  }
  promedio = acumuladorCantidadArena / contadorArena;
    
    
  alert(precioBruto);
  alert(precioDescuento);
  alert("la bolsa de cal mas cara salio: "+ mayorPrecio+ " y la mas barata de cemento salio: "+ menorPrecio);
  alert("hay "+acumuladorCantidadArena+" bolsas de arena y su promedio es: "+promedio);


------------------------------------------------------
  Recu 2020 2 bis: /* "El cine"
  De un cine se deben ingresar una cantidad indeterminada 
  de venta de entradas diaria, validando los
  siguientes datos:
  nombre de película, precio, cantidad de entradas, tipo(3D o 4D)
  a)El nombre de la película más cara de tipo 4D.
  b)Informar el precio total de la venta del día.
  c)El nombre de la película con menos cantidad de entradas.
  d)El tipo de pelicula más vista y la cantidad de entradas. 
  e)El nombre de la pelicula más barata en 3D.*/

  let nombre;
  let precio;
  let cantidad;
  let tipo;
  let respuesta = "si";
  let bandera4d;
  let bandera3d;
  let nombre4d = "";
  let nombre3d = "";
  let acumladorPrecio;
  let acumulador4d;
  let acumulador3d;
  let banderaMenosEnrtradas;
  let nombreMenosEntradas = "";
  let menasje;

  banderaMenosEnrtradas = true;
  acumulador3d = 0;
  acumulador4d = 0;
  acumladorPrecio = 0;
  bandera3d = true;
  bandera4d = true;


  while(respuesta == "si"){

    nombre = prompt("ingrese el nomber de la pelicula")

    precio = parseFloat(prompt("ingrese el precio de la pelicula"))
    while(isNaN(precio) || precio < 0 || precio > 5000){
      precio = parseFloat(prompt("ERROR: ingrese bien el precio"))
    }

    cantidad = parseFloat(prompt("ingrese la cantidad de entradas"))
    while(isNaN(cantidad) || cantidad < 0){
      cantidad = parseFloat(prompt("ERROR: ingrese bien la cantidad"))
    }

    tipo = prompt("ingrese el tipo de entrada")
    while(tipo != "3d" && tipo != "4d"){
      tipo = prompt("ERROR: ingrese tipo de entrada")
    }

    switch(tipo){
      case "3d":
        if(bandera3d || bandera3d < precio){
          bandera3d = precio;
          nombre3d = nombre;
          bandera3d = false;
        }
        acumulador3d = acumulador3d + cantidad;
      break;

      case "4d":
        if(bandera4d || bandera4d > precio){
          bandera4d = precio;
          nombre4d = nombre;
          bandera4d = false;
        }
        acumulador4d = acumulador4d + cantidad
      break;
    }

    if(banderaMenosEnrtradas || banderaMenosEnrtradas < cantidad){
      banderaMenosEnrtradas = cantidad;
      nombreMenosEntradas = nombre;
      banderaMenosEnrtradas = false;
    }

    acumladorPrecio = acumladorPrecio + precio

    respuesta = prompt("¿Quiere continuar?")
  }
  
  if(acumulador3d > acumulador4d){
    menasje = "el tipo de pelicula con mas entradas es: 3d, con: " + acumulador3d +" entradas";
  }
  else if(acumulador4d > acumulador3d){
    menasje = "el tipo de pelicula con mas entradas es: 4d, con: " + acumulador4d +" entradas";
  }

  alert("El nombre de la película más cara de tipo 4D: "+nombre4d);
  alert("El nombre de la pelicula más barata en 3D: "+nombre3d);
  alert("la venta del dia fue de: $"+acumladorPrecio);
  alert("El nombre de la película con menos cantidad de entradas es: "+nombreMenosEntradas);
  alert(menasje);

}


