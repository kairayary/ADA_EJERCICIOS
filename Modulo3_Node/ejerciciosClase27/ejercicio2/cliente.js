const net = require('net');

// Función para crear un cliente
function crearCliente(id) {
    const client = net.createConnection({ port: 9000 }, () => {
        console.log(`Cliente ${id} conectado`);
        client.write(`Mensaje del cliente ${id}`);
    });

    client.on('data', (data) => {
        console.log(`Cliente ${id} recibió: ${data}`);
        client.end(); // Cerrar la conexión después de recibir la respuesta
    });

    client.on('error', (err) => {
        console.log(`Cliente ${id} error: ${err.message}`);
    });
}

// Crear 3 clientes
for (let i = 1; i <= 3; i++) {
    crearCliente(i);
}
