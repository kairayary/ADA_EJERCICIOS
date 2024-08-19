/**Escribe un programa que pida al
usuario dos números y una operación (suma, resta, multiplicación o
división). Luego, realiza la operación indicada y muestra el resultado en
la consola.
Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides
usar “let” para definir variables.
Pista 2: Investiga que es parseFloat, ya que este ejercicio lo
necesitaras. */


const prompt = require('prompt-sync')({ sigint: true });

let numOne, numTwo;
let result;
let choice = '';

while (choice !== '5') {
    do {
        numOne = parseFloat(prompt('Ingrese el primer número: '));
        if (isNaN(numOne)) {
            console.log('Por favor ingrese un número válido');
        }
    } while (isNaN(numOne));
    
    do {
        numTwo = parseFloat(prompt('Ingrese el segundo número: '));
        if (isNaN(numTwo)) {
            console.log('Por favor ingrese un número válido');
        }
    } while (isNaN(numTwo));

    console.log("Seleccione una opción:");
    console.log("1. Suma");
    console.log("2. Resta");
    console.log("3. Multiplicación");
    console.log("4. División");
    console.log("5. Salir");

     choice = prompt('Ingrese su elección: ');
    
    if (choice === '1') {
        console.log("Seleccionó opción 1 realizar una suma");
        result = numOne + numTwo;
        console.log(`La suma de los números ingresados ${numOne} y ${numTwo} es : ${result}`);

    } else if (choice === '2') {
        console.log("Seleccionó Opción 2 realizar una resta ");
        result = numOne - numTwo;
        console.log(`La resta de los números ingresados ${numOne} y ${numTwo} es : ${result}`);

    } else if (choice === '3') {
        console.log("Seleccionó Opción 3 realizar una multiplicación ");
        result = numOne * numTwo;
        console.log(`La multiplicación de los números ingresados ${numOne} y ${numTwo} es : ${result}`);

    } else if (choice === '4') {
        console.log("Seleccionó Opción 4 realizar una división ");
        result = numOne / numTwo;
        console.log(`La división de los números ingresados ${numOne} y ${numTwo} es : ${result}`);

    } else if (choice === '5') {
        console.log("Saliendo...");
        break;
    } else {
        console.log("Opción no válida, por favor intente de nuevo.");
    }

    
}

