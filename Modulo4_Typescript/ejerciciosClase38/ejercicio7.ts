// Usa un tipo literal para declarar una variable que solo acepte uno de los valores: 
// "Lunes", "Martes", "Miércoles". Intenta asignar otros valores y observa el error en 
// TypeScript. 

let diaSemana : "Lunes" | "Martes"| "Miércoles";

diaSemana = "Lunes";

console.log('Ejecución correcta ', diaSemana);

// diaSemana = "Jueves"; //Error: Type '"Jueves"' is not assignable to type '"Lunes" | "Martes" | "Miércoles"'.