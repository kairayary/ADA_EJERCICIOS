/** Realizar una función que, dada una lista, devuelva una nueva lista
cuyo contenido sea igual a la original pero invertida. */

const prompt = require("prompt-sync")({ sigint: true });

let palabra = prompt('Por favor ingrese una palabra: ');

let invertirLista= (palabra => palabra.split('').reverse().join(''));

console.log(invertirLista(palabra));