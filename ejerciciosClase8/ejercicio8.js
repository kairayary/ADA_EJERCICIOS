
/**
 * Pide al usuario que ingrese las longitudes de los tres lados de un triángulo.
 *  Determina y muestra si el triángulo es equilátero, isósceles o escaleno. 
 */

const prompt = require('prompt-sync')();

let lado1 = parseFloat(prompt("Ingrese una longitud: "));
let lado2 = parseFloat(prompt("Ingrese una longitud: "));
let lado3 = parseFloat(prompt("Ingrese una longitud: "));

if (lado1 === lado2 && lado2 === lado3) {
    console.log("Es un triángulo equilatero.")
}
else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
    console.log("Es un triángulo isósceles.")
}
else{
    console.log("El triángulo es escaleno.")
}