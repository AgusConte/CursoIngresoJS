/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
    var contador;
    var respuesta;
    var sumaPositivos;
    var multiplicacionNegativos;
    let numero;

    contador=0;
    sumaPositivos=0;
    multiplicacionNegativos=1;
    respuesta='si';

    while(respuesta == "si" || respuesta == "SI" || respuesta == "Si" ||respuesta == "sI"){
        contador = contador + 1
        numero = parseInt(prompt("Ingrese numero"))
        while(isNaN(numero)){
           numero = parseInt(prompt("ERROR : ingresa un numero"));
        }

        if(numero > 0){
            sumaPositivos = sumaPositivos + numero;
        }
        else{
            multiplicacionNegativos = multiplicacionNegativos * numero;
        }

        respuesta = prompt("Desea continuar? (coloque Si)");
    }


    document.getElementById("txtIdSuma").value = sumaPositivos;
    document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}