// Declara un array de números con los valores [5, 10, 15, 20, 25].
// 2. Imprime el tercer elemento del array.
// 3. Añade el número 30 al final del array.
// 4. Elimina el primer número del array.
// 5. Muestra por consola la longitud actual del array.

let numeros: Array<number> = [5, 10, 15, 20, 25];
console.log('El tercer elemento del array es ',numeros[2]);

numeros.push(30);

console.log('Array luego de agregar un elemento',numeros);

numeros.shift();

console.log('Array después de eliminar el primer elemento ',numeros);

console.log('La longitud del array es ',numeros.length);



