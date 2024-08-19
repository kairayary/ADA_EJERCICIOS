/**Tenemos un array en una variable numeros con números al azar. Usar la
función map para crear un nuevo array multiplicando cada valor del array
por 2, y guardarlo en la variable dobles. Mostrar por consola el array
original y el nuevo */

const numeros = [3, 7, 13, 99];

let dobles;

let nuevoArray = numeros.map(function (numero) {
    let dobles = numero * 2;
    return dobles;
});

console.log(`Array original ${numeros} `);

console.log(`Array nuevo ${nuevoArray} `);