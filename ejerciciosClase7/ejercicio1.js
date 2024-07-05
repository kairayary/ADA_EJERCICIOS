/**Nuestra tarea será declarar dos variables: una con el nombre edad y la
otra con el nombre peso. Después deberás asignarle un valor. */

const prompt = require("prompt-sync")({ sigint: true });


let edad = 42;
let peso = 90;

/**Escribe un programa que pida al usuario que ingrese su nombre, su
edad y su peso, y luego muestre un mensaje personalizado que incluya
toda esta información. */

let nombre = prompt("Ingrese su nombre: ");
let edadPersona, pesoPersona

do {
    edadPersona = parseInt(prompt('Ingrese su edad: '));
    if (isNaN(edadPersona)) {
        console.log('Por favor ingrese un número válido');
    }
} while (isNaN(edadPersona));

do {
    pesoPersona = parseFloat(prompt('Ingrese su peso: '));
    if (isNaN(pesoPersona)) {
        console.log('Por favor ingrese un número válido');
    }
} while (isNaN(pesoPersona));

console.log(`El nombre ingresado por el usuarios es ${nombre} su edad es ${edadPersona} y pesa ${pesoPersona} kg`);
