/** Escribe un programa que calcule el
Índice de Masa Corporal (IMC). Pide al usuario que ingrese su peso y su altura, y muestra el IMC
calculado*/

const prompt = require('prompt-sync')();

let peso = parseFloat(prompt('Ingrese su peso en kg '));
let altura = parseFloat(prompt('Ingrese su altura en metros '));

let imc = peso / (altura * altura)

console.log(`Con una altura de ${altura}m y un peso de ${peso}kg sum IMC es de ${imc}`);