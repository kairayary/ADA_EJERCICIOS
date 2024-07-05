/**
 * Declara una variable nombre y pide al usuario que ingrese su nombre.
 *  Verifica si el nombre ingresado es igual a tu nombre.

 */

const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt('Por favor ingrese su nombre ' );

if (nombre === 'Kaira') {
    console.log('Nuestros nombres son iguales');
}else{
    console.log('Los nombres son distintos');
}