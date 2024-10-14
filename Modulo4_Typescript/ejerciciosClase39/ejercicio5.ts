//  Crea una función llamada sumarTodos que acepte una cantidad
// indefinida de números y devuelva su suma. Luego, llama a la función con varios
// números y muestra el resultado en la consola.



function sumarTodos(...numeros: number[]): number {
    let suma: number = 0;

    
    for (let index = 0; index < arguments.length; index++) {
        suma += arguments[index] as number;
    }
    return suma;
}


let result: number = sumarTodos(1, 2, 3);
console.log("La suma de los números es:", result); 
