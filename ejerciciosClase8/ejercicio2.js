/**
 * Define dos constantes, RANGO_MINIMO y RANGO_MAXIMO, con valores numéricos de tu elección.
 *  Pide al usuario que ingrese un número y verifica si está dentro del rango definido 
 * por las constantes.

 */

const prompt = require("prompt-sync")({ sigint: true });

const RANGO_MINIMO = 18;
const RANGO_MAXIMO = 65;

do {
   numero = parseInt(prompt('Ingrese su edad: '));
    if (isNaN(numero )) {
        console.log('Por favor ingrese un número válido');
    }
} while (isNaN(numero ));


if (numero >= RANGO_MINIMO && numero  <= RANGO_MAXIMO) {
    console.log('Usted se encuentra el rango permitido');
}else{
    console.log('Esta fuera de rango');
}