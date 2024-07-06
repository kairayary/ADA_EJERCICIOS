/**Crear una función que recibe un string y devuelve la misma frase pero con
admiración. */

const prompt = require("prompt-sync")({ sigint: true });

let string= prompt('Escriba una frase ')
function convertir(string) {
    return '¡' + string + '!'
}

console.log(convertir(string));