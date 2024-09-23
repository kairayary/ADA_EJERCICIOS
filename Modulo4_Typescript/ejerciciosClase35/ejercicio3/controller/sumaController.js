const calcular = require('../model/sumaModel');

function calcularSuma(a, b) {
    return calcular(Number(a), Number(b))
}


module.exports = calcularSuma;