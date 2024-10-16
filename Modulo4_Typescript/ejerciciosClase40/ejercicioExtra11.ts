// 1. Declara un array de números del 1 al 10.
// 2. Usa un método para encontrar si el número 5 está presente en el array.
// 3. Encuentra el índice del número 8 en el array.
// 4. Invierte el orden de los números en el array.
// 5. Muestra el array final por consola.

let numero : Array<number>= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Esta el númro 5 en el array? ',numero.includes(5));
console.log('El índice del número 8 es ', numero.indexOf(8));
console.log('Orden invertido ', numero.reverse());


