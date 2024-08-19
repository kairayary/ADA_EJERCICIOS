

const net = require('net');

// Almacenar las conexiones de los clientes
let clientes = []; //parte de la actividad extra

const server = net.createServer();

server.on('connection', (socket) => {

    console.log('Cliente conectado');

    // Añadir el nuevo cliente al array
    clientes.push(socket); //actividad extra

    socket.on('data', (data) => {
        console.log('\nEl cliente ' + socket.remoteAddress + ':' + socket.remotePort + ' dice:' + data);

        // Enviar el mensaje a todos los clientes conectados
        clientes.forEach((client) => {
            if (client !== socket) {  // No enviar el mensaje al mismo cliente que lo envió
                client.write('Otro cliente dijo: ' + data);
            }
        });

        socket.write('Mensaje Recibido!!!\n');

    });

    // Manejar la desconexión del cliente
    socket.on('end', () => {
        console.log('Cliente desconectado.');
        // Eliminar el cliente del array cuando se desconecta
        clientes = clientes.filter((client) => client !== socket);
    });

    socket.on('close', () => {
        console.log('Cliente desconectado.');
    });

    socket.on('error', (err) => {
        console.log(err.message);

    });
});


//Inicio del servidor el en Puerto 6000

server.listen(6000, () => {
    console.log('Servidor TCP escuchando en el puerto 6000');

})

