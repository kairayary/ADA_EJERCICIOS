const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');
    
    socket.write('Bienvenidos al servidorTPC. Envia "status"para verificar estado.')
   
    // Manejo de datos recibidos del cliente
    socket.on('data', (data) => {
        const mensaje = data.toString().trim();
        console.log('Mensaje recibido del cliente:', mensaje);

        // Para responder al cliente con el mismo mensaje
        if (mensaje === 'status') {
            socket.write('Servidor está funcionando correctamente.');
        } else {
            socket.write(`Servidor recibió: ${mensaje}`);
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    sendMessageFromServer(socket);
    
    socket.on('error', (err) => {
        console.error('Error:', err.message);
    });
});


server.listen(10000, () => {
    console.log('Servidor escuchando en el puerto 10000');
});


