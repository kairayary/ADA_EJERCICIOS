/**Solicita al usuario la cantidad de productos comprados y el precio unitario.
Usa una función flecha para calcular el total con descuento según la cantidad. */

const prompt = require("prompt-sync")({ sigint: true });

const cantidad = parseInt(prompt("Ingrese la cantidad de productos comprados:"));
const precioUnitario = parseFloat(prompt("Ingrese el precio unitario del producto:"));

const calcularTotalConDescuento = (cantidad, precioUnitario) => {
    let total = 0;
    for (let i = 1; i <= cantidad; i++) {
        total += precioUnitario;
    }

    let descuento = 0;

    if (cantidad >= 1 && cantidad <= 20) {
        descuento = 0.20; // 10% de descuento
    } else if (cantidad > 20) {
        descuento = 0.50; // 20% de descuento
    }

    return total - (total * descuento);
};

const totalConDescuento = calcularTotalConDescuento(cantidad, precioUnitario);
console.log(`El total a pagar con descuento es: $${totalConDescuento.toFixed(2)}`)