/**Crear una función que reciba un string y luego imprimir la
cantidad de vocales que se encuentran en dicha frase */

const prompt = require("prompt-sync")({ sigint: true });

let frase = prompt('Por favor ingrese un frase: ');

function cantidadVocales(frase) {

    let resultado= frase.match(/[aeiou]/gi).length;
    return resultado;
}

console.log(cantidadVocales(frase));