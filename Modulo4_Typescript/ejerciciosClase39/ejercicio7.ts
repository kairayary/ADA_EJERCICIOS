// Crea una función llamada aumentarSalario que acepte un objeto
// empleado con las propiedades nombre (string) y salario (number), y un número
// que represente el porcentaje de aumento. La función debe aumentar el salario
// del empleado y devolver el nuevo salario. Muestra en la consola el resultado.

function aumentarSalario(empleado:{nombre: string, salario: number},porcetajeAumento: number) {
    let aumento = empleado.salario * (porcetajeAumento/ 100);
    empleado.salario += aumento;

    return empleado.salario;
};


let empleado = {
    nombre: "Manuel",
    salario: 500000
};


let nuevoSalario: number = aumentarSalario(empleado, 10);
console.log(`El nuevo salario de ${empleado.nombre} es: ${nuevoSalario}`); 