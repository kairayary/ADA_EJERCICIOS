/**Crea un programa que solicite al usuario ingresar 5 nombres y los
almacene en un array. Luego, solicita al usuario ingresar un nombre y
verifica si ese nombre se encuentra en el array. (Pueden desglosar en
pasos el código si eso les facilita su desarrollo) */

const prompt = require("prompt-sync")({ sigint: true });




let nombre = [];



for (let i = 0; i < nombre; i++) {
    let nombres = parseInt(prompt(`Ingrese la nota del estudiante ${i + 1}: `));;
    nombre[i] = nombres; 
}

console.log('Notas de cada estudiante');
console.log(nombre);