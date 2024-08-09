/**Tenemos un array en una variable datos con números al azar, que
pueden ser tanto positivos como negativos
o Queremos eliminar todos los números negativos
o Con los números restantes, obtener el doble de cada uno
o Finalmente, obtener la suma de todos los números que obtuvimos */

const datos = [2, -4, 6, 0, 5, -1];

let resultado= datos.filter(dato=>dato >= 0).map(dato => dato *2).reduce((acum, dato)=> acum +dato, 0)
console.log(resultado);