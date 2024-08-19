/**Tenemos un array llamado numbers con números enteros al azar.
Utilizando reduce, queremos calcular la multiplicación de todos los
números que están en el array.
Por ejemplo: Si tenemos [1, 2, 3, 4], la suma de todos los números es 24 */

const numbers = [6, 1, 34, 94, 3, 17];

let arrayResultante = numbers.reduce((acum, numero)=> acum * numero);

console.log(`El resultado de la multiplicación de los números es ${arrayResultante} `);