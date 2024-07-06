/**Crear una función que recibe un string y lo convierte en una URL. Ej: “pepito”
es devuelto como “http://www.pepito.com” */

const prompt = require("prompt-sync")({ sigint: true });
let string= prompt('Ingrese una palabra ')

function convertirURL(string) {
    return 'http://www.' + string + '.com'
}

console.log(convertirURL(string));