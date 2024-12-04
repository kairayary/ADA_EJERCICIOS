// Crea una función genérica que tome un parámetro de cualquier tipo y lo
// devuelva. Prueba la función con diferentes tipos de datos. 

function generica<T>(argumento:T): T {
    return argumento;
}

//  string
const resultadoString = generica<string>("Hola Chicas");
console.log(resultadoString); 

//  número
const resultadoNumero = generica<number>(72);
console.log(resultadoNumero); 

// booleano
const resultadoBooleano = generica<boolean>(false);
console.log(resultadoBooleano);

//  array
const resultadoArray = generica<number[]>([1, 2, 3, 4]);
console.log(resultadoArray); 