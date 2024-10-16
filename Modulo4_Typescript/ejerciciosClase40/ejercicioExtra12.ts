// 1. Crea una tupla para almacenar el nombre (string), la edad (número) y el
// país de origen (string) de una persona.
// 2. Inicializa la tupla con los valores "Juan", 30, "Argentina".
// 3. Cambia el país de origen a "Brasil" y muestra por consola la tupla
// actualizada.
// 4. Desestructura la tupla para obtener el nombre y la edad, y muestra esos
// valores por consola.

let paisOrigen : [string, number, string ];
paisOrigen = ["Juan", 30, "Argentina"];

paisOrigen[2]= "Brasil";

console.log('Tupla actualizada ', paisOrigen);

export let [string, number] = [paisOrigen[0], paisOrigen[1]]
console.log(`Nombre: ${string}, Edad: ${number}`);