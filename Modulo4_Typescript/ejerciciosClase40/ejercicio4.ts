// 1. Crea un array que contenga los nombres de tus 5 frutas favoritas.
// 2. Usa un método para añadir otra fruta al final del array.
// 3. Encuentra el índice de una fruta específica (por ejemplo, "Manzana")
// dentro del array.
// 4. Elimina la última fruta y muestra el array actualizado por consola.

let frutas: Array<string> = ['Mango', 'Piña', 'Maracuya', 'Fresa', 'Guanabana'];

frutas.push('Jobo');

console.log('Nuevo fruta ', frutas);

console.log('Indice de fruta específica ', frutas.indexOf('Maracuya'));

frutas.pop();

console.log('Frutas actualizadas', frutas);


