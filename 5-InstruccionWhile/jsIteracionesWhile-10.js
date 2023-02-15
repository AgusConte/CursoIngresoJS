/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {
    //declarar contadores y variables 
   let respuesta = "si";
   let numeroIngresado;
   let sumaNegativos = 0;
   let sumaPositivos = 0;
   let cantidadPositivos = 0;
   let cantidadNegativos = 0;
   let cantidadCeros = 0;
   let cantidadPares = 0;
   let promedioPositivos;
   let promedioNegativos;
   let diferencia;

    while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" ||respuesta == "sI") {
        numeroIngresado = parseInt(prompt("Ingrese un número:"));

        if (numeroIngresado > 0) {
            sumaPositivos += numeroIngresado;
            cantidadPositivos++;
        }
        else if (numeroIngresado < 0) {
            sumaNegativos += numeroIngresado;
            cantidadNegativos++;
        }
        else {
            cantidadCeros++;
        }

        if (numeroIngresado % 2 == 0) {
            cantidadPares++;
        }

        respuesta = prompt("¿Desea continuar ingresando números? (coloque si)");
    }

    promedioPositivos = sumaPositivos / cantidadPositivos;
    promedioNegativos = sumaNegativos / cantidadNegativos;
    diferencia = sumaPositivos - sumaNegativos;

    document.write("La suma de negativos es: " + sumaNegativos + "<br>");
    document.write("La suma de positivos es: " + sumaPositivos + "<br>");
    document.write("La cantidad de positivos es: " + cantidadPositivos + "<br>");
    document.write("La cantidad de negativos es: " + cantidadNegativos + "<br>");
    document.write("La cantidad de ceros es: " + cantidadCeros + "<br>");
    document.write("La cantidad de números pares es: " + cantidadPares + "<br>");
    document.write("El promedio de positivos es: " + promedioPositivos + "<br>");
    document.write("El promedio de negativos es: " + promedioNegativos + "<br>");
    document.write("La diferencia es " + diferencia);

}