/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares () 
{
 	let numero;
    let pares;

	pares = 0;

	numero = parseInt(prompt("ingrese un numero positivo"))

	while(isNaN(numero) || numero < 0){
		numero = parseInt(prompt("ERROR: ingrese un numero positivo"))
	}

	for(i = 1; i <= numero; i++ ){
		if(i%2 == 0){
			console.log(i);
			pares ++;
		}
	}
	
	document.getElementById("txtIdNumero").value = pares
}


function NumerosImpares ()
{
 	let numero;
	let impares;
	
	impares = 0;

	numero = parseInt(prompt("ingrese un numero positivo"))

	while(isNaN(numero) || numero < 0){
		numero = parseInt(prompt("ERROR: ingrese un numero positivo"))
	}

	for(i = 1; i <= numero; i++ ){
		if(i%2 == 1){
			console.log(i);
			impares ++;
		}
	}
	
	document.getElementById("txtIdNumero").value = impares
}



function NumerosDivisibles ()
{
	let numero;
	let divisibles;
	
	divisibles = 0;

	numero = parseInt(prompt("ingrese un numero positivo"))

	while(isNaN(numero) || numero < 0){
		numero = parseInt(prompt("ERROR: ingrese un numero positivo"))
	}

	for(i = 1; i < 101; i++ ){
		if(numero % i == 0){
			divisibles ++
		}
	}
	document.getElementById("txtIdNumero").value = divisibles
}


function VerificarPrimo ()
{
	let numero;
	let primo;

	primo = true;

	numero = parseInt(prompt("ingrese un numero positivo"))

	while(isNaN(numero) || numero < 0){
		numero = parseInt(prompt("ERROR: ingrese un numero positivo"))
	}

	for(i = 2; i < numero; i++ ){
		if(numero % i == 0){
			primo = false;
			break;
		}
	}

	if(primo){
		document.getElementById("txtIdNumero").value = "es primo"
	}
	else{
		document.getElementById("txtIdNumero").value = "no es primo"
	}

}



function NumerosPrimos ()
{
	let numero;
	let primo;
	let cantidadPrimos;

	primo = true;
	cantidadPrimos = 0

	numero = parseInt(prompt("ingrese un numero positivo"))

	while(isNaN(numero) || numero < 0){
		numero = parseInt(prompt("ERROR: ingrese un numero positivo"))
	}
	for (let i = 1; i <= numero; i++) {
        primo = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
               primo = false;
                break;
            }
        }

        if (primo && i !== 1) {
            cantidadPrimos++;
        }
    }
	document.getElementById("txtIdNumero").value = cantidadPrimos
}