/**Al ejercicio anterior vamos a aumentarle la dificultad un poco, y de paso,
aplicamos lo aprendido en semanas anteriores. Quiero que hagan lo
mismo del ejercicio anterior (buscar la posición de un número en un
array), pero partiendo de esta lista:

let list = [12, 3, 5, 7, 1, 22, 47, 100]

Para aplicar búsqueda binaria, deberán ordenar primero la lista, de menor
a mayor, utilizando bubble sort.  */

let list = [12, 3, 5, 7, 1, 22, 47, 100];

for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list.length - 1; j++) {
        if (list[j]> list[j +1 ]) {
           let temporal = list[j];
           list[j]= list[j + 1]
           list[j +1] = temporal
        }
     
    }
    
}

console.log(list);

/**Luego, respondan las siguientes
preguntas:
o ¿Cuál es la posición del número 12?
o ¿Cuál es la posición del número 5?
o ¿Cuál es la posición del número 22?
o ¿Cuál es la posición del número 100? */

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

let buscar12 = 12; 
console.log('La posición del número 12 es ' + busquedaBinaria(list, buscar12));

let buscar5 = 5; 
console.log('La posición del número 5 es ' + busquedaBinaria(list, buscar5));

let buscar22 = 22; 
console.log('La posición del número 22 es ' + busquedaBinaria(list, buscar22));

let buscar100 = 100; 
console.log('La posición del número 100 es ' + busquedaBinaria(list, buscar100));