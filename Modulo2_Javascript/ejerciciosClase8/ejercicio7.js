/**
 * Pide al usuario que ingrese su peso en kilogramos y conviértelo a libras.
 *  Muestra el resultado con un mensaje. (Averigua como pasar de kg a libras, Pista: 2.20462)

 */

const prompt = require("prompt-sync")({ sigint: true });

let peso = parseInt(prompt('Ingrese su peso en Kg'))

let pesoLibra= peso * 2.20462;