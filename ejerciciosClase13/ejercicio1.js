/**Solicita al usuario un monto en dólares y una tasa de cambio a pesos. Usa
una función flecha para convertir el monto a pesos. */

const prompt = require("prompt-sync")({ sigint: true });

let convertir= (monto, tasa)=> monto * tasa

let monto = parseFloat(prompt('Ingrese el monto que desea convertir '))
let tasa = parseFloat(prompt('Ingrese el valor de la tasa '))

console.log(convertir(monto,tasa));