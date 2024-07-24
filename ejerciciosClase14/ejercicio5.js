/**Escribe un programa en JavaScript para contar cuántas veces el usuario
menciona sus flores favoritas. Utiliza un array para almacenar las flores
favoritas y realiza las siguientes acciones:

 */

//1. Inicializa un array vacío para almacenar las flores favoritas.
let floresFavoritas = [];

//2. Pregunta al usuario por sus tres flores favoritas utilizando prompt y
//agrega cada una al array (aquí usa un método de los vistos en Arrays)

const prompt = require("prompt-sync")({ sigint: true });

for (let index = 1; index <= 3; index++) {
    let flor = prompt(`Por favor, ingresa tu flor favorita número ${index}:`)
    floresFavoritas.push(flor);
}

/**3. Pregunta al usuario por una flor específica y verifica si está entre sus
favoritas (aquí usa un método de los vistos en Arrays) */

let buscarFlor = prompt('Ingresa una flor para verificar si está en tu lista de favoritas:');


/**4. Muestra por consola cuántas de las flores favoritas se mencionaron.
Pista: Se utiliza el método includes. */

if (floresFavoritas.includes(buscarFlor)) {
    console.log(`La flor '${buscarFlor}' está en tu lista de favoritas.`);
  } else {
    console.log(`La flor '${buscarFlor}' no está en tu lista de favoritas.`);
  }
console.log('Tus flores favoritas son:');
floresFavoritas.forEach((flor, index) => {
  console.log(`${index + 1}. ${flor}`);
});
