function mostrar()
{
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
  
  let tipo;
  let cantidad;
  let precio;
  let respuesta;
  let descuento;
  let acumuladorCantidad;
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

    if(cantidad > 44){
      descuento = 0.30;
      precioDescuento = precioBruto - (precioBruto * descuento);
    }
    else if(cantidad > 14){
      descuento = 0.1;
      precioDescuento = precioBruto - (precioBruto * descuento);
    }
    else{
      descuento = 0;
      precioDescuento = precioBruto - (precioBruto * descuento);
    }

    if(tipo == "arena" ){
      acumuladorPrecioArena = acumuladorPrecioArena + precio;
      acumuladorCantidadArena = acumuladorCantidadArena + cantidad;
    }

    if(tipo == "cal"){
      acumuladorPrecioCal = acumuladorPrecioCal + precio;
      acumuladorCantidadCal = acumuladorCantidadCal + cantidad;
    }
    
    if(tipo == "cemento"){
      acumuladorPrecioCemento = acumuladorPrecioCemento + precio;
      acumuladorCantidadCemento = acumuladorCantidadCemento + cantidad;
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

}

}
