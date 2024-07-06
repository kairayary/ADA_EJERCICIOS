/**Crear la función calculadorIMC() que reciba la altura en metros y el peso en
kilogramos y calcule el IMC de una persona. Luego, ejecutar la función
probando diferentes valores */

const prompt = require("prompt-sync")({ sigint: true });

let altura = parseFloat(prompt('Ingrese su altura en metros '));
let peso = parseFloat(prompt('Ingrese su peso en kilogramos '));

function calcularIMC(altura, peso) {
    return peso /(altura * altura)
}

console.log(calcularIMC(altura, peso));