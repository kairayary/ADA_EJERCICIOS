// 1. Declara una tupla para representar un libro con la siguiente información:
// título (string), año de publicación (número) y si está disponible (booleano).
// 2. Inicializa la tupla con los valores: "El principito", 1943, true.
// 3. Imprime el título del libro y el año de publicación.
// 4. Cambia el valor de disponibilidad a false y muestra el nuevo valor por
// consola.

let libro : [string, number, boolean];

libro =["El principito", 1943, true];

console.log('El titulo del libro es ', libro[0] + 'el año de publiceción es ', libro[1]);


libro[2]= false;

console.log('Una vez modificado el valor el libro queda ', libro);