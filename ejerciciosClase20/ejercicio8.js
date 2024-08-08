/**Tenemos un array en una variable numeros con números al azar.
También tenemos dos arrays vacios en las dos variables numerosPares y
numerosImpares.
Utilizando filter crear un nuevo array con todos los números pares y
guardalo en la variable numerosPares
Utilizando filter crear un nuevo array con todos los números impares y
guardalo en la variable numerosImpares. */

const masNumeros = [43, 11, 18, 46, 44, 37, 42, 29, 9, 3, 37, 0, 40, 10, 38, 34, 25, 40, 4, 32];

let arrayPares = masNumeros.filter(numero => numero % 2 == 0);

let arrayImpares = masNumeros.filter(numero => numero % 2 !== 0);

console.log(`Array con números pares ${arrayPares} `);
console.log(`Array con números impares ${arrayImpares} `);