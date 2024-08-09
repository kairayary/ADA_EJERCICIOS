/**Tenemos un array llamado notasDeTPs con números del 1 al 10, que
representan las notas de los distintos trabajos prácticos entregados por el
curso de Ada.
Usando reduce, queremos calcular la nota promedio final de trabajos
prácticos (el promedio se calcula sumando todas las notas y dividiéndolo
por la cantidad de notas). */

const notasDeTPs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let notaPromedio = notasDeTPs.reduce((acum, numero)=>acum + numero, 0)
let promedio = notaPromedio / notasDeTPs.length;
 console.log(`El promedio de las notas es ${promedio} `);