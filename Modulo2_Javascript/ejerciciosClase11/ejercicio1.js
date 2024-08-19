/**Crear una función que convierta pulgadas en centímetros. Recibe por
parámetro pulgadas y retorna su equivalente en centímetros. */

const prompt = require("prompt-sync")({ sigint: true });

let pulgadas = parseFloat(prompt('Ingrese las pulgadas a convertir '))

function convertir(pulgadas) {
    return  pulgadas * 2.54
}

console.log(convertir(pulgadas));