// 1. Declara una tupla que almacene el nombre de un estudiante (string), su
// promedio (número), y si ha aprobado (booleano).
// 2. Inicializa la tupla con los valores "Ana", 8.5, true.
// 3. Crea una segunda tupla con los valores "Pedro", 6.2, true.
// 4. Modifica la nota de Pedro a 4.9 y actualiza el valor de aprobado a false.
// 5. Muestra por consola la información de ambos estudiantes.

let estudiante: [string, number, boolean];

estudiante = ["Ana", 8.5, true];

let estudianteDos: [string, number, boolean];
estudianteDos = ["Pedro", 6.2, true];

estudianteDos[1]= 4.9;
estudianteDos[2]= false;

console.log('Estudiante uno ', estudiante);
console.log('Estudiante dos ', estudianteDos);



console.log('Atualización ', estudianteDos);
