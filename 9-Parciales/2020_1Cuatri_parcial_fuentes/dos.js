/*V
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/


function mostrar()
{
  
 /* let tipo;
  let cantidad;
  let precio;
  let respuesta;
  let descuento;
  let acumuladorCantidadCal;
  let acumuladorCantidadArena;
  let acumuladorCantidadCemento;
  let acumuladorPrecioCal;
  let acumuladorPrecioArena;
  let acumuladorPrecioCemento;
  let precioBruto;
  let precioDescuento;
  let mensaje;
  let mensaje1;

  respuesta = "si";
  acumuladorCantidadCal = 0;
  acumuladorCantidadArena = 0;
  acumuladorCantidadCemento = 0;
  acumuladorPrecioCal = 0;
  acumuladorPrecioArena = 0;
  acumuladorPrecioCemento = 0;
  precioBruto = 0;
  precioDescuento = 0;
  badera = true;



  while(respuesta == "si"){
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
        acumuladorPrecioArena = acumuladorPrecioArena + precio;
        acumuladorCantidadArena = acumuladorCantidadArena + cantidad;
      break;

      case "cal":
        acumuladorPrecioCal = acumuladorPrecioCal + precio;
        acumuladorCantidadCal = acumuladorCantidadCal + cantidad;
      break;

      case "cemento":
        acumuladorPrecioCemento = acumuladorPrecioCemento + precio;
        acumuladorCantidadCemento = acumuladorCantidadCemento + cantidad;
      break;
    }

  respuesta = prompt("¿Desea continuar? Ingrese si/no")
  }

  if(acumuladorCantidadArena > acumuladorCantidadCal && acumuladorCantidadArena > acumuladorCantidadCemento){
		mensaje = "el tipo de producto con mas cantidad es: arena"
  }
	else if(acumuladorCantidadCal > acumuladorCantidadArena && acumuladorCantidadCal > acumuladorCantidadCemento){
      mensaje = "el tipo de producto con mas cantidad es: cal"
  }
	else if(acumuladorCantidadCemento > acumuladorCantidadArena && acumuladorCantidadCemento > acumuladorCantidadCal){
      mensaje = "el tipo de producto con mas cantidad es: cemento"
	}
  
  if(acumuladorPrecioArena > acumuladorPrecioCal && acumuladorPrecioArena > acumuladorPrecioCemento){
		mensaje1 = "el tipo de producto mas caro es: arena"
  }
	else if(acumuladorPrecioCal > acumuladorPrecioArena && acumuladorPrecioCal > acumuladorPrecioCemento){
    mensaje1 = "el tipo de producto mas caro es: cal"
  }
	else if(acumuladorPrecioCemento > acumuladorPrecioArena && acumuladorPrecioCemento > acumuladorPrecioCal){
    mensaje1 = "el tipo de producto mas caro es: cemento"
	}
  
alert(precioBruto);
alert(precioDescuento);
alert(mensaje);
alert(mensaje1);

-----------------------------------------------------------------

Parcial 2020 2 bis: /"La veterinaria" pedir el ingreso de 10 mascotas
validar
tipo ( gato , perro , pájaro y otros)solo esos cuatro tipo
raza: si es perro (pastor, toy, callejero) y 
si gato (siamés, turco, Peterbald , generico) 
y si es de tipo "otros" o pájaro , pedir solo un texto
Edad entre 1 y 20 para gatos y perros , para "otros" entre 1 y 100 , para pájaro 1 de 50
nombre (no se permite solo numero)
mostrar por cada tipo el nombre del mas viejo , solo si hay de ese tipo
mostrar que raza de gatos tiene mas animales y el promedio de edad de esta raza/ */

  let tipo;
  let raza;
  let edad;
  let nombre;
  let banderaGato;
  let banderaPerro;
  let banderaPajaro;
  let banderaOtro;
  let mayorEdadGato;
  let mayorNombreGato = "";
  let mayorNombrePerro = "";
  let mayorNombrePajaro = "";
  let mayorNombreOtro = "";
  let contadorSiames;
  let contadorTurco;
  let contadorPeterbal;
  let contadorGenerico;
  let mensaje;
  let promedio;
  let acumuladorEdades;


  banderaGato = true;
  banderaOtro = true;
  banderaPajaro = true;
  banderaPerro = true;
  contadorSiames = 0;
  contadorTurco = 0;
  contadorPeterbal = 0;
  contadorGenerico = 0;
  acumuladorEdades = 0;


  for(i = 0; i < 10; i++){
    tipo = prompt("ingrese el tipo de mascota: gato , perro , pájaro y otros")
    while(tipo != "gato" && tipo != "perro" && tipo != " pajaro" && tipo != "otros"){
      tipo = prompt("ERROR: ingrese el tipo de mascota: gato , perro , pajaro y otros ")
    }

    nombre = prompt("ingrese su nombre")
    while(!isNaN(nombre)){
      nombre = prompt("ERROR: su nombre contiene numeros")
    }

    switch(tipo){
      case "gato":
        raza = prompt("ingrese la raza de su gato: siames, turco, peterbald , generico")
        while(raza != "siames" && raza != "turco" && raza != "peterbald" && raza != "generico"){
          raza = prompt("ERROR: ingrese la raza de su gato: siames, turco, peterbald , generico")
        }

        edad = parseInt(prompt("ingrese la edad de su gato"))
        while(isNaN(edad) || edad < 1 || edad > 20){
          edad = parseInt(prompt("ERROR: la edad de su gato debe ser mayor a 1 y menor a 20 años"))
        }

        if (banderaGato == true || banderaGato < edad){
          banderaGato = edad;
          mayorNombreGato = nombre;
          banderaGato = false;
        }
        else 

        switch(raza){
          case "siames":
            contadorSiames = contadorSiames + 1;
            acumuladorEdades = acumuladorEdades + edad;
          break;

          case "turco":
            contadorTurco = contadorTurco + 1;
            acumuladorEdades = acumuladorEdades + edad;
          break;

          case "peterbald":
            contadorPeterbal = contadorPeterbal + 1;
            acumuladorEdades = acumuladorEdades + edad;
          break;

          case "generico":
            contadorGenerico = contadorGenerico + 1;
            acumuladorEdades = acumuladorEdades + edad;
        }
      break;

      case "perro":
        raza = prompt("ingrese la raza de su perro: pastor, toy y callejero")
        while(raza != "pastor" && raza != "toy" && raza != "callejero"){
          raza = prompt("ERROR: ingrese la raza de su perro: pastor, toy y callejero")
        }

        edad = parseInt(prompt("ingrese la edad de su perro")) 
        while(isNaN(edad) || edad < 1 || edad > 20){
          edad = parseInt(prompt("ERROR: la edad de su perro debe ser mayor a 1 y menor a 20 años")) 
        }

        if (banderaPerro == true || banderaPerro < edad) {
          banderaPerro = edad;
          mayorNombrePerro = nombre
          banderaPerro = false;
        }
      break;

      case "pajaro":
        raza = prompt("ingrese la raza de su pajaro")
        while(!isNaN(raza)){
          raza = prompt("ERROR: ingrese la raza de su pajaro")
        }

        edad =parseInt(prompt("ingrese la edad de su pajaro")) 
        while(isNaN(edad) || edad < 1 || edad > 50){
          edad =parseInt(prompt("ERROR: la edad de su pajaro debe ser mayor a 1 y menor a 50 años")) 
        }

        if (banderaPajaro == true || banderaPajaro < edad) {
          banderaPajaro = edad;
          mayorNombrePajaro = nombre
          banderaPajaro = false;
        }
      break;

      
      case "otros":
        raza = prompt("ingrese la raza")
        while(!isNaN(raza)){
          raza = prompt("ERRO: ingrese la raza")
        }

        edad = parseInt(prompt("ingrese la edad"))
        while(isNaN(edad) || edad < 1 || edad > 100){
          edad = parseInt(prompt("ERROR: la edad debe ser mayor a 1 y menor a 100 años"))
        }

        if (banderaOtro == true || banderaOtro < edad) {
          banderaOtro = edad;
          mayorNombreOtro = nombre
          banderaOtro = false;
        }
      break;
    }
  
  }

if(contadorSiames > contadorGenerico && contadorSiames > contadorPeterbal && contadorSiames > contadorTurco){
  promedio = acumuladorEdades / contadorSiames;
  mensaje = "la raza de gatos con mas animales es: siames, y su promedio de edad es: " + promedio;
}
else if(contadorTurco > contadorGenerico && contadorTurco > contadorSiames && contadorTurco > contadorPeterbal){
  promedio = acumuladorEdades / contadorTurco;
  mensaje = "la raza de gatos con mas animales es: turco, y su promedio de edad es: " + promedio;
}
else if(contadorPeterbal > contadorGenerico && contadorPeterbal > contadorTurco && contadorPeterbal > contadorSiames){
  promedio = acumuladorEdades / contadorPeterbal;
  mensaje = "la raza de gatos con mas animales es: peterbald, y su promedio de edad es: " + promedio;
}
else if(contadorGenerico > contadorPeterbal && contadorGenerico > contadorSiames && contadorGenerico > contadorTurco){
  promedio = acumuladorEdades / contadorGenerico;
  mensaje = "la raza de gatos con mas animales es: generico, y su promedio de edad es: " + promedio;
}


alert("el gato mas viejo se llama: "+mayorNombreGato+", el perro mas viejo se llama: "+mayorNombrePerro+", el pajaro mas viejo se llama: "+mayorNombrePajaro+" y el otro mas viejo se llama: "+ mayorNombreOtro)
alert(mensaje)
}
