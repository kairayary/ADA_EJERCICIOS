/**Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una
función flecha para calcular el precio final. */

const prompt = require("prompt-sync")({ sigint: true });

let precioProducto = parseFloat(prompt('Ingrese el valor del producto '));
let porcentajeIva = parseFloat(prompt('Ingrese el porcentaje del IVA '));

let calcular = (precioProducto, porcentajeIva)=> precioProducto * (1 + porcentajeIva/100)

let precioFinal = calcular()
console.log(`El precio final del producto con IVA es: $${precioFinal}`);