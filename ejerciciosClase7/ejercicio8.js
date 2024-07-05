/**
 * Escribe un programa que
convierta una temperatura dada en grados Celsius a grados Fahrenheit.
La fórmula de conversión es: fahrenheit = celsius * 9 / 5 + 32;

Pide al usuario que ingrese la temperatura en Celsius y muestra el
resultado en Fahrenheit
 */

const prompt = require("prompt-sync")({ sigint: true });

let temp;


while (isNaN(temp)) {
    temp= parseFloat(prompt('Ingrese el valor de la temperatura en grados centigrados '));
    if (isNaN(temp)) {
        console.log('Por favor ingrese un valor válido');
    }
}

let fahrenheit =  temp * 9 / 5 + 32;

console.log(`La temperatura ingresada ${temp}ºC a fahrenheit es ${fahrenheit}ºF `);