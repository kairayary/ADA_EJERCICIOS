
const net = require('net');
const obtenerHora = require('./controller/timeController'); // Asegúrate de que la ruta sea correcta

const server = net.createServer((socket) => {
    console.log('Cliente conectado');

    socket.on('data', () => {
        const currentTime = obtenerHora(); // Llama a la función del controlador para obtener la hora actual
        socket.write(`Hora actual: ${currentTime}`);
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });

    socket.on('error', (err) => {
        console.error('Error en la conexión con el cliente:', err);
    });
});

server.listen(4000, () => {
    console.log('Servidor TCP escuchando en el puerto 4000');
});
