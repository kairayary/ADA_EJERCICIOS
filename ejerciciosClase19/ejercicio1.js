/**Crear una función que pida un valor por parámetro y muestre los
10 números siguientes. */

const prompt = require("prompt-sync")({ sigint: true });

let valor = parseInt(prompt('Por favor ingrese un número'));

function mostrarNumeros(valor) {

    for (let index = valor ; index < valor + 10; index++) {
       
        console.log(index);
    }
}

console.log(mostrarNumeros(valor));