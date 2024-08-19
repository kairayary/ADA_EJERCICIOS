/**Declara dos variables numéricas numero1 y numero2.
 *  Pide al usuario que ingrese dos números y muestra cuál es mayor o si son 
 * iguales. */

const prompt = require("prompt-sync")({ sigint: true });

let numero1, numero2;

do {
   numero1 = parseFloat(prompt('Ingrese el primer número '));
    if (isNaN(numero1)) {
        console.log('Por favor ingrese un número válido');
    }
} while (isNaN(numero1));

do {
    numero2 = parseFloat(prompt('Ingrese el primer número '));
     if (isNaN(numero2)) {
         console.log('Por favor ingrese un número válido');
     }
 } while (isNaN(numero2));

 if (numero1 === numero2) {
    console.log('El número 1 es igual a número 2');
    
 } else if (numero1 > numero2) {
    console.log('El número uno es mayor que número dos');
 } else {
    console.log('El número dos es mayor');
 }