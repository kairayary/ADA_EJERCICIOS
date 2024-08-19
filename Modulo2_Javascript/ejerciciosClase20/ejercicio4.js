/**Tenemos un array en una variable numeros con números al azar.
Usá la función map para crear un nuevo array incrementando cada
valor del array en 10, y guardarlo en la variable numerosMasDiez
Mostrar por consola el array original y el nuevo */

const numeros = [1, 2, 3, 4, 5];

let numerosMasDiez;

let nuevoArray = numeros.map(function(numero) {
    let numerosMasDiez = numero + 10;
    return numerosMasDiez
})

console.log(`Array original ${numeros} `);

console.log(`Array nuevo ${nuevoArray} `);