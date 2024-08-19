/**Crea un programa que solicite al usuario ingresar números
continuamente hasta que el usuario ingrese un número negativo.
Luego, imprime la suma de todos los números ingresados. */

const prompt = require("prompt-sync")({ sigint: true });

let suma = 0;
let numero=0;

while (numero>=0) {

     numero = parseFloat(prompt("Ingrese un número: "));

    if (numero>=0) {
        suma = suma + numero;
    
    }
    
}

console.log(`La suma de todos los números ingresados es: ${suma}`);