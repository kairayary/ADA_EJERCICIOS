/**Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail a los alumnos desaprobados para acordar un recuperatorio. 
Por lo tanto, necesitamos dos listas: una lista que almacene todos los aprobados y otra los desaprobados. 
Deberemos guardarlos en las variables aprobados y desaprobados respectivamente.
Además de hacer esto, deberemos realizar las siguientes operaciones:
*/
const prompt = require("prompt-sync")({ sigint: true });

let estudiantes = [
  {nombre: 'John', promedio: 8.5, aprobado: true},
  {nombre: 'Jane', promedio: 7, aprobado: true},
  {nombre: 'June', promedio: 3, aprobado: false},
  {nombre: 'Jake', promedio: 4, aprobado: false},
  {nombre: 'Jill', promedio: 9, aprobado: true}
];

// ⦁	Filtra los estudiantes en dos listas: aprobados y desaprobados.
let aprobado = estudiantes.filter(estudiante => estudiante.aprobado);
let desaprobado = estudiantes.filter(estudiante => !estudiante.aprobado);

//⦁	Manipula la lista de aprobados agregando un estudiante al inicio y otro al final.

aprobado.unshift({nombre: 'Julia', promedio: 4.5, aprobado: false});
aprobado.push({nombre: 'Joseph', promedio: 6.7, aprobado: true});
console.log(aprobado);
//⦁	Manipula la lista de desaprobados eliminando al primero y al último estudiante.

desaprobado.shift();
desaprobado.pop();
console.log(desaprobado);
//⦁	Utiliza map junto con indexOf para buscar un estudiante específico en la lista de aprobados 
//y muestra su índice si está presente.

let buscarNombre = prompt('Indique el nombre a verificar ');
let nombresAprobados = aprobado.map(estudiante => estudiante.nombre);
let indiceEstudianteAprobado = nombresAprobados.indexOf(buscarNombre);

if (indiceEstudianteAprobado !== -1) {
  console.log(`El estudiante ${buscarNombre} está en la lista de aprobados en la posición ${indiceEstudianteAprobado}.`);
} else if (indiceEstudianteAprobado == -1) {
  console.log(`El estudiante ${buscarNombre} NO está en la lista de aprobados.`);
}else{
  console.log(`El estudiante ${buscarNombre}  no se encuentra registrado.`);
}

//⦁	Utiliza includes para verificar si un estudiante está en la lista de desaprobados y
// muestra un mensaje indicando su presencia.

let buscarNombreDesaprobado = prompt('Indique el nombre a verificar ');
let nombresDesaprobados = desaprobado.map(estudiante=>estudiante.nombre);
if (nombresDesaprobados.includes(buscarNombreDesaprobado)) {
  console.log(`El nombre '${buscarNombreDesaprobado}' está en en la lista de desaprobados.`);
} else {
  console.log(`El nombre '${buscarNombreDesaprobado}' NO está en en la lista de desaprobados.`);
}


//⦁	Muestra las listas de aprobados y desaprobados actualizadas después de todas las operaciones.
console.log('Lista de aprobados actualizada:', aprobado);
console.log('Lista de desaprobados actualizada:', desaprobado);