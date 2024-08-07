/**Crear una función que recibe un string en minúsculas, lo
convierta a mayúsculas y lo retorne. */


const prompt = require("prompt-sync")({ sigint: true });

let palabra = prompt('Por favor ingrese una palabra en minúscula: ');


let convertirMayuscula = (palabra => palabra.toUpperCase());

console.log(convertirMayuscula(palabra));
