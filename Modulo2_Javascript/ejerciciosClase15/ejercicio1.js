/**Dada una matriz, recorrer sus valores y sumar solo los números que estén por
encima o sean iguales a 10, pero menores que 1000.
 */

let matriz =[
    [10, 3, 2, 1, 4, 7], 
    [5, 5, 10, 100, 4], 
    [5, 125, 10, 1020, 4],
    [5, 5, 5097, 100, 4],
]


let suma = 0;

for (let fila = 0; fila< matriz.length; fila++) {
    for (let columna= 0; columna< matriz[fila].length; columna++) {
        let numeros = matriz[fila][columna];
        if (numeros >= 10 && numeros < 1000) {
            suma += numeros;
        }
    }
}

console.log("La suma de los números es: " + suma);