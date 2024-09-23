const { siguienteSecuencia } = require('../model/echoModel');

function  manejarMensaje(message) {
  const seqNum = siguienteSecuencia();
  return `Mensaje #${seqNum}: ${message}`;
}

module.exports = { manejarMensaje };
