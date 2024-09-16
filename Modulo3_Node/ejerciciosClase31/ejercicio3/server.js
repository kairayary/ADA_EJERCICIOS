const net = require('net');
const { v1: uuidv1 } = require('uuid');

//Crear el servidor 
const server = net.createServer((socket) => {

    //Para generar un UUID v1 basado en el tiempo y la dirección MAC
    const clientUUID = uuidv1();

    //Creación del objeto JSON  a enviar
    const response = {
        uuid: clientUUID,
        message: 'Este es tu UUID v1 basado en tiempo y la dirección MAC'
    };

    //Envio de el objeto JSON al cliente
    socket.write(JSON.stringify(response));

    //Manejo de desconexión del cliente
    socket.on('end', () => {
        console.log('El cliente se ha desconectado');

    });

    //Manejo de errores 
    socket.on('error', (err) => {
        console.error('Error con la conexión:', err);
    });
});

// Configurar el servidor para que escuche en el puerto 8080
server.listen(8080, () => {
    console.log('Servidor TCP escuchando en el puerto 8080');
  });