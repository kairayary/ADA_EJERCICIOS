const net = require('net');
const { v4: uuidv4 } = require('uuid');


const server = net.createServer((socket) => {

    //Para generar un UUID único para cada conexión
    const clientUUID = uuidv4();

    //Para enviar el UUID al cliente
    socket.write(`Tu UUID es: ${clientUUID}\n`);
    console.log(`Cliente conectado con UUID: ${clientUUID}`);

    // Mantener la conexión activa
    socket.on('data', (data) => {
        console.log(`Cliente (${clientUUID}) dice: ${data.toString().trim()}`);
        // Puedes procesar más datos del cliente si lo deseas
    });

    //Para la desconexión del cliente
    socket.on('end', () => {
        console.log('Cliente Desconectado...');

    });

    // Manejar errores en la conexión
    socket.on('error', (err) => {
        console.error(`Error con el cliente ${clientUUID}:`, err);
    });
});



//Configuración del servidor

server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
});