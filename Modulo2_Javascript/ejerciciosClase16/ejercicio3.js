/**Nos dejaron un array con las vueltas que dio una corredora entrenando en distintos momentos para una maratón.Nuestro desafío será crear la variable totalVueltas y almacenar en ella el total, usando el método reduce.
Además de hacer esto, deberemos realizar las siguientes operaciones:

⦁	Calcular el nuevo total de vueltas usando reduce: Después de todas las operaciones, recalculamos el total de vueltas utilizando reduce.
 */
const prompt = require("prompt-sync")({ sigint: true });

let vueltas =[5, 8, 12, 3, 22];

//⦁	Añadir una vuelta al principio del array: Usamos unshift para agregar la vuelta 7 al principio del array vueltas.

vueltas.unshift(7);

//⦁	Eliminar la última vuelta del array: Usamos pop para eliminar la última vuelta del array y guardarla en la variable ultimaVuelta.

vueltas.pop();

//⦁	Verificar si la vuelta 10 está en el array y agregarla al final si no está presente: Usamos includes para verificar si la vuelta 10 está en el array y push para agregarla al final si no está.

let buscarVuelta = parseInt(prompt('Indica el número de vuelta que desea buscar '))

if (vueltas.includes(buscarVuelta)) {
    console.log(`La vuelta ${buscarVuelta} está en la lista.`);
}else{
    vueltas.push(buscarVuelta);
    console.log(vueltas);
}

//⦁	Eliminar la primera vuelta del array: Usamos shift para eliminar la primera vuelta del array y guardarla en la variable primeraVuelta.

let primeraVuelta = vueltas.shift();

console.log(vueltas);

//⦁	Verificar si la vuelta 15 está en el array y agregarla al principio si no está presente: Usamos includes para verificar si la vuelta 15 está en el array y unshift para agregarla al principio si no está.

let buscar_vuelta = parseInt(prompt('Cuál vuelta quieres verificar? buscar_vuelta '))

if (vueltas.includes(buscar_vuelta)) {
    console.log(`La vuelta ${buscar_vuelta} está en la lista.`);
}else{
    vueltas.unshift(buscar_vuelta);
    console.log(vueltas);
}