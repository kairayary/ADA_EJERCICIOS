// controller/timeController.js
const tiempoActual = require('../model/timeModel'); 

function obtenerHora() {
    return tiempoActual(); // Llama a la función del modelo para obtener la hora actual
}

module.exports = obtenerHora;

