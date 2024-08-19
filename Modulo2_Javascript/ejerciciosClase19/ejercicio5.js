/**Crear una función que muestre todos los números de la
secuencia de Fibonacci hasta el valor ingresado por parámetro.
Investigar sobre “la secuencia de Fibonacci” */

const prompt = require("prompt-sync")({ sigint: true });

let num = parseInt(prompt('Por favor ingrese un número: '));


if (num > 0) {
    let a = 0, b = 1, siguiente;

    // Imprime el primer número de la secuencia
    console.log(a); 

    // Imprime el segundo número de la secuencia si num es mayor que 1
    if (num > 1) {
        console.log(b); 
    }

    // Imprimir el resto de los números de la secuencia
    for (let i = 2; i < num; i++) {
        siguiente = a + b;
        console.log(siguiente); 
        a = b;
        b = siguiente;
    }
} else {
    console.log("Ingrese un número mayor que 0.");
}