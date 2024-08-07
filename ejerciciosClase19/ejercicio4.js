/**Dado un numero entero positivo, mostrar su factorial. Pista: El
factorial de un número se obtiene multiplicando todos los
números enteros positivos que hay entre el 1 y ese número */

const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt('Por favor ingrese un número '))

for (let index = num - 1; index > 1; index--) {
    num = num * index;
    
}

console.log(num);