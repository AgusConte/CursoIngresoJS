/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () 
{

    /*
    let cantidadLamparas;
    let marca;
    let lampara;
    let descuento;
    let precio;
    let porcentaje;
    let impuesto;
    let mensaje;
    let mensajeImpuesto;



    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value)
    marca = document.getElementById("Marca").value

    lampara = 35
    precio = cantidadLamparas * lampara

    if (cantidadLamparas >5)
        {porcentaje = 0.5}

   else if (cantidadLamparas == 5)
        {if (marca == "ArgentinaLuz")
        {porcentaje = 0.4}
        else 
        {porcentaje = 0.3}
    }
        
    else if (cantidadLamparas == 4)
        {if (marca == "ArgentinaLuz"  ||  marca == "FelipeLamparas")
        {porcentaje = 0.25}
        else
        {porcentaje = 0.2}
    }


    else if (cantidadLamparas == 3)
        {if (marca == "ArgentinaLuz")
        {porcentaje = 0.15}
        else if (marca == "FelipeLamparas")
        {porcentaje = 0.1}
        else
        {porcentaje = 0.05}
    }

    else
    {alert("no tiene descuento")}

    descuento = precio - (precio * porcentaje)
    
    if(descuento >= 120)
    {impuesto = descuento * 0.1;
    descuento = descuento + impuesto
    mensaje = descuento
    mensajeImpuesto = "Usted pago "+ impuesto +" de IIBB."
    alert(mensajeImpuesto)
    document.getElementById("txtIdprecioDescuento").value = mensaje}
    
    else
    {mensaje = descuento
    document.getElementById("txtIdprecioDescuento").value = mensaje}



    ---------------------------------------------------------------------------
    

     
    let cantidadLamparas;
    let marca;
    let lampara;
    let descuento;
    let precio;
    let porcentaje;
    let impuesto;
    let mensaje;
    let mensajeImpuesto;



    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value)
    marca = document.getElementById("Marca").value

    lampara = 35
    precio = cantidadLamparas * lampara


    if (cantidadLamparas >0){
        switch(cantidadLamparas){
            case 5:
                if (marca == "ArgentinaLuz")
                {porcentaje = 0.4}
                else 
                {porcentaje = 0.3}
            break;

            case 4:
                if (marca == "ArgentinaLuz"  ||  marca == "FelipeLamparas")
                {porcentaje = 0.25}
                else
                {porcentaje = 0.2}
            break;

            case 3:
                if (marca == "ArgentinaLuz")
                {porcentaje = 0.15}
                else if (marca == "FelipeLamparas")
                {porcentaje = 0.1}
                else
                {porcentaje = 0.05}
            break;

            case 2:
                porcentaje = 0
            break;

            case 1:
                porcentaje = 0
            break;

            default:
                porcentaje = 0.5
            break;
            
        }
        
        


    descuento = precio - (precio * porcentaje)
    
    if(descuento >= 120)
    {impuesto = descuento * 0.1;
    descuento = descuento + impuesto
    mensaje = descuento
    mensajeImpuesto = "Usted pago "+ impuesto +" de IIBB."
    alert(mensajeImpuesto)
    document.getElementById("txtIdprecioDescuento").value = mensaje}
    
    else
    {mensaje = descuento
    document.getElementById("txtIdprecioDescuento").value = mensaje}

    }else {mensaje = "numero no valido";
    document.getElementById("txtIdprecioDescuento").value = mensaje}

    


-------------------------------------------------------------------------------




let cantidadLamparas;
    let marca;
    let lampara;
    let descuento;
    let precio;
    let porcentaje;
    let impuesto;
    let mensaje;
    let mensajeImpuesto;



    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value)
    marca = document.getElementById("Marca").value

    lampara = 35
    precio = cantidadLamparas * lampara


    if (cantidadLamparas > 0) {
        if (cantidadLamparas >= 6) {
        porcentaje = 0.5;}
        
        else if (cantidadLamparas == 5) {
          switch (marca) {
            case "ArgentinaLuz": porcentaje = 0.4;
              break;
            default: porcentaje = 0.3;
          }
    
    
        } else if (cantidadLamparas == 4) {
          switch (marca) {
            case "ArgentinaLuz":
            case "FelipeLamparas":
            porcentaje = 0.25;
              break;
            default:
            porcentaje = 0.20;
          }
    
        } else if (cantidadLamparas == 3) {
          switch (marca) {
            case "ArgentinaLuz":
            porcentaje = 0.15;
              break;
    
            case "FelipeLamparas":
            porcentaje = 0.10;
              break;
    
            default:
            porcentaje = 0.05;
          }
        } else {
        porcentaje = 0;
        }
        


    descuento = precio - (precio * porcentaje)

    if(descuento >= 120)
    {impuesto = descuento * 0.1;
    descuento = descuento + impuesto
    mensaje = descuento
    mensajeImpuesto = "Usted pago "+ impuesto +" de IIBB."
    alert(mensajeImpuesto)
    document.getElementById("txtIdprecioDescuento").value = mensaje}

    else
    {mensaje = descuento
    document.getElementById("txtIdprecioDescuento").value = mensaje}

    }else {mensaje = "numero no valido";
    document.getElementById("txtIdprecioDescuento").value = mensaje}



---------------------------------------------------------------------------------*/



    let cantidadLamparas;
    let marca;
    let lampara;
    let descuento;
    let precio;
    let porcentaje;
    let impuesto;
    let mensaje;
    let mensajeImpuesto;



    cantidadLamparas = parseInt(document.getElementById("txtIdCantidad").value)
    marca = document.getElementById("Marca").value

    lampara = 35
    precio = cantidadLamparas * lampara


    if (cantidadLamparas >0){
        switch(cantidadLamparas){
            case 5:
                switch (marca){
                    case "ArgentinaLuz": porcentaje = 0.4
                    break;

                    default : porcentaje = 0.3
                    break;
                }
                    
            break;

            case 4:
                switch (marca){
                    case "ArgentinaLuz":
                    case "FelipeLamparas": porcentaje = 0.25
                    break;
                    default : porcentaje = 0.2
                    break;
                }

            break;

            case 3:
                switch (marca){
                    case "ArgentinaLuz": porcentaje = 0.15
                    break;
                    case "FelipeLamparas": porcentaje = 0.1
                    break;
                    default : porcentaje = 0.05
                    break;
                }

            break;

            case 2:
                porcentaje = 0
            break;

            case 1:
                porcentaje = 0
            break;

            default:
                porcentaje = 0.5
            break;
            
        }
        
        


    descuento = precio - (precio * porcentaje)

    if(descuento >= 120)
    {impuesto = descuento * 0.1;
    descuento = descuento + impuesto
    mensaje = descuento
    mensajeImpuesto = "Usted pago "+ impuesto +" de IIBB."
    alert(mensajeImpuesto)
    document.getElementById("txtIdprecioDescuento").value = mensaje}

    else
    {mensaje = descuento
    document.getElementById("txtIdprecioDescuento").value = mensaje}

    }else {mensaje = "numero no valido";
    document.getElementById("txtIdprecioDescuento").value = mensaje}

}
