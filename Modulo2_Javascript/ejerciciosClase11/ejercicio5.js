/**Crear una función que calcule el valor de tu hora de trabajo, introduciendo tu
sueldo mensual como parámetro.
PD: considerá que tu mes de trabajo tiene 40 horas. */

const prompt = require("prompt-sync")({ sigint: true });
let sueldo = parseFloat(prompt('Indique cual es su sueldo '))

function calcularHoras(sueldo) {
     return sueldo/40
}

console.log(calcularHoras(sueldo))