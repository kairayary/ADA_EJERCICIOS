const net = require('net');

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', (data) => {
        console.log('Mensaje recibido del cliente: ' + data.toString());
        // Responder con el mismo mensaje recibido
        socket.write(data);
    });

    
    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    
    socket.on('error', (err) => {
        console.error(`Error: ${err.message}`);
    });
});
server.listen(5000, () => {
    console.log('Servidor TCP escuchando en el puerto 5000');

})