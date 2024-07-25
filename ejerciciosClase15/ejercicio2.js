/**Declara una variable que contenga una matriz de 5x5 llena de puros
numeros enteros y positivos. Luego, escribe un algoritmo para sumar
todos los numeros en la matriz. */

let matriz =[
    [1, 3, 27, 520, 4], 
    [5, 5, 10, 100, 8], 
    [9, 1, 15, 102, 4],
    [5, 5, 40, 100, 4],
    [4, 7, 90, 333, 2],
]

let suma = 0;

for (let fila= 0; fila< matriz.length; fila++) {
    for (let columna= 0; columna < matriz[fila].length; columna++) {
         
        suma += matriz[fila][columna];
    }
    
}

console.log("La suma de los valores es: " + suma);