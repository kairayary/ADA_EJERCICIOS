
const net = require('net');

//array  para almacenar todas las conexiones activas de los clientes
let clientes = [];

const server = net.createServer();

server.on('connection', (socket) => {
    console.log('Cliente Conectado');

    // Almacenar la información del cliente
    const infoCliente = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`Cliente conectado: ${infoCliente}`);
    
    clientes.push(socket);

    socket.on('data', (data) => {

         console.log(`Mensaje de ${infoCliente}: ${data}`);
         socket.write('Mensaje recibido\n');

    });

    

    socket.on('end', () => {
        console.log(`Cliente desconectado: ${infoCliente}`);
        // Eliminar el cliente del array de clientes activos
        clientes = clientes.filter((cliente) => cliente !== socket);
    });

    socket.on('error', (err) => {
        console.log(err.message);

    });
});

server.listen(9000, () => {
    console.log('Servidor TCP escuchando en el puerto 9000');
});