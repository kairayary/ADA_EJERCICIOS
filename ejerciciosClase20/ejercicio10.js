/**Tenemos un array llamado numbers con números enteros al azar.
Utilizando reduce, queremos calcular la suma de todos los números que
están en el array */

const numbers = [6, 1, 34, 94, 3, 17];

let sumaNumeros = numbers.reduce((acum, numero)=>acum + numero, 0);

console.log(`La suma de los números es ${sumaNumeros} `);