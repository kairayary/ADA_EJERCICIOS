/** Crea una función que le pasamos el radio de un circulo y
nos devuelve la circunferencia. */

const prompt = require("prompt-sync")({ sigint: true });

let radio = parseFloat(prompt('Por favor ingrese un número '));

function calcularCircunferencia(radio) {
    const PI = Math.PI; // Valor de PI proporcionado por el objeto Math
    let circunferencia = 2 * PI * radio;
    return circunferencia;
}
console.log(`La circunferencia del círculo con radio ${radio} es: ${calcularCircunferencia(radio)}`);