/**Ejercicio 3: Servidor TCP con UUID v1 y JSON
Objetivo:
Crear un servidor TCP que responda con un objeto JSON que contenga
un UUID v1 basado en el tiempo y la dirección MAC.
Pasos:
1. Servidor TCP (server.js):
o Importar los módulos net y uuid.
o Crear un servidor TCP que genere un UUID v1 basado en el
tiempo.
o Enviar un objeto JSON con el UUID al cliente.
2. Cliente TCP (client.js):
o Importar el módulo net.
o Conectar al servidor TCP, recibir el objeto JSON, parsearlo y
mostrar el UUID en la consola.
 */

// Importar el módulo net
const net = require('net');

// Conectar al servidor TCP
const client = net.createConnection({ port: 8080 }, () => {
  console.log('Conectado al servidor');
});

// Recibir el objeto JSON del servidor
client.on('data', (data) => {
  const response = JSON.parse(data.toString());
  console.log(`Recibido del servidor: ${response.message}`);
  console.log(`UUID v1: ${response.uuid}`);
  client.end(); // Terminar la conexión después de recibir el UUID
});

// Manejar el cierre de la conexión
client.on('end', () => {
  console.log('Desconectado del servidor');
});

// Manejar errores en la conexión
client.on('error', (err) => {
  console.error('Error en la conexión:', err);
});