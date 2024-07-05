/** Escribe un programa que
calcule el precio final de un producto después de aplicar un descuento.
Pide al usuario que ingrese el precio original y el porcentaje de
descuento, y muestra el precio final.
 */

const prompt = require('prompt-sync')();

let precioOriginal = parseFloat(prompt('Ingrese el valor del producto '));
let descuento = parseFloat(prompt('Indique cuanto de descuento aplicar '));

let total = descuento / 100

let precioFinal = precioOriginal * (1 - total);
console.log(`Precio original de producto ${precioOriginal} pesos, descuento a aplicar ${descuento}%,  el precio final es de  ${precioFinal} pesos`);