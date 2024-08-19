/**Hacer un programa que calcule la suma de los N primeros números
naturales, dónde N es el número límite ingresado por teclado. */

const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt('Ingrese un número '));

let suma = 0
for (let i = 1; i <= num; i++) {
    suma += i
    
}

console.log(`La suma de los primeros ${num} números naturales es: ${suma}`);