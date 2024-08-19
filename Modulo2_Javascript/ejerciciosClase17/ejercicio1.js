/**Para practicar la implementación del algoritmo de búsqueda binaria,
vamos a empezar con un ejemplo simple. Quiero que se familiaricen con
la sintaxis del mismo, por lo que no hare énfasis en los datos, sino en la
solución.
Dada la siguiente lista:

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
Utilizar el algoritmo de búsqueda binaria para responder los siguientes
ítems:
o ¿Cuál es la posición del número 1?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 6?
o ¿Cuál es la posición del número 9?
o ¿Cuál es la posición del número 11?
Sabemos que responder estas preguntas es extremadamente fácil, ya
que podemos leer el array, y determinar con un cálculo visual la posición
de cada elemento, pero, la propuesta que les hago es que codeen un
algoritmo de búsqueda binaria, que “busque” ese número, por ejemplo, el
6, y nos indique por consola la posición del mismo.
El objetivo de este ejercicio es que puedan practicar la sintaxis sin añadir
complejidad extra. */

function busquedaBinaria(list, numero) {
    let bajo = 0;
    let alto = list.length -1; 

    while (bajo <= alto) {
        const mitad = Math.floor((bajo + alto)/2);

        const adivinar = list[mitad];
        if (adivinar === numero) {
            return mitad;
        }

        if (adivinar > numero) {
            alto = mitad - 1;
        }else{
            bajo = mitad + 1;
        }
    }

    return null;
}

let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

let buscar = 6; 
console.log(busquedaBinaria(list, buscar));