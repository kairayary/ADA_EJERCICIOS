/**
 * Declara dos variables booleanas condicion1 y condicion2. Pide al usuario que ingrese dos valores booleanos (true o false) 
 * y muestra el resultado de diversas combinaciones lógicas.
 */

const prompt = require("prompt-sync")({ sigint: true });



let condicion1 = prompt("Ingrese el primer valor booleano (true o false):") === 'true';
let condicion2 = prompt("Ingrese el segundo valor booleano (true o false):") === 'true';

console.log('Valores ingresados:');
console.log('condicion1 =', condicion1);
console.log('condicion2 =', condicion2);


console.log('Combinaciones Lógicas:');
console.log('condicion1 AND condicion2 =', condicion1 && condicion2);
console.log('condicion1 OR condicion2 =', condicion1 || condicion2)