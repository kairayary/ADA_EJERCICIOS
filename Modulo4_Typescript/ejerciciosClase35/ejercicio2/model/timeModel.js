
function tiempoActual() {
    // new Date() crea una instancia del objeto Date que contiene la fecha y hora actuales
    // toLocaleTimeString() formatea la hora a una cadena local de tiempo
    return new Date().toLocaleTimeString();
}

module.exports = tiempoActual;
