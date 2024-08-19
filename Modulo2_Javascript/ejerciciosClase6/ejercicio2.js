/**Escribe un programa que pida al usuario tres números y determine cuál es el mayor de los
tres. Muestra el número mayor en la consola.

Pista: En este ejercicio utiliza if, else if y else. Tambien no olvides
usar “let” para definir variables.
Pista 2: Investiga que es parseFloat, ya que este ejercicio lo
necesitaras. */

const prompt = require("prompt-sync")({ sigint: true });

let numOne, numTwo, numThree;

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

do {
    numThree = parseFloat(prompt('Ingrese el tercer número: '));
    if (isNaN(numThree)) {
        console.log('Por favor ingrese un número válido');
    }
} while (isNaN(numThree));

let mayor;

if (numOne>=numTwo && numOne>=numThree ) {
    mayor = numOne
} else if(numTwo>=numOne && numTwo>= numThree) {
     mayor = numTwo
}else{
    mayor = numThree
}

console.log(`El número mayor es: ${mayor}`);