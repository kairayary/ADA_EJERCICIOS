const net = require('net');
const calcularSuma = require('./controller/sumaController');

const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        const numbers = data.toString().trim().split(' ');
        if (numbers.length === 2) {
            const result = calcularSuma(numbers[0], numbers[1]);
            socket.write(`La suma es: ${result}`);
        } else {
            socket.write('Por favor, envía dos números separados por un espacio.');
        }
    });

    socket.on('end', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(3000, () => {
    console.log('Servidor TCP escuchando en el puerto 3000');
});
