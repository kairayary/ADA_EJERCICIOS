
const net = require('net');

const client = net.createConnection({ port: 4000 }, () => {
    console.log('Conectado al servidor');
    client.write('Solicitar hora'); // Envía un mensaje al servidor solicitando la hora
});

client.on('data', (data) => {
    console.log(`Respuesta del servidor: ${data.toString()}`);
    client.end(); // Cierra la conexión después de recibir la respuesta
});

client.on('end', () => {
    console.log('Desconectado del servidor');
});

client.on('error', (err) => {
    console.error('Error en la conexión con el servidor:', err);
});
